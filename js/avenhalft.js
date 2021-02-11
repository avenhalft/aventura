function showhide (idtarget) {
  bloco = takeelementbyid(idtarget);
  if bloco.class =='collapse.show'
    bloco.class = 'collapse';
  else
    bloco.class = 'collapse.show';
    };
