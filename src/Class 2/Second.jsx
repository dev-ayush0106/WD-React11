import Child from "./Props/Child";
import Product from "./Props/Detail/Product";
import UseState from "./State/UseState";

export default function Second(){
    let name="Sudheer";
    let age=20;
    let city="Mumbai";
    return(
        <>
            {/* <Child sehar={city} age={age} name={name}/> */}
            {/* <Product/> */}
            <UseState/>
        </>
    )
}