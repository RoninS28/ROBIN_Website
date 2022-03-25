import { Avatar, Grid, makeStyles, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router";
import Select from "react-select";
import '../PagesStyles/ProductCheckout.css'

const ProductCheckout = (props) => {

    const [color, setColor] = useState()
    const [variant, setVariant] = useState()
    const [model, setModel] = useState()
    const [data, setData] = useState()
    const history = useHistory()
    // console.log(props.location.state.color)
    // console.log(props)

    const getInfo = () => {
        const id1 = props.match.params.id;
        axios.get('/products/' + id1 + '/checkout').then((response) => {
            console.log("into checkout");
            setData(response.data)
        })
    }

    useEffect(() => {
        // setImagetodisplay(getMyImage(modelDB.image))
        setColor(props.location.state.color)
        setVariant(props.location.state.variant)
        setModel(props.location.state.model)

    }, []);

    const handleConfirm = () => {
        axios.post('/confirmOrder', {
            color: color,
            variant: variant,
            model: model
        }).then((response) => {
            console.log(response)
            history.push('/products/' + model.modelID + '/orderConfirmed')

        })
    }

    const generateRow = (key, value) => {
        return (
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                style={{ fontSize: '48px' }}
            >
                <TableCell align="right" className="servicingdata" style={{ fontSize: '25px', fontWeight: 500 }}>{key}  :</TableCell>
                <TableCell align="left" className="servicingdata" style={{ fontSize: '25px' }}>{value}</TableCell>

            </TableRow>
        )
    }
    const paymentTypeoptions = [
        { label: 'Netbanking', value: 0 },
        { label: 'Google Pay', value: 1 },
        { label: 'Phone Pe', value: 2 },
        { label: 'BHIM UPI', value: 3 },
        { label: 'Paytm', value: 4 }
    ]
    const [paymentTypeValue, setPaymentTypeValue] = useState('');

    const PaymentTypeComponent = () => <Select style={{ marginTop: '30px', marginBottom: '20px', width: '100px' }} onChange={(e) => { setPaymentTypeValue(e.value) }} options={paymentTypeoptions} value={paymentTypeoptions.filter(function (option) {

        return option.value === paymentTypeValue;
    })} />;
    return (
        <div className="productCheckoutScreen" style={{ marginBottom: '100px' }}>
            <div className="orderConfirmationTitle" style={{ display: 'flex', justifyContent: 'center', fontSize: '35px', marginTop: '30px', color: 'red', fontWeight: '700', textShadow: '2px 2px 5px rgba(0,0,0, .24), 0px 0px 1px black' }}>
                ORDER CONFIRMATION DETAILS

            </div>
            <div style={{ marginLeft: '20%', marginRight: '20%', marginTop: '70px', display: 'flex', justifyContent: 'center', fontSize: '28px' }}>

                <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                        {/* <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align='center'
                                    style={{ minWidth: '100px' }}
                                    className="servicingtable"
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead> */}
                        <TableBody>
                            {/* {rows.map((row) => (
                            <TableRow
                                key={row.servicingNo}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center" className="servicingdata">
                                    {row.servicingNo}
                                </TableCell>
                                <TableCell align="center" className="servicingdata">{row.servicingDate}</TableCell>
                                <TableCell align="center" className="servicingdata">{row.centre}</TableCell>
                                <TableCell align="center" className="servicingdata">{row.inspectedBy}</TableCell>
                                <TableCell align="center" className="servicingdata">{row.details}</TableCell>
                                <TableCell align="center" className="servicingdata">{row.total}</TableCell>
                            </TableRow>
                        ))} */}


                            {generateRow("Name", "Rohan Shiveshwarkar")}
                            {generateRow("Model Name", "M1250")}
                            {generateRow("Factory Name", "Noga Factory")}
                            {generateRow("Factory Manager", "Kamlesh Raut")}
                            {generateRow("Color", <div style={{ width: '80px', height: '30px', backgroundColor: color }}></div>)}
                            {generateRow("Variant", variant)}
                            {generateRow("Expected Delivery Date", "12/05/2022")}
                            {generateRow("Payment Mode", <PaymentTypeComponent />)}
                            {generateRow("Total Amount", "55000")}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div className="proceedToConfirmButtonDiv" >
                    <button onClick={handleConfirm}>CONFIRM ORDER</button>

                </div>
            </div>
        </div>
    )
}

export default ProductCheckout;