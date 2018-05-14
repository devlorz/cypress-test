describe('Footer', () => {
  it('Filters todos', () => {
    const filter = [
      { link: 'Active', expectedLength: 2 },
      { link: 'Completed', expectedLength: 2 },
      { link: 'All', expectedLength: 4 }
    ];
    cy.seedAndVisit('fixture:mixed_todos');

    cy.wrap(filter).each(filter => {
      cy.contains(filter.link).click();
      cy.get('.todo-list li').should('have.length', filter.expectedLength);
    });
  });
});
