function showhide (idtarget) {
  bloco = document.getElementById(idtarget);
  if (bloco.className =='collapse.show') {
    bloco.className = 'collapse';
  } else {
    bloco.className = 'collapse.show';
  }};
