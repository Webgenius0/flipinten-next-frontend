'use client'

import React, { useState } from 'react';
import { Youtube } from 'lucide-react';

const BannerVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div className="relative w-[604px] h-[340px] bg-black overflow-hidden rounded-lg">
            {isPlaying ? (
                <video controls preload="none" className='w-full h-full'>
                    <source src="../assets/videos/banner-video.mp4" type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={handlePlay}
                >
                    <Youtube className="text-red-600 text-6xl" />
                </div>
            )}
        </div>
    );
};

export default BannerVideo;
