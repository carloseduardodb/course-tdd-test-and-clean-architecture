export class ServerError extends Error {
  constructor () {
    super('ups! something is wrong')
    this.name = 'ServerError'
  }
}
