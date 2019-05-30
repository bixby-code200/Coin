module.exports.function = function showVCList (virtualCoins) {
  
  const http = require('http');
  // 가상화폐 목록 및 가격 가져와서 보여줌.
  const base_url = 'https://api.bithumb.com/public/orderbook/ALL';
  const res = http.getUrl(base_url, {format:'json'});
  return String(res.data)
}
