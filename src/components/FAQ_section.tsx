import FAQ from './FAQ';

const FAQSection = () => {
  // Sample FAQ data
  const faqItems = [
    {
      question: "Where is Gumbo Boys located?",
      answer: "We are located at 648 S Main St in the heart of Downtown Los Angeles (DTLA)."
    },
    {
      question: "What are your operating hours?",
      answer: "We open daily at 11:00 AM. We close at 10:00 PM Sunday through Thursday, and stay open late until 12:00 AM on Fridays and Saturdays."
    },
    {
      question: "Do you have options for delivery?",
      answer: "Yes! We specialize in delivery via Uber Eats to Downtown LA, Glendale, and surrounding areas."
    },
    {
      question: "Do you have dine-in seating?",
      answer: "We offer casual dine-in seating and host frequent pop-up events and block parties."
    },
    {
      question: "What is your signature dish?",
      answer: "Our 'Sweep The Kitchen Gumbo' is a must-try! It's loaded with shrimp, sausage, chicken, okra, and authentic spices."
    },
    {
      question: "Do you accept credit or debit cards?",
      answer: "Yes, we accept all major credit and debit cards for your convenience."
    },
    {
      question: "Are your ingredients authentic?",
      answer: "Absolutely. We bring the flavors of the Gulf Coast to you, using traditional recipes and key ingredients sourced for authenticity."
    },
    {
      question: "Do you offer catering services for events?",
      answer: "Contact us at +1 213-910-2980"
    },
    {
      question: "Can I make a reservation?",
      answer: "You can, Although you can just walk in as well, we welcome walk-ins and strive to serve all our guests promptly."
    }
  ];

  return (
    <div className="">
      <FAQ faqItems={faqItems} />
    </div>
  );
};

export default FAQSection;