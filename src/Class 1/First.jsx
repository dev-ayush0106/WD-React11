function First() {
    // let name="Ayush";
    let skills=["C","C++","React","Node","MongoDB","C#"]
    let info={
        name:"Suresh",
        city:"Kolkata"
    }
    return (
        <>
            {/* <h1>My First Component</h1>
            <h1>This is First Class Of React</h1> */}

            {/* <h1>My name is {name}</h1> */}
            <ul>
                {/* <li>{skills[0]}</li>
                <li>{skills[1]}</li>
                <li>{skills[2]}</li>
                <li>{skills[3]}</li> */}

                {
                    skills.map((el)=>(
                        <li>{el}</li>
                    ))
                }

                <h1>My name is {info.name} and lives in {info.city}</h1>
            </ul>
        </>
    )
}

export default First