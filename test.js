var res = '<head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">&lt;script 
type="text/javascript"&gt;
            $(document).ready(function() {
          

  // Match all link elements with href attributes within the content div
  $('#pm13_main_container a.tooltip[title]').qtip({
    position: {
      my: 'bottom center',
      at: 'top center'
      },
    style: { classes: 'qtip-shadow qtip-tipsy' }
  });

    
            });
          &lt;/script&gt;&lt;div id="credit_subtitle" class="subtitle"&gt;&lt;span&gt;€ 
6,45&lt;/span&gt;&lt;img src="/Style Library/PosteMobile/PM13/ico-clock.png" alt="" /&gt;Credito residuo
      &lt;/div&gt;&lt;div id="bonuses_subtitle" class="subtitle"&gt;&lt;a 
href="/areapersonale/privati/Pagine/PM13/Bonus.aspx"&gt;Dettagli&lt;/a&gt;&lt;img src="/Style 
Library/PosteMobile/PM13/ico-monitor_chart.png" alt="" /&gt;Bonus attivi
  &lt;/div&gt;&lt;div id="bonuses_subcontent" class="subcontent"&gt;&lt;div class="inner"&gt;&lt;div 
class="row"&gt;&lt;div class="label_sotto"&gt;&lt;span style="font-size: 14px"&gt;Voce&lt;/span&gt;&lt;br 
/&gt;&lt;span style="color: black; font-size: 11px"&gt;
            (Totale 150 Min.)
          &lt;/span&gt;&lt;/div&gt;&lt;div style="margin-top: 10px;" class="value"&gt;&lt;span style="width: 
24%"&gt; &lt;/span&gt;&lt;/div&gt;&lt;div class="max" style="font: 12px 'Oswald','sans-serif'"&gt;&lt;span 
style="font-size: 11px;"&gt;Rimanenti&lt;/span&gt;&lt;br /&gt;&lt;span style="font-size: 14px"&gt;112 
Min.&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class="row"&gt;&lt;div class="label_sotto"&gt;&lt;span 
style="font-size: 14px"&gt;SMS&lt;/span&gt;&lt;br /&gt;&lt;span style="color: black; font-size: 11px"&gt;
            (Totale 150 SMS)
          &lt;/span&gt;&lt;/div&gt;&lt;div style="margin-top: 10px;" class="value"&gt;&lt;span style="width: 
26%"&gt; &lt;/span&gt;&lt;/div&gt;&lt;div class="max" style="font: 12px 'Oswald','sans-serif'"&gt;&lt;span 
style="font-size: 11px;"&gt;Rimanenti&lt;/span&gt;&lt;br /&gt;&lt;span style="font-size: 14px"&gt;111 
SMS&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class="row"&gt;&lt;div class="label_sotto"&gt;&lt;span 
style="font-size: 14px"&gt;Dati&lt;/span&gt;&lt;br /&gt;&lt;span style="color: black; font-size: 11px"&gt;
            (Totale 1024 Mb)
          &lt;/span&gt;&lt;/div&gt;&lt;div style="margin-top: 10px;" class="value"&gt;&lt;span style="width: 
55%"&gt; &lt;/span&gt;&lt;/div&gt;&lt;div class="max" style="font: 12px 'Oswald','sans-serif'"&gt;&lt;span 
style="font-size: 11px;"&gt;Rimanenti&lt;/span&gt;&lt;br /&gt;&lt;span style="font-size: 14px"&gt;456 
Mb&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;/div&gt;&lt;div id="plan_subtitle" 
class="subtitle"&gt;&lt;img src="/Style Library/PosteMobile/PM13/ico-phone.png" alt="" /&gt;Piano tariffario
    &lt;/div&gt;&lt;div id="plan_subcontent" class="subcontent"&gt;&lt;div class="inner"&gt;&lt;div 
class="actions"&gt;&lt;a class="edit tooltip" title="Cambia piano" 
href="/areapersonale/privati/Pagine/PM13/cambiaPiano.aspx?idprod=51"&gt; &lt;/a&gt; &lt;/div&gt;&lt;a 
class="openajaxpopup" href="DettaglioProdotto.aspx?idProd=51"&gt;Zero Pensieri Extra 
Small&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;</pre></body>
'

console.log(JSON.stringify(xmlToJson(res)));


xmlToJson = function(xml) {
	var obj = {};
	if (xml.nodeType == 1) {                
		if (xml.attributes.length > 0) {
			obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { 
		obj = xml.nodeValue;
	}            
	if (xml.hasChildNodes()) {
		for (var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof (obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof (obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
}
