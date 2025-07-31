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
          <div className="MainMenuOrder">
          <menu className="MainMenu">
            <li>Início</li>
            <li>As Famílias</li>
            <li>Lista de presentes</li>
            <li>Confirme sua presença</li>
          </menu>
          </div>
        </div>
        
        <div className="MainBackground">
          <img src="./IMGS/BannerPrincipal2.png" alt="BannerP" />
        </div>
      </div>
    </section>
  );
}

export default App;
