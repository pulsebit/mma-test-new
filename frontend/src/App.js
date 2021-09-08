import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import Profile from './screens/admin/Profile'
import ProfileEdit from './screens/admin/ProfileEdit'


import BillingHistory from './screens/admin/BillingHistory'
import PaymentMethod from './screens/admin/PaymentMethod'
import PaymentMethodAdd from './screens/admin/PaymentMethodAdd'

import Purchases from './screens/admin/Purchases'

import AdminDashboard from './screens/admin/AdminDashboard'

import SupportsListScreen from './screens/admin/SupportsListScreen'
import SupportsViewScreen from './screens/admin/SupportsViewScreen'
import SupportsEditScreen from './screens/admin/SupportsEditScreen'
import SupportsResolvedScreen from './screens/admin/SupportsResolvedScreen'
import SupportsAddScreen from './screens/admin/SupportsAddScreen'

import UserAddScreen from './screens/admin/UserAddScreen'
import UserListScreen from './screens/admin/UserListScreen'
import UserViewScreen from './screens/admin/UserViewScreen'
import UserEditScreen from './screens/admin/UserEditScreen'

import PerAllAdmin from './screens/admin/PerAllAdmin'
import PerSuperAdmin from './screens/admin/PerSuperAdmin'

import ProductAddScreen from './screens/admin/ProductAddScreen'
import ProductListScreen from './screens/admin/ProductListScreen'
import ProductViewScreen from './screens/admin/ProductViewScreen'
import ProductEditScreen from './screens/admin/ProductEditScreen'
import ProductCatList from './screens/admin/ProductCatList'
import ProductCatViewScreen from './screens/admin/ProductCatViewScreen'


import ProductScreen from './screens/admin/ProductScreen'

import KnowledgeBaseListScreen from './screens/admin/KnowledgeBaseListScreen'
import KnowledgeBaseAddScreen from './screens/admin/KnowledgeBaseAddScreen'
import KnowledgeBaseEditScreen from './screens/admin/KnowledgeBaseEditScreen'
import KnowledgeBaseViewScreen from './screens/admin/KnowledgeBaseViewScreen'

import PlanAddScreen from './screens/admin/PlanAddScreen'
import PlanListScreen from './screens/admin/PlanListScreen'
import PlanEditScreen from './screens/admin/PlanEditScreen'
import PlanViewScreen from './screens/admin/PlanViewScreen'

import Settings from './screens/admin/Settings'

import ClientPortal from './screens/clients/ClientPortal'
import EmailUs from './screens/clients/EmailUs'

import ClientKnowledgebaseList from './screens/clients/ClientKnowledgebaseList'
import ClientKnowledgebaseView from './screens/clients/ClientKnowledgebaseView'


import ClientServiceList from './screens/clients/ClientServiceList'
import ClientServiceView from './screens/clients/ClientServiceView'

import ClientReports from './screens/clients/ClientReports'
import ClientMembers from './screens/clients/ClientMembers'
import ClientMembersView from './screens/clients/ClientMembersView'
import ClientMembersEdit from './screens/clients/ClientMembersEdit'

import ClientStaff from './screens/clients/ClientStaff'
import ClientStaffAdd from './screens/clients/ClientStaffAdd'
import ClientStaffView from './screens/clients/ClientStaffView'
import ClientStaffEdit from './screens/clients/ClientStaffEdit'


import ClientSupportAdd from './screens/clients/ClientSupportAdd'
import ClientSupportList from './screens/clients/ClientSupportList'
import ClientSupportEdit from './screens/clients/ClientSupportEdit'
import ClientSupportView from './screens/clients/ClientSupportView'


