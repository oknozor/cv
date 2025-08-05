import type { Education, Experience, OpenSourceProject } from '$lib/index';

export const experiences: Experience[] = [
	{
		start: '2024',
		end: '2025',
		position: 'Senior Software Engineer',
		company: 'Agicap',
		logo: 'Agicap',
		location: 'Lyon, France',
		projects: [
			{
				name: 'Business Aggregator',
				description:
					'Developing a comprehensive business document aggregation platform, integrating with 28+ business management software including Odoo, ZohoInvoice, OracleNetSuite, and Sage.',
				techStack: [
					'C#',
					'Dotnet',
					'PostgreSQL',
					'RabbitMQ',
					'ArgoCD',
					'Kubernetes',
					'Redis',
					'Docker'
				],
				methodology: ['DDD', 'Microservice', 'OpenAPI', 'Monorepo', 'Event Sourcing']
			}
		]
	},
	{
		start: '2023',
		end: '2024',
		position: 'Senior Software Engineer',
		company: 'Qwant',
		logo: 'Qwant',
		location: 'Paris, France',
		projects: [
			{
				name: 'Qwant Maps',
				description:
					'Led the complete architectural overhaul of Qwant Maps, implementing high-performance geospatial services serving high-volume daily requests with sub-100ms response times.',
				techStack: [
					'Rust',
					'axum',
					'tokio',
					'ElasticSearch',
					'Postgresql',
					'PostGIS',
					'OpenStreetMap',
					'Python',
					'Kubernetes',
					'ArgoCD',
					'Redis'
				],
				methodology: ['Agile', 'Microservice', 'Performance Engineering']
			},
			{
				name: 'GeocoderTester',
				description:
					'Developed a comprehensive benchmarking platform for geocoding services, enabling data-driven decisions for mapping accuracy improvements for our own geocoder Mimirsbrunn.',
				techStack: ['Rust', 'axum', 'SvelteKit', 'PostgreSQL', 'TypeScript'],
				methodology: ['Agile', 'Microservice', 'Test-Driven Development']
			},
			{
				name: 'Web Crawler Engine',
				description:
					'Enhanced the distributed web crawler engine with advanced rate limiting and content deduplication',
				techStack: ['Rust', 'gRPC', 'tokio', 'ScyllaDB'],
				methodology: ['Agile', 'Microservice', 'Distributed Systems']
			},
			{
				name: 'Search Foundation',
				description:
					"Architected the core search infrastructure powering Qwant's map integration, implementing advanced relevance scoring and geospatial search capabilities.",
				techStack: ['NestJS', 'gRPC', 'ElasticSearch', 'TypeScript'],
				methodology: ['Agile', 'Microservice', 'Search Engineering']
			},
			{
				name: 'AI Model Serving Platform',
				description:
					'Built scalable ML model serving infrastructure for search result quality assessment and ranking optimization against competitor search engines.',
				techStack: ['Python', 'FastAPI', 'PyTorch', 'Docker', 'Kubernetes'],
				methodology: ['Agile', 'MLOps', 'A/B Testing']
			}
		]
	},
	{
		start: '2021',
		end: '2022',
		position: 'Software Engineer',
		company: 'Leroy Merlin',
		logo: 'LM',
		location: 'Lille, France',
		projects: [
			{
				name: 'OAA',
				description:
					'Developed and maintained multiple high-performance APIs for internal Leroy Merlin service ecosystem, ensuring seamless integration while modernizing and supporting critical legacy system infrastructure.',
				techStack: [
					'Java',
					'Quarkus',
					'Spring Boot',
					'Apache Kafka',
					'GitHub Actions',
					'MongoDB',
					'Kubernetes',
					'Istio'
				],
				methodology: ['Agile', 'Microservice', 'OpenAPI', 'Event-Driven Architecture']
			}
		]
	},
	{
		start: '2020',
		end: '2021',
		position: 'Software Engineer',
		company: 'Decathlon',
		logo: 'Decathlon',
		location: 'Lille, France',
		projects: [
			{
				name: 'Global Inventory Management System',
				description:
					'Spearheaded the migration from legacy SAP systems to cloud-native microservices architecture, handling 1M+ requests per minute across 70+ countries. Achieved 99.99% uptime with zero-downtime deployments for critical retail operations.',
				techStack: [
					'Java',
					'Quarkus',
					'Apache Kafka',
					'Jenkins',
					'MongoDB',
					'Kubernetes',
					'Gatling',
					'Prometheus'
				],
				methodology: ['Agile', 'TDD', 'Microservice', 'OpenAPI', 'Site Reliability Engineering']
			}
		]
	},
	{
		start: '2017',
		end: '2019',
		position: 'Full Stack Software Engineer',
		company: 'Ineat Group',
		logo: 'Ineat',
		location: 'Lille, France',
		projects: [
			{
				name: 'Omnichannel Messaging Platform',
				description:
					'Built enterprise messaging aggregation platform for Galeries Lafayette, integrating SMS, WhatsApp, and push notifications with advanced analytics and customer segmentation.',
				techStack: ['Java', 'Spring Boot', 'RabbitMQ', 'Kotlin', 'PostgreSQL', 'Jenkins', 'React'],
				methodology: ['Agile', 'TDD', 'BDD', 'Hexagonal Architecture', 'OpenAPI']
			},
			{
				name: 'SaaS Messaging Suite',
				description:
					'Led the complete rewrite of the messaging platform as a multi-tenant SaaS solution with advanced scalability and customization features.',
				techStack: ['Java', 'Vert.x', 'Quarkus', 'Apache Kafka', 'Flutter', 'Twilio', 'Kubernetes'],
				methodology: ['Agile', 'TDD', 'Clean Architecture', 'Microservice', 'OpenAPI']
			},
			{
				name: 'Travel Management System',
				description:
					'Developed comprehensive back-office solution for travel agency operations with booking management and customer relationship features.',
				techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'TypeScript'],
				methodology: ['Agile', 'TDD', 'Clean Architecture', 'Monolith', 'OpenAPI']
			}
		]
	},
	{
		start: '2017',
		end: '2018',
		position: 'Software Engineer Intern',
		company: 'Decathlon',
		logo: 'Decathlon',
		location: 'Lille, France',
		projects: [
			{
				name: 'Enterprise Search API',
				description:
					"Developed high-performance REST API proxy for Decathlon's internal search engine with advanced caching and transformation capabilities.",
				techStack: ['Apache Solr', 'Vert.x', 'Jolt', 'Redis'],
				methodology: ['TDD', 'Performance Optimization']
			}
		]
	}
];

