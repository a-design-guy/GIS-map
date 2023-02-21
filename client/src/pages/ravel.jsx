import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const [startPoint, setStartPoint] = useState('');
  const [midPoint, setMidPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [shape, setShape] = useState([]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setShape([
      [28.7041, 77.1025],
      [28.5355, 77.3910],
      [28.7041, 77.1025]
    ]);
  };

  const position = [28.7041, 77.1025];

  const icon = new L.Icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Map</h1>
      <form className="flex flex-col items-center mb-8" onSubmit={onFormSubmit}>
        <label className="font-bold mb-2">Start Point</label>
        <input type="text" id="start-point" value={startPoint} onChange={(event) => setStartPoint(event.target.value)} className="border border-gray-300 rounded-lg py-2 px-4 mb-2" />
        <label className="font-bold mb-2">Mid Point</label>
        <input type="text" id="mid-point" value={midPoint} onChange={(event) => setMidPoint(event.target.value)} className="border border-gray-300 rounded-lg py-2 px-4 mb-2" />
        <label className="font-bold mb-2">End Point</label>
        <input type="text" id="end-point" value={endPoint} onChange={(event) => setEndPoint(event.target.value)} className="border border-gray-300 rounded-lg py-2 px-4 mb-4" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Draw Shape</button>
      </form>
      <div className="w-full h-96">
        <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[28.7041, 77.1025]} icon={icon}>
            <Popup>
              Start Point
            </Popup>
          </Marker>
          <Marker position={[28.5355, 77.3910]} icon={icon}>
            <Popup>
              End Point
            </Popup>
          </Marker>
          {shape.length > 0 && <Polyline positions={shape} />}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
