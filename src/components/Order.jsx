

const Order = ({ order }) => {
    const { date, price, quantity } = order
    return (
        <div className="my-orders-content">
            <p>
                <span>{date}</span>
                <span>{`${quantity} articles`} </span>
            </p>
            <div className="right-arrow">
                <p>{`$ ${price}`} </p>
                <img src="https://svgshare.com/i/dbD.svg" alt="arrow" />

            </div>
        </div>
    );
};

export { Order };
