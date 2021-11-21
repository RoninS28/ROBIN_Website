import './App.css';
import {BrowserRouter} from 'react-router-dom'

// Factory Admin Routing
// import Routing from './FactoryAdmin/Shared/Routing';

// SuperAdmin Routing
import Routing from './superAdmin/Shared/Routing';

// Outlet Routing
// import Routing from './Outlet/Shared/Routing';

function App() {
  return (
    <div >

    
      <BrowserRouter>
      <Routing/>
    </BrowserRouter>
   
      
    </div>
  );
}

export default App;