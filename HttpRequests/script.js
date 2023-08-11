document.addEventListener("DOMContentLoaded", () => {
    const responseContainer = document.getElementById("responseContainer");

    function displayResponse(responseText) {
        responseContainer.innerHTML = responseText;
    }

    document.getElementById("validHtmlBtn").addEventListener("click", () => {
        console.log("Button clicked"); // Check if the button click event is firing
        fetch("/validHtml")
            .then(response => response.text())
            .then(data => displayResponse(data))
            .catch(error => console.error("Error:", error));
    });

    document.getElementById("invalidClientHtmlBtn").addEventListener("click", () => {
        fetch("/invalidClientHtml")
            .then(response => response.text())
            .then(data => displayResponse(data))
            .catch(error => console.error("Error:", error));
    });
    document.getElementById("invalidServerHtmlBtn").addEventListener("click", () => {
        fetch("/invalidServerHtml")
            .then(response => response.text())
            .then(data => displayResponse(data))
            .catch(error => console.error("Error:", error));
    });

    document.getElementById("validJsonBtn").addEventListener("click", () => {
        fetch("/validJson")
            .then(response => response.json())
            .then(data => displayResponse(JSON.stringify(data, null, 2)))
            .catch(error => console.error("Error:", error));
    });

    document.getElementById("invalidJsonBtn").addEventListener("click", () => {
        fetch("/invalidJson")
            .then(response => response.text())
            .then(data => displayResponse(data))
            .catch(error => console.error("Error:", error));
    });
    document.getElementById("MySQL-insert").addEventListener("click", () => {
        fetch("/insertData")
            .then(response => response.text())
            .then(data => displayResponse(data))
            .catch(error => console.error("Error:", error));
    });
    document.getElementById("MySQL-update").addEventListener("click", () => {
        fetch("/upadteData")
            .then(response => response.text())
            .then(data => displayResponse(data))
            .catch(error => console.error("Error:", error));
    }); 
    document.getElementById("MySQL-get").addEventListener("click", () => {
        fetch("/getData")
            .then(response => response.text())
            .then(data => displayResponse(data))
            .catch(error => console.error("Error:", error));
    });
    document.getElementById("MySQL-delete").addEventListener("click", () => {
        fetch("/deleteData")
            .then(response => response.text())
            .then(data => displayResponse(data))
            .catch(error => console.error("Error:", error));
    }
    );

});
