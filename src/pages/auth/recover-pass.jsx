
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecuperarPasswordPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [enviado, setEnviado] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        // Aquí iría la lógica para enviar el correo de recuperación
        console.log("Enviando correo de recuperación a:", email)

        // Simulando una petición
        setTimeout(() => {
            setIsLoading(false)
            setEnviado(true)
        }, 1000)
    }

    return (
        <div className="container flex flex-col items-center justify-center py-10">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Recuperar contraseña</CardTitle>
                    <CardDescription className="text-center">
                        Ingresa tu correo electrónico para recibir un enlace de recuperación
                    </CardDescription>
                </CardHeader>
                {!enviado ? (
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Correo electrónico</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="ejemplo@correo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4">
                            <Button className="w-full" type="submit" disabled={isLoading}>
                                {isLoading ? "Enviando..." : "Enviar enlace de recuperación"}
                            </Button>
                            <div className="flex justify-between w-full">
                                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                                    ← Volver
                                </Link>
                                <Link to="/login" className="text-sm text-primary hover:underline">
                                    Volver a inicio de sesión
                                </Link>
                            </div>
                        </CardFooter>
                    </form>
                ) : (
                    <CardContent className="space-y-4">
                        <div className="bg-muted p-4 rounded-lg text-center">
                            <p className="font-medium">¡Correo enviado!</p>
                            <p className="text-sm text-muted-foreground mt-2">
                                Hemos enviado un enlace de recuperación a {email}. Por favor revisa tu bandeja de entrada.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-4 mt-4">
                            <Button
                                className="w-full"
                                variant="outline"
                                onClick={() => {
                                    setEnviado(false)
                                    setEmail("")
                                }}
                            >
                                Enviar a otro correo
                            </Button>
                            <div className="flex justify-between w-full">
                                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                                    ← Volver
                                </Link>
                                <Link to="/login" className="text-sm text-primary hover:underline">
                                    Volver a inicio de sesión
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                )}
            </Card>
        </div>
    )
}

