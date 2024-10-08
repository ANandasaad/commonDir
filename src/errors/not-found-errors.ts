import { CustomError } from "./custom-errors";

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super("Not Found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: "Not found" }];
  }
}
