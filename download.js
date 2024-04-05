          // Select all elements with the class 'download-button'

const downloadButtons = document.querySelectorAll('.download-button');


// Add click event listener to each download button
downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the image URL associated with the button
        const imageURL = button.parentNode.querySelector('.featured__img').src;
        // Extract the file name from the image URL
        const fileName = imageURL.substring(imageURL.lastIndexOf('/') + 1);
        // Create a temporary anchor element
        const anchor = document.createElement('a');
        // Set the image URL to be downloaded
        anchor.href = imageURL;
        // Add a download attribute with the dynamically generated file name
        anchor.download = fileName;
        // Trigger a click event on the anchor element
        anchor.click();
    });
} );