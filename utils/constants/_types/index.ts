export type TSocialList = {
    id: string;
    name: string;
    social_url: string;
    icon: string,
}
export
    type TStackList = {
        id: number,
        icon: string,
        name: string,
        layer: string
    }
export
    type TTechnologies = {
        icon: string,
        name: string
    }
export
    type IProjectList = {
        id: string;
        title: string;
        description: string;
        category: string;
        date: string;
        thumbnail?: string;
        technologies: TTechnologies[];
        images: string[];
        demo_url?: string;
        repo_url?: string[];
    };

export type TExperienceList = {
    id: number,
    position: string,
    company: string,
    duration: string,
    description: string
}


export type TEducationList = {
    id: number,
    position: string,
    company: string,
    duration: string,
    description: string
}