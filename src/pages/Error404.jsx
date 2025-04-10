import PageTransition from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { Link } from "react-router-dom";

function Error404() {

    return (
        <PageTransition>
            <main className="flex flex-col items-center justify-center px-4 md:px-6 py-6  bg-gradient-to-b from-white to-green-50">
                <div className="flex flex-col items-center text-center max-w-3xl">
                    <div className="relative mb-8">
                        <div className="text-[150px] md:text-[200px] font-bold text-green-600/10 leading-none">404</div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Shield className="h-24 w-24 md:h-32 md:w-32 text-green-600/40" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">¡Fuera de juego!</h1>

                    <p className="text-xl text-gray-500 mb-8">
                        La página que estás buscando ha sido expulsada del campo o nunca existió.
                    </p>

                    <div className="space-y-4 mb-8">
                        <p className="text-gray-500">Posibles razones:</p>
                        <ul className="text-gray-500 space-y-2">
                            <li>• La URL puede contener un error</li>
                            <li>• La página puede haber sido movida o eliminada</li>
                            <li>• Podrías haber seguido un enlace desactualizado</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild className="bg-green-600 hover:bg-green-700">
                            <Link to="/">Volver al Inicio</Link>
                        </Button>
                        <Button variant="outline">
                            <Link to="/contacto">Contactar Soporte</Link>
                        </Button>
                    </div>
                </div>
            </main>
        </PageTransition>
    );
}

export default Error404;
