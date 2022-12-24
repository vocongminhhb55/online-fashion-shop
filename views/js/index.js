function push_to_wishlist(element){
    console.log(element.parentNode)
    target = element.parentNode.closest('.col-lg-3.col-md-6.col-sm-6.col-md-6.col-sm-6')
    console.log(target.querySelector("img[name='heart']").getAttribute("src"))
    if (target.querySelector("img[name='heart']").getAttribute("src") == "img/icon/heart.png") 
    {
        target.querySelector("img[name='heart']").setAttribute("src", "img/icon/heart2.png")
        Noti({
            status: 'success',
            content: 'Added to wishlist!',
            timer: 5000,
            animation: false,
            progress: true
        });
    }
    else{ 
        target.querySelector("img[name='heart']").setAttribute("src", "img/icon/heart.png")
        Noti({
            status: 'warning',
            content: 'Removed from wishlist!',
            timer: 5000,
            animation: false,
            progress: true
        });
    }

      // list_prods = document.querySelectorAll("tr[name=list-products] h5[name='pprice']")
      // list_quans = document.querySelectorAll("tr[name=list-products] h6[name='quan']")

      // target.remove();
  }