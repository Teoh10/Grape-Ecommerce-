import React, { useContext, useState } from "react";

import { ShopContext } from "../../context/shop-context";
export const Sell = ()=> {
    const {getProductList} = useContext(ShopContext);
    const[name,setName] = useState("");
    const[image,setImage] = useState("");
    const[price,setPrice] = useState(0);

    // const handleName = (e) => {
    //     setName(e.target.value);
    //   };

    //   const handleImage = (e) => {
    //     setImage(e.target.value);
    //   };

    //   const handlePrice = (e) => {
    //     setPrice(e.target.value);
    //   };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
    
        // You can now access 'name' and 'email' state variables and perform actions
        console.log("Name: ", name);
        console.log("price: " ,price);
    
        // Here, you can submit the form data to an API or perform other actions
      };
    return (
        <div>
            <h3> Basic Information</h3>
            <form onSubmit={(e)=>handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                             onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor="image">Image : </label>
                        <input
                            type="file"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            />
                </div>
                <div>
                    <label htmlFor="price">Price : </label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                             onChange={(e)=> setPrice(e.target.value)}
                        />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    //     <div>
    //   <h1>Product Listing</h1>

    //   {/* Product Input Form */}
    //   <div>
    //     <h2>Add a New Product</h2>
    //     <input
    //       type="text"
    //       placeholder="Product Name"
    //       value={productName}
    //       onChange={(e) => setProductName(e.target.value)}
    //     />
    //     <input
    //       type="number"
    //       placeholder="Price"
    //       value={productPrice}
    //       onChange={(e) => setProductPrice(e.target.value)}
    //     />
    //     <textarea
    //       placeholder="Product Description"
    //       value={productDescription}
    //       onChange={(e) => setProductDescription(e.target.value)}
    //     />
    //     <input
    //       type="url"
    //       placeholder="Image URL"
    //       value={productImage}
    //       onChange={(e) => setProductImage(e.target.value)}
    //     />
    //     <button onClick={handleAddProduct}>Add Product</button>
    //   </div>
    // </div>
    );
};

