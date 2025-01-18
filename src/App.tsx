import TodoList from "./Components/TodoList";
import TextField from "./Components/TextField";

function App() {
    return (
        <div className="w-1/2 m-auto">
            <h1 className="text-red-600">My React App</h1>
            <p>Welcome to my React</p>
            <TextField />
            <TodoList />
        </div>
    )
}

export default App;