let handler = async m => m.reply(`
            Mau tes apa ??👉( ˘ω˘ )👈
`.trim()) //

handler.customPrefix = /^(tes|test)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
module.exports = handler