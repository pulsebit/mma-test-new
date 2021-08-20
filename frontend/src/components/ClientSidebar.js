import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faTicketAlt, faKey, faBrain, faFile, faUsers } from '@fortawesome/free-solid-svg-icons'


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
                title: 'Reports',
                itemId: '/portal/reports',
                elemBefore: () => <FontAwesomeIcon icon={faFile} />,
              },
              {
                title: 'Services',
                itemId: '/portal/services/',
                elemBefore: () => <FontAwesomeIcon icon={faTicketAlt} />,
              },
              {
                title: 'Members Portal',
                itemId: '/portal/membership-info',
                elemBefore: () => <FontAwesomeIcon icon={faUserAlt} />,
              },
              {
                title: 'Support',
                itemId: '/portal/support',
                elemBefore: () => <FontAwesomeIcon icon={faKey} />,
              },
              {
                title: 'Knowledge Base',
                itemId: '/portal/knowlegebase',
                elemBefore: () => <FontAwesomeIcon icon={faBrain} />, 
                subNav: [
                  {
                    title: 'Categories',
                    itemId: '/portal/knowlegebase/categories',
                  },
                ],
              },
              {
                title: 'Members',
                itemId: '/portal/staff',
                elemBefore: () => <FontAwesomeIcon icon={faUsers} />,
                subNav: [
                  {
                    title: 'All staff',
                    itemId: '/portal/staff',
                  },
                  {
                    title: 'Add new',
                    itemId: '/portal/add-staff/',
                  },
                ],
              },
            ]}
          />
      </>
    )
}
export default ClientSidebar