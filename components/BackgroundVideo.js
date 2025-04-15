'use client';

export default function BackgroundVideo() {
  return (
    <div className="video-background">
      <div className="video-overlay" />
      <iframe
        src="https://www.youtube.com/embed/o34USHybNj4?si=J52kHszBWOxg52XP&autoplay=1&mute=1"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
      ></iframe>

      <style jsx>{`
        .video-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
        }

        .video-background iframe {
          width: 100vw;
          height: 56.25vw; /* 16:9 aspect ratio */
          min-height: 100vh;
          min-width: 177.77vh;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.4); /* Optional soft overlay */
          backdrop-filter: blur(2px);
        }
      `}</style>
    </div>
  );
}
