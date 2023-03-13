function setarData() {
  let elementData = document.getElementById('data')

  let data = new Date()

  const objData = {
    year:'numeric',
    month:'long',
    weekday:'long',
    day:'numeric'
  }

  elementData.textContent = data.toLocaleTimeString("pt-br", objData)
}

setarData()

setInterval(() => {
  setarData()
}, 1000)