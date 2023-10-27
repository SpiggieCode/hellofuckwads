function displayParameterFromURL() {
    // Get the query part of the URL
    var query = window.location.search;
    console.log(query)

    // Remove the leading '?' character
    query = query.slice(1);
    console.log(query)

    // Split the query by '%'
    var parts = query.split('%20');
    console.log(parts)

    // Join the parts to form the parameter
    var parameter = parts.map(part => decodeURIComponent(part)).join(' ');
    console.log(parameter)

    // Get the span element
    var textSpan = document.getElementById('textSpan');

    // Update the content of the span
    if (parameter) {
        textSpan.textContent = parameter;
        document.title = parameter;
    } else {
        textSpan.textContent = 'Hello World.';
    }
}

displayParameterFromURL()