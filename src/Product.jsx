const Product = ({product, handleRemove, handleUpdate, index}) => {
    return (
        <>
        <li>{product.productName}, Quantity: {product.quantity}</li>
        <button onClick={handleRemove}>Delete</button>
        <button onClick={() => handleUpdate(index)}>Update</button>
        </>
    );
}

export default Product;