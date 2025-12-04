export interface NewsItem {
	date: string;
	title: string;
	description?: string;
}

export const newsData: NewsItem[] = [
    {
        date: '2026-11-08',
        title: 'New paper accepted at HPCA 2026',
        description: 'Our paper titled <i> abc </i> has been accepted at HPCA 2026.',
    }
];
