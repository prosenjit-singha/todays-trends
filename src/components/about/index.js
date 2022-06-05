import React from "react";
import NewsPaperPic from "../../img/newspaper-1.svg";

const About = () => {
  const aosStyle = "fade-up";
  return (
    <div id="about" style={{ overflowX: "hidden", minHeight: "100vh" }}>
      <div className="context">
        <h2 data-aos={aosStyle}>What does this page do?</h2>
        <p data-aos={aosStyle}>
          Proident consectetur nulla reprehenderit fugiat exercitation culpa.
          Fugiat reprehenderit proident deserunt cillum commodo non. Ex
          adipisicing deserunt id sint amet do labore voluptate esse.
          Consectetur aliquip dolor nisi proident in cillum esse.
        </p>

        <h2 data-aos={aosStyle}>
          Proident adipisicing ullamco aliquip reprehenderit laboris in dolore
          cillum anim.
        </h2>
        <p data-aos={aosStyle}>
          Aliqua cupidatat commodo velit culpa reprehenderit occaecat sunt do
          est ullamco tempor aute. Cillum ex eu incididunt consectetur irure ut
          Lorem consequat officia cillum laborum. Cillum occaecat veniam sunt
          voluptate.
        </p>

        <h2 data-aos={aosStyle}>
          Quis exercitation minim quis pariatur eiusmod mollit non et ullamco
          ullamco pariatur proident eiusmod veniam.
        </h2>
        <p data-aos={aosStyle}>
          Est dolor adipisicing enim nisi aute ut excepteur duis occaecat nulla
          laborum veniam. Ut aliquip proident cillum quis nisi in minim ex
          pariatur officia cillum qui incididunt aliqua. Consectetur commodo
          minim do id id tempor velit consectetur ullamco sit. Mollit in veniam
          id exercitation anim anim in nisi eu Lorem sint aliqua irure non.
        </p>

        <h2 data-aos={aosStyle}>
          Consectetur ut irure proident voluptate officia incididunt aute esse
          et ullamco non nostrud aliquip proident.
        </h2>
        <p data-aos={aosStyle}>
          Aliqua deserunt voluptate veniam voluptate magna nostrud laboris ut
          ipsum. Lorem reprehenderit ipsum commodo ullamco officia. Culpa dolor
          sunt occaecat cupidatat est et excepteur. Do dolor enim proident magna
          esse. Ullamco ea qui voluptate sit voluptate non. Ea do in irure sit
          pariatur ullamco mollit. Esse culpa mollit labore nisi.
        </p>
      </div>
      <div className="photo">
        {/* <img src={NewsPaperPic} width="500px" alt="paper" /> */}
      </div>
    </div>
  );
};

export default About;
