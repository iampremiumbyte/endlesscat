
window.addEventListener('scroll', function () {
    if ((this.window.scrollY * 2.1) >= this.window.innerHeight) {
        // Create a pre element
        const preElement = document.createElement('pre');

        // Add some text content to the pre element
        const text = document.createTextNode(
            `
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
 | |   | |
        `
        );
        preElement.appendChild(text);

        // Append the pre element to the body
        document.body.appendChild(preElement);
    }
});
