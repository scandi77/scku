let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{0,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
     
    if (isAdmin) return 
    if (!isBotAdmin) return
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

module.exports = handler


