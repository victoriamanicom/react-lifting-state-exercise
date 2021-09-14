import Product from "./Product";

const ProductList = ({productList, handleRemove, handleUpdate}) => {

    return(
        <ul>
            {productList.map((product, i) => (
                <Product key={i} product={product} handleRemove={handleRemove} handleUpdate={handleUpdate} index={i}/>
            ))}
        </ul>
    );
}

export default ProductList;