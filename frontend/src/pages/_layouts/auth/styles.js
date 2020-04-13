import styled from 'styled-components';
import Split from 'react-split-pane';
import { darken } from 'polished';

export const Splitter = styled(Split)`
  height: 100%;
`;

export const FormSection = styled.div`
  display: inline-block;
  /* justify-content: space-between; */
  flex-direction: column;
  width: 100%;

  text-align: left;
  max-width: 450px;

  margin-top: 60px;

  > section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 80px;
      margin-right: 50px;
    }

    p {
      font-size: 40px;
      font-weight: 300;
    }
  }

  h1 {
    margin-top: 50px;
    font-size: 35px;
    opacity: 0.8;
  }

  p {
    font-size: 18px;
    opacity: 0.8;
    font-weight: 300;
  }

  form {
    display: flex;
    align-items: left;
    margin-top: 50px;
    justify-content: center;

    display: flex;
    flex-direction: column;

    label {
      opacity: 0.7;
      font-size: 16px;
      margin-bottom: 3px;
    }

    input {
      margin-bottom: 20px;
      border: 1px solid #eee;
      border-radius: 4px;
      height: 44px;
      color: #000;
      margin: 0 0 10px;
      padding: 0 15px;

      &::placeholder {
        color: #000;
        opacity: 0.7;
      }
    }

    > span {
      margin-bottom: 20px;
      color: #f64c75;
    }

    button {
      margin: 5px 0 0;
      background-color: #1497ee;
      color: #fff;
      height: 44px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background .2s;

      &:hover {
        background: ${darken(0.04, '#1497ee')}
      }
    }
  }

  a {
    margin-top: 20px;
    display: flex;
    color: #000;
    flex-direction: column;
    text-decoration: none;
    text-align: center;

    strong {
      font-size: 16px;
    }
  }
`;

export const FeatureSection = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  background: rgb(238,246,254);
  background: linear-gradient(180deg, rgba(238,246,254,1) 0%, rgba(212,237,250,1) 100%);

  section {
    display: flex;
    max-width: 600px;
    float: center;
    position: fixed;
    bottom: 0;
    left: 50%;
    margin: 0 auto;
    margin-bottom: 70px;
    background-color: #1497ee;
    padding: 10px 16px;
    border-radius: 4px;

    box-shadow: 0px 0px 9px 2px rgba(255, 255, 255, 0.1);

    flex-direction: row;

    img {
      width: 100px;
      height: 100px;
      margin-right: 25px;

      & {
        border: 1px solid ${darken(0.1, '#1497ee')};
        border-radius: 4px;
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      h3 {
        color: #eee;
        font-size: 14px;
        opacity: .9;
      }

      p {
        color: #eee;
        font-size: 13px;
      }
    }
  }

  img {
    resize: contain;
    width: 100%;
  }
`;
