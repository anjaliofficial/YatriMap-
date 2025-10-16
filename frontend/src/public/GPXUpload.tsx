import React, { useState } from "react";
import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as toGeoJSON from "togeojson";
import axios from "axios";
import * as turf from "@turf/turf";
import "../css/GPXUpload.css";


const MAPBOX_TOKEN = "YOUR_MAPBOX_ACCESS_TOKEN";
const OPENWEATHER_KEY = "YOUR_OPENWEATHER_API_KEY"; // <-- add your API key

const GPXUpload: React.FC = () => {
  const [gpxFile, setGpxFile] = useState<File | null>(null);
  const [geoJsonData, setGeoJsonData] = useState<any>(null);
  const [status, setStatus] = useState<string>("");
  const [distance, setDistance] = useState<number>(0);
  const [elevationGain, setElevationGain] = useState<number>(0);
  const [duration, setDuration] = useState<string>("");
  const [maxAltitude, setMaxAltitude] = useState<number>(0);
  const [weather, setWeather] = useState<any>(null);
  const [warnings, setWarnings] = useState<string[]>([]);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/gpx+xml" && !file.name.endsWith(".gpx")) {
      alert("Please select a valid GPX file.");
      return;
    }

    setGpxFile(file);
    parseGPX(file);
  };

  // Parse GPX + compute stats + get weather + safety hints
  const parseGPX = async (file: File) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const text = event.target?.result as string;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "application/xml");
        const geojson = parse(xmlDoc);
        setGeoJsonData(geojson);

        const line = geojson.features.find((f: any) => f.geometry.type === "LineString");
        if (!line) return;

        // Distance
        const lineDistance = turf.length(line, { units: "kilometers" });
        setDistance(lineDistance);

        // Elevation gain + max altitude
        let gain = 0;
        let maxAlt = 0;
        const coords = line.geometry.coordinates;
        for (let i = 1; i < coords.length; i++) {
          const diff = coords[i][2] - coords[i - 1][2];
          if (diff > 0) gain += diff;
          if (coords[i][2] > maxAlt) maxAlt = coords[i][2];
        }
        setElevationGain(gain);
        setMaxAltitude(maxAlt);

        // Duration
        const times = geojson.features[0]?.properties?.coordTimes || [];
        if (times.length >= 2) {
          const start = new Date(times[0]);
          const end = new Date(times[times.length - 1]);
          const diffMs = end.getTime() - start.getTime();
          const hours = Math.floor(diffMs / (1000 * 60 * 60));
          const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
          setDuration(`${hours}h ${minutes}m`);
        }

        // Fetch weather
        const [lng, lat] = coords[0];
        const weatherRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${OPENWEATHER_KEY}`
        );
        setWeather(weatherRes.data);

        // Safety warnings
        const warningList: string[] = [];
        if (maxAlt > 3000)
          warningList.push(
            `⚠️ High altitude (${maxAlt.toFixed(0)}m) — risk of AMS! Acclimatize properly.`
          );
        if (weatherRes.data.main.temp < 5)
          warningList.push(`🥶 Cold temperature (${weatherRes.data.main.temp}°C) — dress warmly.`);
        if (weatherRes.data.weather[0].main.toLowerCase().includes("rain"))
          warningList.push(`🌧️ Rain expected — bring waterproof gear.`);

        setWarnings(warningList);
      } catch (error) {
        console.error("Failed to parse GPX", error);
        setStatus("Failed to parse GPX file");
      }
    };
    reader.readAsText(file);
  };

  // Upload GPX + stats
  const handleUpload = async () => {
    if (!gpxFile || !geoJsonData) return;

    const formData = new FormData();
    formData.append("file", gpxFile);
    formData.append("geojson", JSON.stringify(geoJsonData));
    formData.append("distance", distance.toString());
    formData.append("elevationGain", elevationGain.toString());
    formData.append("duration", duration);
    formData.append("maxAltitude", maxAltitude.toString());
    if (weather) formData.append("weather", JSON.stringify(weather));

    try {
      setStatus("Uploading...");
      await axios.post("/api/treks/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setStatus("✅ Upload successful!");
    } catch (error) {
      console.error(error);
      setStatus("❌ Upload failed!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Your GPX Hike</h2>
      <input type="file" accept=".gpx" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!gpxFile}>
        Upload
      </button>
      <p>{status}</p>

      {geoJsonData && (
        <div style={{ marginTop: "20px" }}>
          <h3>📊 Hike Stats:</h3>
          <p>Distance: {distance.toFixed(2)} km</p>
          <p>Elevation Gain: {elevationGain.toFixed(0)} m</p>
          <p>Max Altitude: {maxAltitude.toFixed(0)} m</p>
          <p>Duration: {duration || "N/A"}</p>
          {weather && (
            <p>
              Weather: {weather.weather[0].main}, {weather.main.temp}°C
            </p>
          )}

          {warnings.length > 0 && (
            <div
              style={{
                background: "#fff3cd",
                border: "1px solid #ffeeba",
                padding: "10px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <h4>⚠️ Safety Hints</h4>
              <ul>
                {warnings.map((w, idx) => (
                  <li key={idx}>{w}</li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ height: "400px", marginTop: "20px" }}>
            <Map
              initialViewState={{
                longitude: geoJsonData.features[0]?.geometry.coordinates[0][0] || 85,
                latitude: geoJsonData.features[0]?.geometry.coordinates[0][1] || 28,
                zoom: 12,
              }}
              style={{ width: "100%", height: "100%" }}
              mapStyle="mapbox://styles/mapbox/outdoors-v12"
              mapboxAccessToken={MAPBOX_TOKEN}
            >
              <Source id="route" type="geojson" data={geoJsonData}>
                <Layer
                  id="route-line"
                  type="line"
                  paint={{
                    "line-color": "#ff5733",
                    "line-width": 4,
                  }}
                />
              </Source>
            </Map>
          </div>
        </div>
      )}
    </div>
  );
};

export default GPXUpload;
