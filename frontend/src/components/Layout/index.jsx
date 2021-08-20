import React from 'react'

import Sidebar from './Sidebar';
import DashboardHeader from 'components/Header/DashboardHeader';
import Footer from 'components/Footer';
import * as L from './styled';

const Layout = ({ children, footer = true, header = true, sidebar = true }) => {

  React.useEffect(() => {
    if (!sidebar) {
      document.documentElement.style.setProperty('--sidebar-width', '0px');
    } else {
      document.documentElement.style.removeProperty('--sidebar-width');
    }
  }, [sidebar]);

    return (
        <L.MainWrapper>
          {header && <DashboardHeader />}
          <L.PageContent>
            {sidebar && <Sidebar/>}
            <L.PageManager>
              {children}
              {footer && <Footer />}
            </L.PageManager>
          </L.PageContent>
        </L.MainWrapper>
    )
}

export default Layout
