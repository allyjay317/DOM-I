const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let localContent;

///    ---   NAV   ---   ///
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

localContent = siteContent["nav"];
let nav = document.querySelector("nav");
let nav_a = nav.querySelectorAll("a");
for(let i = 0;i<nav_a.length;i++){
  nav_a[i].textContent = localContent[`nav-item-${i+1}`];
  nav_a[i].style.color = "green";
}

let newA1 = document.createElement("a");
newA1.setAttribute('scr', "#");
newA1.textContent = "Click Me!";
newA1.style.color = "green";

let newA2 = document.createElement("a");
newA2.setAttribute('scr', "#");
newA2.textContent = "No, Click Me!";
newA2.style.color = "green";

nav.prepend(newA1);
nav.append(newA2);


///   ---   CTA   ---   ///
let cta = document.querySelector(".cta");
localContent = siteContent["cta"];
cta.querySelector("h1").textContent = localContent["h1"];
cta.querySelector("button").textContent = localContent["button"];
document.querySelector("#cta-img").setAttribute("src", localContent["img-src"]);


///   ---   MAIN-CONTENT    ---   ///
let main_content = document.querySelector(".main-content");
localContent = siteContent["main-content"];
main_content.querySelector("#middle-img").setAttribute('src', localContent["middle-img-src"])
let main_content_text = main_content.querySelectorAll(".text-content");

///    ---   FEATURES    ---   ///
main_content_text[0].querySelector("h4").textContent = localContent["features-h4"];
main_content_text[0].querySelector("p").textContent = localContent["features-content"];

///   ---   ABOUT   ---   ///
main_content_text[1].querySelector("h4").textContent = localContent["about-h4"];
main_content_text[1].querySelector("p").textContent = localContent["about-content"];

///   ---   SERVICES    ---   ///
main_content_text[2].querySelector("h4").textContent = localContent["services-h4"];
main_content_text[2].querySelector("p").textContent = localContent["services-content"];

///   ---   PRODUCT   ---   ///
main_content_text[3].querySelector("h4").textContent = localContent["product-h4"];
main_content_text[3].querySelector("p").textContent = localContent["product-content"];

///   ---   VISION    ---   ///
main_content_text[4].querySelector("h4").textContent = localContent["vision-h4"];
main_content_text[4].querySelector("p").textContent = localContent["vision-content"];

///   ---   CONTACT   ---   ///
let contact = document.querySelector(".contact");
localContent = siteContent["contact"];
contact.querySelector("h4").textContent = localContent["contact-h4"];

let contact_p = contact.querySelectorAll("p");
contact_p[0].textContent = localContent["address"];
contact_p[1].textContent = localContent["phone"];
contact_p[2].textContent = localContent["email"];

///   ---   FOOTER    ---   ///
document.querySelector("footer").querySelector("p").textContent = siteContent["footer"]["copyright"];


///   ---   STRETCH   ---   ///

let increment = 0;
let messages = [
  "no, this button is just supposed to be for show, don't go clicking it!",
  "seriously, stop pushing it",
  "if you push this button one more time...",
  "last chance!",
  "okay, bye"
]

cta.querySelector("button").addEventListener("click", event =>{
  let cta_h1 = document.querySelector(".cta").querySelector("h1");
  cta_h1.textContent = messages[increment];
  increment++;
  setTimeout(function(){
    if(increment <5){
      cta_h1.textContent = siteContent["cta"]["h1"];
    }
    else {
      document.querySelector("body").textContent = "";
    }
  }, 3000);
});