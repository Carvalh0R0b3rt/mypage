import "./App.css";
import DrawerIndex from "./Components/Menu/DrawerIndex";
/*import DesktopIndex from "./Components/Menu/DesktopIndex";         
       <DesktopIndex />
*/
function App() {
  return (
    <section className="MainHeader">
      <div className="banner">
        <div className="mobileMenu">
          <DrawerIndex />
        </div>

        <div className="desktopMenu">
          {
            //adicionar menu em linha
          }
        </div>
        
        <div className="MainBackground">
          <img src="./IMGS/BannerPrincipal2.png" alt="BannerP" />
        </div>
      </div>
    </section>
  );
}

export default App;
