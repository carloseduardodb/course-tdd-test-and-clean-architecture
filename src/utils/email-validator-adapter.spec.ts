import { EmailValidatorAdapter } from './email-validator'
describe('EmailValidatorAdapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid-email@email.com')
    expect(isValid).toBe(false)
  })
})
