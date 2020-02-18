import React from 'react';
import MovieList from './Components/MoiveList'
import {BrowserRouter as Route, Router, Link, withRouter, Switch} from "react-router-dom";
import SaveMovies from './Components/SavedMovies'
import NavBar from "./Components/Navbar"

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {

  background-color: ${props => (props.blackcolor ? '#5B71BF' : 'red')};
  text-align: center;
  font-family: ${props => props.theme.fontfamily}

}
`;


function App() {
  return (
    <Router>
      <ThemeProvider theme={{ fontfamily: 'Helvetica Neue'}}>
      <React.Fragment>
            <GlobalStyles blackcolor/>
            <Switch>
              <Route path="/" component={MovieList}></Route>
              <Route path="/savedmovies" component={SaveMovies}></Route>
            </Switch>
           

      </React.Fragment>
      </ThemeProvider>
      
    </Router>
   
    
  );
}

export default App;
