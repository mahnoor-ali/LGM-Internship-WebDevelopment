import React from 'react'

export default function Card(props) {
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.email}</p>
                        <a href={props.result}> {props.name} + " Result Card" </a>
                        <p className="card-text">{props.skills}</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}
