import { useSelector } from "react-redux";

import MiniUser from "../common/MiniUser";
import MiniLogin from "../common/MiniLogin";

const HomeLayout = (props) => {
  const isLogin = useSelector((state) => state.user.isLogin);

  return <>{isLogin ? <MiniUser /> : <MiniLogin />}</>;
};

export default HomeLayout;
