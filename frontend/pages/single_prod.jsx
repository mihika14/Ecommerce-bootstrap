import React from 'react';

<<<<<<< HEAD
const ProductDetails = ({ product }) => {
=======
const ProductDetails = () => {
    // Placeholder data
    const brand = "Sample Brand";
    const name = "Sample Product";
    const price = 999.99;
    const discountPrice = 799.99;
    const description = "This is a sample product description. It gives a brief overview of the product.";
    
    // Placeholder images
    const imageUrls = [
        "https://via.placeholder.com/300?text=Image+1",
        "https://via.placeholder.com/300?text=Image+2",
        "https://via.placeholder.com/300?text=Image+3",
        "https://via.placeholder.com/300?text=Image+4"
    ];

>>>>>>> c1ada96 (adding images of website)
    return (
        <section className="single_product_details_area d-flex align-items-center">
            {/* Single Product Thumb */}
            <div id='img_m' className="single_product_thumb clearfix">
                <div id="img_c" className="product_thumbnail_slides owl-carousel">
<<<<<<< HEAD
                    <img src={`/media/${product.image}`} alt="" />
                    {product.image1 && <img src={`/media/${product.image1}`} alt="" />}
                    {product.image2 && <img src={`/media/${product.image2}`} alt="" />}
                    {product.image3 && <img src={`/media/${product.image3}`} alt="" />}
                    <img src={`/media/${product.image}`} alt="" />
=======
                    {imageUrls.map((url, index) => (
                        <img key={index} src={url} alt={`Sample Image ${index + 1}`} />
                    ))}
>>>>>>> c1ada96 (adding images of website)
                </div>
            </div>

            {/* Single Product Description */}
<<<<<<< HEAD
            <form className="cart-form clearfix" method="get" action={`cart_add/${product.id}`}>
                <div className="single_product_desc clearfix">
                    <span>{product.brand}</span>
                    <a href="#">
                        <h2>{product.name}</h2>
                    </a>
                    {product.discount_amt ? (
                        <p className="product-price">
                            <span className="old-price">₹{product.price}</span> ₹{product.discount_amt}
                        </p>
                    ) : (
                        <p className="product-price">₹{product.price}</p>
                    )}
                    <p className="product-desc">{product.description}</p>
                    {/* Select Box */}
                    <div className="select-box d-flex mt-50 mb-30">
                        <select name="select" id="productSize" className="mr-5">
                            {product.size.map((size, index) => (
                                <option key={index} value={size}>
                                    Size: {size}
                                </option>
                            ))}
                        </select>
                        <select name="select" id="productColor">
                            {product.color.map((color, index) => (
                                <option key={index} value={color}>
                                    Color: {color}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Cart & Favourite Box */}
                    <div className="cart-fav-box d-flex align-items-center">
                        {/* Cart */}
                        <button type="submit" name="addtocart" value="5" className="btn essence-btn">
                            Add to cart
                        </button>
                        {/* Favourite */}
                        <div className="product-favourite ml-4">
                            <a href="#" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                </div>
            </form>
=======
            <div className="single_product_desc clearfix">
                <span>{brand}</span>
                <h2>{name}</h2>
                <p className="product-price">
                    <span className="old-price">₹{price.toFixed(2)}</span> ₹{discountPrice.toFixed(2)}
                </p>
                <p className="product-desc">{description}</p>
            </div>
>>>>>>> c1ada96 (adding images of website)
        </section>
    );
};

export default ProductDetails;
