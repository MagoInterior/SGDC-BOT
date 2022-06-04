let sgdc = require('./sgdc.json')

global.block = []
global.owner = [(sgdc.owner.masway)
global.mods = [(sgdc.mods.masway), (sgdc.mods.bot)]
global.packname = (sgdc.packname)
global.author = (sgdc.author)
global.wait = (sgdc.wait)
global.error = (sgdc.error)
global.prems = ['6283120857907', '6281325190284']
global.APIs = { 
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'Donasi dulu om, 5k juga gapapa'
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
global.rowner = [(sgdc.rowner), '6283120857907']
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
