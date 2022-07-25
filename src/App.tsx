import "./App.css";
import "./css components/header.css";
import "./css components/leftMenu.css";
import "./css components/emailComponents.css";

import Header from "./Header";
import LeftMenu from "./Left-menu";
import EmailView from "./EmailView";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />   
    </div>
  );
}

      


export default App;
