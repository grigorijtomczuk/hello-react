import { HashRouter } from "react-router-dom";

import Navbar from "./Navbar";
import Main from "./Main";
import "../css/reset.css";
import "../css/app.css";
import "../css/modifiers.css";

function App() {
	return (
		<div className="app">
			<HashRouter>
				<Navbar />
				<Main />
			</HashRouter>
		</div>
	);
}

export default App;
