import React from 'react';
import ReactDOM from "react-dom";
import Header from "./page/header.jsx";
import Content from "./page/content.jsx";
import Footer from "./page/footer.jsx";
import './app.scss'

ReactDOM.render(
  <div className="page">
    <Header />
    <Content />
    <Footer />
  </div>,
  document.getElementById('root')
);
