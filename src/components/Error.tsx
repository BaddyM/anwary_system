import { TriangleAlert } from "lucide-react";

export default function ErrorComponent() {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "100%", width: "100%" }}
    >
      <div>
        <div className="flex justify-center">
          <TriangleAlert color="red" className="w-20 h-20 mb-5 text-center" />
        </div>
        <p className="text-center font-bold text-red-500">Sorry, something went wrong!</p>
        <p className="text-center font-bold">
            <i><code>Try again later!</code></i>
        </p>
      </div>
    </div>
  );
}
