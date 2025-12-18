// --- DONNÉES ---
const calendrierData = [
    { message: "Premier jour de TON calendrier, j'aimerais simplement te souhaiter une belle première journée de stage et plein de courage. 🖤", imagePath: "./images/contenu_1.jpg" },
    { message: "Te souviens-tu de nos premiers restaurants ? Je me souviendrai toute ma vie de celui-ci qui était à tes côtés alors que je te découvrais encore... 🖤", imagePath: "./images/contenu_2.jpg" },
    { message: "« Together, we made it. » Cette phrase nous a vraiment marqués. Ces mois de distance avaient été bien longs sans toi... 🖤", imagePath: "./images/contenu_3.jpg" },
    { message: "Je ne me lasserai jamais de ton regard amoureux. Il me fait craquer. Résultat : je t'aime à n'en plus pouvoir ! 🖤", imagePath: "./images/contenu_4.jpg" },
    { message: "Ça fait longtemps que je n'ai pas pu poser mes mains autour de ton corps. Bientôt, je te ferai danser à nouveau. 🖤", imagePath: "./images/contenu_5.jpg" },
    { message: "On peut dire que je suis en voyage, certes, mais sans toi il manque quelque chose. Tu n'imagines pas comme j'ai hâte de pouvoir sauter dans un train et partir avec toi. 🖤", imagePath: "./images/contenu_6.jpg" },
    { message: "Bah alors mon Tikeur... C'est pas là le dodo, viens là dans mes bras que je t'emmène jusqu'à notre lit d'amoureux. 🖤", imagePath: "./images/contenu_7.jpg" },
    { message: "J'aimerais t'avoir à mes côtés pour la vie, que l'on continue de discuter de tout et rien pour toujours. 🖤", imagePath: "./images/contenu_8.jpg" },
    { message: "Tes papouilles me manquent bien trop. Dans 10 jours, tu sentiras dès le matin mes doigts parcourir ton corps à la recherche de tremblements. 🖤", imagePath: "./images/contenu_9.jpg" },
    { message: "Hop là. Simple petit souvenir d'une balade tranquille pendant laquelle je ne cessais de sourire en te voyant sautiller. 🖤", imagePath: "./images/contenu_10.jpg" },
    { message: "POV : le petit poulpinou qui se fera tresser par sa copine en rentrant parce que ses cheveux font 2 mètres maintenant. 🖤", imagePath: "./images/contenu_11.jpg" },
    { message: "Un de nos meilleurs dates et je ne suis pas prêt de l'oublier. Tikeur, on y retournera, promis. 🖤", imagePath: "./images/contenu_12.jpg" },
    { message: "Ta mignonnerie naturelle comme ça c'est vraiment pour m'abattre et que je ne cesse de tomber toujours plus amoureux. 🖤", imagePath: "./images/contenu_13.jpg" },
    { message: "Ma très chère femme, accepteriez-vous que je vous guide à travers ce magnifique château construit à votre effigie ? Accrochez-vous donc à mon bras. 🖤", imagePath: "./images/contenu_14.jpg" },
    { message: "JE T'AIIIIIIIME !!! Retournons nous câliner dans le vent et les bruits de la mer. Tu me manques mon amour ! 🖤", imagePath: "./images/contenu_15.jpg" },
    { message: "Ce petit câlin par derrière... plus que quelques jours avant que je t'embrasse le cou par derrière pendant que tu cuisines. 🖤", imagePath: "./images/contenu_16.jpg" },
    { message: "Regarde-moi cette belle gosse. Eh oui, c'est la mienne ! Rien qu'à moi. 🖤", imagePath: "./images/contenu_17.jpg" },
    { message: "Tu es mon petit havre de paix. Tu me combles de bonheur et me tranquillises. Avec toi, je me sens bien alors ne pars pas. 🖤", imagePath: "./images/contenu_18.jpg" },
    { message: "22 et 23 mars... Ça a toujours été un signe pour moi. Ça ne peut être que TOI. (J'ai été conçu en premier) 🖤", imagePath: "./images/contenu_19.jpg" },
    { message: "Bon j'avoue tu m'as peut-être battu une fois mais je prendrai ma revanche dans un combat irl, sois prête. 🖤", imagePath: "./images/contenu_20.jpg" },
    { message: "Le Louvre... Ce jour-là était top ! En plus je me baladais avec la seule œuvre que le musée n'avait pas encore, la plus belle. 🖤", imagePath: "./images/contenu_21.jpg" },
    { message: "Câline-moi fort mon amoureuse, j'aime quand tu m'exprimes tout ton amour. Ça me met tout en joie ! 🖤", imagePath: "./images/contenu_22.jpg" },
    { message: "Noël approche... Il se pourrait que l'on se retrouve de nouveau extrêmement beaux et charismatiques comme sur cette magnifique photo. 🖤", imagePath: "./images/contenu_23.jpg" },
    { message: "Joyeux Noël ! Et viens là que je t'aime et t'embrasse toujours plus fort ! 🖤", imagePath: "./images/contenu_24.jpg" }
];

// --- LOGIQUE ---
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('calendrier-grille');
    const modal = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('close-btn');
    const contentDiv = document.getElementById('contenu-injecte');

    // Date actuelle
    const now = new Date();
    const currentMonth = now.getMonth(); // 0 = Janvier, 11 = Décembre
    const currentDay = now.getDate();

    // Génération des 24 cases
    for (let i = 1; i <= 24; i++) {
        const caseEl = document.createElement('div');
        caseEl.classList.add('case');
        caseEl.innerText = i;

        // État de la case (stocké dans le navigateur)
        const isOpened = localStorage.getItem(`avent_day_${i}`);

        // LOGIQUE DE VERROUILLAGE
        // Si on n'est pas en décembre, tout est bloqué (ou pour test: tout ouvert)
        // Pour la production : if (currentMonth === 11 && i <= currentDay)
        
        let isUnlockable = false;

        // CONDITION : On est en décembre ET le jour est arrivé ou passé
        if (currentMonth === 11 && i <= currentDay) {
            isUnlockable = true;
        } 
        
        // --- MODE TEST ---
        // Décommente la ligne suivante pour tester (tout débloquer) :
        // isUnlockable = true; 
        // -----------------

        if (isUnlockable) {
            caseEl.classList.add('active');
            if (isOpened) {
                caseEl.classList.add('opened');
            }
            
            // Clic sur une case valide
            caseEl.addEventListener('click', () => {
                openDay(i);
                localStorage.setItem(`avent_day_${i}`, 'true');
                caseEl.classList.add('opened');
            });
        } else {
            caseEl.classList.add('future');
            caseEl.addEventListener('click', () => {
                alert("Hop hop hop, pas de triche mon amour ! Reviens le " + i + " décembre 😘");
            });
        }

        grid.appendChild(caseEl);
    }

    // Fonction pour ouvrir le contenu
    function openDay(dayIndex) {
        const data = calendrierData[dayIndex - 1];
        if (data) {
            contentDiv.innerHTML = `
                <h2 style="color: #800000; margin-bottom: 15px;">Jour ${dayIndex}</h2>
                
                <img src="./images/${dayIndex}.jpg" alt="Surprise">
                
                <p class="message-text">${data.message}</p>
            `;
            modal.classList.remove('hidden');
        }
    }

    // Fermeture de la modale
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Fermer en cliquant en dehors
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

// --- SERVICE WORKER (PWA) ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log('SW enregistré'))
            .catch(err => console.log('SW échec', err));
    });
}