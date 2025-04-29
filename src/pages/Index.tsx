
import { useState } from "react";
import { Play, Pause, Clock, Heart, MoreHorizontal, Search } from "lucide-react";
import PodcastList from "@/components/PodcastList";
import PodcastHeader from "@/components/PodcastHeader";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Updated podcast data based on the screenshot
  const podcasts = [
    {
      id: 1,
      title: "THE HELL-RAISER'S LAST STAND (MOTHER JONES)",
      artist: "",
      currentTime: "0:01",
      duration: "0:30",
      dateAdded: "0:01 / 0:30",
      coverImage: "/lovable-uploads/7d0cc289-e716-4b20-98d3-0f88321cb724.png"
    },
    {
      id: 2,
      title: "THE SEEKER'S VISION IN HELL (VIKTOR FRANKL)",
      artist: "",
      currentTime: "0:00",
      duration: "0:55",
      dateAdded: "0:00 / 0:55",
      coverImage: "/lovable-uploads/7d0cc289-e716-4b20-98d3-0f88321cb724.png"
    },
    {
      id: 3,
      title: "THE PRISONER WHO BROKE FREE (NELSON MANDELA)",
      artist: "",
      currentTime: "0:00",
      duration: "0:49",
      dateAdded: "0:00 / 0:49",
      coverImage: "/lovable-uploads/7d0cc289-e716-4b20-98d3-0f88321cb724.png"
    },
    {
      id: 4,
      title: "THE NIGHT RUNNER'S DARING ESCAPE (HARRIET TUBMAN)",
      artist: "",
      currentTime: "0:00",
      duration: "0:53",
      dateAdded: "0:00 / 0:53",
      coverImage: "/lovable-uploads/7d0cc289-e716-4b20-98d3-0f88321cb724.png"
    },
    {
      id: 5,
      title: "THE SEAT THAT IGNITED A FIRE (ROSA PARKS)",
      artist: "",
      currentTime: "0:03",
      duration: "0:50",
      dateAdded: "0:03 / 0:50",
      coverImage: "/lovable-uploads/7d0cc289-e716-4b20-98d3-0f88321cb724.png"
    },
    {
      id: 6,
      title: "THE MARCH THAT BROKE AN EMPIRE (MAHATMA GANDHI)",
      artist: "",
      currentTime: "0:00",
      duration: "0:51",
      dateAdded: "0:00 / 0:51",
      coverImage: "/lovable-uploads/7d0cc289-e716-4b20-98d3-0f88321cb724.png"
    },
    {
      id: 7,
      title: "THE RUNNER'S DEFIANT SPRINT (JESSE OWENS)",
      artist: "",
      currentTime: "0:00",
      duration: "0:24",
      dateAdded: "0:00 / 0:24",
      coverImage: "/lovable-uploads/7d0cc289-e716-4b20-98d3-0f88321cb724.png"
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
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
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
