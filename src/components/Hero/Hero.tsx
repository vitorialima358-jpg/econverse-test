import "./Hero.scss"
import banner from "../../assets/image/banner.jpg"

const Hero = () => {
  return (
    <section className="hero">
      <img src={banner} alt="Promoções" className="hero__image" />

      <div className="hero__overlay" />

      <div className="hero__content">
        <h1>Venha conhecer nossas promoções</h1>
        <p><span>50% Off</span> nos produtos</p>
        <button>Ver produto</button>
      </div>
    </section>
  )
}

export default Hero