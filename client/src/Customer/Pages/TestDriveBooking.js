import CheckIcon from '@mui/icons-material/Check';
import bg from "../Assets/elescooter.jpg";
import {useState, useEffect} from 'react';

export default function TestDriveBooking(props) {
    const [object, setObject] = useState()
    // const props =
    //     {
    //         id: 1,
    //         imagesrc: "v2",
    //         model: "CITY - 1 ELECTRIC SCOOTER",
    //         plateNumber: "MH 12 FP 9602",
    //         purchaseDate: "28/05/2021",
    //         status: "Delivered",
    //         stage: "10",
    //         deliveryDate: "28/06/2021",
    //         name: "Aniket Pashankar",
    //         type: "Home",
    //         address: "Katraj, Pune"
    //     }
    useEffect(() => {
        console.log(props.location.state.object);
        setObject(props.location.state.object)
    }, []);
  
return(
    <>
        <div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-5">
                <center><div className="mb-3">
                  <img src={require("../Assets/elescooter.jpg").default} />
                  <CheckIcon style={{ color: "#8FFF00", fontSize: "100px", marginTop:"-100px"}} />
                </div></center>
            </div>


            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',fontSize: '35px',fontFamily: 'Secular One',}}>
                Test Drive Booked!
            </div>

            
            <center>
            <div className="relative flex flex-col lg:w-6/12 " style={{ marginTop: '30px', backgroundColor: 'orange', borderRadius: '50px', color: "white", padding: '30px'}} >
                <div style={{fontSize: '25px',justifyContent:'left', justifyItems:"left"}}>
                    <div>
                        Name: {props.location.state.object.name}
                    </div>
                    {/* <div>
                        DL: {props.location.state.object.plateNumber}
                    </div> */}
                    <div>
                        EV Model: {props.location.state.object.model}
                    </div>
                    {/* <div>
                        Type: {props.location.state.object.type}
                    </div> */}
                    <div>
                        Address: {props.location.state.object.address}
                    </div>


                </div>
            </div>
            </center>
            
        </div>
    </>
  );
}
