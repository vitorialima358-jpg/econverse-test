import "./Header.scss"
import logo from "../Header/Logo.png"
import { FiShield, FiTruck, FiCreditCard, FiHeart, FiSearch, FiShoppingCart, FitUser, FiUser } from "react-icons/fi"


const Header = () => {
  return (
    <header className="header">

      {/* TOP BAR */}
      <div className="header__top">
        <div className="top-item">
          <FiShield size={14} />
          <span>
            Compra <strong>100% segura</strong>
          </span>
        </div>

        <div className="top-item">
          <FiTruck size={14} />
          <span>
            Frete <strong>grátis</strong> acima de R$ 200
          </span>
        </div>

        <div className="top-item">
          <FiCreditCard size={14} />
          <span>
            <strong>Parcele suas compras</strong>
          </span>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="header__main">
        <img src={logo} alt="Econverse" className="header__logo" />
<div className="header__search">
  <input placeholder="O que você está buscando?" />
  <FiSearch className="search__icon" size={18} strokeWidth={1.5} />
</div>


       <div className="header__icons">
  <FiHeart size={20} strokeWidth={1.5} />
  <FiShoppingCart size={20} strokeWidth={1.5} />
  <FiUser size={20} strokeWidth={1.5} />
  </div>
</div>
      {/* NAVIGATION */}
      <nav className="header__nav">
        <a>Todas categorias</a>
        <a>Supermercado</a>
        <a>Livros</a>
        <a>Moda</a>
        <a>Lançamentos</a>
        <a className="active">Ofertas do dia</a>
        <a>Assinatura</a>
      </nav>

    </header>
  )
}


export default Header