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
	'I architect and optimize the Wear Health Services data layer. My work acts as the high-speed bridge between raw hardware sensors and top-level health applications, ensuring high-fidelity data delivery for millions of users.',
	'Key Impacts:',
	'- Performance: Re-engineered sensor fusion pipelines to slash exercise execution latency and battery drain by 40% for the latest Pixel Watch hardware.',
	'- AI Integration: Developed the core data infrastructure powering Google’s Personal Health Agent and the high-frequency Automatic Activity Detection systems.',
	'- System Design: Optimized the intermediary data layer to handle real-time sensor streams while maintaining a low memory footprint on resource-constrained Wear OS devices.'
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
