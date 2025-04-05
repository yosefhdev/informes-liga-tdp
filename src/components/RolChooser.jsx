import { useNavigate } from "react-router-dom"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserCog, ClipboardList } from "lucide-react"


function RolChooser({ open, setOpen }) {

    const navigate = useNavigate()

    const handleRoleSelect = (role) => {
        setOpen(false)
        navigate(`/${role}/dashboard`)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center text-xl">Seleccione su Rol</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col sm:flex-row gap-4 py-4">
                    <Card
                        className="flex-1 cursor-pointer hover:bg-slate-50 transition-colors"
                        onClick={() => handleRoleSelect("administrador")}
                    >
                        <CardContent className="flex flex-col items-center justify-center p-6">
                            <UserCog className="h-16 w-16 mb-4 text-slate-700" />
                            <h3 className="text-lg font-medium">Administrador</h3>
                        </CardContent>
                    </Card>

                    <Card
                        className="flex-1 cursor-pointer hover:bg-slate-50 transition-colors"
                        onClick={() => handleRoleSelect("comisario")}
                    >
                        <CardContent className="flex flex-col items-center justify-center p-6">
                            <ClipboardList className="h-16 w-16 mb-4 text-slate-700" />
                            <h3 className="text-lg font-medium">Comisario</h3>
                        </CardContent>
                    </Card>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default RolChooser;