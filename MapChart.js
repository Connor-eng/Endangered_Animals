import React, { memo, useState, useEffect } from "react";
import {Modal} from "react-bootstrap"


import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line,
  Sphere
} from "react-simple-maps";
import { PatternLines } from "@vx/pattern";


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const highlighted = [
	"KHM",
	"LAO",
	"MMR",
	"IDN",
	"THA",
	"VNM",
	"USA",
	"MYS",
	"BRN",
	"COG",
	"COD",
	"CHN",
	"ECU",
	"NPL",
	"BTN",
	"BGD",
	"IND",
	"LKA",
	"SOM",
	"KEN",
	"TZA",
	"MOZ",
	"ZAF",
	"MDG",
	"CAN",
];

function generateCircle(deg) {
	if (!deg) return [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]];
	return new Array(361).fill(1).map((d, i) => {
	  return [-180 + i, deg];
	});
}

const MapChart = ({ setTooltipContent }) => {

  	// State for displaying popup
	const [show, setShow] = useState(false)
  	const handleClose = () => {
		setPopupCountry("")
		setShow(false);
	}
	const handleShow = () => setShow(true);

	// State for modal body
	const [modalBody, setModalBody] = useState("")
    const initModalBody = (text) => {
		setModalBody(text)
    }

	// Get data from server
    useEffect(() => {
		getData();
	});

	// State for server data
	const [data, setData] = useState([])

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

	// Function to list the animal details
	const modalBodyInsertInfo = (animal, popCurrent, pop2010, status) => {
		return animal + ": (Current Population: " + popCurrent +  ", 2010 Population: " + pop2010 + ", Status: " + status + ")"
	}
	
	// State for popup country and body
	const [popupCountry, setPopupCountry] = useState("")

	// Sets the popup contents according to the country clicked
	const handlePopupCountry = (countryName) => {
		setPopupCountry(countryName)

		if (countryName === "Cambodia"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][0][0][1], data[3][0][1][1], data[3][0][2][1], "Endangered")}
				</p>
			)
		}

		else if (countryName === "Laos"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][0][0][1], data[3][0][1][1], data[3][0][2][1], "Endangered")}
				</p>
			)
		}

		else if (countryName === "Myanmar"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][0][0][1], data[3][0][1][1], data[3][0][2][1], "Endangered")}
				</p>
			)
		}

		else if (countryName === "Indonesia"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][5][0][1], data[3][5][1][1], data[3][5][2][1], "Endangered")}
				<br/>{modalBodyInsertInfo(data[3][2][0][1], data[3][2][1][1], data[3][2][2][1], "Critically Endangered")}
				<br/>{modalBodyInsertInfo(data[3][7][0][1], data[3][7][1][1], data[3][7][2][1], "Endangered")}
				<br/>{modalBodyInsertInfo(data[3][11][0][1], data[3][11][1][1], data[3][11][2][1], "Critically Endangered")}
				<br/>{modalBodyInsertInfo(data[3][8][0][1], data[3][8][1][1], data[3][8][2][1], "Critically Endangered")}
            	<br/>{modalBodyInsertInfo(data[3][17][0][1], data[3][17][1][1], data[3][17][2][1], "Critically Endangered")}
            	<br/>{modalBodyInsertInfo(data[3][16][0][1], data[3][16][1][1], data[3][16][2][1], "Critically Endangered")}
				</p>
			)
		}

		else if (countryName === "Thailand"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][0][0][1], data[3][0][1][1], data[3][0][2][1], "Endangered")}
				</p>
			)
		}

		else if (countryName === "Vietnam"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][0][0][1], data[3][0][1][1], data[3][0][2][1], "Endangered")}
				</p>
			)
		}

		else if (countryName === "United States of America"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][1][0][1], data[3][1][1][1], data[3][1][2][1], "Critically Endangered")}
				<br/>{modalBodyInsertInfo(data[3][22][0][1], data[3][22][1][1], data[3][22][2][1], "Endangered")}
				</p>
			)
		}

		else if (countryName === "Canada"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][22][0][1], data[3][22][1][1], data[3][22][2][1], "Endangered")}
				</p>
			)
		}

		else if (countryName === "Malaysia"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][7][0][1], data[3][7][1][1], data[3][7][2][1], "Endangered")}
				<br/>{modalBodyInsertInfo(data[3][11][0][1], data[3][11][1][1], data[3][11][2][1], "Critically Endangered")}
				<br/>{modalBodyInsertInfo(data[3][8][0][1], data[3][8][1][1], data[3][8][2][1], "Critically Endangered")}
           	 	<br/>{modalBodyInsertInfo(data[3][17][0][1], data[3][17][1][1], data[3][17][2][1], "Critically Endangered")}
				</p>
			)
		}

		else if (countryName === "Brunei"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][7][0][1], data[3][7][1][1], data[3][7][2][1], "Endangered")}
				<br/>{modalBodyInsertInfo(data[3][11][0][1], data[3][11][1][1], data[3][11][2][1], "Critically Endangered")}
				<br/>{modalBodyInsertInfo(data[3][8][0][1], data[3][8][1][1], data[3][8][2][1], "Critically Endangered")}
            	<br/>{modalBodyInsertInfo(data[3][17][0][1], data[3][17][1][1], data[3][17][2][1], "Critically Endangered")}
				</p>
			)
		}


		else if (countryName === "Congo" || countryName === "Dem. Rep. Congo"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][4][0][1], data[3][4][1][1], data[3][4][2][1], "Endangered")}
				<br/>{modalBodyInsertInfo(data[3][19][0][1], data[3][19][1][1], data[3][19][2][1], "Vulnerable")}
            	<br/>{modalBodyInsertInfo(data[3][18][0][1], data[3][18][1][1], data[3][18][2][1], "Endangered")}
				</p>
			)
		}

		else if (countryName === "Somalia" || countryName === "Kenya" || countryName === "Tanzania" || countryName === "Mozambique" || countryName === "South Africa" || countryName === "Madagascar"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][20][0][1], data[3][20][1][1], data[3][20][2][1], "Endangered")}
				<br/>{modalBodyInsertInfo(data[3][21][0][1], data[3][21][1][1], data[3][21][2][1], "Critically Endangered")}
            	<br/>{modalBodyInsertInfo(data[3][15][0][1], data[3][15][1][1], data[3][15][2][1], "Endangered")}
				</p>
			)
		}
		
		else if (countryName === "China"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][0][0][1], data[3][0][1][1], data[3][0][2][1], "Endangered")}
				<br/>{modalBodyInsertInfo(data[3][9][0][1], data[3][9][1][1], data[3][9][2][1], "Critically Endangered")}
            	<br/>{modalBodyInsertInfo(data[3][24][0][1], data[3][24][1][1], data[3][24][2][1], "Critically Endangered")}
            	<br/>{modalBodyInsertInfo(data[3][6][0][1], data[3][6][1][1], data[3][6][2][1], "Vulnerable")}
            	<br/>{modalBodyInsertInfo(data[3][23][0][1], data[3][23][1][1], data[3][23][2][1], "Endangered")}
				</p>
			)
		}

		else if (countryName === "Ecuador"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][10][0][1], data[3][10][1][1], data[3][10][2][1], "Endangered")}
				</p>
			)
		}

		else if (countryName === "Nepal" || countryName === "Bhutan" || countryName === "Bangladesh" || countryName === "India"){
			initModalBody(
				<p>
				<br/>{modalBodyInsertInfo(data[3][3][0][1], data[3][3][1][1], data[3][3][2][1], "Critically Endangered")}
				<br/>{modalBodyInsertInfo(data[3][13][0][1], data[3][13][1][1], data[3][13][2][1], "Vulnerable")}
            	<br/>{modalBodyInsertInfo(data[3][14][0][1], data[3][14][1][1], data[3][14][2][1], "Endangered")}
				</p>
			)
		}
		
		else if (countryName === "Sri Lanka"){
			initModalBody(
				<p><br/>{modalBodyInsertInfo(data[3][12][0][1], data[3][12][1][1], data[3][12][2][1], "Endangered")}</p>
			)
		}

		else{
			initModalBody("This country has no data yet.")
		}	
	}

  	// Render Function
    return (
	<>
		<Modal show={show} onHide={handleClose} size="lg">
			<Modal.Header closeButton>
				<Modal.Title>{popupCountry}</Modal.Title>
			</Modal.Header>

			<Modal.Body>{modalBody}</Modal.Body>
		</Modal>

		<ComposableMap data-tip="" projectionConfig={{ scale: 145 }}>
			
				<PatternLines
        			id="lines"
        			height={6}
        			width={6}
        			stroke="#776865"
        			strokeWidth={1}
        			background="#E9E2C1"
        			orientation={["diagonal"]}
      			/>
				<Sphere stroke="#FFFFFF" fill="#99CFED"/>
      			<Graticule stroke="#FFFFFF" fill="#99CFED"/>
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
					geographies.map(geo => {
					
					const isHighlighted = highlighted.indexOf(geo.properties.ISO_A3) !== -1;
					
					return(
					<Geography
						key={geo.rsmKey}
						geography={geo}
						fill={isHighlighted ? "url('#lines')" : "#E9E2C1"}
						stroke="gray"
						strokeWidth={.8}
						// Show popup
						onClick={() => {
							const { NAME } = geo.properties;
							handlePopupCountry(NAME)	// Init Popup header with the country name and popup body
							handleShow()				// Display popup
						}}

						// Hover
						onMouseEnter={() => {
							const { NAME } = geo.properties;
							setTooltipContent(NAME);
						}}

						// Unhover
						onMouseLeave={() => {
							setTooltipContent("");
						}}

						// Map style
						style={{
							hover: {
							fill: "#86C855",
							outline: "none"
							},
							pressed: {
							fill: "#86C855",
							outline: "none"
							}
						}}
					/>
					);
					})}
				
				</Geographies>
				<Line coordinates={generateCircle(0)} stroke="#E94F4F" strokeWidth={2} />
			
		</ComposableMap>
	</>
	);
};

export default memo(MapChart);