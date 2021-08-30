import React from 'react';
import { useHistory } from "react-router-dom";

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAlt, faTicketAlt, faKey, faBoxes, faCalendarAlt, faCogs, faBrain } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    const history = useHistory()
    const pathname = window.location.pathname
    return (
      <>
          <div className="sidebar-menu-label">Menu</div>
          <Navigation
            // you can use your own router's api to get pathname
            activeItemId={pathname}
            onSelect={({itemId}) => {
              // maybe push to the route
              history.push(itemId)
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/admin',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <FontAwesomeIcon icon={faHome} />,
              },
              {
                title: 'Supports',
                itemId: '/admin/supports',
                elemBefore: () => <FontAwesomeIcon icon={faTicketAlt} />,
              },
              {
                title: 'User',
                itemId: '/admin/users',
                elemBefore: () => <FontAwesomeIcon icon={faUserAlt} />,
              },
              {
                title: 'Products',
                itemId: '/admin/productlist',
                elemBefore: () => <FontAwesomeIcon icon={faBoxes} />,
                // subNav: [
                //   {
                //     title: 'Categories',
                //     itemId: '/admin/product-categories',
                //   },
                // ],
              },
              {
                title: 'Knowledge Base',
                itemId: '/admin/knowledge-base',
                elemBefore: () => <FontAwesomeIcon icon={faBrain} />,
              },
              {
                title: 'Payment Plans',
                itemId: '/admin/plan',
                elemBefore: () => <FontAwesomeIcon icon={faCalendarAlt} />,
              },
              {
                title: 'Settings',
                itemId: '/admin/settings/account',
                elemBefore: () => <FontAwesomeIcon icon={faCogs} />,
              },
            ]}
          />
      </>
    )
}
export default Sidebar