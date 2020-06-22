import React, { useContext, useState, useEffect } from 'react';
import Icon from '~/components/Icon';

import { Context } from '~/context/AuthContext';
import api from '~/services/api';

import { Wrapper, Content, SurveyFinish } from './styles';
import SideBar from './Sidebar';

export default function Questionary(){
  const [questions, setQuestions] = useState({});
  const [actualQuestion, setActualQuestion] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [surveyDone, setSurveyDone] = useState(false);

  useEffect(() => {
    api.get('/survey').then(({ data }) => {
      if (data.length === 0) {
        setSurveyDone(true);
      } else {
        api.get('/questions').then(({ data }) => {
          setQuestions({
            data,
            totalQuestions: data.length,
            actualQuestionIndex: 0
          });

          setActualQuestion(data[0]);
        })
      }
    })
  }, []);

  async function nextQuestion(chosenIndex) {
    const lastQuestion = questions.actualQuestionIndex;
    const nextQuestion = questions.data[lastQuestion + 1];

    setQuestions({
      ...questions,
      actualQuestionIndex: lastQuestion + 1
    })

    if (!nextQuestion) {
      setSurveyDone(true);

      await api.post('/survey', {
        userAnswers
      });
    } else {
      setUserAnswers([
        ...userAnswers,
        {
          questionId: actualQuestion.id,
          chosenIndex,
        }
      ])

      setActualQuestion(nextQuestion);
    }
  }

  return(
   <Wrapper>
    <SideBar
      text={`${questions.actualQuestionIndex}/${questions.totalQuestions}`}
      progression={questions.actualQuestionIndex / questions.totalQuestions}
    />

    <Content>
      {surveyDone ? (
        <SurveyFinish>
          <h1>Questionario finalizado!</h1>
          <p>Obrigado pela colaboracao, vamos processar os dados e lhe retornaremos por e-mail quando estivermos pronto.</p>
        </SurveyFinish>
      ) : (
        <>
          <span>QUESTAO {questions.actualQuestionIndex + 1}/{questions.totalQuestions}</span>
          <h1>{actualQuestion && actualQuestion.title}</h1>

          <section>
            {actualQuestion && actualQuestion.options.map((option, index) => (
              <button key={option.id} onClick={() => nextQuestion(index)}>
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
