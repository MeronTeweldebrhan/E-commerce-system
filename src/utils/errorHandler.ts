
// custom error handler
export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
    
  }
}

// Custom error handler for API errors
export function handleApiError(error: unknown): void {
  if (error instanceof AppError) {
    console.error(`API Error [${error.statusCode}]: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`Unexpected Error: ${error.message}`);
  } else {
    console.error("An unknown error occurred.");
  }
}
