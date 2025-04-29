
import React, { useState } from 'react';
import { Play, Pause, Volume, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

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
}

const PodcastList = ({ podcasts }: PodcastListProps) => {
  const [playing, setPlaying] = useState<number | null>(null);
  
  const togglePlay = (id: number) => {
    if (playing === id) {
      setPlaying(null);
    } else {
      setPlaying(id);
    }
  };
  
  return (
    <div className="space-y-1">
      {podcasts.map((podcast) => (
        <div 
          key={podcast.id}
          className="grid grid-cols-12 gap-2 px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition-colors items-center text-xs"
        >
          <div className="col-span-1 flex items-center justify-center">
            <button 
              className="flex items-center justify-center focus:outline-none w-6 h-6"
              onClick={() => togglePlay(podcast.id)}
              aria-label={playing === podcast.id ? "Pause" : "Play"}
            >
              {playing === podcast.id ? <Pause size={14} /> : <Play size={14} />}
            </button>
          </div>
          
          <div className="col-span-8 flex items-center">
            <div className="font-medium uppercase">{podcast.title}</div>
          </div>
          
          <div className="col-span-2 text-right text-gray-400 pr-1">
            {podcast.currentTime && (
              <span>{podcast.currentTime} / </span>
            )}
            <span>{podcast.duration}</span>
          </div>
          
          <div className="col-span-1 flex items-center justify-center">
            <Volume size={14} className="text-gray-400" />
          </div>
          
          <div className="col-span-1">
            <div className="flex items-center justify-end">
              <MoreHorizontal size={14} className="text-gray-400" />
              <Button variant="link" className="text-blue-500 hover:text-blue-400 ml-2 p-0 h-auto text-xs">
                Generate Full Audio
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastList;
