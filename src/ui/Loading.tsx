import { ColorRing } from "react-loader-spinner";

type props = {
  width?: string;
  height?: string;
};

function Loading({ width = "75", height = "40" }: props) {
  return (
    <ColorRing
      visible={true}
      height={width}
      width={height}
      ariaLabel='color-ring-loading'
      wrapperStyle={{}}
      wrapperClass='color-ring-wrapper'
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
}

export default Loading;
