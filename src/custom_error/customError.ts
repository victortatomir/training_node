export default class ValidationError extends Error {
  public status: number;
  constructor(message: string, status:number) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.status = status;
  }
}
