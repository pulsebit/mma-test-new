import styled from 'styled-components';

export const Input = styled.input`
  height: 42px;
  border-radius: 4px;
  border-color: #21374a30;
  font-weight: 500;
  font-size: 13px;
  color: #2b303a;
  &:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
  }
  &::placeholder {
    opacity: 0.6;
  }
`;

export const Select = styled.select`
  height: 42px !important;
  border-radius: 4px;
  border-color: #21374a30;
  font-weight: 500;
  font-size: 13px;
  color: #2b303a;
  &:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 12.5px;
  color: #474d57d6;
`;