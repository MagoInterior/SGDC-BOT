let { WA_MESSAGE_STUB_TYPES,  MessageType  } = require('@adiwajshing/baileys')
let urlRegex = require('url-regex')({ strict: false })
let PhoneNumber = require('awesome-phonenumber')
let terminalImage = global.opts['img'] ? require('terminal-image') : ''
let chalk = require('chalk')
let fs = require('fs')

module.exports = async function (m, conn = {user: {}}) {
  let _name = conn.getName(m.sender)
  let sender = PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international') + (_name ? ' ~' + _name : '')
  let chat = conn.getName(m.chat)
  //let ansi = '\x1b['
  let img
  try {
    if (global.opts['img'])
      img = [MessageType.image, 1+MessageType.sticker].includes(m.mtype) ? await terminalImage.buffer(await m.download()) : false
  } catch (e) {
    console.error(e)
  }
  let filesize = m.msg ?
    m.msg.vcard ?
      m.msg.vcard.length :
      m.msg.fileLength ?
        m.msg.fileLength.low || m.msg.fileLength :
        m.text ?
          m.text.length :
          0
    : m.text ? m.text.length : 0
  let nama = conn.getName(sender)
  let utk = 'to'
  let user = global.DATABASE.data.users[m.sender]
  let me = PhoneNumber('+' + (conn.user && conn.user.jid).replace('@s.whatsapp.net', '')).getNumber('international')
  console.log(`
   ${chalk.white('    class: "SGDC-BOT"')}
${chalk.blue('%s')} ${chalk.black(chalk.bgGreen('%s'))} ${chalk.black(chalk.bgBlue('%s'))}
${chalk.blue('%s')} ${chalk.redBright('%s')} ${chalk.blue('%s')} 
${chalk.green('%s')}
${chalk.black(chalk.bgRed('%s'))}${chalk.magenta('|')}${chalk.redBright('%s/%s %sB')}
`.trim(),
    me + '|' + conn.user.name,
    (m.messageTimestamp ? new Date(1000 * (m.messageTimestamp.low || m.messageTimestamp)) : new Date).toTimeString(),
    m.messageStubType ? WA_MESSAGE_STUB_TYPES[m.messageStubType] : '',
    sender,
    chat ? utk : '',
    chat,
    m.chat,
    m.mtype ? m.mtype.replace(/message$/i, '').replace('audio', m.msg.ptt ? 'PTT' : 'audio').replace(/^./, v => v.toUpperCase()) : '',
    filesize,
    filesize === 0 ? 0 : (filesize / 1009 ** Math.floor(Math.log(filesize) / Math.log(1000))).toFixed(1),
    ['', ...'KMGTP'][Math.floor(Math.log(filesize) / Math.log(1000))] || ''
  )
  if (img) console.log(img.trimEnd())
  if (typeof m.text === 'string' && m.text) {
    let log = m.text.replace(/\u200e+/g, '')
    let mdRegex = /(?<=(?:^|[\s\n])\S?)(?:([*_~])(.+?)\1|```((?:.||[\n\r])+?)```)(?=\S?(?:[\s\n]|$))/g
    let mdFormat = (depth = 4) => (_, type, text, monospace) => {
      let types = {
        _: 'italic',
        '*': 'bold',
        '~': 'strikethrough'
      }
      text = text || monospace
      let formatted = !types[type] || depth < 1 ? text : chalk[types[type]](text.replace(mdRegex, mdFormat(depth - 1)))
      // console.log({ depth, type, formatted, text, monospace }, formatted)
      return formatted
    }
    if (log.length < 4096)
      log = log.replace(urlRegex, (url, i, text) => {
        let end = url.length + i
        return i === 0 || end === text.length || (/^\s$/.test(text[end]) && /^\s$/.test(text[i - 1])) ? chalk.greenBright(url) : url
      })
    log = log.replace(mdRegex, mdFormat(4))
    if (m.mentionedJid) for (let user of m.mentionedJid) log = log.replace('@' + user.split`@`[0], chalk.blueBright('@' + conn.getName(user)))
    console.log(m.error != null ? chalk.red(log) : m.isCommand ? chalk.cyan(log) : chalk.red(log))
  }
  if (m.messageStubParameters) console.log(m.messageStubParameters.map(jid => {
    let name = conn.getName(jid)
    return chalk.gray(PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international') + (name ? ' ~' + name : ''))
  }).join(', '))
  switch (m.mtype) {
    case MessageType.document:
      console.log(`📄 ${m.msg.filename || m.msg.displayName || 'Document'}`)
      break
    case MessageType.contact:
      console.log(`👨 ${m.msg.displayName || ''}`)
      break
    case MessageType.contactsArray:
      console.log(`👨‍👩‍👧‍👦 ${' ' || ''}`)
      break
    case MessageType.audio:
      let s = m.msg.seconds
      console.log(chalk.cyan(`${m.msg.ptt ? '🎤 (PTT' : '🎧 ('}AUDIO) ${Math.floor(s / 60).toString().padStart(2, 0)}:${(s % 60).toString().padStart(2, 0)}`))
      break
  }
  console.log()
  // if (m.quoted) console.log(m.msg.contextInfo)
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'lib/print.js'"))
  delete require.cache[file]
})

//hehehee
