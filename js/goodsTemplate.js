/**
 * 
 * @param {*} goods 
 * 
 * 根据接口返回的信息,创建单个 商品元素
 */

function getGoodsTemplate(goods) {
  let liElement = document.createElement('li')
  liElement.innerHTML = `
  <a>
  <div class="img">
    <img src="${goods.image}" />
  </div>
  <div class="info">
    <div class="name">
    <h3>
    ${goods.name}
    </h3>
    </div>
    <div class="description">${goods.description}</div>
    <div class="price">${goods.price}</div>
  </div>
  </a>
  `
  return liElement
}

