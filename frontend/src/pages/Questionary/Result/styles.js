import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  width: 100%;

  h1 {
    font-size: 25px;

  }
`;

export const Results = styled.div`
  section {
    display: grid;
    grid-template-columns: repeat(6, 2fr);
    justify-content: center;

    p {
      word-wrap: break-word;
      max-width: 130px;
      font-size: 18px;
    }
  }

  .header {
    margin-bottom: 20px;
  }

  .bank {
    padding: 20px;
    background-color: #fefefe;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }

    :nth-child(odd) {
      background-color: #fafafa;

      :hover {
        background-color: ${shade(0.03, '#fafafa')}
      }
    }

    :hover {
      background-color: ${shade(0.03, '#fefefe')}
    }

    p {
      display: flex;
      align-items: center;
    }

    span {
      font-size: 20px;
    }
  }
`;
