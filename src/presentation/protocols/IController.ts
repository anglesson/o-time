import { IHttpRequest } from './IHttpRequest'
import { IHttpResponse } from './IHttpResponse'
interface IController {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse>
}

export { IController }
