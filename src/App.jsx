import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Navbar/Navbar.component";
import Products from "./Pages/Products.page";
import Home from "./Pages/Home.page";
import ProductInfo from "./Pages/ProductInfo.page";
import Checkout from "./Pages/Checkout.page";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/product-info" component={ProductInfo} />
            <Route exact path="/checkout" component={Checkout} />

            {/* Page Not Found Here */}
            {/* <Route exact path="*" component={" "} /> */}
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
