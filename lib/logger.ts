/**
 * Structured logging utility with color coding and log levels
 */

import chalk from 'chalk';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogOptions {
  level?: LogLevel;
  context?: string;
  error?: Error;
}

class Logger {
  private static instance: Logger;
  private isDevelopment: boolean;

  private constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  /**
   * Log a message with optional context and error information
   * @param message - The message to log
   * @param options - Logging options including level, context, and error
   */
  public log(message: string, options: LogOptions = {}): void {
    const { level = 'info', context, error } = options;
    const timestamp = new Date().toISOString();
    const contextStr = context ? `[${context}] ` : '';

    let coloredMessage: string;
    switch (level) {
      case 'debug':
        coloredMessage = this.isDevelopment ? chalk.gray(`${contextStr}${message}`) : '';
        break;
      case 'info':
        coloredMessage = chalk.blue(`${contextStr}${message}`);
        break;
      case 'warn':
        coloredMessage = chalk.yellow(`${contextStr}${message}`);
        break;
      case 'error':
        coloredMessage = chalk.red(`${contextStr}${message}`);
        break;
      default:
        coloredMessage = `${contextStr}${message}`;
    }

    if (coloredMessage) {
      console.log(`${chalk.dim(timestamp)} ${coloredMessage}`);
    }

    if (error && (level === 'error' || this.isDevelopment)) {
      console.error(chalk.red(error.stack || error.message));
    }
  }

  public debug(message: string, context?: string): void {
    this.log(message, { level: 'debug', context });
  }

  public info(message: string, context?: string): void {
    this.log(message, { level: 'info', context });
  }

  public warn(message: string, context?: string): void {
    this.log(message, { level: 'warn', context });
  }

  public error(message: string, error?: Error, context?: string): void {
    this.log(message, { level: 'error', context, error });
  }
}

export const logger = Logger.getInstance();