const { Client, EmbedBuilder, Events, GatewayIntentBits } = require('discord.js');
const { request } = require('undici');

async function getRange() {
  const dictResult = await request(`https://covid19.ddc.moph.go.th/api/Cases/today-cases-all`);
  const result = await dictResult.body.json();
  var range;

  if (result[0].weeknum == "15") {
    range = "9 เมษายน 2566 - 15 เมษายน 2566"
  }
  if (result[0].weeknum == "16") {
    range = "16 เมษายน 2566 - 22 เมษายน 2566"
  }
  if (result[0].weeknum == "17") {
    range = "23 เมษายน 2566 - 29 เมษายน 2566"
  }
  if (result[0].weeknum == "18") {
    range = "30 เมษายน 2566 - 6 พฤษภาคม 2566"
  }
  if (result[0].weeknum == "19") {
    range = "7 พฤษภาคม 2566 - 13 พฤษภาคม 2566"
  }
  if (result[0].weeknum == "20") {
    range = "14 พฤษภาคม 2566 - 20 พฤษภาคม 2566"
  }
  if (result[0].weeknum == "21") {
    range = "21 พฤษภาคม 2566 - 27 พฤษาภาคม 2566"
  }
  if (result[0].weeknum == "22") {
    range = "28 พฤษภาคม 2566 - 3 มิถุนายน 2566"
  }
  if (result[0].weeknum == "23") {
    range = "4 มิถุนายน 2566 - 10 มิถุนายน 2566"
  }
  if (result[0].weeknum == "24") {
    range = "11 มิถุนายน 2566 - 17 มิถุนายน 2566"
  }
  if (result[0].weeknum == "25") {
    range = "18 มิถุนายน 2566 - 24 มิถุนายน 2566"
  }
  if (result[0].weeknum == "26") {
    range = "25 มิถุนายน 2566 - 1 กรกฎาคม 2566"
  }
  if (result[0].weeknum == "27") {
    range = "2 กรกฎาคม 2566 - 8 กรกฎาคม 2566"
  }
  if (result[0].weeknum == "28") {
    range = "9 กรกฎาคม 2566 - 15 กรกฎาคม 2566"
  }
  if (result[0].weeknum == "29") {
    range = "16 กรกฎาคม 2566 - 22 กรกฎาคม 2566"
  }
  if (result[0].weeknum == "30") {
    range = "23 กรกฎาคม 2566 - 29 กรกฎาคม 2566"
  }
  if (result[0].weeknum == "31") {
    range = "30 กรกฎาคม 2566 - 5 สิงหาคม 2566"
  }
  if (result[0].weeknum == "32") {
    range = "6 สิงหาคม 2566 - 12 สิงหาคม 2566"
  }
  if (result[0].weeknum == "33") {
    range = "13 สิงหาคม 2566 - 19 สิงหาคม 2566"
  }
  if (result[0].weeknum == "34") {
    range = "20 สิงหาคม 2566 - 26 สิงหาคม 2566"
  }
  if (result[0].weeknum == "35") {
    range = "27 สิงหาคม 2566 - 2 กันยายน 2566"
  }
  if (result[0].weeknum == "36") {
    range = "3 กันยายน 2566 - 9 กันยายน 2566"
  }
  if (result[0].weeknum == "37") {
    range = "10 กันยายน 2566 - 16 กันยายน 2566"
  }
  if (result[0].weeknum == "38") {
    range = "17 กันยายน 2566 - 23 กันยายน 2566"
  }
  if (result[0].weeknum == "39") {
    range = "24 กันยายน 2566 - 30 กันยายน 2566"
  }
  if (result[0].weeknum == "40") {
    range = "1 ตุลาคม 2566 - 7 ตุลาคม 2566"
  }
  if (result[0].weeknum == "41") {
    range = "8 ตุลาคม 2566 - 14 ตุลาคม 2566"
  }
  if (result[0].weeknum == "42") {
    range = "15 ตุลาคม 2566 - 21 ตุลาคม 2566"
  }
  if (result[0].weeknum == "43") {
    range = "22 ตุลาคม 2566 - 28 ตุลาคม 2566"
  }
  if (result[0].weeknum == "44") {
    range = "29 ตุลาคม 2566 - 4 พฤศจิกายน 2566"
  }
  if (result[0].weeknum == "45") {
    range = "5 พฤศจิกายน 2566 - 11 พฤศจิกายน 2566"
  }
  if (result[0].weeknum == "46") {
    range = "12 พฤศจิกายน 2566 - 18 พฤศจิกายน 2566"
  }
  if (result[0].weeknum == "47") {
    range = "19 พฤศจิกายน 2566 - 25 พฤศจิกายน 2566"
  }
  if (result[0].weeknum == "48") {
    range = "26 พฤศจิกายน 2566 - 2 ธันวาคม 2566"
  }
  if (result[0].weeknum == "49") {
    range = "3 ธันวาคม 2566 - 9 ธันวาคม 2566"
  }
  if (result[0].weeknum == "50") {
    range = "10 ธันวาคม 2566 - 16 ธันวาคม 2566"
  }
  if (result[0].weeknum == "51") {
    range = "17 ธันวาคม 2566 - 23 ธันวาคม 2566"
  }
  return range;
}

async function embed() {
  const dictResult = await request(`https://covid19.ddc.moph.go.th/api/Cases/today-cases-all`);
  const result = await dictResult.body.json();

  var range = await getRange();

  const embed = new EmbedBuilder()
    .setColor(0xFF0000)
    .setTitle('รายงานสถานการณ์ โควิด-19 ในประเทศไทย')
    .setURL('https://ddc.moph.go.th/covid19-dashboard/?dashboard=main')
    .addFields({ name: 'สัปดาห์ที่ ' + `${result[0].weeknum}`, value: `${range}` },
      { name: ' :hospital:  จำนวนผู้ป่วยรายใหม่รักษาในโรงพยาบาล ', value: `${result[0].new_case} (เฉลี่ยรายวัน ${parseInt(parseInt(result[0].new_case) / 7)})` },
      { name: ' :thermometer_face:  ติดเชื้อสะสม ', value: `${result[0].total_case_excludeabroad}` }, 
      { name: ':date:  อัพเดทล่าสุด', value: `${result[0].update_date}`},)

    .setFooter({ text: 'Developed By Sad Flower ツ' });

  return embed;
}

module.exports = { getRange, embed };