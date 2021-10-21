
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useLocation, useHistory } from 'react-router-dom';

function AppBreadCrumb() {

    let navigate = useHistory(); //In V6 version of react-router-dom we use useNavigate
  //In place of that till 5 version we use useHistory

  let location = useLocation();

  let currentRoutes = [];

  currentRoutes = location.pathname !== '/' ? location.pathname.split('/') : [];

  console.log(currentRoutes);




  
  if (currentRoutes.length > 0) {
    currentRoutes.shift();
    return (
    <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: 15 }}>
    <Link color="inherit" onClick={() => navigate.push('/')} style={{ cursor: 'pointer' }}>
    Home
    </Link>
    {
    currentRoutes.length === 1
    ? <Typography color="textPrimary">{currentRoutes[0]}</Typography>
    : currentRoutes.map((route, index) => {
    return (index !== currentRoutes.length - 1
    ? <Link key={index} color="inherit" style={{ cursor: 'pointer' }} onClick={() => {
    navigate.push(route)
    }} >
    {route}
    </Link>
    : <Typography key={index} color="textPrimary">{route}</Typography>)
    })
    }
    </Breadcrumbs>
    );
    }
    else
      return <></>
  


}

export default AppBreadCrumb;
