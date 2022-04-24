import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Jobs from './pages/Jobs/Jobs';
import Howwework from './pages/Howwework/Howwework';
import SignUp from './pages/SignUp/SignUp';
import Apply from './pages/Apply/Apply'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Jobs' component={Jobs} />
        <Route path='/Howwework' component={Howwework} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Apply' component={Apply} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
