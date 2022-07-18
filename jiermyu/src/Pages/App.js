import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';

import '../css/App.css';

const App = () => {
  return(
      <div>
          <BrowserRouter>
            <React.Fragment>
              <Route path="/" exact  component={Home} />
            </React.Fragment>
          </BrowserRouter>
      </div>
  );
};

export default App;
