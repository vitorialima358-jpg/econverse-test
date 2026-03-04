import { useState } from "react"
import { Product } from "../../types/Product"
import "./ProductModal.scss"

interface ProductModalProps {
  product: Product
  onClose: () => void
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {

  const [quantity, setQuantity] = useState(1)

  const increase = () => setQuantity(quantity + 1)

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-body">

          <img
            src={product.photo}
            alt={product.productName}
            className="modal-image"
          />

          <div className="modal-info">

            <h2>{product.productName}</h2>

            <p className="modal-price">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </p>

            <p className="modal-description">
              {product.descriptionShort}
            </p>

            <a href="#" className="modal-link">
              Veja mais detalhes do produto 
            </a>

            <div className="modal-actions">

              <div className="quantity">
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
              </div>

              <button className="modal-buy">
                COMPRAR
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductModal