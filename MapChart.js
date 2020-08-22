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
				<Sphere stroke="#717273 " />
      			<Graticule stroke="#717273 " />
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
					geographies.map(geo => {
					
					const isHighlighted = highlighted.indexOf(geo.properties.ISO_A3) !== -1;
					
					return(
					<Geography
						key={geo.rsmKey}
						geography={geo}
						fill={isHighlighted ? "url('#lines')" : "#E9E2C1"}
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