<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Directory Definitions</title>
    <script>
        // JavaScript equivalent of defining constants
        const ROOT_DIR = window.location.origin + '/podzlecdruk';
        const MAIN_DIR = ROOT_DIR + '/';
        const PARTS_DIR = MAIN_DIR + 'parts/';
        const CSV_DIR = MAIN_DIR + 'CSV/';

        console.log("ROOT_DIR: " + ROOT_DIR);
        console.log("MAIN_DIR: " + MAIN_DIR);
        console.log("PARTS_DIR: " + PARTS_DIR);
        console.log("CSV_DIR: " + CSV_DIR);

        // Example usage: Fetching a CSV file from the CSV directory
        fetch(CSV_DIR + 'example.csv')
            .then(response => response.text())
            .then(data => {
                console.log("CSV Data: ", data);
                // Process the CSV data as needed
            })
            .catch(error => {
                console.error('Error fetching CSV:', error);
            });
    </script>
</head>
<body>
<h1>Directory Paths in JavaScript</h1>
<p>Check the console for the directory paths and CSV fetch example.</p>
</body>
</html>

