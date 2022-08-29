let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/indonesia'), 'Done √', wm, 'NEXT', '.cecanindo', m)
}

handler.help = ['cecanindo']
handler.tags = ['asupan']
handler.register = true
handler.command = /^(cecanindo)$/i
handler.limit = 3
module.exports = handler

