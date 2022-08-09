- inline stil verirken normal propertyleri obje olarak vermeliyiz. style={ { color: "red", backgroundColor: "black", paddingTop: 50} } gibi
- normal css yazımından farklı olarak camel case kullanmalıyız. örneğin css tarafında background-color şeklinde geçerken react için bunu backgroundColor şeklinde vermeliyiz. çünkü background-color şeklinde bir değişken atayamayız. javascript buna izin vermez.
- eğer bootstrap gibi dışarıdan bir css tanımı alacaksak bunu linki de index.html dosyasında meta kısmına yapıştırabiliriz. 

# Module.css

- farklı component oluşturduk ve div'lerinin classını title olarak verdik. birisi kırmızı biri yeşil olsun. fakat ikisi de aynı classname'e sahip olduğu için en son yaptığımız rengi yeşil verdiğimiz için sadece yeşil renk göreceğiz.

- bunu engellemek için bütün classname'leri farklı vermemiz lazım ki çakışma yaşamasın.

- başka bir yöntem ise oluşturduğumuz style dosyasını style.module.css şeklinde isimlendirmek. daha sonra dosyayı şu şekilde import edeceğiz:

```jsx
import styles from "./style.module.css"
console.log("B", styles)

const index = () => {
  return (
    <div className={styles.title}>index</div>
  )
}

export default index
```

böylece bu title için unique bir id üretecek ve classname'i styles.title olarak atadığımızda bu id'yi kullanarak işlem yapacağı için herhangi bir çakışma yaşamayacağız.