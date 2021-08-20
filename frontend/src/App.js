import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// <<<<<<< HEAD
// import Header from './components/Header'
// import Footer from './components/Footer'
// import HomeScreen from './screens/HomeScreen'
// import LoginScreen from './screens/LoginScreen'

// import Profile from './screens/Profile'
// import ProfileEdit from './screens/ProfileEdit'


// import BillingHistory from './screens/BillingHistory'
// import PaymentMethod from './screens/PaymentMethod'
// import PaymentMethodAdd from './screens/PaymentMethodAdd'

// import Purchases from './screens/Purchases'

// import AdminDashboard from './screens/AdminDashboard'

// import SupportsListScreen from './screens/SupportsListScreen'
// import SupportsViewScreen from './screens/SupportsViewScreen'
// import SupportsEditScreen from './screens/SupportsEditScreen'
// import SupportsResolvedScreen from './screens/SupportsResolvedScreen'


// import UserListScreen from './screens/UserListScreen'
// import UserViewScreen from './screens/UserViewScreen'
// import UserEditScreen from './screens/UserEditScreen'

// import PerAllAdmin from './screens/PerAllAdmin'
// import PerSuperAdmin from './screens/PerSuperAdmin'

// import ProductAddScreen from './screens/ProductAddScreen'
// import ProductListScreen from './screens/ProductListScreen'
// import ProductViewScreen from './screens/ProductViewScreen'
// import ProductEditScreen from './screens/ProductEditScreen'
// import ProductCatList from './screens/ProductCatList'
// import ProductCatViewScreen from './screens/ProductCatViewScreen'


// import ProductScreen from './screens/ProductScreen'

// import KnowledgeBaseListScreen from './screens/KnowledgeBaseListScreen'
// import KnowledgeBaseAddScreen from './screens/KnowledgeBaseAddScreen'
// import KnowledgeBaseEditScreen from './screens/KnowledgeBaseEditScreen'
// import KnowledgeBaseViewScreen from './screens/KnowledgeBaseViewScreen'

// import PlanAddScreen from './screens/PlanAddScreen'
// import PlanListScreen from './screens/PlanListScreen'
// import PlanEditScreen from './screens/PlanEditScreen'
// import PlanViewScreen from './screens/PlanViewScreen'

// import Settings from './screens/Settings'
// =======

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from 'screens/Login'
import Register from 'screens/Register'
import Account from 'screens/Account'
import Admin from 'components/RouterView/Admin'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'antd/dist/antd.css';
import './index.css'
import './App.css';

// import ClientPortal from './screens/clients/ClientPortal'
// import ClientKnowledgebase from './screens/clients/ClientKnowledgebase'

// import ClientServicesBasic from './screens/clients/ClientServicesBasic'
// import ClientServicesSilver from './screens/clients/ClientServicesSilver'
// import ClientServicesGold from './screens/clients/ClientServicesGold'
// import ClientServicesPlatinum from './screens/clients/ClientServicesPlatinum'

// import ClientReports from './screens/clients/ClientReports'
// import ClientMembers from './screens/clients/ClientMembers'
// import ClientMembersView from './screens/clients/ClientMembersView'
// import ClientMembersEdit from './screens/clients/ClientMembersEdit'

// import ClientStaff from './screens/clients/ClientStaff'
// import ClientStaffAdd from './screens/clients/ClientStaffAdd'
// import ClientStaffView from './screens/clients/ClientStaffView'
// import ClientStaffEdit from './screens/clients/ClientStaffEdit'

// import ClientSupport from './screens/clients/ClientSupport'
// import ClientSupportEdit from './screens/clients/ClientSupportEdit'
// import ClientSupportView from './screens/clients/ClientSupportView'
// import SupportsAddScreen from './screens/SupportsAddScreen'




