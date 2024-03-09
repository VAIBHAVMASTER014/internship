import { Navigate } from "react-router-dom";

// imported files
import { useAppSelector } from "../redux/foodSlice";

interface PrivateRouteProps {
  children:
    | React.ReactElement
    | React.ReactPortal;
}

const PrivateRoutes: React.FC<PrivateRouteProps> = ({ children }) => {
  const auth = useAppSelector((state) => state.cart.valid);
  return <>{auth ? children : <Navigate to="/login" />} </>;
};

export default PrivateRoutes;
