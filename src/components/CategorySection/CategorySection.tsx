import "./CategorySection.scss"
import {
  Monitor,
  Store,
  Wine,
  Wrench,
  Heart,
  Dumbbell,
  Shirt
} from "lucide-react"

const categories = [
  { icon: Monitor, name: "Tecnologia" },
  { icon: Store, name: "Supermercado" },
  { icon: Wine, name: "Bebidas" },
  { icon: Wrench, name: "Ferramentas" },
  { icon: Heart, name: "Saúde" },
  { icon: Dumbbell, name: "Esportes e Fitness" },
  { icon: Shirt, name: "Moda" },
]

const CategorySection = () => {
  return (
    <section className="categories">
      <div className="categories__container">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <div key={index} className="category-item">

              <div className="category-card">
                <Icon size={32} strokeWidth={1.5} />
              </div>

              <span className="category-label">
                {category.name}
              </span>

            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CategorySection