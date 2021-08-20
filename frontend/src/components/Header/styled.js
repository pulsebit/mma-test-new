import styled from 'styled-components';

export const Header = styled.header`
  height: var(--header-height);
  position: fixed;
  width: calc(100% - var(--sidebar-width));
  z-index: 1200;
  top: 0;
  left: var(--sidebar-width);
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const SidebarTogger = styled.div`
  display: flex;
  width: 23px;
  height: 15px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  span {
    height: 2px;
    width: 100%;
    background: var(--sidebar-link-color);
  }
`;