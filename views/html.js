module.exports =function(title,content, message = ""){

    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel= "stylesheet" href = "/style.css">
    <title>${ title ? title :"Node Auth Page"}</title>
</head>
<body>
<header>

</header>
<main>
    ${message}
    ${content ? content : ""}

</main>
<footer>

</footer>
<script>

    document.cookie ="csrf=aabbccdd1234567890ytytytytytytytytytytytytytyttyt";
    console.log(document.cookie);

</script>
</body>
</html>
`;
}
    