export type Organization = {
	name: string;
	logo: string;
	variant: 'square' | 'portrait';
	role: string;
	dates: string;
	description: string;
	/** Page opened when the card is clicked */
	href: string;
};

export const organizations: Organization[] = [
	{
		name: 'Google',
		logo: '/logos/google.svg',
		variant: 'square',
		role: 'Software Engineer III',
		dates: '2021 — Present',
		description: 'Wear OS - Android Health Services',
		href: '/work-experience',
	},
	{
		name: 'Stanford University',
		logo: '/logos/stanford.svg',
		variant: 'portrait',
		role: 'MS - Computer Science',
		dates: 'Class of 2027',
		description: 'Specialization in Artificial Intelligence',
		href: '/education',
	},
];
