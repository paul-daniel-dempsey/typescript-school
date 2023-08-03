export const fetchJSON = async <T>(
	/**
	 * Grab the first argument from the global `fetch` method
	 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype
	 */
	url: Parameters<typeof fetch>[0],
	{
		headers,
		parser,
	}: {
		headers?: HeadersInit;
		parser: (data: unknown) => T | Promise<T>;
	},
): Promise<T> => {
	const data: unknown = await fetch(url, { headers }).then((r) => r.json());
	return parser(data);
};
