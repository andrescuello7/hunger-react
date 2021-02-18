import React from 'react';
import { getStorageArray, setStorage } from "../../Utils/UtilsStorage"
import FormStatic from "../Statics/FormStatic"
import { Table } from "react-bootstrap"


const Datos = () => {

    const mostrar = getStorageArray("comida")
    const resutExtract = mostrar.map((art, i)=>(<FormStatic article={art} id={i} />))

    return (
        <div className="DatosVista">
            <Table striped bordered hover>
                <thead className="DatosVista">
                    <tr>
                    <th>Dia</th>
                    <th>Comida</th>
                    <th>Calor o Frio</th>
                    <th>Opcion</th>
                    </tr>
                </thead>
                <tbody className="DatosVista">
                    <>{resutExtract}</>
                </tbody>
            </Table>
            <div>
                <a href="/">Home</a>
            </div>
        </div>
    )
};
export default Datos;