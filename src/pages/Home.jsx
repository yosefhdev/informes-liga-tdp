import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="m-3 rounded-2xl p-4 border ">
            <p>Bienvenido al llenado de informe de comisario.</p>

            <a href="/login">
                <Button className="w-full mt-4">
                    Iniciar sesión
                </Button>
            </a>
        </div>
    )
}