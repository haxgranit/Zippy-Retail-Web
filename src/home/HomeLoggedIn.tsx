import { useAppSelector } from "../app/hooks";
import { selectAuth } from "../features/auth/authSlice";

export default function HomeLoggedIn() {
    const auth = useAppSelector(selectAuth);

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Hello {auth.username}</h1>
          </div>
        </div>
      </div>
    );
}