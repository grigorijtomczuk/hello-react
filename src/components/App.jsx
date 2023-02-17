import Main from "./Main";
import Navbar from "./Navbar";
import "../css/reset.css";
import "../css/app.css";
import "../css/modifiers.css";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Main />
		</div>
	);
}

export default App;
