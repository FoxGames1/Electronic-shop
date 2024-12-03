import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Shop from './Pages/Shop';
import BuyBack from './Pages/BuyBack';
import './css/App.css';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route path="home" element={<Home />} />
					<Route path="service" element={<Service />} />
					<Route path="shop" element={<Shop />} />
					<Route path="buy-back" element={<BuyBack />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
