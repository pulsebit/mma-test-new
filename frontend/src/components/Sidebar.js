import React from 'react';
import { useHistory } from "react-router-dom";

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FcHome, FcSupport, FcConferenceCall, FcPaid, FcGraduationCap, FcSettings , FcCalendar} from "react-icons/fc";


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
                elemBefore: () => <FcHome/>,
              },
              {
                title: 'Supports',
                itemId: '/admin/supports',
                elemBefore: () => <FcSupport />,
              },
              {
                title: 'User',
                itemId: '/admin/users',
                elemBefore: () => <FcConferenceCall />,
              },
              {
                title: 'Products',
                itemId: '/admin/productlist',
                elemBefore: () => <FcPaid />,
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
                elemBefore: () => <FcGraduationCap />,
              },
              {
                title: 'Payment Plans',
                itemId: '/admin/plan',
                elemBefore: () => <FcCalendar />,
              },
              {
                title: 'Settings',
                itemId: '/admin/settings/account',
                elemBefore: () => <FcSettings />,
              },
            ]}
          />
      </>
    )
}
export default Sidebar