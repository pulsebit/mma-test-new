import React, { useEffect, useState, useCallback } from 'react'
import { connect, useDispatch } from 'react-redux'
import * as P from './profileStyle'
import useAuth from 'hooks/useAuth';
import { MdModeEdit } from 'react-icons/md';
import User from 'assets/images/user.svg';
import axios from 'axios';
import { Input, Select } from 'components/Form';
import * as formStyle from 'components/Form/form.style';
import { useForm } from 'react-hook-form';
import * as authConstant from 'store/constants/authConstants';
import { toast } from 'react-toastify';
import { DatePicker } from 'antd';
import moment from 'moment'

export const Profile = (props) => {
  const { profile } = useAuth();
  const { register, handleSubmit, setValue } = useForm();
  const { access_token } = useAuth();
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [countries, setCountries] = useState([]);
  const [birthdate, setBirthdate] = useState('');

  const onUpdateProfile = useCallback(async (form) => {
    try {
      const config = { headers: { Authorization: `Bearer ${access_token}` } };
      setDisableSubmit(true);
      const { data } = await axios.post('/api/users/profile', {...form, birthdate}, config);
      if (data) {
        toast.success('Profile successfully updated.');
        props.updateProfile(data);
        setDisableSubmit(false);
      }
    }
    catch(err) {
      setDisableSubmit(false);
      toast.error('Error: ' + err.message);
    }
  }, [access_token, props, birthdate]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
      setCountries( data && data.map(item => ({ text: item.name })) );
    })()
  }, []);

  useEffect(() => {
    if (profile) {
      setValue('email', profile.email);
      setValue('first_name', profile.first_name);
      setValue('last_name', profile.last_name);
      setValue('mobile_no', profile.mobile_no);
      setValue('gender', profile.gender);
      setValue('birthdate', profile.birthdate);
      setValue('address', profile.address);
      setValue('state', profile.state);
      setValue('zipcode', profile.zipcode);
      setValue('country', profile.country);
    }
  });

  return (
    <P.ProfileWrapper onSubmit={handleSubmit(onUpdateProfile)}>
      <ImageForm />
      <P.FormGroup>
        <Input type="email" label="Email" placeholder="Email" disabled={true} {...register('email')} />
      </P.FormGroup>
      <P.FormGroup className="form-group">
        <div className="row">
          <div className="col-md-6 pl-0">
            <Input label="First Name" placeholder="First Name" {...register('first_name')} />
          </div>
          <div className="col-md-6 pr-0">
            <Input label="Last Name" placeholder="Last Name" {...register('last_name')} />
          </div>
        </div>
      </P.FormGroup>
      <P.FormGroup>
        <Input label="Contact Number" placeholder="Contact Number" {...register('mobile_no')} />
      </P.FormGroup>
      <P.FormGroup>
        <div className="row">
          <div className="col-md-6 pl-0">
            <Select 
              label="Gender" 
              options={[{text: 'Male'}, { text: 'Female' }]}
              {...register('gender')} 
            />
          </div>
          <div className="col-md-6 pr-0">
            <P.DatePickerWrapper>
              <formStyle.Label>Birthdate</formStyle.Label>
              <DatePicker 
                className="form-control" 
                placeholder="Birthdate"
                label="Birthdate"
                format={"MMM D, YYYY"}
                defaultValue={profile && moment.utc(profile.birthdate || new Date())}
                onChange={(date) => setBirthdate(date)}
              />
            </P.DatePickerWrapper>
          </div>
        </div>
      </P.FormGroup>
      <P.FormGroup>
        <Input label="Address" placeholder="Address" {...register('address')} />
      </P.FormGroup>
      <P.FormGroup>
        <Input label="State" placeholder="State" {...register('state')} />
      </P.FormGroup>
      <P.FormGroup>
        <Input label="Zip Code" placeholder="Zip Code" {...register('zipcode')} />
      </P.FormGroup>
      <P.FormGroup>
        <Select label="Country" 
          options={countries} 
          {...register('country')}
        />
      </P.FormGroup>
      <P.FormGroup className="text-right">
        <button type="submit" className="btn btn-primary" disabled={disableSubmit}>save</button>
      </P.FormGroup>
    </P.ProfileWrapper>
  )
}

const mapStateToProps = (state) => ({ })
const mapDispatchToProps = (dispatch) => ({
  updateProfile: (payload) => dispatch({ 
    type: authConstant.CHANGE_PROFILE, 
    payload,
  }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

function ImageForm(props) {
  const { profile, access_token } = useAuth();
  const dispatch = useDispatch();

  const handleChange = React.useCallback(async (e) => {
    try {
      const reader = new FileReader();
      const [file] = e.target.files;
      if (!file) return;
      const config = { headers: { Authorization: `Bearer ${access_token}` } };
      reader.onload = async (ev) => {
        const { result } = ev.target;
        const base64 = result.split(',')[1];
        const { data: payload } = await axios.post('/api/users/update-profile-picture', {picture: base64}, config);
        if (payload) {
          toast.success('Successfully updated.');
          dispatch({ 
            type: authConstant.CHANGE_PROFILE, 
            payload,
          });
        }
      }
      reader.readAsDataURL(file);
    }
    catch(err) {
      toast.err('Error: ' + err.message);
    }
  }, [dispatch, access_token]);
  return (
    <div className="text-center">
      <P.ImageWrapper 
        style={{ backgroundImage: `url(${(profile && profile.picture) || User})` }}
        htmlFor="input-file"
      >
        <input type="file" id="input-file" 
          accept="image/png, image/jpeg, image/jpg, image/jpeg, image/gif"
          onChange={handleChange} />
        <P.IconWrapper>
          <MdModeEdit/>
        </P.IconWrapper>
      </P.ImageWrapper>
    </div>
  )
}