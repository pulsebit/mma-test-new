import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import UserEditScreen from './UserEditScreen'
import UserListScreen from './UserListScreen'
import UserViewScreen from './UserViewScreen'

export const Index = ({ match }) => {
  return (
    <>
      <Switch>
        <Route exact path={`${match.url}/:id/edit`} component={UserEditScreen} />
        <Route exact path={`${match.url}/:id`} component={UserViewScreen} />
        <Route path={`${match.url}/`} component={UserListScreen} />
      </Switch>
    </>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
