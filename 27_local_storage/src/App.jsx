import React from 'react'

const App = () => {
  // let data = "rydham patel";
  // localStorage.setItem("users", data);

  // let res = localStorage.getItem("users");
  // console.log(res);

  // localStorage.removeItem("users"); its delete data from local storage using key

  // localStorage.setItem("price", 90);

  // localStorage.clear();   // its delete all keys from local storage

  // let age = Number(localStorage.getItem("age"));
  // console.log(age)



  // when store object so fisrt convert in string using JSON.stringify(object)

  // let student = {
  //   name: "raj",
  //   rno: 101,
  //   per: 90.56
  // }

  // localStorage.setItem("student", JSON.stringify(student)); 

  // let st = JSON.parse(localStorage.getItem("student"));

  // console.log(st)
  // console.log(st.name)
  // console.log(st.rno)
  // console.log(student)



  // let arr = [12, 34, 56, 78];
  // localStorage.setItem("arr", JSON.stringify(arr));
  // let arr = JSON.parse(localStorage.getItem("arr"))
  // console.log(arr);

  // let marks = [12, 56, 78, 90];
  // localStorage.setItem("marks", JSON.stringify(marks));
  // let ma = JSON.parse(localStorage.getItem("marks"));
  // console.log(ma);

  // console.log(localStorage.length)
  // console.log(localStorage.key(0))
  // console.log(localStorage.key(1))
  // console.log(localStorage.key(2))
  // console.log(localStorage.key(3))

  localStorage.clear();
  return (
    <div>
      APP
    </div>
  )

}

export default App
