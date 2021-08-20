import jwt_decode from 'jwt-decode';

export function verify(tokenId) {
  return jwt_decode(tokenId);
}