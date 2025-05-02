import { useState } from "react";
import { Play, Pause, Search } from "lucide-react";
import PodcastList from "@/components/PodcastList";
import PodcastHeader from "@/components/PodcastHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  const [podcasts, setPodcasts] = useState([
    {
      id: 1,
      title: "THE HELL-RAISER'S LAST STAND (MOTHER JONES)",
      artist: "",
      currentTime: "0:01",
      duration: "0:30",
      dateAdded: "0:01 / 0:30",
      coverImage: "/lovable-uploads/d58d459f-36d2-40b7-9b4c-bc86eb9c086f.png"
    },
    {
      id: 2,
      title: "THE SEEKER'S VISION IN HELL (VIKTOR FRANKL)",
      artist: "",
      currentTime: "0:00",
      duration: "0:55",
      dateAdded: "0:00 / 0:55",
      coverImage: "/lovable-uploads/d58d459f-36d2-40b7-9b4c-bc86eb9c086f.png"
    },
    {
      id: 3,
      title: "THE PRISONER WHO BROKE FREE (NELSON MANDELA)",
      artist: "",
      currentTime: "0:00",
      duration: "0:49",
      dateAdded: "0:00 / 0:49",
      coverImage: "/lovable-uploads/d58d459f-36d2-40b7-9b4c-bc86eb9c086f.png"
    },
    {
      id: 4,
      title: "THE NIGHT RUNNER'S DARING ESCAPE (HARRIET TUBMAN)",
      artist: "",
      currentTime: "0:00",
      duration: "0:53",
      dateAdded: "0:00 / 0:53",
      coverImage: "/lovable-uploads/d58d459f-36d2-40b7-9b4c-bc86eb9c086f.png"
    },
    {
      id: 5,
      title: "THE SEAT THAT IGNITED A FIRE (ROSA PARKS)",
      artist: "",
      currentTime: "0:03",
      duration: "0:50",
      dateAdded: "0:03 / 0:50",
      coverImage: "/lovable-uploads/d58d459f-36d2-40b7-9b4c-bc86eb9c086f.png"
    },
    {
      id: 6,
      title: "THE MARCH THAT BROKE AN EMPIRE (MAHATMA GANDHI)",
      artist: "",
      currentTime: "0:00",
      duration: "0:51",
      dateAdded: "0:00 / 0:51",
      coverImage: "/lovable-uploads/d58d459f-36d2-40b7-9b4c-bc86eb9c086f.png"
    },
    {
      id: 7,
      title: "THE RUNNER'S DEFIANT SPRINT (JESSE OWENS)",
      artist: "",
      currentTime: "0:00",
      duration: "0:24",
      dateAdded: "0:00 / 0:24",
      coverImage: "/lovable-uploads/d58d459f-36d2-40b7-9b4c-bc86eb9c086f.png"
    }
  ]);

  const handleDeletePodcast = (id: number) => {
    setPodcasts(podcasts.filter(podcast => podcast.id !== id));
    toast("Story deleted", {
      description: "The story has been removed from your list.",
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {isAuthenticated ? (
        <div className="max-w-full">
          <header className="flex justify-center items-center relative py-4 border-b border-[#333]">
            <h1 className="text-2xl font-bold">Master Podcast Generator</h1>
            <Button 
              variant="destructive" 
              size="sm"
              className="absolute right-4"
              onClick={() => setIsAuthenticated(false)}
            >
              Logout
            </Button>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Left Column - Generate Podcast */}
            <div className="bg-[#1a1a1a] rounded-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Generate Podcast</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Choose Niche:</label>
                  <select className="w-full bg-[#2a2a2a] text-white p-3 rounded-sm border border-[#333]">
                    <option value="fear">Fear</option>
                    <option value="wealth">Wealth</option>
                    <option value="health">Health</option>
                    <option value="purpose">Purpose</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Choose Duration:</label>
                  <select className="w-full bg-[#2a2a2a] text-white p-3 rounded-sm border border-[#333]">
                    <option value="30min">30 Minutes</option>
                    <option value="45min">45 Minutes</option>
                    <option value="60min">1 Hour</option>
                  </select>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-sm w-full">
                  Generate Audio
                </Button>
              </form>
            </div>
            
            {/* Right Column - Search & Add Story */}
            <div className="bg-[#1a1a1a] rounded-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Search Books</h2>
              <div className="flex gap-2 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    type="text" 
                    placeholder="Search books e.g., health, wealth..." 
                    className="w-full bg-[#2a2a2a] text-white pl-10 pr-4 py-2 rounded-sm border border-[#333]"
                  />
                </div>
                <Button className="bg-[#333] hover:bg-[#444] rounded-sm">
                  Search
                </Button>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Add a Story</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Title:</label>
                    <Input 
                      type="text" 
                      className="w-full bg-[#2a2a2a] text-white p-2 rounded-sm border border-[#333]" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Historical Figure:</label>
                    <Input 
                      type="text" 
                      className="w-full bg-[#2a2a2a] text-white p-2 rounded-sm border border-[#333]" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Story Content (or URL):</label>
                    <textarea 
                      className="w-full bg-[#2a2a2a] text-white p-2 rounded-sm border border-[#333] h-24 resize-none" 
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700 rounded-sm">
                    Add Story
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Podcast List - Full Width */}
          <div className="mt-4">
            <div className="bg-[#1a1a1a]">
              <PodcastHeader />
              <PodcastList podcasts={podcasts} onDelete={handleDeletePodcast} />
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
                <Input 
                  type="text" 
                  className="w-full bg-[#2a2a2a] text-white p-2 rounded border border-[#333]" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password:</label>
                <Input 
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
