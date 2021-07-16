import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
`;

export const Aside = styled.aside`
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
  background: #fff;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e4e6eb;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #bcc0c4; 
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #b30000; 
  }
  a, .parent-item {
    margin-bottom: 4px;
    padding: 0 5px;
    font-weight: 600;
    border-radius: 7px;
    font-size: 0.95em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    cursor: pointer;
    span {
      color: rgb(0 0 0 / 85%);
    }
    span.title {
      display: flex;
      align-items: center;
    }
    span.caret {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 7px;
      border-radius: 4px;
      height: 32px;
      svg {
        margin: 0;
        fill: #36424e;
        font-size: 12px;
        width: 20px;
        height: 13px;
      }
    }
    svg {
      font-size: 16px;
      margin-right: 7px;
      width: 23px;
      height: 20px;
    }
    &:hover {
      background: var(--link-hover-bg);
    }
    &.active {
      background: var(--link-active-bg);
    }
  }
`;

export const PageManager = styled.div`
  width: calc(100% - var(--sidebar-width));
  position: relative;
`;

export const PageContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SubLink = styled.div`
  height: 0;
  overflow: hidden;
  transition: 0.2s height ease-out;
  a {
    height: 40px;
    margin-bottom: 0;
    padding-left: 34px;
  }
`;