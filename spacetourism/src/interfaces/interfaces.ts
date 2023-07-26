export interface Destination{
    name: string,
    description: string,
    img: string,
    distance: string,
    travelTime: string
}

export interface CrewMember{
    name: string,
    position: string,
    img: string,
    bio: string
}

export interface carouselProps{
    data: CrewMember[]
}