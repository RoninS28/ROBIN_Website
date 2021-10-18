import React from "react";
import { useParams } from "react-router-dom";


const ProductsView = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            products view {id}
        </div>
    );
}

export default ProductsView;