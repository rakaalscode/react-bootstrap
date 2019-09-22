import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router} from 'react-router-dom'

import { InfoProvider } from './Components/context'

ReactDOM.render(
  <InfoProvider>
    <Router>
      <App/>
    </Router>
  </InfoProvider> , document.getElementById('root'));

