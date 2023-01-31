import "./App.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ImageTiles from "./components/ImageTiles";

function App() {
	return (
		<div className="App">
			<Header />
			<HeroBanner />
			<ImageTiles />
		</div>
	);
}

export default App;
