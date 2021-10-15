export class UserValidation {
  private body: any;
  
  constructor(httpRequestBody: any) {
    this.body = httpRequestBody;
  }

  validate() {
    const requiredFields = ['email', 'name'];

    for (const field of requiredFields) {
        if(!this.body[field]) {
            throw new Error(`O parâmetro ${field} é obrigatório.`)
        }
    }

    const parseEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    const isValidEmail = parseEmail.test(this.body['email']);
    
    if (!isValidEmail) {
      throw new Error("O email informado não possui um formato válido.");
    }
  }
}