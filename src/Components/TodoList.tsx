import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

function TodoList() {

    const todos = [
        {
            name: "Learn React",
            completed: false
        },
        {
            name: "Learn TypeScript",
            completed: false
        },
        {
            name: "Learn Tailwind",
            completed: true
        }
    ]
    
    return <>
        <h1>Todos</h1>
        <div className="grid grid-cols-2 gap-4">
            <ListHeader title="Remaining" count={2}/>
            <ListHeader title="Completed" count={2}/>
        </div>
        <div className="p-4">
            {
                todos.map((todo, index) => {
                    return <ListItem item={todo} key={index} />
                })
            }
        </div>
    </>;
}

export default TodoList;