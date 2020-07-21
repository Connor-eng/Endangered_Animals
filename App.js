import React, { useState } from 'react';
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MapChart from "./MapChart";

function App() {
	const [content, setContent] = useState("");
	return (
	  <div>
		<MapChart setTooltipContent={setContent} />
		<ReactTooltip>{content}</ReactTooltip>
	  </div>
	);
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);

export default App;
