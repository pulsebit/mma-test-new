import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
`;

export const Aside = styled.aside`
  width: var(--sidebar-width);
  min-height: calc(100vh - var(--header-height));
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  a {
    margin-bottom: 4px;
    padding: 16px 15px;
    font-weight: 600;
    border-radius: 7px;
    font-size: 0.95em;
    display: flex;
    align-items: center;
    span {
      color: #000;
    }
    svg {
      font-size: 16px;
      margin-right: 7px;
    }
    &:hover {
      background: #e4e6eba8;
    }
    &.active {
      background: #e4e6eb;
    }
  }
`;

export const PageManager = styled.div`
  width: calc(100% - var(--sidebar-width));
  padding: 20px;
`;

export const PageContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;