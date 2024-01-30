import { facebook, instagram, twitter, homeGif, schoolGif, editGif, consultationGif, champagneGif, coinsGif, Mail, Location, Phone, } from "../assets/icons";
import { Apron2, BedCover1, Chef2, Chef3, Curtain1, Curtain3, Curtain5, Man1, Man4, Nurse2,Nurse3, Nurse4, PillowCase1,PillowCase5, PillowCase7, Women1, Women2, Women4, Women7, Women9, customer1, customer2 } from "../assets/images";
import { HeroImage } from "../assets/images";


export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About Us" },
    { href: "/Designs", label: "Our Designs" },
    { href: "/Contact Us", label: "Contact Us" },
];

export const Designs=[
    {name:"Circular Dress"},
    {imgURL: HeroImage},
]

export const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust slidesToShow for small screens
          dots: false, // Hide dots on small screens
          arrows: false, // Hide navigation arrows on small screens
        },
      },
    ],
  };
/* Start of Carousel Section */
export const slides =[
    Chef2, 
    Nurse2,
    Man1,
    Women1,
    Man4,
    Apron2,
    Nurse4,
    HeroImage,
    BedCover1,
    Curtain3,
    Curtain5,
    PillowCase1,
    PillowCase7,
    Women2,
    Women9,
]

export const imageDescriptions = [
    'Image 1',
    'Image 2',
    'Image 3',
    'Image 4',
    'Image 5',
    'Image 6',
    'Image 7',
    'Image 8',
    'Image 9',
    'Image 10',
    'Image 11',
    'Image 12',
    'Image 13',
    'Image 14',
    // Add more descriptions as needed
  ];
/* End of Carousel Section */

export const imageUrls = [
    Chef2, 
    Nurse2,
    Man1,
    Women1,
    Man4,
  ];

export const products = [
    {
        imgURL: Women2,
        name: "Stylish Circular Dress",
    },
    {
        imgURL: Women7,
        name: "Stylish Circular Dress",
    },
    {
        imgURL: Nurse3,
        name: "Nurse Uniforms",
    },
    {
        imgURL: PillowCase5,
        name: "Pillow Cases",
    },
    {
        imgURL: PillowCase7,
        name: "Pillow Cases",
    },
    {
        imgURL:Curtain1,
        name: "Modern Curtains",
    },
    {
        imgURL:Chef3,
        name: "Chef Hats",
    },
    {
        imgURL:Women4,
        name: "Modern Dress",
    },
];

export const designs = [
    {
        id: 1,
        imgURL: Women2,
        name: "Stylish Circular Dress",
    },
    {
        id: 2,
        imgURL: Women7,
        name: "Stylish Circular Dress",
    },
    {
        id: 3,
        imgURL: Nurse3,
        name: "Nurse Uniforms",
    },
    {
        id: 4,
        imgURL: PillowCase5,
        name: "Pillow Cases",
    },
    {
        id: 5,
        imgURL: PillowCase7,
        name: "Pillow Cases",
    },
    {
        id: 6,
        imgURL:Curtain1,
        name: "Modern Curtains",
    },
    {
        id: 7,
        imgURL:Chef3,
        name: "Chef Hats",
    },
    {
        id: 8,
        imgURL:Women4,
        name: "Modern Dress",
    },
];
export const AllDesigns = [
    {
        id: 1,
        imgURL: Women2,
        name: "Stylish Circular Dress",
        categories: "Women",
    },
    {
        id: 2,
        imgURL: Women7,
        name: "Stylish Circular Dress",
        categories: "Women",
    },
    {
        id: 3,
        imgURL: Nurse3,
        name: "Nurse Uniforms",
        categories: ["Women", "Men"],
    },
    {
        id: 4,
        imgURL: PillowCase5,
        name: "Pillow Cases",
        categories: "Home Decor",
    },
    {
        id: 5,
        imgURL: PillowCase7,
        name: "Pillow Cases",
        categories: "Home Decor",
    },
    {
        id: 6,
        imgURL:Curtain1,
        name: "Modern Curtains",
        categories: "Home Decor",
    },
    {
        id: 7,
        imgURL:Chef3,
        name: "Chef Hats",
        categories: ["Men", "Women"],
    },
    {
        id: 8,
        imgURL:Man1,
        name: "Modern Men Designs",
        categories: "Men",
    },
    {
        id: 9,
        imgURL:Women4,
        name: "Modern Dress",
        categories: "Women",
    },
];

export const services = [
    {
        imgURL: coinsGif,
        label: "Custom Tailoring",
        subtext: "We craft garments tailored to each individuals measurements and style preferences of each client. From suits to dresses, each piece is meticulously created to ensure a perfect fit and a personalized look that reflects your taste."
    },
    {
        imgURL: editGif, //security
        label: "Alterations and Repairs", 
        subtext: "We provide alteration and repair services to modify or fix existing garments. Whether it's adjusting the hem, taking in or letting out, or repairing tears and damages, we ensure that clothing fit flawlessly."
    },
    {
        imgURL: champagneGif,
        label: "Wedding and Formal Attire",
        subtext: "Having Specialized in wedding and formal attire, we create elegant and sophisticated garments for special occasions. This includes bridal gowns, groomsmen suits, bridesmaid dresses, and other formal wear, we ensure our clients look their best on memorable days."
    },
    {
        imgURL: schoolGif,
        label: "Uniform Tailoring",
        subtext: "We also cater to businesses, schools, and organizations by providing custom uniform tailoring services. Uniforms are tailored to specific requirements, incorporating branding elements and ensuring a professional and cohesive appearance for the group"
    },
    {
        imgURL: consultationGif,
        label: "Attachment Opportunities",
        subtext: "Embark on a tailoring journey with us! At the end of your experience, expect to master the art of precision tailoring, garment design, and personalized fittings.Your future in the world of tailoring awaits!"
    },
    {
        imgURL: homeGif,
        label: "Home Decor",
        subtext: "From exquisite tablecloths to tailored loose covers, captivating curtains, ornate altar cloths and offerring buskets, we create home spaces that resonate with your style. At the end, anticipate a home adorned with warmth, beauty, and a touch of your unique personality."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the designs exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The designs not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: customer1,
        customerName: 'Ali Hassan',
        rating: 4.5,
        feedback: "A true partner in style! They have become my go-to for tailored perfection. Their professionalism and commitment to delivering quality garments shine through every stitch. Trustworthy, reliable, and committed to making every client feel confident in their attire."
    },
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Ankara Men Designs", link: "/" },
            { name: "Ankara Women Designs", link: "/" },
            { name: "Loose Covers", link: "/" },
            { name: "Curtains", link: "/" },
            { name: "Ladies Wear", link: "/" },
            { name: "Mens' Wear", link: "/" },
        ],
    },
    {
        title: "How to find us",
        links: [
            { name: "Nyeri Town, Kenya", link: "/" },
            { name: "Gakere Road", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "favourdesigns@customer.com", link: "mailto:favourdesigns@customer.com" },
            { name: "+254 0706-235-388", link: "tel: +254 0706-235-398" },
            { name: "+254 0725-581-272", link: "tel: +254 0725-581-272" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", name:"Facebook" },
    { src: twitter, alt: "twitter logo", name:"Twitter" },
    { src: instagram, alt: "instagram logo", name:"Instagram" },
];

export const ContactLordIcon = [
    { src: Phone, alt: "Walkie Tokie", text:"+254 706 235 388 / +254 725 581 272" },
    { src: Mail, alt: "Mail", text:"favourdesigns@customer.com"},
    { src: Location, alt: "Location", text:"Nyeri Town - Gakere Road"},
];
