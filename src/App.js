import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import PageNoteFound from './components/PageNotFound/PageNoteFound';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Offer from './components/Offer/Offer';
import About from './components/About/About';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route path="/home/:mealId">
           <MealDetails></MealDetails>
         </Route>
         <Route path="/cart">
           <Cart></Cart>
         </Route>
         <Route path="/offer">
           <Offer></Offer>
         </Route>
         <Route path="/about">
          <About></About>
         </Route>
         <Route path="*">
        <PageNoteFound></PageNoteFound>
         </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
