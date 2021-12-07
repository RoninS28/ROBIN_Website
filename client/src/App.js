import logo from './logo.svg';
import './App.css';
// import BreakdownRequestsList from './serviceCenter/BreakdownRequestsList';
// import BreakdownDetails from './serviceCenter/BreakdownDetails';
// import BreakdownStatus from './serviceCenter/BreakdownStatus';
// import BuyAccessoriesList from './serviceCenter/BuyAccessoriesList';
// import Demo from './serviceCenter/Demo';
// import BreakdownStatusList from './serviceCenter/BreakdownStatusList'; 
import {Routing as ServiceCentreRouting} from './serviceCenter/Shared/Routing';
// import BreakdownStatus from './serviceCenter/BreakdownStatus';

function App() {
  return (
    <div>
      {/* <BreakdownRequestsList/> */}
       {/* <BreakdownDetails/> */}
       {/* <BreakdownStatus/>  */}
       {/* <BuyAccessoriesList/> */}
       {/* <Demo/> */}
        {/* <BreakdownStatusList/> */}

       <ServiceCentreRouting />
    </div>
  );
}

export default App;
