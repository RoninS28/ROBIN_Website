import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Input from "@material-ui/core/Input";

// Factory Admin Routing
// import Routing from './FactoryAdmin/Shared/Routing';

import Routing from './FactoryAdmin/Shared/Routing';

// SuperAdmin Routing
import Routing from './superAdmin/Shared/Routing';
import {BrowserRouter} from 'react-router-dom'
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