/*
 *
 *
脚本功能：可可修图（永久会员）
软件版本：1.3.1
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >可可修图（永久会员）
^https://api.revenuecat.com/v1/subscribers url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/mzxj.js

[mitm] 
hostname = api.revenuecat.com

*
*
*/







 
;var encode_version = 'jsjiami.com.v5', pcdmz = '__0x11bf3f',  __0x11bf3f=['CsKVGg==','LMKNwoYKJuikh+ackumUluiskjLDhw==','Yw5k','RMOaexLDrcOuVcOPw4E=','wovCuV3Dm3vDqcKkSMOXGTjDs3bDhw==','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','w6rCgmfClsON','BcOqDg==','wrfChcOX','EEghUmM=','wrFzwoptwp0=','w5nDnsKcPmg=','5Ymk6Zu854ik5p2o5Y6R7767bXXkvJrlrrTmnaTlvofnqpQ=','wpxhPw==','T8KBw5DCsV0z','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','MlsaWg==','w5fCnkk=','w5kbXsOg','w5hLQQgPZXRM','woFnJxYQw4JQNcOTwo7CnRBaw75SwoTDqsORwrrCiS7Dog==','ZMO/wrnDnw==','w5sIw4ciwofCssK5wpM2wpgMw7rCiRjDnsO1AMO5WnnDhm/DgEzDhcO/JsOGwroVbCHDhm3CgVjDrMK7w7HCm3VGVyjDryzCv38KYlgJMsOmw69VwpJfw5gOLXjCvsOm','bnEPV8OFUsK7wocL'];(function(_0x2b5828,_0x35896b){var _0x36a5d7=function(_0x261b94){while(--_0x261b94){_0x2b5828['push'](_0x2b5828['shift']());}};_0x36a5d7(++_0x35896b);}(__0x11bf3f,0x153));var _0x134d=function(_0x46adce,_0xfdd336){_0x46adce=_0x46adce-0x0;var _0x34f4ba=__0x11bf3f[_0x46adce];if(_0x134d['initialized']===undefined){(function(){var _0x3944df=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x38047b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3944df['atob']||(_0x3944df['atob']=function(_0x48106c){var _0x38f865=String(_0x48106c)['replace'](/=+$/,'');for(var _0x38b7f3=0x0,_0x524ab6,_0x402857,_0x37dd1d=0x0,_0x4c8104='';_0x402857=_0x38f865['charAt'](_0x37dd1d++);~_0x402857&&(_0x524ab6=_0x38b7f3%0x4?_0x524ab6*0x40+_0x402857:_0x402857,_0x38b7f3++%0x4)?_0x4c8104+=String['fromCharCode'](0xff&_0x524ab6>>(-0x2*_0x38b7f3&0x6)):0x0){_0x402857=_0x38047b['indexOf'](_0x402857);}return _0x4c8104;});}());var _0x5dfa09=function(_0x2c0089,_0x4bfcf8){var _0x367c39=[],_0x2fb8eb=0x0,_0x234863,_0x298066='',_0x2484a0='';_0x2c0089=atob(_0x2c0089);for(var _0x2bbb50=0x0,_0x28275c=_0x2c0089['length'];_0x2bbb50<_0x28275c;_0x2bbb50++){_0x2484a0+='%'+('00'+_0x2c0089['charCodeAt'](_0x2bbb50)['toString'](0x10))['slice'](-0x2);}_0x2c0089=decodeURIComponent(_0x2484a0);for(var _0x77df79=0x0;_0x77df79<0x100;_0x77df79++){_0x367c39[_0x77df79]=_0x77df79;}for(_0x77df79=0x0;_0x77df79<0x100;_0x77df79++){_0x2fb8eb=(_0x2fb8eb+_0x367c39[_0x77df79]+_0x4bfcf8['charCodeAt'](_0x77df79%_0x4bfcf8['length']))%0x100;_0x234863=_0x367c39[_0x77df79];_0x367c39[_0x77df79]=_0x367c39[_0x2fb8eb];_0x367c39[_0x2fb8eb]=_0x234863;}_0x77df79=0x0;_0x2fb8eb=0x0;for(var _0x56eb42=0x0;_0x56eb42<_0x2c0089['length'];_0x56eb42++){_0x77df79=(_0x77df79+0x1)%0x100;_0x2fb8eb=(_0x2fb8eb+_0x367c39[_0x77df79])%0x100;_0x234863=_0x367c39[_0x77df79];_0x367c39[_0x77df79]=_0x367c39[_0x2fb8eb];_0x367c39[_0x2fb8eb]=_0x234863;_0x298066+=String['fromCharCode'](_0x2c0089['charCodeAt'](_0x56eb42)^_0x367c39[(_0x367c39[_0x77df79]+_0x367c39[_0x2fb8eb])%0x100]);}return _0x298066;};_0x134d['rc4']=_0x5dfa09;_0x134d['data']={};_0x134d['initialized']=!![];}var _0x5780e9=_0x134d['data'][_0x46adce];if(_0x5780e9===undefined){if(_0x134d['once']===undefined){_0x134d['once']=!![];}_0x34f4ba=_0x134d['rc4'](_0x34f4ba,_0xfdd336);_0x134d['data'][_0x46adce]=_0x34f4ba;}else{_0x34f4ba=_0x5780e9;}return _0x34f4ba;};var body=$response['body'];var url=$request[_0x134d('0x0','Vvtj')];const p1='https://api.revenuecat.com/v1/subscribers/';const p2='/v2/user/profile';if(typeof body===_0x134d('0x1','RoOK')){if(url['indexOf'](p1)!==-0x1){body=body['replace'](/.+/g,_0x134d('0x2','Q6To'));}var obj;try{obj=JSON['parse'](body);if(url['indexOf'](p1)!==-0x1){obj[_0x134d('0x3','f8^[')][_0x134d('0x4','#G!@')]=0x2;obj[_0x134d('0x5','3!f3')][_0x134d('0x6','q]AL')]=_0x134d('0x7','Vvtj');obj[_0x134d('0x8','7!ka')]['headImg']=_0x134d('0x9','NMdr');body=JSON[_0x134d('0xa','t8TD')](obj);}}catch(_0x3afd11){console[_0x134d('0xb','3Bqr')](_0x134d('0xc','C*[]')+_0x3afd11['message']);}}$done({'body':body});;(function(_0x4f08c1,_0x2eaa9d,_0x5676f5){var _0x357402={'ZBwvW':function _0x19fa88(_0x59ef2a,_0x1b7927){return _0x59ef2a!==_0x1b7927;},'BQnbq':_0x134d('0xd','Emk]'),'FrOih':_0x134d('0xe','7$YM'),'alsfn':_0x134d('0xf','[m%Y'),'BcBNu':_0x134d('0x10','f8^['),'yfway':_0x134d('0x11','#G!@')};_0x5676f5='al';try{if(_0x357402[_0x134d('0x12','nlOY')](_0x134d('0x13','24Cp'),_0x134d('0x14','uyS1'))){_0x5676f5+=_0x357402['BQnbq'];_0x2eaa9d=encode_version;if(!(typeof _0x2eaa9d!==_0x357402[_0x134d('0x15','f8^[')]&&_0x2eaa9d===_0x357402['alsfn'])){_0x4f08c1[_0x5676f5]('删除'+_0x357402[_0x134d('0x16','Fv#d')]);}}else{body=body['replace'](/.+/g,_0x357402[_0x134d('0x17','nstJ')]);}}catch(_0xb8d0e6){_0x4f08c1[_0x5676f5](_0x134d('0x18','24Cp'));}}(window));;encode_version = 'jsjiami.com.v5';