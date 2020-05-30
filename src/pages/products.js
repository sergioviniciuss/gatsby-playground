import React from "react"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"

const Products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our products page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor
          orci blandit fringilla porta. Morbi vel erat massa. Morbi fringilla
          vehicula condimentum. Pellentesque lorem neque, imperdiet tempus nunc
          in, faucibus molestie est. In a ex mauris. Aliquam sit amet posuere
          nibh. Fusce non ultrices elit. Nunc eget dui sit amet nibh facilisis
          semper. Aliquam erat volutpat.
        </p>
      </div>
    </Layout>
  )
}

export default Products
