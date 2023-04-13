// import logo from './logo.svg';
import './App.css';

import Header from "./parts/header"
import Footer from './parts/footer'

import Base from './pages/base'

function App() {
  return (
	<div className="App">
		<Header />
		<Base />
		<Footer />
	</div>
  );
}

export default App;
