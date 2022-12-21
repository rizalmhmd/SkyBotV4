import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .simi halo`
  let api = await fetch(`https://simsimi.info/api/?text=${text}&lc=id`)
  let res = await api.json()
  let { message } = res
  m.reply(message)
}
handler.command = ['simi']
handler.tags = ['fun']
handler.help = ['simi']

export default handler