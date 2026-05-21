import { BlogDiagram } from "@/components/blog/blog-diagram";
import { DiagramArrowMarker, FlowArrow } from "@/components/blog/diagrams/flow-arrow";

const ARROW_MARKER_ID = "gcs-tpu-flow-arrow";

const REGION_X = 4;
const REGION_Y = 10;
const REGION_PADDING_LEFT = 16;
const REGION_PADDING_RIGHT = 16;
const REGION_PADDING_BOTTOM = 14;
const BLOCK_Y = 34;
const BLOCK_WIDTH = 140;
const BLOCK_HEIGHT = 64;
const BLOCK_GAP = 88;
const GCS_X = REGION_X + REGION_PADDING_LEFT;
const TPU_X = GCS_X + BLOCK_WIDTH + BLOCK_GAP;
const REGION_WIDTH =
  TPU_X + BLOCK_WIDTH + REGION_PADDING_RIGHT - REGION_X;
const REGION_HEIGHT = BLOCK_Y + BLOCK_HEIGHT + REGION_PADDING_BOTTOM - REGION_Y;
const ROW_CENTER_Y = BLOCK_Y + BLOCK_HEIGHT / 2;

export function GcsTpuFlow() {
  return (
    <BlogDiagram>
      <svg
        viewBox="0 0 520 118"
        fill="currentColor"
        className="w-full max-w-lg text-foreground"
        role="img"
        aria-label="Tokenized shards stream from GCS into a TPU VM for training within a GCP region"
      >
        <defs>
          <DiagramArrowMarker id={ARROW_MARKER_ID} />
        </defs>

        <rect
          x={REGION_X}
          y={REGION_Y}
          width={REGION_WIDTH}
          height={REGION_HEIGHT}
          rx="10"
          fill="currentColor"
          opacity="0.06"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <text
          x={REGION_X + REGION_WIDTH / 2}
          y={28}
          textAnchor="middle"
          fontSize="11"
          fontWeight="600"
          fill="currentColor"
          opacity="0.85"
        >
          GCP Region
        </text>

        <rect
          x={GCS_X}
          y={BLOCK_Y}
          width={BLOCK_WIDTH}
          height={BLOCK_HEIGHT}
          rx="8"
          fill="currentColor"
          opacity="0.12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text
          x={GCS_X + BLOCK_WIDTH / 2}
          y={BLOCK_Y + 26}
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          fill="currentColor"
        >
          GCS Bucket
        </text>
        <text
          x={GCS_X + BLOCK_WIDTH / 2}
          y={BLOCK_Y + 44}
          textAnchor="middle"
          fontSize="10"
          fill="currentColor"
          opacity="0.75"
        >
          tokens-*.arrayrecord
        </text>
        <FlowArrow
          x1={GCS_X + BLOCK_WIDTH + 8}
          y1={ROW_CENTER_Y}
          x2={TPU_X - 8}
          y2={ROW_CENTER_Y}
          markerId={ARROW_MARKER_ID}
          begin={0}
        />
        <text
          x={(GCS_X + BLOCK_WIDTH + TPU_X) / 2}
          y={BLOCK_Y + 20}
          textAnchor="middle"
          fontSize="9"
          fill="currentColor"
          opacity="0.6"
        >
          Grain stream
        </text>
        <rect
          x={TPU_X}
          y={BLOCK_Y}
          width={BLOCK_WIDTH}
          height={BLOCK_HEIGHT}
          rx="8"
          fill="currentColor"
          opacity="0.12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text
          x={TPU_X + BLOCK_WIDTH / 2}
          y={BLOCK_Y + 26}
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          fill="currentColor"
        >
          TPU VM
        </text>
        <text
          x={TPU_X + BLOCK_WIDTH / 2}
          y={BLOCK_Y + 44}
          textAnchor="middle"
          fontSize="10"
          fill="currentColor"
          opacity="0.75"
        >
          JAX
        </text>
      </svg>
    </BlogDiagram>
  );
}
