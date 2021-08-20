import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AdminDashboard from 'screens/AdminDashboard'
import SupportsListScreen from 'screens/SupportsListScreen'
import SupportsViewScreen from 'screens/SupportsViewScreen'
import SupportsEditScreen from 'screens/SupportsEditScreen'
import Users from 'screens/Users'
// import PermissionsScreen from 'screens/PermissionsScreen'
// import KnowledgeBaseScreen from 'screens/KnowledgeBaseScreen'
import PlanListScreen from 'screens/PlanListScreen'
import PlanEditScreen from 'screens/PlanEditScreen'
import PlanViewScreen from 'screens/PlanViewScreen'
import Product from 'screens/Product'
import Settings from 'screens/Settings'

export default function Admin({ match }) {
  return (
    <Switch>
      <Route path={`${match.url}/dashboard`} component={AdminDashboard} exact />
      <Route path={`${match.url}/supports`} component={SupportsListScreen} exact/>
      <Route path={`${match.url}/supports/:id`} component={SupportsViewScreen} exact/>
      <Route path={`${match.url}/supports/:id/edit`} component={SupportsEditScreen} />
      <Route path={`${match.url}/users`} component={Users} />
      {/*<Route path={`${match.url}/permissions`} component={PermissionsScreen} />*/}
      <Route path={`${match.url}/products`} component={Product} />
      {/*<Route path={`${match.url}/knowledge-base`} component={KnowledgeBaseScreen} />*/}
      <Route path={`${match.url}/plan`} component={PlanListScreen} />
      <Route path={`${match.url}/plan/:id`} component={PlanViewScreen} />
      <Route path={`${match.url}/plan/edit`} component={PlanEditScreen} />
      <Route path={`${match.url}/settings`} component={Settings} />
      <Route path={`${match.url}/dashboard`} component={AdminDashboard} exact />
      <Route path={`${match.url}/supports`} component={SupportsListScreen} exact/>
      <Route path={`${match.url}/supports/:id`} component={SupportsViewScreen} exact/>
      <Route path={`${match.url}/supports/:id/edit`} component={SupportsEditScreen} />    
    </Switch>
  )
}
