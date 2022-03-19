import { writable } from 'svelte/store';

export const headers = {
	'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
	'x-rapidapi-key': '970d5e0d03msh08d243d9bd0829dp176881jsn24a11d3d58e4'
};

export const newsUrl = 'https://yh-finance.p.rapidapi.com/news/v2/list?snippetCount=30';
export const tickerUrl = 'https://yh-finance.p.rapidapi.com/market/get-trending-tickers?region=US';

export const news = writable([]);
