import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 5px;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    height: 30px;
    width: 280px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  button {
    cursor: pointer;
    background: #6495ed;
    border: none;
    width: 250px;
    color: #fff;
    margin-left: 35px;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  #signin {
    padding: 5px 40px;
    margin-left: 35px;
    border-radius: 4px;
    color: #000;
    background: #f0ffff;
  }

  a {
    text-decoration: none;
  }

  spam {
    margin-left: 90px;
  }
`;
