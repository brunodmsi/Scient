import styled, { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: bordex-box;
    }

    body {
        font-family: sans-serif;
    }

    html,body,#root {
        height: 100%;
    }

`;
export const Container = styled.section`
  background: #fff;
  margin: 10px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  * {
    margin: 10px;
    padding: 0;
    outline: none;
    box-sizing: bordex-box;
  }

  img {
    width: 100px;
    height: 140px;
  }

  #signup {
    padding: 5px 40px;
    margin-left: 70px;
    border-radius: 4px;
    color: #000;
    background: #f0ffff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #signups {
    padding: 0 95px;
    margin-left: 16px;
    font-family: sans-serif;
    font-size: 14px;
  }
`;
