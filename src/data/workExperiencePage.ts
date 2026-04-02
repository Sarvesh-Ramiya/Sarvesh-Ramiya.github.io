/** Left column: current role facts (no photo / name). */
export interface WorkRole {
	/** e.g. "@ rksarvesh" — shown above Title */
	ldap: string;
	company: string;
	jobTitle: string;
	location: string;
	tenure: string;
	org: string;
	links?: { label: string; href: string }[];
}

export interface SkillGroup {
	category: string;
	items: string[];
}

export interface WorkProject {
	title: string;
	description: string;
	href?: string;
	/** Shown as language dot + label (GitHub pinned style) */
	language?: string;
}

export const workRole: WorkRole = {
	ldap: '@ rksarvesh',
	company: 'Google',
	jobTitle: 'Software Engineer III',
	location: 'Mountain View, California',
	tenure: '5 yrs',
	org: 'Platforms and Devices',
	links: [],
};

export const workSummaryParagraphs: string[] = [
	'I joined the Wear OS team at Google as an entry level software engineer in 2021 after completing my bachelors degree.',
	'My primary objective is to help build a low latency data layer that would act as an intermediary to the various sensors and related algorithms on the device to provide apps with high-quality data related to activity, exercise, and health.',
	'My contributions have played a critical role in features like Google\'s Personal Health Agent, Automatic Activity Detection, and more. On the peformance side, I have had the impact of cutting down exercise execution latency and battery consumption by over 40% in the newer generation of pixel watches.',
];

export const workSkillGroups: SkillGroup[] = [
	{
		category: 'Languages',
		items: ['Java', 'Kotlin', 'C++', 'Python'],
	},
	{
		category: 'Domains',
		items: ['Low Latency Services', 'Android Full Stack Development', 'API Development', 'System Design', 'Data Structures and Algorithms', 'Concurrency and Multithreading'],
	},
];

export const workProjects: WorkProject[] = [
	{
		title: 'Personal Health Agent - Structured Workouts',
		description: 'Implemented Automatic Exercise Execution of Generated Workouts for the Pixel Watch',
		language: 'Kotlin',
	},
	{
		title: 'Real Time Streaming',
		description: 'Developed a cross device health data streaming library for the Android Ecosystem',
		language: 'Kotlin',
	},
	{
		title: 'Multi-Segmented Workouts',
		description: 'Developed the aggregation and tracking logic for multi-segmented workouts on the Pixel Watch',
		language: 'Kotlin',
	},
	{
		title: 'Threading Rearchitecture',
		description: 'Re-architected the threading model of Android Health Services to improve performance and reduce battery consumption',
		language: 'Java',
	},
	{
		title: 'Activity Recognition',
		description: 'Implemented the backdating algorithm and the general framework for activity recognition on the Pixel Watch',
		language: 'Java',
	},
	{
		title: 'Exercise Goals',
		description: 'Laid the foundation for tracking exercise goals on the Pixel Watch',
		language: 'Java, C++',
	},
];

/** GitHub-like language colors for pinned repo dots */
export const languageColors: Record<string, string> = {
	TypeScript: '#3178c6',
	Python: '#3572A5',
	Go: '#00ADD8',
	JavaScript: '#f1e05a',
	Rust: '#dea584',
	default: '#8b949e',
};
