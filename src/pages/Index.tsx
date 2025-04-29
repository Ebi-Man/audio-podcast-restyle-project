
import { useState } from "react";
import { Play, Pause, Clock, Heart, MoreHorizontal, Search } from "lucide-react";
import PodcastList from "@/components/PodcastList";
import PodcastHeader from "@/components/PodcastHeader";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Mock podcast data based on the screenshot
  const podcasts = [
    {
      id: 1,
      title: "Head & Heart",
      artist: "Joel Corry, MNEK",
      album: "Head & Heart (feat. MNEK)",
      addedBy: "pup31wjhxgolpjor31ctxw...",
      dateAdded: "Sep 15, 2020",
      duration: "2:46",
      coverImage: "/lovable-uploads/fb1f149e-f479-4ed9-b359-8e249b6af995.png"
    },
    {
      id: 2,
      title: "No Love",
      artist: "Eminem, Lil Wayne",
      album: "Recovery",
      addedBy: "pup31wjhxgolpjor31ctxw...",
      dateAdded: "Sep 15, 2020",
      duration: "4:59",
      isExplicit: true,
      coverImage: "/lovable-uploads/fb1f149e-f479-4ed9-b359-8e249b6af995.png"
    },
    {
      id: 3,
      title: "How To Love",
      artist: "Lil Wayne",
      album: "Tha Carter IV (Explicit Version)",
      addedBy: "pup31wjhxgolpjor31ctxw...",
      dateAdded: "Sep 15, 2020",
      duration: "4:00",
      coverImage: "/lovable-uploads/fb1f149e-f479-4ed9-b359-8e249b6af995.png"
    },
    {
      id: 4,
      title: "Lollipop",
      artist: "Lil Wayne, Static Major",
      album: "Tha Carter III",
      addedBy: "pup31wjhxgolpjor31ctxw...",
      dateAdded: "Sep 15, 2020",
      duration: "4:59",
      isExplicit: true,
      coverImage: "/lovable-uploads/fb1f149e-f479-4ed9-b359-8e249b6af995.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {isAuthenticated ? (
        <div className="container mx-auto p-4 max-w-full">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Master Podcast Generator</h1>
            <div className="flex justify-between items-center">
              <Button 
                variant="destructive" 
                size="sm"
                onClick={() => setIsAuthenticated(false)}
              >
                Logout
              </Button>
            </div>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-[#1a1a1a] rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Generate Podcast</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Choose Niche:</label>
                    <select className="w-full bg-[#2a2a2a] text-white p-2 rounded border border-[#333]">
                      <option value="fear">Fear</option>
                      <option value="wealth">Wealth</option>
                      <option value="health">Health</option>
                      <option value="purpose">Purpose</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Choose Duration:</label>
                    <select className="w-full bg-[#2a2a2a] text-white p-2 rounded border border-[#333]">
                      <option value="30min">30 Minutes</option>
                      <option value="45min">45 Minutes</option>
                      <option value="60min">1 Hour</option>
                    </select>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Generate Audio
                  </Button>
                </form>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6">
                <SearchBar />
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="bg-[#1a1a1a] rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Available Episodes</h2>
                <PodcastHeader />
                <PodcastList podcasts={podcasts} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-3xl font-bold mb-6 text-center">Master Podcast</h1>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Username:</label>
                <input 
                  type="text" 
                  className="w-full bg-[#2a2a2a] text-white p-2 rounded border border-[#333]" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password:</label>
                <input 
                  type="password" 
                  className="w-full bg-[#2a2a2a] text-white p-2 rounded border border-[#333]" 
                  required
                />
              </div>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => setIsAuthenticated(true)}
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
