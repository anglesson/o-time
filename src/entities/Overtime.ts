import { User } from "./User";
import { v4 as uuidv4 } from 'uuid'

class Overtime {
	private id: string;
	private date: Date;
	private start_time: Date;
	private end_time: Date;
	private description: string;
	private shipping_status: boolean;
	private user: User;

	constructor(
		date: Date,
		start_time: Date,
		end_time: Date,
		description: string,
		user: User
	) {
		this.id = uuidv4(); 
		this.date = date;
		this.start_time = start_time;
		this.end_time = end_time;
		this.description = description;
		this.shipping_status = false;
		this.user = user;
	}

	getId() {
		return this.id;
	}

	getDate() {
		return this.date;
	}

	setDate(date: Date) {
		this.date = date;
	}

	getStartTime() {
		return this.start_time;
	}

	setStartTime(start_time: Date) {
		this.start_time = start_time;
	}

	getEndTime() {
		return this.end_time;
	}

	setEndTime(end_time: Date) {
		this.end_time = end_time;
	}

	getDescription() {
		return this.description;
	}

	setDescription(description: string) {
		this.description = description;
	}

	getShippingStatus() {
		return this.shipping_status;
	}

	setShippingStatus(status: boolean) {
		this.shipping_status = status;
	}

	getUser() {
		return this.user;
	}

	setUser(user: User) {
		this.user = user;
	}
}

export { Overtime };
