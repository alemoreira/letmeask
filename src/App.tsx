import {HashRouter, Route, Switch} from 'react-router-dom'
import { Home } from "./pages/Home";
import { NewRoom } from './pages/NewRoom';
// import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </Switch>
    </HashRouter>
  );
}

export default App;