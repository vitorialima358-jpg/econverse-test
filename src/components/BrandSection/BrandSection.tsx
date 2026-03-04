import "./BrandSection.scss"
import logo from "../../assets/image/Logo2.png"

const brands = [1, 2, 3, 4, 5]

const BrandSection = () => {
  return (
    <section className="brands">
      <h2 className="brands__title">Navegue por marcas</h2>

      <div className="brands__container">
        {brands.map((_, index) => (
          <div key={index} className="brand-card">
            <img src={logo} alt="Econverse" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrandSection