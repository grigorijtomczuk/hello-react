import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
