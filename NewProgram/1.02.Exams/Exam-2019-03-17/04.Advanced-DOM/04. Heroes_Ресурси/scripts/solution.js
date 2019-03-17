function solve(){

    let rebuiltKingdoms = {
         'castle' : false,
         'dungeon' : false,
         'fortress' : false,
         'inferno' : false,
         'necropolis' : false,
         'rampart' : false,
         'stronghold' : false,
         'tower' : false,
         'conflux' : false
    };

    let units = {
        mage: {attack: 70, defences: 30},
        fighter: {attack: 50, defences: 50},
        tank: {attack: 20, defences: 80},
    };


    let $rebuildKingdom = $('#kingdom div button');
    $rebuildKingdom.on('click', function () {
        let $kingdom = $($('#kingdom div input')[0]);
        let $king = $($('#kingdom div input')[1]);

        let kingdomToLowercase = $kingdom.val().toLocaleLowerCase();
        let isKingdomCorrect = false;

        switch (kingdomToLowercase) {
            case 'castle' :
            case 'dungeon' :
            case 'fortress' :
            case 'inferno' :
            case 'necropolis' :
            case 'rampart' :
            case 'stronghold' :
            case 'tower' :
            case 'conflux' :
                isKingdomCorrect = true;
                break;
            default:
                isKingdomCorrect = false;
                break;
        }

        if($king.val().length >= 2 && isKingdomCorrect) {
            rebuiltKingdoms[kingdomToLowercase] = true;

            let $kingdomToShow = $(`#${kingdomToLowercase}`);
            $kingdomToShow.css('display', 'inline-block');

            let $h1 = $(`<h1>${$kingdom.val().toUpperCase()}</h1>`);
            let $div = $('<div class="castle"></div>');
            let $h2 = $(`<h2>${$king.val().toUpperCase()}</h2>`);
            let $fieldset = $('<fieldset><legend>Army</legend><p>TANKS - 0</p><p>FIGHTERS - 0</p><p>MAGES - 0</p><div class="armyOutput"></div></fieldset>')

            $kingdomToShow.append($h1);
            $kingdomToShow.append($div);
            $kingdomToShow.append($h2);
            $kingdomToShow.append($fieldset);

            $kingdom.val('');
            $king.val('');
        }
    });

    let $joinKingdom = $('#characters div button');
    $joinKingdom.on('click', function () {
        let $characterName = $($('#characters div input')[3]);
        let $joinKingdom = $($('#characters div input')[4]);
        let $characterType = $($('#characters div input:checked'));

        let isKingdomRebuilt = rebuiltKingdoms[$joinKingdom.val().toLocaleLowerCase()];

        if($characterName.val().length >= 2 &&
            isKingdomRebuilt &&
            $characterType.val() &&
            $characterType.val().length > 0) {

            let $currentKingdomTypes = $(`#${$joinKingdom.val().toLocaleLowerCase()} p`);

            let $currentKingdomArmy = $(`#${$joinKingdom.val().toLocaleLowerCase()} div.armyOutput`);



            $currentKingdomArmy.text($currentKingdomArmy.text() + $characterName.val() + " ");

            for (const type of $currentKingdomTypes) {
                let args = $(type).text().split(' - ');
                let currentArmy = Number(args[1]);
                if(args[0].toLocaleLowerCase().includes($characterType.val())) {
                    currentArmy += 1;
                }

                $(type).text(`${args[0]} - ${currentArmy}`);
            }
        }
    });

    let $attack = $('#actions button');
    $attack.on('click', function () {
        let $attacker = $($('#actions input' )[0]);
        let $defender = $($('#actions input' )[1]);

        let attackerName = $attacker.val().toLocaleLowerCase();
        let defenderName = $defender.val().toLocaleLowerCase();

        if($attacker.val() !== '' &&
            $defender.val() !== '' &&
            rebuiltKingdoms[attackerName] &&
            rebuiltKingdoms[defenderName]) {

            let $attackerKingdomUnits = $(`#${attackerName} p`);
            let $defenderKingdomUnits = $(`#${defenderName} p`);

            let attackerPoints = 0;
            let defenderPoints = 0;

            for (const unit of $attackerKingdomUnits.toArray()) {
                let args = unit.textContent.split('S - ');
                let count = Number(args[1]);
                let army = args[0].toLocaleLowerCase();
                attackerPoints += units[army].attack * count;
            }

            for (const unit of $defenderKingdomUnits.toArray()) {
                let args = unit.textContent.split('S - ');
                let count = Number(args[1]);
                let army = args[0].toLocaleLowerCase();
                defenderPoints += units[army].defences * count;
            }

            if(attackerPoints > defenderPoints) {
                $(`#${defenderName} h2`).text($(`#${attackerName} h2`).text());
            }
        }
    })
}

solve();


