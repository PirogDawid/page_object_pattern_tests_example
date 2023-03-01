class Status {

    getContactUs() {
        return cy.get('[href="/contact_us"]');
    }   
    getNameField() {
        return cy.get('[placeholder="Name"]')
    }
    getEmailField() {
        return cy.get('[placeholder="Email"]')
    }
    getSubjectField() {
        return cy.get('[placeholder="Subject"]')
    }
    getMessageField() {
        return cy.get('[placeholder="Your Message Here"]')
    }
    getUploadFile() {
        return cy.get('[name="upload_file"]')
    }
    getSubmitButton() {
        return cy.get('[name="submit"]')
    }
    getStatusAlert() {
        return cy.get('.status')
    }
    
    

   
   
}
    
    export default Status