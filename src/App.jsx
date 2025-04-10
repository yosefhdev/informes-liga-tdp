import '@/App.css';
import { NavLink } from '@/components/Nav/nav-link';
import Navbar from '@/components/Nav/Navbar';
import LoginPage from '@/pages/auth/login';
import RecuperarPasswordPage from '@/pages/auth/recover-pass';
import RegistroPage from '@/pages/auth/register';
import Home from '@/pages/Home';
import DashBoardComisario from '@/pages/comisario/DashBoardComisario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import DashBoardAdmin from '@/pages/admin/DashBoardAdmin';
import Error404 from '@/pages/Error404';
import Footer from '@/components/Footer';

function App() {

	return (
		<div className='min-h-screen flex flex-col min-w-[350px]'>
			<BrowserRouter>

				<Navbar
					horizontalLogo={<img src="/images/LigaTDPlogo.webp" alt="Company Logo" className="h-8" />}
					mobileLogo={<img src="/images/LigaTDPlogohorizontal.webp" alt="Company Logo" className="h-8" />}
					title={"Informes de Comisario"}
				>
					<NavLink label="Inicio" route="/" />
					{/* <NavLink label="Acerca de" route="/bout" />
					<NavLink label="Ayuda" route="/help" /> */}
				</Navbar>

				<div className='flex-grow'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegistroPage />} />
						<Route path="/recover-password" element={<RecuperarPasswordPage />} />
						{/* Rutas de comisario */}
						<Route path="/comisario/dashboard" element={
							<ProtectedRoute>
								<DashBoardComisario />
							</ProtectedRoute>
						} />
						{/* Rutas de admin */}
						<Route path="/admin/dashboard" element={
							<ProtectedRoute>
								<DashBoardAdmin />
							</ProtectedRoute>
						} />
						{/* 404 */}
						<Route path="*" element={<Error404 />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
