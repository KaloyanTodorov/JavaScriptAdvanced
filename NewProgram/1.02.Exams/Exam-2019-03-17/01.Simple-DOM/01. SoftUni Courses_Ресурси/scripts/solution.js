function solve() {
   let $signMeButton = $('button');

   const courses = {
       'js-fundamentals': 170,
       'js-advanced': 180,
       'js-applications': 190,
       'js-web': 490,
   };

   const couseName = {
       'js-fundamentals': 'JS-Fundamentals',
       'js-advanced': 'JS-Advanced',
       'js-applications': 'JS-Applications',
       'js-web': 'JS-Web',
    }

   $signMeButton.on('click', function () {
       let $courseFoot = $('.courseFoot p');
       let $checkboxes = $('input[type="checkbox"]:checked');
       let $isOonline = $('input[value="online"]:checked');
       let $myCourses = $('#myCourses .courseBody ul');


       $myCourses.empty();

       let totalPrice = 0;
       let moduleTotalPrice = 0;

       $checkboxes.toArray().forEach(option => {
            totalPrice += courses[$(option).val()];
            if(couseName[$(option).val()] !== 'js-web'){
                moduleTotalPrice += courses[$(option).val()];
            }

            let $li = $('<li>');
            let textToAppend = couseName[$(option).val()];
            $li.text(textToAppend);


           $myCourses.append($li);

       });

       if($checkboxes.length === 4) {
           let $li = $('<li>HTML and CSS</li>');

           $myCourses.append($li);
       }

       if($($checkboxes[0]).val() === 'js-fundamentals' && $checkboxes[0].checked
           && $($checkboxes[1]).val() === 'js-advanced' && $checkboxes[1].checked) {
           let discount = 180 * 0.10;
           totalPrice -= discount;
           moduleTotalPrice -= discount;
       }

       if($($checkboxes[0]).val() === 'js-fundamentals' && $checkboxes[0].checked
           && $($checkboxes[1]).val() === 'js-advanced' && $checkboxes[1].checked
           && $($checkboxes[2]).val() === 'js-applications' && $checkboxes[2].checked) {
           totalPrice -= 31.32;
       }

       if($isOonline.length > 0 && totalPrice > 0) {
           totalPrice -= totalPrice * 0.06;
       }

       $courseFoot.text(`Cost: ${Math.floor(totalPrice).toFixed(2)} BGN`);

   })
}

solve();