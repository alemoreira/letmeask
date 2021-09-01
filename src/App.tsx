import {HashRouter, Route} from 'react-router-dom'
import { Home } from "./pages/Home";
import { NewRoom } from './pages/NewRoom';
// import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom}/>
    </HashRouter>
  );
}

export default App;