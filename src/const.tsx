import config from '../config.json';

export enum AppRoute {
  Main = '/',
  Registration = '/signup',
  Login = '/signin',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
}

export const BACKEND_URL = config.SERVER_URL;
