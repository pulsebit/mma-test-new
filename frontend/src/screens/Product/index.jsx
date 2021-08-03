import React from 'react'
import { connect } from 'react-redux'
import Layout from 'components/Layout'
import { Switch, Route } from 'react-router-dom'
import List from './List'
import Categories from './Categories'

export const Index = ({ match }) => {
  console.log(match.url)
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/categories`} component={Categories} />
        <Route exact path={`${match.url}/:productId/edit`} render={props => (<p>Test Edit</p>)} />
        <Route exact path={`${match.url}/:productId`} render={props => (<p>Test View</p>)} />
        <Route path={match.url} component={List} />
      </Switch>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
