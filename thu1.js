var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Chuyển ảnh sau 3 giây
}

// Khởi động slider
carousel();