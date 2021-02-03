export default class ValidationError extends Error {
  private status: number;
  constructor(message: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.status = 404;
  }

  statusCode(): number {
    return this.status;
  }

  getMessage(): string {
    return this.message;
  }
}
