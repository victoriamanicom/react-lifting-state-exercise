const AddProducts = ({newProduct, handleAdd, submitHandler}) => {
    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="productName" placeholder="Enter product name here:" onChange={newProduct} required/>
            <br />
            <input type="number" name="quantity" placeholder="Quantity" onChange={newProduct} required/>
            <br />
            <button type="submit" onClick={handleAdd}>Add product</button>
        </form>
    );
}

export default AddProducts;