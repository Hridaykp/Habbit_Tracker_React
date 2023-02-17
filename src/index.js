
// importing react, react-dom
import React from "react";
import ReactDOM from "react-dom/client";

// importing Provider component 
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import store from "./store";
import "./components/Details.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
        <footer className="card-footer bg-transparent border-success">
          <p className="homeTitle text-center">Track Your Habits</p>
          <a className="copyright" href="https://github.com/Hridaykp" target="#">@Hriday Kumar Pranit</a>
        </footer>
    </Provider>
  </React.StrictMode>
);
