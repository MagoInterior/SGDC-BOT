let MessageType = require('@adiwajshing/baileys');
let chalk = require("chalk");
let handler = async(m, { conn, text }) => {
   
   if (!text) return m.reply('_Masukkan Nama Grup!_')
   try{
         await m.reply(global.wait)
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
    console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nSGDC-BOT'))
    //conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
     m.reply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url + '\n\n*SGDC-BOT*')
       } catch (e) {
    m.reply('```Error```')
    console.log (e)
  }
}
handler.command = /^((create|buat)(gc|grup|group))$/

module.exports = handler
///////////////////////
//////// MasWay ///////
///////////////////////
