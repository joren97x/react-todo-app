import React from "react";

interface Props {
    label?: string;
    color: string;
    onClick?: (event: React.MouseEvent) => void;
    icon?: React.ReactNode;
}

function Button({label, color, icon, onClick}: Props) {
    const bgClass = `bg-${color}-500`;
    return <div>
        <button 
            className={`${bgClass} ${color} font-bold p-2 rounded`}
            onClick={onClick}
        >
            { icon && <div>{icon}</div> }            
            { label && <span>{label}</span> }            
        </button>
    </div>
}

export default Button;