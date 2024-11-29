import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Header/Nav';
import './css/App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Header />} />
				<Route path="two" element={<Nav />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
