describe('Protractor Demo App', function() {
 
  beforeEach(function() {
    browser.get('https://login.microsoftonline.com/common/oauth2/authorize?client_id=499b84ac-1321-427f-aa17-267ca6975798&site_id=501454&response_mode=form_post&response_type=code+id_token&redirect_uri=https%3A%2F%2Fapp.vssps.visualstudio.com%2F_signedin&nonce=f40e03df-2868-48cd-b730-d396ae572f8f&state=realm%3Daex.dev.azure.com%26reply_to%3Dhttps%253A%252F%252Faex.dev.azure.com%252Fsignup%253FacquisitionId%253D62cfb6ea-65ff-4486-a102-2fb47efb1ca2%2526campaign%253Dacom~azure~devops~services~main~hero%2526githubsi%253Dtrue%2526acquisitionType%253DbyDefault%26ht%3D3%26mkt%3Dpt-BR%26nonce%3Df40e03df-2868-48cd-b730-d396ae572f8f&resource=https%3A%2F%2Fmanagement.core.windows.net%2F&cid=f40e03df-2868-48cd-b730-d396ae572f8f&wsucxt=1&githubsi=true&msaoauth2=true&mkt=pt-BR&sso_reload=true');
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);  
    browser.get('/common/oauth2/authorize');

  });

  it('should have a title', function() {
    var inputEmail = element(by.id('i0116'));
    inputEmail.sendKeys('gabriel.goes@live.com');
    element(by.id('idSIButton9')).click(); 
    expect('gabriel.goes@live.com').toEqual('gabriel.goes@live.com');
  });
 
});
