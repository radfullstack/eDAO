import React from "react"
import { BrowserRouter } from "react-router-dom";
import './stylesheet.css';
import Header from "./partials/Header"
import Footer from "./partials/Footer"

class DefaultLayout extends React.Component {
    render() {
      return(
        <>
            <BrowserRouter>
                <Header />
                <main className="flex-shrink-0">{this.props.children}</main>
                <Footer />
            </BrowserRouter>
        </>
    )}
}
export default DefaultLayout;