import React, { useState } from "react";
import videoPresentation from "../../Assets/video.mp4";
import ReactPlayer from "react-player";
import {
  StyledVideo,
  StyledParagraph,
  StyledTextPart,
  StyledDiv,
  StyledButton,
} from "./About";

const About = () => {
  const [video, setVideo] = useState(videoPresentation);
  const handleRandomVideo = () => {
    switch (Math.floor(Math.random() * 11)) {
      case 1:
        setVideo("https://www.youtube.com/watch?v=ycPr5-27vSI");
        break;
      case 2:
        setVideo("https://www.youtube.com/watch?v=EYYdQB0mkEU");
        break;
      case 3:
        setVideo("https://www.youtube.com/watch?v=szD6dQPvRuE");
        break;
      case 4:
        setVideo("https://www.youtube.com/watch?v=SsEn0hlKDKA");
        break;
      case 5:
        setVideo("https://www.youtube.com/watch?v=FssULNGSZIA");
        break;
      case 6:
        setVideo("https://www.youtube.com/watch?v=MSEQZ8reJA4");
        break;
      case 7:
        setVideo("https://www.youtube.com/watch?v=aYBEcFvI8o8");
        break;
      case 8:
        setVideo("https://www.youtube.com/watch?v=8Lvrikv6oPs");
        break;
      case 9:
        setVideo("https://www.youtube.com/watch?v=OKY6BGcx37k&t=1812s");
        break;
      case 10:
        setVideo(videoPresentation);
        break;
    }
  };

  return (
    <>
      <StyledDiv>
        <StyledVideo>
          <ReactPlayer
            controls
            width="640px"
            height="480px"
            url={video}
            alt="Capa vídeo Prodigious"
          />
        </StyledVideo>
        <StyledParagraph>
          We design, produce and deliver{" "}
          <StyledTextPart>brand content</StyledTextPart> across{" "}
          <StyledTextPart>all channels</StyledTextPart>, using the best talent,
          processes and tools. The result? Seamless global execution of multiple
          content type across <StyledTextPart>all markets</StyledTextPart>,
          without compromising <StyledTextPart>creative quality</StyledTextPart>
          .
          <StyledButton onClick={handleRandomVideo}>
            Hit a random video
          </StyledButton>
        </StyledParagraph>
      </StyledDiv>
    </>
  );
};

export default About;
