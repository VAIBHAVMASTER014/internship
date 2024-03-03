import { useSelector } from "react-redux";

// imported files
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

const App = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!auth ? (
        <Auth />
      ) : (
        <>
          <UserProfile />
          <Counter />
        </>
      )}
    </>
  );
};

export default App;
