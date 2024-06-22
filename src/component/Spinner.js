import React, { Component } from 'react'

const Spinner = () => {


    return (
        <>
            <div>
                <div className="text-center w-100 vh-100 d-flex justify-content-center align-items-center">

                    <div className="spinner-border" role="status">
                    </div>
                    <span className="sr-only mx-2" >   Loading...</span>
                </div>
            </div>
        </>
    )

}
export default Spinner;