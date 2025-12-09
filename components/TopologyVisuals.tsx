import React from 'react';

export const StarTopology = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-slate-200 my-4">
    <h4 className="text-sm font-semibold text-slate-500 mb-4">Star Topology Diagram</h4>
    <svg width="200" height="200" viewBox="0 0 200 200">
      {/* Central Hub */}
      <rect x="85" y="85" width="30" height="30" rx="4" fill="#3b82f6" />
      <text x="100" y="105" fontSize="10" fill="white" textAnchor="middle">Hub</text>
      
      {/* Nodes */}
      <circle cx="100" cy="30" r="15" fill="#94a3b8" />
      <circle cx="170" cy="100" r="15" fill="#94a3b8" />
      <circle cx="100" cy="170" r="15" fill="#94a3b8" />
      <circle cx="30" cy="100" r="15" fill="#94a3b8" />

      {/* Connections */}
      <line x1="100" y1="45" x2="100" y2="85" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="155" y1="100" x2="115" y2="100" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="100" y1="155" x2="100" y2="115" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="45" y1="100" x2="85" y2="100" stroke="#cbd5e1" strokeWidth="2" />
    </svg>
    <p className="text-xs text-slate-500 mt-2 text-center max-w-xs">
      Centralized control. If the Hub fails, the network fails.
    </p>
  </div>
);

export const BusTopology = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-slate-200 my-4">
    <h4 className="text-sm font-semibold text-slate-500 mb-4">Bus Topology Diagram</h4>
    <svg width="300" height="150" viewBox="0 0 300 150">
      {/* Main Bus Line */}
      <line x1="20" y1="75" x2="280" y2="75" stroke="#3b82f6" strokeWidth="4" />
      <circle cx="20" cy="75" r="4" fill="#3b82f6" />
      <circle cx="280" cy="75" r="4" fill="#3b82f6" />

      {/* Drop Lines */}
      <line x1="60" y1="75" x2="60" y2="40" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="120" y1="75" x2="120" y2="110" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="180" y1="75" x2="180" y2="40" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="240" y1="75" x2="240" y2="110" stroke="#cbd5e1" strokeWidth="2" />

      {/* Nodes */}
      <rect x="45" y="10" width="30" height="30" rx="4" fill="#94a3b8" />
      <rect x="105" y="110" width="30" height="30" rx="4" fill="#94a3b8" />
      <rect x="165" y="10" width="30" height="30" rx="4" fill="#94a3b8" />
      <rect x="225" y="110" width="30" height="30" rx="4" fill="#94a3b8" />
    </svg>
    <p className="text-xs text-slate-500 mt-2 text-center max-w-xs">
      Single backbone cable. Terminators at both ends.
    </p>
  </div>
);

export const RingTopology = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-slate-200 my-4">
    <h4 className="text-sm font-semibold text-slate-500 mb-4">Ring Topology Diagram</h4>
    <svg width="200" height="200" viewBox="0 0 200 200">
      {/* Ring Path */}
      <circle cx="100" cy="100" r="70" fill="none" stroke="#3b82f6" strokeWidth="2" />

      {/* Nodes */}
      <circle cx="100" cy="30" r="12" fill="#94a3b8" />
      <circle cx="170" cy="100" r="12" fill="#94a3b8" />
      <circle cx="100" cy="170" r="12" fill="#94a3b8" />
      <circle cx="30" cy="100" r="12" fill="#94a3b8" />
      
      {/* Direction Arrows */}
      <path d="M 110 32 L 120 38" stroke="#3b82f6" strokeWidth="2" />
      <path d="M 170 110 L 165 120" stroke="#3b82f6" strokeWidth="2" />
    </svg>
    <p className="text-xs text-slate-500 mt-2 text-center max-w-xs">
      Token passing mechanism. Unidirectional or bidirectional.
    </p>
  </div>
);

export const MeshTopology = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-slate-200 my-4">
    <h4 className="text-sm font-semibold text-slate-500 mb-4">Full Mesh Topology Diagram</h4>
    <svg width="200" height="200" viewBox="0 0 200 200">
      {/* Connections (All to All) */}
      <line x1="60" y1="60" x2="140" y2="60" stroke="#cbd5e1" strokeWidth="1" />
      <line x1="60" y1="60" x2="60" y2="140" stroke="#cbd5e1" strokeWidth="1" />
      <line x1="60" y1="60" x2="140" y2="140" stroke="#cbd5e1" strokeWidth="1" />
      
      <line x1="140" y1="60" x2="140" y2="140" stroke="#cbd5e1" strokeWidth="1" />
      <line x1="140" y1="60" x2="60" y2="140" stroke="#cbd5e1" strokeWidth="1" />
      
      <line x1="60" y1="140" x2="140" y2="140" stroke="#cbd5e1" strokeWidth="1" />

      {/* Nodes */}
      <rect x="50" y="50" width="20" height="20" rx="4" fill="#3b82f6" />
      <rect x="130" y="50" width="20" height="20" rx="4" fill="#3b82f6" />
      <rect x="50" y="130" width="20" height="20" rx="4" fill="#3b82f6" />
      <rect x="130" y="130" width="20" height="20" rx="4" fill="#3b82f6" />
    </svg>
    <p className="text-xs text-slate-500 mt-2 text-center max-w-xs">
      High redundancy. Expensive cabling. n(n-1)/2 cables.
    </p>
  </div>
);
