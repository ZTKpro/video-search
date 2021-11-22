import VideoElement from "../videoElement/VideoElement";

const videoElementProps = {
  title: "Tytuł",
  description: "Opis",
};

function VideoElementList() {
  return (
    <div className="VideoElementList">
      <VideoElement {...videoElementProps} />
    </div>
  );
}

export default VideoElementList;
