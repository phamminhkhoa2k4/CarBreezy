var timeoutID;
var timeoutID2;

window.addEventListener("load", function() {
    document.getElementById("state").style.display = 'none';
    // document.querySelector("body").style.display = 'none';
});

window.onload = () =>{
    document.getElementById("state").style.display = 'block';
    // document.querySelector("body").style.display = 'block';
    document.getElementById("loader").style.display = 'none';
    // document.getElementById("loader1").style.display = 'none';
    
}

function showhide(id)
{
    var element = document.getElementById(id);
    if (element.style.display == 'none')
    {
        element.style.display = 'block';         
        if (id=='filter__bar') document.getElementById("filter__sub").style.display = 'none';
    }
    else
    {
        element.style.display = 'none';
        if (id=='filter__bar') document.getElementById("filter__sub").style.display = 'block';
    }
}

function showhideResponsiveSupport()
{
    var support = document.getElementById("support-menu-responsive");
    if (support.style.display == 'none' || support.style.display == '')
    {
        support.style.display = 'block';
    }
    else
    {
        support.style.display = 'none';
    }
}

function showhideMenu(id)
{
    var menu = document.getElementById(id);
    document.getElementById("navbar-menu-icon-i").style.display = 'none';
    if (document.getElementById("navbar-menu").style.display == 'none' || document.getElementById("navbar-menu").style.display == '')
    {
        document.getElementById("navbar-menu").style.display = 'block';
    }
    else
    {
        document.getElementById("navbar-menu").style.display = 'none';
        document.getElementById("navbar-menu-icon-i").style.display = 'block';
    }
}

var index=0;
function carousel()
{
    var i;
    var x = document.getElementsByClassName("slide");
    var y = document.getElementsByClassName("btn-circle");
    
    for (i=0; i<x.length; i++)
    {
        x[i].style.display = 'none';
        y[i].className = y[i].className.replace(' btn-circle-white', '');
    }
    index++;
    if (index>x.length) index=1;
    if (x[index-1]) 
    {
        x[index-1].style.display = 'block';
        y[index-1].className += ' btn-circle-white';
    }
    timeoutID = setTimeout(carousel, 5000);
}

carousel("slide");

function moveImg(n){
    var x = document.getElementsByClassName("slide");
    var y = document.getElementsByClassName("btn-circle");
    
    for (i=0; i<x.length; i++)
    {
        x[i].style.display = 'none';
        y[i].className = y[i].className.replace(' btn-circle-white', '');
    }
    
    if (n==4) 
    {
        if (index==3)
        {
            n = 0;
            index = 1;
        }
        else 
        {
            n = index;
            index++;
        }
    }
    else if (n==-1) 
    {
        if (index==1)
        {
            n = index+1;
            index = 3;
        }
        else 
        {
            n = index-2;
            index--;
        }
    }
    x[n].style.display = 'block';
    y[n].className += ' btn-circle-white';
    
    // console.log(timeoutID2)
    if (timeoutID2) clearTimeout(timeoutID2)
    clearTimeout(timeoutID);
    timeoutID2 = setTimeout(carousel, 5000);
}