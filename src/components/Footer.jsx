import { Link } from "react-router-dom"
import { Shield } from "lucide-react"

function Footer() {

    return (
        <footer className="w-full border-t bg-white py-6">
            <div className=" flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
                <div className="flex items-center gap-2">
                    <img src="/images/LigaTDPlogohorizontal.webp" alt="Company Logo" className="h-8" />
                </div>
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Liga TDP. Casi todos los derechos reservados.
                </p>
                <div className="flex gap-4">
                    <Link to="#" className="text-sm text-gray-500 hover:text-green-600">
                        Términos
                    </Link>
                    <Link to="#" className="text-sm text-gray-500 hover:text-green-600">
                        Privacidad
                    </Link>
                    <Link to="#" className="text-sm text-gray-500 hover:text-green-600">
                        Contacto
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;