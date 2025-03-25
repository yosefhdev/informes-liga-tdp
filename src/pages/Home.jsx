export default function Home() {
    return (
        <div className="m-3 rounded-2xl p-4 border ">
            <p>Bienvenido al llenado de informe de comisario.</p>
            <br />
            <p>Para empezar, llene el siguiente formulario</p>

            <form action="" className="space-y-4 mt-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="fecha" className="font-medium">Fecha del Partido:</label>
                    <input 
                        type="date" 
                        id="fecha" 
                        name="fecha" 
                        className="p-2 border rounded-lg"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="equipoLocal" className="font-medium">Equipo Local:</label>
                    <input 
                        type="text" 
                        id="equipoLocal" 
                        name="equipoLocal" 
                        className="p-2 border rounded-lg"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="equipoVisitante" className="font-medium">Equipo Visitante:</label>
                    <input 
                        type="text" 
                        id="equipoVisitante" 
                        name="equipoVisitante" 
                        className="p-2 border rounded-lg"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="resultado" className="font-medium">Resultado:</label>
                    <div className="flex gap-2 items-center">
                        <input 
                            type="number" 
                            id="golesLocal" 
                            name="golesLocal" 
                            className="p-2 border rounded-lg w-20"
                            min="0"
                        />
                        <span>-</span>
                        <input 
                            type="number" 
                            id="golesVisitante" 
                            name="golesVisitante" 
                            className="p-2 border rounded-lg w-20"
                            min="0"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="observaciones" className="font-medium">Observaciones:</label>
                    <textarea 
                        id="observaciones" 
                        name="observaciones" 
                        rows="4" 
                        className="p-2 border rounded-lg"
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Guardar Informe
                </button>
            </form>
        </div>
    )
}