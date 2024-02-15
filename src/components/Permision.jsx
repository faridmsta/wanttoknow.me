import React from 'react'
import '../components/Permision.css'
import { NavLink } from 'react-router-dom'

function Permision() {
    return (
        <div>
            <section className="permisionpage">
                <div className="container">
                    <div className="permisionWrap">
                        <div className="content">
                            <NavLink to="/home">
                                <h1>Want to know me?</h1>
                            </NavLink>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Permision