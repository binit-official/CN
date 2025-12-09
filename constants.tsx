import React from 'react';
import { Topic, InterviewQuestion } from './types';
import { Network, Share2, Shield, Globe, Layers, Command, Cpu, Zap, ArrowRight, Server, Database, Radio, ArrowDownUp, Activity, Router, Box, Lock, CheckCircle, AlertTriangle } from 'lucide-react';
import { StarTopology, BusTopology, RingTopology, MeshTopology } from './components/TopologyVisuals';

// --- Helper Components for Rich Content ---

const PlacementTip = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-sm">
    <h4 className="flex items-center gap-2 text-base font-bold text-amber-800 uppercase mb-3 tracking-wide">
      <Zap className="w-5 h-5 fill-amber-500" /> Placement Insight
    </h4>
    <div className="text-slate-800 text-sm md:text-base leading-relaxed">{children}</div>
  </div>
);

const ConceptCard = ({ title, children, color = 'blue' }: { title: string, children: React.ReactNode, color?: 'blue' | 'green' | 'purple' | 'red' | 'indigo' | 'orange' | 'slate' }) => {
    const colors: Record<string, string> = {
        blue: 'bg-blue-50 border-blue-200 text-blue-900',
        green: 'bg-green-50 border-green-200 text-green-900',
        purple: 'bg-purple-50 border-purple-200 text-purple-900',
        red: 'bg-red-50 border-red-200 text-red-900',
        indigo: 'bg-indigo-50 border-indigo-200 text-indigo-900',
        orange: 'bg-orange-50 border-orange-200 text-orange-900',
        slate: 'bg-slate-100 border-slate-300 text-slate-900',
    };
    
    return (
        <div className={`p-6 rounded-lg border ${colors[color] || colors.blue} mb-6 shadow-sm`}>
            <h4 className="font-bold text-lg md:text-xl mb-4 border-b border-current pb-2 opacity-80">{title}</h4>
            <div className="text-sm md:text-base opacity-90 space-y-3">{children}</div>
        </div>
    );
};

