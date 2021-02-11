function showhide (idtarget) {
  bloco = document.getElementById(idtarget);
  if (bloco.class =='collapse.show') {
    bloco.class = 'collapse';
  } else {
    bloco.class = 'collapse.show';
  }};
