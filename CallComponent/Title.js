import React from 'react'

function Title() {
    console.log(`Title rendered`);
    return (
        <div>
            <h1>Hello User</h1>
        </div>
    )
}

export default React.memo(Title)
