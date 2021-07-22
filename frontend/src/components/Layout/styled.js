import styled from 'styled-components';

const linkHeight = '52px';
const textColor = 'rgb(0 0 0 / 85%)';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
`;

export const Aside = styled.aside`
  width: var(--sidebar-width);
  overflow-y: auto;
  background: #fff;
  padding: 10px;
  position: fixed;
  z-index: 1200;
  height: calc(100vh - var(--header-height));
  top: var(--header-height);
  left: 0;

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
    height: ${linkHeight};
    cursor: pointer;
    span {
      color: ${textColor};
    }
    a.title, span.title {
      display: flex;
      align-items: center;
      margin: 0;
      width: 100%;
      justify-content: flex-start;
      &:hover {
        background-color: transparent;
        color: ${textColor};
      }
    }
    span.caret {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 7px;
      border-radius: 4px;
      height: 32px;
      &:hover {
        background: #d4d6dc;
      }
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
      color: ${textColor};
    }
    &.active {
      background: var(--link-active-bg);
      color: ${textColor};
    }
  }
`;

export const PageManager = styled.div`
  width: calc(100% - var(--sidebar-width));
  position: relative;
  min-height: calc(100vh - var(--header-height));
  margin-left: var(--sidebar-width);
  display: flex;
  flex-direction: column;
`;

export const PageContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--header-height);
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