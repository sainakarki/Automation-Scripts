import { selectors } from '../support/Selector';
import { email } from '../support/testData';

describe('Registration', () => {

  const User = 'John' + Math.floor(1000 + Math.random() * 9000);
  const phone_nbr = '98' + Math.floor(10000000 + Math.random() * 90000000);

  beforeEach(() => {
    cy.visit('https://authorized-partner.vercel.app/');
  });

  afterEach(() => {
    cy.log("Test completed");
  });

  it('User can Sign Up With valid credentials', () => {
    cy.contains('Login').should('be.visible');
    cy.xpath(selectors.login_btn).click();

    cy.contains('Sign Up').should('be.visible');
    cy.xpath(selectors.signup_btn).click();

    cy.get(selectors.i_agree_checkbox).click();
    cy.get(selectors.continue_btn).click();
    ////Personal Information
    cy.xpath(selectors.Firstname).type(User);
    cy.xpath(selectors.Lastname).type("Doe");

    cy.xpath(selectors.email).type(email);
    cy.xpath(selectors.phone_nbr).type(phone_nbr);
    cy.xpath(selectors.password).type('Password123!');
    cy.xpath(selectors.confirm_password).type('Password123!');
    cy.wait(2000);
    cy.get(selectors.next1_btn).click();
   //otp verification
    cy.task('getOtp', email).then((otp) => {

      cy.get('input', { timeout: 30000 }).filter(':visible').first().should('be.visible') .type(otp);

    });
    cy.xpath(selectors.verify_btn).click();
    cy.contains('Your account has been created successfully').should('be.visible');
    //Agency Details
    cy.xpath(selectors.agency_name).type('Test Agency');
    cy.xpath(selectors.role).type('Manager');
    cy.xpath(selectors.email_address).type(email);
    cy.xpath(selectors.website).type('www.testagency.com');
    cy.xpath(selectors.Address).type('123 Test Street, Test City');
    cy.xpath(selectors.Region_dropdown).click();
    cy.contains('United States of America').click();
    cy.xpath(selectors.next2_btn).click();
    cy.contains('Agency Details Added Successfully').should('be.visible');
    //Experience and performance metrics
    cy.contains('Experience and Performance Metrics').should('be.visible');
    cy.get('svg.lucide-chevron-down').click();
    cy.get('div[dir="ltr"] div:nth-child(5)').click();
    cy.xpath(selectors.no_stds_recruited).type('50');
    cy.xpath(selectors.focus_area).type('Counselling');
    cy.xpath(selectors.sucess_metrics).type('80%');
    cy.xpath(selectors.check_career_couns).click();
    cy.xpath(selectors.check_test_prep).click();
    cy.xpath(selectors.next3_btn).click();
    cy.contains('Professional Experience Added successfully.').should('be.visible');
    //verification and preferences
   cy.xpath(selectors.business_reg_nbr).type('78688289');
   cy.xpath(selectors.prefer_country_dropdown).click();
   cy.contains('United States of America').click();
   cy.xpath(selectors.prefer_institution_type).click();
   cy.xpath(selectors.certification_detail).type('ICEF Trained agent Counsellor')
   cy.get('input[type="file"]').eq(0).selectFile('cypress/fixtures/Document.pdf', { force: true });
   cy.get('input[type="file"]').eq(1).selectFile('cypress/fixtures/Document.pdf', { force: true });
   cy.xpath(selectors.submit_btn).click();
   cy.wait(3000);
   cy.contains('Verification and Preferences Added successfully!').should('be.visible');
   cy.wait(2000);
   cy.contains('My Profile').should('be.visible');
  });

});