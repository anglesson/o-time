import { User } from "../entity/User";
import { IMailProvider } from "../../presentation/providers/IMailProvider";
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
            return overtime.getShippingStatus() == false;
        });

        if (overtimesNotSend.length == 0)
            throw new Error("Não há horas extras pendentes de envio.");

        await this.mailProvider.sendMail({
            to: {
                name: "Anglesson",
                email: "aanglesson@gmail.com"
            },
            from: {
                name: user.name,
                email: user.email
            },
            subject: `O'Time - Horas extras - ${user.name}`,
            body: `
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap');
            *{
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              color: #222831;
              font-family: 'Montserrat', sans-serif;
              font-size: 20px;
            }
            body {
              background-color: #EEEEEE;
            }
            .content {
              width: 100%;
            }
            
            .banner {
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #00ADB5;
              height: 8rem;
            }
            
            .banner h1 {
              color: #EEEEEE;
              font-size: 80px;
              font-weight: 900;
            }
            
            .main, table {
              margin-top: 2rem;
            }
            
            .main {
              display: flex;
              justify-content: center;
              flex-direction: column;
              padding: 0 4rem;
            }
            
            table {
              text-align: left;
            }
            
            td, th {
              height: 50px;
              padding: 20px;
            }
            
            table tr:nth-child(1), th {
               background-color: #393E46;
               color: #EEEEEE;
            }
            </style>
            <div class="content">
            <div class="banner">
              <h1>O'Time</h1>
            </div>
              <div class="main">
              <p>Este foi o meu total de horas extras.</p>
              <table style="width:100%">
                <tr>
                  <th>Dia</th>
                  <th>Descricao</th>
                  <th>Horas Trabalhadas</th>
                </tr>
            `+
                overtimesNotSend.map((element) => {
                    return `
                        <tr>
                            <td>${element.getDate().getDate()}/${element.getDate().getMonth()+1}/${element.getDate().getFullYear()}</td>
                            <td>${element.getDescription()}</td> 
                            <td>${new Date().setTime(element.getEndTime().getTime() - element.getStartTime().getTime())}</td>
                        </tr>`;
                }) +
                `
            </table>
          </div>
          </div>`
        });

        // Implementar a mudança de status da Overtime após o envio.
        this.overtimeRepository.changeShippingStatus(overtimesNotSend);
    }

}

export { SendReportsOvertime }