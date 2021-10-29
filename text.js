/////Text Kurdish//////
client.on("message", msg => {

  if (

    msg.content == prefix + "textkurdish"

  ) {

    if (msg.author.bot) return;

    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())

 

    var x = ["بـمرێ ئـەو دڵەیی تەنھا بـەناو ھێنانت پڕ دەبێ","ڕەنگە ھیچ کات خۆشیان نەویستبین ڕەنگە تەنھا برینەکانی خۆیان بە ئێمە چاک کردبێتەوە ..",

"ئەبم بە خەون بۆ ھەمووان و خەو بە کەسەوە نابینم","هیچ شتێک ڕاست نیە جگە لەو نامایەی دەیسڕیەوە پێش ئەوەی  بینێری ..",

"جێت ناهێڵم، تەنها دوور ئەکەومەوە!",

"بە هەموو ئاقڵتەوە وا ئەزانی گرینگی لام، گوڵم ئەو زەمانە گوزەشت کە جێت هەبوو لە دڵم",

	     "پشتـم لە دونیا کرد روی نەبوو تا رووی تێکـەم لەناو خۆما گۆرێکم ھەلـکەند بۆ ھەموو ئومێدەکان تا ھەمیشە رووناك بمــے",	     "ئــمڕۆ خــۆشترین پێـکەنی دنیا دڵــخۆشم نـاکات",

	     "دڵــخۆش بوون  بەپارە بێ زور بەی کەس دەتـوانی بیکڕێ بەڵام  داخـەکەم بەخـۆشـەویستیەکی پـاکـە",

	     "بەپێی دواین لێکۆڵینەوە کە خۆم کردومە، ئەو کوڕانەی کە ئیمۆجی زۆر بەکاردێنن، ئەندامی پەلکەزێڕینەن",

	     "خۆت خۆشبوێت تا ھەمووان ناچار بکەی نازی ھەبوونت بکێشن",

	     "تاکۆتایی تەمەن بە تەنیا بمێنیتەوە، باشترە لەوەی شەو ڕۆژ لەگەڵ کەسێك بیت کە هیچ هەستێکی نەبێ بۆت",

	     "لەناو هەموو برینەڪانی ژیانما تۆ ئەو برینەی بەمردن لەبیر ئەچیتەوە!",

	     "من ئەھلی منەت کێشان نیم دەمێنیتەوە باشە نامێنیتەوە باشتر",

	     "وەک ئەوەی دروست بووبم بۆئەوەی هەموو ئەو شتانەی خۆشم دەویست لەدەستی بدەم",

	     "تە‌مە‌نێك لە‌ ناو دڵم ھە‌ڵت دە‌گرم بە‌ بێ ماندوو بون",

"هیـوام وایــە جـەژنـی ئـێـوە خــۆش بـــێـــت",

	     "بەڵام ئەوەش گوناهێکی گەورەیە مرۆڤ خۆشبەخت نەبێت.",

	     "گریانم یەت بۆ ئەو وێنانەیی پێش ناسینی تۆ تیایدا پێکەنیووم",

	     "خـۆشـمـەوێـی'وە بـەڵـێـن بـێ خـۆمـان بـپـارێـزم",

	     "هۆگربوونم بە تۆجوانترین روداوی ژیانم",

	     "ئەژیم بەدڵێکی مردوو کەهیچ کەس بەرگەی وێران بونەکەم ناگرێت",

	     "ئەوانەی لە دونیا لەیەکتر توڕە دەبن لە قیامەت ڕوبەڕوی یەکتر دەکرێنەوە من لێت خۆشدەبم بۆ ئەوەی لە قیامەتش نەوبینمەوە... !",

	     "دەمەوێ بگەڕێمەوەئەو کاتەی کە مانای خواحافیزی تا بەیانی بوو",

	     "تــیــری دۆســتــەکــانــم نــەبــا دوژمن هــێــزی مــنــی نــەدەبــو",

	     "هەموو خەڵک لە خۆم دوور ئەخەمەوە ‏لەبەر ئەوەی تۆ نین ، وە هەرگیز ناتوانن ببن بە تۆ",

	     "گرینگ نیه‌ له‌ هه‌ر كوێیه‌ك بی ,چه‌نێك دوور بی ,تۆ'م بۆ هه‌میشه‌ له‌ دڵمدا هه‌ڵگرتوه‌",

	     "مانـگ بـە بـۆنـەی ئـەستـێـرەکـانـەوەدەژیــت منـیـش بـە بـۆنـەی تـۆ",

	     "بــۆ هـەمیشـە وەک نهێنیەکی جوان لە دڵما دەمێنیتەوە",

	     "لێیان حەرام بێت گرتنی دەستەکانت ",

	     "مڕوڤەكان بە چاوەروانی تاقی مەكەنەوە چاوەروانی مڕوڤەكان ئەگۆرێ",

	     "!...لەگەڵ تەنیایی راهاتووم عادەتم پی کردوە .بەڵام هەنێک جار زۆر حەزم لیە ئەزیزی دڵی کەسێک بم ",

	     "خراپ بووی ...!بەڵام هەر ئەویشە باش بوو ",

	     "خەمبار مەبە ئەوەتەنها ڕۆژێکی خراپە نەک ژیانێکی خراپ",

	     "بيرت ئه كه م به لام ئه وه نده به سه كه باشيت وبيوست به من نيه",

"دەرەوە ساردە حەزم لەنێو دڵی تۆیە...!",

"ھۆگری کەس مەبن لێرە مرۆڤەکان ناگەن بە یەکتری تەنھا دەبنـە خاوەنی دڵی یەکتری :)...",

"کاتێک شتێک ڕاستەقینە بێت بۆ هەمیشە دەمێنێتەوە","وەفـا لـە ئەخلاق دای جـوانیش  لە ناخدایـە.!","گـیانـی منـە ھێـشـتا گـەرچـی دڵـی دا بە کـەسێکی دی","بۆت دوبارە نابمەوە ئەمە بەڵێنە","بۆ کەسانێک دەنوسین کە گرینگ نین لایان","درەنگ تر دەمرن ئەوانەی کەسێک خۆشی دەوێن","ژیان وەک دەریایەکی بێ ئاوە:)","لـە من غافل مەبـە ، کە من بـۆ تـۆ لە جیھـان غافلم...","لەگەڵ تۆ بـوون تەنھا لە من دێ","گـوێ بـۆ هــەمــوو کــەسـیــک بــگـرە بــەڵام قـســە بــۆ هــەمـوو کــەس مـەکــە...","جێت ناهێڵم، تەنها دوور ئەکەومەوە!","خـەڵک بۆ یەکتری وتـۆش بۆ من","ئەمجارە ماڵئاوای ناکەم دڵت ئەبێ وردە وردە ھەست بە نەبوونیم بکات","دەستم دەست نییە شوێنی بینینی ئازاردانەکانی تۆیە","چیرۆکەکە کۆتایی ھات من و تۆ نەبووین بە ئێمە","میھرەبان بن ڕۆژێک دێ ھەرگیز یەکتری نابینەوە","دڵم بۆ باوەشێك تەنگە كە كەسێكى تر تيایدا ئارامە..","لە دڵی ھەموو ماندا مرۆڤێک ھەیە ھەرگیز نامرێ ئەگەر بوونیشی نەمابێ","لێم زویر مەبە ھەر تۆم ھەیە شەڕی پێ بفرۆشم","خۆزگە ئەو توانایەم ھەبوایە بمتوانیایە پێت بڵێم خۆت داپۆشە نەوەك سەرمات بێت","بەڵێنێکی بچوکت پێ دەدەم ڕۆژێک لە ھەموو کەسێکدا دەگەڕێی بۆ منێکی تر بەڵام نای دۆزیەوە","ئەگەر ئەو ئاشقت بایە جگە لەتۆ دڵی نەدەدا بەکەسێکی تر!.", "چیرۆکەکە کۆتایی ھات من و تۆ نەبووین بە ئێمە", "دەرەوە ساردە حەزم لەنێو دڵی تۆیە...!", "شـەو وەرە خـەونـم دڵـم بـۆت تـەنـگ بـووە..)!", "تۆ لە کۆتای نامەی خۆ کوشتن ئەچی", "من یارو پەرستارو ھاوسەفەرت بۆ کێم دەڕەنجێنی", "نـەمـزانـۍ ڕۆژێـــڪٮ دێـــت..لـــەپــــۆســتەکــــانم بــــاسی نەبونـــیت بــــڪـەم"];

    var x3 = Math.floor(Math.random() * x.length);

    msg.channel.send(`${x[x3]}`)

  }

});
///////English Text/////
client.on("message", msg => {

  if (

    msg.content == prefix + "textenglish"

  ) {

    if (msg.author.bot) return;

    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())

 

    var x = [

"best friends are siblings from anoher mother","In order to succeed, your desire for success should be greater than your fear of failure",

"be kind, not only to others, to yourself too!","Inspiration is some mysterious blessing which happens when the wheels are turning smoothly. - Quentin Blake",

"In order to succeed, your desire for success should be greater than your fear of failure","Love is some loving someone whom you will not reach to!",

".How amazing is it to find someone who wants to hear about all the things that go on in your head","Instead of success in a base I hate, I prefer to loose in a base I enjoy.",

"Never bend your head. Always hold it high. Look the world straight in the eye.","",

"A tree far away from the forest!","Be patient.sometimes you have to go through the worst to get to the best!",

"We have a situation here that we can't believe that we don't believe us anymore!","If size mattered the elephant would be the king of jungle",

"Be the change that you wish to see in the world","We overlooked They thought we were blind!",

"Each person must live their life as a model for others.","The losers find problem in every answer but the winners find an answer in every problem"]

    var x3 = Math.floor(Math.random() * x.length);

    msg.channel.send(`${x[x3]}`)

  }

});
//////Turkish Text//////
client.on("message", msg => {

  if (

    msg.content == prefix + "textturkish"

  ) {

    if (msg.author.bot) return;

    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())

 

    var x = [

"Güzel Şeyler Hiç Bitmesin Mesela Senin Sevgin","Ben o gözlerini dünyalara vermem ki kardeşim",

"Geceler yıldızlara ben sana muhtacım, unutma .","şimdi ! Bıçağın üstüne gidip şarkı söylerim Ölüm bile seni sevdiğimi biliyor ..",

"Yaşamak Istediğim Dünya Sensin","büyüdüm anne şimdi senden habersiz ağlıyorum...",

"Gözlerindeyim ben hala bir yere düşmedim..","Sen gel bide geceleri bana sor özlemek inan yaşamaktan daha zor..zap️",

"Yanakları annemin yemeklerinden daha lezzetli Ancak çok uzakta","Bitmeyen bir sekız yılık hasret..",

"Ben bu kadar çok şey öğrendim ve sen yoksun","Yalancının mumu yatsayıa kadar..",

"İnsanlar incinecek ve mutlu ol diyecekler.","Gözlerindeyim ben hala bir yere düşmedim..",

"Ay dünyaya, ben sana tutulmuşum..","Önle Kolaysa Gel Başimdan , Kaldir At Sevdani",]

    var x3 = Math.floor(Math.random() * x.length);

    msg.channel.send(`${x[x3]}`)

  }

});
//////Arabic Text//////
client.on("message", msg => {

  if (

    msg.content == prefix + "textarabic"

  ) {

    if (msg.author.bot) return;

    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())

 

    var x = [

"ألا بذكر الله تطمئن القلوب❤","يدرون بينـه شگد نودّهُـم ، مَرمرونة.🌷",

"نجمه وكتلني موادع الليل","💔وأستحيت من الله حيل ، وآنه سآجد مر ذكرهم والتهي🌷",

"مرت چم سنه وبعدك براسي تدگ","صح تنكتب عايش بالسجلات!! بس انت مجرد رقم ينعد",

"العفو ألذّ من الانتقام، والعمل أمتع من الفراغ، والقناعه اأعظم من المال، والصحّه خیرٌ من الثّروه!","ولا مكتوب تايه يندل عيوني",

"كُـن لطيفاً كــالغيم.. تُمطر خيراً وتمضي بسلام.","غُرب بعيونهُم صرنـه ونسونـه",

"عندما نفقد الشّیء نجعله ونرسمه خیالاً لا یُوصف، ونعمّم هذا الخیال فی کلّ شیء حتّى یصبح على شکل مسلّماتٍ لا فرار منها.","خلص كل الحچي و انساك بس شنساك..؟",

"العفو ألذّ من الانتقام، والعمل أمتع من الفراغ، والقناعه اأعظم من المال، والصحّه خیرٌ من الثّروه!","",

"و تترك حُزنك بين المقاعد، ترجوه يُسرق.. - مظفر النواب","حنّيتلك وادري اليحن.. تثگل عيونه من الحزن",

"عرفتك ما تحن.. من گتلي الله وياك! 🌷","كُـن لطيفاً كــالغيم.. تُمطر خيراً وتمضي بسلام",]

    var x3 = Math.floor(Math.random() * x.length);

    msg.channel.send(`${x[x3]}`)

  }

});
