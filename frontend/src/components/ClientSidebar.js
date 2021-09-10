import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { TiChartPieOutline, TiTicket, TiGroupOutline, TiKeyOutline, TiCreditCard, TiUserOutline, TiMail, TiMortarBoard, TiDatabase, TiArrowSyncOutline} from "react-icons/ti";

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
                elemBefore: () => <TiChartPieOutline />,
              },
              // {
              //   title: 'Services',
              //   itemId: '/portal/services/',
              //   elemBefore: () => <FcServices />,
              // },
              {
                title: 'Support',
                itemId: '/portal/support',
                elemBefore: () => <TiTicket />,
              },
              {
                title: 'Staff',
                itemId: '/portal/staff',
                elemBefore: () => <TiGroupOutline />,
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
              {
                title: 'Access',
                itemId: '/portal/access',
                elemBefore: () => <TiKeyOutline />,
              },
              {
                title: 'Knowledge Base',
                itemId: '/portal/knowledge-base',
                elemBefore: () => <TiMortarBoard />, 
                subNav: [
                  {
                    title: 'Categories',
                    itemId: '/portal/knowlegebase/categories',
                  },
                ],
              },
              {
                title: 'Subscription Information',
                itemId: '/',
                elemBefore: () => <TiDatabase />, 
              },
              {
                title: 'Billing History',
                itemId: '/',
                elemBefore: () => <TiArrowSyncOutline />, 
              },
              {
                title: 'Payment Method',
                itemId: '/',
                elemBefore: () => <TiCreditCard />, 
              },
              {
                title: 'Contact Us',
                itemId: '/portal/email-support/',
                elemBefore: () => <TiMail />, 
              },
              {
                title: 'Your Profile',
                itemId: '/',
                elemBefore: () => <TiUserOutline />, 
              },
            ]}
          />
      </>
    )
}
export default ClientSidebar