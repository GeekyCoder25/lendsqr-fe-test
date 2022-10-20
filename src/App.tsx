import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import './styles/fontawesome-free-6.1.1-web/css/all.css';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<Router>
			<div className="App">
				<ScrollToTop />
				<Layout />
			</div>
		</Router>
	);
}

export default App;
