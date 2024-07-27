import React from "react";
import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CRS } from "leaflet";
import { Heading, Flex, VStack } from "@chakra-ui/react";
import { NavBar, NavBarProps } from "../components/header/navbar";
import worldMap from "../assets/worldmap.png";
import { MapIcons } from "../config/mapIconsConfig";

export const WorldMap: React.FC = () => {
  // Set the bounds for the image
  const bounds: [[number, number], [number, number]] = [
    [0, 0],
    [1000, 1500], // Adjust these values based on your image dimensions
  ];

  // URL to the image
  const navBarProps: NavBarProps = {
    textColor: "white",
  };

  return (
    <>
      <NavBar {...navBarProps} />
      <VStack>
        <Heading as="h1" size="xl" mb={5} textAlign="center">
          Interactive World Map!
        </Heading>
        <Flex justifyContent={"center"} w={"90%"} margin={"auto"}>
          <MapContainer
            id="map"
            crs={CRS.Simple}
            bounds={bounds}
            style={{ height: "75vh", width: "75%" }}
            maxBounds={bounds}
            maxBoundsViscosity={1.0}
            zoomControl={false}
          >
            <ImageOverlay url={worldMap} bounds={bounds} />
            {MapIcons.map((mapIcon, index) => (
              <Marker
                position={mapIcon.position}
                icon={mapIcon.icon}
                key={`${mapIcon.position}-${index}`}
              >
                {mapIcon.popupText && <Popup>{mapIcon.popupText}</Popup>}
              </Marker>
            ))}
          </MapContainer>
        </Flex>
      </VStack>
    </>
  );
};

export default WorldMap;
