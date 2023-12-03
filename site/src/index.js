import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Layout from './components/Layout/Layout.js';
import "./components/scss/style.scss";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  
  // </BrowserRouter>
  <Layout>
  <App />
  </Layout>
);

