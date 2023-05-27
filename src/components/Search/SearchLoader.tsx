import React from "react"
import ContentLoader from "react-content-loader"
import styles from './Search.module.scss'

const SearchLoader: React.FC = () => (
   <ContentLoader
      speed={2}
      className={styles.root}
      width={288}
      height={45.5}
      viewBox="0 0 288 45.5"
      backgroundColor="#fcfcfc"
      foregroundColor="#dedede"
   >
      <rect x="0" y="0" rx="7" ry="7" width="288" height="45.5" />
      <rect x="252" y="335" rx="0" ry="0" width="6" height="14" />
   </ContentLoader>
)

export default SearchLoader;