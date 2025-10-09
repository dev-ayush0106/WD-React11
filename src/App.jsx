import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './Class 1/First'
import MainFile, { File1, File2, File3, File4, File5 } from './Class 1/ManyFiles'
import Second from './Class 2/Second'
import UseState1 from './Class 3/UseState1'
import Third from './Class 3/Third'

function App() {

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
    <Third/>
    </>
  )
}

export default App
