import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
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
