import {
  cosmetic,
  dental_mplants,
  dental_venuer,
  denture_service,
  emergency_dentistry,
  filling_service,
  prevention,
  root_canal_clinic,
  root_canal_service,
  // service_detail,
  teeth_whitening_service
} from "@/assets/images";
const projectConstants = {
  clinicService: [
    {
      image: root_canal_clinic,
      alt: "service1",
      title: "Root Canal",
      desc: "Root canal treatment to remove infection, cleaning and restore health, keeping your smile strong and pain-free at Smile Experts Dental clinic.",
      navLink: "l"
    },
    {
      image: cosmetic,
      alt: "service2",
      title: "Dentures",
      desc: "At Smile Experts Dental, our custom dentures replace missing teeth, restoring function and comfort.",
      navLink: "l"
    },
    {
      image: dental_mplants,
      alt: "service87",
      title: "Dental veneer",
      desc: "At Smile Experts Dental, our dental veneers cover imperfections like chips, gaps, or discoloration, giving a flawless, natural-looking smile.",
      navLink: "l"
    },
    {
      image: root_canal_clinic,
      alt: "service109",
      title: "Teeth whitening",
      desc: "Teeth whitening is a cosmetic dental procedure that removes stains and discoloration to brighten teeth, often enhancing the overall smile.   ",
      navLink: "l"
    },
    {
      image: emergency_dentistry,
      alt: "service13",
      title: "Fillings",
      desc: "Restore Your Smile and Stop tooth Decay at Smile Experts Dental, our expert fillings repair cavities and prevent future damage, giving you a strong and healthy smile",
      navLink: "l"
    },
    {
      image: prevention,
      alt: "Prevention",
      title: "Prevention",
      desc: "Preventive dentistry is dental care that helps maintain good oral health. A combination of regular dental check-ups, cleanings, and at-home hygiene practices can prevent most dental problems.",
      navLink: "l"
    }
  ],
  clinicServiceDetails: [
    {
      header: "Root Canal",
      desc: "Tooth extraction is a dental procedure that involves the removal of a tooth from its socket in the bone. This procedure is often necessary for various reasons, including severe tooth decay, infection, gum disease, or overcrowding.The extraction process typically involves numbing the area with local anesthesia, followed by the dentist gently loosening the tooth using specialized instruments and finally removing it. ",
      headerImage: root_canal_clinic,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      asset: root_canal_service
    },
    {
      header: "Dentures",
      desc: "Complete dentures are removable prosthetics that replace all natural teeth in an arch. They are custom-fitted to the gums and jaw, restoring functionality and aesthetics for individuals who have lost all their teeth.Partial dentures replace specific missing teeth while preserving existing ones. They use metal clasps or precision attachments for stability, helping maintain a natural appearance and improving chewing and speaking abilities.",
      headerImage: root_canal_clinic,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      asset: denture_service
    },
    {
      header: "Dental veneer ",
      desc: "It is a custom-made cover placed on the front of a tooth to enhance appearance by adjusting shape, size, and color. The procedure begins with cleaning and prepping the tooth, sometimes involving slight reshaping. A temporary veneer is then fitted to ensure comfort and proper alignment, during which the patient avoids hard foods. Once finalized, the permanent veneer is fabricated and securely bonded to the tooth, providing a natural look and seamless fit.",
      headerImage: root_canal_clinic,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      asset: dental_venuer
    },
    {
      header: "Teeth whitening",
      desc: "Teeth whitening is a cosmetic dental procedure that removes stains and discoloration to brighten teeth, often enhancing the overall smile. It involves applying a bleaching agent, usually containing hydrogen peroxide or carbamide peroxide, to the teeth. This process can be done in-office for immediate results or through take-home kits prescribed by a dentist. Whitening is effective for treating stains from foods, drinks, smoking, and aging, though it may be less effective on deeper, intrinsic stains. Regular maintenance helps preserve results, creating a lasting, whiter smile.",
      headerImage: root_canal_clinic,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      asset: teeth_whitening_service
    },
    {
      header: "Fillings",
      desc: "Filling is used to restore a tooth damaged by decay, preventing further deterioration and protecting the tooth’s inner structure. The process involves removing the decayed material, cleaning the area, and filling it with a durable composite resin or other material that blends with the tooth. This strengthens the tooth and helps maintain a natural look and function.",
      headerImage: root_canal_clinic,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      asset: filling_service
    }
  ],
  faqs: [
    {
      _id: "faq1",
      question: "Why do you need dental Exam?",
      answer:
        "Regular dental exams are essential for maintaining optimal oral health. During these checkups, your dentist thoroughly examines your teeth, gums, and overall oral health, including screenings for oral cancer and reviewing any past treatments. Regular visits help detect issues early and provide timely advice on treatments to prevent further complications. Prioritizing routine dental exams ensures long-term dental health, cleaner teeth, and stronger gums"
    },
    {
      _id: "faq2",
      question: "What to expect during Dental Examination?",
      answer:
        "During a dental examination, you can expect a comprehensive assessment tailored to your oral health history. This typically includes bitewing X-rays to identify tooth decay, specific X-rays for previous dental work, and possibly intraoral or facial photos. Your visit will also include a thorough dental cleaning to remove plaque and tartar. After the examination, your dentist will provide recommendations for any necessary treatments or follow-up procedures to maintain optimal oral health. Regular dental exams help ensure a healthier smile and prevent future dental issues."
    },
    {
      _id: "faq3",
      question: "What does a thorough cleaning of the mouth mean?",
      answer:
        "A thorough dental cleaning is a routine procedure that involves the removal of plaque and tartar without the need for medication. During the cleaning, your dentist uses scalers or sonic handpieces to effectively eliminate built-up calculus. The process concludes with flossing and polishing your teeth, ensuring a clean and healthy smile. Regular professional cleanings are essential for preventing gum disease, cavities, and maintaining optimal oral hygiene."
    },
    {
      _id: "faq4",
      question: "What is the difference between regular and deep cleaning?",
      answer:
        "The primary difference between regular and deep dental cleaning lies in the extent of the procedure. Regular cleaning focuses on removing plaque and tartar from the tooth surface, while deep cleaning addresses periodontal issues like gum disease, deep pockets, and bone loss. After a deep cleaning, a maintenance schedule every three months is typically recommended to ensure ongoing oral health. Regular and deep cleanings are essential for preventing cavities, gum disease, and maintaining optimal dental hygiene."
    },
    {
      _id: "faq5",
      question: "What do you mean by Pediatric Dentistry?",
      answer:
        "Pediatric dentistry specializes in the oral health of children, from infancy through adolescence. This branch of dentistry is crucial for providing comprehensive oral care tailored to children's unique needs. It encompasses a range of services, including routine checkups, oral health exams for infants, cavity risk assessments, fluoride treatments, and sealants to prevent cavities."
    },
    {
      _id: "faq4",
      question: "Why is pediatric dentistry so important?",
      answer:
        "Pediatric dentistry is crucial for ensuring the oral health of children from infancy through adolescence. It provides comprehensive oral care, including routine checkups, oral health exams, and cavity risk assessments, all vital for maintaining healthy oral hygiene. Preventive measures such as fluoride treatments and dental sealants help protect against cavities, while pediatric dentists offer nutritional guidance and address common issues like thumb sucking and pacifier use. Additionally, early orthodontic evaluations assist in teeth straightening and bite correction. Pediatric dentistry also includes immediate treatment for dental emergencies, such as broken or damaged teeth, ensuring children receive the care they need for optimal dental development."
    }
  ]
};
export default projectConstants;
