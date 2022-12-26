function search_function() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list_products");
    console.log(ul)
    li = ul.getElementsByClassName('col-lg-4 col-md-6 col-sm-6');
    console.log(li)
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      console.log(li[i])
      
      a = li[i].getElementsByTagName("h6")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
function push_to_wishlist(element){
    console.log(element.parentNode)
    target = element.parentNode.closest('.col-lg-4.col-md-6.col-sm-6')
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