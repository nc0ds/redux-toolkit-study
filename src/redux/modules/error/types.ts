export enum ActionTypes {
	setError = 'error/setError',
	cleanError = 'error/cleanError',
}

export interface IError {
	error: {
		code: number | string;
		message: string;
	} | null;
}
