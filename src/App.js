import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header.component';
import Homepage from './pages/Home/Homepage.component';
import Servicespage from './pages/Services/Servicespage.component.jsx';
import Footer from  './components/footer/Footer.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/services" component={Servicespage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
