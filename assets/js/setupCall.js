$(document).ready(function() {

    // Call to the php file, performing the server call to checkoutshopper.adyen.com

    // Send styling to securedFields, for more information: https://docs.adyen.com/developers/checkout-javascript-sdk/styling-secured-fields
    var hostedFieldStyle = {
        base: {
            fontSize: '16px'
        }
    };

    var explanationDiv = $('.explanation');

    function initiateCheckout(jsonResponse) {

        var checkout = chckt.checkout(jsonResponse, '.checkout', hostedFieldStyle);

        explanationDiv.hide();
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