import React from 'react'

function Tag ({text, hTag}) {

    return (
        <button type="button" className="job-tag" onClick={()=>{hTag(text)}}>
            {text}
        </button>
    )
}

export default Tag;