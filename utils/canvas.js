CONST = {
  CANVAS_WIDTH: window.innerWidth - 20 || 800,
  CANVAS_HEIGHT: window.innerHeight - 20 || 600,
}

function getGameCanvas(id = 'game') {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext('2d');
  canvas.width = CONST.CANVAS_WIDTH;
  canvas.height = CONST.CANVAS_HEIGHT;
  return ctx;
}