type Circle = {
  kind: "circle";
  width: number;
};

type Triangle = {
  kind: "triangle";
  width: number;
  height: number;
};

type Frame = Circle | Triangle;

function getFrmae(frame: Frame) {
  if (frame.kind === "circle") {
    return frame.width;
  }

  return frame.width * frame.height;
}
