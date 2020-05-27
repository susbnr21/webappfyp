import React from "react";
import ChatBot from "react-simple-chatbot";

function CustomChatbot(props) {
    const config = {
      width: "450px",
      height: "400px",
      floating: true
    };
    const steps = [
        {
          id: "Greet",
          message: "Hello There, Welcome to Rental Shifters.",
          trigger: "Ask Name"
        },
        {
          id: "Ask Name",
          message: "Please type your name?",
          trigger: "Waiting user input for name"
        },
        {
          id: "Waiting user input for name",
          user: true,
          trigger: "Checking the name"
        },
        {
          id: "Checking the name",
          message: "Hi {previousValue}, Glad to know you !!",
          trigger: "Info"
        },
        {
            id: "Info",
            message: "You're at the best rental service provider of the country.",
            trigger: "Questions"
        },
        {
            id: "Questions",
            message: "If you have any questions,",
            trigger: "Email"
        },
        {
            id: "Email",
            message: "Email us at: rentalshifters@gmail.com",
            trigger: "Almost"
        },
        {
            id: "Almost",
            message: "I hope you like us.",
            trigger: "Done"
        },
        {
          id: "Done",
          message: "Have a great day !!",
          end: true
        }
     ];
    
    return <ChatBot steps={steps} {...config} />;
   }
   export default CustomChatbot;