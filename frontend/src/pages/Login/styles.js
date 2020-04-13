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
    font-weight: 20;
  }
`;
