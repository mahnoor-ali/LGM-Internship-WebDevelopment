import React from 'react'

export default function User(props) {
    let name = props.Fname + " " + props.Lname;
  return (
    <div className="my-3">
    <div className="card text-bg-light mb-3" style={{ width: "16rem" }}>
        <img src={props.avatar} className="card-img-top" alt="avatar" />
        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{props.email}</p>
        </div>
    </div>
</div>
  )
}
