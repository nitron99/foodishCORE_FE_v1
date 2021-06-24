import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/pages/homepage/homepage';
import Content from './components/pages/content/content';
import Courses from './components/pages/courses/courses';
import Contactus from './components/pages/contactuspage/contactuspage';
import Others from './components/pages/others/others';

import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';


function App(){
  return(
    <div className="navbar">
      
      <Router>
      <Navbar />
        <Switch>
        
          <Route path="/" exact component={Home}/>
          <Route path="/courses" exact component={Courses}/>
          <Route path="/content" exact component={Content}/>
          <Route path="/contactus" exact component={Contactus}/>
          <Route path="/others" exact component={Others}/>
        </Switch>
      </Router>
      <Footer />
      
    </div>  
  );
}
export default App;