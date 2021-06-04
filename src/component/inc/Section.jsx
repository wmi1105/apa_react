import React, { useEffect, useState } from 'react';
import { setContents } from '../../js/common_pub';

const Section = (props) => {
    const [containerSize, setContainerSize] = useState(null);
    useEffect(() => {
        setContainerSize(setContents());
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