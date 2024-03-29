import {
  PlusIcon,
  MinusIcon,
  EnterFullScreenIcon,
  ExitFullScreenIcon,
} from "@radix-ui/react-icons";
import {
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { useCollageCreatorContext } from "./CollageCreatorContext";
import { useIsDeviceFullscreenCapable } from "@/hooks/useIsDeviceFullscreenCapable";
import { useHasElementScrollbar } from "@/hooks/useHasElementScrollbar";
import {
  CANVAS_MAX_HEIGHT,
  CANVAS_MAX_WIDTH,
  CANVAS_MIN_ZOOM,
} from "./constants";

export const CollageCanvasContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const isInitializedRef = useRef(false);

  const isDeviceFullscreenCapable = useIsDeviceFullscreenCapable();

  const {
    isLoading,
    canvasWidth,
    canvasHeight,
    isFullscreen,
    toggleFullscreen,
    randomizeOrder,
  } = useCollageCreatorContext();
  const [zoom, setZoom] = useState(1);

  const centerCanvas = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      return false;
    }
    container.scrollLeft = (CANVAS_MAX_WIDTH - container.clientWidth) / 2;
    container.scrollTop = (CANVAS_MAX_HEIGHT - container.clientHeight) / 2;
    setZoom(
      Math.max(
        Math.min(
          container.clientWidth / canvasWidth,
          container.clientHeight / canvasHeight,
        ) - 0.05,
        CANVAS_MIN_ZOOM,
      ),
    );
    return true;
  }, [containerRef, canvasWidth, canvasHeight]);

  // Fit canvas inside container on mount and when canvas size changes
  useLayoutEffect(() => {
    if (isInitializedRef.current || isLoading) {
      return;
    }
    isInitializedRef.current = centerCanvas();
    return () => {
      isInitializedRef.current = false;
    };
  }, [isInitializedRef, containerRef, isLoading, centerCanvas]);

  // Zoom on ctrl + scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
        setZoom((prevZoom) =>
          Math.max(prevZoom - event.deltaY * 0.01, CANVAS_MIN_ZOOM),
        );
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [containerRef]);

  const hasElementScrollbar = useHasElementScrollbar(containerRef);

  return (
    <div className="relative mb-2 mt-4 overflow-hidden rounded border border-gray-700 bg-gray-950">
      <div
        className={`absolute top-2 z-10 flex items-center justify-end gap-1 ${hasElementScrollbar ? "right-6" : "right-1.5"}`}
      >
        <Button
          size="xs"
          variant="outline"
          onClick={randomizeOrder}
          className="text-xs"
        >
          Randomize Order
        </Button>
        <ButtonGroup>
          <Button size="xs" onClick={() => setZoom(zoom / 1.25)}>
            <MinusIcon />
          </Button>
          <Button size="xs" onClick={centerCanvas} className="text-xs">
            {zoom !== 1 ? `${Math.round(zoom * 100)}%` : "100%"}
          </Button>
          <Button size="xs" onClick={() => setZoom(zoom * 1.25)}>
            <PlusIcon />
          </Button>
          {isDeviceFullscreenCapable && (
            <Button size="xs" onClick={toggleFullscreen}>
              {isFullscreen ? <ExitFullScreenIcon /> : <EnterFullScreenIcon />}
            </Button>
          )}
        </ButtonGroup>
      </div>
      <div
        ref={containerRef}
        className="w-full overflow-auto scrollbar scrollbar-track-gray-800 scrollbar-thumb-gray-600"
        style={{
          height: isFullscreen ? "calc(100vh - 200px)" : "calc(100vh - 420px)",
        }}
      >
        <div
          ref={innerContainerRef}
          className="flex items-center justify-center overflow-hidden"
          style={{
            width: CANVAS_MAX_WIDTH,
            height: CANVAS_MAX_HEIGHT,
            transform: `scale(${zoom})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
