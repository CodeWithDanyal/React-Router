import Layout from './Layout'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Todo from './Todo'

function App () {
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='projects' element={<Project />} />
      <Route path='projects/todo' element={<Todo />} />

    </Route>
  )
)

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

    

export default App;















// import { useEffect, useState } from "react";
// import "./App.css";
// import { TodoProvider } from "./Context";

// import TodoForm from "./Components/TodoForm";
// import TodoItem from "./Components/TodoItems";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     setTodos((prevTodos) => [{id: Date.now(), ...todo}, ...prevTodos])
//   }

//   const updateTodo = (id, todo) => {
//     setTodos((prevtodos) => prevtodos.map((prev) => prev.id === id ? todo : prev))
//   }

//   const deleteTodo = (id) => {
//     setTodos((prevTodos) => prevTodos.filter((prev) => prev.id !== id))
//   }

//   const toggleComplete = (id, todo) => {
//     setTodos((prevtodos) => prevtodos.map ((prev) => prev.id === id ? {...todo, completed: !prev.completed} : prev))
//   }

//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos"))
//     if (todos.length > 0) (setTodos(todos));
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos))
//   } ,[todos])

//   return (
//     <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
//       <div className="bg-[#172842] min-h-screen py-8">
//         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//           <h1 className="text-2xl font-bold text-center mb-8 mt-2">
//             Manage Your Todos
//           </h1>
//           <div className="mb-4"><TodoForm /></div>
//           <div className="flex flex-wrap gap-y-3">
//             {/*Loop and Add TodoItem here */}
//             {todos.map((todo) => {
//               return  (
//               <div key={todo.id} className="w-full">
//               <TodoItem todo={todo}/>
//             </div>
//             )
//             })}
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   );
// }

// export default App;
