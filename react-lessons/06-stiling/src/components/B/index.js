import styles from "./style.module.css"
console.log("B", styles)

const index = () => {
  return (
    <div className={styles.title}>index</div>
  )
}

export default index