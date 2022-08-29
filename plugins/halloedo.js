let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let helloedo = fs.readFileSync('./mp3/edo.opus') 
conn.sendFile(m.chat, helloedo, '', '', m, true)
}

handler.customPrefix = /^(edo|do|hallo|haii|hai|allo|bos|bosku|bro|bre)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
