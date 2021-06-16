//https://www.npmjs.com/package/react-loader-spinner
import React from 'react';
import Loader from 'react-loader-spinner';

const style = {
    div : {
        width:'100%',
        height : '100%',
        textAlign:'center',
        paddingTop:'200px'
    }
}

const Spinner = (props) => {

    return(
        <>
        <div style={style.div}>
            {/* <Loader
                type="Oval"
                color="#61d8ff"
                height={80}
                width={80}
                // timeout={3000} //3 secs
            /> */}
            </div>
        </>
    )
}

export default Spinner;