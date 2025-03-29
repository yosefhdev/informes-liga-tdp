import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavLink } from './components/nav-link';
import LoginPage from './pages/auth/login';
import RecuperarPasswordPage from './pages/auth/recover-pass';
import RegistroPage from './pages/auth/register';

function App() {

	const horizontalLogo = (
		<img src="/images/LigaTDPlogo.webp" alt="Company Logo" className="h-8" />
	)

	const mobileLogo = (
		<img src="/images/LigaTDPlogohorizontal.webp" alt="Company Logo" className="h-8" />
	)

	return (
		<div className='min-w-[350px]'>
			<BrowserRouter>
				<Navbar horizontalLogo={horizontalLogo} mobileLogo={mobileLogo} title={"Informes de Comisario"}>
					<NavLink label="Inicio" route="/" />
					<NavLink label="Acerca de" route="/bout" />
					<NavLink label="Ayuda" route="/help" />
				</Navbar>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegistroPage />} />
					<Route path="/recover-password" element={<RecuperarPasswordPage />} />

					{/* 404 */}
					<Route path="*" element={<div className='text-center text-2xl'>404 Not Found</div>} />

				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
