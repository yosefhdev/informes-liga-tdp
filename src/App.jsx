import './App.css'
import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from './components/nav-link';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar>
					<NavLink label="Inicio" route="/" />
					<NavLink label="bout" route="/bout" />
					<NavLink label="contact" route="/contact" />
					<NavLink label="login" route="/login" />
				</Navbar>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
