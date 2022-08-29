let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod', 'bokep.mp4', 'Done √', m)
}
handler.help = ['bokep1']
handler.tags = ['asupan']

handler.command = /^(bokep1)$/i
handler.premium = false
handler.register = true
handler.limit = 1
module.exports = handler


