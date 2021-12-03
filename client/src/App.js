import './App.css';

import {Routing as FactoryWorkerRouting} from './FactoryWorker/Shared/Routing';
import {BrowserRouter} from 'react-router-dom'


function App() 
{
  return (
    <div>
      <BrowserRouter>
      <FactoryWorkerRouting/>
    </BrowserRouter>
    </div>
  );

}

export default App;