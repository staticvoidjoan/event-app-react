import React from 'react';
import "./Text.css"
const Text = ({label,size,weight,color, lineheight}) => {
    const style = `family ${size} ${weight} ${color} ${lineheight}`
    
    return (
        <div className={style}> 
            {label}
        </div>
    );
}

export default Text;
