const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let sewa = `*────── 「 LIST SEWA 」 ──────*

Hai 👋
𝐈𝐧𝐢 𝐥𝐢𝐬𝐭 𝐬𝐞𝐰𝐚 𝐤𝐚𝐦𝐢 𝐬𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐝𝐢𝐩𝐢𝐥𝐢𝐡

┏━━━•❅•°•❈〔 𝐋𝐢𝐬𝐭 𝐒𝐞𝐰𝐚 〕
┣★ミ 1Minggu : 30k - Max 3Group
┣★ミ 2Minggu : 40k - Max 4Group
┣★ミ 3Minggu : 50k - Max 5Group
┗━━━•❅•°•❈

┏━━━•❅•°•❈𝐊𝐞𝐮𝐧𝐭𝐮𝐧𝐠𝐚𝐧
┣➲ Fitur Auto Lick Group
┣➲ Fitur Welcome / Leave
┣➲ Dll
┗━━━•❅•°•❈
Contact person Owner:
wa.me/6283823701518 (Owner)

Pembayaran Via Dana - OVO : 083823701518`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/6839f7205831eafbf8d5a.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: sewa,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Instagram',
               url: 'https://instagram.com/edoromadon'
             }

           },
               {
             callButton: {
               displayText: 'Dana',
               phoneNumber: '0823823701518'
             }
           },           
               {
             callButton: {
               displayText: 'Ovo',
               phoneNumber: '083823701518',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['sewa']
handler.tags = ['donasi']
handler.command = /^sewabot$/i

module.exports = handler