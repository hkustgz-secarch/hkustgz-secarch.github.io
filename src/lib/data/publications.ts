export enum ResearchTag {
	Architecture = 'architecture',
	Security = 'security',
	UarchAttacks = 'uarchattacks',
}

export interface Publication {
	authors: string[];
	title: string;
	venue: string;
	year: string;
	paperUrl?: string;
	codeUrl?: string;
    slidesUrl?: string;
    highlight?: string;
	tags?: ResearchTag[];
}

export const publicationData: Publication[] = [
    {
        authors: ["Congwei Chen" , "Jinwei Pu" , "Jianxiong Zhang" , "Jiaying Liao", "Ruidian Zhan" , "Fei Yu", "Yun Chen", "Shuting Cai"],
        title: "A Low-Cost Local Masking Radix-4 NTT Against Soft-Analytical Side-Channel Attacks",
        venue: "IEEE Transactions on Very Large Scale Integration (TVLSI) Systems",
        year: "2026",
        paperUrl: "https://doi.org/10.1109/TVLSI.2026.3651779",
        tags: [ResearchTag.Architecture],
    },
    {
        authors: ['Ben Chen', 'Kunlin Li', 'Shuwen Deng', 'Dongsheng Wang', 'Yun Chen'],
        title: 'DSASSASSIN: Cross-VM Side-Channel Attacks by Exploiting Intel Data Streaming Accelerator',
        venue: 'IEEE International Symposium on High-Performance Computer Architecture (HPCA)',
        year: '2026',
        paperUrl: '/paper/hpca26dsassassin.pdf',
        slidesUrl: '/slides/dsa-hpca26.pdf',
        codeUrl: 'https://github.com/hkustgz-secarch/dsassassin',
        tags: [ResearchTag.UarchAttacks],
    },
    {
        authors: ['Tengjiao Fu', 'Yu Jin', 'Dongsheng Wang', 'Shuwen Deng', 'Yun Chen'],
        title: 'PPA: Novel Page Prefetcher-Based Side-Channel Attacks',
        venue: 'Asian Hardware Oriented Security and Trust Symposium (AsianHOST)',
        year: '2025',
        highlight: 'Best paper award',
        paperUrl: 'https://www.thu-haslab.org/publication/2025-ppa/asianhost2025ppa.pdf',
        codeUrl: 'https://github.com/THU-HAS/PPA',
        tags: [ResearchTag.UarchAttacks],
    },
    {
        authors: ['Yinqiao Zhao', 'Zilong Xie', 'Ruidian Zhan', 'Xiaoming Xiong', 'Yun Chen', 'Shuting Cai'],
        title: 'NTT-LSU: Tightly Coupled Architecture for Efficient NTT Implementation on RISC-V Processor',
        venue: 'IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)',
        year: '2025',
        paperUrl: 'https://doi.org/10.1109/TCAD.2025.3627145',
        tags: [ResearchTag.Architecture],
    },
    {
        authors: ['Yun Chen', 'Ali Hajiabadi', 'Romain Poussier', 'Yaswanth Tavva', 'Andreas Diavastos', 'Shivam Bhasin', 'Trevor E Carlson'],
        title: 'PARADISE: Criticality-Aware Instruction Reordering for Power Attack Resistance',
        venue: 'ACM Transactions on Architecture and Code Optimization (TACO)',
        year: '2025',
        paperUrl: 'https://doi.org/10.1145/3701991',
        tags: [ResearchTag.Architecture],
    },
    {
        authors: ['Yun Chen', 'Ali Hajiabadi', 'Trevor E. Carlson'],
        title: 'GadgetSpinner: A New Loop Stream Detector-Based Transient Execution Primitive',
        venue: 'IEEE International Symposium on High-Performance Computer Architecture (HPCA)',
        year: '2024',
        paperUrl: '/paper/chen2024gantepvtlsd.pdf',
        codeUrl: 'https://doi.org/10.5281/zenodo.10100971',
        tags: [ResearchTag.UarchAttacks],
    },
    {
        authors: ['Yun Chen', 'Ali Hajiabadi', 'Lingfeng Pei', 'Trevor E. Carlson'],
        title: 'PrefetchX: Cross-Core Cache-Agnostic Prefetcher-Based Side-Channel Attacks',
        venue: 'IEEE International Symposium on High-Performance Computer Architecture (HPCA)',
        year: '2024',
        paperUrl: '/paper/chen2024nccapsac.pdf',
        codeUrl: 'https://doi.org/10.5281/zenodo.10118346',
        tags: [ResearchTag.UarchAttacks],
    },
    {
        authors: ['Yun Chen', 'Arash Pashrashid', 'Yongzheng Wu', 'Trevor E Carlson'],
        title: 'Prime+Reset: Introducing A Novel Cross-World Covert-Channel Through Comprehensive Security Analysis on ARM TrustZone',
        venue: 'Design, Automation & Test in Europe Conference & Exhibition (DATE)',
        year: '2024',
        paperUrl: 'https://www.comp.nus.edu.sg/~tcarlson/pdfs/chen2024piancctcsaoat.pdf',
        codeUrl: 'https://github.com/yunchen-juuuump/prime-reset',
        tags: [ResearchTag.UarchAttacks],
    },
	{
		authors: ['Yun Chen', 'Lingfeng Pei', 'Trevor E. Carlson'],
		title: 'AfterImage: Leaking Control Flow Data and Tracking Load Operations via the Hardware Prefetcher',
		venue: 'ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)',
		year: '2023',
		paperUrl: '/paper/chen2023lcfivthp.pdf',
        codeUrl: 'https://doi.org/10.5281/zenodo.7218907',
		tags: [ResearchTag.UarchAttacks],
	}
];

/* 
{
    authors: ['Author1', 'Author2'],
    title: 'Paper Title',
    venue: 'Conference Name',
    year: 'Year',
    paperUrl: 'URL to the paper',
    codeUrl: 'URL to the code repository',
    highlight: 'Highlight such as Best Paper Award',
    tags: [ResearchTag.TagName],
}
*/
