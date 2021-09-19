import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/About';
import Main from './Pages/Main';
import { navigationLinks } from './data/links.js';
import Header from './Components/Header';
import { Heading } from './Components';
import styled from 'styled-components';
const App = () => {
  return (
    <MainWrapper>
      {/* <Heading type="h4"/> */}
      <Router>
        <Header></Header>
        <Switch>
          {navigationLinks.map((link, i) => {
            return (
              <Route
                path={link.link}
                component={link.component}
                key={link.id}
                exact={link.exact}></Route>
            );
          })}
          {/* <Route path="/" component = {Main} exact></Route>
            <Route path="/about" component = {About}></Route> */}
        </Switch>
      </Router>
    </MainWrapper>
  );
};

export default App;


const MainWrapper = styled.div `
display: flex;
flex-direction: column;
width: 100%;
/* justify-content: center; */
align-items: center;
min-height: 100vh;
background-color: #8db0cf;
`
