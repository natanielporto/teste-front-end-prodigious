import React, { useState, useEffect } from "react";
import videoPresentation from "../../Assets/video.mp4";
import ReactPlayer from "react-player";
import {
  StyledVideo,
  StyledParagraph,
  StyledTextPart,
  StyledDiv,
  StyledButton,
  StyledRoundBtn,
} from "./About";

const About = () => {
  const [video, setVideo] = useState([
    { id: 1, video: videoPresentation, play: true },
    {
      id: 2,
      video: "https://www.youtube.com/watch?v=ycPr5-27vSI",
      play: false,
    },
    {
      id: 3,
      video: "https://www.youtube.com/watch?v=EYYdQB0mkEU",
      play: false,
    },
    {
      id: 4,
      video: "https://www.youtube.com/watch?v=szD6dQPvRuE",
      play: false,
    },
    {
      id: 5,
      video: "https://www.youtube.com/watch?v=SsEn0hlKDKA",
      play: false,
    },
  ]);
  const [url, setUrl] = useState(videoPresentation);

  const handleSelect = ({ target }) => {
    const number = Number(target.innerText);
    setUrl(video.filter((el) => el.id === number)[0].video);
  };

  return (
    <>
      <StyledDiv>
        <div>
          <StyledVideo>
            <ReactPlayer
              controls
              min-width="100%"
              min-height="367px"
              url={url}
              alt="Capa vídeo Prodigious"
            />
          </StyledVideo>
          <div
            className="d-flex justify-content-center m-0"
            style={{ width: "640px" }}
          >
            {video.map((el) => (
              <StyledRoundBtn key={el.id} onClick={handleSelect}>
                {el.id}
              </StyledRoundBtn>
            ))}
          </div>
        </div>
        <StyledParagraph>
          We design, produce and deliver{" "}
          <StyledTextPart>brand content</StyledTextPart> across{" "}
          <StyledTextPart>all channels</StyledTextPart>, using the best talent,
          processes and tools. The result? Seamless global execution of multiple
          content type across <StyledTextPart>all markets</StyledTextPart>,
          without compromising <StyledTextPart>creative quality</StyledTextPart>
          .
        </StyledParagraph>
      </StyledDiv>
    </>
  );
};

export default About;
