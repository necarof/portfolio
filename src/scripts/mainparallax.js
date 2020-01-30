const parallax = document.querySelector("#scene");
const layers = scene.children;

function moveLayersDependsOnScroll(wScroll) {

  Array.from(layers).forEach(layer => {

    const divider = layer.dataset.depth;
    const strafe = wScroll * divider / 10;

    layer.style.transform = `translateY(-${strafe}%)`

  });

}

window.addEventListener("scroll", e => {
  const wScroll = window.pageYOffset;
  moveLayersDependsOnScroll(wScroll);
});