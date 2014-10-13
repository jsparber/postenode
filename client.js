var Nightmare = require('nightmare');
//require('./server.js');
new Nightmare()
	.goto('https://www.postemobile.it/areaprotetta/pagine/login.aspx')
	.type('#ctl00_ctl35_g_ec207ccd_5ede_48e9_83d9_a00a34ae4230_ctl00_tbUsername', 'j.sparber')
	.type('#ctl00_ctl35_g_ec207ccd_5ede_48e9_83d9_a00a34ae4230_ctl00_tbPassword', '60p8dXjLTznnmh0wtwdU')
	.click('#ctl00_ctl35_g_ec207ccd_5ede_48e9_83d9_a00a34ae4230_ctl00_btEnter')
.wait()
	.screenshot("./foto.png")
	.goto('https://www.postemobile.it/areapersonale/privati/Pagine/PM13/ReloadPersonalData.aspx?MSISDN=3337632778&RELOAD=1')
	.goto('https://www.postemobile.it/areapersonale/privati/Pagine/PM13/ReloadPersonalData.aspx?MSISDN=3337632778&RELOAD=3')
	.screenshot("./foto2.png")

	.evaluate(function (page) {
			return document.documentElement.innerHTML;
			}, function (res) {
			if (res.lenght > 200)
				console.log(res);
			else
			resToJson(res);
			})
.run(function (err, nightmare) {
		if (err) return console.log(err);
		});

function resToJson(text) {
	var obj = new Object();
	obj.credito = text.split("&lt;span&gt;")[1].split("&lt;/span&gt;")[0];
	var totale = text.split("(Totale ");
	obj.min_tot = totale[1].split(")")[0];
	obj.sms_tot = totale[2].split(")")[0];
	obj.internet_tot = totale[3].split(")")[0];
	obj.min = text.split('span style="font-size: 14px"&gt;')[2].split('&lt;')[0];
	obj.sms = text.split('span style="font-size: 14px"&gt;')[4].split('&lt;')[0];
	obj.internet = text.split('span style="font-size: 14px"&gt;')[6].split('&lt;')[0];
	console.log("Tot min: " + obj.min_tot);
	console.log("Min: " + obj.min);
	console.log("Tot sms: " + obj.sms_tot);
	console.log("Sms: " + obj.sms);
	console.log("Tot internet: " + obj.internet_tot);
	console.log("Internet: " + obj.internet);
	console.log("Credito: " + obj.credito);
}
