let handler = async (m, { conn, text }) => {
    let own = '6283120857907@s.whatsapp.net'
  conn.reply(m.chat, `_Ngapain Manggil Owner @${own.split("@")[0]}?_`, m, { 
      contextInfo: { 
          mentionedJid: [own] 
      } 
  })
}
handler.customPrefix = /(@6283120857907)/i
handler.command = new RegExp

module.exports = handler				     
