import styled from 'styled-components';

export const ThirdPartyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-top: 15px;
  button {
    margin: 5px 0;
    background: transparent;
    font-weight: 600;
    width: 100%;
    height: 45px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 10px;
    }
  }
`;

export const Divider = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #969696;
    margin: 25px 0;
    span {
      width: 45%;
      height: 1px;
      background: #e0e0e0;
    }
`;

export const FormLabel = styled.label`
  font-weight: 600;
  margin-bottom: 10px;
  opacity: 0.8;
`;

export const Input = styled.input`
  height: 45px;
  &::placeholder {
    color: #cecece;
  }
`;

export const SubmitBtn = styled.button`
  font-weight: 600;
  height: 45px;
  width: 100%;
`;

export const LoginRight = styled.div`
  padding: 50px 30px;
  h3 {
    font-size: 32px;
    text-align: center;
    font-weight: 700;
    color: #007bff;
    margin-bottom: 50px;
  }
`;