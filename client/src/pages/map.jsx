import { useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "tailwindcss/tailwind.css";

export default function App() {
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [location3, setLocation3] = useState("");
  const [showShape, setShowShape] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowShape(true);
  };

  const positions = [
    [28.7041, 77.1025],
    [28.5355, 77.3910],
    [28.7041, 77.3910],
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Enter 3 Locations</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          className="rounded-lg border-gray-300 border-2 p-2 mb-4"
          type="text"
          placeholder="Location 1"
          value={location1}
          onChange={(e) => setLocation1(e.target.value)}
        />
        <input
          className="rounded-lg border-gray-300 border-2 p-2 mb-4"
          type="text"
          placeholder="Location 2"
          value={location2}
          onChange={(e) => setLocation2(e.target.value)}
        />
        <input
          className="rounded-lg border-gray-300 border-2 p-2 mb-4"
          type="text"
          placeholder="Location 3"
          value={location3}
          onChange={(e) => setLocation3(e.target.value)}
        />
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Submit
        </button>
      </form>
      {showShape && (
        <div className="w-full h-96 mt-8">
          <MapContainer center={[28.6139, 77.209]} zoom={10} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Polygon pathOptions={{ color: "purple" }} positions={positions} />
          </MapContainer>
        </div>
      )}
    </div>
  );
}
