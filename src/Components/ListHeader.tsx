interface Props {
    title: string;
    count: number;
}

function ListHeader({title, count}: Props) {
    return <>
        <div className="font-bold">
            { title }: { count }
        </div>
    </>;
}

export default ListHeader;