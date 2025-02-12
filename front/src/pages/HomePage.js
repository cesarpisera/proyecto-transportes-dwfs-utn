import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="/images/home/img01.jpg" width="1000" alt="Avion"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae illum at amet, neque quisquam eaque minus esse facere veritatis, in corporis quos, magni illo. Officiis tempora deleniti aliquid modi, saepe minus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae illum at amet, neque quisquam eaque minus esse facere veritatis, in corporis quos, magni illo. Officiis tempora deleniti aliquid modi, saepe minus.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
