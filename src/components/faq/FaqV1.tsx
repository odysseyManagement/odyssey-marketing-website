interface DataType {
  sectionClass?: string;
}

interface FaqItem {
  id: string;
  title: string;
  content: string;
  show?: boolean;
}

const faqData1: FaqItem[] = [
  {
    id: "One",
    title: "How will Odyssey help me grow my subscribers?",
    content:
      "We handle marketing strategies across multiple platforms, including Reddit, TikTok, and Twitter, to bring consistent traffic to your page. Our growth managers use proven promotional methods to maximize exposure so you can focus on creating content instead of chasing followers.",
    show: true,
  },
  {
    id: "Two",
    title: "Do I have to be on social media all the time?",
    content:
      "Not at all. Our team runs your social promotions and engagement campaigns, saving you countless hours. You’ll still have control of your persona, but we’ll handle the heavy lifting when it comes to daily posting and audience interaction.",
  },
  {
    id: "Three",
    title: "Can you help me with content ideas?",
    content:
      "Yes! We provide creative direction tailored to your brand and audience. From themed photoshoots to posting schedules, our content team gives you clear ideas that keep fans engaged without burning you out.",
  },
   {
    id: "7",
    title: "Do I still own my content?",
    content:
      "Yes. You retain full ownership of all your content. Odyssey is here to support and promote you — not to take control. Your brand, your rules.",
  },
  {
    id: "8",
    title: "What if I’m new and don’t have a following yet?",
    content:
      "That’s completely fine. Many of our creators started from scratch. Our growth team specializes in building audiences from the ground up with tailored strategies that match your niche and goals.",
  },
  {
    id: "9",
    title: "How quickly will I see results?",
    content:
      "Results vary depending on your content consistency and niche, but most creators begin noticing measurable growth within the first 30–60 days of working with us.",
  },
];

const faqData2: FaqItem[] = [

  {
    id: "4",
    title: "Is my privacy protected?",
    content:
      "Absolutely. We take your privacy and safety very seriously. Our team ensures your identity and personal information remain secure, and we guide you on how to keep boundaries between your personal and professional life.",
    show: true,
  },
  {
    id: "5",
    title: "How do payments work?",
    content:
      "All earnings from your platform go directly to you. Odyssey takes an agreed-upon percentage, but you keep ownership and access to your accounts at all times. Transparency is at the core of our partnership.",
  },
  {
    id: "6",
    title: "Will I have time for myself outside of work?",
    content:
      "Yes — that’s the point of working with us. By outsourcing management, marketing, and fan messaging, you free up your schedule. You’ll spend less time glued to your phone and more time living your life, while still growing your income.",
  },
    {
    id: "10",
    title: "Can I choose which platforms I want to grow on?",
    content:
      "Yes. Whether you prefer to focus on OnlyFans, TikTok, Twitter, Reddit, or a mix, we’ll tailor a growth strategy around your comfort level and long-term goals.",
  },
  {
    id: "11",
    title: "What kind of support do I get?",
    content:
      "You’ll have direct access to a dedicated growth manager and our creative team. We’re available for strategy calls, brainstorming, and ongoing guidance whenever you need it.",
  },
  {
    id: "12",
    title: "Is there a contract or long-term commitment?",
    content:
      "We offer flexible agreements because we believe in proving our value. Our creators stay because they see results, not because they’re locked into strict contracts.",
  },
];


const Accordion = ({
  items,
  parentId,
}: {
  items: FaqItem[];
  parentId: string;
}) => {
  return (
    <div className="faq-style-one accordion" id={parentId}>
      {items.map(({ id, title, content, show }) => (
        <div className="accordion-item" key={id}>
          <h2 className="accordion-header" id={`heading${id}`}>
            <button
              className={`accordion-button ${!show ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${id}`}
              aria-expanded={show ? "true" : "false"}
              aria-controls={`collapse${id}`}
            >
              {title}
            </button>
          </h2>
          <div
            id={`collapse${id}`}
            className={`accordion-collapse collapse ${show ? "show" : ""}`}
            aria-labelledby={`heading${id}`}
            data-bs-parent={`#${parentId}`}
          >
            <div className="accordion-body">
              <p>{content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const FaqV1 = ({ sectionClass }: DataType) => {
  return (
    <div
      className={`faq-area default-padding ${
        sectionClass ? sectionClass : ""
      }`}
    >
      <div className="container">
        <div className="row gutter-xl">
          <div className="col-lg-6">
            <Accordion items={faqData1} parentId="faqAccordion1" />
          </div>
          <div className="col-lg-6">
            <Accordion items={faqData2} parentId="faqAccordion2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqV1;
