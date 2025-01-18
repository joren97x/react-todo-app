interface Props {
    handleAddTodo: (name: string) => void
}

import { useState } from "react";
import Button from "./Button";

function TextField({ handleAddTodo }: Props) {

    const [newTodo, setNewTodo] = useState<string>("")
    const addTodo = () => {
        handleAddTodo(newTodo)
        setNewTodo("")
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <input type="text" value={newTodo} onChange={(e) => {
                        setNewTodo(e.target.value)

                    }} className="border-2 w-full p-2" placeholder="What are you working on?" />
                </div>
                <Button label="Add Todo" color="green" onClick={addTodo} />
            </div>
        </>
    );
}

export default TextField;