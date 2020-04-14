import React,{Fragment} from 'react';
import './App.css';
import Nave from './components/Nave'
import Tasks from './components/Tasks'
 import {Container} from 'reactstrap'

function App() {
  return (
    <Fragment>
      <Nave />
      <Container>
        <Tasks />
      </Container>
    </Fragment>
  );
}

export default App;
