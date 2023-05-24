const { dayjs } = Dayjs || {};

const testDayjs = () => console.log(
    dayjs()
        .startOf('month')
        .add(10, 'day')
        .set('year', 2019)
        .format('YYYY-MM-DD HH:mm:ss')
)

function doGet() {
  let template = HtmlService.createTemplateFromFile('index').evaluate()
  template.setTitle("DataBoy")
  template.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return template
}