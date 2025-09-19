import { Circles } from "react-loader-spinner";

export default function Loading() {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "100%", width: "100%" }}
    >
      <Circles />
    </div>
  );
}
