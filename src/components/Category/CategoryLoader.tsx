import React from "react"
import ContentLoader from "react-content-loader"

const CategoryLoader = () => (
   <ContentLoader
      speed={2}
      className="section_product-button section_product_skeleton"
      width={288}
      height={40}
      viewBox="0 0 288 40"
      backgroundColor="#fcfcfc"
      foregroundColor="#dedede"
   >
      <rect x="0" y="0" rx="7" ry="7" width="288" height="40" />
      <rect x="252" y="335" rx="0" ry="0" width="6" height="14" />
   </ContentLoader>
)

export default CategoryLoader;