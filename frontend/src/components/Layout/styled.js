import styled from 'styled-components';

const linkHeight = '52px';
const textColor = '#68707c';
const sidebarBg = '#fff';
const caretBgHover = '#68707c14';
const linkBgHover = '#68707c0f';
const linkActiveBg = '#68707c1c';
const sidebarPadding = '0 10px';
const linkRadius = '7px';
const scrollbarBg = '#68707c57';

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
  background-size: cover;
  padding-bottom: 10px;
  position: fixed;
  z-index: 1200;
  height: 100%;
  top: 0;
  left: 0;
  transition: width 0.2s ease;
  padding: ${sidebarPadding};
  border-right: 1px solid #f1f1f1;

  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${scrollbarBg}; 
    border-radius: 10px;
  }
  &>a, .parent-item {
    padding: 0 10px 0 20px;
    margin: 2px 0;
    font-weight: 600;
    font-size: 0.95em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${linkHeight};
    cursor: pointer;
    border-radius: ${linkRadius};
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
      width: 32px;
      height: 32px;
      border-radius: 50%;
      &:hover {
        background: ${caretBgHover};
      }
      svg {
        margin: 0;
        fill: ${textColor};
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
      fill: ${textColor};
    }
    &:hover {
      background: ${linkBgHover};
      color: ${textColor};
    }
    &.active {
      background: ${linkActiveBg};
      color: ${textColor};
      svg {
        fill: ${textColor};
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  height: var(--header-height);
  border-bottom: 1px solid ${linkBgHover};
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 210px;
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
    color: ${textColor};
    border-radius: ${linkRadius};
    &:hover {
      background: ${linkBgHover};
      color: ${textColor};
    }
    &.active {
      background: ${linkActiveBg};
      color: ${textColor};
    }
  }
`;