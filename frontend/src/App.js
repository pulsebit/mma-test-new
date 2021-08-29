import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

import Profile from './screens/Profile'
import ProfileEdit from './screens/ProfileEdit'


import BillingHistory from './screens/BillingHistory'
import PaymentMethod from './screens/PaymentMethod'
import PaymentMethodAdd from './screens/PaymentMethodAdd'

import Purchases from './screens/Purchases'

import AdminDashboard from './screens/AdminDashboard'

import SupportsListScreen from './screens/SupportsListScreen'
import SupportsViewScreen from './screens/SupportsViewScreen'
import SupportsEditScreen from './screens/SupportsEditScreen'
import SupportsResolvedScreen from './screens/SupportsResolvedScreen'
import SupportsAddScreen from './screens/SupportsAddScreen'


import UserListScreen from './screens/UserListScreen'
import UserViewScreen from './screens/UserViewScreen'
import UserEditScreen from './screens/UserEditScreen'

import PerAllAdmin from './screens/PerAllAdmin'
import PerSuperAdmin from './screens/PerSuperAdmin'

import ProductAddScreen from './screens/ProductAddScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductViewScreen from './screens/ProductViewScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ProductCatList from './screens/ProductCatList'
import ProductCatViewScreen from './screens/ProductCatViewScreen'


import ProductScreen from './screens/ProductScreen'

import KnowledgeBaseListScreen from './screens/KnowledgeBaseListScreen'
import KnowledgeBaseAddScreen from './screens/KnowledgeBaseAddScreen'
import KnowledgeBaseEditScreen from './screens/KnowledgeBaseEditScreen'
import KnowledgeBaseViewScreen from './screens/KnowledgeBaseViewScreen'

import PlanAddScreen from './screens/PlanAddScreen'
import PlanListScreen from './screens/PlanListScreen'
import PlanEditScreen from './screens/PlanEditScreen'
import PlanViewScreen from './screens/PlanViewScreen'

import Settings from './screens/Settings'

import ClientPortal from './screens/clients/ClientPortal'
import ClientKnowledgebaseList from './screens/clients/ClientKnowledgebaseList'
import ClientKnowledgebaseView from './screens/clients/ClientKnowledgebaseView'


import ClientServiceList from './screens/clients/ClientServiceList'
import ClientServicesView from './screens/clients/ClientServicesView'

import ClientServicesBasic from './screens/clients/ClientServicesBasic'
import ClientServicesSilver from './screens/clients/ClientServicesSilver'
import ClientServicesGold from './screens/clients/ClientServicesGold'
import ClientServicesPlatinum from './screens/clients/ClientServicesPlatinum'

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
        <Header />
          <main>

              <Route path='/' component={HomeScreen} exact />
              
              <Route path='/login' component={LoginScreen} />
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


              <Route path='/portal/knowledge-base' component={ClientKnowledgebaseList} exact />
              <Route path='/portal/knowledge-base/:id' component={ClientKnowledgebaseView}  />

              
              <Route path='/portal/services/' component={ClientServiceList} exact />

              <Route path='/portal/services/:id' component={ClientServicesView} exact />
              
              <Route path='/portal/services/basic' component={ClientServicesBasic}  />
              <Route path='/portal/services/silver' component={ClientServicesSilver}  />
              <Route path='/portal/services/gold' component={ClientServicesGold}  />
              <Route path='/portal/services/platinum' component={ClientServicesPlatinum}  />
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
        <Footer />
    </Router>
  );
}

export default App;
