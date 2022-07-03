import { EmailValidatorAdapter } from './email-validator'
describe('EmailValidatorAdapter', () => {
  jest.mock('validator', () => ({
    isEmail (): boolean {
      return true
    }
  }))

  test('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(sut, 'isValid').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalidemail@email.com')
    expect(isValid).toBe(false)
  })

  test('Should return true if validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('testemail@gmail.com')
    expect(isValid).toBe(true)
  })
})
