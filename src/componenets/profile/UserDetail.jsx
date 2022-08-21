import { useState, useEffect } from "react";

import { apis } from "../../shared/axios";
import RESP from "../../server/response";
import UserProfile from "../../elements/UserProfile";
import Username from "../../elements/Username";

const UserDetail = (props) => {
  const [info, setInfo] = useState({
    username: "",
    userprofile: "",
  });

  const getProfileInfo = async () => {
    // const resp = await apis.get_profile_info("");
    // const {
    //   result,
    //   status: { message },
    //   username,
    //   userprofile,
    //   numposts,
    //   numfollowing,
    //   numfollowers,
    // } = resp.data;

    // // success
    const {
      result,
      status: { message },
      output,
    } = RESP.PROFILE.GET_INFO_SUCCESS;

    // fail
    // const {
    //   result,
    //   status: { message },
    // 	output,
    // } = RESP.PROFILE.GET_INFO_FAIL;

    if (!result) {
      alert(message);
      return;
    }

    setInfo({
      ...info,
      ...output,
    });
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <>
      <div>
        UserDetail
        <UserProfile userprofile={info.userprofile} />
        <Username isme='true' username={info.username} />
      </div>
    </>
  );
};

export default UserDetail;
