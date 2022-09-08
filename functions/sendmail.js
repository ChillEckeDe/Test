const nodemailer = require("nodemailer")
module.exports = {
  sendmail
}
async function sendmail(to,content,subjekt){
  
  var transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"chillhosting439@gmail.com",
            pass:"gxxhmmjtntbuwuiz"
        }
    });
  var mailoptions = {
        from: "GoodVibess.de <system@goodvibess.de>",
        to:to,
        subject:subjekt,
        text:content
  }
  
  transporter.sendMail(mailoptions,function(error,info) {
            if(error) {
                console.log(error);
            }
            else {
                console.log("email send "+info.response)
            }
        })
}