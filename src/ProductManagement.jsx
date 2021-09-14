import AddProducts from "./AddProducts";
import ProductList from "./ProductList";
import UpdateProducts from "./UpdateProducts";
import { useState } from "react";

const ProjectManagement = () => {
    const [product, setProduct] = useState({productName: "", quantity: ""});
    const [productList, setProductList] = useState([]);
    const [toRemove, setToRemove] = useState("");
    const [currentProduct, setCurrentProduct] = useState({productName: "", quantity: "", index: null});
    
    const newProduct = ({target}) => {
        setProduct({
            ...product,
            [target.name]: target.value});
                         
    }

    const handleAdd = () => {
        setProductList(productList => [...productList, product]); 
    }



    const handleRemove = ({target}) => {
        setToRemove(target.value);
        const productListRemoved = [...productList];        
        productList.forEach((product, i) => {
            if (product.productName && product.productName.startsWith(toRemove)) {
                productListRemoved.splice(i, 1);                               
            }
        });
        setProductList(productListRemoved);
    }

    const handleUpdate = (index) => {
        setCurrentProduct({index, ...productList[index]});
    }

    const submitHandler = (event) => {
        event.preventDefault();            
    }

    const submitHandler2 = (event, productName, quantity, index) => {
        event.preventDefault();
        const _productList = [...productList]
        productList[index].productName = productName;
        productList[index].quantity = quantity;
        setProductList(_productList);          
    }


    return(
        <>
        <AddProducts newProduct={newProduct} handleAdd={handleAdd} submitHandler={submitHandler}/>
        <ProductList productList={productList} handleRemove={handleRemove} handleUpdate={handleUpdate}/>
        <UpdateProducts submitHandler={submitHandler2} currentProduct={currentProduct} />
        </>
    );
}

export default ProjectManagement;