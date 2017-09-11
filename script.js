var lis = document.getElementsByTagName("li");
var imgsPrev = document.getElementsByClassName("imgPrev");
var num = 1;
var butPrev = document.querySelector(".prev");
var butNext = document.querySelector(".next");
butPrev.style.display='none';
butNext.style.display='block';

imgsPrev[num-1].className += " active";
for (var i=0; i<lis.length; i++)
{
    lis[i].style.position = 'relative';
    var span = document.createElement('span');
    span.style.cssText = 'position:absolute; left:0; top:0';
    span.innerHTML = 1;
    lis[i].appendChild(span);
}

var width = 960;
var count = 1;
var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElements = carousel.querySelectorAll("li");
var position = 0;

carousel.querySelector('.prev').onclick = function () {
	--num;
	position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
	currentSlide(num);
	
};

carousel.querySelector('.next').onclick = function () {
  ++num;
  position = Math.max(position - width * count, -width * (listElements.length - 1));
  list.style.marginLeft = position + 'px';
  currentSlide(num);
};

function currentSlide(n) {
	if (n <= 1){
		n = 1;
		butPrev.style.display='none';
		butNext.style.display='block';
	}else {
		butPrev.style.display='block';
	}	
	
	if (n >= lis.length){
	  n = lis.length;
	  butPrev.style.display='block';
	  butNext.style.display='none';
	} else {
		butNext.style.display='block';
	}
	  
    for (i=0; i<lis.length; i++)
    {
        imgsPrev[i].className = imgsPrev[i].className.replace("active", "");
    }
    imgsPrev[n-1].className += " active";
    position = -960 * (n-1);
    list.style.marginLeft = position + 'px';
}