import React from 'react'

import Sidebar from './Sidebar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import * as L from './styled';

const Layout = ({ children, footer = true, header = true, sidebar = true }) => {
    return (
        <L.MainWrapper>
          {header && <Header />}
          <L.PageContent>
            {sidebar && <Sidebar/>}
            <L.PageManager>
              {children}
            </L.PageManager>
          </L.PageContent>
          {footer && <Footer />}
        </L.MainWrapper>
    )
}

export default Layout
