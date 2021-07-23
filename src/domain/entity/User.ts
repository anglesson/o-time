import { Overtime } from "./Overtime";

class User {
	public readonly name: string;
	public readonly email: string;
	public readonly overtimes: Array<Overtime>;

	constructor(name: string, email: string) {
		this.name = name;
		this.email = email;
	}
}

export { User };
