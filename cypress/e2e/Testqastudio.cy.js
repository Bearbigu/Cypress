describe('Тест сайта https://testqastudio.me/', function () {
    it('Проверка работы покупки товаров', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click().click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(700);
         cy.get('#menu-top > .menu-item-home > a').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(700);
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Герман');
         cy.get('#billing_last_name').type('Дольников');
         cy.get('#billing_company').type('Qastudio');
         cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').click();
         cy.get('.select2-search__field').type('Россия');
         cy.get('.select2-search__field').type('{enter}');
         cy.get('#billing_address_1').type('Улица Набережная, дом 7');
         cy.get('#billing_address_2').type('Подъезд 1, этаж 101');
         cy.get('#billing_city').type('Город Железногорск');
         cy.get('#billing_state').type('Природная область');
         cy.get('#billing_postcode').type('664587');
         cy.get('#billing_phone').type('89786125661');
         cy.get('#billing_email').type('german@dolnikov.ru');
         cy.get('#order_comments').type('Доставить с улыбкой');
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.');




         

         


         

     })
 })
 