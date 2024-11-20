import "./styles.css"

const ComponenteConPropiedades = ({nombre, correo}) => {
    return(
        <div className="properties-component">
            <h1>Este es un componente con propiedades</h1>
            <p>Este componente recibe propiedades desde otro componente</p>
            <p>En este caso, las propiedades son: {nombre} y {correo}</p>

            <p>Por lo tanto es posible pasar distintos nombres y correos al componente</p>
        </div>
    );
}

export { ComponenteConPropiedades}