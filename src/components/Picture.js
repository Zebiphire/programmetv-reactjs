const Picture = (props) => {
  const { image } = props;

  return (
    <div className="wrap">
      <img src={image} alt="imageFromMovie"></img>
    </div>
  );
};

export default Picture;
