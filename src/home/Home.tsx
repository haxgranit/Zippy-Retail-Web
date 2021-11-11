import { useAppSelector } from '../app/hooks';
import { selectAuth } from '../features/auth/authSlice';
import HomeLoggedIn from './HomeLoggedIn';
import HomeLoggedOut from './HomeLoggedOut';

export default function Home() {
  const auth = useAppSelector(selectAuth);
  return auth.username ? <HomeLoggedIn /> : <HomeLoggedOut />
}