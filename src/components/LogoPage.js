const LogoPage = (props) => {
  const { logo, name } = props;

  return (
    <div className="logoPage">
      <img src={logo} alt="logo"></img>
      <h1>{name}</h1>
    </div>
  );
};

export default LogoPage;
