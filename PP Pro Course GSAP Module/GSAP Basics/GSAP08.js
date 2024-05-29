Draggable.create(".drag-circle", {
    bounds: ".drag_container"
});
  
Draggable.create(".drag-box", {
    type: "rotation"
});
  
Draggable.create(".drag-rectangle", {
    type: "y",
    bounds: ".drag_container"
});