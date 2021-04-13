$(document) .ready(function(){ 
$.get("http://localhost:5000/api/entrees", function(data) { 
    for(let i=0; i<data.length; i++){
        $("select").append(`<option value = `+data[i].id+`>`+ data[i].name+`</option>`);
    }
});
$("#delete1").on('click', function() {
    
    $.ajax({
        url: "http://localhost:5000/api/entrees/" + $("#deletebutton").val(), 
        method: "DELETE",

        success: function(result) {
            location.reload();
        },
        error: function(result) {
            alert("something");
        }
     })
});

$("#addentree").on('click', function() {
    console.log($("#entreeid").val());
    const entree = {
        id: $("#entreeid").val(),
        name: $("#entreename").val()
    };
    $.ajax({
        url: "http://localhost:5000/api/entrees/", 
        method: "POST",
        dataType: "json",
        data: entree,
        success: function(result) {
            location.reload();
        }
    });
});
});