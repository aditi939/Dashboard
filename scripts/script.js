
// Function to toggle text and apply styles
function toggleText(button) {
    // Find the nearest parent with the class 'btn'
    var btnContainer = $(button).closest('.btn');

    if ($(button).text() === 'No') {
        $(button).text('Yes');
        $(button).removeClass('toggle-off').addClass('toggle-on');
        btnContainer.addClass('table-dark'); // Example toggle, use the appropriate class for your styling
    } else {
        $(button).text('No');
        $(button).removeClass('toggle-on').addClass('toggle-off');
        btnContainer.removeClass('table-dark');
    }
}

// Handle click on the custom sidenav toggle button
$('.navbar-toggle').click(function () {
  $('#responsiveSidenav').toggleClass('open');
});

// Toggle functionality for dropdown buttons
$('.dropdown-btn').click(function () {
  $(this).toggleClass('active');
  $(this).next('.dropdown-container').slideToggle();
});