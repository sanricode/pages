// user agent
// -------------------------------------
function UserAgent() {
  let windowsagent = window.navigator.userAgent;
  if (
    windowsagent.indexOf("edge") != -1 ||
    windowsagent.indexOf("edge") != -1
  ) {
    $("body").addClass("Edge");
  } else if (
    windowsagent.indexOf("Trident") != -1 ||
    windowsagent.indexOf("MSIE") != -1
  ) {
    $("body").addClass("IE");
  } else {
    return false;
  }
}
UserAgent();


// loading
// -------------------------------------
const loading = function() {
  document.getElementById('loading').classList.add('isInactive');
  document.getElementById('index').classList.remove('isInactive');
}
setTimeout(loading, 3000);


// smooth scroll
// -------------------------------------
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener("click", (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute("href");
    let targetElement = document.getElementById(href.replace("#", ""));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 60;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
}


// modal
// -------------------------------------
const modal = document.getElementById('modal');
const images = document.querySelectorAll('.gallery img');
const modalImage = document.querySelector('.modal_image');
const modalBase = document.getElementById('modal_base');

const modalPanels = 1; //モーダル背景のパネル数
const modalPanel = 100/modalPanels;

for(i = 0; i < modalPanels; i++) {
  modalBase.insertAdjacentHTML('afterbegin','<div class="modal_layer" style="height:' + modalPanel + '%"></div>');
}

images.forEach(function(image) {
  image.addEventListener('click', function() {
    modal.classList.add('isActive');
    modalImage.classList.add('isActive');
    var imageSrc = image.getAttribute('src');
    modalImage.src = imageSrc;
  });
});

modal.addEventListener('click', function() {
  if (this.classList.contains('isActive')) {
    this.classList.remove('isActive');
    modalImage.classList.remove('isActive');
  }
});



// profile
// -------------------------------------
const profile = document.getElementById('profile');
const profileLink = document.getElementById('profile_link');
const profileClose = document.getElementById('profile_close');
  
profileLink.addEventListener('click', function() {
  profile.classList.add('isActive');
});

profileClose.addEventListener('click', function() {
  profile.classList.remove('isActive');
});
