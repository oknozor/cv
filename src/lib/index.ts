export interface Experience {
	start: string,
	end: string,
	position: string,
	company: string
	location: string
	logo: string,
	projects: ProfessionalProject[]
}

export interface ProfessionalProject {
	name: string,
	description: string,
	techStack: string[],
	methodology: string[]
}

export interface Education {
	schoolName: string,
	schoolLink: string,
	logo: string,
	cursus: string
	start: string,
	end: string,
}
export interface OpenSourceProject {
	name: string,
	ghNameSpace: string
	description: string
	website?: string,
	websiteUrl?: string,
}