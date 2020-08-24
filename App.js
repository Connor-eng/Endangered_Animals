import React, { useState } from 'react';
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MapChart from "./MapChart";

function App() {
	const [content, setContent] = useState("");
	const myStyle = {
		backgroundColor: "#D5EEFC",
		backgroundSize: 'cover'
	};
	const wordStyle = {
		fontFamily: "'Candara', 'Calibri', 'Courier', 'serif'",
		textAlign: 'center',
		paddingTop: '90px',
		fontSize: '60px',
		lineHeight: '85%'
	}
	return (
	  <div style={myStyle}>
		<h1 style={wordStyle}>Endangered Animals Around the World</h1>
		<MapChart setTooltipContent={setContent} />
		<ReactTooltip>{content}</ReactTooltip>
	  </div>
	);
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);

export default App;
