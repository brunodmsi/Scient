import React, { useContext, useState, useEffect } from 'react';
import Icon from '~/components/Icon';

import { Context } from '~/context/AuthContext';
import api from '~/services/api';

import { Wrapper, Content, SurveyFinish } from './styles';
import SideBar from './Sidebar';
import Result from './Result';

export default function Questionary(){
  const { loggedInUserInfo } = useContext(Context);

  const [questions, setQuestions] = useState({});
  const [actualQuestion, setActualQuestion] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userStatus, setUserStatus] = useState('unanswered');

  useEffect(() => {
    const { id } = loggedInUserInfo();

    api.get(`/users/${id}`).then(({ data: user }) => {
      api.get('/questions').then(({ data: questions }) => {
        console.log(questions);
        setQuestions({
          data: questions,
          totalQuestions: questions.length,
          actualQuestionIndex: user.survey_done === true ? questions.length : 0
        });

        setActualQuestion(questions[0]);
      });

      if (user.survey_done && !user.result_given) {
        setUserStatus('survey_done');
      } else if (user.survey_done && user.result_given) {
        setUserStatus('result_given');
      } else {
        setUserStatus('unanswered')
      }
    })
  }, []);

  async function nextQuestion(chosenIndex) {
    console.log(questions);
    const lastQuestion = questions.actualQuestionIndex;
    const nextQuestion = questions.data[lastQuestion + 1];

    setQuestions({
      ...questions,
      actualQuestionIndex: lastQuestion + 1
    })

    setUserAnswers([
      ...userAnswers,
      {
        questionId: actualQuestion.id,
        chosenIndex,
      }
    ])

    setActualQuestion(nextQuestion);

    if (!nextQuestion) {
      setUserStatus('survey_done');

      const allAnswers = [
        ...userAnswers,
        {
          questionId: actualQuestion.id,
          chosenIndex,
        }
      ]

      try {
        await api.post('/survey', {
          answers: allAnswers
        });
      } catch (err) {
        console.log(err.response);
      }
    }
  }

  return(
   <Wrapper>
    <SideBar
      text={`${questions.actualQuestionIndex}/${questions.totalQuestions}`}
      progression={questions.actualQuestionIndex / questions.totalQuestions}
    />

    <Content>
      {userStatus === 'survey_done' ? (
        <SurveyFinish>
          <h1>Questionario finalizado!</h1>
          <p>Obrigado pela colaboracao, vamos processar os dados e lhe retornaremos por e-mail quando estivermos pronto.</p>
        </SurveyFinish>
      ) : userStatus === 'result_given' ? (
        <Result />
      ) : (
        <>
          <span>QUESTAO {questions.actualQuestionIndex + 1}/{questions.totalQuestions}</span>
          <h1>{actualQuestion && actualQuestion.title}</h1>

          <section>
            {actualQuestion && actualQuestion.options.map((option, index) => (
              <button key={index} onClick={() => nextQuestion(index)}>
                <span>
                  <Icon icon={option.icon} color={option.color} size={45} />
                </span>
                <p>{option.name}</p>
              </button>
            ))}
          </section>
        </>
      )}
    </Content>
   </Wrapper>
  )
}
