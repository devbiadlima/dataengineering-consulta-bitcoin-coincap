/** CONSULTA API COINCAP */

const option = {
    method: "GET",
    mode: 'cors',
    cache: 'default'
}

fetch('https://api.coincap.io/v2/assets/bitcoin', option)
    .then(response => {response.json()
        .then( data => console.log(data))})
        .catch(e => console.log('Deu Erro: '+ e,message));


//** ENVIO DE E-MAIL */

//** CONFIGURAÇÕES DE E-MAIL */
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: "alertabitcoincap@outlook.com",
        pass:"Matrix1324##"
    },
    tls: {
        rejectUnauthorized: false,
    },
});

//** ENVIO DO E-MAIL */
async function run(){
    const mailSent = await transporter.sendMail({
        text: 'Alerta cotação Bitcoin',
        subject: 'Alerta cotação Bitcoin',
        from: 'alertabitcoincap@outlook.com',
        to: ['biadlima@live.com']
    });

    console.log(mailSent);
}

run();