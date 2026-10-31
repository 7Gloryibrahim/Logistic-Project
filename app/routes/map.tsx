import { useState, useEffect } from "react";

 export default function ContactMap() {
  const [leaflet, setLeaflet] =
    useState<typeof import("react-leaflet") | null>(null);

  const [markerIcon, setMarkerIcon] =
    useState<import("leaflet").DivIcon | null>(null);

  useEffect(() => {
    let active = true;

    Promise.all([
      import("react-leaflet"),
      import("leaflet"),
    ]).then(([components, L]) => {
      if (!active) return;

      setLeaflet(components);

      setMarkerIcon(
        L.divIcon({
          className: "contact-marker-icon",
          html: '<span class="contact-marker-pin"><span></span></span>',
          iconSize: [30, 40],
          iconAnchor: [15, 40],
          popupAnchor: [0, -36],
        })
      );
    });

    return () => {
      active = false;
    };
  }, []);

  if (!leaflet || !markerIcon) {
    return (
      <div
        className="h-[400px] w-full bg-gray-100"
        aria-label="Loading map"
      />
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = leaflet;

  const locations: {
    name: string;
    position: [number, number];
  }[] = [
    { name: "Delta State (Asaba)", position: [6.198, 6.732] },
    { name: "Lagos State", position: [6.5244, 3.3792] },
    { name: "Cross River State (Calabar)", position: [4.9517, 8.3417] },
    { name: "Rivers State (Port Harcourt)", position: [4.8156, 7.0498] },
  ];

  return (
    <MapContainer
      className="contact-map"
      center={[9.082, 8.6753]}
      zoom={6}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location) => (
        <Marker
          key={location.name}
          position={location.position}
          icon={markerIcon}
        >
          <Popup className="contact-popup">
            {location.name}, Nigeria
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}