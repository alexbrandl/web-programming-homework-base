$(document) .ready(function(){ 
//delete 
$.get("http://localhost:5000/api/entrees", function(data) { 
    console.log(data);
    var i;
    for(i=0; i<data.length; i++){
        $("select").append(`<option value = `+data[i].id+`>`+ data[i].name+`</option>`);
    }
});
$("#dropdown").on('click', function() {
    console.log("hi");
    $.ajax({
        url: "http://localhost:5000/api/entrees/" + $("#deleteid").val(), 
        method: "DELETE",

        success: function(result) {
            location.reload();
            // console.log("Success");
        },
        error: function(result) {
            alert("something")
        }
     })
});

$("#chezform").on('submit', function() {
    console.log($("#entreeId").val());
    const entree = {
        id: $("#entreeId").val(),
        name: $("#entreeName").val()
    };
    $.ajax({
        url: "http://localhost:5000/api/entrees/", 
        method: "POST",
        dataType: "json",
        data: entree,

    })
//      if (data["error"]) {
//         res.sendStatus(404)
//         // $("#msg").html('Error: ' + data["error"]);
//     }
//     if (data["ok"]) {
//         res.sendStatus(204)
//         // $("#msg").html('Item ' + data["text"] + ' added');
//     }
});



// On click to the delete button, 
// capture the entree ID by examining which entry to the pulldown is selected,
//  and then send a DELETE request to the “/api/entrees/id”. 
//  On success of the DELETE, refresh the pulldown menu. 
//  On failure, display an error message like, “The entree could not be deleted”.

// $( "#dropdown" ).click(function() {
//     var e = document.getElementById(input);
//     if (e === $("#element-id").val(input)) {
//         e.remove();
//         reload();
//     }else{
//         alert( "This entree could not be deleted.")
//     };
//   });

//   $.ajax({
//     method : 'delete',
//     data : {
//        itemid :/api/entrees/id
//     }
// })
  //add

//   The entree object should be passed through JSON.stringify. 
//   The stringified entree is then passed as data to an AJAX POST request to ‘/api/entrees’. 
//   On successful completion of the AJAX request, the form should be reset and the pulldown updated. 
//   On failure of the AJAX request, an error message like “The entree could not be added.” should be displayed.


//   const entree = {
//     id: $("#entreeId").val(),
//     name: $("#entreeName").val()
//   };

});