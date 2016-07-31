$(function()
{
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();

        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function(e)
    {
		$(this).parents('.entry:first').remove();

		e.preventDefault();
		return false;
	});
});

function calculateAverage() {
	var formData = document.getElementById("formdata");
	marks=[];
	weight=[];
	var sum = 0, counter=0, temp=0;

	getData(formData, marks, weight);
	
	for( var i = 0; i < marks.length; i++ ){
		if (weight.length==marks.length){
			temp=weight[i]/10;}
		if(temp==0){
			temp=1;	
		}
		sum += marks[i]*temp;
		counter+=temp;	
	}

	if(sum!=0 && counter!=0){
		var avg = sum/counter;}
	else{
		avg=0;	
		}
	
	document.getElementById("result").innerHTML =avg;
}


function findNeeded() {
	var formData = document.getElementById("formdata");
	var formData2 = document.getElementById("formdesired");
	var desiredGrade=Math.abs(formData2.elements[0].value);
	var remainingWeight=Math.abs(formData2.elements[1].value);
	marks=[];
	weight=[];
	var sum = 0, counter=0, temp=0, x=0;

	getData(formData, marks, weight);
	
	for( var i = 0; i < marks.length; i++ ){
		if (weight.length==marks.length){
			temp=weight[i]/10;}
		if(temp==0){
			temp=1;	
		}
		sum += marks[i]*temp;
		counter+=temp;	
	}
	
	
	if(desiredGrade!=0 && remainingWeight!=0){
		remainingWeight=remainingWeight/10;}
	else{
		remainingWeight=1;	
		}
	counter+=remainingWeight;
	if(desiredGrade!==0){
		x=((desiredGrade*counter) - sum)/remainingWeight;
	}
	else{
		x=0;	
	}
	document.getElementById("requiredMark").innerHTML = x;
	var count=0;
	while(desiredGrade>temp){
		temp=Math.pow(10, count);
		count++;
	}
	printGreeting(x, temp);
}


function getData(formData, a, b) {
    var count1 = 0, count2 = 0;
    for (var i = 0; i < formData.length; i++) {
        if (formData.elements[i].value != 0) {
            if (i % 3 == 0) {
                a[count1] = Math.abs(formData.elements[i].value);
                count1++;
            }
            else if (i % 3 == 1) {
                b[count2] = Math.abs(formData.elements[i].value);
                count2++;
            }
        }
    }
}

function printGreeting(x, temp){
	if(0<x&&x<=temp){
		document.getElementById("greeting").innerHTML = "Good luck!";
	}
	else if(x==0){
		document.getElementById("greeting").innerHTML = " ";
	}
	else{
		document.getElementById("greeting").innerHTML = "Sorry!";
	}
}