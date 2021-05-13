import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProductContextProvider from '../context/ProductContext'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

const ReactkartApp = () => {
    return (
        <Router>
            <Switch>
                <ProductContextProvider>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/product">
                        <ProductPage/>
                    </Route>
                </ProductContextProvider>
            </Switch>
        </Router>
    )
}

export default ReactkartApp
