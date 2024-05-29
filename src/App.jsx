import './App.css';
import Header from "./components/Header.jsx";
import SideBar from './components/SideBar';
import Flow from './components/Flow';
import { Toaster } from 'sonner';
import { useState, useCallback } from 'react';
import ReactFlow, { Background, Controls, addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';

import TextUpdaterNode from './components/TextUpdaterNode';

// import './text-updater-node.css';

const initialNodes = [
  { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
  { id: 'node-2', type: 'textUpdater', position: { x: 200, y: 200 }, data: { value: 456 } },
];

const nodeTypes = { textUpdater: TextUpdaterNode };

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const addNode = () => {
    const newNode = {
      id: `node-${nodes.length + 1}`,
      type: 'textUpdater',
      position: { x: Math.random() * 400, y: Math.random() * 400 }, // random position for demo
      data: { value: Math.floor(Math.random() * 1000) } // random value for demo
    };
    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <>
      <div>
        <Header />
        <div className="flex h-screen">
          <main className="w-full mx-auto">
            <Flow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
            />
          </main>
          <div className="z-10 bg-background flex fixed right-0 h-full">
            <SideBar addNode={addNode} />
          </div>
        </div>
        <Toaster position='bottom-left' />
      </div>
    </>
  );
}

export default App;
