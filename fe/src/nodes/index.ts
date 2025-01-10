import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { AppNode } from './types';
import { PicNode } from './picNode';

export const initialNodes: AppNode[] = [
  {
    id: '1',
    type: 'pic-node',
    data: { label: 'Node 1', imageUrl: 'https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=' },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'pic-node',
    data: { label: 'Node 2', imageUrl: 'https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=' },
    position: { x: 300, y: 200 },
  },
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'pic-node': PicNode
  // Add any of your custom nodes here!
} satisfies NodeTypes;
