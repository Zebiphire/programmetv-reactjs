import Title from "./Title";
import Duration from "./Duration";
import Type from "./Type";
import IsUnseen from "./Unseen";
import Direct from "./Direct";

const Infos = (props) => {
  const { title, type, duration, isUnseen, direct } = props;

  return (
    <div className="infos">
      <Title title={title}></Title>
      <Type type={type}></Type>
      <div>
        <Duration duration={duration}></Duration>
        {isUnseen && <IsUnseen />}
        {direct && <Direct />}
      </div>
    </div>
  );
};

export default Infos;
