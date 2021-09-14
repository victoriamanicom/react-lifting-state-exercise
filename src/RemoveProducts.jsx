const RemoveProducts = ({removeProduct, handleRemove, submitHandler}) => {
    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter product name:" onChange={removeProduct} />
            <button onClick={handleRemove}>Remove</button>
        </form>
    );
}

export default RemoveProducts;