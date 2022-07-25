import HeaderLeftMenu from "./header components/HeaderLeftMenu";
import HeaderSearchBar from "./header components/HeaderSearchBar";

function header(){
    return (
      <header className="header">
        <HeaderLeftMenu />
        <HeaderSearchBar />
      </header>
    );
}
export default header;