import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrimaryButton from "./components/Buttons/PrimaryButton.component";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Navbar/Navbar.component";
import ProductCard from "./components/ProductCard/ProductCard.component";
import Products from "./Pages/Products.page";
import Home from "./Pages/Home.page";
import ProductInfo from "./Pages/ProductInfo.page";
import Checkout from "./Pages/Checkout.page";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [navBarHidden, setNavBarHidden] = useState(false);

  const CheckoutPage = () => {
    setNavBarHidden(true);
    return <Checkout />;
  };
  console.log(navBarHidden);
  return (
    <>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/product-info" component={ProductInfo} />
            <Route exact path="/checkout">
              {CheckoutPage}
            </Route>

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
