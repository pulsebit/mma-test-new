import React from 'react'
import { connect, useDispatch } from 'react-redux'
import * as P from './profileStyle'
import useAuth from 'hooks/useAuth';
import { MdModeEdit } from 'react-icons/md';
import User from 'assets/images/user.svg';
import axios from 'axios';

export const Profile = (props) => {

  return (
    <P.ProfileWrapper>
      
      <ImageForm />

      <P.FormGroup className="form-group">
        <div className="row">
          <div className="col-md-6 pl-0">
            <P.Label>First Name</P.Label>
            <P.Input placeholder="First Name" className="form-control" />
          </div>
          <div className="col-md-6 pr-0">
            <P.Label>Last Name</P.Label>
            <P.Input placeholder="Last Name" className="form-control" />
          </div>
        </div>
      </P.FormGroup>
      <Wrapper label="Email">
        <P.Input placeholder="Email" className="form-control" />
      </Wrapper>
      <Wrapper label="Contact Number">
        <P.Input placeholder="Contact Number" className="form-control" />
      </Wrapper>
      <P.FormGroup>
        <div className="row">
          <div className="col-md-6 pl-0">
            <P.Label>Gender</P.Label>
            <P.Input placeholder="Gender" className="form-control" />
          </div>
          <div className="col-md-6 pr-0">
            <P.Label>Birthdate</P.Label>
            <P.Input placeholder="Birthdate" className="form-control" />
          </div>
        </div>
      </P.FormGroup>
      <Wrapper label="Address">
        <P.Input placeholder="Address" className="form-control" />
      </Wrapper>
      <Wrapper label="State">
        <P.Input placeholder="State" className="form-control" />
      </Wrapper>
      <Wrapper label="Zip Code">
        <P.Input placeholder="Zip Code" className="form-control" />
      </Wrapper>
      <Wrapper label="Country">
        <P.Input placeholder="Country" className="form-control" />
      </Wrapper>
      <Wrapper>
        <button className="btn btn-primary">save</button>
      </Wrapper>
    </P.ProfileWrapper>
  )
}

function ImageForm(props) {
  const { profile, access_token } = useAuth();
  const [imgUrl, setImgUrl] = React.useState((profile && profile.picture) || User);
  const dispatch = useDispatch();
  const config = {
    headers: {
     Authorization: `Bearer ${access_token}`,
    },
 }

  const handleChange = React.useCallback(async (e) => {
    const res = await axios.post('/api/users/profile', {}, config);
    console.log(res);
    dispatch({ type: 'Change profile picture', payload: res.data })
    // const reader = new FileReader();
    // const [file] = e.target.files;
    // reader.onload = (ev) => {
    //   const { result } = ev.target;
    //   setImgUrl(result);
    // }
    // reader.readAsDataURL(file);
  }, []);

  return (
    <div className="text-center">
      <P.ImageWrapper 
        style={{ backgroundImage: `url(${imgUrl})` }}
        htmlFor="input-file"
      >
        <input type="file" id="input-file" onChange={handleChange} />
        <P.IconWrapper>
          <MdModeEdit/>
        </P.IconWrapper>
      </P.ImageWrapper>
    </div>
  )
}

function Wrapper(props) {
  return (
    <P.FormGroup>
      {props.label && <P.Label>{props.label}</P.Label>}
      {props.children}
    </P.FormGroup>
  );
}

const mapStateToProps = (state) => ({ })
const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
