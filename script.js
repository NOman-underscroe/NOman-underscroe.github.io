// Script to handle the file download
document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement('a');
    link.href = '/mnt/data/mickhand.ttf';  // Update with the correct path
    link.download = 'mickhand.ttf';
    link.click();
});

