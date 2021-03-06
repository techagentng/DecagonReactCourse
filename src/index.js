import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from "./components/counter/counter"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./pages/category"
import Form from "./components/form/form"
 import Forms from "./pages/formpage"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

          <Route exact path="/counter" element={<Counter />}></Route>  
          <Route exact path="/form" element={<Forms />}></Route>   
          <Route exact path="/card" element={<Category />}></Route>
          {/* <Route exact path="/formpage" element={<Form />}></Route> */}
          <Route exact path="/" element={<Form />}></Route>

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
