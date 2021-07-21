import React from 'react'
import { connect } from 'react-redux'
import Layout from 'components/Layout'
import RegisterBg from 'assets/images/register.jpeg'
import * as S from './indexStyle';
import * as G from 'style/global'
import Google from './Google'
import Facebook from './Facebook'
import { useForm } from "react-hook-form";

export const Index = (props) => {
  const { register, handleSubmit } = useForm();

  const onRegisterSubmit = React.useCallback((data) => {
    console.log(data)
  });

  return (
    <FormWrapper>
      <S.Form onSubmit={handleSubmit(onRegisterSubmit)}>
        <Tops/>
        <ThirdPartyLogin/>
        <Or/>
        <div className="form-group">
          <G.FormLabel htmlFor="">Name</G.FormLabel>
          <G.Input type="text" className="form-control" placeholder="Name" required
            {...register("name")} />
        </div>
        <div className="form-group">
          <G.FormLabel htmlFor="">Email Address</G.FormLabel>
          <G.Input type="email" className="form-control" placeholder="Email Address" required
            {...register("email")} />
        </div>
        <div className="form-group">
          <G.FormLabel htmlFor="">Password</G.FormLabel>
          <G.Input type="password" className="form-control" placeholder="Password" required
            {...register("password")}
          />
        </div>
        <div className="form-group"> 
          <G.FormLabel htmlFor="">Confirm Password</G.FormLabel>
          <G.Input type="password" className="form-control" placeholder="Confirm Password" required
            {...register("confirm_password")}
          />
        </div>
        <div className="form-group mt-3">
          <S.Submit className="btn btn-primary">Register</S.Submit>
        </div>
        <S.ErrorWrapper></S.ErrorWrapper>
      </S.Form>
    </FormWrapper>
  )
}

const mapStateToProps = (state) => ({ })
const mapDispatchToProps = { }
export default connect(mapStateToProps, mapDispatchToProps)(Index)

function FormWrapper(props) {
  return (
    <Layout sidebar={false}>
      <div className="container">
        <S.RegisterWrapper>
          <div className="row">
            <div className="col-md-6 p-0">
              <img src={RegisterBg} alt="Register" className="img img-bg" />
            </div>
            <div className="col-md-6 p-0">
              {props.children}
            </div>
          </div>
        </S.RegisterWrapper>
      </div>
    </Layout>
  )
}

function ThirdPartyLogin(props) {
  return (
    <S.ThirdParty>
      <Google />
      <Facebook/>
    </S.ThirdParty>
  );
}

function Or(props) {
  return (
    <S.Or>
      <div></div>
      <span>OR</span>
      <div></div>
    </S.Or>
  );
}

function Tops(props) {
  return (
    <div className="tops">
      <S.Title>Register.</S.Title>
      <S.SubTitle>Already have an account?
        <a href="#fv"> Login.</a>
      </S.SubTitle>
    </div>
  )
}