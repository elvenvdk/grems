const Survey = require('../models/surveys');

const {sendMail} = require('./emailService');

exports.createSurvey = async (req, res) => {
  const {
    customer,
    call,
    eventDate,
    eventType,
    firstName,
    lastName,
    email,
    mobile,
    facebook,
    instagram,
    twitter,
    testimony,
    emailResponse,
  } = req.body;
  try {
    const survey = await new Survey({
      customer,
      call,
      eventDate,
      eventType,
      firstName,
      lastName,
      email,
      mobile,
      'socialMedia.facebook': facebook,
      'socialMedia.instagram': instagram,
      'socialMedia.twitter': twitter,
      testimony,
      emailResponse,
    });
    await survey.save();

    if (emailResponse) {
      sendMail({
        from: 'contact@grandmaemmas.com',
        to: email,
        subject: "No-Reply - Here's a copy of your Grandma Emma's Survey",
        text: "Grandma Emma's Survey Copy",
        html: `<p>Hi ${firstName}</p>
           <p>Thanks for taking our survey.  It's really appreciated.  We've put you on our mailing list to recieve exclusive updates.</p>
           <p>Event Date: ${eventDate}</p> 
           <p>First Name: ${firstName}</p> 
           <p>Last Name: ${lastName}</p> 
           <p>Email: ${eventDate}</p> 
           <p>Event Date: ${eventDate}</p> 
           <br></br>
           <p>${role === 'seller' ? sellerLink : link}</p>
           <br></br>
           <p>Thank you and Welcome,</p>
           <p>Grandma Emmas Team`,
      });
    }
    res.send({ msg: 'Survey successfully saved' });
  } catch (error) {
    res.status(500).json({ error: 'There was a problem creating this survey' });
  }
};
