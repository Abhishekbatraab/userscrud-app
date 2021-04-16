import './App.css';
import { useSelector } from 'react-redux'
import { Router } from 'react-router';
import Routes from './routes';
import history from './app/history'


function App() {
  const user = useSelector(state=>state.user);
  console.log(user);
  
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
