
import { useState } from "react"
import { Menu, X, User, LogIn, LogOut, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar({ children, className }) {
    const [isOpen, setIsOpen] = useState(false)

    // Mock authentication state - replace with your actual auth logic
    const [user, setUser] = useState(null)

    // Mock login/logout functions - replace with your actual auth functions
    const handleLogin = () => {
        setUser({
            name: "John Doe",
            email: "john@example.com",
        })
    }

    const handleLogout = () => {
        setUser(null)
    }
    return (
        <nav className={cn("bg-background border-b", className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-primary">YourLogo</span>
                        </div>
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex items-center space-x-4">{children}</div>
                        </div>
                    </div>

                    {/* Auth Section */}
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            {user ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="flex items-center h-8 px-2 py-1 rounded-md hover:bg-accent transition-colors"
                                        >
                                            <ChevronDown className="h-4 w-4 opacity-50" />
                                            <span className="mr-2 text-sm font-medium">{user.name}</span>
                                            <Avatar className="h-8 w-8 ml-1">
                                                <AvatarImage src={user.avatarUrl} alt={user.name} />
                                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
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
                                        <DropdownMenuItem onClick={handleLogout}>
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Cerrar sesión</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Button onClick={handleLogin} size="sm">
                                    <LogIn className="mr-2 h-4 w-4" />
                                    Iniciar sesión
                                </Button>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center ml-4">
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
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium">{user.name}</div>
                                    <div className="text-sm text-muted-foreground">{user.email}</div>
                                </div>
                                <Button variant="ghost" size="icon" className="ml-auto" onClick={handleLogout}>
                                    <LogOut className="h-5 w-5" />
                                </Button>
                            </div>
                        ) : (
                            <div className="px-5">
                                <Button onClick={handleLogin} className="w-full">
                                    <LogIn className="mr-2 h-4 w-4" />
                                    Iniciar sesión
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

