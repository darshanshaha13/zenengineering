// src/components/SketchfabModel.tsx

import React from 'react';

interface SketchfabModelProps {
  /** The full 'src' URL from the Sketchfab iframe embed code. */
  src: string;
  /** The title for the iframe, improving accessibility. */
  title: string;
}

/**
 * A reusable component to embed a Sketchfab 3D model.
 * It uses a responsive container to maintain a 16:9 aspect ratio.
 */
const SketchfabModel: React.FC<SketchfabModelProps> = ({ src, title }) => {
  return (
    // Responsive container to maintain aspect ratio (16:9 is common for 3D viewers)
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        paddingTop: '56.25%', // 16:9 aspect ratio (9 / 16 * 100)
        overflow: 'hidden' 
      }}
      className="rounded-xl shadow-2xl transition-all duration-500 hover:shadow-blue-500/50"
    >
      <iframe
        title={title}
        frameBorder="0"
        // Use the standard boolean attribute 'allowFullScreen'
        allowFullScreen={true} 
        
        // --- FIX: Removed non-standard attributes: mozallowfullscreen, webkitallowfullscreen ---
        
        allow="autoplay; fullscreen; xr-spatial-tracking; execution-while-out-of-viewport; execution-while-not-rendered; web-share"
        src={src}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default SketchfabModel;