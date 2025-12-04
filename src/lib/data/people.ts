import kunlinLiAvatar from '$lib/assets/kunlin-li-avatar.jpeg';
import jiapengZhouAvatar from '$lib/assets/jiapeng-zhou-avatar.gif';

export interface PersonProfile {
	slug: string;
	name: string;
	role: string;
	image: string;
	email?: string;
	location?: string;
	website?: string;
	googleScholar?: string;
	github?: string;
	linkedin?: string;
	bio: string;
	teaching?: string[];
	service?: string[];
	publications?: string[];
}

export const peopleData: PersonProfile[] = [
	{
		slug: 'yun-chen',
		name: 'Yun Chen',
		role: 'Faculty',
		image: 'https://gzcms.hkust-gz.edu.cn/itdobs/preview/cms/prod/linalnzhou/20240906/201820/Yun_v1.JPG',
		bio: 'CHEN Yun got his PhD from the School of Computing at the National University of Singapore, under the supervision of Prof. Trevor E. Carlson. His current research focuses on Computer Architecture and System Security, particularly on 1) side-channel attacks and mitigations, 2) secure and high-performance hardware architecture, and 3) efficient and side-channel-resilient trusted execution environments. His research has been published in many top-tier and important conferences/journals in computer architecture and information systems, including ASPLOS, HPCA, DATE, Information Sciences, Information Fusion, etc. Additionally, some of his research has been highlighted by NUS News. CHEN Yun has also participated in various research projects, such as the National Defense Basic Scientific Research Programs, the National Defense Science and Technology Innovation Projects, and the Singapore National Research Foundation Projects.',
		email: 'yunchen@hkust-gz.edu.cn',
		location: 'W1(C8) L5 514',
        googleScholar: 'https://scholar.google.com/citations?user=pQzZZlsAAAAJ',
        service: [
            'HPCA (\'26), ISCA (\'26)',
        ],
        teaching: [
            'Secure Hardware Architecture (MICS60001L), \'25 Spring',
            'Efficient Computing in Heterogeneous System (MICS6002E), \'25 Fall',
        ],
	},
	{
		slug: 'zihao-dan',
		name: 'Zihao Dan',
		role: 'PhD Student',
		image: 'https://placehold.co/400',
		bio: 'Zihao Dan is a PhD Student.',
	},
	{
		slug: 'tengjiao-fu',
		name: 'Tengjiao Fu',
		role: 'PhD Student',
		image: 'https://placehold.co/400',
		bio: 'Tengjiao Fu is a PhD Student.',
	},
	{
		slug: 'kunlin-li',
		name: 'Kunlin Li',
		role: 'MPhil Student',
		image: kunlinLiAvatar,
		bio: 'Kunlin Li is an MPhil Student.',
	},
	{
		slug: 'qi-luo',
		name: 'Qi Luo',
		role: 'PhD Student',
		image: 'https://placehold.co/400',
		bio: 'Qi Luo is a PhD Student.',
	},
	{
		slug: 'ziwen-wang',
		name: 'Ziwen Wang',
		role: 'PhD Student',
		image: 'https://placehold.co/400',
		bio: 'Ziwen Wang is a PhD Student.',
	},
	{
		slug: 'jiapeng-zhou',
		name: 'Jiapeng Zhou',
		role: 'PhD Student',
		image: jiapengZhouAvatar,
		bio: 'Jiapeng Zhou is a PhD Student.',
	},
	{
		slug: 'xingyi-wu',
		name: 'Xingyi Wu',
		role: 'PhD Student',
		image: 'https://placehold.co/400',
		bio: 'Xingyi Wu is a PhD Student.',
	},
	{
		slug: 'ben-chen',
		name: 'Ben Chen',
		role: 'PhD Student',
		image: 'https://i.benx.dev/images/avatar.png',
		bio: 'Ben Chen is a PhD Student.',
	}
];
