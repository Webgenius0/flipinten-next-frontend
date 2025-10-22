'use client'

import Video from 'next-video'
import bannerVideo from '../../../videos/banner-video.mp4'
import { useRef, useState } from 'react'
import Youtube from '../svg/Youtube'

const BannerVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play()
        }
    }


    return (
        <div className="relative w-[604px] h-[340px] bg-black overflow-hidden rounded-2xl border-4 border-primary shadow-[0_50px_30px_-28px_rgba(92,92,92,0.36)]">
            <Video
                ref={videoRef}
                src={bannerVideo}
                controls={isPlaying}
                autoPlay={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />


            {/* play button  */}
            {!isPlaying && (
                <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center w-full h-full"
                >
                    <Youtube />
                </button>
            )}
        </div>
    )
}

export default BannerVideo