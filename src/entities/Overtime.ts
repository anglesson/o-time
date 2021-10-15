import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn, UpdateDateColumn } from 'typeorm';
import { User } from "./User";
import { v4 as uuidv4 } from 'uuid';

@Entity('overtimes')
class Overtime {
	@PrimaryColumn()
	id: string;

	@Column()
	date: Date;

	@Column()
	start_time: Date;

	@Column()
	end_time: Date;

	@Column()
	description: string;

	@Column()
	shipping_status: boolean;
	
	@JoinColumn({name: "user_id"})
  @ManyToOne(() => User)
	user: User;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}
	}
}

export { Overtime };
