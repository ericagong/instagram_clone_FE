import { useState, useEffect } from "react";

import { apis } from "../../shared/axios";
import RESP from "../../server/response";
import Following from "./Following";

// TODO dispatch to create
// TODO infinite scroll 구현 with currPageNum
const Followings = ({ username }) => {
  const [currPageNum, setCurrPageNum] = useState(1);
  const [pageLimit, setPageLimit] = useState(5);
  const [allFollowings, setAllFollowings] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    currpage: 0,
    totalpage: 0,
    currcontent: 0,
    isme: false,
  });

  const getFollowings = async (pageNum, pageLimit, username) => {
    // const resp = await apis.get_profile_followings(
    //   username,
    //   pageNum,
    //   pageLimit
    // );
    // const {
    //   result,
    //   status: { message },
    //   output,
    // } = resp.data;

    // success
    let resp = {};
    if (username !== "") {
      resp = RESP.PROFILE.GET_FOLLOWINGS_SUCCESS;
    } else {
      resp = RESP.PROFILE.GET_MY_FOLLOWINGS_SUCCESS;
    }

    const {
      result,
      status: { message },
      output,
    } = resp;

    // fail
    // const {
    //   result,
    //   status: { message },
    //   output,
    // } = RESP.PROFILE.GET_Followings_FAIL;

    // TODO modal로 처리하기
    if (!result) {
      alert(message);
      return;
    }

    const { following, ...rest } = output;

    setAllFollowings([...allFollowings, ...following]);
    setPageInfo({ ...pageInfo, ...rest });
  };

  useEffect(() => {
    getFollowings(currPageNum, pageLimit, username);
  }, []);

  const followingList = allFollowings.map((following) => (
    <Following key={following.username} {...following} isme={pageInfo.isme} />
  ));

  return (
    <>
      <div>{followingList}</div>
    </>
  );
};

export default Followings;
