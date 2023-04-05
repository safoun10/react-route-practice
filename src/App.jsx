import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

function App() {
  const navigation = useNavigation();
  return (
    <div className="root">
      <Header></Header>
      <div
        className={navigation.state === "loading" ? "Loading ....." : ""}
      ></div>
      {/* <Body></Body> */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
