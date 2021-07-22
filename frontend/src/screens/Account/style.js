import styled from 'styled-components';

export const AccountWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap
`;

export const Sidebar = styled.div`
  width: var(--profile-sidebar-width);
  height: 100%;
  background: #fff;
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  a {
    margin-bottom: 5px;
    height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 18px;
    font-weight: 600;
    font-size: 0.95em;
    color: #262626;
    justify-content: space-between;
    svg {
      visibility: hidden;
    }
    &.active {
      background: #316ae4;
      color: #fff;
      &:hover {
        background: #316ae4;
        opacity: 0.8;
      }
      svg {
        visibility: visible;
      }
    }
    &:hover {
      background: var(--link-hover-bg);
      svg {
        visibility: visible;
      }
    }
  }
`;