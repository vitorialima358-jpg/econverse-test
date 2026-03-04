import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import { Product } from "../../types/Product"
import RelatedProductCard from "../RelatedProductCard/RelatedProductCard"
import ProductModal from "../ProductModal/ProductModal"

import "./ProductList.scss"

interface ProductListProps {
products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
const swiperRef = useRef<any>(null)

return (
<> <div className="product-list-container">

    {/* SETA ESQUERDA */}
    <div
      className="carousel-arrow left"
      onClick={() => swiperRef.current?.slidePrev()}
    >
      ‹
    </div>

    <Swiper
      modules={[Pagination]}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      pagination={{ clickable: true }}
      spaceBetween={20}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      className="products-swiper"
    >
      {products.map((product) => (
        <SwiperSlide key={product.productName}>
          <RelatedProductCard
            product={product}
            onClick={setSelectedProduct}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* SETA DIREITA */}
    <div
      className="carousel-arrow right"
      onClick={() => swiperRef.current?.slideNext()}
    >
      ›
    </div>

  </div>

  {selectedProduct && (
    <ProductModal
      product={selectedProduct}
      onClose={() => setSelectedProduct(null)}
    />
  )}
</>


)
}

export default ProductList
