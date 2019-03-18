// Check off Task with a click
$('ul').on('click', 'li', function() {
  // Add line-through and color class
  $(this).toggleClass('completed');
});

// X to delete Task
$('ul').on('click', 'span', function(e) {
  $(this).parent().fadeOut(500, function() {
    // Removes parent element
    $(this).remove();
  });
  // Stop Bubbling
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
  if(e.which === 13) {
    // Text entered into input
    var taskText = $(this).val();
    $(this).val('');
    // Create new li and add to parent ul
    $('ul').append('<li><span class="trash-can"><i class="fas fa-trash-alt"></i></span>' + taskText + '</li>');
  }
});

$('#plus').click(function() {
  $("input[type='text']").fadeToggle();
});
