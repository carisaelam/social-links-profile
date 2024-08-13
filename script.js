const linkedInLink = 'https://www.linkedin.com/in/carisa-elam-097368239';
const gitHubLink = 'https://github.com/carisaelam';
const twitterLink = 'https://x.com/carisa_may';
const devToLink = 'https://dev.to/carisaelam';

const linkedInButton = document.getElementById('linkedin');
const gitHubButton = document.getElementById('github');
const devToButton = document.getElementById('devto');
const twitterButton = document.getElementById('twitter');

linkedInButton.addEventListener('click', (event) => display('linkedIn', event));
gitHubButton.addEventListener('click', (event) => display('gitHub', event));
devToButton.addEventListener('click', (event) => display('devTo', event));
twitterButton.addEventListener('click', (event) => display('twitter', event));

function display(service, event) {
  console.log('running display function');
  console.log(`service = ${service}`);
  const serviceLink = `${service}Link`;
  console.log(`serviceLink = ${serviceLink}`);

  let url;

  if (serviceLink === 'linkedInLink') {
    url = linkedInLink;
  } else if (serviceLink === 'gitHubLink') {
    url = gitHubLink;
  } else if (serviceLink === 'devToLink') {
    url = devToLink;
  } else if (serviceLink === 'twitterLink') {
    url = twitterLink;
  } else {
    url = null;
  }

  if (url) {
    // Copy the text to the clipboard
    navigator.clipboard.writeText(url).then(
      function () {
        // Use the event to position the toast
        showToast(event.pageX, event.pageY);
      },
      function (err) {
        console.error('Could not copy text: ', err);
      }
    );
  }
}

function showToast(x, y) {
  // Remove any existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create a new toast element
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = 'Copied!';

  // Position the toast at the click location
  toast.style.left = `${x}px`;
  toast.style.top = `${y}px`;

  // Append the toast to the body
  document.body.appendChild(toast);

  // Show the toast with animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Fade out and remove the toast after a delay
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 500); // Delay to match the transition duration
  }, 1000); // Time before the toast starts fading out
}
