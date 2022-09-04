import wrapPromise from './wrapPromise';

export const fetchData = (url: string) =>
  wrapPromise(fetch(url).then((res) => res.json()));
