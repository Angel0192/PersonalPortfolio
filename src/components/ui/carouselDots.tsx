import { useCarousel } from "@/components/ui/carousel"
import { useEffect, useState } from "react"

const CarouselDots = () => {
    const { api } = useCarousel()
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) return
        setCount(api.scrollSnapList().length)
        setSelectedIndex(api.selectedScrollSnap())

        api.on("select", () => {
            setSelectedIndex(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className="project-sheet-carousel-dots">
            {Array.from({ length: count }).map((_, index) => (
                <button
                    key={index}
                    className={`carousel-dot ${index === selectedIndex ? "active" : ""}`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    )
}

export default CarouselDots