export interface NewsItem {
	date: string;
	title: string;
	description?: string;
}

export const newsData: NewsItem[] = [
    {
        date: '2026-07-08',
        title: 'Three papers accepted at MICRO 2026',
        description: 'Our papers <i>SMExplode: Cross-Core and Cache-Agnostic Side-Channel Attack on Apple Silicon via SME Engine</i>, <i>PoCer: Fast RTL Fuzzing for Time-shared Microarchitectural Leakage Detection via Pre-Fuzzing Acceleration and Cross-Context-Supported Fuzzer</i>, and <i>GhostAccess: Attacking the GPU on the Multi-tenant Cloud via CPU LLC under Unified Memory</i> have been accepted to MICRO 2026. Congrats to Hongpei, Ben, Pingfei, and Zihao!',
    },
    {
        date: '2026-07-02',
        title: 'Paper accepted at SC 2026',
        description: 'Our paper <i>PHANTOM: Phase-Aware Power Management for Energy-Efficient LLM Training</i> has been accepted to SC 2026. Congrats to Qi and Kunlin!',
    },
    {
        date: '2026-06-15',
        title: 'Paper accepted at ICCAD 2026',
        description: 'Our paper <i>LEAP LMSD: A Low-Overhead Side-Channel-Resistant Unified Polynomial Accelerator for HQC</i> has been accepted to ICCAD 2026.',
    },
    {
        date: '2026-05-20',
        title: 'Paper accepted at TACO',
        description: 'Our paper <i>DGNA: Dissecting GPU NUMA Architecture through Microbenchmarking and Data Analysis</i> has been accepted to ACM TACO. Congrats to Changxi!',
    },
    {
        date: '2026-02-20',
        title: 'Paper accepted at DAC 2026',
        description: 'Our paper <i>MistleTunnel: Attacking KASLR on Apple M-Series Silicon with a Novel TLB Side Channel</i> has been accepted to DAC 2026. Congrats to Hanyin!',
    },
    {
        date: '2026-03-11',
        title: 'Welcomed Yidong and Fang to SecArch',
        description: 'Yidong Jian and Fang Jiang have joined SecArch Lab as PhD student and research assistant, respectively. Welcome to the team!',
    },
    {
        date: '2025-12-21',
        title: 'PPA got best paper award at AsianHOST 2025',
        description: 'Our paper <i>PPA: Novel Page Prefetcher-Based Side-Channel Attacks</i> is awarded best paper at AsianHOST 2025. Congrats to Tengjiao and Yu!',
    },
    {
        date: '2025-11-08',
        title: 'Paper accepted at HPCA 2026',
        description: 'Our paper <i>DSASSASSIN: Cross-VM Side-Channel Attacks by Exploiting Intel Data Streaming Accelerator</i> has been accepted to HPCA 2026.',
    },
    {
        date: '2025-09-05',
        title: 'Paper accepted at AsianHOST 2025',
        description: 'Our paper <i>PPA: Novel Page Prefetcher-Based Side-Channel Attacks</i> has been accepted to AsianHOST 2025 and selected as best paper candidate. Congrats to Tengjiao and Yu!',
    },
    {
        date: '2024-09-06',
        title: 'Joined HKUST(GZ) as an assistant professor',
        description: 'Dr. Yun Chen has joined the Microelectronics Thrust at HKUST(GZ). SecArch Lab is here!',
    }
];
