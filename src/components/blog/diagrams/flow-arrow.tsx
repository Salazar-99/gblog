export const FLOW_DURATION = 5;

const arrowTrackClass = "text-neutral-300 dark:text-white/40";
const arrowDotClass =
  "diagram-flow-dot text-neutral-400 dark:text-white/55";

const DOT_LENGTH = 4;

type FlowArrowProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  markerId: string;
  duration?: number;
  begin?: number;
};

export function DiagramArrowMarker({ id }: { id: string }) {
  return (
    <marker
      id={id}
      markerWidth="5"
      markerHeight="5"
      refX="4.5"
      refY="2.5"
      orient="auto"
    >
      <path d="M0,0 L5,2.5 L0,5 Z" fill="currentColor" />
    </marker>
  );
}

function insetEndpoints(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  inset: number,
) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.hypot(dx, dy) || 1;
  const ux = dx / length;
  const uy = dy / length;
  return {
    x1: x1 + ux * inset,
    y1: y1 + uy * inset,
    x2: x2 - ux * inset,
    y2: y2 - uy * inset,
  };
}

function MovingDot({
  x1,
  y1,
  x2,
  y2,
  pathLength,
  duration,
  begin,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  pathLength: number;
  duration: number;
  begin: number;
}) {
  const dur = `${duration}s`;
  const gap = Math.max(pathLength - DOT_LENGTH, 1);

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className={arrowDotClass}
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray={`${DOT_LENGTH} ${gap}`}
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to={String(-pathLength)}
        dur={dur}
        begin={`${begin}s`}
        repeatCount="indefinite"
        calcMode="linear"
      />
    </line>
  );
}

export function FlowArrow({
  x1,
  y1,
  x2,
  y2,
  markerId,
  duration = FLOW_DURATION,
  begin = 0,
}: FlowArrowProps) {
  const { x1: ax1, y1: ay1, x2: ax2, y2: ay2 } = insetEndpoints(
    x1,
    y1,
    x2,
    y2,
    5,
  );
  const pathLength = Math.hypot(ax2 - ax1, ay2 - ay1);

  return (
    <g>
      <line
        x1={ax1}
        y1={ay1}
        x2={ax2}
        y2={ay2}
        className={arrowTrackClass}
        stroke="currentColor"
        strokeWidth="1.5"
        markerEnd={`url(#${markerId})`}
      />
      {[0, 0.5].map((phase) => (
        <MovingDot
          key={phase}
          x1={ax1}
          y1={ay1}
          x2={ax2}
          y2={ay2}
          pathLength={pathLength}
          duration={duration}
          begin={begin + duration * phase}
        />
      ))}
    </g>
  );
}
