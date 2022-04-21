    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }


let slideImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
  
  slideImages.forEach(slideImage => {

    let imageHalfWay = (window.scrollY + window.innerHeight) - slideImage.height/2;
    let imageBottom = slideImage.offsetTop + slideImage.height;
    let imageHalfShown = imageHalfWay > slideImage.offsetTop;
    let imageNotScrolledPast = window.scrollY < imageBottom;

    if(imageHalfShown && imageNotScrolledPast){
      slideImage.classList.add('active');
    } else{
      slideImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide, 50));