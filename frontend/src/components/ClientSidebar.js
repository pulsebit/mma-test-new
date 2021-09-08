import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FcCurrencyExchange, FcComboChart, FcSupport, FcConferenceCall, FcPaid, FcGraduationCap, FcServices} from "react-icons/fc";
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
                elemBefore: () => <FcComboChart />,
              },
              {
                title: 'Services',
                itemId: '/portal/services/',
                elemBefore: () => <FcServices />,
              },
              {
                title: 'Support',
                itemId: '/portal/support',
                elemBefore: () => <FcSupport />,
              },
              {
                title: 'Knowledge Base',
                itemId: '/portal/knowledge-base',
                elemBefore: () => <FcGraduationCap />, 
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
                elemBefore: () => <FcConferenceCall />,
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