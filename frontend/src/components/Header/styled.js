import styled from 'styled-components';

export const Header = styled.header`
  height: var(--header-height);
  position: fixed;
  width: calc(100% - var(--sidebar-width));
  z-index: 1200;
  top: 0;
  left: var(--sidebar-width);
  nav {
    height: 100%;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
  }
`;