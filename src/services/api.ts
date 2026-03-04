import productsData from "../data/products.json"

export const getProducts = async () => {
  return Promise.resolve(productsData)

}