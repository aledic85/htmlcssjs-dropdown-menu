function removeOpenMenu() {
  var right = $(".nav-right .dropdown-menu-i");
  right.slideUp();
}

function slideClick() {
  var en = $(".nav-right h4:nth-child(7)");
  var help = $(".nav-right h4:nth-child(5)");

  en.click(function(){

    var me = $(this);
    removeOpenMenu();
    me.siblings(".m-r-i").slideToggle();
  });

  help.click(function(){

    var me = $(this);
    removeOpenMenu();
    me.siblings(".m-r-ii").slideToggle();
  })
}

function slideHover() {
  var accounts = $(".m-r-ii > .dropdown-items");

  accounts.hover(function() {
    var me = $(this);
    me.children(".dropdown-menu-ii").show();

  }, function() {
    var me = $(this);
    me.children(".dropdown-menu-ii").hide();

  })
}

function init() {
  slideClick();
  slideHover();
}

$(document).ready(init);
