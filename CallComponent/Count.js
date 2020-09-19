import React from 'react'

function Count({ type, count }) {
    console.log(`Rendering ${type}`);
    return (
        <div>
            Rendered the {type} to {count}
        </div>
    )
}

export default React.memo(Count)
