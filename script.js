function removeOpenMenu() {

  var right = $(".dropdown-menu-i");
  right.slideUp();
}

function slideClick() {

  var en = $(".nav-right h4:nth-child(7)");
  var help = $(".nav-right h4:nth-child(5)");

  en.click(function(){

    removeOpenMenu();
    var me = $(this);
    if (me.siblings(".m-r-i").is(":hidden")) {
      me.siblings(".m-r-i").slideToggle();
    }
  });

  help.click(function(){

    removeOpenMenu();
    var me = $(this);
    if (me.siblings(".m-r-ii").is(":hidden")) {
      me.siblings(".m-r-ii").slideToggle();
    }
  });
}

function slideHover() {

  var accounts = $(".m-r-ii > .dropdown-items");

  accounts.hover(function() {
    var me = $(this);
    me.children(".dropdown-menu-ii").show();

  }, function() {
    var me = $(this);
    me.children(".dropdown-menu-ii").hide();

  });
}

function init() {
  slideClick();
  slideHover();
}

$(document).ready(init);
