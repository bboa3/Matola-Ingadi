import leaflet from 'leaflet';
import icons from '../assets/icons'
import 'leaflet/dist/leaflet.css';

const mapIcon = leaflet.icon({
  iconUrl: icons.mapMarker,

  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -38]
})

export default mapIcon;