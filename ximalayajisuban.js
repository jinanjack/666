/*
 *
 *
脚本功能：喜马拉雅极速版
软件版本：3.0.33
下载地址：
脚本作者：
更新时间：2024年1123
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >喜马拉雅极速版
^https?:\/\/.+ximalaya.com\/(fmobile-user\/homePage|pizza-category\/mypage\/operation)\/ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ximalayajisuban.js
^https?:\/\/.+ximalaya.com\/(fmobile-track\/fmobile\/track\/playpage|mobile\/track\/pay)\/ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/ximalayajisuban.js
^https?://adse\.wsa\.ximalaya\.com/ url reject-dict
^https?://passport\.ximalaya\.com/user-http-app/v1/token/refresh url reject-dict
^https?://adse\.ximalaya\.com url reject-dict
[mitm]
hostname = 183.204.35.*,43.141.49*,101.91.133.96,120.222.152.124,183.201.114.101,120.221.238.133,111.63.149.40,111.13.143.140,117.161.38.167,120.221.238.76,111.6.56.228,111.63.149.170,120.220.18.85,111.63.149.21,117.161.38.167,183.201.114.*,101.91.135.*,101.91.133.*,101.91.134.*,adse.ximalaya.com,61.170.88.*,101.91.134.*,42.56.64.*,*.xmcdn.com,*.ximalaya.com,61.172.194.*,180.153.*.*,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.2*,61.162.174.*,119.188.123.*,59.83.227.*,114.80.161.29,1.62.62.64,1.194.255.171,23.236.99.89, 36.99.200.135,42.81.4.198,42.81.26.128,42.81.120.58,43.152.24.12,43.152.24.18,43.152.25.127,43.152.29.38,43.175.16.34,43.175.22.25,43.175.44.15,49.7.69.197,49.51.224.95,101.33.11.32,101.33.11.106,101.33.20.34,101.33.29.110,103.105.60.99,140.249.84.135,140.249.85.189,150.109.90.80,150.109.91.35,150.138.47.94,150.138.136.145,203.205.13*.*,203.205.250.*,211.152.137.*,47.100.227.85,61.164.145.12,106.41.204.126,112.80.180.72,112.98.170.228,112.99.146.108,118.25.119.177,223.111.231.198,120.22*.2*.*,43.132.8*.*,101.33.27.*,43.141.11.*,101.89.53.*,36.131.221.*,111.42.194.*,adse.ximalaya.com,36.131.221.*,112.84.131.*,111.6.56.*,111.6.56.228,*.xmcdn.com,120.232.165.228,43.159.71.*,ulogs.umeng.com,www.taobao.com,43.132.81.*,101.33.27.*,114*0.*,61.172.1*.*,43.141.11.*,114.80.99.86,180.153.255.*,114.80.99.*,*.mysteel.*,61.172.194.196,180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,1.194.255.171,23.236.99.89,36.99.200.135,42.81.4.198,42.81.26.128,42.81.120.58,43.132.80.77,43.132.83.175,43.132.84.11,43.152.24.12,43.152.24.18,43.152.25.127,43.152.29.38,43.175.16.34,43.175.22.25,43.175.44.15,49.7.69.197,49.51.224.95,101.33.11.32,101.33.11.106,101.33.20.34,101.33.29.110,103.105.60.99,114.80.99.90,114.80.99.70,114.80.99.71,114.80.99.89,114.80.99.91,114.80.99.88,114.80.99.87,140.249.84.135,140.249.85.189,150.109.90.80,150.109.91.35,150.138.47.94,150.138.136.145,203.205.136.87,203.205.136.100,203.205.136.102,203.205.136.159,203.205.137.27,203.205.137.87,203.205.137.241,203.205.250.111,203.205.250.113,211.152.137.25,ulogs.umeng.com,passport.ximalaya.com

*
*
*/
















