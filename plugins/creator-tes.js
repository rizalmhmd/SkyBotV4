import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `ð Developer Bot `, `ð« Don't call me ð¥º`, `payahhawok@gmail.com`, `ð®ð© Indonesia`, `ð https://rifxz19.github.io/`, `ð¤ Gada pawang nih senggol dong ð`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `ð¥ Bot WhatsApp ð£`, `ðµ Don't spam/call me ð¢`, `Nothing`, `ð®ð© Indonesia`, `ð https://blog.com/Arifzyn/`, `ð¤ Hanya bot biasa yang kadang suka eror âº`]
  ], m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya kað`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kakð`, sentMsg, {mentions: [m.sender]})
  }
}
handler.command = /^(own)$/i

export default handler
