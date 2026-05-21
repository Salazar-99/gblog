import { BlogDiagram } from "@/components/blog/blog-diagram";
import { DiagramArrowMarker, FlowArrow } from "@/components/blog/diagrams/flow-arrow";

const ARROW_MARKER_ID = "gaia-metrics-flow-arrow";

const GNODE_X = 172;
const GNODE_WIDTH = 460;
const GNODE_Y = 10;
const GNODE_HEIGHT = 98;
const INNER_NODE_WIDTH = 92;
const INNER_NODE_HEIGHT = 52;
const INNER_NODE_Y = 40;
const INNER_ARROW_LENGTH = 52;
const INNER_ROW_CENTER_Y = INNER_NODE_Y + INNER_NODE_HEIGHT / 2;

const innerSegmentWidth =
  INNER_NODE_WIDTH * 3 + INNER_ARROW_LENGTH * 2;
const innerStartX = GNODE_X + (GNODE_WIDTH - innerSegmentWidth) / 2;

const collectorX = innerStartX;
const clickhouseX = innerStartX + INNER_NODE_WIDTH + INNER_ARROW_LENGTH;
const grafanaX = clickhouseX + INNER_NODE_WIDTH + INNER_ARROW_LENGTH;

function NodeBox({
  x,
  y,
  width,
  height,
  title,
  subtitle,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  subtitle?: string;
}) {
  const centerX = x + width / 2;
  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="8"
        fill="currentColor"
        opacity="0.12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text
        x={centerX}
        y={subtitle ? y + 26 : y + height / 2 + 5}
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fill="currentColor"
      >
        {title}
      </text>
      {subtitle ? (
        <text
          x={centerX}
          y={y + 44}
          textAnchor="middle"
          fontSize="9"
          fill="currentColor"
          opacity="0.75"
        >
          {subtitle}
        </text>
      ) : null}
    </>
  );
}

export function GaiaMetricsFlow() {
  return (
    <BlogDiagram>
      <svg
        viewBox="0 0 640 118"
        fill="currentColor"
        className="w-full max-w-2xl text-foreground"
        role="img"
        aria-label="Training metrics flow from a VM through gaia-metrics to an OpenTelemetry collector, ClickHouse, and Grafana on gnode Kubernetes"
      >
        <defs>
          <DiagramArrowMarker id={ARROW_MARKER_ID} />
        </defs>

        <NodeBox
          x={8}
          y={34}
          width={108}
          height={54}
          title="Training VM"
          subtitle="gaia-metrics"
        />

        <FlowArrow
          x1={122}
          y1={61}
          x2={168}
          y2={61}
          markerId={ARROW_MARKER_ID}
          begin={0}
        />
        <text
          x={145}
          y={50}
          textAnchor="middle"
          fontSize="9"
          fill="currentColor"
          opacity="0.6"
        >
          OTLP
        </text>

        <rect
          x={GNODE_X}
          y={GNODE_Y}
          width={GNODE_WIDTH}
          height={GNODE_HEIGHT}
          rx="10"
          fill="currentColor"
          opacity="0.06"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <text
          x={GNODE_X + GNODE_WIDTH / 2}
          y={28}
          textAnchor="middle"
          fontSize="11"
          fontWeight="600"
          fill="currentColor"
          opacity="0.85"
        >
          gnode k8s
        </text>

        <NodeBox
          x={collectorX}
          y={INNER_NODE_Y}
          width={INNER_NODE_WIDTH}
          height={INNER_NODE_HEIGHT}
          title="OTel Collector"
        />
        <FlowArrow
          x1={collectorX + INNER_NODE_WIDTH}
          y1={INNER_ROW_CENTER_Y}
          x2={clickhouseX}
          y2={INNER_ROW_CENTER_Y}
          markerId={ARROW_MARKER_ID}
          begin={0.8}
        />
        <NodeBox
          x={clickhouseX}
          y={INNER_NODE_Y}
          width={INNER_NODE_WIDTH}
          height={INNER_NODE_HEIGHT}
          title="ClickHouse"
        />
        <FlowArrow
          x1={clickhouseX + INNER_NODE_WIDTH}
          y1={INNER_ROW_CENTER_Y}
          x2={grafanaX}
          y2={INNER_ROW_CENTER_Y}
          markerId={ARROW_MARKER_ID}
          begin={1.6}
        />
        <NodeBox
          x={grafanaX}
          y={INNER_NODE_Y}
          width={INNER_NODE_WIDTH}
          height={INNER_NODE_HEIGHT}
          title="Grafana"
        />
      </svg>
    </BlogDiagram>
  );
}
