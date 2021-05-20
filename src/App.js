//import logo from './logo.svg';
import './App.css';
import Admin from './Admin/Admin'
import Home from './Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from './Home/Theme/themeContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
