import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";
import image14 from "../images/image14.webp";
import image15 from "../images/image15.webp";
import image16 from "../images/image16.webp";
import about1 from "../images/about1.svg";
import about2 from "../images/about2.svg";
import about3 from "../images/about3.svg";

export const navData = [
  {
    title: "Buy",
    dropdownItems: [
      "Quincy",
      "Homes for sale",
      "Open Houses",
      "New Houses",
      "Recently sold",
    ],
  },
  {
    title: "Rent",
    dropdownItems: [
      "Quincy",
      "All Rentals",
      "Appartments for Rent",
      "Houses for Rent",
      "Post a rental Listing",
    ],
  },
  {
    title: "Mortgage",
    dropdownItems: [
      "Quincy",
      "Mortgage Overview",
      "Get Pre-Qualified",
      "Mortgage Rates",
      "Refinance rates",
      "Mortgage Calculator",
      "Affordability Calculator",
      "Refinance Calculator",
    ],
  },
  {
    title: "Mortgage",
    dropdownItems: [
      "Quincy",
      "Mortgage Overview",
      "Get Pre-Qualified",
      "Mortgage Rates",
      "Refinance rates",
      "Mortgage Calculator",
      "Affordability Calculator",
      "Refinance Calculator",
    ],
  },
];

const reviews = {
  review1: {
    title: "Trulia User",
    caption: "San Fransisco Resident",
    text: "I just moved to the neigbourhood 2 years ago and i just loved it! friendly neibhors good resouces avalable its a great mix of families seniors and...",
  },
  review2: {
    title: "Brianne",
    caption: "Chicago Resident",
    text: "A good mix of young mesmaraising communities around and adults/good night life as well as families and family friendly activities...",
  },
  review3: {
    title: "Trulia User",
    caption: "Chanddlar Resident",
    text: "we live in the Oakwood community of Sun Lakes. Very good place which have kids paly areas for families and there are many activities...",
  },
  review4: {
    title: "Brianne",
    caption: "San Diego Resident",
    text: "Farmers markets, street fairs and brewery tours are great to exprience in this area.Very near for all travelling transports All commercial arear are very near",
  },
};

export const slidesData = [
  { slideType: "single", singleImage: image1, title: "Atlanta GA" },
  {
    slideType: "dual",
    text1: reviews.review1,
    bottomImage: image2,
    titleBottom: "Austin TX",
  },
  {
    slideType: "dual",
    topImage: image3,
    bottomImage: image4,
    titleTop: "Scottsdate AZ",
    titleBottom: "Boston MA",
  },
  { slideType: "single", singleImage: image5, title: "Oakland CA" },
  {
    slideType: "dual",
    topImage: image6,
    text2: reviews.review2,
    titleTop: "Snady Springgs GA",
  },
  {
    slideType: "dual",
    topImage: image7,
    bottomImage: image8,
    titleTop: "Carlsbad CA",
    titleBottom: "Newton MA",
  },
  { slideType: "single", singleImage: image9, title: "Philadelpia PA" },
  {
    slideType: "dual",
    topImage: image10,
    bottomImage: image11,
    titleTop: "Quincy MA",
    titleBottom: "Anaheim CA",
  },
  {
    slideType: "dual",
    text1: reviews.review3,
    bottomImage: image12,
    titleBottom: "Denver CO",
  },
  { slideType: "single", singleImage: image13, title: "Jurupa Valley CA" },
  {
    slideType: "dual",
    topImage: image14,
    bottomImage: image15,
    titleTop: "Lowell MA",
    titleBottom: "Aurora CO",
  },
  {
    slideType: "dual",
    topImage: image16,
    text2: reviews.review4,
    titleTop: "San Jose CA",
  },
];

const homeDetails = {
  home1: {
    cost: "$359,000",
    facilities: {
      beds: "4bd",
      baths: "2ba",
      size: "1879 Sqft",
    },
    address: "553 Rockwell st SW, Atlanta, GA 30310",
    company: "COLDWELL BANKER REALTY",
  },
  home2: {
    cost: "$89,000",
    facilities: {
      beds: "2bd",
      baths: "1ba",
      size: "1879 Sqft",
    },
    address: "553 Rockwell st SW, Atlanta, GA 30310",
    company: "COLDWELL BANKER REALTY",
  },
  home3: {
    cost: "$239,000",
    facilities: {
      beds: "5bd",
      baths: "8ba",
      size: "1879 Sqft",
    },
    address: "21 saint st SW, goergia cross valley, GA 298178",
    company: "COLDWELL BANKER REALTY",
  },
  home4: {
    cost: "$359,000",
    facilities: {
      beds: "4bd",
      baths: "2ba",
      size: "1879 Sqft",
    },
    address: "553 Rockwell st SW, Atlanta, GA 30310",
    company: "COLDWELL BANKER REALTY",
  },
  home5: {
    cost: "$89,000",
    facilities: {
      beds: "2bd",
      baths: "1ba",
      size: "1879 Sqft",
    },
    address: "553 Rockwell st SW, Atlanta, GA 30310",
    company: "COLDWELL BANKER REALTY",
  },
  home6: {
    cost: "$239,000",
    facilities: {
      beds: "5bd",
      baths: "8ba",
      size: "1879 Sqft",
    },
    address: "21 saint st SW, goergia cross valley, GA 298178",
    company: "COLDWELL BANKER REALTY",
  },
};

export const smallSlidesData = [
  {
    slideType: "smallCarousel",
    topImage: image1,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
  {
    slideType: "smallCarousel",
    topImage: image2,
    title: "Comming Soon 09/12",
    homeDetails: homeDetails.home2,
  },
  {
    slideType: "smallCarousel",
    topImage: image3,
    title: "Comming Soon 01/22",
    homeDetails: homeDetails.home3,
  },
  {
    slideType: "smallCarousel",
    topImage: image4,
    title: "Comming Soon 06/01",
    homeDetails: homeDetails.home4,
  },
  {
    slideType: "smallCarousel",
    topImage: image5,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home5,
  },
  {
    slideType: "smallCarousel",
    topImage: image6,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home6,
  },
  {
    slideType: "smallCarousel",
    topImage: image7,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
  {
    slideType: "smallCarousel",
    topImage: image8,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
  {
    slideType: "smallCarousel",
    topImage: image9,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
  {
    slideType: "smallCarousel",
    topImage: image10,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
  {
    slideType: "smallCarousel",
    topImage: image11,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
  {
    slideType: "smallCarousel",
    topImage: image12,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
  {
    slideType: "smallCarousel",
    topImage: image7,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
  {
    slideType: "smallCarousel",
    topImage: image8,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
  {
    slideType: "smallCarousel",
    topImage: image9,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
  {
    slideType: "smallCarousel",
    topImage: image10,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
  {
    slideType: "smallCarousel",
    topImage: image11,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
  {
    slideType: "smallCarousel",
    topImage: image12,
    title: "Comming Soon 10/18",
    homeDetails: homeDetails.home1,
  },
];

export const aboutdata = [
  {
      image: about1,
      header: "Buy a home",
      text: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
      btn: "Find a Home",
  },
  {
    image: about2,
    header: "Rent a home",
    text: "With 35+ filters and custom keyword search, Trulia can help you easily find a home or apartment for rent that you'll love.",
    btn: "Find a rental",
},
{
  image: about3,
  header: "See Neighbourhoods",
  text: "With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.",
  btn: "Learn More",
},
];
