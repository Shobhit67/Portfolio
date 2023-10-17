import profilePic from "../imagex/profile-pic.jpeg";

function Introduction() {
  return (
    <div className="intro">
      <img src={profilePic} alt="img" srcset="" />
      <h3 className="hi"><span className="HandWave">👋</span>Hey, I'm Goyal goyal Goyal</h3>
      <h1 className="intro-main-h1">
        I develop
        <span> interactive </span>
        <br />
        Web-apps
      </h1>

      <p className="sub-intro">
        A <strong>UI/UX developer </strong> and <strong>programmer </strong><br />
        With <strong>passionate connection building</strong>
      </p>
    </div>
  );
}

export default Introduction;
