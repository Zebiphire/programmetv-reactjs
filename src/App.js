import "./App.css";
import Logo from "./assets/image/logo.png";
import Program from "./assets/program.json";
import LogoPage from "./components/LogoPage";
import Content from "./components/Content";
function App() {
  return (
    <div className="App">
      <LogoPage logo={Logo} name="M6"></LogoPage>
      {Program.map((item) => {
        return <Content item={item} key={item.title}></Content>;
      })}
    </div>
  );
}

export default App;
