/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

// Other
global.owner = ['6283808840711','6283808840711','6283808840711']
global.pemilik = ['6283808830711']
global.premium = ['6283808840711']
global.pengguna = 'Kikii Gabut'
global.botnma = 'Kikii Botz'
global.footer = '©Kikii Gabut'//FooterText Biar Di Bawah Nya Ada Text 
global.web = 'https://youtube.com/channel/UCjjuhOD-Mt2XrKFptMVDysQ' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://github.com/Kikii-Kawaiii' //Ubah Jga Bebas Sama lu 
global.ganti = 'PENCET GPP' //Edit Terserah Lu Mau Apa
global.ganti2 = 'Github'
global.ownernma = '©YT Kiki Gabut'
global.packname = 'ambil aja'
global.author = 'punya kiki🗿'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner kontol',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
