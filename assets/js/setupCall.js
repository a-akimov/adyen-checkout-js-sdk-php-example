$(document).ready(function() {

    var showHint = false;

    // Create styling object for securedFields, for more information: https://docs.adyen.com/developers/checkout-javascript-sdk/styling-secured-fields
    var hostedFieldStyle = {
        base: {
            fontSize: '16px'
        }
    };

    // Functionality around showing hint on how to configure the 'setup' call
    var explanationDiv = $('.explanation');
    explanationDiv.hide();

    function showExplanation() {
        if (showHint) {
            explanationDiv.show();
        }
    }

    window.setTimeout(showExplanation, 4000);

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////// INITIALIZE CHECKOUT ////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * @function Renders the JSON response from the 'setup' call as a fully functioning Checkout page
     *
     * Uses the 'checkout' property on the global var 'chckt' which is created when checkoutSDK.min.js is loaded
     *
     * @param jsonResponseObject - the JSON response from the 'setup' call to the Adyen CheckoutAPI
     */
    function initiateCheckout(jsonResponse) {
        var checkout = chckt.checkout(jsonResponse, '.checkout', hostedFieldStyle);
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////// PERFORM SETUP CALL /////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    // Make 'setup' call with serverCall.php - performs the server call to checkout.adyen.com
    $.ajax({
        url: 'api/serverCall.php',
        dataType:'json',
        method:'POST',// jQuery > 1.9
        type:'POST', //jQuery < 1.9
        success:function(data){

            // For demo purposes check that the expected object has been loaded, otherwise show hint
            if(data.hasOwnProperty('originKey')){

                // Initialize checkout
                initiateCheckout(data);
            }else{

                // Show hint to set Merchant Account property etc
                showHint = true;
            }
        },

        error : function(){
            if(window.console && console.log){
                console.log('### adyenCheckout::error:: args=', arguments);
            }
        }
    });

});