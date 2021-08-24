$(document).on("click", ".open-exampleModal", function() {
    var imageurl = $(this).data('id');
    $(".modal-body #imgId").val(imageurl);
});