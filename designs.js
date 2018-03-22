// Select color input
$(document).ready(function() {


    // makeGrid()
    function makeGrid() {

        var width = $("#inputWeight").val();
        var height = $("#inputHeight").val();
        var grid = $("#pixelCanvas");
        grid.empty();
        for (var r = 0; r < height; r++) {
            grid.append("<tr></tr>");

            for (var c = 0; c < width; c++) {
                grid
                    .children()
                    .last()
                    .append("<td></td>");


            }
        }

        // Change grid color
        grid.on("click", "td", function() {
            var colour = $("#colorPicker").val();
            $(this).css("background-color", colour);


        })

        // Clear grid color
        grid.on("dblclick", "td", function() {
            var colour = $("#colorPicker").val();
            $(this).css("background-color", "");


        })



    };

    // When size is submitted by the user, call makeGrid()
    $(":submit").click(function(e) {
        e.preventDefault();
        makeGrid();

    });

    // Clear Grid
    $("#gridReset").click(function(e) {

        $("#pixelCanvas").empty();

    })

    // Reset Grid color
    $("#colorReset").click(function(e) {

        $("#pixelCanvas").css("background-color", "");

    })
});
