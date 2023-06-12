import emailjs from "emailjs-com";

const sendEmail = (templateParams) => {
  emailjs
    .send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      templateParams,
      "YOUR_USER_ID"
    )
    .then(
      (response) => {
        console.log("Email successfully sent!", response.status, response.text);
      },
      (error) => {
        console.error("Error sending email:", error);
      }
    );
};

export default sendEmail;