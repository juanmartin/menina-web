var modelosArriba = ["3-arriba-vulpix.glb", "5-arriba-sakura.glb", "7-arriba.glb"]
var modelosAbajo = ["4-abajo.glb", "6-abajo-sakura.glb", "8-abajo.glb"]

var modelViewerTop, modelViewerBtm

window.onload = function() {
  modelViewerTop = document.getElementById("modelViewerTop")
  modelViewerBtm = document.getElementById("modelViewerBtm")
}

var indexTop = 0
var indexBtm = 0

function flechaArriba(sentido) {
  if (sentido) {
    // se fija si al incrementar se pasa, vuelve a 0, si no, deja el que da
    ++indexTop >= modelosArriba.length ? indexTop = 0 : indexTop
  } else {
    // se fija si es menor a 0 va al ultimo, si no, deja el que da
    --indexTop < 0 ? indexTop = modelosArriba.length-1 : indexTop
  }
  console.log('flecha arriba', sentido, indexTop)
  // carga el modelo que dio la cuenta arriba
  modelViewerTop.src = '3d/' + modelosArriba[indexTop]
}

function flechaAbajo(sentido) {
  if (sentido) {
    // se fija si al incrementar se pasa, vuelve a 0, si no, deja el que da
    ++indexBtm >= modelosAbajo.length ? indexBtm = 0 : indexBtm
  } else {
    // se fija si es menor a 0 va al ultimo, si no, deja el que da
    --indexBtm < 0 ? indexTop = modelosAbajo.length-1 : indexBtm
  }
  console.log('flecha arriba', sentido, indexBtm)
  // carga el modelo que dio la cuenta arriba
  modelViewerBtm.src = '3d/' + modelosAbajo[indexBtm]
}