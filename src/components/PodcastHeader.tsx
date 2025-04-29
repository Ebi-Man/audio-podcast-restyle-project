
import { Clock } from "lucide-react";

const PodcastHeader = () => {
  return (
    <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm text-gray-400 border-b border-[#333] mb-2">
      <div className="col-span-1 flex items-center justify-center">#</div>
      <div className="col-span-4">TITLE</div>
      <div className="col-span-3 hidden md:block">ALBUM</div>
      <div className="col-span-2 hidden md:block">ADDED BY</div>
      <div className="col-span-1 hidden md:block">DATE</div>
      <div className="col-span-1 flex items-center justify-end">
        <Clock size={16} />
      </div>
    </div>
  );
};

export default PodcastHeader;
