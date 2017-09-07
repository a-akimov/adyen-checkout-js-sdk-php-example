$(document).ready(function() {

    // Call to the php file, performing the server call to checkoutshopper.adyen.com


    var hostedFieldStyle = {
        base: {
            fontSize: '16px',
            lineHeight: '16px',
            fontSmoothing: 'antialiased',
            fontFamily: '"Fakt", sans-serif, arial'
        }
    }

    function initiateCheckout(jsonResponse) {

        var checkout = chckt.checkout(jsonResponse, '.checkout', hostedFieldStyle);
    }

    $.ajax({
        url: 'api/serverCall.php',
        dataType:'json',
        method:'POST',// jQuery > 1.9
        type:'POST', //jQuery < 1.9
        success:function(data){
            initiateCheckout(data);
        },

        error : function(){

            if(window.console && console.log){
                console.log('### adyenCheckout::error:: args=', arguments);
            }
        }
    });

});