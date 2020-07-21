import React, { memo, useState } from "react";
import {Button, Modal} from "react-bootstrap"


import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const MapChart = ({ setTooltipContent }) => {
  	// State for displaying popup
	const [show, setShow] = useState(false)
  	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	  
	// State for popup contents
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
				<Geographies geography={geoUrl}>
				{({ geographies }) =>
				geographies.map(geo => (
					<Geography
						key={geo.rsmKey}
						geography={geo}

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
				))}
				</Geographies>
			</ZoomableGroup>
		</ComposableMap>
	</>
	);
};

export default memo(MapChart);
