interface Props{
    item: {
        name: string;
        completed: boolean;
        id: number;
    };
    onClick: (id: number) => void;
    onDelete: (id: number) => void;
}

import Checkbox from "./Checkbox";
import Button from "./Button";
import TrashIcon from "./TrashIcon";
import React from "react";

function ListItem({item, onClick, onDelete}: Props) {

    const handleClick = () => {
        onClick(item.id)
    }

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation()
        onDelete(item.id)
    }

    return <>
        <div onClick={handleClick} className={`grid grid-cols-2 justify-between border-solid border-2  p-2 ${item.completed ? 'border-green-300 bg-green-100' : 'border-gray-300'}`} >
            <div className=" flex" >
                <Checkbox checked={item.completed} onChange={() => null} />
                { item.name }
            </div>
            <div>
                <Button color="danger" icon={<TrashIcon/>} onClick={handleDelete}>
                   
                </Button>
            </div>
        </div>
    </>;
}

export default ListItem;