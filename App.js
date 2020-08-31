import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import {Modal, Button} from "react-bootstrap"

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
		fontFamily: "Lucida Console",
		textAlign: 'center',
		paddingTop: '90px',
		fontSize: '28px',
		lineHeight: '85%'
	}

	const wordStyle2 = {
		fontFamily: "Lucida Console",
		textAlign: 'center',
		paddingBottom: '130px',
		fontSize: '20px',
		lineHeight: '85%'
	}

	// State for server data
	const [data, setData] = useState([])

	// Get data from server
	    useEffect(() => {
		getData();
	});

    //  Fetch the server data and turn into JSON file
    const getData = () =>{
        fetch('http://localhost:4000/sqlCommand')
        .then(response => response.json())
		.then(response => {
			var result = response.data
			for (var i=0; i<result.length;i++){
				for (var j=0; j<result[i].length;j++){
					var obj = result[i][j]
					var res = Object.entries(obj);
					result[i][j] = res
				}
			}
			setData(result)
		})
		.catch(err => console.log(err))
    }

	// State for displaying popup
	const [show, setShow] = useState(false)

  	const handleClose = () => {
		setShow(false);
	}
	const handleShow = () => {
		setShow(true);
		initModalBody();
	}

	// State for modal body
	const [modalBody, setModalBody] = useState("")
    const initModalBody = (text) => {
		setModalBody(text)
    }

	const handleButtonClick = () =>{
		setShow(true);
		initModalBody(<p>Critically Endangered: Population Current: {data[0][0][0][1]}, Population 2010: {data[0][0][1][1]}
			<br/><br/>Endangered: Population Current: {data[1][0][0][1]}, Population 2010: {data[1][0][1][1]}
			<br/><br/>Vulnerable: Population Current: {data[2][0][0][1]}, Population 2010: {data[2][0][1][1]}
			</p>);
		

	}

	var buttonStyle = {
		borderRadius: "25px",
		borderTopColor: "black",
		borderLeftColor:"black",
		borderRightColor:"black",
		borderBottomColor:"black",

		borderTopWidth: "2px",
		borderBottomWidth: "2px",
		borderLeftWidth: "2px",
		borderRightWidth: "2px",
	}

	return (
	  <div style={myStyle}>
		<h1 style={wordStyle}>Endangered Animals Around the World</h1>
		<MapChart setTooltipContent={setContent} />
		<ReactTooltip>{content}</ReactTooltip>

		<Modal show={show} onHide={handleClose} size="lg">
			<Modal.Header closeButton>
				<Modal.Title>World Population Count</Modal.Title>
			</Modal.Header>
			<Modal.Body>{modalBody}</Modal.Body>
		</Modal>

		<footer style={wordStyle2}>
			<Button variant="info" 
				onClick={handleButtonClick}
				style={buttonStyle}>World Population Count
			</Button>
		</footer>
	  </div>
	);
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
  
export default App;
