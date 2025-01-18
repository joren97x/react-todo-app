interface Props {
    checked: boolean;
    onChange: () => void;
}

function Checkbox({ checked, onChange }: Props) {
    return <div>
        <input type="checkbox" checked={checked} onChange={onChange}/>
    </div>
}

export default Checkbox;