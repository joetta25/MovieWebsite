import React, {Component} from 'react';
import MovieList from './Components/MoiveList'
import AppBar from '@material-ui/core/AppBar';


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


class App extends Component {

  render() {


    return (

      <div className="App">
        <NavBar/>
        <br/>
        <br/>
        <MovieList/>

      </div>
    );
  }
}

export default App;
