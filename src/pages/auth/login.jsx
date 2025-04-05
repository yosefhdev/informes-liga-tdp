
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import PageTransition from "@/components/AnimatedPage"
import { useAuth } from "@/components/auth/AuthContext"
import { toast, Toaster } from "sonner"

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const {
        signIn
    } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const validateForm = () => {
        const newErrors = {}

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

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        if (!validateForm()) {
            return
        }

        const { email, password } = formData
        const { data, error } = await signIn({ email, password })
        console.log("🚀 ~ handleSubmit ~ data:", data.user.user_metadata)
        if (error) {
            setIsLoading(false);

            if (error.message === "Email not confirmed") {
                toast.warning("Debes confirmar tu correo electrónico antes de iniciar sesión.");
            } else {
                toast.error("Error al iniciar sesión. Verifica tus credenciales.");
            }

            console.error("Error al iniciar sesión:", error.message);
        } else {
            toast.success("Sesión iniciada correctamente");
            setIsLoading(false);
            setFormData({ email: "", password: "" });
            setErrors({});

            // TODO: Se redirige a la página de dashboard dependiendo del rol del usuario
            /*
                * Si la persona solo tiene un rol en data.user.user_metadata.roles, 
                * se redirige a la página de dashboard correspondiente al rol.
                
                ? 1. Administrador
                ? 2. Comisario
                    ! Si la persona tiene más de un rol, se mostrara un selector se dashboard.
                    ! Si la persona no tiene ningún rol, se redirige a la página de login.`
            */

            // navigate("/comisario/dashboard");
        }
    }

    return (
        <PageTransition>
            <div className="container flex flex-col items-center justify-center py-10">
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center">Iniciar Sesión</CardTitle>
                        <CardDescription className="text-center">Ingresa tus credenciales para acceder a tu cuenta</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Correo electrónico</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="ejemplo@correo.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Contraseña</Label>
                                    <Link to="/recover-password" className="text-sm text-primary hover:underline">
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
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
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4">
                            <Button className="w-full mt-4" type="submit" disabled={isLoading}>
                                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                            </Button>
                            <div className="flex justify-between w-full">
                                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                                    ← Volver
                                </Link>
                                <p className="text-sm text-muted-foreground">
                                    ¿No tienes una cuenta?{" "}
                                    <Link to="/register" className="text-primary hover:underline">
                                        Regístrate
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

