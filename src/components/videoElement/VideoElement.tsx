import React from "react"; // we need this to make JSX compile
import ReactHtmlParser from "react-html-parser";
import "./VideoElement.scss";

import SaveIcon from "../img/save.svg";

type videoProps = {
  title: string;
  description: string;
  saved?: boolean;
};

export const VideoElement = ({ title, description, saved }: videoProps) => {
  return (
    <div className="video-element">
      <div className="video-element__wrapper">
        <div className="video-element__img"></div>
        <div>
          <h3 className="video-element__title">{title}</h3>
          <div className="video-element__description">
            {ReactHtmlParser(description)}
          </div>
        </div>
      </div>
      <p className="video-element__save">
        <img
          src={SaveIcon}
          alt="save icon"
          className="video-element__save-icon"
        />
        {saved ? "Remove" : "Save"}
      </p>
    </div>
  );
};

export default VideoElement;
