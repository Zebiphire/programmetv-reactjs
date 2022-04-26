import Time from "./Time";
import Picture from "./Picture";
import Infos from "./Infos";

const Content = (props) => {
  const { time, image, title, duration, type, isUnseen, direct } = props.item;

  return (
    <div className="content">
      <Time time={time} />
      <Picture image={image} />
      <Infos
        title={title}
        duration={duration}
        type={type}
        isUnseen={isUnseen}
        direct={direct}
      />
    </div>
  );
};

export default Content;
