import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>El Revoltijo Online</h1>
        <nav>
            <ul>
                <li>Almacén</li>
                <li>Electrodomésticos</li>
                <li>Muebles</li>
                <li>Motos</li>
            </ul>
        </nav>

        <CartWidget></CartWidget>

    </header>   
    
  )
}

export default NavBar
