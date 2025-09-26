import {
  BaseEdge,
  EdgeProps,
  getSmoothStepPath,
  Position,
} from "@xyflow/react";

export default function SchemaEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition: sourcePosition || Position.Bottom,
    targetX,
    targetY,
    targetPosition: targetPosition || Position.Top,
    borderRadius: 8, // Increased border radius for smoother corners
  });

  return <BaseEdge path={edgePath} style={style} markerEnd={markerEnd} />;
}
