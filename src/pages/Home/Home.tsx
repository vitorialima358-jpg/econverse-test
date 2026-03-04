import { useEffect, useState } from "react"
import { Product } from "../../types/Product"
import { getProducts } from "../../services/api"
import PartnerSelect from "../../components/PartnerSection/PartnerSection"
import ProductModal from "../../components/ProductModal/ProductModal"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import CategorySection from "../../components/CategorySection/CategorySection"
import "./Home.scss"
import RelatedProductCard from "../../components/RelatedProductCard/RelatedProductCard"
import ProductList from "../../components/ProductList/ProductList"
import Footer from "../../components/Footer/Footer"
import BrandSection from "../../components/BrandSection/BrandSection"
const Home = () => {
    const [products, setProducts] = useState<Product[]>([])


    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts()
            setProducts(data.products)
        }

        fetchData()
    }, [])

    return (
        <>

            <Header />


            <main className="home">

                {/* HERO FULL WIDTH */}
                <div className="hero-full">
                    <Hero />
                </div>
                <CategorySection />
                <section className="related-products">
                    <h2>Produtos relacionados</h2>
                   

                    <div className="tabs">
                        <span className="active">CELULAR</span>
                        <span>ACESSÓRIOS</span>
                        <span>TABLETS</span>
                        <span>NOTEBOOKS</span>
                        <span>TVS</span>
                        <span>VER TODOS</span>
                    </div>


                </section>

                {/* Conteúdo centralizado */}
                <div className="container">
                    <ProductList
                        products={products}
                    />
                </div>
                <PartnerSelect />

                <div className="container">
                    <section className="related-products">
                        <h2>Produtos relacionados</h2>
                        
                   
                    <span className="see-all">Ver todos</span>

                        <ProductList
                            products={products}
                        />
                    </section>
                </div>
            </main>
            <PartnerSelect />
            <BrandSection />
            <div className="container">
                <section className="related-products">
                    <h2>Produtos relacionados</h2>
                    <span className="see-all">Ver todos</span>
                    <ProductList
                        products={products}
                    />
                </section>
            </div>
            <Footer></Footer>

        </>

    )
}

export default Home