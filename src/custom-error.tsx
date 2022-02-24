export default class CustomError extends Error {
  private date: number;

  constructor(errorTitle: string, ...params: any) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
    this.date = Date.now();
    this.stack = params;
    this.message = errorTitle;

    /* eslint-disable no-console */
    console.log({ 'API-Error': this });
  }
}
