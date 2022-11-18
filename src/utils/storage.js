import { entity } from 'sp-data'
export const setStorage = (key, val = '') => {
  let enstr = entity.encode(val).replace(/;&#/ig, 'x0x')
  localStorage[key] = enstr.substring(2, enstr.length - 1).split('x0x').map((item, index) => { return (+item + 2 ** (index % 10)).toString(16) }).join('x0x')
}
export const getStorage = (key) => {
  let destr = `&#${(localStorage[key]||'').split('x0x').map((item, index) => { return ((+`0x${item}`) - 2 ** (index % 10)) }).join(';&#')};`
  return entity.decode(destr)
}