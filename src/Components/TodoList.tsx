import { useState } from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import TextField from "./TextField";

function TodoList() {

    const [ todos, setTodos ] = useState([
        {
            id: 1,
            name: "Learn React",
            completed: false
        },
        {
            id: 2,
            name: "Learn TypeScript",
            completed: false
        },
        {
            id: 3,
            name: "Learn Tailwind",
            completed: true
        }
    ])

    const completed = todos.filter(t => t.completed).length
    const remaining = todos.filter(t => !t.completed).length

    const addTodo = (name: string) => {
        console.log(name)
        const newTodo = {
            id: todos.length > 0 ? todos[todos.length-1].id + 1 : 1,
            name: name,
            completed: false
        }
        setTodos([...todos, newTodo])
    }

    const updateTodo = (id: number) => {
        // let todo = todos.find((todo) => todo.id === id)
        // todo.completed = !todo.completed
        // console.log(todo)
        const newTodos = todos.map((todo) => {
            return todo.id === id ? {...todo, completed: !todo.completed } : todo
        })

        setTodos(newTodos)
    }

    const deleteTodo = (id: number) => {
        const newTodos = todos.filter((t => t.id !== id))
        setTodos(newTodos)
    }

    return <>
        <TextField handleAddTodo={addTodo} />
        <h1>Todos</h1>
        <div className="grid md:grid-cols-4 grid-cols-2">
            <ListHeader title="Remaining" count={remaining}/>
            <ListHeader title="Completed" count={completed}/>
            {/* <Button label="Mark as done" color="green"/> */}
        </div>
        <div className="p-4">
            { todos.length === 0 && 
                <div className="flex text-center justify-center mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                        No todos found...
                </div> 
            }
            {
                todos.map((todo) => {
                    return <ListItem item={todo} key={todo.id} onClick={ updateTodo } onDelete={ deleteTodo } />
                })
            }
        </div>
    </>;
}

export default TodoList;

// setTodos(todos.map((t) => {
//     if(t.id === todo.id) {
//         return {
//             ...todos,
//             completed: !t.completed
//         }
//     }
// }))