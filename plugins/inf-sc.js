let handler = async m => m.reply(`
            Silahkan Contact Owner wa.me/6283823701518
`.trim()) //

handler.customPrefix = /^(.sc|.script|sc|script)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
module.exports = handler