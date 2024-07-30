describe('Atividade 5', () => {

  beforeEach(() => {
    cy.visit('https://cadastrocars.vercel.app/');
  })

  it('Cadastro Carros', () => {
    // Processo de Cadastro do primeiro Carro, onde testamos a marca Honda, 
    // com o máximo do valor para o ano sendo testado e setado para 2024 para valores maiores que 2024.
    // Mas observado que pode ser colocado kilometragem e preço com valores negativos.
    cy.get('.button').click();
    cy.get('.brandField').select('Honda');
    cy.get('.modelField').type('Honda Model 2');
    cy.get('.yearField').type('2030');
    cy.get('.kmField').type('-10000');
    cy.get('.priceField').type('-240000');
    cy.get('.pageLeft > .button').click();

    // Processo de Cadastro do segundo carro, onde testamos colocar o ano 0.
    // Também verificamos valores altos para kilometragem e preço, mas ainda não é puxado o limite.
    cy.get('.button').click();
    cy.get('.brandField').select('Mercedes-Benz');
    cy.get('.modelField').type('Mercedes Type V');
    cy.get('.yearField').type('0');
    cy.get('.kmField').type('100000000');
    cy.get('.priceField').type('1800000000');
    cy.get('.pageLeft > .button').click();

    // É observado que, apesar de ter sido adicionado 2 novos carros, o número total de carros na
    // página principal ainda aponta como havendo apenas 6 entradas em vez das 8 que deveria, e que
    // são devidamente mostradas na lista.
  });

  it('Editar Carro', () => {
    // Teste de edição do primeiro carro da lista.

    // É observado que funciona corretamente, porém é visto que os problemas do cadastro persistem.
    // É observado que é possível utilizar de valores negativos e absurdos.
    // Por exemplo: um carro bem mais velho que nosso planeta e com o preço negativo de -1e^127, ainda
    // não atingindo o limite do campo.
    cy.get('.carItem:nth-child(1) .pointButton').click() // Cypress não abre a janela onde há o botão
    // de editar e é necessário forçar (clicar manualmente) para prosseguir com o teste
    cy.get('.pointWindowBtn:nth-child(1)').click()
    cy.get('.brandField').select('Volkswagen');
    cy.get('.modelField').clear()
    cy.get('.modelField').type('Volk 3000');
    cy.get('.yearField').clear()
    cy.get('.yearField').type('-500000000000000000');
    cy.get('.kmField').clear()
    cy.get('.kmField').type('-999999999999999');
    cy.get('.priceField').clear()
    cy.get('.priceField').type('-9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999');
    cy.get('.pageLeft > .button').click();
  });

  it('Excluir Carro', () => {
    // Teste de exclusão dos itens 2 e 4 da lista. Observa-se que o total de entradas continua
    // listado como 6, apesar de ter só 4 itens após o teste.
    cy.get(':nth-child(2) > .options > .pointButton').click() // Cypress não abre a janela onde há o botão
    // de exluir e é necessário forçar (clicar manualmente) para prosseguir com o teste
    cy.get('.pointWindow > :nth-child(2)').click()
    cy.get(':nth-child(3) > .options > .pointButton').click() // Cypress não abre a janela onde há o botão
    // de excluir e é necessário forçar (clicar manualmente) para prosseguir com o teste
    cy.get('.pointWindow > :nth-child(2)').click()

    // Também é observado que o popup de confirmação de exclusão é aceitado diretamente sem comando para
    // tal, de forma que não é possível cancelar a exclusão após apertar o botão, já que não há
    // confirmação.
  });

})