import type { Education, Experience, OpenSourceProject } from '$lib/index';

export const introduction =
	"Ingénieur backend senior avec plus de 7 ans d'expérience dans la construction de systèmes scalables, résilients et performants. Fort accent mis sur les architectures hexagonales, le Domain-Driven Design et les principes de code propre. Expérience prouvée dans des environnements à forte charge et des systèmes distribués en production. Passionné par l'open source, je contribue activement à des projets comme Cocogitto et Onagre. Mon vif intérêt pour l'outillage me pousse à créer des solutions qui améliorent la productivité des développeurs et optimisent les processus CI/CD. Je recherche un environnement technologique où la qualité logicielle, l'impact produit et l'innovation en matière d'outillage vont de pair.";

export const experiences: Experience[] = [
	{
		start: '2024',
		end: '2025',
		position: 'Ingénieur Logiciel Senior',
		company: 'Agicap',
		logo: 'Agicap',
		location: 'Lyon, France',
		projects: [
			{
				name: 'Agrégateur Business',
				description:
					"Développement d'une plateforme complète d'agrégation de documents commerciaux, intégrant plus de 28 logiciels de gestion d'entreprise incluant Odoo, ZohoInvoice, OracleNetSuite et Sage.",
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
		position: 'Ingénieur Logiciel Senior',
		company: 'Qwant',
		logo: 'Qwant',
		location: 'Paris, France',
		projects: [
			{
				name: 'Qwant Maps',
				description:
					'Dirigé la refonte architecturale complète de Qwant Maps, implémentant des services géospatiaux haute performance servant des requêtes quotidiennes à haut volume avec des temps de réponse inférieurs à 100ms.',
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
					"Développement d'une plateforme complète de benchmarking pour les services de géocodage, permettant des décisions basées sur les données pour améliorer la précision cartographique de notre propre géocodeur Mimirsbrunn.",
				techStack: ['Rust', 'axum', 'SvelteKit', 'PostgreSQL', 'TypeScript'],
				methodology: ['Agile', 'Microservice', 'Test-Driven Development']
			},
			{
				name: 'Moteur de Web Crawler',
				description:
					'Amélioration du moteur de web crawler distribué avec limitation de débit avancée et déduplication de contenu',
				techStack: ['Rust', 'gRPC', 'tokio', 'ScyllaDB'],
				methodology: ['Agile', 'Microservice', 'Distributed Systems']
			},
			{
				name: 'Fondation de Recherche',
				description:
					"Architecture de l'infrastructure de recherche centrale alimentant l'intégration cartographique de Qwant, implémentant un scoring de pertinence avancé et des capacités de recherche géospatiale.",
				techStack: ['NestJS', 'gRPC', 'ElasticSearch', 'TypeScript'],
				methodology: ['Agile', 'Microservice', 'Search Engineering']
			},
			{
				name: 'Plateforme de Service de Modèles IA',
				description:
					"Construction d'une infrastructure scalable de service de modèles ML pour l'évaluation de la qualité des résultats de recherche et l'optimisation du classement face aux moteurs de recherche concurrents.",
				techStack: ['Python', 'FastAPI', 'PyTorch', 'Docker', 'Kubernetes'],
				methodology: ['Agile', 'MLOps', 'A/B Testing']
			}
		]
	},
	{
		start: '2021',
		end: '2022',
		position: 'Ingénieur Logiciel',
		company: 'Leroy Merlin',
		logo: 'LM',
		location: 'Lille, France',
		projects: [
			{
				name: 'OAA',
				description:
					"Développement et maintenance de multiples APIs haute performance pour l'écosystème de services internes Leroy Merlin, assurant une intégration transparente tout en modernisant et supportant l'infrastructure système legacy critique.",
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
		position: 'Ingénieur Logiciel',
		company: 'Decathlon',
		logo: 'Decathlon',
		location: 'Lille, France',
		projects: [
			{
				name: "Système Global de Gestion d'Inventaire",
				description:
					"Dirigé la migration des systèmes SAP legacy vers une architecture microservices cloud-native, gérant plus d'1M de requêtes par minute dans plus de 70 pays. Atteint 99,99% de disponibilité avec des déploiements sans interruption pour les opérations retail critiques.",
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
		position: 'Ingénieur Logiciel Full Stack',
		company: 'Ineat Group',
		logo: 'Ineat',
		location: 'Lille, France',
		projects: [
			{
				name: 'Plateforme de Messagerie Omnicanale',
				description:
					"Construction d'une plateforme d'agrégation de messagerie d'entreprise pour Galeries Lafayette, intégrant SMS, WhatsApp et notifications push avec analytics avancés et segmentation client.",
				techStack: ['Java', 'Spring Boot', 'RabbitMQ', 'Kotlin', 'PostgreSQL', 'Jenkins', 'React'],
				methodology: ['Agile', 'TDD', 'BDD', 'Hexagonal Architecture', 'OpenAPI']
			},
			{
				name: 'Suite SaaS de Messagerie',
				description:
					'Dirigé la réécriture complète de la plateforme de messagerie en solution SaaS multi-tenant avec fonctionnalités avancées de scalabilité et personnalisation.',
				techStack: ['Java', 'Vert.x', 'Quarkus', 'Apache Kafka', 'Flutter', 'Twilio', 'Kubernetes'],
				methodology: ['Agile', 'TDD', 'Clean Architecture', 'Microservice', 'OpenAPI']
			},
			{
				name: 'Système de Gestion de Voyage',
				description:
					"Développement d'une solution back-office complète pour les opérations d'agence de voyage avec gestion des réservations et fonctionnalités de relation client.",
				techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'TypeScript'],
				methodology: ['Agile', 'TDD', 'Clean Architecture', 'Monolith', 'OpenAPI']
			}
		]
	},
	{
		start: '2017',
		end: '2018',
		position: 'Stagiaire Ingénieur Logiciel',
		company: 'Decathlon',
		logo: 'Decathlon',
		location: 'Lille, France',
		projects: [
			{
				name: 'API de Recherche Entreprise',
				description:
					"Développement d'un proxy API REST haute performance pour le moteur de recherche interne de Decathlon avec capacités avancées de cache et transformation.",
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
			'La boîte à outils ultime pour les Conventional Commits - Git' +
			'hooks, génération de changelog et automatisation du versioning sémantique.',
		ghNameSpace: 'cocogitto/cocogitto',
		website: 'cocogitto.io',
		websiteUrl: 'https://cocogitto.io/'
	},
	{
		name: 'Onagre',
		description:
			"Lanceur d'applications ultra-rapide pour Linux (X11/Wayland) avec architecture de plugins, recherche floue et thèmes personnalisables.",
		ghNameSpace: 'onagre-launcher/onagre',
		website: 'docs.onagre.dev',
		websiteUrl: 'https://docs.onagre.dev/'
	},
	{
		name: 'Toml Bombadil',
		description:
			'Gestionnaire de dotfiles avancé avec templating, support multi-profils et intégration Git.',
		ghNameSpace: 'oknozor/toml-bombadil',
		website: 'oknozor.github.io/toml-bombadil',
		websiteUrl: 'https://oknozor.github.io/toml-bombadil/'
	},
	{
		name: 'freedesktop-icons',
		description:
			"Implémentation haute performance de recherche d'icônes freedesktop avec cache et support de thèmes.",
		ghNameSpace: 'oknozor/freedesktop-icons'
	},
	{
		name: 'Sealed Test',
		description:
			"Proc-macro Rust pour l'exécution de tests isolés avec sandboxing du système de fichiers.",
		ghNameSpace: 'oknozor/sealed-test'
	},
	{
		name: 'Manucure',
		description:
			'Service read-later auto-hébergé avec recherche full-text, étiquetage et applications mobiles.',
		ghNameSpace: 'oknozor/manucure'
	},
	{
		name: 'Gill',
		description:
			'Forge Git nouvelle génération implémentant les protocoles ActivityPub et ForgeFed pour la collaboration de code décentralisée.',
		ghNameSpace: 'oknozor/gill'
	},
	{
		name: 'ArchUnit Rust',
		description:
			"Framework de test d'architecture pour projets Rust avec règles de dépendances et validation de structure.",
		ghNameSpace: 'oknozor/archunit_rs'
	},
	{
		name: 'MusicBrainz Rust SDK',
		description:
			"Wrapper Rust complet pour l'API MusicBrainz avec support async et limitation de débit.",
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
