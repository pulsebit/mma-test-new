import styled from 'styled-components';

export const ProfileWrapper = styled.form`
  padding: 45px;
  background: #fff;
  width: 100%;
  max-width: 700px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 0.84em;
  margin-bottom: 10px;
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  &::placeholder {
    color: #bdc0ca;
  }
`;

export const ImageWrapper = styled.label`
  width: 130px;
  height: 130px;
  background-size: cover;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 55px;
  position: relative;
  border: 1px solid transparent;
  input[type=file] {
    display: none;
  }
  &:hover {
    border: 1px solid #2e63d5;
  }
`;

export const IconWrapper = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  background: rgb(0 123 255);
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`;

export const DatePickerWrapper = styled.div`
  .form-control {
    height: 42px;
    border-radius: 4px;
    input {
      font-size: 13px;
      font-weight: 500;
    }
  }
`;