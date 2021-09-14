import { useEffect, useState } from "react";

const UpdateProducts = ({submitHandler, currentProduct}) => {
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        setProductName(currentProduct.productName);
        setQuantity(currentProduct.quantity);
    },[currentProduct])

    return (
        <form onSubmit={(e) => submitHandler(e, productName, quantity, currentProduct.index)}>
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button type="submit">Update</button>
        </form>
    )
}

export default UpdateProducts;