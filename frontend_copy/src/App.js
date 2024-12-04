import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ForumList from './pages/ForumList'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/forum" exact component={ForumList} />
        </Switch>
      </div>
    </Router>
  );
}

const styles = {
  background: {
    backgroundImage: 'url(/pictures/PDX_Main_BG.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  },
};

export default App;