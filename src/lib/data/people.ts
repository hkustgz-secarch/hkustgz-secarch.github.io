import kunlinLiAvatar from '$lib/assets/kunlin-li-avatar.jpeg';
import jiapengZhouAvatar from '$lib/assets/jiapeng-zhou-avatar.gif';
import yunChenAvatar from '$lib/assets/Yun_v1.jpeg';
import boyPlaceholder from '$lib/assets/boy.png';
import girlPlaceholder from '$lib/assets/girl.png';

export interface PersonProfile {
	slug: string;
	name: string;
	role: string;
	image: string;
	email?: string;
	location?: string;
	website?: string; // URL
	googleScholar?: string; // Google Scholar ID
	github?: string; // GitHub username
	linkedin?: string; // LinkedIn username
	bio: string; // Biography (HTML tags allowed)
	teaching?: string[];
	service?: string[];
	alumni?: boolean;
}

export const peopleData: PersonProfile[] = [
	{
		slug: 'yun-chen',
		name: 'Yun Chen',
		role: 'Faculty',
		image: yunChenAvatar,
		bio: 'CHEN Yun got his PhD from the School of Computing at the National University of Singapore, under the supervision of Prof. Trevor E. Carlson. Prior to that, he received his MPhil in Cybersecurity from Beijing Institute of Technology and his BE in Computer Science and Technology from Henan University. He was also an Adjunct Researcher at AMD Research Singapore. His current research focuses on Computer Architecture and System Security, particularly on 1) side-channel attacks and mitigations, 2) secure and high-performance hardware architecture, and 3) efficient and side-channel-resilient trusted execution environments. His research has been published in many top-tier and important conferences/journals in computer architecture and information systems, including MICRO, SC, HPCA, ASPLOS, DAC, DATE, TACO, TCAD, Information Sciences, Information Fusion, etc. Additionally, some of his research has been highlighted by NUS News. CHEN Yun has also participated in various research projects, such as the National Defense Basic Scientific Research Programs, the National Defense Science and Technology Innovation Projects, and the Singapore National Research Foundation Projects.',
		email: 'yunchen@hkust-gz.edu.cn',
		location: 'W1(C8) L5 514',
        googleScholar: 'pQzZZlsAAAAJ',
        service: [
            'Program Committee: HPCA (\'26, \'27), ISCA (\'26), MICRO (\'26), HASP (\'26)',
            'Journal Reviewer: IEEE TDSC, IEEE TCAD, JCST',
        ],
        teaching: [
            'Secure Hardware Architecture (MICS-6001L), \'25 Spring, \'26 Spring',
            'Efficient Computing in Heterogeneous System (MICS-6002E), \'25 Fall',
            'Introduction to Computer Organization & Design (MICS2070), \'26 Fall',
        ],
	},
	{
		slug: 'zihao-dan',
		name: 'Zihao Dan',
		role: 'PhD Student',
		image: boyPlaceholder,
		bio: '',
	},
	{
		slug: 'tengjiao-fu',
		name: 'Tengjiao Fu',
		role: 'PhD Student',
		image: girlPlaceholder,
		bio: '',
	},
	{
		slug: 'kunlin-li',
		name: 'Kunlin Li',
		role: 'MPhil Student',
		image: kunlinLiAvatar,
		bio: '',
		service: [
            'HPCA AEC (\'26)',
        ],
	},
	{
		slug: 'qi-luo',
		name: 'Qi Luo',
		role: 'PhD Student',
		website: 'https://rocky-lq.github.io/',
		image: 'https://rocky-lq.github.io/images/qiluo.jpg',
		email: 'qluo615@connect.hkust-gz.edu.cn',
		github: 'rocky-lq',
		googleScholar: 'Sd4sKEgAAAAJ',
		bio: 'Qi Luo is a first-year Ph.D. student in Microelectronics. He received his M.Eng. from Southern University of Science and Technology and his B.Eng. from Xidian University, both majoring in Computer Science.',
	},
	{
		slug: 'ziwen-wang',
		name: 'Ziwen Wang',
		role: 'PhD Student',
		image: boyPlaceholder,
		bio: '',
	},
	{
		slug: 'jiapeng-zhou',
		name: 'Jiapeng Zhou',
		role: 'PhD Student',
		image: jiapengZhouAvatar,
		email: 'jzhou418@connect.hkust-gz.edu.cn',
		bio: '',
		googleScholar: '4-D3VsAAAAAJ',
		service: [
            'HPCA AEC (\'26), MLSys AEC (\'26), ISCA AEC (\'26)',
        ],
	},
	{
		slug: 'xingyi-wu',
		name: 'Xingyi Wu',
		role: 'PhD Student',
		image: boyPlaceholder,
		bio: '',
	},
	{
		slug: 'ben-chen',
		name: 'Ben Chen',
		role: 'PhD Student',
		image: 'https://i.benx.dev/images/avatar.jpg',
		email: 'chanben04gz@gmail.com',
		website: 'https://i.benx.dev',
		googleScholar: '3ePAeQ8AAAAJ',
		github: 'chanbengz',
		linkedin: 'b3nch4n',
		service: [
            'HPCA AEC (\'26), MLSys AEC (\'26), ISCA AEC (\'26)',
        ],
		bio: 'Ben Chen is an incoming PhD Student starting from 2026 Fall. He received his B.Eng. degree from Southern University of Science and Technology (SUSTech) in 2026, majoring in Computer Science and Engineering. Ben\'s research interests include xPU microarchitectural security.',
	},
	{
		slug: 'yidong-jian',
		name: 'Yidong Jian',
		role: 'PhD Student',
		image: boyPlaceholder,
		bio: '',
	},
	{
		slug: 'fang-jiang',
		name: 'Fang Jiang',
		role: 'Research Assistant',
		image: girlPlaceholder,
		bio: '',
	}
];
