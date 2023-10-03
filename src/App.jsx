import { useState } from "react";

const name = "Elmarzougui Abdelghafour";
const style = { color: 'red', backgroundColor: 'blue' }
const showTitle = false
const todos = [
  'Creation de site',
  'Creation de contenu',
  'Creation de LOGO'
]
function App() {

  const handleClick = (e) => {
    console.log(e);
    alert('Title Clecked');
  }
  return <div>
    <Counter></Counter>
    <Title color='green' id="myId" className="myClass" >Abdelghafour from function</Title>
    <h1 /*onClick={handleClick}*/ style={style}> Hello {name}</h1>
    {showTitle && <h1> Hello {name} 2024</h1>}

    {showTitle ? <h1> Hello {name} 2024</h1> : 'Welcom 2023'}
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus facere sint!</p>

    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
  </div>
}
function Title({ color, ...props }) {

  return <h1 style={{ color: color }} {...props} />;
}

function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return <>
    <p>Compteur : {count}</p>
    <button onClick={increment}>Increment</button>
  </>
}
export default App
