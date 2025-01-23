window.onscroll = function(e)
{
    let scroll = window.scrollY
    let headerNav = document.getElementById('header-nav')
    //let headerHeight = headerNav.clientHeight
    //let headingHeight = document.getElementById('heading').scrollHeight
    //console.log(scroll + "  |  " + headerHeight + "  |  " + headingHeight)
    if (scroll >= 140)
    {
        headerNav.classList.add('fixed-header')
    }
    else
    {
        headerNav.classList.remove('fixed-header')
    }
}