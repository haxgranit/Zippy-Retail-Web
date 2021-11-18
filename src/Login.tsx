import { useEffect } from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from './authConfig';

export default function Login() {
  const { inProgress, instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated
      && inProgress !== InteractionStatus.Startup
      && inProgress !== InteractionStatus.HandleRedirect) {
      instance.loginRedirect(loginRequest);
    } else {
      instance.handleRedirectPromise();
      navigate('/');
    }
  }, []);

  return null;
}