;var encode_version = 'jsjiami.com.v5', ayrsf = '__0x121094',  __0x121094=['dsKSw5M+wr8=','M3rClMOBSg==','aiHCs146','fyY4KMOWwoNN','SyDDuTnDins=','JMOvSTPDhQ==','w6fCuMKJDMOw','EMObdsOVLQ==','wpMBDsKUw4c=','w7FsZ3XCjA==','bU5XPjk=','w4nDg8Oow4wp','ZScKP8OY','fyEgPcOl','GkrCgcOeRw==','w6HDjsKlHcKC','ewUdHcOU','w5Bdw6pRYA==','w73DmsKyIMKI','w6HDvcOMwqUt','TMK7w4sMwqDCjD8=','fGzCuQgl','ecOVHTxu','O1hseHw=','WRsiCMOP','w4TDncKOMMKy','e1RD','fi0/Iw==','XQbCplo1','GsOBEF0=','UUlBCWs=','QcOZCsOhMg==','JUTDimBjw7TDqQnDqg==','DsOPDEDCm8KCwpM=','fi7Cix7Dh8OTwr1nwoLCmwfCkMO1ak9Bw44=','e1HCvB8b','ZEtIw7EB','SsKsw4Yawr/ClDPCvWA=','CsOtTw==','c15Gw60S','w596w4FS','Y0lFw7sQ','wqAswovCt0o=','w7TCmVR/','w5bCoAjClcOg','InDCuXXCvg==','w5HDgER4XsKuMg==','dkDCuWfDpA==','w5V7w4lOYh55','cjErI8OB','ShvCqUo/w6Y+','Xy7DpDw=','Mm/Cu2/CpcKnw48=','w5vDgsKF','SyDDuCHDjHLDkg==','w5MVwoDCojY=','I1PDh3Z8w6zDpQ==','w5huH3Q=','w6DCl0hiw63CpcKB','JMKmUy/Cs8O9PADDng==','RFtOCiM=','Ph3DrA==','w7F3RVfCp3s=','REtW','eyY3K8OHwpk=','dl3Clhorw40ZwoNsYGTCpGbCkGHCkw==','UEh7wpZUfsKLw7RMRsKJYcOeeGjCrHPCiAjDrcOJw4o7QwzDjcOPYnlvBcOow5TClsKKwpbDiw7Dv8KCKx8SXcOdIHrDgcKFYinDgsOudGzDsDRUOsKbXj4=','wojCpinDog==','wqMMIcKYw7M=','w5vDgVp+RQ==','w53CggLClMOk','bMO/EMOkJQ==','w7/DucKKM8Kj','VkdEESI=','YFZRCGQ=','wqMnwqrCvFw=','w6dIH1Rn','GhrDnC3CmQ==','w7Miw4vCpAlkw7jCnMKZT8Ouw7cIw47DilVZ','UB4UH8Oz','K19rXEk=','KFHCssO2TQ==','WMK1w5cR','w6jCsMKU','MMOPQsONIQ==','OVHCocO6Wg==','cjs6KcODwoVXFsOw','QBrCoVY=','McOcesOWKw==','UxQ3DsOf','DirDtQ/Ciw==','RjcuUzk=','w7/DnV9MSQ==','YSvDvBzDlg==','CMKxUgHCiA==','ViEOOsOI','YFJkKjU=','VsKlw4MYwq4=','AWPCtHfCnQ==','wrvCnjfDoBg=','QQgXHg==','wpVkw7vCrMKc','EnTDik14','w4bDill/','R2FWw5I/','WAByw7gZ','w6rDg8OPw6Ef','w5d5w6pWeg==','w5PCsizCgMOo','w4jCncK/EcOJ','QB8I','w5Y4w6c/URMe','d0JoV1QBTGfCk3RjGcOINCVDXD4=','w55xw4ZZaABv','wrkOw7E1EcK0','PUV4w4kbP8OGwqVLLMKLLsODcmfDhSPCk0jCn8OWw4ElUk7Cu8OTZTAjbsOmw5zCi8OcwqnCoyjDo8OrcwRdW8OJWGHDvMKNeC7CisOzfmLDrWcRIMK8QSJywoPCtnrCshTCj03DviLCv8KmwpYOTwbCpBPCtcOhW8KWUT4wwp1xw67CmcOsw43DpBPDg8K5wotPBlLCr8KuHGTCnsOywrDDsUsja8Kow6A=','OSDDlg==','wojCpiTDsxXClyU=','c0XCvsO6SsOvAEA2w4XCklvDlsO2w61MPhzDlsKhLkDCsSzDqcOTwp3CtljDmcKTw4tzT8Kcw5/Dl8OR','NEbCssOxTcO0Hw==','cUrCtHnDqsOP','IQ7Cpw0ww48TwoNxfwrCu3PCjwjCiFTDn8KCeQtdTMKeU2lDw49pw6cLQC1Fw6RGcHLDsMOuw5Z5wqHDlHJywqlvw73DswUEeMKUAsKiblbDmERew7jCrMKOOMK9w7sUYcObF8KVCMKfJcKPAMOyw4lEw4JKwr/CmlpZw6/ChHXDrW3CscOcw58NwpjCmMOswqJ5Z8K0wq0Uw7fDmx4YGk50CcOBwoU=','LV1r','CBLCgUohCy0=','NcOEGx5NL31fwqTCjsKEw6bCvndvH3XCnmXCncOdZTk=','A1ASTXASOsK5w4nCu8K6wrY6wpnDsH/DucOwwoE1wogVwq/DmcOYKH3CsA==','f05LOzQ=','w5w8RsOBMsK2LR3DjMKnw7nCt8K0w4I1LMK4','YVJUw4oQw6HDg1YCTlYlP2Y+','Pz3Crg==','RBvCpVA8w68Iw4pQw6jCusKWG8OGwqo=','DsO2XBLDtMKgw5LCmcKuGX1vEArDughDTcOZwq7DqMOYIcKLw5JtwqPDgmvDhsK/McOyAMO5HR98eCbCtMKmwp4sw4pUwp3DoFfDoMOXc8OUB8OZe8ONQgnClcK8wp0ucw==','DBPCh0Y1IQcPasOQT8Kjw7jCi2Y=','ZBdTw40HbsKMw6QMfcOQdMKRaT7CnnTDgBnCuMKBwphICRjClMONN2o8TMKnwp7DpcOaw5rCpVnDpsOtewJHXMOGIRbCisKNeC3CjsO+fmDCmmQQX8ONWX1Ew5Q=','JCbCocKlZ8K9w6HDvg==','f09Qw6gGwqjCgwwEA14Jfkc4N8KDADhQXsKE','RhkWA8OVXEbCgnc=','Z1pWw6sQ','w5jDj8OKw7M=','w4dpCU1oQ8OzwqfCocK5Fw==','EMOrWDHDs8O7wonDg8Kn','w6nCsMKRN8OwwpJCwpcGw5jDlMK8P8OnBCw=','TMOfDMO+MzJow7LDuG4pJAnDhMOyDMO4QVUCR8OcLThKw6DDsQgiw5TClBk/w487w6bCtsO5wo7CrcOTwr51ZMKqwrTDr8KnAsKhw7XDn1vDtsK/ZsKMEcKXw4LCqUnCqMO2','PCbCssKcbMKvw6PDrsOaw67DoMO7P8Khwq0=','cl3CjA0ww4o1woIiPl3DojI=','5YWs6LWY5o6L5L6A4pyr77mZ','N8K3QBzCqsOsIibDnsKBcA==','w5LDlcKSMMK0w7Mkw6hvw6g=','BRjCksKSw6XCqcKgwq7DssObKw==','cjspJcOBwpR6GMOqwrs=','Z1fCtw==','w73Cq3x4PWzDuw==','P1jCkQMlw4Vbwo4tPl3DqynDiETClQjCkMOUWl4KIMOJGk4Bwp8pwr4nHzA=','w4A0WcObIw==','OcONDMO3','UU1XHQ==','w4TDqsO5wogHEcOZw60l','w7Qiw43CpApkw7vCnMKUT8Otw7cLw47DiQ==','QsOeFsOtNGEowrPCoiAcYU7DgMOCTA==','wos3w6jDqsOIwoodCmw3wrHCkCvChA5KXVrDkUoGw6o/c8Orwq/Do8OrVXrDpxoQe0DDrcKxfcOECsOnJmTCv3t4w61WwpfDlMKIw5IwwpsRwrk8wpx/wqkCwq8=','w4zDlcKhUw==','dFNFw7Eb','QSHDpifDlw==','DMKpw7M=','RDfDsQ==','Zhca','BAp8CGNOI8Omw4bDssK8w702w5DDtzHDu8K6wpZHw4YWwpDDkcKdXzHCuUYmcmvClRPCgsOkEgMIUhLCncOtwrrCijnCig19w5/CucKMScKWwrLCgMOLPsOzfhRWYETDkcOkQ8KCw4olIRbDlwXCscO4KjbCqDvDncKAwpl6wpzDgXZ3PcKfwrFTPS13wpMOwrjCnEZaVsOydEDDpX/CiSzDmsO5w5Q5wp8=','LsOMDMOrHMONKcK/AQ==','wq8GKsKUw74r','OlbCvcO2XMOvA0s=','wozCvjw=','HgjDt0Vkw7Zuw5sAw7jDoMKmTMOdw7ZXUg==','woTDkcOQJcO2w6pVw7Unw6fCssORwrY=','w5okw7c=','RcKnw48Wwq7CjTPDvG3CtMO+aMObwpM=','AyfDjg==','w4HDjsKT','54mn5p+45Y2S772zwqXCk+S9gOWtiOackeW/oueohO+9iui9teitkeaUqeaPjuaLouS4leebkeW0heS8kg==','5YiP6Zqw54ut5p2T5Yy477+sMMKh5LyU5a2B5p6M5b2/56i6','ThANQyQ=','MsKuXCPCtw==','RjE8fCA=','E0nDiEdG','eyTCimo7','L3lke1Q=','w7rCtFFFDw==','wofChQ7Dvxw=','Kh/DtAvCjg==','DMOQEl/CjQ==','f15Fw7wQw6DDnw==','bwxIw5YdMQ==','Tw5Dw7Ii','fXJOw4Af','I8OhJmPCjA==','M3rCosObYA==','QXVNw5w/','w4BjFVlQ','wqnCqzvDkMOV','ThzDmwfDlQ==','w7DDt8KAFcKC','fnliK1w=','w71uEElH','w5duMW9X','VktZLmA=','LnHDmm54','w4HDjGxNUA==','w7nDjUxSZA==','WMOPFyBt','SCoIWCk=','w67CtcKHNcO9','wpkiNsKww60=','GS7CvWwX','w74hwpfCgCM=','fQAdIcOc','bCsSK8OL','CMOkLMO6Ew==','R19Cw5wh','w6ZIZVvCng==','w7DCjFd8Ag==','PcOAAMOcLA==','w4ozwoXCjyo=','J8OvAULChA==','H3DCrXTCnQ==','RDpKw6cS','wq4Ew60q','w67Ctm94w7s=','w4jDpMOXw7Ai','w4PDu8O4wpU=','MW3CmsO8UQ==','w5vCtH54w44=','JsKOVy3CrA==','fQcIKcO3','G8KRw6fCpU4=','YG1Hw5Yc','wqF/w7bCpcK7','OgXCtsK9Zg==','w5DDtkBkSw==','w53DtMO/wooI','wo5aw4LCgMKY','fGHCsmrDgg=='];(function(_0x3becb9,_0x422b8e){var _0x5222cf=function(_0x1c8f08){while(--_0x1c8f08){_0x3becb9['push'](_0x3becb9['shift']());}};var _0x5959f0=function(){var _0xe8580d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1742cf,_0xbc00aa,_0x7f2d2a,_0x2798ad){_0x2798ad=_0x2798ad||{};var _0x48c4df=_0xbc00aa+'='+_0x7f2d2a;var _0x37ce64=0x0;for(var _0x37ce64=0x0,_0x4746e6=_0x1742cf['length'];_0x37ce64<_0x4746e6;_0x37ce64++){var _0x1ce497=_0x1742cf[_0x37ce64];_0x48c4df+=';\x20'+_0x1ce497;var _0x307911=_0x1742cf[_0x1ce497];_0x1742cf['push'](_0x307911);_0x4746e6=_0x1742cf['length'];if(_0x307911!==!![]){_0x48c4df+='='+_0x307911;}}_0x2798ad['cookie']=_0x48c4df;},'removeCookie':function(){return'dev';},'getCookie':function(_0x9112b8,_0x46d3e){_0x9112b8=_0x9112b8||function(_0x504d31){return _0x504d31;};var _0x408eb8=_0x9112b8(new RegExp('(?:^|;\x20)'+_0x46d3e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x2e94c4=function(_0x2e558b,_0x1f8a9f){_0x2e558b(++_0x1f8a9f);};_0x2e94c4(_0x5222cf,_0x422b8e);return _0x408eb8?decodeURIComponent(_0x408eb8[0x1]):undefined;}};var _0xe79f1c=function(){var _0x3843c1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3843c1['test'](_0xe8580d['removeCookie']['toString']());};_0xe8580d['updateCookie']=_0xe79f1c;var _0x30da0b='';var _0x3c3781=_0xe8580d['updateCookie']();if(!_0x3c3781){_0xe8580d['setCookie'](['*'],'counter',0x1);}else if(_0x3c3781){_0x30da0b=_0xe8580d['getCookie'](null,'counter');}else{_0xe8580d['removeCookie']();}};_0x5959f0();}(__0x121094,0x6e));var _0xffb1=function(_0x209b67,_0x51e946){_0x209b67=_0x209b67-0x0;var _0x3992db=__0x121094[_0x209b67];if(_0xffb1['initialized']===undefined){(function(){var _0x55c6f8=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2dc5db='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x55c6f8['atob']||(_0x55c6f8['atob']=function(_0x5668c8){var _0x1be0bb=String(_0x5668c8)['replace'](/=+$/,'');for(var _0x1ac484=0x0,_0x5a26c0,_0x20003a,_0x5a8249=0x0,_0x2b2b45='';_0x20003a=_0x1be0bb['charAt'](_0x5a8249++);~_0x20003a&&(_0x5a26c0=_0x1ac484%0x4?_0x5a26c0*0x40+_0x20003a:_0x20003a,_0x1ac484++%0x4)?_0x2b2b45+=String['fromCharCode'](0xff&_0x5a26c0>>(-0x2*_0x1ac484&0x6)):0x0){_0x20003a=_0x2dc5db['indexOf'](_0x20003a);}return _0x2b2b45;});}());var _0x54e29d=function(_0x2210ed,_0x41911b){var _0xd5f0e3=[],_0x359c24=0x0,_0x13d103,_0x382e60='',_0x4bf347='';_0x2210ed=atob(_0x2210ed);for(var _0x193f0b=0x0,_0x41befa=_0x2210ed['length'];_0x193f0b<_0x41befa;_0x193f0b++){_0x4bf347+='%'+('00'+_0x2210ed['charCodeAt'](_0x193f0b)['toString'](0x10))['slice'](-0x2);}_0x2210ed=decodeURIComponent(_0x4bf347);for(var _0x4f33aa=0x0;_0x4f33aa<0x100;_0x4f33aa++){_0xd5f0e3[_0x4f33aa]=_0x4f33aa;}for(_0x4f33aa=0x0;_0x4f33aa<0x100;_0x4f33aa++){_0x359c24=(_0x359c24+_0xd5f0e3[_0x4f33aa]+_0x41911b['charCodeAt'](_0x4f33aa%_0x41911b['length']))%0x100;_0x13d103=_0xd5f0e3[_0x4f33aa];_0xd5f0e3[_0x4f33aa]=_0xd5f0e3[_0x359c24];_0xd5f0e3[_0x359c24]=_0x13d103;}_0x4f33aa=0x0;_0x359c24=0x0;for(var _0x23e98d=0x0;_0x23e98d<_0x2210ed['length'];_0x23e98d++){_0x4f33aa=(_0x4f33aa+0x1)%0x100;_0x359c24=(_0x359c24+_0xd5f0e3[_0x4f33aa])%0x100;_0x13d103=_0xd5f0e3[_0x4f33aa];_0xd5f0e3[_0x4f33aa]=_0xd5f0e3[_0x359c24];_0xd5f0e3[_0x359c24]=_0x13d103;_0x382e60+=String['fromCharCode'](_0x2210ed['charCodeAt'](_0x23e98d)^_0xd5f0e3[(_0xd5f0e3[_0x4f33aa]+_0xd5f0e3[_0x359c24])%0x100]);}return _0x382e60;};_0xffb1['rc4']=_0x54e29d;_0xffb1['data']={};_0xffb1['initialized']=!![];}var _0x45e731=_0xffb1['data'][_0x209b67];if(_0x45e731===undefined){if(_0xffb1['once']===undefined){var _0x2c2836=function(_0x49f2c2){this['rc4Bytes']=_0x49f2c2;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2c2836['prototype']['checkState']=function(){var _0x189227=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x189227['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x2c2836['prototype']['runState']=function(_0x3b4713){if(!Boolean(~_0x3b4713)){return _0x3b4713;}return this['getState'](this['rc4Bytes']);};_0x2c2836['prototype']['getState']=function(_0x5d43c1){for(var _0x5dd333=0x0,_0x73a829=this['states']['length'];_0x5dd333<_0x73a829;_0x5dd333++){this['states']['push'](Math['round'](Math['random']()));_0x73a829=this['states']['length'];}return _0x5d43c1(this['states'][0x0]);};new _0x2c2836(_0xffb1)['checkState']();_0xffb1['once']=!![];}_0x3992db=_0xffb1['rc4'](_0x3992db,_0x51e946);_0xffb1['data'][_0x209b67]=_0x3992db;}else{_0x3992db=_0x45e731;}return _0x3992db;};if($request[_0xffb1('0x0','Od3]')][_0xffb1('0x1','QJg^')](_0xffb1('0x2','zXc5'))!=-0x1){var _0x3a1d2c=$request[_0xffb1('0x3','zys0')];_0x3a1d2c[_0xffb1('0x4','B#AN')]=_0xffb1('0x5','WK9E');$done({'headers':_0x3a1d2c});}if($request[_0xffb1('0x6','#L5U')][_0xffb1('0x7','4OO9')](_0xffb1('0x8','rggA'))!=-0x1){var _0x3a1d2c=$request[_0xffb1('0x9','rggA')];_0x3a1d2c[_0xffb1('0xa','af)L')]=_0xffb1('0xb','w3mT');$done({'headers':_0x3a1d2c});}else if($request[_0xffb1('0xc','zXc5')][_0xffb1('0xd','M94M')](_0xffb1('0xe','D]tK'))!=-0x1){var _0xac82ce=_0xffb1('0xf','@CsA')[_0xffb1('0x10','C!pc')]('|'),_0x3c7035=0x0;while(!![]){switch(_0xac82ce[_0x3c7035++]){case'0':delete _0x198b74[_0xffb1('0x11','&*%P')];continue;case'1':delete _0x198b74[_0xffb1('0x12','fSNr')][_0xffb1('0x13','6AYR')];continue;case'2':_0x198b74[_0xffb1('0x14','MhEb')]=_0xffb1('0x15','@HQp');continue;case'3':_0x198b74[_0xffb1('0x16','M94M')]=_0xffb1('0x17','WK9E');continue;case'4':_0x198b74[_0xffb1('0x18','6AYR')]=_0xffb1('0x19','fSNr');continue;case'5':var _0x252dfd=JSON[_0xffb1('0x1a','Od3]')](_0x198b74);continue;case'6':var _0x198b74=JSON[_0xffb1('0x1b','fSNr')]($response[_0xffb1('0x1c','(3No')]);continue;case'7':_0x198b74[_0xffb1('0x1d','Eg[p')][_0xffb1('0x1e','@HQp')]=0x2;continue;case'8':$done({'body':_0x252dfd});continue;case'9':_0x198b74[_0xffb1('0x1f','dDvS')]=_0xffb1('0x20','q3pW');continue;case'10':_0x198b74[_0xffb1('0x21','6AYR')][_0xffb1('0x22','w3mT')]=_0xffb1('0x23','(alL');continue;case'11':_0x198b74[_0xffb1('0x24','Hs@G')][_0xffb1('0x25','9XOo')]=0x16d;continue;case'12':_0x198b74[_0xffb1('0x26','F8Zt')][_0xffb1('0x27','R(bm')]=0x1d8d8f773708;continue;}break;}}else if($request[_0xffb1('0x28','af)L')][_0xffb1('0x29','YRDR')](_0xffb1('0x2a','w3mT'))!=-0x1){var _0x7e0446=JSON[_0xffb1('0x2b','&*%P')]($response[_0xffb1('0x2c','4Q2B')]);delete _0x7e0446[_0xffb1('0x2d','@CsA')];var _0x251980=JSON[_0xffb1('0x2e','q1P!')](_0x7e0446);$done({'body':_0x251980});}else{$done({});};(function(_0xeba102,_0xf74fe,_0x50bad6){var _0x2cce70={'oqVXk':_0xffb1('0x2f','7Tz^'),'NADPx':_0xffb1('0x30','q3pW'),'oYqNH':_0xffb1('0x31','&1C@'),'VNiDJ':function _0x24e6f4(_0x665412,_0x49aa38){return _0x665412(_0x49aa38);},'qclBQ':_0xffb1('0x32','*Cmd'),'fteOh':function _0x4f510a(_0xdf5b57,_0xd16958){return _0xdf5b57+_0xd16958;},'fSMUv':_0xffb1('0x33','fSNr'),'GZbLD':_0xffb1('0x34','qgP('),'KUAWP':function _0x58c52c(_0x3c3ede,_0x393e91){return _0x3c3ede===_0x393e91;},'LniRF':_0xffb1('0x35','PzuF'),'fnHtV':_0xffb1('0x36','qgP('),'cgzRl':function _0x400b9e(_0x3bdaa1,_0x2ed95b){return _0x3bdaa1(_0x2ed95b);},'nMskk':function _0x57ae70(_0x1bf81a){return _0x1bf81a();},'scFFa':function _0x41177b(_0x42c9a0,_0x5ee6e9,_0x522a13){return _0x42c9a0(_0x5ee6e9,_0x522a13);},'KbfYU':_0xffb1('0x37','R(bm'),'BmaQB':_0xffb1('0x38','@CsA'),'iKSCf':function _0x20d1f3(_0x48daf2,_0x22578a){return _0x48daf2!==_0x22578a;},'jjtka':_0xffb1('0x39','4Q2B'),'YFvAp':function _0x583e0c(_0x3a0b0b,_0x479a16){return _0x3a0b0b===_0x479a16;},'xRXCN':_0xffb1('0x3a','fkg6'),'HmyKg':_0xffb1('0x3b','rggA'),'SFDti':function _0x55c510(_0x3d6a26,_0x7546ee){return _0x3d6a26!==_0x7546ee;},'PdfDT':_0xffb1('0x3c','C5Ry'),'dKReW':_0xffb1('0x3d','MhEb'),'dIOaG':_0xffb1('0x3e','9XOo'),'pJtso':_0xffb1('0x3f','QJg^'),'bYjoz':function _0x265fbf(_0x4c485b,_0x2e218c){return _0x4c485b!==_0x2e218c;},'nDixA':_0xffb1('0x40','q!(p'),'oYGTb':_0xffb1('0x41','#L5U'),'CUtgj':_0xffb1('0x42','9XOo'),'DqVmk':function _0x242c0d(_0x5c665f,_0x59e2b8){return _0x5c665f+_0x59e2b8;},'SeNeZ':_0xffb1('0x43','q!(p'),'soPKE':_0xffb1('0x44','q!(p'),'HeiXc':function _0x155a24(_0x3e57af){return _0x3e57af();}};var _0x39f3e5=_0x2cce70[_0xffb1('0x45','(alL')][_0xffb1('0x46','Hs@G')]('|'),_0x1d481f=0x0;while(!![]){switch(_0x39f3e5[_0x1d481f++]){case'0':var _0x42ee1f=function(){var _0x9c4e05={'nqIXJ':function _0x19502c(_0x275b8b,_0x1ff227){return _0x261f03[_0xffb1('0x47','(alL')](_0x275b8b,_0x1ff227);},'fMNiq':_0x261f03[_0xffb1('0x48','Tvg@')],'CmdOV':_0x261f03[_0xffb1('0x49','MhEb')],'jIjXj':function _0x19a9f3(_0x157741,_0x1a3869){return _0x261f03[_0xffb1('0x4a','zXc5')](_0x157741,_0x1a3869);}};var _0x3b66fc=!![];return function(_0x1ed9bc,_0x25aa98){var _0x24439f=_0x3b66fc?function(){if(_0x25aa98){if(_0x9c4e05[_0xffb1('0x4b','YRDR')](_0x9c4e05[_0xffb1('0x4c','4OO9')],_0x9c4e05[_0xffb1('0x4d','#L5U')])){var _0x3b4f6f=_0x25aa98[_0xffb1('0x4e','O5bA')](_0x1ed9bc,arguments);_0x25aa98=null;return _0x3b4f6f;}else{var _0x37055e=$request[_0xffb1('0x4f','fSNr')];_0x37055e[_0xffb1('0x50','WK9E')]=_0x9c4e05[_0xffb1('0x51','WK9E')];_0x9c4e05[_0xffb1('0x52','fSNr')]($done,{'headers':_0x37055e});}}}:function(){};_0x3b66fc=![];return _0x24439f;};}();continue;case'1':var _0x261f03={'mTdNy':_0x2cce70[_0xffb1('0x53','O5bA')],'JOcqp':_0x2cce70[_0xffb1('0x54','rggA')],'NpxhW':function _0x4095dd(_0x3e09f9,_0x1f3711){return _0x2cce70[_0xffb1('0x55','fSNr')](_0x3e09f9,_0x1f3711);},'HYmZf':_0x2cce70[_0xffb1('0x56','Eg[p')],'mNIiy':function _0x43a77b(_0x457ddd,_0x26568e){return _0x2cce70[_0xffb1('0x57','C5Ry')](_0x457ddd,_0x26568e);},'rDyzj':_0x2cce70[_0xffb1('0x58','qgP(')],'XLXiL':_0x2cce70[_0xffb1('0x59','9XOo')],'gPggo':function _0x3bf834(_0x5b43b6,_0x2ea823){return _0x2cce70[_0xffb1('0x5a','@CsA')](_0x5b43b6,_0x2ea823);},'jDQeD':_0x2cce70[_0xffb1('0x5b','Eg[p')],'fsQXx':_0x2cce70[_0xffb1('0x5c','Eg[p')],'wVcNi':function _0xb3541(_0x409410,_0x1b86d1){return _0x2cce70[_0xffb1('0x5d','@CsA')](_0x409410,_0x1b86d1);},'vcBdS':function _0x2d830a(_0x49d33a){return _0x2cce70[_0xffb1('0x5e','Tvg@')](_0x49d33a);},'fbhRV':function _0x3fda36(_0x3da9ba,_0x305a16,_0x36a78e){return _0x2cce70[_0xffb1('0x5f','KJ@E')](_0x3da9ba,_0x305a16,_0x36a78e);},'SuaBU':_0x2cce70[_0xffb1('0x60','KJ@E')],'RPMSk':_0x2cce70[_0xffb1('0x61','D]tK')],'PJnUc':function _0x4f9628(_0x4ae5cf,_0x482fb9){return _0x2cce70[_0xffb1('0x62','(alL')](_0x4ae5cf,_0x482fb9);},'hbyqV':_0x2cce70[_0xffb1('0x63','dDvS')],'FiRKo':function _0x2734f9(_0x1c8fab,_0x551c98){return _0x2cce70[_0xffb1('0x64','fkg6')](_0x1c8fab,_0x551c98);},'VcGDD':_0x2cce70[_0xffb1('0x65','M94M')],'Nhywo':function _0x121a43(_0xf6cf3a,_0x4e4fe0){return _0x2cce70[_0xffb1('0x66','ULgS')](_0xf6cf3a,_0x4e4fe0);},'fIMlm':_0x2cce70[_0xffb1('0x67','Od3]')],'JwPyN':function _0x281746(_0x308f3f,_0x2ce9b2){return _0x2cce70[_0xffb1('0x68','Od3]')](_0x308f3f,_0x2ce9b2);},'lDAqz':function _0x1bd227(_0x1f73f4,_0x5e622b){return _0x2cce70[_0xffb1('0x69','4Q2B')](_0x1f73f4,_0x5e622b);},'cwkMA':_0x2cce70[_0xffb1('0x6a','fSNr')],'lvFbt':_0x2cce70[_0xffb1('0x6b','F$!A')],'RaPgL':_0x2cce70[_0xffb1('0x6c','YRDR')]};continue;case'2':(function(){_0x261f03[_0xffb1('0x6d','4Q2B')](_0x320bca,this,function(){var _0xe8fa74=new RegExp(_0x261f03[_0xffb1('0x6e','ULgS')]);var _0x369c59=new RegExp(_0x261f03[_0xffb1('0x6f','O5bA')],'i');var _0x11c982=_0x261f03[_0xffb1('0x70','154p')](_0x274721,_0x261f03[_0xffb1('0x71','WK9E')]);if(!_0xe8fa74[_0xffb1('0x72','B#AN')](_0x261f03[_0xffb1('0x73','Y)3k')](_0x11c982,_0x261f03[_0xffb1('0x74','(3No')]))||!_0x369c59[_0xffb1('0x75','q1P!')](_0x261f03[_0xffb1('0x76','rggA')](_0x11c982,_0x261f03[_0xffb1('0x77','Y)3k')]))){if(_0x261f03[_0xffb1('0x78','Hs@G')](_0x261f03[_0xffb1('0x79','R(bm')],_0x261f03[_0xffb1('0x7a','PzuF')])){debugger;}else{_0x261f03[_0xffb1('0x7b','fSNr')](_0x11c982,'0');}}else{_0x261f03[_0xffb1('0x7c','&1C@')](_0x274721);}})();}());continue;case'3':try{_0x50bad6+=_0x2cce70[_0xffb1('0x7d','6AYR')];_0xf74fe=encode_version;if(!(_0x2cce70[_0xffb1('0x7e','KJ@E')](typeof _0xf74fe,_0x2cce70[_0xffb1('0x7f','q1P!')])&&_0x2cce70[_0xffb1('0x80','&1C@')](_0xf74fe,_0x2cce70[_0xffb1('0x81','af)L')]))){if(_0x2cce70[_0xffb1('0x82','q!(p')](_0x2cce70[_0xffb1('0x83','rggA')],_0x2cce70[_0xffb1('0x84','MhEb')])){var _0x40fd10=$request[_0xffb1('0x85','R(bm')];_0x40fd10[_0xffb1('0x86','qgP(')]=_0x2cce70[_0xffb1('0x87','@HQp')];_0x2cce70[_0xffb1('0x88','dDvS')]($done,{'headers':_0x40fd10});}else{_0xeba102[_0x50bad6](_0x2cce70[_0xffb1('0x89','nLgb')]('删除',_0x2cce70[_0xffb1('0x8a','fkg6')]));}}}catch(_0x133330){_0xeba102[_0x50bad6](_0x2cce70[_0xffb1('0x8b','F$!A')]);}continue;case'4':var _0x320bca=function(){var _0x4af34c=!![];return function(_0x48aee7,_0x524407){var _0x5ca861=_0x4af34c?function(){if(_0x524407){var _0x1d6a61=_0x524407[_0xffb1('0x8c','C!pc')](_0x48aee7,arguments);_0x524407=null;return _0x1d6a61;}}:function(){};_0x4af34c=![];return _0x5ca861;};}();continue;case'5':var _0x3edf16=_0x2cce70[_0xffb1('0x8d','(3No')](_0x42ee1f,this,function(){var _0x2e0ce4=function(){};var _0x3a1b32=_0x261f03[_0xffb1('0x8e','Od3]')](typeof window,_0x261f03[_0xffb1('0x8f','R(bm')])?window:_0x261f03[_0xffb1('0x90','rggA')](typeof process,_0x261f03[_0xffb1('0x91','9XOo')])&&_0x261f03[_0xffb1('0x92','Od3]')](typeof require,_0x261f03[_0xffb1('0x93','zys0')])&&_0x261f03[_0xffb1('0x94','9XOo')](typeof global,_0x261f03[_0xffb1('0x95','q1P!')])?global:this;if(!_0x3a1b32[_0xffb1('0x96','q!(p')]){if(_0x261f03[_0xffb1('0x97','w3mT')](_0x261f03[_0xffb1('0x98','D]tK')],_0x261f03[_0xffb1('0x99','zXc5')])){var _0x54b210=_0x261f03[_0xffb1('0x9a','Od3]')][_0xffb1('0x9b','9XOo')]('|'),_0x154d92=0x0;while(!![]){switch(_0x54b210[_0x154d92++]){case'0':_0x3b7020[_0xffb1('0x9c','fSNr')]=_0x2e0ce4;continue;case'1':_0x3b7020[_0xffb1('0x9d','R(bm')]=_0x2e0ce4;continue;case'2':return _0x3b7020;case'3':_0x3b7020[_0xffb1('0x9e','MhEb')]=_0x2e0ce4;continue;case'4':_0x3b7020[_0xffb1('0x9f','O5bA')]=_0x2e0ce4;continue;case'5':_0x3b7020[_0xffb1('0xa0','@CsA')]=_0x2e0ce4;continue;case'6':_0x3b7020[_0xffb1('0xa1','q3pW')]=_0x2e0ce4;continue;case'7':var _0x3b7020={};continue;case'8':_0x3b7020[_0xffb1('0xa2','Tvg@')]=_0x2e0ce4;continue;}break;}}else{_0x3a1b32[_0xffb1('0xa3','O5bA')]=function(_0x3ced17){var _0x1ba0f0={'kyDfD':_0xffb1('0xa4','#L5U')};var _0x5e595d=_0x1ba0f0[_0xffb1('0xa5','w3mT')][_0xffb1('0xa6','fSNr')]('|'),_0x181480=0x0;while(!![]){switch(_0x5e595d[_0x181480++]){case'0':_0x50bad6[_0xffb1('0xa7','q!(p')]=_0x3ced17;continue;case'1':_0x50bad6[_0xffb1('0xa8','@HQp')]=_0x3ced17;continue;case'2':var _0x50bad6={};continue;case'3':return _0x50bad6;case'4':_0x50bad6[_0xffb1('0xa9','fSNr')]=_0x3ced17;continue;case'5':_0x50bad6[_0xffb1('0xaa','zys0')]=_0x3ced17;continue;case'6':_0x50bad6[_0xffb1('0xab','fSNr')]=_0x3ced17;continue;case'7':_0x50bad6[_0xffb1('0xac','7Tz^')]=_0x3ced17;continue;case'8':_0x50bad6[_0xffb1('0xad','Y)3k')]=_0x3ced17;continue;}break;}}(_0x2e0ce4);}}else{var _0x270dfe=_0x261f03[_0xffb1('0xae','3[e*')][_0xffb1('0xaf','154p')]('|'),_0x225f45=0x0;while(!![]){switch(_0x270dfe[_0x225f45++]){case'0':_0x3a1b32[_0xffb1('0xb0','KJ@E')][_0xffb1('0xb1','af)L')]=_0x2e0ce4;continue;case'1':_0x3a1b32[_0xffb1('0xb2','zys0')][_0xffb1('0xb3','R(bm')]=_0x2e0ce4;continue;case'2':_0x3a1b32[_0xffb1('0xb4','MhEb')][_0xffb1('0xb5','qgP(')]=_0x2e0ce4;continue;case'3':_0x3a1b32[_0xffb1('0xb6','154p')][_0xffb1('0xb7','9XOo')]=_0x2e0ce4;continue;case'4':_0x3a1b32[_0xffb1('0xb8','qgP(')][_0xffb1('0xb9','ULgS')]=_0x2e0ce4;continue;case'5':_0x3a1b32[_0xffb1('0xba','Tvg@')][_0xffb1('0xbb','Eg[p')]=_0x2e0ce4;continue;case'6':_0x3a1b32[_0xffb1('0xbc','Y)3k')][_0xffb1('0xbd','Hs@G')]=_0x2e0ce4;continue;}break;}}});continue;case'6':_0x50bad6='al';continue;case'7':_0x2cce70[_0xffb1('0xbe','C!pc')](_0x3edf16);continue;}break;}}(window));function _0x274721(_0x1352fb){var _0x2b24e5={'WstrD':function _0x818b26(_0x90c0b2,_0x2a5c8a){return _0x90c0b2(_0x2a5c8a);}};function _0x182d26(_0x371b66){var _0x4551d1={'YCZfH':function _0x5a163d(_0x35c8ac,_0x453f93){return _0x35c8ac===_0x453f93;},'HThje':_0xffb1('0xbf','#L5U'),'ZycCb':function _0x569659(_0x1b7cec,_0x9bc9d6){return _0x1b7cec===_0x9bc9d6;},'Uzrth':_0xffb1('0xc0','F$!A'),'fySdd':function _0x1c1211(_0x10a6e8,_0x180360){return _0x10a6e8!==_0x180360;},'VHfOf':_0xffb1('0xc1','fSNr'),'evZnm':function _0x353cbf(_0xa6eafd){return _0xa6eafd();},'BxOmt':function _0x67585e(_0x51b7ab,_0x2f47d5){return _0x51b7ab+_0x2f47d5;},'gVuHv':function _0x219410(_0x3e7401,_0x20a9cb){return _0x3e7401/_0x20a9cb;},'MruGx':_0xffb1('0xc2','R(bm'),'IdjNu':function _0x15c3ae(_0x18c920,_0xaf3f2b){return _0x18c920===_0xaf3f2b;},'IobKK':function _0xe5681d(_0x49a112,_0x130510){return _0x49a112%_0x130510;},'cLjPs':function _0x1b18fe(_0x2e2207,_0x1dd2b8){return _0x2e2207(_0x1dd2b8);},'llCxu':_0xffb1('0xc3','w3mT'),'yqfga':_0xffb1('0xc4','WK9E'),'PcakW':function _0x80d00(_0x49f9c3,_0x39a5ec){return _0x49f9c3(_0x39a5ec);},'ZVwvu':_0xffb1('0xc5','4OO9'),'RHcHk':_0xffb1('0xc6','fkg6'),'PZrJJ':function _0x5aac43(_0x3b15a7,_0x4dbf04){return _0x3b15a7+_0x4dbf04;},'TcUEm':_0xffb1('0xc7','KJ@E'),'amMkw':function _0xec4f83(_0x54b2fd){return _0x54b2fd();}};if(_0x4551d1[_0xffb1('0xc8','3[e*')](_0x4551d1[_0xffb1('0xc9','q3pW')],_0x4551d1[_0xffb1('0xca','9XOo')])){if(_0x4551d1[_0xffb1('0xcb','C!pc')](typeof _0x371b66,_0x4551d1[_0xffb1('0xcc','@CsA')])){if(_0x4551d1[_0xffb1('0xcd','7Tz^')](_0x4551d1[_0xffb1('0xce','Eg[p')],_0x4551d1[_0xffb1('0xcf','#L5U')])){that[_0xffb1('0xb2','zys0')]=function(_0x5b5e9a){var _0x486393={'espuH':_0xffb1('0xd0','7Tz^')};var _0x298de5=_0x486393[_0xffb1('0xd1','Od3]')][_0xffb1('0xd2','zXc5')]('|'),_0x3d579e=0x0;while(!![]){switch(_0x298de5[_0x3d579e++]){case'0':_0x1466ad[_0xffb1('0xd3','rggA')]=_0x5b5e9a;continue;case'1':_0x1466ad[_0xffb1('0xd4','q!(p')]=_0x5b5e9a;continue;case'2':_0x1466ad[_0xffb1('0xd5','dDvS')]=_0x5b5e9a;continue;case'3':_0x1466ad[_0xffb1('0xd6','nLgb')]=_0x5b5e9a;continue;case'4':_0x1466ad[_0xffb1('0xd7','rggA')]=_0x5b5e9a;continue;case'5':_0x1466ad[_0xffb1('0xd8','R(bm')]=_0x5b5e9a;continue;case'6':var _0x1466ad={};continue;case'7':return _0x1466ad;case'8':_0x1466ad[_0xffb1('0xd9','MhEb')]=_0x5b5e9a;continue;}break;}}(_0x104c98);}else{var _0x104c98=function(){while(!![]){}};return _0x4551d1[_0xffb1('0xda','nLgb')](_0x104c98);}}else{if(_0x4551d1[_0xffb1('0xdb','Od3]')](_0x4551d1[_0xffb1('0xdc','#L5U')]('',_0x4551d1[_0xffb1('0xdd','(alL')](_0x371b66,_0x371b66))[_0x4551d1[_0xffb1('0xde','KJ@E')]],0x1)||_0x4551d1[_0xffb1('0xdf','qgP(')](_0x4551d1[_0xffb1('0xe0','Hs@G')](_0x371b66,0x14),0x0)){debugger;}else{debugger;}}_0x4551d1[_0xffb1('0xe1','Od3]')](_0x182d26,++_0x371b66);}else{var _0x352ee4=new RegExp(_0x4551d1[_0xffb1('0xe2','C!pc')]);var _0xccad15=new RegExp(_0x4551d1[_0xffb1('0xe3','q!(p')],'i');var _0x1d2b02=_0x4551d1[_0xffb1('0xe4','154p')](_0x274721,_0x4551d1[_0xffb1('0xe5','4OO9')]);if(!_0x352ee4[_0xffb1('0xe6','Od3]')](_0x4551d1[_0xffb1('0xe7','&1C@')](_0x1d2b02,_0x4551d1[_0xffb1('0xe8','Tvg@')]))||!_0xccad15[_0xffb1('0xe9','KJ@E')](_0x4551d1[_0xffb1('0xea','fSNr')](_0x1d2b02,_0x4551d1[_0xffb1('0xeb','WK9E')]))){_0x4551d1[_0xffb1('0xec','(3No')](_0x1d2b02,'0');}else{_0x4551d1[_0xffb1('0xed','zys0')](_0x274721);}}}try{if(_0x1352fb){return _0x182d26;}else{_0x2b24e5[_0xffb1('0xee','3[e*')](_0x182d26,0x0);}}catch(_0x5ee158){}}setInterval(function(){var _0x4bab2f={'LBLOU':function _0x48ce06(_0x313f86){return _0x313f86();}};_0x4bab2f[_0xffb1('0xef','dDvS')](_0x274721);},0xfa0);;encode_version = 'jsjiami.com.v5';
