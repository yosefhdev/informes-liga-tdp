

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import PageTransition from "@/components/AnimatedPage"
import { useAuth } from "@/components/auth/AuthContext"
import { toast, Toaster } from "sonner"

export default function RegistroPage() {
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        nombre: "",
        apellido_paterno: "",
        apellido_materno: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [aceptaTerminos, setAceptaTerminos] = useState(false)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        // Limpiar error al cambiar el valor
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            })
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre es requerido"
        }

        if (!formData.apellido_paterno.trim()) {
            newErrors.apellido_paterno = "El apellido paterno es requerido"
        }

        if (!formData.apellido_materno.trim()) {
            newErrors.apellido_materno = "El apellido materno es requerido"
        }

        if (!formData.email.trim()) {
            newErrors.email = "El correo electrónico es requerido"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "El correo electrónico no es válido"
        }

        if (!formData.password) {
            newErrors.password = "La contraseña es requerida"
        } else if (formData.password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres"
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden"
        }

        if (!aceptaTerminos) {
            newErrors.terminos = "Debes aceptar los términos y condiciones"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsLoading(true)

        const { error } = await signUp(formData);

        if (error) {
            console.error("Error al registrar:", error.message)
            setErrors((prev) => ({ ...prev, general: error.message }))
            setIsLoading(false)
            toast.error("Error al registrar. Por favor intenta nuevamente.")
            return;
        }
        // Si el registro es exitoso, puedes redirigir al usuario o mostrar un mensaje de éxito
        toast.success("Registro exitoso. Por favor verifica tu correo electrónico para activar tu cuenta.")
        setIsLoading(false)
        // Limpiar el formulario
        setFormData({
            nombre: "",
            apellido_paterno: "",
            apellido_materno: "",
            email: "",
            password: "",
            confirmPassword: "",
            roles: [1, 2],
        })
        setAceptaTerminos(false)
        setErrors({})
        // Simulando una petición
        setTimeout(() => {
            setIsLoading(false)
            navigate("/login");
        }, 2000)
    }

    return (
        <PageTransition>
            <div className="container flex flex-col items-center justify-center py-10">
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center">Crear una cuenta</CardTitle>
                        <CardDescription className="text-center">Ingresa tus datos para registrarte en la plataforma</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="nombre">Nombre completo</Label>
                                <Input
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Tu nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                />
                                {errors.nombre && <p className="text-sm text-destructive">{errors.nombre}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="apellido_paterno">Apellido Paterno</Label>
                                <Input
                                    id="apellido_paterno"
                                    name="apellido_paterno"
                                    placeholder="Tu apellido Paterno"
                                    value={formData.apellido_paterno}
                                    onChange={handleChange}
                                />
                                {errors.apellido_paterno && <p className="text-sm text-destructive">{errors.apellido_paterno}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="apellido_materno">Apellido Materno</Label>
                                <Input
                                    id="apellido_materno"
                                    name="apellido_materno"
                                    placeholder="Tu apellido materno"
                                    value={formData.apellido_materno}
                                    onChange={handleChange}
                                />
                                {errors.apellido_materno && <p className="text-sm text-destructive">{errors.apellido_materno}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Correo electrónico</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="ejemplo@correo.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Contraseña</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-0 top-0 h-full px-3"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                                        <span className="sr-only">{showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}</span>
                                    </Button>
                                </div>
                                {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="terminos"
                                    checked={aceptaTerminos}
                                    onCheckedChange={(checked) => setAceptaTerminos(checked)}
                                />
                                <label
                                    htmlFor="terminos"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Acepto los{" "}
                                    <Link to="/terms" target="_blank" className="text-primary hover:underline">
                                        términos y condiciones
                                    </Link>
                                </label>
                            </div>
                            {errors.terminos && <p className="text-sm text-destructive">{errors.terminos}</p>}
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4">
                            <Button className="w-full mt-4" type="submit" disabled={isLoading}>
                                {isLoading ? "Registrando..." : "Registrarse"}
                            </Button>
                            <div className="flex justify-between w-full">
                                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                                    ← Volver
                                </Link>
                                <p className="text-sm text-muted-foreground">
                                    ¿Ya tienes una cuenta?{" "}
                                    <Link to="/login" className="text-primary hover:underline">
                                        Inicia sesión
                                    </Link>
                                </p>
                            </div>
                        </CardFooter>
                    </form>
                </Card>
            </div>
            <Toaster richColors icons={true} />
        </PageTransition>
    )
}

