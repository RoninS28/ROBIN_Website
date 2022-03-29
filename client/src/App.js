import { Routing as LoginRouting } from "./Login/Shared/Routing";
import './App.css';


import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { useState } from "react";


import { Routing as CustomerRouting } from "./Customer/Shared/Routing";
import { Routing as ServiceCentreRouting } from './serviceCenter/Shared/Routing';
import { Routing as FactoryAdminRouting } from './FactoryAdmin/Shared/Routing';
import { Routing as SuperAdminRouting } from './superAdmin/Shared/Routing';
import { Routing as OutletRouting } from './Outlet/Shared/Routing';
import { Routing as FactoryWorkerRouting } from './FactoryWorker/Shared/Routing';

function App() {

  // "null"
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn") || null);

  const [userLoggedIn, setUserLoggedIn] = useState(localStorage.getItem("userLoggedIn") || null);

  const updateLogin = (val) => {
    console.log("update login: ", val);
    setLoggedIn(val);
    localStorage.setItem("loggedIn", val);

    if (val == null)
      localStorage.setItem("userLoggedIn", null);

  }
  return (
    <div>
      <h1>Client Page</h1>
      {/* <BrowserRouter>
        {(loggedIn == null || loggedIn == "null") ? (
          <>
            <div>
              <ul>
                <li><Link to="/customer">Customer</Link></li>
                <li><Link to="/factory-worker">Factory Worker</Link></li>
                <li><Link to="/super-admin">Super Admin</Link></li>
                <li><Link to="/factory-admin">Factory Admin</Link></li>
                <li><Link to="/service-center">Service Center</Link></li>
                <li><Link to="/outlet">Outlet</Link></li>
              </ul>
            </div>
          </>
        ) : (
          <>
            {(() => {

              switch (localStorage.getItem("userLoggedIn")) {
                case 'super-admin':
                  return (
                    <SuperAdminRouting loggedIn={loggedIn} setLoggedIn={updateLogin} />
                  )
                case 'factory-admin':
                  return (
                    <FactoryAdminRouting loggedIn={loggedIn} setLoggedIn={updateLogin} />
                  )
                case 'service-center':
                  return (
                    <ServiceCentreRouting loggedIn={loggedIn} setLoggedIn={updateLogin} />
                  )
                case 'customer':
                  return (
                    <CustomerRouting loggedIn={loggedIn} setLoggedIn={updateLogin} />
                  )
                case 'factory-worker':
                  return (
                    <FactoryWorkerRouting loggedIn={loggedIn} setLoggedIn={updateLogin} />
                  )
                case 'outlet':
                  return (
                    <OutletRouting loggedIn={loggedIn} setLoggedIn={updateLogin} />
                  )
                default:
                  return (
                    <div>You are a User.</div>
                  )
              }

            })()}
          </>
        )}


        <Switch>
          <Route path='/customer' exact component={() => (<CustomerRouting loggedIn={loggedIn} setLoggedIn={updateLogin} />)} ></Route>
          <Route path='/factory-worker' exact component={() => (<FactoryWorkerRouting loggedIn={loggedIn} setLoggedIn={updateLogin} />)} ></Route>
          <Route path='/super-admin' exact component={() => (<SuperAdminRouting loggedIn={loggedIn} setLoggedIn={updateLogin} />)} ></Route>
          <Route path='/factory-admin' exact component={() => (<FactoryAdminRouting loggedIn={loggedIn} setLoggedIn={updateLogin} />)} ></Route>
          <Route path='/service-center' exact component={() => (<ServiceCentreRouting loggedIn={loggedIn} setLoggedIn={updateLogin} />)} ></Route>
          <Route path='/outlet' exact component={() => (<OutletRouting loggedIn={loggedIn} setLoggedIn={updateLogin} />)} ></Route>
        </Switch>
      </BrowserRouter> */}
    </div>

  );

}

export default App;