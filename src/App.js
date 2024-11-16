import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MainBody, Container, FadeImage } from './styles/Global.Styled';

// Importing Utilites
import { Skills } from './utils/Data';
import { theme } from './utils/Theme';

// Importing Components
import Showcase from './components/Showcase';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import TopFadeImage from './assets/top.png';
import LeftFadeImage from './assets/left.png';
import RightFadeImage from './assets/right.png'; // Added import for the right fade image
import MyWork from './components/MyWork';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>  
      
        <MainBody>
          <Container>
            <Navbar/>
            <Showcase/>
            <MySkills/>
            {/* Move MyProjects below the right fade image */}
            {/* <FadeImage src={RightFadeImage} top="200vh" right="0" /> */}
            <MyProjects/>
            <MyWork/>
            <Footer/>
          </Container>


        </MainBody>
      </ThemeProvider>
    </div>
  )
}

export default App;
