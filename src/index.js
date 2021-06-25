import React from 'react';
import ReactDOM from 'react-dom';

import "./tutorial/Project-30-MoviesWebsite/index.css";
import App from "./tutorial/Project-30-MoviesWebsite/App.js";
import {AppProvider} from "./tutorial/Project-30-MoviesWebsite/context.js"


ReactDOM.render( 
  <React.StrictMode>
<AppProvider>
    <App />
    </AppProvider>

  
  </React.StrictMode>,
  document.getElementById('root')
);
