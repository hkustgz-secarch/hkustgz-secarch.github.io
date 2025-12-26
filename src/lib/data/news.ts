export interface NewsItem {
	date: string;
	title: string;
	description?: string;
}

export const newsData: NewsItem[] = [
    {
        date: '2026-12-21',
        title: 'PPA got best paper award at AsianHOST 2025',
        description: 'Our paper <i>PPA: Novel Page Prefetcher-Based Side-Channel Attacks</i> is awarded best paper at AsianHOST 2025. Congrats to Tengjiao and Yu!',
    },
    {
        date: '2026-11-08',
        title: 'Paper accepted at HPCA 2026',
        description: 'Our paper <i>DSASSASSIN: Cross-VM Side-Channel Attacks by Exploiting Intel Data Streaming Accelerator</i> has been accepted to HPCA 2026.',
    },
    {
        date: '2026-09-05',
        title: 'Paper accepted at AsianHOST 2025',
        description: 'Our paper <i>PPA: Novel Page Prefetcher-Based Side-Channel Attacks</i> has been accepted to AsianHOST 2025 and selected as best paper candidate. Congrats to Tengjiao and Yu!',
    },
    {
        date: '2024-09-06',
        title: 'Joined HKUST(GZ) as an assistant professor',
        description: 'Dr. Yun Chen has joined the Microelectronics Thrust at HKUST(GZ). SecArch Lab is here!',
    }
];
