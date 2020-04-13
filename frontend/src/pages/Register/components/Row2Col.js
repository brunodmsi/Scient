import styled from 'styled-components';

export const Row2Col = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  section {
    display: flex;
    width: 45%;
    flex-direction: column;

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
        opacity: 0.5;
      }
    }

    span {
      color: #f64c75;
    }
  }
`;
