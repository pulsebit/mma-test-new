import styled from 'styled-components';

const colorFade = '#5e7184bf';

export const RegisterWrapper = styled.div`
  background: #fff;
  margin: 50px 0;
  border-radius: 7px;
  .img-bg {
    height: 100%;
    object-fit: cover;
    border-radius: 7px 0 0 7px;
  }
`;

export const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 45px;
`;

export const Title = styled.h4`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #212529;
`;

export const SubTitle = styled.p`
  font-weight: 600;
  margin-bottom: 45px;
  color: ${colorFade};
  font-size: 0.9em;
  a {
    color: var(--primary);
  }
`;

export const Submit = styled.button`
  height: 44px;
  width: 100%;
`;

export const Or = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  font-weight: 600;
  color: #8694ae;
  margin: 35px 0;
  div {
    height: 1px;
    background: #e5e9ec;
    width: 100%;
  }
  span {
    padding: 0 8px;
  }
`;

export const ErrorWrapper = styled.div`
  min-height: 16px;
  color: var(--danger);
  font-size: 0.9em;
  text-align: center;
  line-height: 1.5;
  font-weight: 500;
`;

export const EmailExists = styled.div`
  font-size: 14px;
  font-weight: 500;
`;