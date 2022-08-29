let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zacros.my.id/asupan/santuy', 'asupan.mp4', 'Done √', m)
}
handler.help = ['asupansantuy']
handler.tags = ['asupan']

handler.command = /^(asupansantuy)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler
