const languagesContainer = document.querySelector('.languages');
const languageIcons = languagesContainer.querySelectorAll('.language-icon');
const popupContainer = document.getElementById('popup');
const closeButton = document.querySelector('.close-button'); // Assuming you have a close button inside the popup

// Array to store language data (replace with your actual data)
const languageData = [
  {
    name: 'html',
    title: 'HTML Experience',
    description: 'I\'m currently fairly fluent with HTML, and have created several projects with it, including this.',
  },
  {
    name: 'css',
    title: 'CSS Experience',
    description: 'I\'m still learning CSS, but I\'ve gotten pretty good so far. For this site, for example, I started with a template and rewrote most of it to fit what I wanted.',
  },
];

function showPopup(icon) {
  const languageName = icon.id;
  const languageInfo = languageData.find(lang => lang.name === languageName);
  popupContainer.innerHTML = `<h2>${languageInfo.title}</h2>
  <p>${languageInfo.description}</p>`;
  popupContainer.classList.remove('hidden');
  console.log(popupContainer); 
}

languageIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    showPopup(icon);
  });
});

if (closeButton) {
    closeButton.addEventListener('click', () => {
      popupContainer.classList.add('hidden');
    });
  } 
