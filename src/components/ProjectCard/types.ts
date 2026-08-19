export interface ProjectMedia {
    type: "image" | "video"
    src: string
}

export interface ProjectCardProps {
    title: string
    tech: string
    description: string
    link: string
    media: ProjectMedia[]
}

