import { v4 as uuidv4 } from 'uuid'

class User {
	public readonly name: string;
	public readonly email: string;

	constructor(name: string, email: string) {
		this.name = name;
		this.email = email;
	}
}

export { User };
