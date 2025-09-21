import Image from 'next/image'

interface GalleryProps {
  images: string[]
  projectTitle: string
}

export default function Gallery({ images, projectTitle }: GalleryProps) {
  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
        >
          <Image
            src={image}
            alt={`${projectTitle} - Gallery image ${index + 1}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )
}