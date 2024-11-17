import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ videoUrl, token }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls(
        {
          debug: true,
          lowLatencyMode: true,
          licenseXhrSetup: (xhr) => {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        }
      );
      hls.loadSource(videoUrl);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });

      return () => {
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // For native HLS support (Safari, etc.)
      videoRef.current.src = videoUrl;
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.play();
      });
    }
  }, [videoUrl, token]);

  return (
    <div>
      <video
        ref={videoRef}
        controls
        style={{ width: "100%", height: "auto" }}
        autoPlay
      />
    </div>
  );
};

export default VideoPlayer;
