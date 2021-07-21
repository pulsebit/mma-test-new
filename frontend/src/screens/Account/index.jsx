import Layout from 'components/Layout'
import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import * as S from './style';
import { BsChevronRight } from "react-icons/bs";
import Profile from './Profile';

export const Index = ({ match }) => {
  return (
    <Layout>
      <S.AccountWrapper>
        <LeftNav url={match.url} />
        <Switch>
          <Route exact path={`${match.url}/profile`} component={Profile} />
          <Route exact path={`${match.url}/subscription`} />
          <Route exact path={`${match.url}/plan`} />
          <Route exact path={`${match.url}/payment-history`} />
          <Route exact path={`${match.url}/change-password`} />
        </Switch>
      </S.AccountWrapper>
    </Layout>
  )
}

const mapStateToProps = (state) => ({ })
const mapDispatchToProps = { }
export default connect(mapStateToProps, mapDispatchToProps)(Index)

function Account({ num }) {
  return <p>Test {num}</p>
}

function LeftNav({ url }) {
  return (
    <S.Sidebar>
      <NavLink to={`${url}/profile`}>
        Profile
        <BsChevronRight />
      </NavLink>
      <NavLink to={`${url}/subscription`}>
        Subscription
        <BsChevronRight />  
      </NavLink>
      <NavLink to={`${url}/plan`}>
        Choose a Plan
        <BsChevronRight />
      </NavLink>
      <NavLink to={`${url}/payment-history`}>
        Payment History
        <BsChevronRight />
      </NavLink>
      <NavLink to={`${url}/change-password`}>
        Change Password
        <BsChevronRight />
      </NavLink>
    </S.Sidebar>
  )
}
