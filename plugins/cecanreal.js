let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/cecan'), 'Done √', wm, 'NEXT', '.cecansantuy', m)
}

handler.help = ['cecansantuy']
handler.tags = ['asupan']
handler.register = true
handler.command = /^(cecansantuy)$/i
handler.limit = 3

module.exports = handler