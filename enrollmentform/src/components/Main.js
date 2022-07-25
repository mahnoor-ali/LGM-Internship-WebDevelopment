import React, { useState } from 'react'
import Card from './Card';

export default function Main() {
    const [registrationsList, setRegistrationsList] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "", result: "", image: "", skill: "" });
    let screenwidth = window.screen.width;

    const enroll = event => {
        setRegistrationsList(formData, ...registrationsList);
    }

    console.log("single obj: " , formData);
    console.log("list of obj: " , registrationsList);
    
    return (
        <div id="main">
            <div id="flex" style={{ width: { screenwidth } }}>
                <div id="form">
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input value={formData.name} type="text" className="form-control" id="name" placeholder="Full name" onChange={event => setFormData({name : event.target.value})} />
                        </div>

                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input value={formData.email} type="email" className="form-control" id="email" placeholder="Your email address" onChange={event => setFormData({email : event.target.value})} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="result" className="form-label">Result</label>
                            <input value={formData.result} type="link" className="form-control" id="result" placeholder="Drive link of your result card" onChange={event => setFormData({result : event.target.value})} />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="image" className="form-label">Image Link</label>
                            <input value={formData.image} type="link" className="form-control" id="image" placeholder="Drive link of your image" onChange={event => setFormData({image : event.target.value})} />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="skill" className="form-label">Skills</label>
                            <input value={formData.skill} type="text" className="form-control" id="skills" placeholder="Technical skills  eg. web development.." onChange={event => setFormData({skill : event.target.value})} />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" onClick={enroll} >Enroll</button>
                        </div>
                    </form>
                </div>
                <div id="card">
                   { registrationsList.map( (studentData) =>
                    <Card name={studentData.name} email={studentData.email} result={studentData.result} image={studentData.image} skills={studentData.skill} />
                    ) }
                    <Card/>
                </div>
            </div>
        </div>
    )
}