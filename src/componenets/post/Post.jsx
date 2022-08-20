import { useState } from "react";

// edit delete
const Post = ({
  username,
  userprofile,
  content,
  imageUrls,
  hashtags,
  time,
  ismine,
  isliked,
  isfollowing,
  numcomments,
  numlikes,
}) => {
  return (
    <>
      <div>
        <img src={imageUrls[currImg]} alt='img' />
      </div>
    </>
  );
};

export default Post;
