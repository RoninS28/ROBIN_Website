import './App.css';

import Routing from './FactoryWorker/Shared/Routing';
import {BrowserRouter} from 'react-router-dom'


function App() 
{
  return (
    <div>
      <BrowserRouter>
      <Routing/>
    </BrowserRouter>
    </div>
  );

}

export default App;