<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
<script>let str = 'Thanks to NASAs’ team of sniffers, led by George Aldrich, astronauts can breathe a little bit easier. Aldrich is the “chief sniffer” at the White Sands Test Facility in New Mexico. His’s job is to smell items before they can be flown in the space shuttle. Aldrich explained that smells change in space and that once astronauts are up there, their stuck with whatever smells are onboard with them. In space, astronauts aren’t able to open the window for extra ventilation. He also said that its important not to introduce substances that will change the delicate balance of the climate of the International Space Station and the space shuttle.';

let newstr = str.replace(/(?<!\p{L})'|'(?!\p{L})/gu, `"`);
console.log(newstr);
</script>
</html>
