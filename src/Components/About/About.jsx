import React from "react";
import videoPresentation from "../../Assets/video.mp4";
import ReactPlayer from "react-player";
import { StyledVideo, StyledParagraph, StyledTextPart } from "./About";

const About = () => {
  return (
    <div className="d-flex">
      <StyledVideo>
        <ReactPlayer
          width="100%"
          height="100%"
          url={videoPresentation}
          alt="Capa vídeo Prodigious"
        />
      </StyledVideo>
      <StyledParagraph>
        We design, produce and deliver{" "}
        <StyledTextPart>brand content</StyledTextPart> across{" "}
        <StyledTextPart>all channels</StyledTextPart>, using the best talent,
        processes and tools. The result? Seamless global execution of multiple
        content type across <StyledTextPart>all markets</StyledTextPart>,
        without compromising <StyledTextPart>creative quality</StyledTextPart>.
      </StyledParagraph>
    </div>
  );
};

export default About;
