
import React, { useState } from 'react';
import { Play, Pause, MoreHorizontal, Volume, Trash2 } from "lucide-react";

interface Podcast {
  id: number;
  title: string;
  artist: string;
  album?: string;
  addedBy?: string;
  dateAdded?: string;
  duration: string;
  currentTime?: string;
  isExplicit?: boolean;
  coverImage?: string;
}

interface PodcastListProps {
  podcasts: Podcast[];
  onDelete?: (id: number) => void;
}

const PodcastList = ({ podcasts, onDelete }: PodcastListProps) => {
  const [playing, setPlaying] = useState<number | null>(null);
  
  const togglePlay = (id: number) => {
    if (playing === id) {
      setPlaying(null);
    } else {
      setPlaying(id);
    }
  };

  const handleDelete = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(id);
    }
  };
  
  return (
    <div className="space-y-0">
      {podcasts.map((podcast) => (
        <div 
          key={podcast.id}
          className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[#333] hover:bg-[#2a2a2a] transition-colors items-center text-xs"
        >
          <div className="col-span-1 text-center text-gray-400">
            {podcast.id}
          </div>
          
          <div className="col-span-4 flex items-center">
            <div className="font-medium uppercase text-white">{podcast.title}</div>
          </div>
          
          <div className="col-span-3 flex items-center justify-center space-x-2">
            <button 
              className="flex items-center justify-center p-1 rounded-full hover:bg-[#333] w-7 h-7 transition-colors"
              onClick={() => togglePlay(podcast.id)}
              aria-label={playing === podcast.id ? "Pause" : "Play"}
            >
              {playing === podcast.id ? 
                <Pause size={12} className="text-white" /> : 
                <Play size={12} className="text-white ml-0.5" />
              }
            </button>
            
            <div className="flex items-center space-x-1.5">
              <MoreHorizontal size={12} className="text-gray-400" />
              <button className="text-blue-500 hover:text-blue-400 text-xs">
                Generate Full Audio
              </button>
            </div>
          </div>
          
          <div className="col-span-2 text-center text-gray-400">
            {podcast.currentTime || "0:00"} / {podcast.duration}
          </div>
          
          <div className="col-span-1 text-right text-gray-400 flex items-center justify-end">
            <span>{podcast.currentTime || "0:00"} / {podcast.duration}</span>
            <Volume size={12} className="text-gray-400 ml-2" />
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <button
              className="flex items-center justify-center p-1 rounded-full hover:bg-red-500 hover:bg-opacity-20 w-7 h-7 transition-colors group"
              onClick={(e) => handleDelete(podcast.id, e)}
              aria-label="Delete"
            >
              <Trash2 size={16} className="text-gray-400 group-hover:text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastList;
