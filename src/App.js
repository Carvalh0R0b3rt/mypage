import "./App.css";
import DrawerIndex from "./Components/Menu/DrawerIndex";
/*import DesktopIndex from "./Components/Menu/DesktopIndex";         
       <DesktopIndex />
*/
function App() {
  return (
    <div className="App">
      <div className="banner">
        <img src="./public/IMGS/BannerPrincipal.png" alt="BannerP"/>
        <div className="mobileMenu">
        <DrawerIndex />
        </div>
        
        

        <h1> Cerimônia de Casamento </h1>
        <h2> Robert e Raissa Carvalho</h2>


      </div>

        <header className="App-header">

        <div id='Danger' className="DANGER">
          <img src="./IMGS/DANGER.png" alt="DANGER" />
        </div>

        <p>
          Atenção, site em construção.
        </p>

      </header>
    </div>
  );
}

export default App;