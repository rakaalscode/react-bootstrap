import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';
import { Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import News from './Components/pages/News';
import Contacts from './Components/pages/Contacts';
import Details from './Components/pages/Details';
import NotFoundPage from './Components/pages/NotFoundPage';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/details" component={Details} />
        <Route path="/not-found-page" component={NotFoundPage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
