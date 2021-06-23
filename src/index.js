import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';

//import "./tutorial/Project-1-birthday-reminder/birthdayReminder.css";
/*import "./tutorial/Project-2-Tours-fetching-data/Tours.css";
import App from "./tutorial/Project-2-Tours-fetching-data/App.js";*/
//import "./tutorial/Project-3-reviews/reviews.css";
//import App from "./tutorial/Project-3-reviews/App.js";
//import "./tutorial/Project-4-Accordion/index.css";
//import App from "./tutorial/Project-4-Accordion/App.js";
//import "./tutorial/Project-5-Menu/index.css";
//import App from "./tutorial/Project-5-Menu/App.js";
/*import "./tutorial/Project-8-Lorem-Ipsum-Structure/index.css";
import App from "./tutorial/Project-8-Lorem-Ipsum-Structure/App.js";*/
//import "./tutorial/Project-12-Sidebar-and-Modal/index.css";
//import App from "./tutorial/Project-12-Sidebar-and-Modal/App.js";
//import {AppProvider} from  "./tutorial/Project-12-Sidebar-and-Modal/context.js
import "./tutorial/Project-30-MoviesWebsite/index.css";
import App from "./tutorial/Project-30-MoviesWebsite/App.js";
import {AppProvider} from "./tutorial/Project-30-MoviesWebsite/context.js"
//import {AppProvider} from  "./tutorial//Project-14-cart/context.js";


ReactDOM.render( 
  <React.StrictMode>
<AppProvider>
    <App />
    </AppProvider>

  
  </React.StrictMode>,
  document.getElementById('root')
);
