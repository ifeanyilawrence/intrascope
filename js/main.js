function openEmailClient(e) {
    e?.preventDefault();

    const name = document.getElementById('sender-name')?.value;
    const email = document.getElementById('sender-email')?.value;
    const emailBody = document.getElementById('email-body')?.value;
    
    window.location.href = `mailto:support@intrascope.com?subject=Inquiry from ${name}&body=${emailBody}`;
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("quote-slides");

  if(slides.length > 0) 
  {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
  
    slideIndex++;
  
    if (slideIndex > slides.length) {slideIndex = 1}
  
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
};

// add map functionality
function initMap() {
    const location = { lat: 6.55398, lng: 3.38311 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location,
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
};

let aboutSlideIndex = 1;

showAboutSlides(aboutSlideIndex);

function plusSlides(n) {
    showAboutSlides(aboutSlideIndex += n);
};

function showAboutSlides(n) {
    let i;
    let slides = document.getElementsByClassName("about__gains");

    if(slides.length > 0)
    {
        if (n > slides.length) {aboutSlideIndex = 1}    
        if (n < 1) {aboutSlideIndex = slides.length}
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        slides[aboutSlideIndex-1].style.display = "flex";
    }
};