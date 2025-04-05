
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { ChevronDown, LogIn, LogOut, Menu, User, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "@/components/auth/AuthContext"

export default function Navbar({ children, className, horizontalLogo, mobileLogo, title }) {
    const [isOpen, setIsOpen] = useState(false)
    const { user, signOut } = useAuth()

    return (
        <nav className={cn("bg-background border-b", className)}>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Logo and Title Section - Responsive */}
                    <div className="flex items-center">
                        {/* Desktop Logo and Title */}
                        <div className="hidden md:flex md:items-center">
                            <div className="flex-shrink-0">
                                {horizontalLogo ||
                                    <span className="text-xl font-bold text-primary">YourLogo</span>}
                            </div>
                            <h1 className="ml-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-xs">
                                {title}
                            </h1>
                        </div>

                        {/* Mobile Logo and Title */}
                        <div className="flex md:hidden items-center">
                            <div className="flex-shrink-0">
                                {mobileLogo ||
                                    <span className="text-xl font-bold text-primary">YL</span>}
                            </div>
                            <h1 className="ml-2 text-sm sm:text-base font-semibold max-w-[100px] sm:max-w-[140px]">
                                {title}
                            </h1>
                        </div>
                    </div>

                    {/* Navigation Links - Right aligned and responsive */}
                    <div className="hidden md:flex md:items-center md:justify-end flex-1 px-2 lg:px-4">
                        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">{children}</div>
                    </div>

                    {/* Auth Section - Always visible */}
                    <div className="flex items-center">
                        {/* Desktop Auth */}
                        <div className="hidden md:block">
                            {user ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="flex items-center h-8 px-2 py-1 rounded-md hover:bg-accent transition-colors"
                                        >
                                            <span className="mr-2 text-sm font-medium truncate max-w-[80px] lg:max-w-[120px]">
                                                {user.user_metadata.nombre}
                                            </span>
                                            <ChevronDown className="h-4 w-4 opacity-50" />
                                            <Avatar className="h-8 w-8 ml-1">
                                                <AvatarImage src={user.user_metadata.avatarUrl ?? ""} alt={user.user_metadata.nombre} />
                                                <AvatarFallback>{user.user_metadata.nombre.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Perfil</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => { signOut() }}>
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Cerrar sesión</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link to="/login" >
                                    <Button size="sm" className="whitespace-nowrap">
                                        <LogIn className="mr-2 h-4 w-4" />
                                        Iniciar sesión
                                    </Button>
                                </Link>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden ml-2">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu with animations */}
            <div
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-screen opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform -translate-y-2",
                )}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {children}

                    {/* Mobile auth section */}
                    <div className="pt-4 pb-3 border-t border-muted">
                        {user ? (
                            <div className="flex items-center px-3 sm:px-5">
                                <div className="flex-shrink-0">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={user.user_metadata.avatarUrl} alt={user.user_metadata.nombre} />
                                        <AvatarFallback>{user.user_metadata.nombre.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="ml-3 overflow-hidden">
                                    <div className="text-base font-medium truncate">{user.name}</div>
                                    <div className="text-sm text-muted-foreground truncate">{user.email}</div>
                                </div>
                                <Button variant="ghost" size="icon" className="ml-auto" onClick={() => { signOut() }}>
                                    <LogOut className="h-5 w-5" />
                                </Button>
                            </div>
                        ) : (
                            <Link to={'/login'} className="px-3 sm:px-5">
                                <Button className="w-full">
                                    <LogIn className="mr-2 h-4 w-4" />
                                    Iniciar sesión
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}