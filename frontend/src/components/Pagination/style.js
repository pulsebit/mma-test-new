import styled from 'styled-components'

const activeBg = '#0e253c';

export const PaginationWrapper = styled.div`
  background: #fff;
  padding: 10px;
  margin-top: 9px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 4%);
  .pagination {
    margin-bottom: 0;
    .page-link {
      font-weight: 500;
      color: ${activeBg};
      border: 1px solid white;
      border-radius: 7px;
      margin: 0 1px;
      &.active, &:active {
        color: #fff;
        background: ${activeBg};
      }
      &:hover {
        color: #fff;
        background: ${activeBg};
        opacity: 0.8;
      }
    }
  }
`;