 /// <reference types="Cypress"/>

export default class HomePage{



  visite(){
    cy.visit("https://www.alkosto.com/")
    cy.get("header")
  }


  searchProduct(productToSearch){
    cy.visit("https://www.alkosto.com/")
    cy.get("[placeholder='¿Qué buscas hoy?']").type(`${productToSearch} {enter}`)
    cy.contains(`Televisores`)
  }

  searchTv(){
    cy.visit("https://www.alkosto.com/")
    cy.get("[placeholder='¿Qué buscas hoy?']").type(`televisor {enter}`)

  }

  searchFridge(){
    cy.visit("https://www.alkosto.com/")
    cy.get("[placeholder='¿Qué buscas hoy?']").type(`nevera {enter}`)

  }

  searchPhone(){
    cy.visit("https://www.alkosto.com/")
    cy.get("[placeholder='¿Qué buscas hoy?']").type(`celular {enter}`)

  }
}