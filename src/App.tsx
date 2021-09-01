import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Home } from "./pages/Home";
import { NewRoom } from './pages/NewRoom';
// import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;