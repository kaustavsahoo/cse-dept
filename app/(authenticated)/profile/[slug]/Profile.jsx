import "./Profile.css";
import ImageLink from "./ImageLink";
import ProjectLink from "./ProjectLink";
function Profile() {
  return (
    <div className="mainDiv">
      <img
        src="https://cdn.pixabay.com/photo/2019/03/12/12/47/people-4050698_1280.jpg"
        className="coverPhoto"
      ></img>
      <div className="profileCard">
        <img
          src="https://media.istockphoto.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=1024x1024&w=is&k=20&c=hQU_ndMabSsJi1Z-ilOyD2rXSC3-S0Toc98uGWSEpLM="
          className="personImage"
        ></img>
        <h1 className="userName">Rohan Pareek</h1>
        <div className="about">
          I'm Rohan, a passionate and dedicated software developer with a love
          for creating innovative solutions and bringing ideas to life through
          code. With a strong background in programming languages like Java,
          Python, and C++, I thrive in the ever-evolving world of technology. I
          find immense satisfaction in solving complex problems and crafting
          efficient, user-friendly software that makes a positive impact.
          Whether it's building web applications, designing mobile apps, or
          optimizing database systems, I'm always eager to tackle new challenges
          and keep up with the latest trends in the software development
          industry. When I'm not immersed in lines of code, you can find me
          exploring new programming languages, contributing to open-source
          projects, or enjoying a good cup of coffee while brainstorming my next
          coding adventure. Let's connect and collaborate on exciting software
          projects!
        </div>
      </div>
      <div className="card">
        <h1 className="headings">Coding Platforms</h1>
        <ImageLink
          imageUrl={
            "https://codeforces.org/s/88951/images/codeforces-sponsored-by-ton.png"
          }
          linkUrl={"https://codeforces.com/profile/rohan_pareek"}
          altText={"Codeforces"}
        />
        <ImageLink
          imageUrl={
            "https://codeforces.org/s/88951/images/codeforces-sponsored-by-ton.png"
          }
          linkUrl={"https://codeforces.com/profile/rohan_pareek"}
          altText={"Codeforces"}
        />
        <ImageLink
          imageUrl={
            "https://codeforces.org/s/88951/images/codeforces-sponsored-by-ton.png"
          }
          linkUrl={"https://codeforces.com/profile/rohan_pareek"}
          altText={"Codeforces"}
        />
      </div>
      <div className="card">
        <h1 className="headings">Projects</h1>
        <ProjectLink linkUrl={"https://tvf-ten.vercel.app"} />
      </div>
    </div>
  );
}

export default Profile;
