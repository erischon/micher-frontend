import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useSelector((store: RootState) => store.user);
  if (!user) {
    return <Navigate to="landing" />;
  }
  return children;
};
export default ProtectedRoute;