export const openSourceProjects: OpenSourceProject[] = [
	{
		name: 'Cocogitto',
		description:
			'The ultimate Conventional Commits toolbox - Git hooks, changelog generation, and semantic versioning automation.',
		ghNameSpace: 'cocogitto/cocogitto',
		website: 'cocogitto.io',
		websiteUrl: 'https://cocogitto.io/'
	},
	{
		name: 'Onagre',
		description:
			'Lightning-fast application launcher for Linux (X11/Wayland) with plugin architecture, fuzzy search, and customizable themes.',
		ghNameSpace: 'onagre-launcher/onagre',
		website: 'docs.onagre.dev',
		websiteUrl: 'https://docs.onagre.dev/'
	},
	{
		name: 'Toml Bombadil',
		description:
			'Advanced dotfile manager with templating, multi-profile support, and Git integration.',
		ghNameSpace: 'oknozor/toml-bombadil',
		website: 'oknozor.github.io/toml-bombadil',
		websiteUrl: 'https://oknozor.github.io/toml-bombadil/'
	},
	{
		name: 'freedesktop-icons',
		description:
			'High-performance freedesktop icon lookup implementation with caching and theme support.',
		ghNameSpace: 'oknozor/freedesktop-icons'
	},
	{
		name: 'Sealed Test',
		description: 'Rust proc-macro for isolated test execution with filesystem sandboxing.',
		ghNameSpace: 'oknozor/sealed-test'
	},
	{
		name: 'Manucure',
		description: 'Self-hosted read-later service with full-text search, tagging, and mobile apps.',
		ghNameSpace: 'oknozor/manucure'
	},
	{
		name: 'Gill',
		description:
			'Next-generation Git forge implementing ActivityPub and ForgeFed protocols for decentralized code collaboration.',
		ghNameSpace: 'oknozor/gill'
	},
	{
		name: 'ArchUnit Rust',
		description:
			'Architecture testing framework for Rust projects with dependency rules and structure validation.',
		ghNameSpace: 'oknozor/archunit_rs'
	},
	{
		name: 'MusicBrainz Rust SDK',
		description:
			'Comprehensive Rust wrapper for MusicBrainz API with async support and rate limiting.',
		ghNameSpace: 'oknozor/musicbrainz_rs'
	}
];

export const educations: Education[] = [
	{
		start: '2018',
		end: '2020',
		logo: 'UniversiteDeLille',
		cursus: 'MASTER Infrastructure Applicative et Génie Logiciel',
		schoolName: 'Université de Lille',
		schoolLink: 'https://www.univ-lille.fr/'
	},
	{
		start: '2017',
		end: '2018',
		logo: 'Cnam',
		cursus: 'License STS - Informatique Générale',
		schoolName: 'Conservatoire National des Arts et Métiers',
		schoolLink: 'https://www.cnam.fr/'
	},
	{
		start: '2016',
		end: '2017',
		cursus: 'Formation - Analyste Programmeur',
		logo: 'Cnam',
		schoolName: 'Conservatoire National des Arts et Métiers',
		schoolLink: 'https://www.cnam.fr/'
	}
];
