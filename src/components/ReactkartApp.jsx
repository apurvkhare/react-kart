import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import PrivateRoute from './common/PrivateRoute';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { CustomerProvider } from '../context/CustomerContext';
import ErrorBoundary from './common/ErrorBoundary';

const ReactkartApp = () => {
  return (
    <ErrorBoundary fallbackUI={<h3>Error occured, try refreshing</h3>}>
      <Router>
        <CustomerProvider>
          <AuthProvider>
            <Switch>
              <Route exact path="/">
                <ErrorBoundary fallbackUI={<h3>Error in Home Page. try refreshing</h3>}>
                  <HomePage />
                </ErrorBoundary>
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/product/:productId">
                <ProductPage />
              </Route>
              <PrivateRoute exact path="/wishlist" component={WishlistPage} />
              <PrivateRoute exact path="/cart" component={CartPage} />
              <PrivateRoute exact path="/checkout" component={CheckoutPage} />
            </Switch>
          </AuthProvider>
        </CustomerProvider>
      </Router>
    </ErrorBoundary>
  );
};

export default ReactkartApp;
