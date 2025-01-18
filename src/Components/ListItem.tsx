interface Props{
    item: {
        name: string;
        completed: boolean;
    }
}

function ListItem({item}: Props) {
    return <>
        <div className="grid grid-cols-2 justify-between border-solid border-2 border-gray-300 p-2">
            <div className="">
                { item.name }
            </div>
            <div>
                { item.completed }
            </div>
        </div>
    </>;
}

export default ListItem;