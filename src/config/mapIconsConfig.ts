import { Icon } from "leaflet";
import elvishEnclave from "../assets/mapicons/elvishenclave.png";

var ElvishIcon = Icon.extend({
  options: {
    iconUrl: elvishEnclave,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, 0],
    riseOnHover: true,
  },
});

interface MapIcon {
  icon: Icon;
  position: [number, number];
  popupText?: string;
}

export const MapIcons: MapIcon[] = [
  {
    icon: new ElvishIcon(),
    position: [900, 1300],
    popupText: "An elvish city is here",
  },
];
