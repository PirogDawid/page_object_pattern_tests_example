
// <reference types="cypress" />
import Status from "../../support/PageObjectModel/ShoppingPageObjectModel.cy"

describe('Website shop tests ', function() {
    
   
    
    it('Contact us', function() {
    

    const status=new Status();
    const text = 'test.txt'
    
  
    cy.visit('https://automationexercise.com');
    status.getContactUs()
        .should("be.visible")
        .click();
    status.getNameField()
        .should("be.visible")
        .type("Dawid")
    status.getEmailField()
        .should("be.visible")
        .type("dawid@gmail.com")
    status.getSubjectField()
        .should("be.visible")
        .type("order")
    status.getMessageField()
        .should("be.visible")
        .type("my order has not arrived")
    status.getUploadFile()
        .click()
        .attachFile(text)
    status.getSubmitButton()
        .click()
    status.getStatusAlert()
        .should("be.visible")
        
   
   
    
    
  

       
    })
})
