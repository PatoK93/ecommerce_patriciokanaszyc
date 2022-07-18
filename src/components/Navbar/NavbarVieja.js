import './Navbar.css';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget.js';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div>
                <h1 className='titulo'>ECOMMERCE PAK</h1>
            </div>
            <div>
                <Button>Categoría A</Button>
                <Button>Categoría B</Button>
                <Button>Categoría C</Button>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
};

export default Navbar;