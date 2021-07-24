import styled from 'styled-components';

const linkHeight = '52px';
const textColor = '#2c3035';
const sidebarBg = '#fff';

export const subLinkHeight = 43;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
`;

export const Aside = styled.aside`
  width: var(--sidebar-width);
  overflow-y: auto;
  background: ${sidebarBg};
  padding: 10px 0;
  position: fixed;
  z-index: 1200;
  height: calc(100% - var(--header-height));
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
    background: #bcc0c494; 
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #bcc0c459; 
  }
  &>a, .parent-item {
    margin-bottom: 4px;
    padding: 0 10px 0 20px;
    font-weight: 600;
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
      height: ${linkHeight};
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
      svg {
        fill: #36424e;
      }
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
  transition: 0.2s height cubic-bezier(0.4, 0, 0.2, 1);
  a {
    margin-left: 21px;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: ${subLinkHeight}px;
    font-size: 0.9em;
    color: #000;
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