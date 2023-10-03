import { useState } from "react";

function Person() {

    const [person, setPerson] = useState({
        firstName: 'Abdelghafour',
        lastName: 'Elmarzougui',
        age: 30
    })
    const increment = () => {
        setPerson({ ...person, age: person.age + 1 })
    }

    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }
    return <div>
        <p> age de {person.firstName} : {person.age}</p>
        <button onClick={increment}>increment age</button>
        <hr></hr>
        <p> Counter : {count}</p>
        <button onClick={incrementCount}>increment age</button>
    </div>
}

export default Person