function App() {
  return (
// <<<<<<< HEAD
//     <Router>
//         <Header />
//           <main>

//               <Route path='/' component={HomeScreen} exact />
              
//               <Route path='/login' component={LoginScreen} />
//               <Route path='/profile' component={Profile} exact/>
//               <Route path='/profile/edit' component={ProfileEdit} />
              

              
//               <Route path='/billing-history' component={BillingHistory} />
//               <Route path='/payment-method' component={PaymentMethod} />
//               <Route path='/add-payment-method' component={PaymentMethodAdd} />
//               <Route path='/purchases' component={Purchases} />

//               <Route path='/admin' component={AdminDashboard} exact />

//               {/* SUPPORTS */}
//               <Route path='/admin/add-support/' component={SupportsAddScreen} />
//               <Route path='/admin/supports' component={SupportsListScreen} exact/>
//               <Route path='/admin/supports/:id' component={SupportsViewScreen} exact/>
//               <Route path='/admin/supports-edit/:id' component={SupportsEditScreen} />
//               <Route path='/admin/supports-resolve/:id' component={SupportsResolvedScreen} />

//               {/* USERS */}
//               <Route path='/admin/users' component={UserListScreen} exact />
//               <Route path='/admin/users/:id/edit' component={UserEditScreen}  />
//               <Route path='/admin/users-view/:id' component={UserViewScreen} />

//               <Route path='/admin/permissions/all' component={PerAllAdmin} />
//               <Route path='/admin/permissions/super-admin' component={PerSuperAdmin} />
              

//               {/* Products */}
//               <Route path='/admin/productlist/' component={ProductListScreen} />
//               <Route path='/admin/product/:id/' component={ProductViewScreen}  exact/>
//               <Route path='/admin/product-add' component={ProductAddScreen}  />
//               <Route path='/admin/product-edit/:id/' component={ProductEditScreen}  />
//               <Route path='/admin/product-categories' component={ProductCatList} exact />
//               <Route path='/admin/product-categories/view' component={ProductCatViewScreen}  />
              
//               <Route path='/product/:id' component={ProductScreen}  />

//               {/* Knowledge-base */}
//               <Route path='/admin/knowledge-base' component={KnowledgeBaseListScreen} exact/>
//               <Route path='/admin/knowledge-base-add' component={KnowledgeBaseAddScreen} exact/>
//               <Route path='/admin/knowledge-base/:id/' component={KnowledgeBaseViewScreen} exact/>
//               <Route path='/admin/knowledge-base-edit/:id' component={KnowledgeBaseEditScreen} exact/>


//               {/* Paymeny Plans */}
//               <Route path='/admin/plan-add/' component={PlanAddScreen} exact />
//               <Route path='/admin/plan' component={PlanListScreen} exact />
//               <Route path='/admin/plan/:id' component={PlanViewScreen} exact />
//               <Route path='/admin/plan/:id/edit' component={PlanEditScreen} />



//               <Route path='/admin/settings' component={Settings} />
              

//               <Route path='/portal' component={ClientPortal} exact />
//               <Route path='/portal/knowlegebase' component={ClientKnowledgebase}  />
//               <Route path='/portal/services/basic' component={ClientServicesBasic}  />
//               <Route path='/portal/services/silver' component={ClientServicesSilver}  />
//               <Route path='/portal/services/gold' component={ClientServicesGold}  />
//               <Route path='/portal/services/platinum' component={ClientServicesPlatinum}  />
//               <Route path='/portal/reports' component={ClientReports}  />

//               <Route path='/portal/membership-info' component={ClientMembers} exact />
//               <Route path='/portal/membership-info/:id' component={ClientMembersView}  exact />
//               <Route path='/portal/membership-info/:id/edit' component={ClientMembersEdit}  />
              
//               <Route path='/portal/staff' component={ClientStaff} />
//               <Route path='/portal/add-staff/' component={ClientStaffAdd} />
//               <Route path='/portal/view-staff/' component={ClientStaffView} />
//               <Route path='/portal/edit-staff/' component={ClientStaffEdit} />
              

//               <Route path='/portal/support' component={ClientSupport} exact />
//               <Route path='/portal/support/:id' component={ClientSupportView} exact />
//               <Route path='/portal/support/:id/Edit' component={ClientSupportEdit} />

              
              
//           </main>
//         <Footer />
//     </Router>
// =======
    <>
      <Router>
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={Register} /> 
        <Route path='/product/:id' component={ProductScreen}  /> 
        <Route path="/account" component={Account}/>
        <Route path="/admin" component={Admin}/>
        <Route path='/' component={HomeScreen} exact />
      </Router>
      <Toast/>
    </>
  );
}

function Toast() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}

export default App;
