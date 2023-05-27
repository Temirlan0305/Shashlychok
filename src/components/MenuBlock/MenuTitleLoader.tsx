import React from "react"
import ContentLoader from "react-content-loader"

const MenuTitleLoader: React.FC = () => (
   <ContentLoader
      speed={2}
      width={250}
      height={45.5}
      viewBox="0 0 250 45.5"
      backgroundColor="#fcfcfc"
      foregroundColor="#dedede"
   >
      <rect x="0" y="0" rx="7" ry="7" width="250" height="30.5" />
      <rect x="252" y="335" rx="0" ry="0" width="6" height="14" />
   </ContentLoader>
)

export default MenuTitleLoader;