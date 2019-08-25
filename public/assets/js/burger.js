$(function(){
    $("").on("submit", event=>{
        event.preventDefault();

        var newBurger = {
            burgerName: $("").val().trim(),
                devoured: 0
        };
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(()=>{
            console.log("burger added");
            location.reload();
        });
    });

    $("").on("click", event=>{
        event.preventDefault();
        var id = $(this).data("id");
        var devouredSet = {
            devoured: 1
        };
        $.ajax("/api/burgers/" +id,{
            type: "PUT",
            data: devouredSet
        }).then(()=>{
            console.log("burger devoured");
            location.reload();
        })
    })
})