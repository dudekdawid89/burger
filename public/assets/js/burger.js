$(function(){

    

    $(".burger-button").on("click", event=>{

        event.preventDefault();
        console.log('hidf')
        let newBurger = {
            burgerName: $("#burger-input").val().trim(),
                devoured: 0
                
        };
        console.log(newBurger)
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(()=>{
            console.log("burger added");
            location.reload();
        });
    });

    $(".eat").on("click", function(event){
        event.preventDefault();
        
        let id = $(this).attr("id");
        console.log(id)
        let devouredSet = {
            devoured: 1
        };
        $.ajax("/api/burgers/" +id,{
            type: "PUT",
            data: devouredSet
        }).then(()=>{
            console.log("burger devoured");
            location.reload();
        });
    });
    $(".delete").on("click", function(event){
        event.preventDefault();
        let id = $(this).attr("id");
        $.ajax({
            type: "DELETE",
            url: "/api/burger/" +id
        }).then(()=>{
            console.log("burger deleted");
            location.reload();
        });

    })
})