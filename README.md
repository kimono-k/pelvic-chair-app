# Pelvic Chair
De Pelvic Chair is een bestaande stoel die ervoor zorgt om de bekkeninstabiliteit van zwangere vrouwen tijdelijk te doen verlichten. Deze applicatie werkt met een Arduino die dient als sensor. We gebruiken 4 sensoren voor deze stoel en om deze te prototypen. Wij werken voor Stichting Inkluso om dit project te kunnen realiseren en te kunnen implementeren in de praktijk.

# Sneller ontwikkelen met Nodemon
- Als je sneller wilt ontwikkelen dan is het handig om nodemon te gebruiken.
- Nodemon houdt je saves van je bestanden bij en dan wordt dit updatet waardoor je niet constant de server opnieuw hoeft op te starten met node.
- Nodemon installeren: npm - i
- Nodmeon gebruiken: npm run devStart

# Wanneer je dit project download!
- De node_modules staan in de .gitignore, dit betekent dat deze niet zijn verwerkt in deze repository waardoor je de dependencies niet hebt.
- Om alles te laten werken moet je in VSCode Ctrl + Shift + ` om de terminal te openen.
- In de terminal voer je npm i in om de dependencies te installeren.
- Nu werkt het project en kun je ermee aan de slag!

# Error: connect ECONNREFUSED 127.0.0.1:1883

- Maak je geen zorgen over deze error dit komt omdat je de sensoren van Henri niet bij de hand hebt.
- Je kunt dus gewoon rustig doorgaan met het ontwikkelen van de applicatie.

Error: connect ECONNREFUSED 127.0.0.1:1883
at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1148:16) {
errno: -4078,
code: 'ECONNREFUSED',
syscall: 'connect',
address: '127.0.0.1',
port: 1883
}

mqtt client disconnected

# Waarschijnlijk krijg je een error als je nodemon wilt runnen. Dit is niet erg, want dit betekent dat je geen database connectie heb.

Stap 1: Zorg dat je npm i doet. Als dat niet werkt doe dan even npm i dotenv

Stap 2: Maak een .env file aan en zet deze code erin:

<i> code is te vinden op Discord -> Pelvichub -> Notities en Bronnen </i>


Stap 3: Zet in je gitignore "env" zodat dit niet meegenomen word naar Github 



