import React from 'react';
import MovieList from './Components/MoiveList'

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
    <ThemeProvider theme={{ fontfamily: 'Helvetica Neue'}}>
      <React.Fragment>
          <GlobalStyles blackcolor/>
          <MovieList/>
    </React.Fragment>
    </ThemeProvider>
    
    
  );
}

export default App;
