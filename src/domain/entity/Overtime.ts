import { User } from "./User";

class Overtime {
	public readonly date: Date;
	public readonly start_time: Date;
	public readonly end_time: Date;
	public readonly description: string;
	public readonly shipping_status: boolean;
  public readonly user: User;

	constructor(
		date: Date,
		start_time: Date,
		end_time: Date,
		description: string,
		shipping_status: boolean,
    user: User
	) {
    this.date = date;
    this.start_time = start_time;
    this.end_time = end_time;
    this.description = description;
    this.shipping_status = shipping_status;
    this.user = user;
  }

  

}

export { Overtime };
