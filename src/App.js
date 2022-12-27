import "./App.css";
import eren from "./eren.jpg";
import Profile from "./profile/Profile";

function App() {
  const profile = {
    fn: "Ahmed Ayachi",
    bio: "I am a 18 year old begginer programmer from tunisia learning react props",
    proffession: "full stack programmer ",
  };
  const showName = (fn) => alert(`full name ${fn}`);
  return (
    <>
      <Profile profile={profile} handelName={showName}>
        <img
          src={eren}
          alt="profile pic"
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
          }}
        />
      </Profile>
    </>
  );
}

export default App;
