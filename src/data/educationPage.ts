export interface NotableCourseworkItem {
	courseTitle: string;
	/** Project or deliverable tied to the course */
	projectTitle?: string;
	/** One-line description */
	description?: string;
	href?: string;
}

export interface EducationDegreeCard {
	/** Display line, e.g. "@ sarveshr" */
	sunet: string;
	universityName: string;
	universityLogoSrc?: string;
	degree: string;
	specialization: string;
	graduationDate: string;
	gpa: string;
	centralThemes: string[];
	awards?: string[];

	summaryParagraphs: string[];
	/** Label for the final project section (Capstone vs Thesis). */
	finalProjectLabel?: string;
	capstoneParagraphs: string[];
	notableCoursework: NotableCourseworkItem[];
}

const msNotableCoursework: NotableCourseworkItem[] = [
	{
		courseTitle: 'CS 221 - AI Principles and Techniques',
		projectTitle: 'Project: DQN For Trading',
		description: 'Implementing a Deep Q-Netowrk (DQN) Agent for profitable trading in the stock market.',
		href: 'https://github.com/Sarvesh-Ramiya/Deep_Learning_For_Stock_Trading',
	},
	{
		courseTitle: 'CS 224W — Machine Learning with Graphs',
		projectTitle: 'Project: Predicting Binding Affinity of Protein-Ligand Complexes',
		description: 'Predicting Protein-Ligand Binding Affinity With Graph Neural Networks and Meta-Learning',
		href: 'https://github.com/Sarvesh-Ramiya/Binding_Affinity_Predictor_GNNs',
	},
	{
		courseTitle: 'CS 224N — Natural Language Processing',
		projectTitle: 'Project: Transformers for Paraphrase Detection and Sonnet Generation',
		description: 'Paper contrasting different Transformer fine tuning techniques for Paraphrase Detection and Sonnet Generation',
		href: 'https://github.com/Sarvesh-Ramiya/Paraphrase-Detection-Sonnet-Generation',
	},
	{
		courseTitle: 'CS 361 — Engineering Design Optimization',
		projectTitle: 'Hyperparameter Optimization for LSTMs and Transformers that trade',
		description: 'Exploring Hyperparameter optimization techniques for LSTMs and Transformers that predict stock prices',
		href: 'https://github.com/Sarvesh-Ramiya/Hyperparameter_Optimization',
	},
	{
		courseTitle: 'CS 238 — Decision Making under Uncertainty',
		projectTitle: 'Project: Path Planning for Robot Navigation',
		description: 'Implementing RL techniques like Forward Search, Monte Carlo Tree Search and Value Iteration for efficient path planning',
		href: 'https://github.com/Sarvesh-Ramiya/RL_Based_Path_Planning',
	},
	
];

const msCentralThemes: string[] = [
	'Reinforcement learning',
	'Natural language processing',
];

const msSummaryParagraphs: string[] = [
	'M.S. in Computer Science with a specialization in Artificial Intelligence. Most of my coursework deal with Reinforcement learning, Natural language processing and Agentic systems. I am actively seeking opportunities to research in one of these fields and hopefully complete my thesis in the next year.',
];

const msCapstoneParagraphs: string[] = [
	'TBD',
];

const bsNotableCoursework: NotableCourseworkItem[] = [
	{ courseTitle: 'Machine Learning' },
	{ courseTitle: 'Probability & Statistics' },
	{ courseTitle: 'Linear Algebra' },
	{ courseTitle: 'Advanced Engineering Math' },
	{ courseTitle: 'Data Structures & Algorithms' },
	{ courseTitle: 'Embedded Systems' },
	{ courseTitle: 'Signals & Systems' },
	{ courseTitle: 'RF Design Principles' },
	{ courseTitle: 'Systems And Controls' },
	{ courseTitle: 'Electromagnetic Engineering' },
];

const bsCentralThemes: string[] = [];

const bsSummaryParagraphs: string[] = [
	'I pursued a double major in Computer Engineering and Electrical engineering during my undergraduate degree. Completed a total of 146 Credits over the course of 3 years. I was particularly interested in exploring the intersection of Software and Hardware so pursed a double major in Computer Engineering and Electrical engineering that would give me a good exposure to the entire field. I really enjoyed subjects like Machine Learning, Embedded Systems, Computer Architecture, Operating Systems, Computer Networks, and Database Systems. My undergraduate degree also gave me the math exposure required to pursue further studies in the field of Machine Learning',
];

const bsCapstoneParagraphs: string[] = [
	'HoboLoco: Foot Operated Game Controller',

	'HoboLoco is a patented, two-foot-plate controller—inspired by a hoverboard—that\'s revolutionizing computer input and virtual world interaction, even extending to robot locomotion. By combining the independent toe-down and heel-down tilts of both footplates, it enables intuitive, multi-dimensional movement (forward, backward, pivoting, and strafing).',
	'Key Contributions:',
	'- Designed, built, and tested an optimized Printed Circuit Board (PCB) with Wi-Fi, Bluetooth Low Energy (BLE), and USB capabilities.',
	'- Implemented Human Interface Device (HID) emulation (keyboard, mouse, gamepad) across all three communication channels.',
	'- Developed a web interface hosted on the PCB for users to manage game profiles and configure custom controls.',
];

export const educationDegrees: EducationDegreeCard[] = [
	{
		sunet: 'sarveshr@stanford.edu',
		universityName: 'Stanford',
		universityLogoSrc: '/logos/stanford.svg',
		degree: 'MS Computer Science',
		specialization: 'Artificial Intelligence',
		graduationDate: 'Spring 2027',
		gpa: '3.98 / 4.0',
		centralThemes: msCentralThemes,
		summaryParagraphs: msSummaryParagraphs,
		finalProjectLabel: 'Thesis',
		capstoneParagraphs: msCapstoneParagraphs,
		notableCoursework: msNotableCoursework,
	},
	{
		sunet: 'skr170004@utdallas.edu',
		universityName: 'University of Texas - Dallas',
		degree: 'BS Computer Engineering & Electrical Engineering',
		specialization: 'None',
		graduationDate: 'Spring 2021',
		gpa: '4.0 / 4.0',
		centralThemes: bsCentralThemes,
		awards: [
			'Summa Cum Laude',
			"Deans List",
			"Academic Excellence Scholar",
		],
		summaryParagraphs: bsSummaryParagraphs,
		finalProjectLabel: 'Capstone',
		capstoneParagraphs: bsCapstoneParagraphs,
		notableCoursework: bsNotableCoursework,
	},
];
