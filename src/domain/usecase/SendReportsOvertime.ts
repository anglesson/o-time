import { User } from "../entity/User";
import { IMailProvider } from "../providers/IMailProvider";
import { IOvertimeRepository } from "../repository/IOvertimeRepository"

class SendReportsOvertime {
    overtimeRepository: IOvertimeRepository;
    mailProvider: IMailProvider;

    constructor(overtimeRepository: IOvertimeRepository, mailProvider: IMailProvider) {
        this.overtimeRepository = overtimeRepository;
        this.mailProvider = mailProvider;
    }

    async execute(user: User) {
        const overtimes = this.overtimeRepository.getOvertimesByUser(user);
        const overtimesNotSend = overtimes.filter((overtime) => {
            return overtime.shipping_status == false;
        });

        if(overtimesNotSend.length == 0)
            throw new Error("Não há horas extras pendentes de envio.");
        
        this.mailProvider.sendMail({
            to: {
                name: "Anglesson",
                email: "aanglesson@hotmail.com"
            },
            from: {
                name: user.name,
                email: user.email
            },
            subject: `Horas extras - ${user.name}`,
            body: `<ol>
                ${overtimesNotSend.forEach((element) => {
                    return '<li>'+element+'</li>';
                })}
            </ol>`
        })
    }

}

export { SendReportsOvertime }