import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAlt, faTicketAlt, faKey, faBoxes, faCalendarAlt, faCogs, faBrain } from '@fortawesome/free-solid-svg-icons'


const ClientSidebar = () => {
    const history = useHistory();
    const location = useLocation();
    return (
        <>
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId={location.pathname}
            onSelect={({itemId}) => {
              // maybe push to the route
              history.push(itemId);
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
                subNav: [
                  {
                    title: 'Acounting',
                    itemId: '/admin/supports/acounting',
                  },
                  {
                    title: 'Technical Support',
                    itemId: '/admin/supports/technical',
                  },
                  {
                    title: 'Billing Support',
                    itemId: '/admin/supports/billing',
                  },
                  {
                    title: 'integration',
                    itemId: '/management/teams',
                  },
                ],
              },
              {
                title: 'User',
                itemId: '/admin/users',
                elemBefore: () => <FontAwesomeIcon icon={faUserAlt} />,
              },
              {
                title: 'Permissions',
                itemId: '/admin/permissions',
                elemBefore: () => <FontAwesomeIcon icon={faKey} />,
              },
              {
                title: 'Products',
                itemId: '/admin/productlist',
                elemBefore: () => <FontAwesomeIcon icon={faBoxes} />,
                subNav: [
                  {
                    title: 'Categories',
                    itemId: '/admin/product-categories',
                  },
                ],
              },
              {
                title: 'Knowledge Base',
                itemId: '/admin/knowledge-base',
                elemBefore: () => <FontAwesomeIcon icon={faBrain} />,
                subNav: [
                  {
                    title: 'API',
                    itemId: '/admin/knowledge-base/api',
                  },
                  {
                    title: 'Traking',
                    itemId: '/admin/knowledge-base/tracking',
                  },
                  {
                    title: 'Acount',
                    itemId: '/admin/knowledge-base/acount',
                  },
                ],
              },
              {
                title: 'Payment Plans',
                itemId: '/admin/plan',
                elemBefore: () => <FontAwesomeIcon icon={faCalendarAlt} />,
              },
              {
                title: 'Settings',
                itemId: '/admin/settings',
                elemBefore: () => <FontAwesomeIcon icon={faCogs} />,
              },
            ]}
          />
      </>
    )
}
export default ClientSidebar