function makeResult(data){
  const resultArray = []
  const timeStamp = data.timestamp;
  const payCurrency = data.payment_currency;
  delete data.timestamp
  delete data.payment_currency;
  
  nameMatch = require('lib/name.js');
  
  for(let key in data){
    let dum = {};
    dum.name = key;
    dum.korName = nameMatch[key]
    dum.value = data[key].bids[0].price;
    resultArray.push(dum);
  }
  return resultArray
}


module.exports.function = function showVCList (virtualCoins) {
  
  const http = require('http');
  // 가상화폐 목록 및 가격 가져와서 보여줌.
  const base_url = 'https://api.bithumb.com/public/orderbook/ALL';
  const res = http.getUrl(base_url, {format:'json'});
  return makeResult(res.data)
}
