import type { Education, Experience, OpenSourceProject } from '$lib/index';

export const experiences: Experience[] = [
	{
		start: '2023',
		end: '2024',
		position: 'Software Engineer',
		company: 'Qwant',
		logo: "Qwant",
		location: "Paris, France",
		projects: [
			{
				name: 'Qwant Maps',
				description: 'Maintaining and rewriting the Qwant Maps stack.',
				techStack: [
					'axum', 'tokio', 'ElasticSearch', 'Postgresql', 'PostGIS', 'OpenStreeMap', 'python', 'Kubernetes', 'ArgoCD'
				],
				methodology: ['Agile', 'Microservice']
			},
			{
				name: 'GeocoderTester',
				description: 'I wrote a tool to benchmark geocoders (google maps, nominatim, mimirsbrunn etc).',
				techStack: [
					'axum', 'svelte', 'Postgresql'
				],
				methodology: ['Agile', 'Microservice']
			},
			{
				name: 'Crawler',
				description: 'I contributed to the crawler engine used at Qwant to index the web.',
				techStack: [
					'grpc', 'tokio'
				],
				methodology: ['Agile', 'Microservice']
			},
			{
				name: 'Foundation',
				description: 'I participated in the elaboration of the qwant map module, displayed in qwant search engine.',
				techStack: [
					'NestJs', 'grpc', "ElasticSearch"
				],
				methodology: ['Agile', 'Microservice']
			},
			{
				name: 'N10',
				description: 'Serving IA models aimed at scoring Qwant search engine result pages against other search engine',
				techStack: [
					'python'
				],
				methodology: ['Agile', 'Monolith']
			}
		]
	},
	{
		start: '2021',
		end: '2022',
		position: 'Software Engineer',
		company: 'Leroy Merlin',
		logo: "LM",
		location: "Lille, France",
		projects: [
			{
				name: 'OAA',
				description: 'Developing multiple APIs for the internal Leroy Merlin services and\n' +
					'maintaining legacy systems',
				techStack: [
					'Java', 'Quarkus', 'Springboot', 'Apache Kafka', 'Github action', 'MongoDB',
					'Kubernetes'
				],
				methodology: ['Agile', 'Microservice', 'OpenAPI']
			}
		]
	},
	{
		start: '2020',
		end: '2021',
		position: 'Software Engineer',
		company: 'Decathlon',
		logo: "Decathlon",
		location: "Lille, France",
		projects: [
			{
				name: 'AoaA',
				description: 'Microservices for retail stock managment. Migrating SAP data to a\n' +
					'distributed and performance oriented solution. High availability and zero\n' +
					'downtime requirement due to the critical nature of the data (about a\n' +
					'million requests per minute).' +
					'maintaining legacy systems',
				techStack: ['Java', 'Quarkus', 'Apache Kafka', 'Jenkins', 'MongoDB', 'Kubernetes', 'Gatling'],
				methodology: ['Agile', 'TDD', 'Microservice', 'OpenAPI']
			}
		]
	},
	{
		start: '2017',
		end: '2019',
		position: 'Software Engineer',
		company: 'Ineat Group',
		logo: "Ineat",
		location: "Lille, France",
		projects: [
			{
				name: 'PS2',
				description: 'A REST API and back-office for a messaging aggregation mobile application\n' +
					'(Twilio, SMS, Whatsapp) made for les Galeries Lafayette.',
				techStack: ['Java', 'Springboot', 'RabbitMQ', 'Android Kotlin', 'Postgresql', 'Jenkins'],
				methodology: ['Agile', 'TDD', 'BDD', 'Monolith', 'Hexagonal Architecture', 'OpenApi']
			},
			{
				name: 'PS2',
				description: 'A rewrite of PS2 . Meant to be sold as a generic product .',
				techStack: ['Java', 'Vert.x', 'Quarkus', 'Apache Kafka', 'Flutter', 'Twilio', 'Kubernetes'],
				methodology: ['Agile', 'TDD', 'Clean Architecture', 'Microservice', 'OpenApi']
			},
			{
				name: 'ELD',
				description: 'Back-office for a travel agency.',
				techStack: ['Java', 'Springboot', 'Postgresql', 'Angular'],
				methodology: ['Agile', 'TDD', 'Clean Architecture', 'Monolith', 'OpenApi']
			}
		]
	},
	{
		start: '2017',
		end: '2018',
		position: 'Software Engineer Intern',
		company: 'Decathlon',
		logo: "Decathlon",
		location: "Lille, France",
		projects: [
			{
				name: 'Search',
				description: 'REST API Proxy for the internal decathlon search engine.',
				techStack: ['SOLR', 'Vert.x', 'Jolt'],
				methodology: ['TDD']
			}
		]
	}
];

export const openSourceProjects: OpenSourceProject[] = [
	{
		name: 'Cocogitto',
		description: 'The Conventional Commits toolbox.',
		ghNameSpace: 'cocogitto/cocogitto',
		website: 'cocogitto.io',
		websiteUrl: 'https://cocogitto.io//'
	},
	{
		name: 'Onagre',
		description: 'A general purpose application launcher for X and wayland inspired by rofi/wofi and alfred.',
		ghNameSpace: 'onagre-launcher/onagre',
		website: 'docs.onagre.dev',
		websiteUrl: 'https://docs.onagre.dev/'
	},
	{
		name: 'Toml Bombadil',
		description: ' A Dotfile manager written in Rust.',
		ghNameSpace: 'oknozor/toml-bombadil',
		website: 'oknozor.github.io/toml-bombadil',
		websiteUrl: 'https://oknozor.github.io/toml-bombadil//'
	},
	{
		name: 'freedesktop-icons',
		description: 'A freedesktop icon lookup implementation.',
		ghNameSpace: 'oknozor/freedesktop-icons'
	},
	{
		name: 'Sealed Test',
		description: 'A procmacro attribute to run your test in an isolated environment.',
		ghNameSpace: 'oknozor/sealed-test'
	},
	{
		name: 'Manucure',
		description: ' A Self-Hosted Alternative to Pocket.',
		ghNameSpace: 'oknozor/manucure'
	},
	{
		name: 'Gill',
		description: 'Free and open-source git-service based on ActivityPub and ForgeFed.',
		ghNameSpace: 'oknozor/gill'
	},
	{
		name: 'Archunit-rs',
		description: 'An architecture testing library inspired by Archunit. ',
		ghNameSpace: 'oknozor/archunit_rs'
	},
	{
		name: 'Musicbrainz Rs',
		description: 'Rust wrapper around the musicbrainz API ',
		ghNameSpace: 'oknozor/musicbrainz_rs'
	}
];

export const educations: Education[] = [
	{
		start: "2018",
		end: "2020",
		logo: "UniversiteDeLille",
		cursus: "MASTER Infrastructure Applicative et Génie Logicie",
		schoolName: "Université de Lille",
		schoolLink: "https://www.univ-lille.fr/",
	},
	{
		start: "2017",
		end: "2018",
		logo: "Cnam",
		cursus: "License STS - Informatique Générale",
		schoolName: "Conservatoire National des Arts et Métiers",
		schoolLink: "https://www.cnam.fr/",
	},
	{
		start: "2016",
		end: "2017",
		cursus: "Formation -Analyste programmeur",
		logo: "Cnam",
		schoolName: "Conservatoire National des Arts et Métiers",
		schoolLink: "https://www.cnam.fr/",
	}
]