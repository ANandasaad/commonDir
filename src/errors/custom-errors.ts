export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor(public pro: string) {
    super(pro);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; fields?: string }[];
}