function App() {
  return (
    <Router>
        
          <main>
              
              <Route path='/' component={LoginScreen} exact />
              <Route path='/register' component={RegisterScreen} exact />
              
              <Route path='/profile' component={Profile} exact/>
              <Route path='/profile/edit' component={ProfileEdit} />

              
              <Route path='/billing-history' component={BillingHistory} />
              <Route path='/payment-method' component={PaymentMethod} />
              <Route path='/add-payment-method' component={PaymentMethodAdd} />
              <Route path='/purchases' component={Purchases} />

              <Route path='/admin' component={AdminDashboard} exact />

              {/* SUPPORTS */}
              <Route path='/admin/add-support/' component={SupportsAddScreen} />
              <Route path='/admin/supports' component={SupportsListScreen} exact/>
              <Route path='/admin/supports/:id' component={SupportsViewScreen} exact/>
              <Route path='/admin/supports-edit/:id' component={SupportsEditScreen} />
              <Route path='/admin/supports-resolve/:id' component={SupportsResolvedScreen} />

              {/* USERS */}
              <Route path='/admin/users' component={UserListScreen} exact />
              <Route path='/admin/user-add' component={UserAddScreen} />
              <Route path='/admin/users/:id/edit' component={UserEditScreen}  />
              <Route path='/admin/users-view/:id' component={UserViewScreen} />

              <Route path='/admin/permissions/all' component={PerAllAdmin} />
              <Route path='/admin/permissions/super-admin' component={PerSuperAdmin} />
              

              {/* Products */}
              <Route path='/admin/productlist/' component={ProductListScreen} />
              <Route path='/admin/product/:id/' component={ProductViewScreen}  exact/>
              <Route path='/admin/product-add' component={ProductAddScreen}  />
              <Route path='/admin/product-edit/:id/' component={ProductEditScreen}  />
              <Route path='/admin/product-categories' component={ProductCatList} exact />
              <Route path='/admin/product-categories/view' component={ProductCatViewScreen}  />
              
              <Route path='/product/:id' component={ProductScreen}  />

              {/* Knowledge-base */}
              <Route path='/admin/knowledge-base' component={KnowledgeBaseListScreen} exact/>
              <Route path='/admin/knowledge-base-add' component={KnowledgeBaseAddScreen} exact/>
              <Route path='/admin/knowledge-base/:id/' component={KnowledgeBaseViewScreen} exact/>
              <Route path='/admin/knowledge-base-edit/:id' component={KnowledgeBaseEditScreen} exact/>


              {/* Paymeny Plans */}
              <Route path='/admin/plan-add/' component={PlanAddScreen} exact />
              <Route path='/admin/plan' component={PlanListScreen} exact />
              <Route path='/admin/plan/:id' component={PlanViewScreen} exact />
              <Route path='/admin/plan/:id/edit' component={PlanEditScreen} />



              <Route path='/admin/settings' component={Settings} />


              {/* CLIENT */}
              <Route path='/portal' component={ClientPortal} exact />
              <Route path='/portal/email-us' component={EmailUs} />


              <Route path='/portal/knowledge-base' component={ClientKnowledgebaseList} exact />
              <Route path='/portal/knowledge-base/:id' component={ClientKnowledgebaseView}  />

              
              <Route path='/portal/services/' component={ClientServiceList} exact />
              <Route path='/portal/service/:id' component={ClientServiceView} />
              
              <Route path='/portal/reports' component={ClientReports}  />

              <Route path='/portal/membership-info' component={ClientMembers} exact />
              <Route path='/portal/membership-info/:id' component={ClientMembersView}  exact />
              <Route path='/portal/membership-info/:id/edit' component={ClientMembersEdit}  />
              
              <Route path='/portal/staff' component={ClientStaff} />
              <Route path='/portal/add-staff/' component={ClientStaffAdd} />
              <Route path='/portal/view-staff/' component={ClientStaffView} />
              <Route path='/portal/edit-staff/' component={ClientStaffEdit} />
              

              <Route path='/portal/support' component={ClientSupportList} exact />
              <Route path='/portal/support/:id' component={ClientSupportView} exact />
              <Route path='/portal/support/:id/edit' component={ClientSupportEdit} />
              <Route path='/portal/add-support/' component={ClientSupportAdd} />
              
          </main>
    </Router>
  );
}

export default App;
