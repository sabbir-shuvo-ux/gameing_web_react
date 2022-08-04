import React, { useRef, useEffect } from "react";

export const AutoPlaySilentVideo = () => {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <video ref={videoRef} loop autoPlay muted playsInline>
      <source src="/videos/video-3.mp4" type="video/mp4" />
    </video>
  );
};
