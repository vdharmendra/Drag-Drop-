let lists = document.getElementsByClassName("list");
let rightContainer = document.getElementById("right");
let leftContainer = document.getElementById("left");

for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        // LEFT TO RIGHT 
        rightContainer.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightContainer.addEventListener("drop", function(e){
            rightContainer.appendChild(selected);
            selected = null;
        })

        // RIGHT TO LEFT
        leftContainer.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        leftContainer.addEventListener("drop", function(e){
            leftContainer.appendChild(selected);
            selected = null;
        })


    });

    
}