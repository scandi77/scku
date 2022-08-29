let handler = async m => m.reply(`
            Silahkan Tunggu Owner Online *TERIMAKASIH*
`.trim()) //

handler.customPrefix = /^(edo|do|hallo|haii|hai|allo|bos|bosku|bro|bre)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
module.exports = handler