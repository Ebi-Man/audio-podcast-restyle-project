
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Search Books</h2>
      <div className="flex gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search books e.g., health, wealth..." 
            className="w-full bg-[#2a2a2a] text-white pl-10 pr-4 py-2 rounded-md border border-[#333] focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
        <Button className="bg-[#333] hover:bg-[#444]">
          Search
        </Button>
      </div>
      
      <div className="mt-4">
        <h3 className="font-medium mb-2">Add a Story</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Title:</label>
            <input 
              type="text" 
              className="w-full bg-[#2a2a2a] text-white p-2 rounded-md border border-[#333]" 
            />
          </div>
          
          <div>
            <label className="block text-xs text-gray-400 mb-1">Historical Figure:</label>
            <input 
              type="text" 
              className="w-full bg-[#2a2a2a] text-white p-2 rounded-md border border-[#333]" 
            />
          </div>
          
          <div>
            <label className="block text-xs text-gray-400 mb-1">Story Content (or URL):</label>
            <textarea 
              className="w-full bg-[#2a2a2a] text-white p-2 rounded-md border border-[#333] h-24 resize-none" 
            ></textarea>
          </div>
          
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Add Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
