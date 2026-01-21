// Form handling script
const form = document.querySelector('form.form-container');
const iframe = document.querySelector('iframe[name="hidden_iframe"]');
const message = document.getElementById('form-message');

let justSubmitted = false; // track submission

// Loading message on submit
form.addEventListener('submit', () => {
message.textContent = "Submitting...";
justSubmitted = true; // mark that a submission happened
});

// Success message when iframe loads
iframe.onload = () => {
if (justSubmitted) {  // only show message if a new submission happened
    message.textContent = "You're on the waitlist 🎉";
    form.reset();
    justSubmitted = false; // reset
}
};

// Dynamic source tracking
const sourceInput = form.querySelector('input[name="source"]');
const params = new URLSearchParams(window.location.search);

// URL param > referrer > direct
sourceInput.value = params.get('source') || document.referrer || 'direct';