const DetailList = ({ items }: { items: string[] }) => (
    <ul className="space-y-2 mt-2">
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm md:text-base text-slate-700">
                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-blue-500" />
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

// --- Study Content ---

export const TOPICS: Topic[] = [
  {
    id: 'basics',
    title: 'Network Fundamentals',
    icon: <Network className="w-5 h-5" />,
    subTopics: [
      {
        id: 'definition',
        title: 'Deep Dive: Core Concepts & Modes',
        content: (
          <div className="space-y-10">
            <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  A <strong>computer network</strong> is not just computers connected together; it is a complex orchestration of hardware, software, and protocols working in unison to facilitate resource sharing (printers, storage) and information exchange (email, web). The fundamental goal is to achieve <strong>reliability</strong>, <strong>efficiency</strong>, and <strong>security</strong>.
                </p>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Server className="w-6 h-6 text-blue-600" />
                    The 5 Pillars of Data Communication
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ConceptCard title="1. Message" color="blue">
                        The "Payload". It is the information (data) to be communicated.
                        <DetailList items={[
                            "Text (ASCII/Unicode)",
                            "Numbers (Binary)",
                            "Images (Pixels/Vectors)",
                            "Audio (Sound waves &rarr; Digital)",
                            "Video (Frame sequences)"
                        ]} />
                    </ConceptCard>
                    <ConceptCard title="2. Sender & 3. Receiver" color="green">
                        <p><strong>Sender:</strong> The device that generates the data message. Can be a computer, workstation, telephone handset, video camera, etc.</p>
                        <hr className="my-2 border-green-200"/>
                        <p><strong>Receiver:</strong> The device that receives the message. <em>Note:</em> A device can be both sender and receiver (transceiver).</p>
                    </ConceptCard>
                    <ConceptCard title="4. Transmission Medium" color="orange">
                        The physical path by which a message travels from sender to receiver.
                        <DetailList items={[
                            "Guided (Wired): Twisted Pair, Coaxial Cable, Fiber Optic",
                            "Unguided (Wireless): Radio waves, Microwaves, Infrared, Lasers"
                        ]} />
                    </ConceptCard>
                    <ConceptCard title="5. Protocol" color="purple">
                        The "Law" of the network. Without a protocol, two devices may be connected but cannot communicate (like a French speaker and a Japanese speaker).
                        <div className="mt-2 bg-purple-100 p-3 rounded text-sm">
                            <strong>Key Elements:</strong>
                            <ul className="list-disc ml-4 mt-1">
                                <li><strong>Syntax:</strong> Structure/Format (e.g., first 8 bits are address).</li>
                                <li><strong>Semantics:</strong> Meaning (e.g., does this bit mean start or stop?).</li>
                                <li><strong>Timing:</strong> When to send and how fast.</li>
                            </ul>
                        </div>
                    </ConceptCard>
                </div>
            </div>

            <div className="space-y-6">
                 <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Radio className="w-6 h-6 text-indigo-600" />
                    Transmission Modes (Data Flow)
                </h3>
                <p className="text-slate-600">Defines the direction of signal flow between two linked devices.</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Simplex</h4>
                        <div className="flex items-center gap-2 mb-4 text-xs font-mono bg-slate-100 p-2 rounded justify-center">
                            Sender <ArrowRight size={16}/> Receiver
                        </div>
                        <p className="text-sm text-slate-600">Unidirectional communication. One transmits, other receives. Dedicated channel capacity.</p>
                        <div className="mt-4 pt-4 border-t border-slate-100">
                            <span className="text-xs font-bold text-slate-500 uppercase">Examples</span>
                            <p className="text-sm">Keyboard to CPU, Monitor, AM/FM Radio, TV Broadcast.</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Half-Duplex</h4>
                        <div className="flex items-center gap-2 mb-4 text-xs font-mono bg-slate-100 p-2 rounded justify-center">
                            Sender <ArrowDownUp size={16}/> Receiver
                        </div>
                        <p className="text-sm text-slate-600">Bidirectional, but <strong>not simultaneously</strong>. Channel capacity is shared but taken in turns.</p>
                        <div className="mt-4 pt-4 border-t border-slate-100">
                            <span className="text-xs font-bold text-slate-500 uppercase">Examples</span>
                            <p className="text-sm">Walkie-talkies, CB Radio, Old Ethernet Hubs.</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Full-Duplex</h4>
                        <div className="flex items-center gap-2 mb-4 text-xs font-mono bg-slate-100 p-2 rounded justify-center">
                            Sender <ArrowDownUp size={16} className="text-green-600"/> Receiver
                        </div>
                        <p className="text-sm text-slate-600">Simultaneous bidirectional. Signals go in both directions at the same time (often using two separate frequencies or wire pairs).</p>
                        <div className="mt-4 pt-4 border-t border-slate-100">
                            <span className="text-xs font-bold text-slate-500 uppercase">Examples</span>
                            <p className="text-sm">Telephone, Modern Ethernet (Switches), Mobile Phones.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Box className="w-6 h-6 text-orange-600" />
                    Switching Techniques
                </h3>
                <p className="text-slate-600">How data moves from source to destination through intermediate nodes.</p>

                <ConceptCard title="1. Circuit Switching (Connection Oriented)" color="indigo">
                    <p className="mb-4">Before data transfer, a dedicated physical path is established. This path remains reserved for the duration of the session.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-white/50 p-4 rounded">
                        <div>
                            <strong>Phases:</strong>
                            <ol className="list-decimal ml-5">
                                <li>Circuit Establishment (Setup time)</li>
                                <li>Data Transfer</li>
                                <li>Circuit Disconnect (Teardown)</li>
                            </ol>
                        </div>
                        <div>
                            <strong>Characteristics:</strong>
                            <ul className="list-disc ml-5">
                                <li>Fixed bandwidth</li>
                                <li>No congestion once setup</li>
                                <li>Wasted resources during silence</li>
                                <li>Ex: Legacy PSTN (Telephone)</li>
                            </ul>
                        </div>
                    </div>
                </ConceptCard>

                <ConceptCard title="2. Packet Switching (Connectionless)" color="green">
                    <p className="mb-4">Data is broken into small chunks called <strong>packets</strong>. Each packet travels independently.</p>
                    <div className="space-y-4">
                        <div className="bg-white/50 p-3 rounded">
                            <strong className="text-green-800">A. Datagram Approach:</strong>
                            <p className="text-sm mt-1">Each packet is treated independently. Packet 1 might take Route A, Packet 2 Route B. They may arrive out of order. The internet (IP) works this way.</p>
                        </div>
                        <div className="bg-white/50 p-3 rounded">
                            <strong className="text-green-800">B. Virtual Circuit Approach:</strong>
                            <p className="text-sm mt-1">A logical path is setup first. All packets follow this path (like a train on tracks) but the physical resource is not reserved exclusively. Used in Frame Relay, ATM, MPLS.</p>
                        </div>
                    </div>
                </ConceptCard>

                <ConceptCard title="3. Message Switching (Store and Forward)" color="slate">
                    <p className="mb-2">No direct link is established. The entire message is sent to the first node, stored fully, checked for errors, and then forwarded to the next.</p>
                    <p className="text-xs text-slate-500 italic">Historical note: Used in old telegraph systems. High latency due to storage time. Requires large buffer/disk space at nodes.</p>
                </ConceptCard>
            </div>
          </div>
        )
      },
      {
        id: 'topology',
        title: 'Deep Dive: Network Topologies',
        content: (
          <div className="space-y-10">
            <div className="prose prose-slate max-w-none">
                <p>Topology defines the physical or logical layout of links and nodes. <strong>Physical topology</strong> is how cables are run. <strong>Logical topology</strong> is how data flows (e.g., a physical star can behave like a logical ring).</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Star */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-slate-800">Star Topology</h3>
                        <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded">Enterprise Standard</span>
                    </div>
                    <StarTopology />
                    <div className="mt-6 space-y-4">
                        <div>
                            <h5 className="font-bold text-sm text-slate-700">Detailed Mechanics:</h5>
                            <p className="text-sm text-slate-600">Every node has a dedicated point-to-point link to a central controller (Hub or Switch). No direct traffic between devices; everything goes through the center.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-green-700 bg-green-50 p-2 rounded">
                                <strong>Pros:</strong>
                                <ul className="list-disc ml-4 text-xs mt-1">
                                    <li>Robust: 1 link fail = 1 node down.</li>
                                    <li>Easy fault ID.</li>
                                    <li>Easy to expand/modify.</li>
                                </ul>
                            </div>
                            <div className="text-red-700 bg-red-50 p-2 rounded">
                                <strong>Cons:</strong>
                                <ul className="list-disc ml-4 text-xs mt-1">
                                    <li>Single Point of Failure (The Switch).</li>
                                    <li>More cabling than Bus.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bus */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-slate-800">Bus Topology</h3>
                        <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-700 rounded">Legacy / Industrial</span>
                    </div>
                    <BusTopology />
                    <div className="mt-6 space-y-4">
                        <div>
                            <h5 className="font-bold text-sm text-slate-700">Detailed Mechanics:</h5>
                            <p className="text-sm text-slate-600">Multipoint configuration. A long cable (backbone) acts as a shared highway. T-connectors tap into the line. Ends must have <strong>terminators</strong> to absorb signals and prevent reflection.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-green-700 bg-green-50 p-2 rounded">
                                <strong>Pros:</strong>
                                <ul className="list-disc ml-4 text-xs mt-1">
                                    <li>Cheap: Least cable needed.</li>
                                    <li>Simple layout for small networks.</li>
                                </ul>
                            </div>
                            <div className="text-red-700 bg-red-50 p-2 rounded">
                                <strong>Cons:</strong>
                                <ul className="list-disc ml-4 text-xs mt-1">
                                    <li>Fragile: Backbone break = Total blackout.</li>
                                    <li>Heavy traffic slows it down dramatically (Collisions).</li>
                                    <li>Hard to isolate faults.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ring */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-slate-800">Ring Topology</h3>
                        <span className="text-xs font-bold px-2 py-1 bg-purple-100 text-purple-700 rounded">Token Ring / FDDI</span>
                    </div>
                    <RingTopology />
                    <div className="mt-6 space-y-4">
                        <div>
                            <h5 className="font-bold text-sm text-slate-700">Detailed Mechanics:</h5>
                            <p className="text-sm text-slate-600">Each device has dedicated P2P connection with 2 neighbors. Signal is passed in one direction (unidirectional) from device to device until it finds the destination. Uses <strong>Token Passing</strong> to prevent collisions.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-green-700 bg-green-50 p-2 rounded">
                                <strong>Pros:</strong>
                                <ul className="list-disc ml-4 text-xs mt-1">
                                    <li>Deterministic: Calculated wait time.</li>
                                    <li>No Collisions.</li>
                                    <li>Equal access for all nodes.</li>
                                </ul>
                            </div>
                            <div className="text-red-700 bg-red-50 p-2 rounded">
                                <strong>Cons:</strong>
                                <ul className="list-disc ml-4 text-xs mt-1">
                                    <li>One break = Network Down (unless dual ring).</li>
                                    <li>Adding nodes disrupts network.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mesh */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-slate-800">Mesh Topology</h3>
                        <span className="text-xs font-bold px-2 py-1 bg-indigo-100 text-indigo-700 rounded">Critical Systems</span>
                    </div>
                    <MeshTopology />
                    <div className="mt-6 space-y-4">
                        <div>
                            <h5 className="font-bold text-sm text-slate-700">Detailed Mechanics:</h5>
                            <p className="text-sm text-slate-600">Every device has a dedicated P2P link to every other device. <br/><strong>Formula:</strong> Cables = n(n-1)/2. Ports per device = n-1.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-green-700 bg-green-50 p-2 rounded">
                                <strong>Pros:</strong>
                                <ul className="list-disc ml-4 text-xs mt-1">
                                    <li>Ultimate Reliability.</li>
                                    <li>Privacy/Security (Dedicated lines).</li>
                                    <li>No congestion/blocking.</li>
                                </ul>
                            </div>
                            <div className="text-red-700 bg-red-50 p-2 rounded">
                                <strong>Cons:</strong>
                                <ul className="list-disc ml-4 text-xs mt-1">
                                    <li>Extremely Expensive.</li>
                                    <li>Complex installation.</li>
                                    <li>Hardware intensive (many ports needed).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ConceptCard title="Other Topologies" color="slate">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h5 className="font-bold text-slate-800">Tree (Hierarchical)</h5>
                        <p className="text-sm text-slate-600">Variation of Star. Nodes are arranged hierarchically. There is a root node, intermediate hubs, and leaf nodes. Used in WANs and corporate hierarchies.</p>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-800">Hybrid</h5>
                        <p className="text-sm text-slate-600">Combination of two or more different topologies. Ex: A Star network (Department A) connected to a Ring network (Department B) via a central Bus backbone.</p>
                    </div>
                </div>
            </ConceptCard>
          </div>
        )
      }
    ]
  },
  {
    id: 'types',
    title: 'Network Types & VPN',
    icon: <Globe className="w-5 h-5" />,
    subTopics: [
      {
        id: 'geo-types',
        title: 'Deep Dive: LAN, MAN, WAN',
        content: (
          <div className="space-y-8">
             <div className="prose prose-slate">
                <p>Networks are primarily classified by their geographical footprint. This classification often dictates the underlying technology, ownership, and speed.</p>
             </div>
             
             <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <table className="min-w-full bg-white">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="py-4 px-6 text-left text-sm font-bold text-slate-700 uppercase">Feature</th>
                    <th className="py-4 px-6 text-left text-sm font-bold text-blue-700 uppercase">LAN</th>
                    <th className="py-4 px-6 text-left text-sm font-bold text-yellow-700 uppercase">MAN</th>
                    <th className="py-4 px-6 text-left text-sm font-bold text-red-700 uppercase">WAN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-slate-600">Full Name</td>
                    <td className="py-4 px-6 text-sm">Local Area Network</td>
                    <td className="py-4 px-6 text-sm">Metropolitan Area Network</td>
                    <td className="py-4 px-6 text-sm">Wide Area Network</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-slate-600">Range</td>
                    <td className="py-4 px-6 text-sm">Room, Building, Campus (1-10km)</td>
                    <td className="py-4 px-6 text-sm">City, Large Campus (10-100km)</td>
                    <td className="py-4 px-6 text-sm">Country, Continent, Global</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-slate-600">Speed</td>
                    <td className="py-4 px-6 text-sm">High (100 Mbps - 100 Gbps)</td>
                    <td className="py-4 px-6 text-sm">Moderate (10 Mbps - 1 Gbps)</td>
                    <td className="py-4 px-6 text-sm">Low (Kbps - Mbps) *improving</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-slate-600">Technology</td>
                    <td className="py-4 px-6 text-sm">Ethernet (802.3), Wi-Fi (802.11)</td>
                    <td className="py-4 px-6 text-sm">DQDB, Fiber (FDDI), Cable TV</td>
                    <td className="py-4 px-6 text-sm">MPLS, 4G/5G, Satellite, Frame Relay</td>
                  </tr>
                   <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-slate-600">Ownership</td>
                    <td className="py-4 px-6 text-sm">Private (Single Org/Home)</td>
                    <td className="py-4 px-6 text-sm">Public/Private Consortium</td>
                    <td className="py-4 px-6 text-sm">Public/ISP (Leased lines)</td>
                  </tr>
                   <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-slate-600">Errors</td>
                    <td className="py-4 px-6 text-sm">Lowest Error Rate</td>
                    <td className="py-4 px-6 text-sm">Moderate</td>
                    <td className="py-4 px-6 text-sm">Highest Error Rate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ConceptCard title="Other Network Categories" color="purple">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <li>
                        <strong>PAN (Personal Area Network):</strong> <br/>
                        Range: 10 meters. <br/>
                        Ex: Bluetooth (connecting headphones to phone), ZigBee.
                    </li>
                     <li>
                        <strong>SAN (Storage Area Network):</strong> <br/>
                        High-speed network connecting servers to data storage devices (Disk Arrays, Tape Libraries). <br/>
                        Tech: Fibre Channel, iSCSI.
                    </li>
                     <li>
                        <strong>CAN (Campus Area Network):</strong> <br/>
                        Interconnects LANs within a limited geographical area like a university or military base.
                    </li>
                     <li>
                        <strong>GAN (Global Area Network):</strong> <br/>
                        A network used for supporting mobile communications across an arbitrary number of wireless LANs, satellite coverage areas, etc.
                    </li>
                </ul>
            </ConceptCard>

            <PlacementTip>
                <strong>Q:</strong> "Why is LAN faster than WAN?" <br/>
                <strong>A:</strong> 
                <ol className="list-decimal ml-5 mt-2 space-y-1">
                    <li><strong>Proximity:</strong> Shorter distance = less propagation delay.</li>
                    <li><strong>Media Quality:</strong> LAN uses dedicated high-quality cabling (Cat6/Fiber) in a controlled environment. WAN uses shared public infrastructure.</li>
                    <li><strong>Complexity:</strong> LAN has fewer router hops. WAN involves routing through many ISP nodes, introducing processing and queuing delays.</li>
                </ol>
            </PlacementTip>
          </div>
        )
      },
      {
        id: 'vpn',
        title: 'Deep Dive: VPN (Virtual Private Network)',
        content: (
          <div className="space-y-8">
            <div className="prose prose-slate max-w-none">
                <p>A VPN extends a private network across a public network (The Internet). It enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network.</p>
            </div>

            <ConceptCard title="Core Concept: Tunneling" color="green">
                <p className="mb-4">Tunneling is the process of encapsulating a packet within another packet. </p>
                <div className="bg-slate-900 text-green-400 p-4 rounded font-mono text-xs md:text-sm overflow-x-auto">
                    [ Public IP Header ] [ VPN Protocol Header ] [ Encrypted Original IP Header + Data ]
                </div>
                <p className="mt-4 text-sm text-slate-700">
                    Think of it like a secure armored truck (The Tunnel) driving on a public highway (The Internet). The truck shares the road with other cars, but no one can see what's inside the truck.
                </p>
            </ConceptCard>

            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Types of VPN</h3>
                    <div className="space-y-4">
                        <div>
                            <strong className="text-blue-700">1. Remote Access VPN:</strong>
                            <p className="text-sm text-slate-600">Connects individual users to a private network. Ex: Employee working from a coffee shop accessing corporate files.</p>
                        </div>
                        <div>
                            <strong className="text-blue-700">2. Site-to-Site VPN:</strong>
                            <p className="text-sm text-slate-600">Connects two different networks (e.g., NY Office Router to London Office Router). The users in the offices don't even know a VPN exists; the routers handle it.</p>
                            <ul className="text-xs list-disc ml-4 text-slate-500 mt-1">
                                <li><strong>Intranet VPN:</strong> Connecting internal offices.</li>
                                <li><strong>Extranet VPN:</strong> Connecting with partners/suppliers.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-px bg-slate-200 hidden md:block"></div>
                <div className="flex-1 space-y-4">
                     <h3 className="text-xl font-bold text-slate-800">Key Protocols</h3>
                     <ul className="space-y-3 text-sm">
                        <li className="bg-slate-50 p-2 rounded">
                            <span className="font-bold text-slate-800">IPsec (Internet Protocol Security):</span> <br/>
                            Layer 3. Used for Site-to-Site. Operates in two modes: Transport (encrypt payload) and Tunnel (encrypt whole packet).
                        </li>
                        <li className="bg-slate-50 p-2 rounded">
                            <span className="font-bold text-slate-800">SSL/TLS (OpenVPN):</span> <br/>
                            Layer 4/7. Used for Client-to-Site. Runs in the browser (https) or via client app. Firewall friendly (uses port 443).
                        </li>
                        <li className="bg-slate-50 p-2 rounded">
                            <span className="font-bold text-slate-800">PPTP / L2TP:</span> <br/>
                            Older, less secure protocols. Generally avoided now.
                        </li>
                    </ul>
                </div>
            </div>

            <PlacementTip>
                <strong>Interview Q:</strong> "What is Split Tunneling?" <br/>
                <strong>A:</strong> It's a VPN feature where only sensitive corporate traffic goes through the secure VPN tunnel, while regular traffic (like watching YouTube or Spotify) goes directly to the internet. This saves VPN bandwidth.
            </PlacementTip>
          </div>
        )
      }
    ]
  },
  {
    id: 'models',
    title: 'OSI & TCP/IP Models',
    icon: <Layers className="w-5 h-5" />,
    subTopics: [
      {
        id: 'osi',
        title: 'Deep Dive: OSI 7-Layer Model',
        content: (
          <div className="space-y-10">
            {/* Intro */}
            <div className="prose prose-slate max-w-none">
                <p>The <strong>Open Systems Interconnection (OSI)</strong> model is a conceptual framework describing the functions of a networking or telecommunication system. It divides the process into 7 abstraction layers.</p>
            </div>

            {/* Visual Flow */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <ArrowDownUp className="w-5 h-5 text-blue-500" /> Data Flow Visualization
                </h3>
                <div className="flex flex-col md:flex-row gap-8 justify-center min-w-[600px]">
                    {/* Sender Side */}
                    <div className="flex-1">
                        <div className="text-center font-bold text-blue-700 mb-2">Sender (Encapsulation)</div>
                        <div className="flex flex-col gap-1">
                            {['Application (Data)', 'Presentation', 'Session', 'Transport (Segments)', 'Network (Packets)', 'Data Link (Frames)', 'Physical (Bits)'].map((step, i) => (
                                <div key={i} className="bg-blue-50 border border-blue-100 p-2 text-xs rounded text-center relative">
                                    <span className="font-bold">L{7-i}</span>: {step}
                                    {i < 6 && <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-blue-300">↓</div>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Medium */}
                    <div className="flex items-center justify-center w-32">
                        <div className="text-center">
                            <div className="h-0.5 w-full bg-slate-300 my-2 relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 bg-white px-1">Network Media</div>
                            </div>
                            <ArrowRight className="mx-auto text-slate-400" />
                        </div>
                    </div>

                    {/* Receiver Side */}
                    <div className="flex-1">
                        <div className="text-center font-bold text-green-700 mb-2">Receiver (Decapsulation)</div>
                        <div className="flex flex-col-reverse gap-1">
                            {['Application (Data)', 'Presentation', 'Session', 'Transport (Segments)', 'Network (Packets)', 'Data Link (Frames)', 'Physical (Bits)'].map((step, i) => (
                                <div key={i} className="bg-green-50 border border-green-100 p-2 text-xs rounded text-center relative">
                                    <span className="font-bold">L{7-i}</span>: {step}
                                    {i < 6 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-green-300">↑</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Layers */}
            <div className="space-y-6">
                {[
                    {
                        l: 7, title: 'Application Layer', color: 'purple',
                        role: 'User Interface & Network Services',
                        desc: 'The only layer that directly interacts with the user\'s data. It provides protocols that allow software to send and receive information and present meaningful data to users.',
                        funcs: ['File Transfer, Access, and Management', 'Mail Services', 'Directory Services', 'Network Virtual Terminal'],
                        proto: 'HTTP, HTTPS, FTP, SMTP, DNS, DHCP, SSH, Telnet, SNMP',
                        hardware: 'Gateway, Proxy Server, Next-Gen Firewalls',
                    },
                    {
                        l: 6, title: 'Presentation Layer', color: 'purple',
                        role: 'Translation, Encryption, Compression',
                        desc: 'The "Syntax Layer". It ensures that the data is in a usable format and is where data encryption occurs. It acts as a translator between the application and the network.',
                        funcs: ['Translation (ASCII to EBCDIC)', 'Encryption/Decryption (SSL/TLS)', 'Compression (lossy/lossless)'],
                        proto: 'SSL/TLS, JPEG, MPEG, GIF, ASCII',
                        hardware: 'N/A (Handled by OS/Software)',
                    },
                    {
                        l: 5, title: 'Session Layer', color: 'purple',
                        role: 'Session Management',
                        desc: 'Controls the dialogues (connections) between computers. It establishes, manages, and terminates the connections between the local and remote application.',
                        funcs: ['Dialog Control (Simplex/Half/Full Duplex)', 'Synchronization (Adding checkpoints to data stream to allow recovery)', 'Token Management'],
                        proto: 'NetBIOS, RPC (Remote Procedure Call), PPTP, SAP',
                        hardware: 'Firewall, Gateway',
                    },
                    {
                        l: 4, title: 'Transport Layer', color: 'blue',
                        role: 'End-to-End Delivery & Reliability',
                        desc: 'Responsible for delivering data to the specific application on the host (Process-to-Process delivery).',
                        funcs: ['Service-point Addressing (Port Numbers)', 'Segmentation and Reassembly', 'Connection Control', 'Flow Control (Windowing)', 'Error Control (Checksums)'],
                        proto: 'TCP (Reliable), UDP (Fast/Unreliable), SCTP',
                        hardware: 'Load Balancer, Firewall (Stateful)',
                    },
                    {
                        l: 3, title: 'Network Layer', color: 'green',
                        role: 'Routing & Logical Addressing',
                        desc: 'Responsible for the delivery of individual packets from the source host to the destination host across multiple networks (Host-to-Host delivery).',
                        funcs: ['Logical Addressing (IP Addresses)', 'Routing (Path Selection)', 'Fragmentation (Splitting packets to fit MTU)'],
                        proto: 'IPv4, IPv6, ICMP, IPsec, IGMP, OSPF, BGP',
                        hardware: 'Router, Layer 3 Switch',
                    },
                    {
                        l: 2, title: 'Data Link Layer', color: 'orange',
                        role: 'Physical Addressing & Media Access',
                        desc: 'Responsible for node-to-node delivery. It organizes bits into frames and ensures error-free transfer over the physical link.',
                        funcs: ['Framing', 'Physical Addressing (MAC)', 'Flow Control', 'Error Control (CRC)', 'Access Control (CSMA/CD)'],
                        sublayers: ['LLC (Logical Link Control): Talks to Network Layer', 'MAC (Media Access Control): Talks to Physical Layer'],
                        proto: 'Ethernet (802.3), Wi-Fi (802.11), VLAN, STP, ARP (L2/L3 boundary)',
                        hardware: 'Switch, Bridge, NIC (Network Interface Card), WAP',
                    },
                    {
                        l: 1, title: 'Physical Layer', color: 'orange',
                        role: 'Binary Transmission',
                        desc: 'Concerned with transmitting raw bits over a communication channel. It defines the electrical, mechanical, procedural, and functional specifications.',
                        funcs: ['Bit representation (Encoding)', 'Data Rate (Transmission rate)', 'Synchronization of bits', 'Line Configuration', 'Physical Topology'],
                        proto: '100BASE-T, DSL, USB, Bluetooth (Physical spec), SONET',
                        hardware: 'Hub, Repeater, Cables (Fiber/Copper), Modem',
                    },
                ].map((layer) => (
                    <div key={layer.l} className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                        <div className={`p-4 text-white font-bold flex justify-between items-center
                            ${layer.l > 4 ? 'bg-purple-600' : layer.l > 2 ? 'bg-blue-600' : 'bg-orange-500'}`}>
                            <span className="text-lg">Layer {layer.l}: {layer.title}</span>
                            <span className="text-xs bg-white/20 px-3 py-1 rounded font-mono">
                                PDU: {layer.l === 1 ? 'Bit' : layer.l === 2 ? 'Frame' : layer.l === 3 ? 'Packet' : layer.l === 4 ? 'Segment' : 'Data'}
                            </span>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <h5 className="font-bold text-slate-800 mb-1">Core Role</h5>
                                <p className="text-slate-700 font-medium">{layer.role}</p>
                            </div>
                            <div>
                                <h5 className="font-bold text-slate-800 mb-1">Detailed Description</h5>
                                <p className="text-slate-600 text-sm leading-relaxed">{layer.desc}</p>
                            </div>
                            
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <h5 className="font-bold text-slate-800 text-sm mb-2">Key Functions</h5>
                                <ul className="list-disc ml-4 text-sm text-slate-600 space-y-1">
                                    {layer.funcs.map((f, i) => <li key={i}>{f}</li>)}
                                    {layer.sublayers && layer.sublayers.map((f, i) => <li key={`sub-${i}`} className="italic text-slate-500">{f}</li>)}
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-2">
                                <div>
                                    <span className="block font-bold text-slate-800 mb-1 text-xs uppercase">Protocols</span>
                                    <div className="text-blue-700 font-mono text-xs bg-blue-50 p-2 rounded">{layer.proto}</div>
                                </div>
                                <div>
                                    <span className="block font-bold text-slate-800 mb-1 text-xs uppercase">Hardware</span>
                                    <div className="text-slate-700 bg-slate-100 p-2 rounded">{layer.hardware}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        )
      },
      {
        id: 'tcpip',
        title: 'Deep Dive: TCP/IP Model & Encapsulation',
        content: (
          <div className="space-y-8">
             <p className="text-slate-700">While OSI is the reference model, <strong>TCP/IP</strong> is the implementation model of the internet. It is a 4-layer model (sometimes 5, if distinguishing physical/link). It was developed by DoD (Department of Defense).</p>
             
             <div className="grid grid-cols-2 gap-4 mb-8">
                 <div className="border border-slate-200 rounded p-4">
                     <h4 className="font-bold text-center mb-2">OSI Model</h4>
                     <div className="space-y-1 text-center text-xs text-slate-500">
                         <div className="p-1 border bg-purple-50">Application</div>
                         <div className="p-1 border bg-purple-50">Presentation</div>
                         <div className="p-1 border bg-purple-50">Session</div>
                         <div className="p-1 border bg-blue-50">Transport</div>
                         <div className="p-1 border bg-green-50">Network</div>
                         <div className="p-1 border bg-orange-50">Data Link</div>
                         <div className="p-1 border bg-orange-50">Physical</div>
                     </div>
                 </div>
                 <div className="border border-slate-200 rounded p-4 relative">
                     <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 text-slate-300"><ArrowRight /></div>
                     <h4 className="font-bold text-center mb-2">TCP/IP Model</h4>
                      <div className="space-y-1 text-center text-xs text-slate-700 font-bold">
                         <div className="p-1 border bg-purple-100 h-[84px] flex items-center justify-center">Application Layer</div>
                         <div className="p-1 border bg-blue-100 h-[26px]">Transport (Host-to-Host)</div>
                         <div className="p-1 border bg-green-100 h-[26px]">Internet</div>
                         <div className="p-1 border bg-orange-100 h-[56px] flex items-center justify-center">Network Access (Link)</div>
                     </div>
                 </div>
             </div>

             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h3 className="text-lg font-bold text-slate-800 mb-4">Detailed Encapsulation Logic</h3>
                 <p className="text-sm text-slate-600 mb-4">As data moves down the stack, each layer adds a "Header" (and sometimes a Footer). This is called Encapsulation.</p>
                 
                 <div className="space-y-4">
                     <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-purple-50 rounded border border-purple-100">
                         <div className="w-24 font-bold text-purple-900 text-sm">Application</div>
                         <div className="flex-1 text-xs text-purple-700">
                            <strong>Data:</strong> The raw payload (e.g., an HTTP GET request).
                            <br/><span className="font-mono bg-purple-100 px-1">[DATA]</span>
                         </div>
                     </div>
                     
                     <div className="flex justify-center md:justify-start md:pl-8"><ArrowDownUp className="text-slate-300" /></div>

                     <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-blue-50 rounded border border-blue-100">
                         <div className="w-24 font-bold text-blue-900 text-sm">Transport</div>
                         <div className="flex-1 text-xs text-blue-700">
                             <strong>Segment:</strong> Adds Source/Dest Port numbers.
                             <br/><em>TCP Header includes:</em> Seq Num, Ack Num, Window Size.
                             <br/><span className="font-mono bg-blue-100 px-1">[TCP Header][DATA]</span>
                         </div>
                     </div>

                     <div className="flex justify-center md:justify-start md:pl-8"><ArrowDownUp className="text-slate-300" /></div>

                     <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-green-50 rounded border border-green-100">
                         <div className="w-24 font-bold text-green-900 text-sm">Internet</div>
                         <div className="flex-1 text-xs text-green-700">
                             <strong>Packet:</strong> Adds Source/Dest IP Addresses.
                             <br/><em>IP Header includes:</em> TTL, Protocol ID (TCP=6, UDP=17), Checksum.
                             <br/><span className="font-mono bg-green-100 px-1">[IP Header][TCP Header][DATA]</span>
                         </div>
                     </div>

                     <div className="flex justify-center md:justify-start md:pl-8"><ArrowDownUp className="text-slate-300" /></div>

                     <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-orange-50 rounded border border-orange-100">
                         <div className="w-24 font-bold text-orange-900 text-sm">Link</div>
                         <div className="flex-1 text-xs text-orange-700">
                             <strong>Frame:</strong> Adds Source/Dest MAC Addresses and a Trailer (FCS).
                             <br/><em>Trailer:</em> Frame Check Sequence (CRC) to detect corruption.
                             <br/><span className="font-mono bg-orange-100 px-1">[MAC Header][IP Header][TCP Header][DATA][FCS Trailer]</span>
                         </div>
                     </div>
                 </div>
             </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'datalink',
    title: 'Data Link & Control',
    icon: <Activity className="w-5 h-5" />,
    subTopics: [
        {
            id: 'mac-control',
            title: 'Deep Dive: MAC Protocols',
            content: (
                <div className="space-y-8">
                    <p className="text-slate-600 text-lg"><strong>Media Access Control (MAC)</strong> protocols solve the "Cocktail Party Problem": How do multiple people (devices) talk in a shared room (medium) without talking over each other?</p>

                    <div className="grid grid-cols-1 gap-6">
                        <ConceptCard title="1. CSMA/CD (Carrier Sense Multiple Access / Collision Detection)" color="blue">
                            <p className="mb-2 text-sm">Used in standard <strong>Ethernet (Wired)</strong>. It follows a "Listen before talking" and "Listen while talking" approach.</p>
                            
                            <div className="bg-white p-4 rounded border border-blue-100 text-sm space-y-3">
                                <strong className="block text-blue-800">The Algorithm:</strong>
                                <ol className="list-decimal ml-5 space-y-1 text-slate-700">
                                    <li><strong>Carrier Sense:</strong> Station listens to the wire. Is it busy?
                                        <ul className="list-disc ml-4 text-xs text-slate-500">
                                            <li>Yes: Wait.</li>
                                            <li>No: Start transmitting data.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Collision Detection:</strong> While sending, listen for a signal clash (voltage spike).
                                        <ul className="list-disc ml-4 text-xs text-slate-500">
                                            <li>If no collision: Finish sending. Success.</li>
                                            <li>If collision detected: Stop sending immediately.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Jamming Signal:</strong> Send a brief jamming signal so all other stations know a collision occurred.</li>
                                    <li><strong>Backoff:</strong> Wait for a random amount of time (Binary Exponential Backoff) and go to Step 1.</li>
                                </ol>
                            </div>
                        </ConceptCard>

                        <ConceptCard title="2. CSMA/CA (Carrier Sense Multiple Access / Collision Avoidance)" color="green">
                            <p className="mb-2 text-sm">Used in <strong>Wi-Fi (Wireless)</strong>. Wireless radios cannot transmit and receive at the same time efficiently (Half-duplex nature), so they cannot "detect" collisions like ethernet. They must "avoid" them.</p>
                            
                            <div className="bg-white p-4 rounded border border-green-100 text-sm space-y-3">
                                <strong className="block text-green-800">The Algorithm:</strong>
                                <ol className="list-decimal ml-5 space-y-1 text-slate-700">
                                    <li><strong>Carrier Sense:</strong> Listen to the airwaves.</li>
                                    <li><strong>IFS (Inter-Frame Space):</strong> Even if idle, wait for a short period (IFS) to ensure channel is truly clear.</li>
                                    <li><strong>Contention Window:</strong> Wait a random time slot.</li>
                                    <li><strong>RTS/CTS (Optional):</strong>
                                        <ul className="list-disc ml-4 text-xs text-slate-500">
                                            <li>Sender sends <strong>RTS (Request to Send)</strong> frame.</li>
                                            <li>Access Point sends <strong>CTS (Clear to Send)</strong> frame. This "reserves" the channel and tells other hidden nodes to shut up.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Transmit Data.</strong></li>
                                    <li><strong>ACK:</strong> Receiver must send an Acknowledgement. If no ACK received, assume collision and retry.</li>
                                </ol>
                            </div>
                        </ConceptCard>

                        <ConceptCard title="3. Controlled Access (Token Passing)" color="slate">
                            <p className="text-sm">Stations consult one another to find which station has the right to send. A station cannot send unless it has been authorized by other stations.</p>
                            <ul className="list-disc ml-5 mt-2 text-sm text-slate-600">
                                <li><strong>Token Ring:</strong> A special bit pattern (Token) circulates. You catch the token &rarr; You send data &rarr; You release the token.</li>
                                <li><strong>No collisions</strong> are possible.</li>
                            </ul>
                        </ConceptCard>
                    </div>
                </div>
            )
        },
        {
            id: 'flow-control',
            title: 'Deep Dive: Flow & Error Control',
            content: (
                <div className="space-y-8">
                    <p className="text-slate-600">Data Link Layer isn't just about accessing the media; it's about ensuring the frame gets there intact (Error Control) and doesn't overwhelm the receiver (Flow Control).</p>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                             <ArrowDownUp className="w-5 h-5 text-indigo-500" />
                             Flow Control Mechanisms
                        </h3>
                        <p className="text-sm text-slate-600 mb-4">Preventing a fast sender from drowning a slow receiver.</p>
                        
                        <div className="space-y-4">
                            <div className="border-l-4 border-indigo-300 pl-4">
                                <h5 className="font-bold text-slate-800">1. Stop-and-Wait ARQ</h5>
                                <p className="text-sm text-slate-600">Sender sends 1 Frame &rarr; Stops &rarr; Waits for ACK. Only then sends Frame 2.</p>
                                <p className="text-xs text-red-500 mt-1">Very inefficient. If link is long (high latency), sender spends most time doing nothing.</p>
                            </div>
                            
                            <div className="border-l-4 border-indigo-500 pl-4">
                                <h5 className="font-bold text-slate-800">2. Sliding Window Protocol (Go-Back-N & Selective Repeat)</h5>
                                <p className="text-sm text-slate-600">Sender can send multiple frames (W) before needing an ACK. This "Window" of frames keeps the pipe full.</p>
                                
                                <div className="mt-4 flex items-center gap-2 overflow-x-auto p-4 bg-slate-50 rounded-lg">
                                    <div className="text-xs font-bold text-slate-400 mr-2 flex-shrink-0">Sent/Acked</div>
                                    {[1, 2, 3].map(n => <div key={n} className="w-8 h-8 flex items-center justify-center bg-green-200 text-green-800 rounded font-bold text-xs flex-shrink-0">{n}</div>)}
                                    
                                    <div className="w-1 h-10 bg-blue-500 mx-1 flex-shrink-0"></div> {/* Window Start */}
                                    
                                    {[4, 5, 6, 7].map(n => <div key={n} className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded border border-blue-300 font-bold text-xs flex-shrink-0">{n}</div>)}
                                    
                                    <div className="w-1 h-10 bg-blue-500 mx-1 flex-shrink-0"></div> {/* Window End */}

                                    {[8, 9].map(n => <div key={n} className="w-8 h-8 flex items-center justify-center bg-slate-200 text-slate-500 rounded font-bold text-xs flex-shrink-0">{n}</div>)}
                                    <div className="text-xs font-bold text-slate-400 ml-2 flex-shrink-0">Waiting</div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4 text-xs">
                                    <div className="bg-slate-100 p-2 rounded">
                                        <strong>Go-Back-N:</strong> If Frame 5 is lost, receiver discards 6,7,8. Sender must retransmit 5, 6, 7, 8.
                                    </div>
                                    <div className="bg-slate-100 p-2 rounded">
                                        <strong>Selective Repeat:</strong> If Frame 5 is lost, receiver stores 6,7,8 in buffer. Sender only retransmits 5. (More complex logic).
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                             <AlertTriangle className="w-5 h-5 text-red-500" />
                             Error Detection (Redundancy)
                        </h3>
                        <p className="text-sm text-slate-600 mb-4">Adding extra bits to allow receiver to detect if data is corrupted.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ConceptCard title="Parity Check" color="red">
                                Simple. Add 1 bit to make total number of 1s Even or Odd.
                                <br/><span className="text-xs mt-2 block">Detects single bit errors only. 50% reliable.</span>
                            </ConceptCard>
                            <ConceptCard title="Checksum" color="red">
                                Used in L3 (IP) and L4 (TCP/UDP).
                                <br/>Split data into k segments, sum them up using 1's complement arithmetic. Send the sum. Receiver sums and adds to received checksum. Result should be all 1s.
                            </ConceptCard>
                             <ConceptCard title="CRC (Cyclic Redundancy Check)" color="red">
                                Used in L2 (Ethernet).
                                <br/>Binary Division. Treat data as a polynomial. Divide by a standard divisor (e.g., CRC-32). The Remainder is the FCS. 
                                <br/><span className="text-xs mt-2 block font-bold">Most powerful. Detects burst errors.</span>
                            </ConceptCard>
                        </div>
                    </div>
                </div>
            )
        }
    ]
  },
  {
    id: 'addressing',
    title: 'IP Addressing & Subnetting',
    icon: <Command className="w-5 h-5" />,
    subTopics: [
        {
            id: 'ipv4',
            title: 'Deep Dive: IPv4 Structure',
            content: (
                <div className="space-y-8">
                    <p className="text-slate-600">IP is the heart of the internet. IPv4 is a 32-bit address system. </p>
                    
                    <ConceptCard title="IPv4 Header Anatomy (20 Bytes)" color="green">
                        <div className="grid grid-cols-4 gap-1 text-[10px] md:text-xs font-mono text-center border border-slate-300 bg-slate-50 p-1">
                            {/* Row 1 */}
                            <div className="col-span-1 border p-1 bg-white">Ver (4)</div>
                            <div className="col-span-1 border p-1 bg-white">IHL (4)</div>
                            <div className="col-span-1 border p-1 bg-white">TOS (8)</div>
                            <div className="col-span-1 border p-1 bg-white">Total Length (16)</div>
                            {/* Row 2 */}
                            <div className="col-span-2 border p-1 bg-white">Identification (16)</div>
                            <div className="col-span-1 border p-1 bg-white">Flags (3)</div>
                            <div className="col-span-1 border p-1 bg-white">Frag Offset (13)</div>
                            {/* Row 3 */}
                            <div className="col-span-1 border p-1 bg-white">TTL (8)</div>
                            <div className="col-span-1 border p-1 bg-white">Protocol (8)</div>
                            <div className="col-span-2 border p-1 bg-white">Header Checksum (16)</div>
                            {/* Row 4 */}
                            <div className="col-span-4 border p-2 bg-blue-100 font-bold">Source IP Address (32)</div>
                            {/* Row 5 */}
                            <div className="col-span-4 border p-2 bg-green-100 font-bold">Destination IP Address (32)</div>
                        </div>
                        <ul className="mt-4 text-xs space-y-1 text-slate-700">
                            <li><strong>TTL (Time to Live):</strong> Prevents packets from looping forever. Decremented by 1 at each router. If 0, packet dies.</li>
                            <li><strong>Protocol:</strong> Tells IP what is inside payload (6=TCP, 17=UDP, 1=ICMP).</li>
                            <li><strong>Frag Offset:</strong> Used if packet was chopped up to fit smaller MTU.</li>
                        </ul>
                    </ConceptCard>

                    <ConceptCard title="Private IP Ranges (RFC 1918)" color="red">
                        <p className="text-sm mb-2">To save IPs, these are reserved for internal LANs. They are <strong>non-routable</strong> on the public internet.</p>
                        <ul className="list-disc ml-5 space-y-2 font-mono text-sm">
                            <li><strong>Class A:</strong> 10.0.0.0 - 10.255.255.255 (Big corps)</li>
                            <li><strong>Class B:</strong> 172.16.0.0 - 172.31.255.255 (Universities)</li>
                            <li><strong>Class C:</strong> 192.168.0.0 - 192.168.255.255 (Home/Small Office)</li>
                        </ul>
                    </ConceptCard>

                    <div className="bg-white p-6 rounded-xl border border-slate-200">
                        <h4 className="font-bold mb-4">Special Addresses</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <li className="bg-slate-50 p-3 rounded border border-slate-100">
                                <span className="font-bold text-blue-600">127.0.0.1</span>
                                <br/>Loopback. Tests if your NIC/Driver is working.
                            </li>
                            <li className="bg-slate-50 p-3 rounded border border-slate-100">
                                <span className="font-bold text-blue-600">255.255.255.255</span>
                                <br/>Limited Broadcast. "Everyone in THIS network".
                            </li>
                            <li className="bg-slate-50 p-3 rounded border border-slate-100">
                                <span className="font-bold text-blue-600">0.0.0.0</span>
                                <br/>"This host" (during DHCP) or Default Route.
                            </li>
                            <li className="bg-slate-50 p-3 rounded border border-slate-100">
                                <span className="font-bold text-blue-600">169.254.x.x</span>
                                <br/>APIPA. Assigned by Windows if DHCP fails.
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'subnetting',
            title: 'Deep Dive: Subnetting & CIDR',
            content: (
                <div className="space-y-8">
                    <div className="prose prose-slate">
                        <p><strong>Subnetting</strong> is the practice of borrowing bits from the Host portion of an IP address to create a Sub-network portion. This reduces broadcast traffic and improves security.</p>
                    </div>

                    <ConceptCard title="CIDR Notation (Classless Inter-Domain Routing)" color="indigo">
                        <p className="text-sm mb-4">Instead of rigid classes (A, B, C), we use a suffix <code>/N</code> to indicate how many bits represent the Network.</p>
                        
                        <div className="bg-slate-900 text-green-400 font-mono p-4 rounded-lg overflow-x-auto text-sm">
                            <strong>Example: 192.168.1.0/26</strong>
                            <br/><br/>
                            1. Convert to Binary:<br/>
                            <span className="text-yellow-400">11111111.11111111.11111111.11</span><span className="text-slate-500">000000</span>
                            <br/><br/>
                            2. Analysis:<br/>
                            - Network Bits (1s): 26 (The Mask)<br/>
                            - Host Bits (0s): 32 - 26 = 6<br/>
                            <br/>
                            3. Calculations:<br/>
                            - Total IPs: 2^6 = 64<br/>
                            - Usable IPs: 64 - 2 = 62<br/>
                            - Subnet Mask: 255.255.255.192
                        </div>
                    </ConceptCard>

                    <div className="bg-white p-6 rounded-xl border border-slate-200">
                        <h4 className="font-bold mb-4">Common Subnet Cheat Sheet</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                                    <tr>
                                        <th className="p-2">CIDR</th>
                                        <th className="p-2">Subnet Mask</th>
                                        <th className="p-2">Total IPs</th>
                                        <th className="p-2">Use Case</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr><td className="p-2 font-mono text-blue-600">/32</td><td className="p-2">255.255.255.255</td><td className="p-2">1</td><td className="p-2">Single Host IP</td></tr>
                                    <tr><td className="p-2 font-mono text-blue-600">/30</td><td className="p-2">255.255.255.252</td><td className="p-2">4 (2 usable)</td><td className="p-2">P2P Router Link</td></tr>
                                    <tr><td className="p-2 font-mono text-blue-600">/24</td><td className="p-2">255.255.255.0</td><td className="p-2">256 (254)</td><td className="p-2">Standard LAN</td></tr>
                                    <tr><td className="p-2 font-mono text-blue-600">/16</td><td className="p-2">255.255.0.0</td><td className="p-2">65,536</td><td className="p-2">Large Campus</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <PlacementTip>
                        <strong>Formula:</strong> Usable Hosts = 2^h - 2. <br/>
                        Where <em>h</em> is number of host bits (zeros). <br/>
                        Why -2? <br/>
                        1. <strong>Network Address</strong> (All host bits 0) - Identifies the subnet itself. <br/>
                        2. <strong>Broadcast Address</strong> (All host bits 1) - Used to talk to everyone in that subnet.
                    </PlacementTip>
                </div>
            )
        }
    ]
  },
  {
      id: 'routing',
      title: 'Routing Algorithms',
      icon: <Router className="w-5 h-5" />,
      subTopics: [
          {
              id: 'dv-ls',
              title: 'Deep Dive: Distance Vector vs Link State',
              content: (
                  <div className="space-y-8">
                      <p className="text-slate-600">Routing is the process of selecting the best path for traffic. Dynamic routing protocols automate this by exchanging table information.</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="bg-white p-6 rounded-lg border-t-4 border-purple-500 shadow-sm">
                              <h4 className="font-bold text-purple-700 mb-2 text-lg">Distance Vector (RIP, EIGRP)</h4>
                              <p className="text-sm text-slate-600 mb-4 italic">"Rumor on the wire"</p>
                              
                              <div className="space-y-3 text-sm">
                                  <p><strong>Concept:</strong> Each router tells its neighbors about the networks it can reach and the distance (hops). It knows "Direction" (Vector) and "Distance". It doesn't know the full map.</p>
                                  <div className="bg-slate-50 p-3 rounded">
                                      <strong>Algorithm:</strong> Bellman-Ford
                                  </div>
                                  <ul className="list-disc ml-5 space-y-1 text-slate-700">
                                      <li><strong>Update:</strong> Periodic (e.g., every 30s).</li>
                                      <li><strong>Info:</strong> Full routing table sent to neighbors.</li>
                                      <li><strong>Metric:</strong> Usually Hop Count.</li>
                                      <li><strong>Problem:</strong> Slow convergence. Routing Loops (Count-to-Infinity).</li>
                                  </ul>
                              </div>
                          </div>

                          <div className="bg-white p-6 rounded-lg border-t-4 border-blue-500 shadow-sm">
                              <h4 className="font-bold text-blue-700 mb-2 text-lg">Link State (OSPF, IS-IS)</h4>
                              <p className="text-sm text-slate-600 mb-4 italic">"Full Map of the Territory"</p>
                              
                              <div className="space-y-3 text-sm">
                                  <p><strong>Concept:</strong> Each router floods information about its <em>own links</em> (state) to everyone in the area. Every router builds a complete identical map (Topology Database) and runs logic locally.</p>
                                  <div className="bg-slate-50 p-3 rounded">
                                      <strong>Algorithm:</strong> Dijkstra (Shortest Path First)
                                  </div>
                                  <ul className="list-disc ml-5 space-y-1 text-slate-700">
                                      <li><strong>Update:</strong> Event-triggered (only when change occurs).</li>
                                      <li><strong>Info:</strong> Only link status (LSA) sent.</li>
                                      <li><strong>Metric:</strong> Cost (Bandwidth).</li>
                                      <li><strong>Problem:</strong> CPU/Memory intensive.</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              )
          },
          {
              id: 'protocols-routing',
              title: 'Deep Dive: Protocols (RIP, OSPF, BGP)',
              content: (
                  <div className="space-y-8">
                      <ConceptCard title="AS (Autonomous System)" color="slate">
                          An AS is a collection of networks under a single administrative control (like an ISP or Google). 
                          <br/><strong>IGP (Interior Gateway Protocol):</strong> Routing <em>within</em> an AS (RIP, OSPF).
                          <br/><strong>EGP (Exterior Gateway Protocol):</strong> Routing <em>between</em> AS's (BGP).
                      </ConceptCard>

                      <div className="space-y-6">
                          <div className="border border-slate-200 rounded-lg p-5 bg-white">
                              <div className="flex items-center justify-between mb-2">
                                  <h5 className="font-bold text-lg text-slate-800">RIP (Routing Information Protocol)</h5>
                                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Distance Vector</span>
                              </div>
                              <p className="text-sm text-slate-600 mb-3">Oldest protocol. Uses UDP port 520.</p>
                              <ul className="text-sm space-y-1 text-slate-700 list-disc ml-5">
                                  <li><strong>Max Hops:</strong> 15 (16 is considered infinite/unreachable). Limited network size.</li>
                                  <li><strong>Timers:</strong> Updates every 30s.</li>
                                  <li><strong>Use Case:</strong> Small, simple networks.</li>
                              </ul>
                          </div>

                          <div className="border border-slate-200 rounded-lg p-5 bg-white">
                              <div className="flex items-center justify-between mb-2">
                                  <h5 className="font-bold text-lg text-slate-800">OSPF (Open Shortest Path First)</h5>
                                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Link State</span>
                              </div>
                              <p className="text-sm text-slate-600 mb-3">The Enterprise Standard. Uses IP Protocol 89.</p>
                              <ul className="text-sm space-y-1 text-slate-700 list-disc ml-5">
                                  <li><strong>Hierarchy:</strong> Uses "Areas" to scale. Area 0 is Backbone. All areas must touch Area 0.</li>
                                  <li><strong>Metric:</strong> Cost = Reference BW / Interface BW. (Prefers Fiber over Copper).</li>
                                  <li><strong>Convergence:</strong> Very fast.</li>
                              </ul>
                          </div>

                          <div className="border border-slate-200 rounded-lg p-5 bg-white">
                              <div className="flex items-center justify-between mb-2">
                                  <h5 className="font-bold text-lg text-slate-800">BGP (Border Gateway Protocol)</h5>
                                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Path Vector</span>
                              </div>
                              <p className="text-sm text-slate-600 mb-3">The Protocol of the Internet. Uses TCP port 179.</p>
                              <ul className="text-sm space-y-1 text-slate-700 list-disc ml-5">
                                  <li><strong>Concept:</strong> It doesn't just pick the "fastest" path; it picks the path allowed by <em>policy</em> (politics/money).</li>
                                  <li><strong>Scalability:</strong> Handles the entire internet routing table (1M+ routes).</li>
                                  <li><strong>Slowest:</strong> Changes propagate slowly to prevent internet instability (Route Flapping).</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              )
          }
      ]
  },
  {
    id: 'transport',
    title: 'Transport Layer Protocols',
    icon: <Share2 className="w-5 h-5" />,
    subTopics: [
        {
            id: 'tcp-deep',
            title: 'Deep Dive: TCP & 3-Way Handshake',
            content: (
                <div className="space-y-8">
                    <p className="text-slate-600">TCP (Transmission Control Protocol) is connection-oriented. It guarantees delivery, order, and integrity.</p>
                    
                    <ConceptCard title="TCP Header Anatomy" color="blue">
                        <div className="text-xs font-mono bg-slate-50 p-2 border border-slate-200 grid grid-cols-2 gap-2 text-center">
                            <div className="border bg-white p-1">Source Port (16)</div>
                            <div className="border bg-white p-1">Dest Port (16)</div>
                            <div className="col-span-2 border bg-white p-1">Sequence Number (32)</div>
                            <div className="col-span-2 border bg-white p-1">Acknowledgement Number (32)</div>
                            <div className="col-span-2 border bg-white p-1 flex justify-center gap-2">
                                <span>HLEN</span> <span>Resv</span> 
                                <span className="font-bold text-red-600">FLAGS (SYN,ACK,FIN,RST)</span>
                                <span>Window Size</span>
                            </div>
                            <div className="border bg-white p-1">Checksum</div>
                            <div className="border bg-white p-1">Urgent Pointer</div>
                        </div>
                        <p className="mt-2 text-sm text-slate-700"><strong>Flags</strong> control the state machine. <br/>SYN=Synchronize, ACK=Acknowledge, FIN=Finish, RST=Reset (Abort).</p>
                    </ConceptCard>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                         <h3 className="text-lg font-bold text-slate-800 mb-6">The 3-Way Handshake (Connection Setup)</h3>
                         <div className="relative border-l-2 border-slate-200 ml-4 pl-8 space-y-8">
                             {/* Step 1 */}
                             <div className="relative">
                                 <span className="absolute -left-[41px] bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">1</span>
                                 <h5 className="font-bold text-slate-800">SYN</h5>
                                 <p className="text-sm text-slate-600">Client sends segment with SYN flag = 1. Generates random initial Sequence Number (Seq=x).</p>
                                 <div className="text-xs font-mono text-slate-500 mt-1">State: CLOSED &rarr; SYN_SENT</div>
                             </div>

                             {/* Step 2 */}
                             <div className="relative">
                                 <span className="absolute -left-[41px] bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">2</span>
                                 <h5 className="font-bold text-slate-800">SYN-ACK</h5>
                                 <p className="text-sm text-slate-600">Server receives SYN. Responds with SYN=1, ACK=1. Acknowledges client (Ack=x+1) and sends own Seq=y.</p>
                                 <div className="text-xs font-mono text-slate-500 mt-1">State: LISTEN &rarr; SYN_RCVD</div>
                             </div>

                             {/* Step 3 */}
                             <div className="relative">
                                 <span className="absolute -left-[41px] bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">3</span>
                                 <h5 className="font-bold text-slate-800">ACK</h5>
                                 <p className="text-sm text-slate-600">Client receives SYN-ACK. Sends ACK=1. Acknowledges server (Ack=y+1). Connection Established.</p>
                                 <div className="text-xs font-mono text-slate-500 mt-1">State: ESTABLISHED</div>
                             </div>
                         </div>
                    </div>

                    <ConceptCard title="Congestion Control: Leaky vs Token Bucket" color="purple">
                        <p className="text-sm mb-4">How to handle traffic bursts.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h5 className="font-bold text-purple-900 border-b border-purple-200 mb-2">Leaky Bucket</h5>
                                <p className="text-sm text-slate-700">Imagine a bucket with a small hole at bottom.</p>
                                <ul className="list-disc ml-4 text-xs mt-2 space-y-1">
                                    <li>Input rate can vary (bursty).</li>
                                    <li>Output rate is <strong>Constant</strong> (drops).</li>
                                    <li>Converts bursty traffic into smooth traffic.</li>
                                    <li>If bucket overflows, packets are discarded.</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-bold text-purple-900 border-b border-purple-200 mb-2">Token Bucket</h5>
                                <p className="text-sm text-slate-700">Tokens are added to bucket at fixed rate.</p>
                                <ul className="list-disc ml-4 text-xs mt-2 space-y-1">
                                    <li>To send a packet, you must remove a token.</li>
                                    <li>If bucket has saved tokens, you can send a <strong>Burst</strong>.</li>
                                    <li>Allows bursts but limits average rate.</li>
                                    <li>More flexible than Leaky Bucket.</li>
                                </ul>
                            </div>
                        </div>
                    </ConceptCard>
                </div>
            )
        }
    ]
  },
  {
      id: 'app-layer',
      title: 'Web & App Layer',
      icon: <Database className="w-5 h-5" />,
      subTopics: [
          {
              id: 'http-deep',
              title: 'Deep Dive: HTTP & Web Fundamentals',
              content: (
                  <div className="space-y-8">
                      <p className="text-slate-600">HyperText Transfer Protocol is the foundation of the WWW. It works on a Request-Response model.</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <ConceptCard title="HTTP Methods (Verbs)" color="slate">
                              <ul className="space-y-3 text-sm">
                                  <li>
                                      <strong className="text-blue-600">GET:</strong> Fetch data. Idempotent (safe to repeat). Parameters in URL. Limited size.
                                  </li>
                                  <li>
                                      <strong className="text-green-600">POST:</strong> Submit data (Create). Not idempotent. Payload in Body. Secure (HTTPS).
                                  </li>
                                  <li>
                                      <strong className="text-orange-600">PUT:</strong> Update (Replace) an entire resource. Idempotent.
                                  </li>
                                  <li>
                                      <strong className="text-purple-600">PATCH:</strong> Partial update (Modify).
                                  </li>
                                  <li>
                                      <strong className="text-red-600">DELETE:</strong> Remove resource.
                                  </li>
                              </ul>
                          </ConceptCard>

                          <ConceptCard title="HTTP Status Codes" color="slate">
                              <ul className="space-y-3 text-sm">
                                  <li><strong className="text-green-600">200 OK:</strong> Success.</li>
                                  <li><strong className="text-green-600">201 Created:</strong> Resource made.</li>
                                  <li><strong className="text-blue-600">301 Moved Permanently:</strong> SEO friendly redirect.</li>
                                  <li><strong className="text-orange-600">400 Bad Request:</strong> Client syntax error.</li>
                                  <li><strong className="text-orange-600">401 Unauthorized:</strong> Missing auth token.</li>
                                  <li><strong className="text-orange-600">403 Forbidden:</strong> Token ok, but no permission.</li>
                                  <li><strong className="text-orange-600">404 Not Found:</strong> Resource missing.</li>
                                  <li><strong className="text-red-600">500 Internal Server Error:</strong> Code crashed.</li>
                                  <li><strong className="text-red-600">502 Bad Gateway:</strong> Upstream server failed.</li>
                              </ul>
                          </ConceptCard>
                      </div>

                      <ConceptCard title="DHCP D.O.R.A Process" color="indigo">
                          <p className="text-sm mb-3">How a device gets an IP automatically when connecting to Wi-Fi.</p>
                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs md:text-sm">
                              <div className="bg-indigo-50 p-2 rounded border border-indigo-100">
                                  <div className="font-bold text-indigo-700">1. Discover</div>
                                  <div className="text-slate-500 mt-1">Client &rarr; Broadcast (FF:FF..)</div>
                                  <div className="italic">"Is there a DHCP server?"</div>
                              </div>
                              <div className="bg-indigo-50 p-2 rounded border border-indigo-100">
                                  <div className="font-bold text-indigo-700">2. Offer</div>
                                  <div className="text-slate-500 mt-1">Server &rarr; Unicast/Broadcast</div>
                                  <div className="italic">"Use IP 192.168.1.5"</div>
                              </div>
                              <div className="bg-indigo-50 p-2 rounded border border-indigo-100">
                                  <div className="font-bold text-indigo-700">3. Request</div>
                                  <div className="text-slate-500 mt-1">Client &rarr; Broadcast</div>
                                  <div className="italic">"I take 1.5!"</div>
                              </div>
                              <div className="bg-indigo-50 p-2 rounded border border-indigo-100">
                                  <div className="font-bold text-indigo-700">4. Ack</div>
                                  <div className="text-slate-500 mt-1">Server &rarr; Unicast</div>
                                  <div className="italic">"Confirmed."</div>
                              </div>
                          </div>
                      </ConceptCard>

                      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                          <h4 className="font-bold text-lg mb-4">DNS Resolution Flow</h4>
                          <p className="text-sm text-slate-600 mb-4">User types 'google.com'. What happens?</p>
                          <ol className="list-decimal ml-5 space-y-2 text-sm text-slate-700">
                              <li><strong>Browser Cache:</strong> Check local cache.</li>
                              <li><strong>OS Cache:</strong> Check hosts file / OS cache.</li>
                              <li><strong>Recursive Resolver (ISP):</strong> Ask ISP's DNS.</li>
                              <li><strong>Root Server (.):</strong> ISP asks Root. Root says "Go to .com TLD server".</li>
                              <li><strong>TLD Server (.com):</strong> ISP asks .com server. It says "Go to google's Nameserver".</li>
                              <li><strong>Authoritative Nameserver (google.com):</strong> Has the actual IP. Returns 8.8.8.8.</li>
                              <li><strong>Caching:</strong> ISP caches it. OS caches it. Browser caches it.</li>
                          </ol>
                      </div>
                  </div>
              )
          }
      ]
  },
  {
      id: 'hardware',
      title: 'Hardware & Security',
      icon: <Cpu className="w-5 h-5" />,
      subTopics: [
          {
              id: 'domains',
              title: 'Deep Dive: Hardware & Domains',
              content: (
                  <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                               <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Box size={16}/> Hub (L1)</h4>
                               <p className="text-xs text-slate-600 mb-3">"Dumb" device.</p>
                               <ul className="text-xs list-disc ml-4 space-y-1">
                                   <li>Receives bits on one port, repeats to ALL ports.</li>
                                   <li><strong>Shared bandwidth</strong> (Half duplex).</li>
                                   <li>1 Collision Domain.</li>
                                   <li>1 Broadcast Domain.</li>
                               </ul>
                           </div>
                           <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                               <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2"><Activity size={16}/> Switch (L2)</h4>
                               <p className="text-xs text-slate-600 mb-3">"Intelligent" device.</p>
                               <ul className="text-xs list-disc ml-4 space-y-1">
                                   <li>Learns MAC addresses (MAC Table).</li>
                                   <li>Forwards frame ONLY to destination port.</li>
                                   <li><strong>Dedicated bandwidth</strong> (Full duplex).</li>
                                   <li><strong>N Collision Domains</strong> (Per port).</li>
                                   <li>1 Broadcast Domain (Still passes broadcasts).</li>
                               </ul>
                           </div>
                           <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                               <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2"><Router size={16}/> Router (L3)</h4>
                               <p className="text-xs text-slate-600 mb-3">"Gateway" device.</p>
                               <ul className="text-xs list-disc ml-4 space-y-1">
                                   <li>Routes based on IP address.</li>
                                   <li>Connects different networks (LAN to WAN).</li>
                                   <li>Does NOT forward Broadcasts.</li>
                                   <li><strong>N Broadcast Domains</strong> (Per interface).</li>
                               </ul>
                           </div>
                      </div>

                      <div className="space-y-4">
                          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Lock className="w-5 h-5"/> Network Security Basics</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <ConceptCard title="Firewall" color="red">
                                  A security device that monitors and filters traffic based on rules.
                                  <ul className="list-disc ml-4 mt-2 text-xs">
                                      <li><strong>Packet Filtering:</strong> Inspects header (IP/Port). Stateless.</li>
                                      <li><strong>Stateful Inspection:</strong> Remembers connection state (Context).</li>
                                      <li><strong>Proxy:</strong> Acts as intermediary. Deep packet inspection.</li>
                                  </ul>
                              </ConceptCard>
                              <ConceptCard title="Encryption" color="green">
                                  <ul className="list-disc ml-4 mt-2 text-xs">
                                      <li><strong>Symmetric (AES):</strong> Same key for lock/unlock. Very fast. Used for bulk data (VPN). Key exchange is risky.</li>
                                      <li><strong>Asymmetric (RSA/ECC):</strong> Public Key (Lock) + Private Key (Unlock). Slow. Used to safely exchange the Symmetric Key (Handshake).</li>
                                  </ul>
                              </ConceptCard>
                          </div>
                      </div>

                      <PlacementTip>
                          <strong>Scenario:</strong> <br/>
                          "You connect 5 computers to a <strong>Switch</strong>. How many Collision Domains?" &rarr; <strong>5</strong>. <br/>
                          "You connect 5 computers to a <strong>Hub</strong>. How many Collision Domains?" &rarr; <strong>1</strong>.
                      </PlacementTip>
                  </div>
              )
          }
      ]
  }
];

// --- Interview Questions ---

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  // General
  { id: 1, category: 'General', question: "What is a Link and a Node?", answer: "Link: Physical/Logical connection (cable, Wi-Fi). Node: Device connected to network (PC, Router)." },
  { id: 2, category: 'General', question: "Explain Simplex, Half, Full Duplex.", answer: "Simplex: One way (Radio). Half-Duplex: Two ways, one at a time (Walkie-talkie). Full-Duplex: Simultaneous (Phone)." },
  { id: 3, category: 'General', question: "Throughput vs Bandwidth?", answer: "Bandwidth is theoretical capacity. Throughput is actual speed achieved. Think of Bandwidth as pipe width, Throughput as water flow." },
  { id: 4, category: 'General', question: "Unicast vs Multicast vs Broadcast?", answer: "Unicast: 1-to-1. Multicast: 1-to-Many (Group). Broadcast: 1-to-All." },
  { id: 5, category: 'General', question: "Circuit vs Packet Switching?", answer: "Circuit: Dedicated path, no delay (Phone). Packet: Data chunks, shared path, efficient (Internet)." },

  // OSI / TCP
  { id: 6, category: 'OSI/TCP', question: "7 Layers of OSI?", answer: "Physical, DataLink, Network, Transport, Session, Presentation, Application. (Please Do Not Throw Sausage Pizza Away)." },
  { id: 7, category: 'OSI/TCP', question: "What is Encapsulation?", answer: "Wrapping data with headers as it moves down layers. Data &rarr; Segment &rarr; Packet &rarr; Frame &rarr; Bits." },
  { id: 8, category: 'OSI/TCP', question: "TCP vs UDP?", answer: "TCP: Reliable, Ordered, Slower (Email, Web). UDP: Unreliable, Unordered, Faster (Streaming, Gaming)." },
  { id: 9, category: 'OSI/TCP', question: "Explain 3-Way Handshake.", answer: "SYN (Hello) &rarr; SYN-ACK (Hello Back) &rarr; ACK (Agreed). Establishes reliable connection." },
  { id: 10, category: 'OSI/TCP', question: "What is Flow Control?", answer: "Managing data rate so sender doesn't overwhelm receiver. Uses Sliding Window protocol." },

  // IP Addressing
  { id: 11, category: 'IP/Addressing', question: "What is Subnetting?", answer: "Dividing a network into smaller networks to improve performance (less broadcast) and security." },
  { id: 12, category: 'IP/Addressing', question: "IPv4 vs IPv6?", answer: "IPv4: 32-bit (4.3 billion addresses). IPv6: 128-bit (Hexadecimal, infinite addresses, better security)." },
  { id: 13, category: 'IP/Addressing', question: "Private IP Ranges?", answer: "Class A: 10.x.x.x, Class B: 172.16-31.x.x, Class C: 192.168.x.x. Not routable on internet." },
  { id: 14, category: 'IP/Addressing', question: "What is NAT?", answer: "Network Address Translation. Allows multiple private IPs to share one Public IP." },
  { id: 15, category: 'IP/Addressing', question: "What is ARP?", answer: "Address Resolution Protocol. Maps IP Address (L3) to MAC Address (L2)." },

  // Routing
  { id: 16, category: 'Routing', question: "Distance Vector vs Link State?", answer: "DV (RIP): Sends full table to neighbors, uses hops, slow convergence. LS (OSPF): Sends link status to all, uses Dijkstra, fast convergence." },
  { id: 17, category: 'Routing', question: "What is OSPF?", answer: "Open Shortest Path First. Link-state protocol, uses Areas, Metric is Cost (Bandwidth)." },
  { id: 18, category: 'Routing', question: "What is BGP?", answer: "Border Gateway Protocol. EGP used to route between ISPs (Autonomous Systems). Holds the internet together." },
  { id: 19, category: 'Routing', question: "What is TTL?", answer: "Time To Live. A counter in packet header. Decrements at each router. If 0, packet is discarded (Prevents loops)." },
  { id: 20, category: 'Routing', question: "What is a Default Gateway?", answer: "The router IP that a device sends packets to when destination is outside the local network." },

  // Web / App
  { id: 21, category: 'Web', question: "What happens when you type google.com?", answer: "DNS Resolution &rarr; TCP Handshake &rarr; HTTP Request &rarr; Server Processing &rarr; HTTP Response &rarr; Browser Rendering." },
  { id: 22, category: 'Web', question: "GET vs POST?", answer: "GET: Request data, params in URL, cached. POST: Submit data, params in body, secure, not cached." },
  { id: 23, category: 'Web', question: "HTTP Status 404 vs 500?", answer: "404: Not Found (Client error). 500: Internal Server Error (Server crashed/bug)." },
  { id: 24, category: 'Web', question: "What is a Cookie?", answer: "Small data stored on client by browser. Used for session management (keeping you logged in)." },
  { id: 25, category: 'Web', question: "HTTP vs HTTPS?", answer: "HTTPS is HTTP + SSL/TLS. Encrypts traffic so it cannot be sniffed." },
  { id: 26, category: 'Web', question: "What is DHCP?", answer: "Dynamic Host Configuration Protocol. Assigns IP, Subnet, Gateway to devices automatically (DORA process)." },
  { id: 27, category: 'Web', question: "What is DNS?", answer: "Domain Name System. Translates names (google.com) to IPs (8.8.8.8)." },
  { id: 28, category: 'Web', question: "SMTP vs POP3 vs IMAP?", answer: "SMTP: Sending mail. POP3: Downloading (deletes from server). IMAP: Syncing (keeps on server)." },
  { id: 29, category: 'Web', question: "What is FTP?", answer: "File Transfer Protocol. Used to upload/download files. Ports 20 (Data) & 21 (Control)." },
  { id: 30, category: 'Web', question: "Stateful vs Stateless?", answer: "Stateless (HTTP): Server forgets you after response. Stateful (FTP/Telnet): Server keeps connection open." },

  // Hardware / Security
  { id: 31, category: 'Hardware', question: "Hub vs Switch vs Router?", answer: "Hub: Layer 1, Broadcasts everything. Switch: Layer 2, Intelligent forwarding via MAC. Router: Layer 3, Routes via IP." },
  { id: 32, category: 'Hardware', question: "Collision Domain?", answer: "Area where packets collide. Hub = 1 Domain. Switch = 1 Domain per port." },
  { id: 33, category: 'Hardware', question: "Broadcast Domain?", answer: "Area where broadcast reaches. Switch = 1 Domain. Router breaks it." },
  { id: 34, category: 'Hardware', question: "MAC Address?", answer: "48-bit physical address burned into NIC. Hexadecimal (e.g., 00:1A:2B...)." },
  { id: 35, category: 'Security', question: "What is a Firewall?", answer: "Filters traffic based on rules (IP, Port, Protocol)." },
  { id: 36, category: 'Security', question: "Symmetric vs Asymmetric Encryption?", answer: "Symmetric: Same key locks/unlocks (Fast). Asymmetric: Public to lock, Private to unlock (Secure exchange)." },
  { id: 37, category: 'Security', question: "DoS vs DDoS?", answer: "DoS: One attacker. DDoS: Distributed attackers (Botnet)." },
  { id: 38, category: 'Security', question: "What is Phishing?", answer: "Social engineering to steal credentials via fake emails/sites." },
  { id: 39, category: 'Security', question: "What is VPN?", answer: "Creates encrypted tunnel over public internet. Masks IP." },
  { id: 40, category: 'Security', question: "What is IPsec?", answer: "Suite of protocols to secure IP comms. Authenticates and encrypts packets." },

  // Advanced / Mixed
  { id: 41, category: 'Protocols', question: "What is ICMP?", answer: "Internet Control Message Protocol. Used for error reporting (Ping, Traceroute)." },
  { id: 42, category: 'Protocols', question: "How Traceroute works?", answer: "Sends packets with increasing TTL. Routers reply 'Time Exceeded'. Maps path." },
  { id: 43, category: 'General', question: "What is Latency?", answer: "Time taken for data to travel source to dest." },
  { id: 44, category: 'General', question: "What is MTU?", answer: "Max Transmission Unit. Max packet size (usually 1500 bytes for Ethernet)." },
  { id: 45, category: 'General', question: "What is a Proxy?", answer: "Intermediary. Forward Proxy acts for client (Privacy). Reverse Proxy acts for server (Load Balancing)." },
  { id: 46, category: 'General', question: "CSMA/CD vs CSMA/CA?", answer: "CD (Ethernet): Detects collision, retries. CA (WiFi): Avoids collision via RTS/CTS." },
  { id: 47, category: 'Protocols', question: "What is Token Ring?", answer: "Topology where a 'token' is passed. Only token holder can speak. No collisions." },
  { id: 48, category: 'General', question: "What is Piggybacking?", answer: "Attaching Acknowledgment onto an outgoing data frame to save bandwidth." },
  { id: 49, category: 'General', question: "Loopback Address?", answer: "127.0.0.1. Tests local TCP/IP stack." },
  { id: 50, category: 'General', question: "What is Checksum?", answer: "Value calculated from data to detect errors/corruption during transmission." },
];