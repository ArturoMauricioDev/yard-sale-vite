

const Navbar = () => {
    return (
        <nav>
            <img className="menu" src="https://svgshare.com/i/dd7.svg" alt="" />
            <div className="navbar-left">
                <img className="logo" src="https://svgshare.com/i/c09.svg" alt="logo" />
                <ul>
                    <li>All</li>
                    <li>Clothes</li>
                    <li>Electronics</li>
                    <li>Furniture</li>
                    <li>Toys</li>
                    <li>Others</li>
                </ul>
            </div>
            <div className="navbar-right">
                <span>camilayokoo@gmail.com</span>
                <div className="navbar-right__shopping-cart">
                    <img src="https://svgshare.com/i/dfT.svg" alt="shopping cart" />
                    <div>2</div>
                </div>
            </div>

        </nav>
    );
};

export { Navbar };
