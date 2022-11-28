import Image from "next/image"
import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"



export default function Product() {

  const { query } = useRouter()

  
  return (
    <ProductContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea eius iure dolor voluptatum numquam maiores, praesentium totam obcaecati natus voluptates blanditiis libero quas sapiente explicabo sed distinctio? Aperiam, enim ea.</p>
      
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}