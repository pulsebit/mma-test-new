import styled from 'styled-components';

export const ThirdParty = styled.div`
  button {
    margin-bottom: 10px;
    font-size: 0.9em;
    display: flex;
    height: 40px;
    align-items: center;
    font-weight: 600;
    color: #000;
    background: #f7fbff;
    svg {
      margin-right: 5px;
    }
    &.facebook {
      svg {
        color: #2374e1;
      } 
    }
    &:hover {
      background: #e9eff5;
    }
  }
`;