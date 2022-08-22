import { useState } from "react";

import Posts from "../post/Posts";
import Followings from "./Followings";

const Content = ({ username }) => {
  const [curr, setCurr] = useState("Posts");

  const clickCategory = (e) => {
    const id = e.target.id;
    if (curr !== id) {
      setCurr(id);
    }
  };

  return (
    <>
      <div>
        <button type='button' id='Posts' onClick={clickCategory}>
          Posts
        </button>
        <button type='button' id='Followings' onClick={clickCategory}>
          Followings
        </button>
        <button type='button' id='Followers' onClick={clickCategory}>
          Followers
        </button>
      </div>
      <div>
        {curr === "Posts" ? (
          <Posts onProfile={true} username={username} />
        ) : null}
        {curr === "Followings" ? <Followings username={username} /> : null}
        {curr === "Followers" ? <div>Followers</div> : null}
      </div>
    </>
  );
};

export default Content;
