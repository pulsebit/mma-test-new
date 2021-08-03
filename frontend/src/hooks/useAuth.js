import { useSelector } from 'react-redux';

export default function useAuth() {
  const { access_token, isAuthenticated, user } = useSelector(state => state.auth);
  return {
    access_token,
    isAuthenticated,
    user,
  }
}