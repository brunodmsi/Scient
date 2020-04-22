import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  background: #f6f8fc;
  min-width: 100vw;
  height: 100%;
  align-items: stretch;
`;

export const SurveyFinish = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;

  padding: 0 20px;

  h1 {
    font-size: 48px;
    color: #3d3d4d;
  }

  p {
    font-size: 35px;
    color: #737380;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  flex-direction: column;

  span {
    color: #6c6c80;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 40px;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    button {
      display: flex;
      padding: 50px 40px;
      min-width: 200px;

      background: #fff;
      flex-direction: column;
      border: 0;
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, .1);
      cursor: pointer;

      justify-content: center;
      align-items: center;

      & + button {
        margin-left: 50px;
      }

      span {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
      }

      p {
        font-size: 22px;
      }
    }
  }
`;
