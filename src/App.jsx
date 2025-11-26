import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './Class 1/First'
import MainFile, { File1, File2, File3, File4, File5 } from './Class 1/ManyFiles'
import Second from './Class 2/Second'
import UseState1 from './Class 3/UseState1'
import Third from './Class 3/Third'
import Fourth from './Class 4/Fourth'
import Main from './Class 4/Main'
import Form from './Class 5/Form'
import Carousel from './Class 5/Carousel'
import Form1 from './Class 6/Form1'
import Todo from './Class 7/Todo'
import Todo1 from './Class 7/Todo1'
import Eight from './Class 8/Eight'
import Ninth from './Class 9/Ninth'
import Prac from './Practice/Prac'
import HigherContext from './Context/Higher'
import Tailwind from './Tailwind/Tailwind'
import Project from './Project/Project'
import SkeletonCard from './Project/SkeletonCard'
import Popup from './Popup'
import Model from './Model'
import Slick from './Slick'

function App() {

  let images=[
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
  ]

  return (
    <>
    {/* Class 1 */}
      {/* <h1>Hello Everyone</h1> */}
      {/* <First/> */}
      {/* <MainFile/>
      <File1/>
      <File2/>
      <File3/>
      <File4/>
      <File5/> */}
    
    {/* Class 2 */}
        {/* <Second/> */}

    {/* Class 3 */}
    {/* <UseState1/> */}
    {/* <Third/> */}

    {/* Class 4 */}
    {/* <Main/> */}

    {/* Class 5 */}
    {/* <Form/> */}
    {/* <Carousel images={images}/> */}

    {/* Class 6 */}
    {/* <Form1/> */}

    {/* Class 7 */}
    {/* <Todo/> */}
    {/* <Todo1/> */}

    {/* Class 8 */}
    {/* <Eight/> */}

    {/* Class 9 */}
    {/* <Ninth/> */}
    {/* <HigherContext.Provider value="Ayush">
    <Prac/>
    </HigherContext.Provider>*/}

    {/* <Tailwind/> */}

    {/* <Project/> */}
    {/* <SkeletonCard/> */}

    {/* <Popup/> */}

    <Slick/>
    
    </>
  )
}

export default App
