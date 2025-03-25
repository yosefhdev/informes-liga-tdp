import './App.css'
import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from './components/nav-link';

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
					<NavLink label="bout" route="/bout" />
				</Navbar>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
