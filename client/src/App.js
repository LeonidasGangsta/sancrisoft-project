//Functional components
import Cards from "./components/Cards";
import NavHeader from "./components/Nav";
import MyCart from "./components/MyCart";
import Thanks from "./components/Thanks";

//React Router Imports
import { Route, BrowserRouter as Router } from "react-router-dom";
import PlaceOrderForm from "./components/PlaceOrder";

function App() {
  return (
    <Router>
      <Route path="/" component={NavHeader} />
      <Route exact path="/" component={Cards} />
      <Route exact path="/my-cart" component={MyCart} />
      <Route exact path="/my-cart" component={PlaceOrderForm} />
      <Route exact path="/thanks/:name" render={({match}) => <Thanks name={match.params.name} />} />
    </Router>
  );
}

export default App;
