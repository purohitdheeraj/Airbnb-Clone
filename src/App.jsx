import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Activities from "./components/Activities";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<HeroBanner />
			<Activities />
		</div>
	);
}

export default App;
