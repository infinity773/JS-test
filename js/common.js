// var newItemCounter = 1;
// var ourList = document.getElementById("our-list");
// var ourButton = document.getElementById("our-button");
// var ourHeadline = document.getElementById("our-headline");
// var listItems = document.getElementById("our-list").getElementsByTagName("LI");

// ourList.addEventListener("click", activateItem);

// function activateItem(e) {
// 	if (e.target.nodeName == "LI") {
// 		ourHeadline.innerHTML = e.target.innerHTML;
// 	for (i = 0; i < e.target.parentNode.children.length; i++) {
// 		e.target.parentNode.children[i].classList.remove("active");
// 	}
// 	e.target.classList.add("active");
// 	}
// }

// ourButton.addEventListener("click", createNewItem);

// function createNewItem() {
// 	ourList.innerHTML += "<li>test " + newItemCounter + "</li>";
// 	newItemCounter++;
// }

// jquery

// $(function () {
// 	$("#our-button").on('click', function() {
// 		$('li').addClass('active1');		
// 	});	
// });

// tab panel

// $(function () {
// 	$('.tab-panels .tabs li').on('click', function() {
// 	  var $panel = $(this).closest('.tab-panels');		
//     $panel.find('.tabs li.active').removeClass('active');
//     $(this).addClass('active');

// 		//which panel to show

// 		var panelToShow = $(this).attr('rel');

// 		//hide current panel

// 		$panel.find('.panel.active').slideUp(200, showNextPanel);

//         //show next panel

// 		function showNextPanel() {			
// 			$(this).removeClass('active');
// 			$('#' +panelToShow).slideDown(300, function() {
// 				$(this).addClass('active');
// 			});
// 		}		
// 	});
// });

$(function() {

	var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink');

	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/friends',
		success: function(orders) {
			$.each(orders, function(i, order) {
				$orders.append('<li>name: '+ order.name +', drink: '+ order.drink +'</li>');

			});
		},
		error: function() {
			alert('Error loading orders');
		}
	});

	$('#add-order').on('click', function() {
		var order = {
			name: $name.val(),
			drink: $drink.val()
		};
    $.ajax({
    	type:'POST',
    	url: 'http://rest.learncode.academy/api/learncode/friends',
    	data: order, 
      success: function(newOrder) {
       $orders.append('<li>name: '+ newOrder.name +', drink: '+ newOrder.drink +'</li>');
      },
      error: function() {
			alert('Error loading orders');
		}
    });

	});
});