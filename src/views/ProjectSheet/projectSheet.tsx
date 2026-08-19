import { ProjectSheetProps } from "./types"
import './projectSheet.css'
import { createPortal } from "react-dom"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CarouselDots from "../../components/ui/carouselDots"

const ProjectSheet = ({ title, tech, description, link, media, onClose }: ProjectSheetProps) => {
    return createPortal(
        <div className="project-sheet-overlay">
            <div className="project-sheet">
                <div className="project-sheet-content">
                    {/* Header */}
                    <div className="project-sheet-header">
                        <button className="project-sheet-close" onClick={onClose}>X</button>
                        <div className="project-sheet-title">{title}</div>
                        <div className="tech-tag">{tech}</div>
                    </div>

                    {/* Carousel */}
                    {title === "Portfolio Website" ? null : media.length >= 1 ? (
                        <Carousel className="project-sheet-images">
                        <div className="project-sheet-images-clip">
                            <CarouselContent>
                                {media.map((item, index) => (
                                    <CarouselItem key={index}>
                                        <div className="project-sheet-media">
                                            {item.type === "video" ? (
                                                <video src={item.src} controls />
                                            ) : (
                                                <img src={item.src} alt={`${title} screenshot ${index + 1}`} />
                                            )}
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </div>
                        <CarouselPrevious className="project-sheet-carousel-btn" />
                        <CarouselNext className="project-sheet-carousel-btn" />
                        <CarouselDots />
                    </Carousel>
                    ): (
                        <div className="project-sheet-description" >[This project does not yet have any media]</div>
                    )}
                    

                    {/* Description */}
                    <div className="project-sheet-description">{description}</div>

                    {/* GitHub Button */}
                    {link && (
                        <div className="project-sheet-gitlink">
                            <a href={link} target="_blank" rel="noopener noreferrer" className="view-project">
                                GitHub Link
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    )
}

export default ProjectSheet