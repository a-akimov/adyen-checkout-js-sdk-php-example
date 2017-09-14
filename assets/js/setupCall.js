$(document).ready(function() {

    var stayHidden = false;

    // Call to the php file, performing the server call to checkoutshopper.adyen.com

    // Send styling to securedFields, for more information: https://docs.adyen.com/developers/checkout-javascript-sdk/styling-secured-fields
    var hostedFieldStyle = {
        base: {
            fontSize: '16px'
        }
    };

    var explanationDiv = $('.explanation');
    explanationDiv.hide();

    function showExplanation() {
        if (stayHidden === true) {
            explanationDiv.removeClass('hidden');
        }
    }

    window.setTimeout(showExplanation(), 4000);

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
            stayHidden = true;
        },

        error : function(){
            if(window.console && console.log){
                console.log('### adyenCheckout::error:: args=', arguments);
            }
        }
    });

});