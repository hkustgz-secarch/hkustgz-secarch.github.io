export interface Publication {
	authors: string[];
	title: string;
	venue: string;
	year: string;
	paperUrl?: string;
	codeUrl?: string;
}

export const publicationData: Publication[] = [
    {
        authors: ['Ben Chen', 'Kunlin Li', 'Shuwen Deng', 'Dongsheng Wang', 'Yun Chen'],
        title: 'DSASSASSIN: Cross-VM Side-Channel Attacks by Exploiting Intel Data Streaming Accelerator',
        venue: 'International Symposium on High-Performance Computer Architecture (HPCA)',
        year: '2026',
        // paperUrl: '#',
        // codeUrl: '#'
    },
    {
        authors: ['Yun Chen', 'Ali Hajiabadi', 'Trevor E. Carlson'],
        title: 'GadgetSpinner: A New Loop Stream Detector-Based Transient Execution Primitive',
        venue: 'International Symposium on High-Performance Computer Architecture (HPCA)',
        year: '2024',
        paperUrl: '/paper/chen2024gantepvtlsd.pdf',
        codeUrl: 'https://doi.org/10.5281/zenodo.10100971'
    },
    {
        authors: ['Yun Chen', 'Ali Hajiabadi', 'Lingfeng Pei', 'Trevor E. Carlson'],
        title: 'PrefetchX: Cross-Core Cache-Agnostic Prefetcher-Based Side-Channel Attacks',
        venue: 'International Symposium on High-Performance Computer Architecture (HPCA)',
        year: '2024',
        paperUrl: '/paper/chen2024nccapsac.pdf',
        codeUrl: 'https://doi.org/10.5281/zenodo.10118346'
    },
	{
		authors: ['Yun Chen', 'Lingfeng Pei', 'Trevor E. Carlson'],
		title: 'AfterImage: Leaking Control Flow Data and Tracking Load Operations via the Hardware Prefetcher',
		venue: 'International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)',
		year: '2023',
		paperUrl: '/paper/chen2023lcfivthp.pdf',
        codeUrl: 'https://doi.org/10.5281/zenodo.7218907'
	}
];

/* 
{
    authors: ['Author1', 'Author2'],
    title: 'Paper Title',
    venue: 'Conference Name',
    year: 'Year',
    paperUrl: 'URL to the paper',
    codeUrl: 'URL to the code repository'
}
*/
