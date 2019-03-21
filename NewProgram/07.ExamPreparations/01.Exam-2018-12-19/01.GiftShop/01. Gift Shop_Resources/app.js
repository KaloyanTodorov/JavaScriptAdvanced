function solution() {
		let $toyType = $('#toyType');
		let $toyPrice = $('#toyPrice');
		let $toyDescription = $('#toyDescription');

		let isGiftReady = true;

		if($toyType.val() === '') {
			isGiftReady = false;
		}

		if(!Number($toyPrice.val() )) {
			isGiftReady = false;
		}

		if($toyDescription.val() === '') {
			isGiftReady = false;
		}

		if(isGiftReady) {
			let $christmasGiftShop = $('#christmasGiftShop');
			let $div = $('<div>');
			$div.addClass('gift');

			let $img = $('<img src="gift.png">');
			let $h2 = $(`<h2>${$toyType.val()}</h2>`);
			let $p = $(`<p>${$toyDescription.val()}</p>`);
			let $button = $(`<button>Buy it for $${$toyPrice.val()}</button>`);

			$div.append($img);
			$div.append($h2);
			$div.append($p);
			$div.append($button);

			$christmasGiftShop.append($div);

			$button.on('click', () => $button.parent().remove());

			$toyType.val('');
			$toyPrice.val('');
			$toyDescription.val('');
		}
}