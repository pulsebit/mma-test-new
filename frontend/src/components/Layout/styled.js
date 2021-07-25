import styled from 'styled-components';
import sidebarBgImage from 'assets/images/sidebar-bg.png';

const linkHeight = '52px';
const textColor = 'rgb(255 255 255 / 80%)';
const sidebarBg = '#051e34';
const caretBgHover = 'rgb(255 255 255 / 12%)';
const linkBg = 'rgb(255 255 255 / 8%)';
const linkActiveBg = 'rgb(255 255 255 / 9%)';

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
  background-image: url(${sidebarBgImage});
  background-size: cover;
  padding-bottom: 10px;
  position: fixed;
  z-index: 1200;
  height: 100%;
  top: 0;
  left: 0;
  transition: width 0.2s ease;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(255 255 255 / 22%); 
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgb(255 255 255 / 23%); 
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
      background: ${linkBg};
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
  border-bottom: 1px solid ${linkBg};
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