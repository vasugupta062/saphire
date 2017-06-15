// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require bootstrap-sprockets
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require_self
//= require theme/owl																																							 


$("#slider > .slide:gt(0)").fadeOut(3000);

setInterval(function(){
	$('#slider> .slide:first')
	.fadeIn(3000)
	.next()
	.fadeOut(3000)
	.end()
	.appendTo('#slider');
},3000);



$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$(document).on('change','#cab_make_id',function () {
    var id = $(this).find(':selected')[0].value;
    console.log(id);
    //alert(id); 
    $.ajax({
        type: 'POST',
        url: '../include/continent.php',
        data: {
            'id': id
        },
        success: function (data) {
            // the next thing you want to do 
            var $country = $('#country');
            $country.empty();
            $('#city').empty();
            for (var i = 0; i < data.length; i++) {
                $country.append('<option id=' + data[i].sysid + ' value=' + data[i].name + '>' + data[i].name + '</option>');
            }

            //manually trigger a change event for the contry so that the change handler will get triggered
            $country.change();
        }
    });

});