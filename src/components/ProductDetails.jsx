
const ProductDetails = () => {
    return (
        <aside className="product-detail">
            <div className="product-top">
                <div>
                    <img src="https://svgshare.com/i/dgb.svg" alt="Close" />
                </div>
                <img className="product-image" src="https://imgur.com/Dbfwb1w.png" alt="" />
            </div>
            <div className="product-info">
                <p>$ 120,00</p>
                <p>Retro refrigerator</p>
                <p>With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.</p>
                <button className="primary-button">
                    <img src="https://svgshare.com/i/dfT.svg" alt="" />
                    Add to cart
                </button>
            </div>
        </aside>
    );
};

export { ProductDetails };


