import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';
import HomeLoggedIn from './HomeLoggedIn';
import HomeLoggedOut from './HomeLoggedOut';

export default function Home() {
  const auth = useAppSelector(selectUser);
  return auth.loggedIn ? <HomeLoggedIn /> : <HomeLoggedOut />;
}
