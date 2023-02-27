describe('автотесты для формы логина и пароля', function () {
    it('проверка на позитивный кейс авторизации:', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru ');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         
     })

     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('German@mail.ru')
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })

    it('Проверка негативного кейса авторизации(неверный пароль)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru ');
        cy.get('#pass').type('iLoveqa');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })
    
    it('Проверка негативного кейса авторизации(неверный логин)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('n@dolnikov.ru ');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })
    it('Проверка негативного кейса валидации(Email без @)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru ');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })
    
    it('Тест на приведение к строчным буквам в поле email', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GERMAN@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })

     
 })
 