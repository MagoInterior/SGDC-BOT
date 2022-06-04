let util = require('util')
let path = require('path')
let MessageType = require("@adiwajshing/baileys")
let { spawn } = require('child_process')
   
// Font By MFarelS:V
let fontPath = 'src/font/Zahraaa.ttf'
let handler  = async (m, { conn, args }) => {
 await m.reply(global.wait)
  let inputPath ='src/kertas/magernulis1.jpg'
  let outputPath = 'tmp/hasil.jpg'
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
  let teks = args.join` `
  // conn.reply(m.chat, util.format({fontPath, inputPath, outputPath, tgl, hari, teks}), m)
  spawn('convert', [
    inputPath,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+78',
    hari,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+102',
    tgl,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+344+142',
    teks,
    outputPath
  ])
  .on('error', e => conn.reply(m.chat, util.format(e), m))
  .on('exit', () => {
conn.sendFile(m.chat, outputPath, 'SGDC-BOT.png', '*SGDC-BOT*', m)
  })
}

handler.command = /^nulis$/i
module.exports = handler
// BY MFARELS NJEENK
// https://GitHub.com/MFarelS/