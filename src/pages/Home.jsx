import logo from "../assets/img/logo.svg";

function Home() {
	let gitHubURL = "https://github.com/grigorijtomczuk";
	return (
		<div className="home">
			<header className="app-header">
				<div className="app-logo-wrapper">
					<img src={logo} className="app-logo" alt="React logo" />
				</div>
				<p className="text-box text-align-center line-height-wider">
					<b>
						Hello <code>React.js</code>!
					</b>
					<br />
					<a href={gitHubURL} target="_blank" title="grigorijtomczuk">
						Visit my GitHub page
					</a>
				</p>
			</header>
		</div>
	);
}

export default Home;
