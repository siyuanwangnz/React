import './App.css';
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'

function App() {
  const element = useRoutes(routes)
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <MyNavLink to="/home">Home</MyNavLink>
        &nbsp;
        <MyNavLink to="/about">About</MyNavLink>
      </div>
      <div>
        {element}
      </div>
    </div>
  );
}

export default App;
