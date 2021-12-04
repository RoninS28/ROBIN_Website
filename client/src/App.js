

import { Routing as CustomerRouting } from "./Customer/Shared/Routing";


import './App.css';
import {BrowserRouter} from 'react-router-dom'

// Factory Admin Routing
import {Routing as FactoryAdminRouting} from './FactoryAdmin/Shared/Routing';

// SuperAdmin Routing
import {Routing as SuperAdminRouting}  from './superAdmin/Shared/Routing';

// Outlet Routing
import {Routing as OutletRouting} from './Outlet/Shared/Routing';

import {Routing as FactoryWorkerRouting} from './FactoryWorker/Shared/Routing';
//import {BrowserRouter} from 'react-router-dom'


function App() 
{
  return (

  <div>

    
    <BrowserRouter>
      <SuperAdminRouting/>
      {/* <OutletRouting /> */}

      {/* <CustomerRouting /> */}
      {/* <FactoryAdminRouting /> */}

      {/* <FactoryWorkerRouting/> */}
        

    </BrowserRouter>
    </div>

  );

}

export default App;