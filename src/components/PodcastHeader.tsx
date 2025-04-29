
import { Clock } from "lucide-react";

const PodcastHeader = () => {
  return (
    <div className="border-b border-[#333]">
      <div className="uppercase text-lg font-bold p-4">
        Available Stories
      </div>
      <div className="grid grid-cols-12 gap-2 px-4 py-2 text-xs text-gray-400 uppercase border-b border-[#333]">
        <div className="col-span-1 text-center">#</div>
        <div className="col-span-4">Title</div>
        <div className="col-span-3 text-center">Preview</div>
        <div className="col-span-2 text-center">Duration</div>
        <div className="col-span-2 text-right pr-2">Date Added</div>
      </div>
    </div>
  );
};

export default PodcastHeader;
