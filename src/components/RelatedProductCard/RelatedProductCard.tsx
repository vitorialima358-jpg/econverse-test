import "./RelatedProductCard.scss"
import { Product } from "../../types/Product"
import { ChevronRight } from "lucide-react"

interface Props {
  product: Product
  onClick: (product: Product) => void
}

const RelatedProductCard = ({ product, onClick }: Props) => {
  return (
    <div className="related-card">

      <div className="image-wrapper">
        <img src={product.photo} alt={product.productName} />
      </div>

      <p className="description">
        {product.descriptionShort}
      </p>

      <span className="old-price">R$ 30,90</span>

      <h3 className="price">
        R$ {(product.price / 100).toFixed(2)}
      </h3>

      <p className="installments">
        ou 2x de R$ 49,95 sem juros
      </p>

      <span className="free-shipping">
        Frete grátis
      </span>

      <button onClick={() => onClick?.(product)}>
        COMPRAR
      </button>
      

    </div>
  )
}

export default RelatedProductCard