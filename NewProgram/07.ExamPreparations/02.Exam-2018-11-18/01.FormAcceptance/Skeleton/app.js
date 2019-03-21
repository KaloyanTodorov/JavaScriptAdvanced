function acceptance() {

    let $shippingCompany = $('input[name="shippingCompany"]');
    let $productName = $('input[name="productName"]');
    let $productQuantity = $('input[name="productQuantity"]');
    let $productScrape = $('input[name="productScrape"]');

    if( $shippingCompany.val() !== '' &&
        $productName.val() !== '' &&
        Number($productQuantity.val()) > 0 &&
        Number($productScrape.val()) >= 0 &&
        Number($productQuantity.val()) > Number($productScrape.val())) {

        let $warehouse = $('#warehouse');
        let $div = $('<div>');
        let $p = $('<p>');

        let quantityToAdd = Number($productQuantity.val()) - Number($productScrape.val());

        $p.text(`[${$shippingCompany.val()}] ${$productName.val()} - ${quantityToAdd} pieces`);

        let $outOfStockButton = $('<button>Out of stock</button>');

        $div.append($p)
            .append($outOfStockButton);

        $outOfStockButton.on('click', () => $outOfStockButton.parent().remove());

        $warehouse.append($div);

        $shippingCompany.val('');
        $productName.val('');
        $productQuantity.val('');
        $productScrape.val('');
    }
}