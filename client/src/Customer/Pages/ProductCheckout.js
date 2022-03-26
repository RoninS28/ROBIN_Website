import { Avatar, Grid, makeStyles, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router";
import Select from "react-select";
import '../PagesStyles/ProductCheckout.css'
import v1 from '../Assets/v1.png'
import v2 from '../Assets/v2uncropped.jpeg'
import v3 from '../Assets/v3.jpeg'
import v4 from '../Assets/v4.png'
import v5 from '../Assets/v5.png'
import v6 from '../Assets/v6.png'
import v7 from '../Assets/v7.png'

const ProductCheckout = (props) => {

    const [color, setColor] = useState()
    const [variant, setVariant] = useState()
    const [model, setModel] = useState()
    const [data, setData] = useState()
    const history = useHistory()
    // console.log(props.location.state.color)
    // console.log(props)

    const getInfo = () => {
        console.log('into getinfo')
        const id1 = props.match.params.id;
        console.log(id1)
        axios.get('/products/' + id1 + '/checkout').then((response) => {
            console.log("into checkout");
            setData(response.data)
        })
    }

    useEffect(() => {
        // setImagetodisplay(getMyImage(modelDB.image))
        getInfo()
        setColor(props.location.state.color)
        setVariant(props.location.state.variant)
        setModel(props.location.state.model)

    }, []);

    const handleConfirm = () => {
        axios.post('/products/confirmOrder', {
            color: color,
            variant: variant,
            modelID: data.modelID,
            modelName: data.modelName,
            modelImage: data.modelImg,
            custID: data.custID,
            expectedDeliveryDate: data.expectedDeliveryDate
        }).then((response) => {
            console.log(response.data)
            history.push({ pathname: '/products/' + model.modelID + '/orderConfirmed', state: { ticketid: response.data } });

        })
    }

    const getMyImage = (source) => {
        console.log(`SOURCE IS ${source}`)
        const x = source.replace('../Assets/', '')
        const img = x.substring(0, 2)
        switch (img) {
            case 'v2':
                return v2
            case 'v3':
                return v3
            case 'v4':
                return v4
            case 'v5':
                return v5
            case 'v6':
                return v6
            case 'v7':
                return v7


        }
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
    return data ?
        (
            <div className="productCheckoutScreen" style={{ marginBottom: '100px' }}>
                <div className="orderConfirmationTitle" style={{ display: 'flex', justifyContent: 'center', fontSize: '35px', marginTop: '30px', color: 'red', fontWeight: '700', textShadow: '2px 2px 5px rgba(0,0,0, .24), 0px 0px 1px black' }}>
                    ORDER CONFIRMATION DETAILS

                </div>
                <div className="image">
                    <img src={getMyImage(data.modelImg)} alt="image" width="300" height="300" />
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


                                {generateRow("Name", data.customerName)}
                                {generateRow("Model Name", data.modelName)}
                                {generateRow("Model ID", data.modelID)}
                                {generateRow("Factory Name", data.factoryName)}
                                {generateRow("Factory Address", data.factoryAddress)}
                                {generateRow("Factory Manager", data.factoryManager)}
                                {generateRow("Color", <div style={{ width: '80px', height: '30px', backgroundColor: color }}></div>)}
                                {generateRow("Variant", variant)}
                                {generateRow("Expected Delivery Date", data.expectedDeliveryDate)}
                                {generateRow("Payment Mode", <PaymentTypeComponent />)}
                                {generateRow("Total Amount", '₹ ' + data.totalAmount)}
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
        ) : (
            <div>
                loading
            </div>
        );
}

export default ProductCheckout;