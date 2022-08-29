let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let menuaa = fs.readFileSync('./mp3/uhah.opus') 
conn.sendFile(m.chat, menuaa, '', '', m, true)
}

handler.customPrefix = /^(menu|.menu|#menu|allmenu|.allmenu|#allmenu)$/i
handler.command = new RegExp

handler.limit = 10
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
