"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause, X, Maximize2 } from "lucide-react"
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
  const [isExpanded, setIsExpanded] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const nextExpandedSlide = () => {
    setExpandedIndex((prev) => (prev + 1) % media.length)
  }

  const prevExpandedSlide = () => {
    setExpandedIndex((prev) => (prev - 1 + media.length) % media.length)
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

  const toggleExpandedPlay = () => {
    const video = document.getElementById(`expanded-video-${expandedIndex}`) as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const openExpanded = (index: number) => {
    setExpandedIndex(index)
    setIsExpanded(true)
  }

  const closeExpanded = () => {
    setIsExpanded(false)
    setIsPlaying(false)
  }

  if (media.length === 0) return null

  const currentMedia = media[currentIndex]
  const expandedMedia = media[expandedIndex]

  return (
    <>
      <div className={`relative ${className}`}>
        {/* Main media display */}
        <div className="relative h-96 bg-black rounded-md overflow-hidden group">
          {currentMedia.type === "image" ? (
            <div className="relative w-full h-full cursor-pointer" onClick={() => openExpanded(currentIndex)}>
              <Image
                src={currentMedia.src || "/placeholder.svg"}
                alt={currentMedia.alt || "Project media"}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              {/* Expand icon overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Maximize2
                  size={32}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"
                />
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <video
                id={`video-${currentIndex}`}
                src={currentMedia.src}
                className="w-full h-full object-cover cursor-pointer"
                controls={false}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onClick={() => openExpanded(currentIndex)}
              />
              <Button
                onClick={togglePlay}
                className="absolute inset-0 w-full h-full bg-black/20 hover:bg-black/40 transition-colors"
                variant="ghost"
              >
                {isPlaying ? <Pause size={48} /> : <Play size={48} />}
              </Button>
              {/* Expand icon for videos */}
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  openExpanded(currentIndex)
                }}
                className="absolute top-2 right-2 bg-black/50 hover:bg-black/70"
                size="icon"
                variant="ghost"
              >
                <Maximize2 size={16} />
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
          <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
            {currentIndex + 1} / {media.length}
          </div>
        </div>

        {/* Caption */}
        {currentMedia.caption && (
          <p className="mt-2 text-sm text-muted-foreground text-center">{currentMedia.caption}</p>
        )}

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

      {/* Expanded Modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-card border border-primary/30 rounded-md overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-border bg-card">
              <h3 className="text-lg font-bold text-primary">
                {expandedMedia.caption || `Media ${expandedIndex + 1} de ${media.length}`}
              </h3>
              <Button
                onClick={closeExpanded}
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-white"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Expanded Media Display */}
            <div className="relative bg-black">
              {expandedMedia.type === "image" ? (
                <div className="relative w-full h-[70vh]">
                  <Image
                    src={expandedMedia.src || "/placeholder.svg"}
                    alt={expandedMedia.alt || "Expanded project media"}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="relative w-full h-[70vh] flex items-center justify-center">
                  <video
                    id={`expanded-video-${expandedIndex}`}
                    src={expandedMedia.src}
                    className="max-w-full max-h-full object-contain"
                    controls={false}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  />
                  <Button
                    onClick={toggleExpandedPlay}
                    className="absolute inset-0 w-full h-full bg-black/20 hover:bg-black/40 transition-colors"
                    variant="ghost"
                  >
                    {isPlaying ? <Pause size={64} /> : <Play size={64} />}
                  </Button>
                </div>
              )}

              {/* Navigation arrows in expanded view */}
              {media.length > 1 && (
                <>
                  <Button
                    onClick={prevExpandedSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
                    size="icon"
                    variant="ghost"
                  >
                    <ChevronLeft size={24} />
                  </Button>
                  <Button
                    onClick={nextExpandedSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
                    size="icon"
                    variant="ghost"
                  >
                    <ChevronRight size={24} />
                  </Button>
                </>
              )}

              {/* Media counter in expanded view */}
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded text-sm">
                {expandedIndex + 1} / {media.length}
              </div>
            </div>

            {/* Expanded Thumbnail Navigation */}
            {media.length > 1 && (
              <div className="p-4 bg-card border-t border-border">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {media.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setExpandedIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden transition-colors ${
                        index === expandedIndex ? "border-primary" : "border-border hover:border-primary/50"
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
                          <Play size={20} className="text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
