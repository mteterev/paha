import {
  ReactFlow,
  Background,
  useNodesState,
  Controls,
  SnapGrid,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from './nodes';

export default function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);

  const snapGrid: SnapGrid = [20, 20];

  return (
    <div style={{ height: '100vh' }}>
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      fitView
      snapToGrid
      snapGrid={snapGrid}
    >
      <Background color="#aaa" gap={16} />
      <Controls />
    </ReactFlow>
  </div>
  );
}
