import React, { useState } from "react";


export const Traficc = () => {
    const [color, setColor] = useState('');
    const [extendido, setExtendido] = useState(false);
    console.log(color);
    const colors = extendido ? ['rojo', 'amarillo', 'verde', 'morado'] : ['rojo', 'amarillo', 'verde'];

    const RandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setColor(colors[randomIndex]);
      };

    const newColor = ()=>{
        setExtendido(!extendido);
        setColor('');
    }

    return (
        <>
            <div className={`wrapper aling-content-center ${extendido ? 'cubo-extendido' : 'cubo'}`}>
                
                <div className={"cubo"}>
                    <div className="circulo">
                        <div className={`rojo  ${color === 'rojo' ? 'glow1' : ''}`} onClick={() => setColor('rojo')}></div>
                        <div className={`amarillo  ${color === 'amarillo' ? 'glow2' : ''}`} onClick={() => setColor('amarillo')}></div>
                        <div className={`verde ${color === 'verde' ? 'glow3' : ''}`} onClick={() => setColor('verde')}></div>
                        {extendido && (
                            <div className={`morado ${color === 'morado' ? 'glow4' : ''}`} onClick={() => setColor('morado')}></div> 
                            )}
                    </div>
                    <div className="palito"></div>
                </div>
            </div>
            
            <div className="container-fluid">
                <button className="btn btn-secondary m-3" onClick={RandomColor}>
                <i className="fa-solid fa-shuffle"></i> Cambiar color
                </button>
                <button className="btn btn-info m-3" onClick={newColor}>
                        {extendido ? 'Desactivar Extensión' : 'Activar Extensión'}
                </button>
            </div>
       
        </>
    )
}
