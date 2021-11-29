
var tabsBox = $(".tabs"),
	carousel = $('.carousel');

if(tabsBox.length){
  include("js/easyResponsiveTabs.js");
}

if (carousel.length){
	include("js/owl.carousel.js");
}


function include(url){
  document.write('<script src="'+ url + '"></script>'); 
}




$(document).ready(function(){
	
	// responsive navigation toggle button
	$("#resp-toggle-btn").on('click', function(){
	  	$("body").toggleClass('navTrue');
	})

	// init of tabs
	if (tabsBox.length){
		tabsBox.each(function(){
			var currentTabs = $(this);

			currentTabs.easyResponsiveTabs();
		})
	}

	// init of carousel
	if (carousel.length){
  	carousel.each(function(){
  		var currentCarousel = $(this),
  			items 			= currentCarousel.data('items'),
  			singleItem      = false,
  			itemsDesc 		= currentCarousel.data('items-desc'),
  			itemsDescSm		= currentCarousel.data('items-desc-sm'),
  			itemsTab 		= currentCarousel.data('items-tab');

  		if (items < 1){
  			return false;
  		}

  		if (items == 1){
  			singleItem = 1;
  			itemsDesc = 1;
	  		itemsDescSm = 1;
  			itemsTab = 1;
  		}

  		currentCarousel.owlCarousel({
  			items : items,
  			singleItem : singleItem,
  			itemsDesktop : [1199, itemsDesc],
	        itemsDesktopSmall : [979, itemsDescSm],
	        itemsTablet : [768, itemsTab],
	        itemsTabletSmall : false,
	        itemsMobile : [479, 1],
	        navigation : true,
	        navigationText : [" ", " "],
	        transitionStyle : "fadeUp",
	        autoHeight : true
  		})
  	})
	}




})