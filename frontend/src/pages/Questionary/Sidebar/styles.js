import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import colors from '~/styles/colors';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 40px 30px;
  box-shadow: -10px 0px 10px 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  max-width: 450px;

  align-items: center;
  justify-content: center;

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80px;
      margin-right: 50px;
    }

    p {
      font-size: 40px;
      font-weight: 300;
    }
  }

  div {
    max-width: 300px;

    h3 {
      font-size: 25px;
      color: #3d3d4d;
    }

    p {
      font-size: 16px;
      color: #6c6c80;
    }
  }

  span {
    flex: 1;
    width: 100%;
    margin-top: 20px;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
  }
`;

export const ProgressBar = styled(CircularProgressbar)`
  height: 160px;
  width: 160px;
  align-self: center;

  margin-top: 120px;
  margin-bottom: 120px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  margin-bottom: auto;

  justify-content: center;

  div {
    display: flex;
    align-items: center;

    & + div {
      margin-top: 8px;
    }

    svg {
      margin-right: 10px;
    }

    span {
      font-size: 16px;
      color: #6c6c80;
    }
  }
`;
