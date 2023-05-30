function doGet() {
  let template = HtmlService.createTemplateFromFile('index').evaluate()
  template.setTitle("DataBoy")
  template.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return template
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}


