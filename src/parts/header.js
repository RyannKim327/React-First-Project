export default function Header(){
	const __exclusive__ = {
		backgroundColor: "#131320",
		color: "#ffffff",
		textAlign: "left",
		padding: "0 0.25em "
	}
	const noPadd = {
		margin: "0",
		padding: "0"
	}
	const lPad = {
		margin: "0",
		padding: "0",
		paddingLeft: "0.50em"
	}
	return(
		<div className="App-Header" style={__exclusive__}>
			<header>
				<h3 style={noPadd}>Title Name</h3>
				<h5 style={lPad}>Developed under the name of MPOP Reverse II</h5>
			</header>
		</div>
	)
}