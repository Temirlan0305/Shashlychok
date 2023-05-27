import React from "react"
import ContentLoader from "react-content-loader";

const ProductLoader: React.FC = () => (
   <ContentLoader
      speed={2}
      className="product__column"
      width={288}
      height={425}
      viewBox="0 0 288 425"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
   >
      <rect x="0" y="0" rx="15" ry="15" width="288" height="250" />
      <rect x="0" y="262" rx="5" ry="5" width="288" height="31" />
      <rect x="0" y="306" rx="5" ry="5" width="288" height="66" />
      <rect x="0" y="384" rx="5" ry="5" width="91" height="35" />
      <rect x="169" y="384" rx="5" ry="5" width="119" height="35" />
   </ContentLoader>
)

export default ProductLoader;