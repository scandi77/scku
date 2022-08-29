let handler = async m => m.reply(`
            *Wallaikumsallam Wr. Wb* 🙏
`.trim()) //

handler.customPrefix = /^(assalamualaikum|assalamuallaikum|assallamuallaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
module.exports = handler