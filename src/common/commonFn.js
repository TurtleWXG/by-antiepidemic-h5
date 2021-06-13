export function setTextColor() {
  const domArr = []
  document.querySelectorAll('.sub-value').forEach(item => {
    domArr.push(...item.childNodes)
  })
  document.querySelectorAll('.third-value').forEach(item => {
    domArr.push(...item.childNodes)
  })
  domArr.forEach(item => {
    if (item.innerText === '0') {
      item.style.color = '#ff976a'
    } else {
      item.style.color = '#1989fa'
    }
  })
}
