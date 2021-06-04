import React, { useState } from 'react';

const PostDetail = ({address, onDetail, onClick}) => {
    const [input, setInput] = useState('');

    return(
        <>
        <div>
            {JSON.stringify(address)}
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={() => onDetail(input)}>전송</button>
        </div>
        </>
    )
}

export default PostDetail;