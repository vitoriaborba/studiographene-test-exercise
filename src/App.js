import './App.css';
import Navigation from './Navigation/Navigation.jsx'
import Community from './components/pages/Community/Community.jsx'
import Location from './components/pages/Location/Location.jsx'
import Menu from './components/pages/Menu/Menu.jsx'
import Recipes from './components/pages/Recipes/Recipes.jsx'
import Home from './components/pages/Home/Home';
function App() {
  return (
    <div className="App">
        <Navigation/>
        <Home></Home>
       <Community/>
        <Location/>
        <Menu/>
        <Recipes/>  

     {/*    <Routes>
          <Route path="/community" element= {<Community/>} />
          <Route path="/location" element= {<Location/>} />
          <Route path="/menu" element= {<Menu/>} />
          <Route path="/recipes" element= {<Recipes/>} />
        </Routes> */}

    </div>
  );
}

export default App;
