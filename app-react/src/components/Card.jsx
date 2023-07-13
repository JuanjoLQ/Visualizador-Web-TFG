import React from 'react'
import '../css/Card.css'

export const Card = ({ title, imageUrl, body }) => {

    if (title === "") {
        return (
            <>
                <div className="card-container">
                    <div className="image-container">
                        <img src='/images/nulo.png' alt='' />
                    </div>
                    <div className="card-title">
                        <h3>has introducido un valor nulo</h3>
                    </div>
                    <div className="card-body">
                        <p>se mostrara otra tarjeta</p>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="card-container">
                    <div className="image-container">
                        <img src={imageUrl} alt='' />
                    </div>
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{body}</p>
                    </div>
                </div>

            </>
        )
    }



}