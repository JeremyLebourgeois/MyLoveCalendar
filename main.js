// --- DONNÉES ---
const calendrierData = [
    // Tes 24 messages copiés ici
    { message: "Mon amour, un mois magique commence ! Ce premier mot est pour te rappeler à quel point tu illumines mes journées. ❤️", imagePath: "./images/contenu_1.jpg" },
    { message: "Souviens-toi de notre premier café ? Ce jour-là, j'ai su que tout allait changer. C'était le début de notre belle histoire.", imagePath: "./images/contenu_2.jpg" },
    { message: "« La vie est faite de petits bonheurs. » Et toi, tu es mon plus grand. 🥰", imagePath: "./images/contenu_3.jpg" },
    { message: "Je ne me lasserai jamais de la façon dont tes yeux sourient. Tu es la plus belle chose que je vois chaque matin. ✨", imagePath: "./images/contenu_4.jpg" },
    { message: "Blague du jour : Pourquoi est-ce qu'on dit que le Père Noël est marié ? Parce qu'il porte toujours son **Alliance** ! 😉", imagePath: "./images/contenu_5.jpg" },
    { message: "Le souvenir de notre voyage surprise (celui avec le train manqué !) me fait toujours sourire. Même le chaos est magique avec toi.", imagePath: "./images/contenu_6.jpg" },
    { message: "Si j'avais une seule chose à emporter sur une île déserte, ce serait toi. (Et peut-être une écharpe, il fait froid en décembre). 🧣", imagePath: "./images/contenu_7.jpg" },
    { message: "« Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction. » – Antoine de Saint-Exupéry. C'est nous.", imagePath: "./images/contenu_8.jpg" },
    { message: "J'ai hâte de créer des millions d'autres souvenirs avec toi. Quel est notre prochain grand projet ? L'amour est au programme !", imagePath: "./images/contenu_9.jpg" },
    { message: "Pourquoi le Père Noël met-il un bonnet ? Pour ne pas attraper de **rhume des fêtes** ! Haha ! 🤧", imagePath: "./images/contenu_10.jpg" },
    { message: "Ce dîner où on a ri aux larmes d'une blague stupide que personne n'a comprise. Ces moments-là sont les meilleurs.", imagePath: "./images/contenu_11.jpg" },
    { message: "Si la journée est difficile, sache que tu as une personne qui pense fort à toi et t'envoie toute son énergie. Tu es fort(e) !", imagePath: "./images/contenu_12.jpg" },
    { message: "Ta gentillesse est un super-pouvoir. Ne change jamais. Tu rends le monde meilleur, ne serait-ce que le mien. 💖", imagePath: "./images/contenu_13.jpg" },
    { message: "« Le bonheur est la seule chose qui se double si on le partage. » – Albert Schweitzer. Heureux d'être ton partenaire de bonheur.", imagePath: "./images/contenu_14.jpg" },
    { message: "Si tu te demandes à quoi je pense, la réponse est simple : **toi**. Chaque jour, à chaque instant.", imagePath: "./images/contenu_15.jpg" },
    { message: "Quel est le plat préféré du Père Noël à la plage ? Le **poisson pané** ! 🐠 (Oui, je sais, elle est nulle, mais je t'aime quand même !)", imagePath: "./images/contenu_16.jpg" },
    { message: "Écoute *notre* chanson aujourd'hui. Elle me rappelle notre premier slow, même si on était juste dans la cuisine. 🎶", imagePath: "./images/contenu_17.jpg" },
    { message: "Tu es mon refuge, mon ancre, et la plus belle aventure de ma vie. Je t'aime, profondément.", imagePath: "./images/contenu_18.jpg" },
    { message: "« Un amour sans admiration n'est qu'une amitié. » – George Sand. Je t'admire pour tout ce que tu es.", imagePath: "./images/contenu_19.jpg" },
    { message: "Ce film qu'on a regardé pour la première fois ensemble, en se tenant la main. Le film était mauvais, mais la soirée était parfaite.", imagePath: "./images/contenu_20.jpg" },
    { message: "Si j'étais un flocon de neige, je voudrais tomber dans ta main. Non, en fait, je préfère être ta **couette** pour te garder au chaud ! 🧤", imagePath: "./images/contenu_21.jpg" },
    { message: "Bientôt Noël ! Mais plus encore, bientôt une nouvelle année de *nous*. Hâte de t'aimer encore plus en 2026. (PS : Ce sera une année bissextile pour l'amour.)", imagePath: "./images/contenu_22.jpg" },
    { message: "Juste un petit rappel pour le 23 : chaque moment passé avec toi est un cadeau. Le compte à rebours est presque terminé, mais pas mon amour.", imagePath: "./images/contenu_23.jpg" },
    { message: "Joyeux réveillon ! Le plus beau cadeau, c'est toi. Je t'aime. J'espère que ce calendrier t'a plu. Viens vite, je t'attends sous le houx. 💋", imagePath: "./images/contenu_24.jpg" }
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
                alert("Hop hop hop, pas de triche mon amour ! Reviens le " + i + " décembre 😜");
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