import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/pages/homepage/homepage';
import Content from './components/pages/content/content';
import Courses from './components/pages/courses/courses';
import Contactus from './components/pages/contactuspage/contactuspage';
import Others from './components/pages/others/others';
import Articles from './components/pages/articles/articles';
import Books from './components/pages/books/books';
import Blogs from './components/pages/blogs/blogs';
import ArticleView from './components/pages/articles/articleView/articleView';

import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';


function App(){
  return(
    <div className="navbar">
      
      <Router >
        <Navbar />
          <Switch>

            <Route path="/" exact component={Home}/>
            <Route path="/courses" exact component={Courses}/>
            <Route path="/content" exact component={Content}/>
            <Route path="/contactus" exact component={Contactus}/>
            <Route path="/others" exact component={Others}/>
            <Route path="/articles" exact component={Articles}/>
            <Route path="/blogs" exact component={Blogs}/>
            <Route path="/books" exact component={Books}/>

            <Route path="/articles/:id" exact component={ArticleView}/>

            

          </Switch>

        <Footer />
      </Router>
    
      
    </div>  
  );
}
export default App;