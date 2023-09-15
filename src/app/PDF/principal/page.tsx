'use client'

import { useState } from "react";
import PruebaPDF from "../pruebas/page";
import {PDFViewer} from '@react-pdf/renderer'

const PPDF = () => {
    const [VerPdf, setVerPdf] = useState(false);
    const NavBarPDF = () => {
        return(
        <nav>
            <button className="btn btn-primary m-1">Ver web</button>
            <button className="btn btn-primary m-1" onClick={()=>{
                setVerPdf(!VerPdf);
    
            } }> {VerPdf ? "Ocultar Pdf" : "Ver PDF"}</button>
            <button className="btn btn-primary m-1">Descargar PDF</button>
        </nav>
        )
    };
    return(
        <div style={{minHeight:"100vh"}}>
            <NavBarPDF />
            <> 
                {VerPdf ? (
                <PDFViewer style={{ width: "100%", height: "94vh" }}>
                    <PruebaPDF /> 
                </PDFViewer>
                ) :null }
            </>
        </div>
    )

};

export default PPDF;