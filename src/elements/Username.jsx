import { Link } from "react-router-dom";

const Username = ({ isme, username }) => {
  return (
    <>
      <Link to={!isme ? `profile/${username}` : "profile/"}>
        <div>{username}</div>
      </Link>
    </>
  );
};

export default Username;
