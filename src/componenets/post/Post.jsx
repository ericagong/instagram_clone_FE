import { apis } from "../../shared/axios";
import RESP from "../../server/response";
import ImgView from "./ImgView";
import UserProfile from "../../elements/UserProfile";
import Username from "../../elements/Username";
import Content from "./Content";

// edit delete
// TODO content hashtag Link
// TODO code spliting!
const Post = ({ userprofile, imageUrls, username, time, isme, ...rest }) => {
  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <div>
          {imageUrls.length !== 0 ? (
            <ImgView imgUrls={imageUrls} />
          ) : (
            <div>No Images</div>
          )}
        </div>
        <div>
          <UserProfile userprofile={userprofile} />
          <Username isme={isme} username={username} />
          <div>{time}</div>
        </div>
        <div>
          <Content isme={isme} {...rest} />
        </div>
      </div>
    </>
  );
};

export default Post;
