import React from 'react'
import { connect, useDispatch } from 'react-redux'
import * as P from './profileStyle'
import useAuth from 'hooks/useAuth';
import { MdModeEdit } from 'react-icons/md';
import User from 'assets/images/user.svg';
import axios from 'axios';
import { Input } from 'components/Form';

export const Profile = (props) => {
  const { profile } = useAuth();

  return (
    <P.ProfileWrapper>
      <ImageForm />
      <P.FormGroup>
        <Input label="Email" placeholder="Email" value={profile && profile.email} />
      </P.FormGroup>
      <P.FormGroup className="form-group">
        <div className="row">
          <div className="col-md-6 pl-0">
            <Input label="First Name" placeholder="Email" />
          </div>
          <div className="col-md-6 pr-0">
            <Input label="Last Name" placeholder="Last Name" />
          </div>
        </div>
      </P.FormGroup>
      <P.FormGroup>
        <Input label="Contact Number" placeholder="Contact Number" />
      </P.FormGroup>
      <P.FormGroup>
        <div className="row">
          <div className="col-md-6 pl-0">
            <Input label="Gender" placeholder="Gender" />
          </div>
          <div className="col-md-6 pr-0">
            <Input label="Birthdate" placeholder="Birthdate" />
          </div>
        </div>
      </P.FormGroup>
      <P.FormGroup>
        <Input label="Address" placeholder="Address" />
      </P.FormGroup>
      <P.FormGroup>
        <Input label="State" placeholder="State" />
      </P.FormGroup>
      <P.FormGroup>
        <Input label="Zip Code" placeholder="Zip Code" />
      </P.FormGroup>
      <P.FormGroup>
        <Input label="Country" placeholder="Country" />
      </P.FormGroup>
      <P.FormGroup>
        <button className="btn btn-primary">save</button>
      </P.FormGroup>
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

const mapStateToProps = (state) => ({ })
const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
