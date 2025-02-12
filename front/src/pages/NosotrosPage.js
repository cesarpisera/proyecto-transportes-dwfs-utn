import React from 'react';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae illum at amet, neque quisquam eaque minus esse facere veritatis, in corporis quos, magni illo. Officiis tempora deleniti aliquid modi, saepe minus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae illum at amet, neque quisquam eaque minus esse facere veritatis, in corporis quos, magni illo. Officiis tempora deleniti aliquid modi, saepe minus.</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="/images/nosotros/nosotros1.jpg" width="200" alt="Juan Gomez"/>
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae illum at amet, neque quisquam eaque minus esse facere veritatis, in corporis quos, magni illo. Officiis tempora deleniti aliquid modi, saepe minus.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NosotrosPage;