let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/6839f7205831eafbf8d5a.jpg', m, { packname: "© ᴹᴿ᭄Edo", author: "Created By Edo Romadon" })
}

handler.customPrefix = /^(ok|sip)$/i
handler.command = new RegExp

module.exports = handler
