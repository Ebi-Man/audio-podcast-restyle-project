
import React, { useState } from 'react';
import { Pause, Play, Heart, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Podcast {
  id: number;
  title: string;
  artist: string;
  album: string;
  addedBy: string;
  dateAdded: string;
  duration: string;
  isExplicit?: boolean;
  coverImage: string;
}

interface PodcastListProps {
  podcasts: Podcast[];
}

const PodcastList = ({ podcasts }: PodcastListProps) => {
  const [playing, setPlaying] = useState<number | null>(null);
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  
  const togglePlay = (id: number) => {
    if (playing === id) {
      setPlaying(null);
    } else {
      setPlaying(id);
    }
  };
  
  const toggleLike = (id: number) => {
    setLiked(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  return (
    <div className="space-y-2">
      {podcasts.map((podcast, index) => (
        <div 
          key={podcast.id}
          className="grid grid-cols-12 gap-4 px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition-colors items-center text-sm"
        >
          <div className="col-span-1 flex items-center justify-center relative group">
            <span className="group-hover:hidden">{index + 1}</span>
            <button 
              className="hidden group-hover:block focus:outline-none"
              onClick={() => togglePlay(podcast.id)}
              aria-label={playing === podcast.id ? "Pause" : "Play"}
            >
              {playing === podcast.id ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
          
          <div className="col-span-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-700 rounded overflow-hidden flex-shrink-0">
              <img 
                src={podcast.coverImage} 
                alt={`${podcast.title} cover`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-medium">{podcast.title}</div>
              <div className="text-gray-400 text-xs flex items-center gap-1">
                {podcast.isExplicit && (
                  <span className="inline-block bg-gray-500 text-white text-[10px] px-1 rounded">E</span>
                )}
                {podcast.artist}
              </div>
            </div>
          </div>
          
          <div className="col-span-3 hidden md:block text-gray-400">
            {podcast.album}
          </div>
          
          <div className="col-span-2 hidden md:block text-gray-400 truncate">
            {podcast.addedBy}
          </div>
          
          <div className="col-span-1 hidden md:block text-gray-400">
            {podcast.dateAdded}
          </div>
          
          <div className="col-span-1 flex items-center justify-end gap-3">
            <button 
              onClick={() => toggleLike(podcast.id)}
              className="opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-white transition-colors"
              aria-label={liked[podcast.id] ? "Unlike" : "Like"}
            >
              <Heart 
                size={16} 
                className={liked[podcast.id] ? "fill-green-500 text-green-500" : ""} 
              />
            </button>
            <span className="text-gray-400">{podcast.duration}</span>
            <button className="opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-white transition-colors">
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>
      ))}

      <div className="pt-4 mt-4 border-t border-[#333]">
        <div className="flex justify-end">
          <Button variant="link" className="text-blue-400 hover:text-blue-300">
            Generate Full Audio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PodcastList;
