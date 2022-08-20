import { useState } from "react";

import { apis } from "../../shared/axios";
import RESP from "../../server/response";
import ImgView from "./ImgView";
import UserProfile from "../../elements/UserProfile";
import Like from "../../elements/Like";

// edit delete
// TODO content hashtag Link
// TODO Like, Comment, More component 분리!
const Post = ({
  id,
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

  const [isFollowing, setIsFollowing] = useState(isfollowing);

  const toggleComment = () => {
    setShowComment((prev) => !prev);
  };

  const toggleMore = () => {
    setShowMore((prev) => !prev);
  };

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
            <Like isliked={isliked} />
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
      <div style={{ marginBottom: "30px" }}>
        {showComment ? <div>Comments List!</div> : null}
      </div>
    </>
  );
};

export default Post;
