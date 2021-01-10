

const search = "search string";
const replacement = "replacement string";

document.body.innerHTML = document.body.innerHTML.split('Napoleon').join('Stalin').fontcolor('red');
document.body.innerHTML = document.body.innerHTML.split('Old Major').join('Vladimir Lenin');
document.body.innerHTML = document.body.innerHTML.split('Major').join('Lenin');
document.body.innerHTML = document.body.innerHTML.split('human race').join('capitalist social relations');
document.body.innerHTML = document.body.innerHTML.split('pigs').join('Vanguard');
document.body.innerHTML = document.body.innerHTML.split('Mr. Jones').join('the Czar');
document.body.innerHTML = document.body.innerHTML.split('Jones').join('the Czar');
document.body.innerHTML = document.body.innerHTML.split('Snowball').join('Trotsky');
document.body.innerHTML = document.body.innerHTML.split('Boxer').join('the Working Class');
document.body.innerHTML = document.body.innerHTML.split('pigdeons').join('the Communist International');
document.body.innerHTML = document.body.innerHTML.split('hens').join('peasants');
document.body.innerHTML = document.body.innerHTML.split('sheep').join('masses');
document.body.innerHTML = document.body.innerHTML.split('rabbits').join('Gypsies');
document.body.innerHTML = document.body.innerHTML.split('rats').join('Jews');
document.body.innerHTML = document.body.innerHTML.split('animals').join('proletariat');
document.body.innerHTML = document.body.innerHTML.split(' man ').join('capitalist');
document.body.innerHTML = document.body.innerHTML.split('pig').join('vanguardist');
document.body.innerHTML = document.body.innerHTML.split('dogs').join('soldiers');
document.body.innerHTML = document.body.innerHTML.split('animal').join('worker');
document.body.innerHTML = document.body.innerHTML.split('Beasts').join('Workers');
document.body.innerHTML = document.body.innerHTML.split('Rebellion').join('Revolution');
document.body.innerHTML = document.body.innerHTML.split('Manor Farm').join('Mother Russia');
document.body.innerHTML = document.body.innerHTML.split('Clover').join('the True Believer');
document.body.innerHTML = document.body.innerHTML.split('Squealer').join('Pravda');
document.body.innerHTML = document.body.innerHTML.split('Moses').join('the Orthodox Church');
document.body.innerHTML = document.body.innerHTML.split('Sugarcandy Mountain').join('Heaven');
document.body.innerHTML = document.body.innerHTML.split('ANIMAL FARM').join('the USSR');
document.body.innerHTML = document.body.innerHTML.split('Animal Farm').join('the USSR');
document.body.innerHTML = document.body.innerHTML.split('MANOR FARM').join('RUSSIA');
document.body.innerHTML = document.body.innerHTML.split('Benjamin').join('the Mensheviks');
document.body.innerHTML = document.body.innerHTML.split('animals').join('proletariat');
document.body.innerHTML = document.body.innerHTML.split('Muriel').join('the Intelligentsia');
document.body.innerHTML = document.body.innerHTML.split(' hen ').join(' kulak ');
document.body.innerHTML = document.body.innerHTML.split('hens').join('kulaks');
document.body.innerHTML = document.body.innerHTML.split('puppies').join('KGB');
document.body.innerHTML = document.body.innerHTML.split('ANIMALS').join('WORKERS');
document.body.innerHTML = document.body.innerHTML.split('Animalism').join('Marxism-Leninism');
document.body.innerHTML = document.body.innerHTML.split('Mollie').join('the Petite-Bourgeoisie');
document.body.innerHTML = document.body.innerHTML.split('Mr. Frederick').join('Adolf Hitler');
document.body.innerHTML = document.body.innerHTML.split('Frederick').join('Hitler');
document.body.innerHTML = document.body.innerHTML.split('England').join('Russia');
document.body.innerHTML = document.body.innerHTML.split('horses').join('laborers');
document.body.innerHTML = document.body.innerHTML.split('horse').join('laborer');
document.body.innerHTML = document.body.innerHTML.split('Battle of the Cowshed').join('Russian Civil War');

document.body.innerHTML = document.body.innerHTML.split('Jessie').join('Secret Police');
document.body.innerHTML = document.body.innerHTML.split('Man').join('the Capitalist ');
document.body.innerHTML = document.body.innerHTML.split(' man ').join('  capitalist  ');
document.body.innerHTML = document.body.innerHTML.split('Mr. Pilkington').join('Winston Churchille');
document.body.innerHTML = document.body.innerHTML.split('Pilkington').join('Churchille');
document.body.innerHTML = document.body.innerHTML.split('Animalism').join('Marxism-Leninism').fontcolor('red');
document.body.innerHTML = document.body.innerHTML.split('Mollie').join('Petite-Bourgeoisie');
document.body.innerHTML = document.body.innerHTML.split('Windmill').join('Industrialized Economy');
document.body.innerHTML = document.body.innerHTML.split('windmill').join('Industrialized Economy');
document.body.innerHTML = document.body.innerHTML.split('Whymper').join('foreign Capitalist interests');

const words = ['Stalin', 'Trotsky', 'worker', 'KGB', 'Churchille', 'Hitler', 'Petite-Bourgeoisie', 'Industrialized', 'Economy', 'foreign Capitalist Interests', 'Worker', 'Marxism-Leninism', 'Vanguard', 'Czar', 'Working', 'Class', 'Russia', 'USSR', 'Lenin', "Vladimir", 'kulak', 'capitalist', 'Capitalist', 'Police', 'proletariat', 'Mensheviks', 'Intelligentsia', 'kulaks', 'WORKERS', 'Pravda', 'Orthodox', 'Church', 'Jew', 'Jews', 'masses', 'peasants', 'Gypsies', 'laborers', 'laborer', 'Workers', 'Revolution', 'Civil', 'War', 'Russian'];

const el = document.getElementById('textholder');

const markup = el.innerHTML.split(" ").map((word) => {
    if (words.includes(word)) {
        return '<span class = "highlight">' + word + '</span>';
    } else {
        return word;
    }
}) .join(" ");

el.innerHTML = markup;