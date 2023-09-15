import 'bootstrap/dist/css/bootstrap.css'; // Add this line

const NavBarPDF = () => {
    return(
    <nav>
        <button className="btn btn-primary m-1">Ver web</button>
        <button className="btn btn-primary m-1" onClick={()=>{

        } }>Ver PDF</button>
        <button className="btn btn-primary m-1">Descargar PDF</button>
    </nav>
    )
};

export default NavBarPDF;