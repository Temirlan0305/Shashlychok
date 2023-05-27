import React from "react"
import ContentLoader from "react-content-loader"
import styles from './Sliders.module.scss'

const SliderLoader: React.FC = () => (
   <ContentLoader
      speed={2}
      className={styles.root}
      width="100%"
      height={300}
      viewBox="0 0 100% 300"
      backgroundColor="#fcfcfc"
      foregroundColor="#dedede"
   >
      <rect x="0" y="0" rx="7" ry="7" width="100%" height="300" />
   </ContentLoader>
)

export default SliderLoader;