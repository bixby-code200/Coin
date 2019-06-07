var console = require('console')
module.exports.function = function showVCDetail(coinName) {
  console.log(coinName)
  const nameEnToKor = require('lib/name.js');
  
  for(let key in nameEnToKor){
    if (nameEnToKor[key] == coinName){
      const http = require('http');
      const base_url = 'https://api.bithumb.com/public/orderbook/';
      const res = http.getUrl(base_url+key, {format:'json'});
      return {
        'value': res.data.bids[0].price,
        'name': key,
        'korName': nameEnToKor[key],
      }
    }
    
  }
  
  return {
    value:"00",
    name:'---',
    korName:'목록에 해당 가상 화폐가 없습니다.',
  }
}