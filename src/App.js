import { Container } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';
function App() {
  return (
    <div className="App">
     <Container className="main">
         <Dashboard/>
      </Container>    
    </div>
  );
}

export default App;
