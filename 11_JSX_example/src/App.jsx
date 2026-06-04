import React from 'react'

// const ele = <h1 className="head">hello students</h1>;
// function Print() {
//   return ele
// }

function Print() {
  return (
    <div>
      <h1 className="head" id="my">hello students</h1>
      <button>click me !</button>
    </div>
  )
}

function greet() {

  return 'good morning';
}

//  java script comment

const Card = () => {
  let name = "ranveer";
  let a = 12, b = 10;
  let tl = "this is heading";
  const titleStyle = {
    backgroundColor: "white",
    color: "red"
  }
  return (
    <div className="card">
      <h1 title={tl} style={titleStyle} >my name is {name}</h1>
      {/* comment */}
      {/* <h1>addition :  {a + b}</h1> */}
      <h1 style={{ color: "blue", backgroundColor: "red", fontSize: 30 }} >greet  :  {greet()}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem porro alias tenetur autem corporis mollitia modi quasi esse cum sint sapiente sunt sit provident nulla vel, et aliquam, quod id ipsam perferendis a harum quam voluptatum! Id sint architecto soluta aspernatur, alias quidem dolores est asperiores tempora, velit aliquam qui.</p>
    </div >
  )
}

function MultipleEle() {
  return (
    <>
      <h1>hello frineds</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magni.</p>
    </>
  )
}

const App = () => {
  return (
    <MultipleEle />
  )
}

export default App
