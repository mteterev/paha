import { NodeProps } from "@xyflow/react";
import { PicNodeType } from "./types";


export const PicNode = ({ data }: NodeProps<PicNodeType>) => {
    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
        width: '150px',
        background: '#fff',
      }}>
        <img
          src={data.imageUrl}
          alt={data.label}
          style={{ width: '100%', borderRadius: '8px' }}
        />
      </div>
    );
  };