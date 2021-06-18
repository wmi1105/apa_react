import React, { useEffect, useState } from 'react';
import { setContents } from 'js/common_pub';

const Section = (props) => {
    const [containerSize, setContainerSize] = useState(null);
    useEffect(() => {
        const size = setContents();
        const style = {
            height : size.windowH-(size.headerH+size.fooderH),
		    top : size.headerH+1,
            backgroundColor : '#fff'
        }

        setContainerSize(style);
    }, [])

    return(
        <>
        {containerSize && 
            <section id="container" style={containerSize}>
                {props.children}
            </section>
        }

        </>
    )
}

export default Section;