import styled from 'styled-components';

export const TableWrapper = styled.div`
  background: #fff;
  padding: 10px 12px;
`;

export const Table = styled.table`
  thead {
    tr {
      th {
        border-top: 0;
        font-size: 0.8em;
        font-weight: 500;
        opacity: 0.8;
      }
    }
  }
  tbody {
    tr {
      td {
        background: #fff;
        padding: 20px 10px;
        font-weight: 500;
        font-size: 0.9em;
        border: none;
        &:last-child {
          display: flex;
          a {
            margin-right: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            font-weight: 600;
            font-size: 0.9em;
          }
        }
      }
      &:nth-child(odd) {
        td {
          background: #f7f7f9;
        }
      }
    }
  }
`;