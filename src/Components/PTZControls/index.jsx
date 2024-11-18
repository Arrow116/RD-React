import React from 'react';
import './PTZControls.css'


function PTZControlsComp() {
  const handlePtzMove = (direction) => {
    const apiEndpoint = "https://sitesecuritysystems.net:7001/api/ptz"
    const offsets = {
        up: { pan: 0, tilt: 0.25 },
        down: { pan: 0, tilt: -0.25 },
        left: { pan: -0.25, tilt: 0 },
        right: { pan: 0.25, tilt: 0 },
        zoomIn: { zoom: 0.3 },
        zoomOut: { zoom: -0.3 },
      };
    const params = new URLSearchParams(offsets[direction]);
    const urlWithParams = `${apiEndpoint}/?${params.toString()}&cameraId=d01c81b0-f297-bf7c-f84a-c6a5b5b7d629&speed=0.2`

    fetch(urlWithParams, {
      method: "POST",
      headers: {
        "Authorization": "Bearer vms-711d2b593dd024a4e44d30f081174adf-JO94vbRo4q",
        // "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => console.log("PTZ movement success:", data))
      .catch((error) => console.error("PTZ movement error:", error));
    }

  return (
    <div className="ptz-controls">
      <button onClick={() => handlePtzMove("up")}>&uarr;</button>
      <div>
        <button onClick={() => handlePtzMove("left")}>&larr;</button>
        <button onClick={() => handlePtzMove("right")}>&rarr;</button>
      </div>
      <button onClick={() => handlePtzMove("down")}>&darr;</button>
      <div className="zoom-controls">
        <button onClick={() => handlePtzMove("zoomIn")}>Zoom In</button>
        <button onClick={() => handlePtzMove("zoomOut")}>Zoom Out</button>
      </div>
    </div>
  );
}

export default PTZControlsComp