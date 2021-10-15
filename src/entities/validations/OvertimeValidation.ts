export class OvertimeValidation {
  private body: any;
  
  constructor(httpRequestBody: any) {
    this.body = httpRequestBody;
  }

  validate() {
    const requiredFields = ['date', 'start_time', 'end_time', 'description', 'user_email'];
            
    for (const field of requiredFields) {
        if(!this.body[field]) {
            throw new Error(`O parametro ${field} é obrigatório.`)
        }
    }
  }
}