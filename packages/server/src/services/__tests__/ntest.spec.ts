import CreateUserService from '../user/CreateUserService'

const userService = new CreateUserService()

describe('Test mobile', () => {
  it('should do something', () => {
    expect(userService.execute({
      name: "paulo",
      email: "paulo@gmail.com",
      isProfessor: true,
      password: "123456789"
    })).toEqual({
      "name": "",
      "email": "",
      "isProfessor": true,
      "id_user": "",
      "created_at": "",
      "updated_at": ""
    })
  })
})
