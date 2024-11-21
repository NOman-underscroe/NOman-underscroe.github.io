document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "./mickhand.ttf"; // Ensure "mickhand.ttf" is in the same directory as your HTML
    link.download = "mickhand.ttf";
    document.body.appendChild(link); // Add to DOM to trigger the download
    link.click();
    document.body.removeChild(link); // Clean up
});
