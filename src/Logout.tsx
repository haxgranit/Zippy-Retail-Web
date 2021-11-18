import { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';

export default function Logout() {
  const { instance } = useMsal();

  useEffect(() => {
    instance.logoutRedirect();
  }, []);

  return null;
}
