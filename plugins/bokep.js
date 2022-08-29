let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Done √', m)
}
handler.help = ['bokep']
handler.tags = ['asupan']

handler.command = /^(bokep)$/i
handler.premium = false
handler.register = true
handler.limit = 1
module.exports = handler


