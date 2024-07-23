import React from "react";
import { MapContainer, ImageOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CRS } from "leaflet";
import { Heading, Flex, VStack } from "@chakra-ui/react";
import { NavBar, NavBarProps } from "../components/header/navbar";

export const WorldMap: React.FC = () => {
  // Set the bounds for the image
  const bounds: [[number, number], [number, number]] = [
    [0, 0],
    [1000, 1500], // Adjust these values based on your image dimensions
  ];

  // URL to the image
  const imageUrl = `${process.env.PUBLIC_URL}/images/worldmap.png`;
  const navBarProps: NavBarProps = {
    textColor: 'white'
  }

  return (
    <>
    <NavBar {...navBarProps}/>
    <VStack>
      <Heading as="h1" size="xl" mb={5} textAlign="center">
        Interactive World Map!
      </Heading>
      <Flex justifyContent={"center"} w={"90%"} margin={"auto"}>
        <MapContainer
          crs={CRS.Simple}
          bounds={bounds}
          style={{ height: "75vh", width: "75%" }}
          maxBounds={bounds}
          maxBoundsViscosity={1.0}
          zoomControl={false}
        >
          <ImageOverlay url={imageUrl} bounds={bounds} />
        </MapContainer>
      </Flex>
    </VStack>
    </>
  );
};

export default WorldMap;
