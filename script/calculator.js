		var yogurtAmt = 0;
		var yogurtAmtTemp = 0;
		var blueberriesAmt = 0; 
		var blueberriesAmtTemp = 0;
		var cerealAmt = 0;
		var cerealAmtTemp = 0;
		var totalCalories = 0;
		
$('#foodSelector').change(function() {

    var selectedFood = $(this).val();

        if(selectedFood == 'yogurt'){
            $('#yogurtSelector').show();
            $('#blueberriesSelector, #cerealSelector').hide();

            $('#yogurtSelector').change(function(){
                var yogurtAmt = parseInt($('#yogurtSelector option:selected').val());
                var yogurtLabel = $('#foodSelector option:selected').text() + ' - ' + $('#yogurtSelector option:selected').text();
                $('#calories1Label').html(yogurtLabel);
                $('#calories1').val(yogurtAmt);

                if (yogurtAmtTemp == 0){
                    totalCalories += yogurtAmt;
                    $('#total').val(totalCalories);
                }
                else{
                    totalCalories -= yogurtAmtTemp;
                    totalCalories += yogurtAmt;
                    $('#total').val(totalCalories);
                }
                    yogurtAmtTemp = yogurtAmt;

                $('#calories1Label, #calories1, #yogurtFacts').show();

                var dairyTarget = (100 * (yogurtAmt/360)).toFixed(0);
                $('#yogurtFacts').html('<span style="color:#3370A7">' + dairyTarget + '% of your daily dairy calorie limit.</span>');

            });

        }

        if(selectedFood == 'blueberries'){
            $('#blueberriesSelector').show();
            $('#yogurtSelector, #cerealSelector').hide();

            $('#blueberriesSelector').change(function(){
                var blueberriesAmt = parseInt($('#blueberriesSelector option:selected').val());
                var blueberriesLabel = $('#foodSelector option:selected').text() + ' - ' + $('#blueberriesSelector option:selected').text();
                $('#calories2Label').html(blueberriesLabel);
                $('#calories2').val(blueberriesAmt);

                if (blueberriesAmtTemp == 0){
                    totalCalories += blueberriesAmt;
                    $('#total').val(totalCalories);
                }
                else{
                    totalCalories -= blueberriesAmtTemp;
                    totalCalories += blueberriesAmt;
                    $('#total').val(totalCalories);
                }
                blueberriesAmtTemp = blueberriesAmt;

                $('#calories2Label, #calories2, #blueberriesFacts').show();

                var fruitTarget = (100 * (blueberriesAmt/170)).toFixed(0);
                $('#blueberriesFacts').html('<span style="color:#A91317">' + fruitTarget + '% of your daily fruit calorie limit.</span>');

            });

        }

        if(selectedFood == 'cereal'){
            $('#cerealSelector').show();
            $('#yogurtSelector, #blueberriesSelector').hide();

            $('#cerealSelector').change(function(){
                var cerealAmt = parseInt($('#cerealSelector option:selected').val());
                var cerealLabel = $('#foodSelector option:selected').text() + ' - ' + $('#cerealSelector option:selected').text();
                $('#calories3Label').html(cerealLabel);
                $('#calories3').val(cerealAmt);

                if (cerealAmtTemp == 0){
                    totalCalories += cerealAmt;
                    $('#total').val(totalCalories);
                }
                else{
                    totalCalories -= cerealAmtTemp;
                    totalCalories += cerealAmt;
                    $('#total').val(totalCalories);
                }
                cerealAmtTemp = cerealAmt;

                $('#calories3Label, #calories3, #cerealFacts').show();

                var grainsTarget = (100 * (cerealAmt/1056)).toFixed(0);
                $("div#removeGrains").css("display", "inline");
                $('#cerealFacts').html('#removeGrains');
                $('#cerealFacts').append('<span style="color:#AB5410">' + grainsTarget + '% of your daily grain calorie limit.</span>');

            });

        }
        else{
        }

});

$('#clear').click(function() {
    yogurtAmt, yogurtAmtTemp, blueberriesAmt, blueberriesAmtTemp, cerealAmt, cerealAmtTemp, totalCalories = 0;
    $('#yogurtSelector, #calories1Label, #calories1, #yogurtFacts').hide();
    $('#blueberriesSelector, #calories2Label, #calories2, #blueberriesFacts').hide();
    $('#cerealSelector, #calories3Label, #calories3, #cerealFacts').hide();
    $('#total').val('');
    $('#foodSelector').val('default')

});

$('#removeYogurt').click(function() {
    yogurtAmt, yogurtAmtTemp = 0;
    $('#yogurtSelector, #calories1Label, #calories1, #yogurtFacts').hide();
    $('#total').val(totalCalories - yogurtAmt);
    $('#foodSelector').val('default')
});

$('#removeBlueberries').click(function() {
    yogurtAmt, yogurtAmtTemp = 0;
    $('#yogurtSelector, #calories1Label, #calories1, #yogurtFacts').hide();
    $('#total').val(totalCalories - blueberriesAmt);
    $('#foodSelector').val('default')
});

$('#removeCereal').click(function() {
    yogurtAmt, yogurtAmtTemp = 0;
    $('#yogurtSelector, #calories1Label, #calories1, #yogurtFacts').hide();
    $('#total').val(totalCalories - cerealAmt);
    $('#foodSelector').val('default')
});