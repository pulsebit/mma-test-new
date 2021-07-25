import styled from 'styled-components';

export const TableWrapper = styled.div`
  background: #fff;
  padding: 10px 12px;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 4%);
  border-radius: 5px;
`;

export const TopTable = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 10px;
  border-bottom: 1px solid #eaecef;
  align-items: center;
  input {
    max-width: 330px;
  }
`;

export const Table = styled.table`
  margin-bottom: 0;
  thead {
    tr {
      th {
        border-top: 0;
        font-size: 0.8em;
        font-weight: 600;
        border-width: 0;
        background: #fafafa;
        padding-top: 16px;
        color: #00000075;
        padding-bottom: 16px;
        &:last-child {
          text-align: center;
        }
      }
    }
  }
  tbody {
    tr {
      &:hover {
        td {
          background: #f1f1f1;
        }
      }
      td {
        background: #fff;
        padding: 13px 10px;
        font-weight: 500;
        font-size: 0.9em;
        color: rgb(30 35 41);
        vertical-align: middle;
        border-color: rgb(234 236 239);
        &:last-child {
          display: flex;
          justify-content: center;
          a {
            font-weight: 600;
            font-size: 0.9em;
          }
        }
      }
    }
  }
`;