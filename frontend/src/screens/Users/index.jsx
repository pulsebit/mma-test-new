import React, { Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Layout from 'components/Layout';

const UserEditScreen = lazy( () => import('./UserEditScreen') );
const UserListScreen = lazy( () => import('./UserListScreen') );
const UserViewScreen = lazy( () => import('./UserViewScreen') );

export const Index = ({ match }) => {
  return (
    <Layout>
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path={`${match.url}/:id/edit`} component={UserEditScreen} />
          <Route exact path={`${match.url}/:id`} component={UserViewScreen} />
          <Route path={`${match.url}/`} component={UserListScreen} />
        </Switch>
      </Suspense>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
