import React from 'react'

import SimpleInfoCard from './SimpleInfoCard'

import { useParams } from 'react-router-dom';

function HeaderWithFourCards({ title1, text1 = "-", title2, text2 = "-", title3, text3 = "-", title4, text4 = "-" }) {
    const { cerradora } = useParams();

    return (
        <div>
            <h1>{cerradora}</h1>
            {/* 4 Tarjetas para mostrar datos */}
            <div className="container d-flex justify-content-center mb-3 w-100">
                <div className="row w-100">
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 mt-3" >
                        <SimpleInfoCard title={title1} text={text1}/>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 mt-3" >
                        <SimpleInfoCard title={title2} text={text2} />
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 mt-3" >
                        <SimpleInfoCard title={title3} text={text3}/>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 mt-3" >
                        <SimpleInfoCard title={title4} text={text4}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderWithFourCards