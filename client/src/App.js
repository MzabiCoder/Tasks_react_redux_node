import React,{Fragment} from 'react';
import './App.css';
import Nave from './components/Nave'
import Tasks from './components/Tasks'
import { Container } from 'reactstrap'
import store  from './store'
import { Provider } from 'react-redux'
import AddTsk from './components/AddTsk'

function App() {
  return (
    <Provider store={store}>
    <Fragment>
        <Nave /> 
        <Container>
          <AddTsk />
          <Tasks />
      </Container>
      </Fragment>
      </Provider>
  );
}

export default App;
