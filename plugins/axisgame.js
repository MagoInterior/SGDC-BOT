let util = require('util')
let path = require('path')
let { spawn } = require('child_process')
let handler = async (m, { conn, args }) => {
  let axisgame ='src/gaming.hc'
await conn.reply(m.chat, `
─────────────────────
                      *ＳＧＤＣ－ＢＯＴ*
─────────────────────
_Config Ini Dibuat Sejak 4 Bulan Yang Lalu!_
_Jika Tidak Terkoneksi, Sangat Disarankan Untuk Mencari Config Yang Lain!_
_Gunakan Aplikasi HTTP Custom Versi Terbaru Playstore Dan Jangan Lupa Ganti Akun SSH!._
_Jika Confignya Mode Psiphon, Silahkan Input Kode Trial._

_Gak Ada Update Terbaru, Saya Sudah Vakum Masalah Perconfigan_
─────────────────────
                       *ＳＧＤＣ－ＢＯＴ*
─────────────────────
`.trim(), m)
conn.sendFile(m.chat, axisgame, 'AXIS GAME.hc','ini', m)
}

handler.command = /^(axisgame)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
