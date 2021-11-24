import VideoElement from "../videoElement/VideoElement";

interface showTypes {
  name: string;
  summary: string;
}
interface listTypes {
  score: number;
  show: showTypes;
}

interface VideoElementListProps {
  listName: string;
  list: [listTypes];
}
function VideoElementList(props: VideoElementListProps) {
  console.log(props);
  return (
    <div className="VideoElementList">
      {props.list.map((item) => (
        <VideoElement title={item.show.name} description={item.show.summary} />
      ))}
    </div>
  );
}

export default VideoElementList;
