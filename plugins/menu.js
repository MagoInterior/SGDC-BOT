const { MessageType } = require ('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let axios = require ('axios')
let fs = require ('fs')
let util = require('util')
let path = require('path')
let os = require("os")
let kntl = require("../src/kntl.json");
let { spawn } = require('child_process')
let { performance } = require('perf_hooks')
let handler  = async (m, { conn, args, text, command, isOwner, isPrems, isROwner, usedPrefix: _p }) => {
let gmbr = './src/SGDC-BOT.jpg'
//let old = performance.now()
 await conn.fakeReply(m.chat, '```L o a d i n g . . .```', '0@s.whatsapp.net', '```Sabar Om :/```', 'status@broadcast')
//let neww = performance.now()
 try {
let chalk = require("chalk");
let { 
wa_version, 
mcc, 
mnc,
os_version, 
device_manufacturer, 
device_model 
} = conn.user.phone
 let platfrom = os.platform()
 let core = os.cpus().length
 let ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB / ' + Math.round(require('os').totalmem / 1024 / 1024) + 'MB'
 let wa_versi = wa_version
 let _mcc = mcc
 let _mnc = mnc
 let versi_os = os_version
 let device = device_manufacturer
 let versi_hp = device_model
   console.log(chalk.red(`
SGDC-BOT Service Running
			     
WhatsApp Version: ${chalk.bold.green(wa_versi)}
Platform: ${chalk.bold.green(platfrom)}
MCC: ${chalk.bold.green(_mcc)}
MNC: ${chalk.bold.green(_mnc)}
Core: ${chalk.bold.green(core)}
RAM: ${chalk.bold.green(ram)}
Device: ${chalk.bold.green(device)}
OS Version: ${chalk.bold.green(versi_os)}
Device Version: ${chalk.bold.green(versi_hp)}

Powered By SGDC-BOT || M AFDHAN
`))
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let bname = package.name
    let vers = package.version
    //let dsci 
 //   let kntl = require("../src/kntl.json");
 //   let apikey = (kntl.xinzbot)
    //let ree = await axios.get(`https://xinzbot-api.herokuapp.com/api/ucapan?apikey=${apikey}&timeZone=Asia/Jakarta`)
    //let cpn = ree.data.result
   // let res = await axios.get(`https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=${apikey}&tanggal=19&bulan=7`)
   // let rmd = res.data.result
//    let gc = 'https://tinyurl.com/ygu7vxny'
  //  let desc = 'Powered by'
//    let ping = neww - old + ' ms'
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let islami = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let countDown = new Date("2021-07-19").getTime();
    let newDate = new Date().getTime();
    let dist= countDown - newDate;
    let hari = Math.floor(dist / (1000 * 60 * 60 * 24));
    let jam = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let menit = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    let detik = Math.floor((dist % (1000 * 60)) / 1000);
    let ampm = time >= 12 ? 'PM':'AM';
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let premi = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    let reg = Object.keys(global.DATABASE._data.users).length
    let own = '6283120857907@s.whatsapp.net'
    let cown = '6283129011845@s.whatsapp.net'
    let mmk = m.sender
    let name = conn.getName(mmk)
   // let about = (await conn.getStatus(mmk)).status
  //  let nom = PhoneNumber('+' + mmk.replace('@s.whatsapp.net', '')).getNumber('international')
    let mode
    if(mmk === own) mode = "ROwner SGDC-BOT"
    else if(mmk === cown) mode = "Owner SGDC-BOT"
    else if(mmk === conn.user.jid) mode = "User SGDC-BOT"
    else if(premi) mode = "Premium User"
    else mode = "Free User"
 //   let chat = global.DATABASE.data.chats[m.chat]
  //  let ngc
  //  if(m.isGroup) ngc = conn.getName(m.chat)
//    else ngc = 'Private Chat'
    let mn = `
─────────────────────
                      *ＳＧＤＣ－ＢＯＴ*
─────────────────────
UserName: \`\`\`${name} (@${mmk.split("@")[0]})\`\`\`
UserMode: \`\`\`${mode}\`\`\`

Owner: \`\`\`@${own.split("@")[0]}\`\`\`
Mods: \`\`\`@${cown.split("@")[0]}\`\`\`
Base: \`\`\`Nurutomo_wabot-aq\`\`\`

Total User: *${reg}*
Uptime: *${uptime}*
Uptime Terminal: *${muptime}*
─────────────────────
*ＲＯＡＤ ＴＯ ＩＤＵＬ ＡＤＨＡ １４４２ Ｈ*
_${hari} Hari, ${jam} Jam, ${menit} Menit, ${detik} Detik_


*ＷＡＫＴＵ:* ${time}  ${ampm}

*ＨＡＲＩ ＩＮＩ* 
${week}, ${date} M
${week}, ${islami} H

>  \`\`\`${_p}info\`\`\`
>  \`\`\`${_p}report\`\`\`
>  \`\`\`${_p}owner\`\`\`
>  \`\`\`${_p}donasi\`\`\`
> _https://saweria.co/AFD11_
─────────────────────
┌──────────────────╮
│               *⸨   TEXT MAKER   ⸩*
│
├≽ \`\`\`${_p}quotemaker\`\`\`
├≽ \`\`\`${_p}photooxy\`\`\`
├≽ \`\`\`${_p}qrcode\`\`\`
├≽ \`\`\`${_p}barcode\`\`\`
├≽ \`\`\`${_p}tahta\`\`\`
├≽ \`\`\`${_p}tahta2\`\`\`
├≽ \`\`\`${_p}sgdc\`\`\`
├≽ \`\`\`${_p}nulis\`\`\`
├≽ \`\`\`${_p}nulis2\`\`\`
├─────────────────
│              *⸨   SERTI MAKER   ⸩* ( ERROR )
│
├≽ \`\`\`${_p}pubgserti\`\`\`
├≽ \`\`\`${_p}pubgserti2\`\`\`
├≽ \`\`\`${_p}pubgserti3\`\`\`
├≽ \`\`\`${_p}pubgserti4\`\`\`
├≽ \`\`\`${_p}pubgserti5\`\`\`
├≽ \`\`\`${_p}mlserti\`\`\`
├≽ \`\`\`${_p}mlserti2\`\`\`
├≽ \`\`\`${_p}mlserti3\`\`\`
├≽ \`\`\`${_p}mlserti4\`\`\`
├≽ \`\`\`${_p}mlserti5\`\`\`
├≽ \`\`\`${_p}ffserti\`\`\`
├≽ \`\`\`${_p}ffserti2\`\`\`
├≽ \`\`\`${_p}ffserti3\`\`\`
├≽ \`\`\`${_p}ffserti4\`\`\`
├≽ \`\`\`${_p}ffserti5\`\`\`
├─────────────────
│                *⸨   ISLAMIC   ⸩*
│
├≽ \`\`\`${_p}ayatkursi\`\`\`
├≽ \`\`\`${_p}doawirid\`\`\`
├≽ \`\`\`${_p}doatahlil\`\`\`
├≽ \`\`\`${_p}doaharian\`\`\`
├≽ \`\`\`${_p}niatsholat\`\`\`
├≽ \`\`\`${_p}bacaansholat\`\`\`
├≽ \`\`\`${_p}asmaulhusna\`\`\`
├≽ \`\`\`${_p}getsurah\`\`\`
├≽ \`\`\`${_p}iqra\`\`\`
├≽ \`\`\`${_p}hadist\`\`\`
├≽ \`\`\`${_p}abudaud\`\`\`
├≽ \`\`\`${_p}ahmad\`\`\`
├≽ \`\`\`${_p}darimi\`\`\`
├≽ \`\`\`${_p}ibnumajah\`\`\`
├≽ \`\`\`${_p}nasai\`\`\`
├≽ \`\`\`${_p}malik\`\`\`
├≽ \`\`\`${_p}bukhari\`\`\`
├≽ \`\`\`${_p}muslim\`\`\`
├─────────────────
│                *⸨   STICKER   ⸩*
│
├≽ \`\`\`${_p}ttp\`\`\`
├≽ \`\`\`${_p}ttp2\`\`\`
├≽ \`\`\`${_p}ttp3\`\`\`
├≽ \`\`\`${_p}attp\`\`\`
├≽ \`\`\`${_p}attp2\`\`\`
├≽ \`\`\`${_p}semoji\`\`\`
├≽ \`\`\`${_p}triggered\`\`\`
├≽ \`\`\`${_p}stickertag\`\`\`
├≽ \`\`\`${_p}sticgif\`\`\`
├≽ \`\`\`${_p}sticker\`\`\`
├≽ \`\`\`${_p}stickerwa\`\`\`
├≽ \`\`\`${_p}stickertele\`\`\`
├≽ \`\`\`${_p}stickerline\`\`\`
├≽ \`\`\`${_p}stickerwm\`\`\`
├≽ \`\`\`${_p}stickerpatrick\`\`\`
├≽ \`\`\`${_p}takestic\`\`\`
├≽ \`\`\`${_p}tovideo\`\`\`
├≽ \`\`\`${_p}togif\`\`\`
├≽ \`\`\`${_p}toimg\`\`\`
├─────────────────
│         *⸨   STICKER EMOJI   ⸩*
│
├≽ \`\`\`${_p}emo lg\`\`\`
├≽ \`\`\`${_p}emo htc\`\`\`
├≽ \`\`\`${_p}emo apple\`\`\`
├≽ \`\`\`${_p}emo twitter\`\`\`
├≽ \`\`\`${_p}emo google\`\`\`
├≽ \`\`\`${_p}emo mozilla\`\`\`
├≽ \`\`\`${_p}emo whatsapp\`\`\`
├≽ \`\`\`${_p}emo microsoft\`\`\`
├≽ \`\`\`${_p}emo samsung\`\`\`
├≽ \`\`\`${_p}emo facebook\`\`\`
├≽ \`\`\`${_p}emo joypixels\`\`\`
├≽ \`\`\`${_p}emo openmoji\`\`\`
├≽ \`\`\`${_p}emo emojidex\`\`\`
├≽ \`\`\`${_p}semoji\`\`\`
├─────────────────
│         *⸨   RANDOM IMAGE   ⸩*
│
├≽ \`\`\`${_p}meme\`\`\`
├≽ \`\`\`${_p}cecan\`\`\`
├≽ \`\`\`${_p}cogaj\`\`\`
├≽ \`\`\`${_p}darkjoke\`\`\`
├≽ \`\`\`${_p}randomexo\`\`\`
├≽ \`\`\`${_p}randombts\`\`\`
├≽ \`\`\`${_p}randomcum\`\`\`
├≽ \`\`\`${_p}randomfeet\`\`\`
├≽ \`\`\`${_p}randomloli\`\`\`
├≽ \`\`\`${_p}randomtits\`\`\`
├≽ \`\`\`${_p}randomneko\`\`\`
├≽ \`\`\`${_p}randonhusbu\`\`\`
├≽ \`\`\`${_p}randomkanna\`\`\`
├≽ \`\`\`${_p}randomshota\`\`\`
├≽ \`\`\`${_p}randomwaifu\`\`\`
├≽ \`\`\`${_p}randomsagiri\`\`\`
├≽ \`\`\`${_p}randomshinobu\`\`\`
├≽ \`\`\`${_p}randomhentai\`\`\`
├≽ \`\`\`${_p}pinterest\`\`\`
├≽ \`\`\`${_p}gimage\`\`\`
├≽ \`\`\`${_p}wpanime\`\`\`
├─────────────────
│         *⸨   FILTERS IMAGE   ⸩*
│
├≽ \`\`\`${_p}willow\`\`\`
├≽ \`\`\`${_p}nashville\`\`\`
├≽ \`\`\`${_p}inkwell\`\`\`
├≽ \`\`\`${_p}perpetua\`\`\`
├≽ \`\`\`${_p}reyes\`\`\`
├≽ \`\`\`${_p}slumber\`\`\`
├≽ \`\`\`${_p}rise\`\`\`
├≽ \`\`\`${_p}stinson\`\`\`
├≽ \`\`\`${_p}toaster\`\`\`
├≽ \`\`\`${_p}valencia\`\`\`
├≽ \`\`\`${_p}walden\`\`\`
├≽ \`\`\`${_p}xpro2\`\`\`
├≽ \`\`\`${_p}lofi\`\`\`
├≽ \`\`\`${_p}1977\`\`\`
├≽ \`\`\`${_p}aden\`\`\`
├≽ \`\`\`${_p}moon\`\`\`
├≽ \`\`\`${_p}kelvin\`\`\`
├≽ \`\`\`${_p}lark\`\`\`
├≽ \`\`\`${_p}maven\`\`\`
├≽ \`\`\`${_p}mayfair\`\`\`
├≽ \`\`\`${_p}earlybird\`\`\`
├≽ \`\`\`${_p}brannan\`\`\`
├≽ \`\`\`${_p}brooklyn\`\`\`
├≽ \`\`\`${_p}clarendon\`\`\`
├≽ \`\`\`${_p}gingham\`\`\`
├≽ \`\`\`${_p}invert\`\`\`
├≽ \`\`\`${_p}greyscale\`\`\`
├≽ \`\`\`${_p}brightness\`\`\`
├≽ \`\`\`${_p}threshold\`\`\`
├≽ \`\`\`${_p}sepia\`\`\`
├≽ \`\`\`${_p}red\`\`\`
├≽ \`\`\`${_p}blue\`\`\`
├≽ \`\`\`${_p}blur\`\`\`
├≽ \`\`\`${_p}green\`\`\`
├≽ \`\`\`${_p}pixelate\`\`\`
├≽ \`\`\`${_p}blurple\`\`\`
├─────────────────
│           *⸨   SOCIAL MEDIA   ⸩*
│
├≽ \`\`\`${_p}igstalk\`\`\`
├≽ \`\`\`${_p}tiktokstalk\`\`\`
├≽ \`\`\`${_p}igpost\`\`\`
├─────────────────
│                   *⸨   SPAM   ⸩*
│
├≽ \`\`\`${_p}spam\`\`\`
├≽ \`\`\`${_p}spam2\`\`\`
├≽ \`\`\`${_p}spam3\`\`\`
├≽ \`\`\`${_p}spammer\`\`\`
├≽ \`\`\`${_p}allspam\`\`\`
├≽ \`\`\`${_p}call\`\`\`
├≽ \`\`\`${_p}olx\`\`\`
├─────────────────
│                  *⸨   GROUP   ⸩*
│
├≽ \`\`\`${_p}tagall\`\`\`
├≽ \`\`\`${_p}otagall\`\`\`
├≽ \`\`\`${_p}grup\`\`\`
├≽ \`\`\`${_p}setppgc\`\`\`
├≽ \`\`\`${_p}kontag\`\`\`
├≽ \`\`\`${_p}faketroli\`\`\`
├≽ \`\`\`${_p}setname\`\`\`
├≽ \`\`\`${_p}setdesc\`\`\`
├≽ \`\`\`${_p}add\`\`\`
├≽ \`\`\`${_p}promote\`\`\`
├≽ \`\`\`${_p}demote\`\`\`
├≽ \`\`\`${_p}kick\`\`\`
├≽ \`\`\`${_p}oadd\`\`\`
├≽ \`\`\`${_p}opromote\`\`\`
├≽ \`\`\`${_p}odemote\`\`\`
├≽ \`\`\`${_p}okick\`\`\`
├≽ \`\`\`${_p}getpp\`\`\`
├≽ \`\`\`${_p}rptag\`\`\`
├≽ \`\`\`${_p}listadmin\`\`\`
├≽ \`\`\`${_p}hidetag\`\`\`
├≽ \`\`\`${_p}ohidetag\`\`\`
├≽ \`\`\`${_p}fitnah\`\`\`
├─────────────────
│                 *⸨   ANIME   ⸩*
│
├≽ \`\`\`${_p}anime husbu\`\`\`
├≽ \`\`\`${_p}anime neko\`\`\`
├≽ \`\`\`${_p}anime waifu\`\`\`
├≽ \`\`\`${_p}anime random\`\`\`
├─────────────────
│              *⸨   ANIME 18+   ⸩*
│
├≽ \`\`\`${_p}cum\`\`\`
├≽ \`\`\`${_p}feet\`\`\`
├≽ \`\`\`${_p}loli\`\`\`
├≽ \`\`\`${_p}tits\`\`\`
├≽ \`\`\`${_p}neko\`\`\`
├≽ \`\`\`${_p}husbu\`\`\`
├≽ \`\`\`${_p}kanna\`\`\`
├≽ \`\`\`${_p}shota\`\`\`
├≽ \`\`\`${_p}waifu\`\`\`
├≽ \`\`\`${_p}sagiri\`\`\`
├≽ \`\`\`${_p}shinobu\`\`\`
├≽ \`\`\`${_p}rhentai\`\`\`
├─────────────────
│                   *⸨   NSFW   ⸩*
│
├≽ \`\`\`${_p}chiisaihentai\`\`\`
├≽ \`\`\`${_p}trap\`\`\`
├≽ \`\`\`${_p}yaoi\`\`\`
├≽ \`\`\`${_p}blowjob\`\`\`
├≽ \`\`\`${_p}ecchi\`\`\`
├≽ \`\`\`${_p}ahegao\`\`\`
├≽ \`\`\`${_p}animethighss\`\`\`
├≽ \`\`\`${_p}animebooty\`\`\`
├≽ \`\`\`${_p}animefeets\`\`\`
├≽ \`\`\`${_p}sideoppai\`\`\`
├≽ \`\`\`${_p}hololewd\`\`\`
├≽ \`\`\`${_p}hentai\`\`\`
├≽ \`\`\`${_p}hentaiparadise\`\`\`
├≽ \`\`\`${_p}lewdanimegirls\`\`\`
├≽ \`\`\`${_p}biganimetiddies\`\`\`
├≽ \`\`\`${_p}animearmpits\`\`\`
├≽ \`\`\`${_p}hentaifemdom\`\`\`
├≽ \`\`\`${_p}animebellybutton\`\`\`
├≽ \`\`\`${_p}hentai4everyone\`\`\`
├─────────────────
│                  *⸨   OTHERS   ⸩*
│
├≽ \`\`\`${_p}listmsg\`\`\`
├≽ \`\`\`${_p}listvn\`\`\`
├≽ \`\`\`${_p}listimg\`\`\`
├≽ \`\`\`${_p}listvideo\`\`\`
├≽ \`\`\`${_p}listaudio\`\`\`
├≽ \`\`\`${_p}liststicker\`\`\`
├≽ \`\`\`${_p}getmsg\`\`\`
├≽ \`\`\`${_p}getvn\`\`\`
├≽ \`\`\`${_p}getimg\`\`\`
├≽ \`\`\`${_p}getvideo\`\`\`
├≽ \`\`\`${_p}getaudio\`\`\`
├≽ \`\`\`${_p}getsticker\`\`\`
├≽ \`\`\`${_p}puitis\`\`\`
├≽ \`\`\`${_p}ping\`\`\`
├≽ \`\`\`${_p}bacotan\`\`\`
├≽ \`\`\`${_p}donasi\`\`\`
├≽ \`\`\`${_p}numpangbot\`\`\`
├≽ \`\`\`${_p}stopnumpang\`\`\`
├≽ \`\`\`${_p}getcode\`\`\`
├≽ \`\`\`${_p}jadian\`\`\`
├≽ \`\`\`${_p}nickepep\`\`\`
├≽ \`\`\`${_p}grouplist\`\`\`
├≽ \`\`\`${_p}linkgroup\`\`\`
├≽ \`\`\`${_p}tebakgambar\`\`\`
├≽ \`\`\`${_p}tebakbendera\`\`\`
├≽ \`\`\`${_p}tebaklagu\`\`\`
├≽ \`\`\`${_p}mark\`\`\`
├≽ \`\`\`${_p}google\`\`\`
├≽ \`\`\`${_p}xnxx\`\`\`
├≽ \`\`\`${_p}wiki\`\`\`
├≽ \`\`\`${_p}lirik\`\`\`
├≽ \`\`\`${_p}chord\`\`\`
├≽ \`\`\`${_p}wpanime\`\`\`
├≽ \`\`\`${_p}cuaca\`\`\`
├≽ \`\`\`${_p}waktu\`\`\`
├≽ \`\`\`${_p}jadwaltv\`\`\`
├≽ \`\`\`${_p}save\`\`\`
├≽ \`\`\`${_p}wame\`\`\`
├≽ \`\`\`${_p}ninja\`\`\`
├≽ \`\`\`${_p}afk\`\`\`
├≽ \`\`\`${_p}math\`\`\`
├≽ \`\`\`${_p}say\`\`\`
├≽ \`\`\`${_p}halah\`\`\`
├≽ \`\`\`${_p}hilih\`\`\`
├≽ \`\`\`${_p}huluh\`\`\`
├≽ \`\`\`${_p}heleh\`\`\`
├≽ \`\`\`${_p}holoh\`\`\`
├≽ \`\`\`${_p}repeat\`\`\`
├≽ \`\`\`${_p}otakudesu\`\`\`
├≽ \`\`\`${_p}dewabatch\`\`\`
├≽ \`\`\`${_p}kusonime\`\`\`
├≽ \`\`\`${_p}tts\`\`\`
├≽ \`\`\`${_p}kodepos\`\`\`
├≽ \`\`\`${_p}tebaklagu\`\`\`
├≽ \`\`\`${_p}cek\`\`\`
├≽ \`\`\`${_p}readmore\`\`\`
├≽ \`\`\`${_p}jodoh\`\`\`
├─────────────────
│              *⸨   DOWNLOAD   ⸩*
│
├≽ \`\`\`${_p}zippyshare\`\`\`
├≽ \`\`\`${_p}sfiledl\`\`\`
├≽ \`\`\`${_p}fbdl\`\`\`
├≽ \`\`\`${_p}ytmp3\`\`\`
├≽ \`\`\`${_p}ytmp32\`\`\`
├≽ \`\`\`${_p}ytmp4\`\`\`
├≽ \`\`\`${_p}ytmp42\`\`\`
├≽ \`\`\`${_p}playmp3\`\`\`
├≽ \`\`\`${_p}playmp4\`\`\`
├≽ \`\`\`${_p}xnxxdl\`\`\`
├─────────────────
│                  *⸨   TOOLS   ⸩*
│
├≽ \`\`\`${_p}proxyscrapper\`\`\`
├≽ \`\`\`${_p}anonymuschat\`\`\`
├≽ \`\`\`${_p}next\`\`\`
├≽ \`\`\`${_p}leave\`\`\`
├≽ \`\`\`${_p}upload\`\`\`
├≽ \`\`\`${_p}inspect\`\`\`
├≽ \`\`\`${_p}join\`\`\`
├≽ \`\`\`${_p}fetch\`\`\`
├≽ \`\`\`${_p}ssweb\`\`\`
├≽ \`\`\`${_p}style\`\`\`
├≽ \`\`\`${_p}bitly\`\`\`
├≽ \`\`\`${_p}cuttly\`\`\`
├≽ \`\`\`${_p}tinyurl\`\`\`
├≽ \`\`\`${_p}pastebin\`\`\`
├≽ \`\`\`${_p}report\`\`\`
├≽ \`\`\`${_p}base64\`\`\`
├≽ \`\`\`${_p}decode64\`\`\`
├≽ \`\`\`${_p}faketroli\`\`\`
├≽ \`\`\`${_p}groupsearch\`\`\`
├≽ \`\`\`${_p}githubsearch\`\`\`
├≽ \`\`\`${_p}calc\`\`\`
├≽ \`\`\`${_p}ytsearch\`\`\`
├≽ \`\`\`${_p}hostsearch\`\`\`
├≽ \`\`\`${_p}fullhd\`\`\`
├─────────────────
│                 *⸨   OWNER   ⸩*
│
├≽ \`\`\`${_p}ban\`\`\`
├≽ \`\`\`${_p}unban\`\`\`
├≽ \`\`\`${_p}reset\`\`\`
├≽ \`\`\`${_p}restart\`\`\`
├≽ \`\`\`${_p}clear\`\`\`
├≽ \`\`\`${_p}leave\`\`\`
├≽ \`\`\`${_p}bc\`\`\`
├≽ \`\`\`${_p}bcgc\`\`\`
├≽ \`\`\`${_p}bcbot\`\`\`
├≽ \`\`\`${_p}troli\`\`\`
├≽ \`\`\`${_p}pin\`\`\`
├≽ \`\`\`${_p}unpin\`\`\`
├≽ \`\`\`${_p}setbye\`\`\`
├≽ \`\`\`${_p}setwelcome\`\`\`
├≽ \`\`\`${_p}opromote\`\`\`
├≽ \`\`\`${_p}odemote\`\`\`
├≽ \`\`\`${_p}ohidetag\`\`\`
├≽ \`\`\`${_p}okick\`\`\`
├≽ \`\`\`${_p}bann\`\`\`
├≽ \`\`\`${_p}unbann\`\`\`
├≽ \`\`\`${_p}addprem\`\`\`
├≽ \`\`\`${_p}delprem\`\`\`
├≽ \`\`\`${_p}optionlist\`\`\`
├≽ \`\`\`${_p}addmsg\`\`\`
├≽ \`\`\`${_p}addvn\`\`\`
├≽ \`\`\`${_p}addimg\`\`\`
├≽ \`\`\`${_p}addvideo\`\`\`
├≽ \`\`\`${_p}addaudio\`\`\`
├≽ \`\`\`${_p}addsticker\`\`\`
├≽ \`\`\`${_p}delmsg\`\`\`
├≽ \`\`\`${_p}delvn\`\`\`
├≽ \`\`\`${_p}delimg\`\`\`
├≽ \`\`\`${_p}delvideo\`\`\`
├≽ \`\`\`${_p}delaudio\`\`\`
├≽ \`\`\`${_p}delsticker\`\`\`
├≽ \`\`\`${_p}on\`\`\`
├≽ \`\`\`${_p}off\`\`\`
│
└──────────────────╯
                    \`\`\`${bname}@^${vers}\`\`\`
─────────────────────
                      *ＳＧＤＣ－ＢＯＴ*
─────────────────────
`.trim()
//let thumb = fs.readFileSync("https://telegra.ph/file/2e6035d48c86dc776f17f.jpg")
let ppp = 'src/SGDC-BOT.jpg'
let cap = `*SGDC-BOT BY MUHAMMAD AFDHAN*`
await conn.reply(m.chat, mn, {
  key: { 
      remoteJid: '6283159600193-1620323735@g.us', 
      participant: '0@s.whatsapp.net', 
      fromMe: false 
     }, 
      message: { 
        "imageMessage": { 
        "mimetype": "image/jpeg", 
        "caption":  cap,
        "jpegThumbnail": fs.readFileSync(gmbr)
       }
    }
}, 
{ 
   contextInfo: { 
       mentionedJid: [mmk, own, cown]
      }
})
let chat = global.DATABASE._data.chats[m.chat]
let tek = `Untuk Menu Gretongan, Ketik *${_p}gretongmenu*`
let kemem =  {
  key: { 
      remoteJid: '111234567890-1594482450@g.us', 
      participant: '0@s.whatsapp.net', 
      fromMe: false 
     }, 
      message: { 
        "imageMessage": { 
        "mimetype": "image/jpeg", 
        "caption":  'Gretongers Indonesia | SGDC-TEAM', 
        "jpegThumbnail": fs.readFileSync('./src/sgdc1.jpg')
       }
    }
}
if (m.isGroup && chat.gretong) conn.reply(m.chat, tek, kemem)
else if(!m.isGroup && !chat.gretong || chat.gretong) conn.reply(m.chat, tek, kemem)

  } catch (e) {
    await conn.reply(m.chat, '```Menu Gagal Dimuat!!!```', '0@s.whatsapp.net', 'MENU ERROR! SEGERA LAPORKAN KE OWNER!', 'status@broadcast')
    conn.sendMessage("6282252655313@s.whatsapp.net", `Menu Error\nBot Number: https://wa.me/${global.conn.user.jid.split`@`[0]}\nType Error:\n\n${e}`, MessageType.text)
    console.log(e)
  }
}
handler.command = /^(menu|help|\?)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
