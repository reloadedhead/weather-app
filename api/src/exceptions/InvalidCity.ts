export default class InvalidCity extends Error {
  constructor (message: string) {
    super(message);
    this.name = 'invalid-city'
  }
}