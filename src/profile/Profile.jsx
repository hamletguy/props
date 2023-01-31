import React from "react";
import PropTypes from "prop-types";

const Profile = ({ profile, children, handelName }) => {
  const { fn, bio, proffession } = profile;
  const handleClick = (e) => {
    e.preventDefault();
    handelName(fn);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "42%",
        marginTop: "8%",
      }}
    >
      {children}
      <h1 style={{ marginLeft: "-5%" }}>{fn}</h1>
      <h4 style={{ marginLeft: "-15%", marginRight: "55%" }}>{bio}</h4>
      <h4 style={{ marginLeft: "-5%" }}> {proffession} </h4>
      <button
        onClick={handleClick}
        style={{ marginRight: "60%", marginLeft: "-15%" }}
      >
        handelName
      </button>
    </div>
  );
};
Profile.defaultProps = {
  Profile: {
    fn: "john doe",
    bio: "web dev with horendous websites",
    proffession: "web developer",
  },
  handelName: (x) => console.log(`hello ${x}`),
};
Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  handelName: PropTypes.object.isRequired,
};
export default Profile;
