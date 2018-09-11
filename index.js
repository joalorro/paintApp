document.addEventListener('DOMContentLoaded', () => {

  var color_form = document.getElementById("color-form")
  let canvas = document.getElementById("canvas")
  let context = canvas.getContext('2d')

  paper.install(window);
  window.onload = function() {
    paper.setup(canvas);
    // Create a simple drawing tool:
    var tool = new Tool();
    var path;

    // Define a mousedown and mousedrag handler
    tool.onMouseDown = function(event) {
      path = new Path();

      path.strokeColor = 'black';
      path.add(event.point);

      console.log(path)
    }

    tool.onMouseDrag = function(event) {
      path.add(event.point);
    }

    color_form.addEventListener('submit', (event) => {
      let selected_color = document.getElementById("selected-color")
      event.preventDefault();
      path.strokeColor = selected_color.value
    })

    let increase_width_button = document.getElementById("increase-width-button")
    increase_width_button.addEventListener('click', () => {
      path.strokeWidth +=1
    })

    let decrease_width_button = document.getElementById("decrease-width-button")
    decrease_width_button.addEventListener('click',() => {
      path.strokeWidth -=1
    })

    let clear_button = document.getElementById("clear-button")
    clear_button.addEventListener('click',() => {
      console.log(layers)
    })
  }

})
