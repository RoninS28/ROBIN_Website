import Navbar from "./Navbar/Navbar";


function Routing(props) {
  const { loggedIn, setLoggedIn } = props;
  return ( 
    <Navbar 
      style={{position:"fixed"}}
      loggedIn={loggedIn}
      setLoggedIn={setLoggedIn}
      >
    </Navbar>
  );
}

export {Routing};