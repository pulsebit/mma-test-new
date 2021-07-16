import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';

export default function useAuth() {
  const { access_token, user_id, isAuthenticated, id_token } = useSelector(state => state.auth);
  const profile = id_token && jwt_decode(id_token);
  return {
    access_token,
    user_id,
    isAuthenticated,
    profile,
  }
}