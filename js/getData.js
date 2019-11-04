const URL = 'http://47.95.148.78/neckpets/getBlindBoxSeriesLitByTabType.json'

/**
 * 
 * @param {*} url 接口地址
 * @param {*} pageNumber 参数 页码
 * 
 * 封装ajax请求
 */
function get(url, pageNumber) {
  return new Promise((resolved, rejected) => {
    let req = new XMLHttpRequest()
    req.open('POST', url)
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    let content = `requestData={"userToken":"8ed7ddfde5ca37849b7c43591957d7fb73adc2a1", "pageNumber": "${pageNumber}"}`
    req.send(content)
    req.addEventListener('load', () => {
      if (req.status === 200) {
        resolved(req.responseText)
      } else {
        rejected(new Error('request failed: ' + req.statusText))
      }
    })
  })
}


/**
 * 
 * @param {*} pageNumber 
 * 
 * 渲染页面
 */
function getData(pageNumber) {
  get(
    URL,
    pageNumber
  ).then(response => {
    let data = JSON.parse(response).data
    if (data) {
      let html = ''
      data.forEach(goods => {
        list.append(getGoodsTemplate(goods))
      })
    }
  })
}
