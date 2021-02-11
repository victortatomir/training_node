export default class ValidationError extends Error {
  private status: number;
  constructor(message: string, status:number) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.status = status;
  }

  statusCode(): number {
    return this.status;
  }
}
