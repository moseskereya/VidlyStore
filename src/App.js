import './App.css';
import Nav from "./components/Nav"
import Banner from './Banner';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Movie from './Movie';

function App() {
    return (
        <>
<Router>
    <div className="App">
    <Nav />  
        <Switch>
        <Route path="/" exact component={Banner} />
        <Route path="/movies" component={ Movie}/>
     </Switch>
                            
 <Footer/>
     </div>
        </Router>
     </>   
  );
}

export default App;
