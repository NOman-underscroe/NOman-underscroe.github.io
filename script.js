document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "mickhand.ttf"; // Correct relative path
    link.download = "mickhand.ttf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
