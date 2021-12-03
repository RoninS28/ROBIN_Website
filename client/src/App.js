import './App.css';
import {BrowserRouter} from 'react-router-dom'

// Factory Admin Routing
import {Routing as FactoryAdminRouting} from './FactoryAdmin/Shared/Routing';

// SuperAdmin Routing
// import {Routing as SuperAdminRouting}  from './superAdmin/Shared/Routing';

// Outlet Routing
// import {Routing as OutletRouting} from './Outlet/Shared/Routing';

function App() {
  return (
    <div >

    
    <BrowserRouter>
      {/* <SuperAdminRouting/> */}
      {/* <OutletRouting /> */}
      <FactoryAdminRouting />
    </BrowserRouter>
   
      
    </div>
  );
}

export default App;