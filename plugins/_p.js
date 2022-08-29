let handler = async m => m.reply(`
            Biasakan *Assalamuallaikum* Dulu Bukan Pa Pe Pa Pe -_-
`.trim()) //

handler.customPrefix = /^(.p|p)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
module.exports = handler