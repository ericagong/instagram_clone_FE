import { useState } from "react";

import ImgView from "./ImgView";
import UserProfile from "../../elements/UserProfile";

// edit delete
// TODO content hashtag Link
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
  const [hasImage, setHasImage] = useState(imageUrls.length !== 0);
  const [showComment, setShowComment] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleComment = () => {
    setShowComment((prev) => !prev);
  };

  const toggleMore = () => {
    setShowMore((prev) => !prev);
  };

  const toggleLike = () => {};

  const clickFollow = () => {};

  const clickUnfollow = () => {};

  const clickEdit = () => {};

  const clickDelete = () => {};

  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <div>
          {hasImage ? <ImgView imgUrls={imageUrls} /> : <div>No Images</div>}
        </div>
        <div>
          <UserProfile userprofile={userprofile} />
          <div>{username}</div>
          <div>{time}</div>
        </div>
        <div>
          <div>{content}</div>
        </div>
        <div>
          <div>
            {!isliked ? (
              <button type='button' onClick={toggleLike}>
                Like
              </button>
            ) : (
              <button type='button' onClick={toggleLike}>
                Unlike
              </button>
            )}
            <div>{numlikes}</div>
          </div>
          <div>
            {!showComment ? (
              <button type='button' onClick={toggleComment}>
                Show Comments
              </button>
            ) : (
              <button type='button' onClick={toggleComment}>
                Hide Comments
              </button>
            )}
            <div>{numcomments}</div>
          </div>
          <div>
            {!showMore ? (
              <button type='button' onClick={toggleMore}>
                Show more
              </button>
            ) : (
              <button type='button' onClick={toggleMore}>
                Hide
              </button>
            )}
            {showMore ? (
              <div>
                {!ismine && !isfollowing ? (
                  <button type='button' onClick={clickFollow}>
                    Follow this user
                  </button>
                ) : null}
                {!ismine && isfollowing ? (
                  <button type='button' onClick={clickUnfollow}>
                    Unfollow this user
                  </button>
                ) : null}
                {ismine ? (
                  <div>
                    <button type='button' onClick={clickEdit}>
                      Edit this post
                    </button>
                    <button type='button' onClick={clickDelete}>
                      Delete this post
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
