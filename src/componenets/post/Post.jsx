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

  const onToggleCommentHandler = () => {
    setShowComment((prev) => !prev);
  };

  const onToggleMoreHandler = () => {
    setShowMore((prev) => !prev);
  };

  const onFollowUserHandler = () => {};

  const onUnfollowUserHandler = () => {};

  const onEditHandler = () => {};

  const onDeleteHandler = () => {};

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
              <button type='button'>Like</button>
            ) : (
              <button type='button'>Unlike </button>
            )}
            <div>{numlikes}</div>
          </div>
          <div>
            {!showComment ? (
              <button type='button' onClick={onToggleCommentHandler}>
                Show Comments
              </button>
            ) : (
              <button type='button' onClick={onToggleCommentHandler}>
                Hide Comments
              </button>
            )}
            <div>{numcomments}</div>
          </div>
          <div>
            {!showMore ? (
              <button type='button' onClick={onToggleMoreHandler}>
                Show more
              </button>
            ) : (
              <button type='button' onClick={onToggleMoreHandler}>
                Hide
              </button>
            )}
            {showMore ? (
              <div>
                {!ismine && !isfollowing ? (
                  <button type='button' onClick={onFollowUserHandler}>
                    Follow this user
                  </button>
                ) : null}
                {!ismine && isfollowing ? (
                  <button type='button' onClick={onUnfollowUserHandler}>
                    Unfollow this user
                  </button>
                ) : null}
                {ismine ? (
                  <div>
                    <button type='button' onClick={onEditHandler}>
                      Edit this post
                    </button>
                    <button type='button' onClick={onDeleteHandler}>
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
