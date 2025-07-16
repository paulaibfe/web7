"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MediaItem {
  type: "image" | "video"
  src: string
  alt?: string
  caption?: string
}

interface MediaCarouselProps {
  media: MediaItem[]
  className?: string
}

export function MediaCarousel({ media, className = "" }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const togglePlay = () => {
    const video = document.getElementById(`video-${currentIndex}`) as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  if (media.length === 0) return null

  const currentMedia = media[currentIndex]

  return (
    <div className={`relative ${className}`}>
      {/* Main media display */}
      <div className="relative h-96 bg-black rounded-md overflow-hidden">
        {currentMedia.type === "image" ? (
          <Image
            src={currentMedia.src || "/placeholder.svg"}
            alt={currentMedia.alt || "Project media"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="relative w-full h-full">
            <video
              id={`video-${currentIndex}`}
              src={currentMedia.src}
              className="w-full h-full object-cover"
              controls={false}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
            <Button
              onClick={togglePlay}
              className="absolute inset-0 w-full h-full bg-black/20 hover:bg-black/40 transition-colors"
              variant="ghost"
            >
              {isPlaying ? <Pause size={48} /> : <Play size={48} />}
            </Button>
          </div>
        )}

        {/* Navigation arrows */}
        {media.length > 1 && (
          <>
            <Button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
              size="icon"
              variant="ghost"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
              size="icon"
              variant="ghost"
            >
              <ChevronRight size={20} />
            </Button>
          </>
        )}

        {/* Media counter */}
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
          {currentIndex + 1} / {media.length}
        </div>
      </div>

      {/* Caption */}
      {currentMedia.caption && <p className="mt-2 text-sm text-muted-foreground text-center">{currentMedia.caption}</p>}

      {/* Thumbnail navigation */}
      {media.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-colors ${
                index === currentIndex ? "border-primary" : "border-border hover:border-primary/50"
              }`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt || "Thumbnail"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="relative w-full h-full bg-black flex items-center justify-center">
                  <Play size={16} className="text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
