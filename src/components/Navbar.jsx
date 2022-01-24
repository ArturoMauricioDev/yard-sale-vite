

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
                <img src="https://svgshare.com/i/dag.svg" alt="shopping cart" />
            </div>

        </nav>
    );
};

export { Navbar };
