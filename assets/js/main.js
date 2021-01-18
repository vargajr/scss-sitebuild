// https://css-tricks.com/styling-based-on-scroll-position/
'use strict';

const debounce = (fn) => {
    let frame;
    return (...params) => {
        if (frame) { cancelAnimationFrame(frame);}
        frame = requestAnimationFrame(() => {fn(...params);});
    }
};
  
// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const header = document.querySelector('.stickyHeader');
const storeScroll = () => {
    header.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  
// Update scroll position for first time
storeScroll();

const scrollToDownload = function() {
    document.querySelector('#download').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

const scrollToFeature = function() {
    document.querySelector('#feature').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

const scrollToContact = function() {
    document.querySelector('#contact').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

const download = document.querySelector('#toDownload');
const feature = document.querySelector('#toFeatures');
const contact = document.querySelector('#toContact');
download.addEventListener("click", scrollToDownload);
feature.addEventListener("click", scrollToFeature);
contact.addEventListener("click", scrollToContact);

//modal privacy
const privacyModalOnButton = document.querySelector('[data-target="#privacyModal"]')
const privacyModalCloseElements = document.querySelectorAll('.closePrivacyModal');
const privacyAppearingItems = document.querySelectorAll('.invisiblePrivaxy');

const privacyModalOn = function () {
    for (let i = 0; i < privacyAppearingItems.length; i += 1){
        privacyAppearingItems[i].classList.remove("invisiblePrivaxy");
        privacyAppearingItems[i].classList.add("visiblePrivaxy");
    }
    privacyAppearingItems[1].focus();
}

const privacyAddInvisibility = function() {
    for (let i = 0; i < privacyAppearingItems.length; i += 1){
        privacyAppearingItems[i].classList.remove("visiblePrivaxy");
        privacyAppearingItems[i].classList.add("invisiblePrivaxy");
    } 
}

const privacyModalOff = function () {
    setTimeout(privacyAddInvisibility, 300);
}

privacyModalOnButton.addEventListener('click', privacyModalOn);

for (let i = 0; i < privacyModalCloseElements.length; i += 1) {
    privacyModalCloseElements[i].addEventListener('click', privacyModalOff);
}

//modal terms
const termsModalOnButton = document.querySelector('[data-target="#termsModal"]')
const termsModalCloseElements = document.querySelectorAll('.closetermsModal');
const termsAppearingItems = document.querySelectorAll('.invisibleTerms');

const termsModalOn = function () {
    for (let i = 0; i < termsAppearingItems.length; i += 1){
        termsAppearingItems[i].classList.remove("invisibleTerms");
        termsAppearingItems[i].classList.add("visibleTerms");
    }
    termsAppearingItems[1].focus();
}

const termsAddInvisibility = function() {
    for (let i = 0; i < termsAppearingItems.length; i += 1){
        termsAppearingItems[i].classList.remove("visibleTerms");
        termsAppearingItems[i].classList.add("invisibleTerms");
    } 
}

const termsModalOff = function () {
    setTimeout(termsAddInvisibility, 300);
}

termsModalOnButton.addEventListener('click', termsModalOn);

for (let i = 0; i < termsModalCloseElements.length; i += 1) {
    termsModalCloseElements[i].addEventListener('click', termsModalOff);
}

//modal faq
const faqModalOnButton = document.querySelector('[data-target="#faqModal"]')
const faqModalCloseElements = document.querySelectorAll('.closefaqModal');
const faqAppearingItems = document.querySelectorAll('.invisibleFaq');

const faqModalOn = function () {
    for (let i = 0; i < faqAppearingItems.length; i += 1){
        faqAppearingItems[i].classList.remove("invisibleFaq");
        faqAppearingItems[i].classList.add("visibleFaq");
    }
    faqAppearingItems[1].focus();
}

const faqAddInvisibility = function() {
    for (let i = 0; i < faqAppearingItems.length; i += 1){
        faqAppearingItems[i].classList.remove("visibleFaq");
        faqAppearingItems[i].classList.add("invisibleFaq");
    } 
}

const faqModalOff = function () {
    setTimeout(faqAddInvisibility, 300);
}

faqModalOnButton.addEventListener('click', faqModalOn);

for (let i = 0; i < faqModalCloseElements.length; i += 1) {
    faqModalCloseElements[i].addEventListener('click', faqModalOff);
}
