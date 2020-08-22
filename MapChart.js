import React, { memo, useState } from "react";
import {Button, Modal} from "react-bootstrap"


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
	"CMR",
	"CAF",
	"COG",
	"COD",
	"GNQ",
	"GAB",
	"CHN",
	"ECU",
	"NPL",
	"BTN",
	"BGD",
	"IND",
	"JPN",
	"PRK",
	"KOR",
	"AUS",
	"GBR",
	"UKR",
	"SWE",
	"ESP",
	"ROU",
	"POL",
	"ITA",
	"HUN",
	"DEU",
	"FRA"
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

  	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	  
	// State for popup country
	const [popupCountry, setPopupCountry] = useState("")
	const handlePopupCountry = (countryName) => setPopupCountry(countryName)




  	// Render Function
    return (
	<>
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{popupCountry}</Modal.Title>
			</Modal.Header>

			<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
				Close
				</Button>

				<Button variant="primary" onClick={handleClose}>
				Save Changes
				</Button>
			</Modal.Footer>
		</Modal>

		<ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
			<ZoomableGroup>
				<PatternLines
        			id="lines"
        			height={6}
        			width={6}
        			stroke="#776865"
        			strokeWidth={1}
        			background="#F6F0E9"
        			orientation={["diagonal"]}
      			/>
				<Sphere stroke="#DDD" />
      			<Graticule stroke="#DDD" />
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
					geographies.map(geo => {
					
					const isHighlighted = highlighted.indexOf(geo.properties.ISO_A3) !== -1;
					
					return(
					<Geography
						key={geo.rsmKey}
						geography={geo}
						fill={isHighlighted ? "url('#lines')" : "#F6F0E9"}

						// Show popup
						onClick={() => {
							const { NAME } = geo.properties;
							handlePopupCountry(NAME)	// Init Popup header with the country name
							handleShow()				// Display popup
						}}

						// Hover
						onMouseEnter={() => {
							const { NAME } = geo.properties;
							setTooltipContent("Hovering over " + NAME);
						}}

						// Unhover
						onMouseLeave={() => {
							setTooltipContent("");
						}}

						// Map style
						style={{
							default: {
							fill: "#D6D6DA",
							outline: "none"
							},
							hover: {
							fill: "#F53",
							outline: "none"
							},
							pressed: {
							fill: "#E42",
							outline: "none"
							}
						}}
					/>
					);
					})}
				
				</Geographies>
				<Line coordinates={generateCircle(0)} stroke="#E94F4F" strokeWidth={2} />
			</ZoomableGroup>
		</ComposableMap>
	</>
	);
};

export default memo(MapChart);