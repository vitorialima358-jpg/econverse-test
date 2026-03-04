import "./PartnerSection.scss"
import banner from "../../assets/image/banner-parceiros.png"

const PartnerSection = () => {
  return (
    <section className="partner">
      <div className="partner__grid">

        <div className="partner__card">
          <img src={banner} alt="Parceiros" />
          <div className="overlay" />
          <div className="content">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>CONFIRA</button>
          </div>
        </div>

        <div className="partner__card">
          <img src={banner} alt="Parceiros" />
          <div className="overlay" />
          <div className="content">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>CONFIRA</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PartnerSection