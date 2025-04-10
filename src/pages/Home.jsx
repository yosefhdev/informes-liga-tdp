import PageTransition from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clipboard, FileText, PenLine, Shield } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <PageTransition>
            <div className="flex min-h-screen flex-col">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50">
                    <div className=" px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Gestión de Reportes para Comisarios de Fútbol
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl">
                                        Simplifica la creación y envío de reportes de partidos con nuestra plataforma digital especializada
                                        para comisarios oficiales.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button className="bg-green-600 hover:bg-green-700">Comenzar Ahora</Button>
                                    {/* <Button variant="outline">Ver Demostración</Button> */}
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="/images/comisario_llenando_reporte.webp"
                                    alt="Comisario de fútbol con tablet"
                                    className="rounded-lg object-cover shadow-lg aspect-square"
                                    width={600}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="caracteristicas" className="w-full py-12 md:py-24 lg:py-32">
                    <div className=" px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Características Principales
                                </h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Nuestra plataforma está diseñada específicamente para las necesidades de los comisarios de fútbol.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <FileText className="h-10 w-10 text-green-600 mb-2" />
                                    <CardTitle>Plantillas Personalizadas</CardTitle>
                                    <CardDescription>Formularios adaptados a diferentes competiciones y categorías.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Accede a plantillas oficiales que cumplen con los requisitos de cada federación y competición.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <PenLine className="h-10 w-10 text-green-600 mb-2" />
                                    <CardTitle>Reportes Digitales</CardTitle>
                                    <CardDescription>Crea informes completos desde cualquier dispositivo.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Redacta tus reportes de forma intuitiva con herramientas específicas para cada sección.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Clipboard className="h-10 w-10 text-green-600 mb-2" />
                                    <CardTitle>Envío Instantáneo</CardTitle>
                                    <CardDescription>Entrega tus informes directamente a los organismos correspondientes.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Envía tus reportes con un solo clic y recibe confirmación inmediata de recepción.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
                    <div className=" px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cómo Funciona</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Un proceso simple en tres pasos para completar tus reportes de partidos.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <h3 className="text-xl font-bold">Selecciona el Partido</h3>
                                <p className="text-gray-500">Elige el encuentro asignado de tu lista de próximos partidos.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <h3 className="text-xl font-bold">Completa el Informe</h3>
                                <p className="text-gray-500">Rellena cada sección del reporte con la información del partido.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                                <h3 className="text-xl font-bold">Envía y Archiva</h3>
                                <p className="text-gray-500">Envía el reporte y guarda una copia en tu historial personal.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}