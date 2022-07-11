/*Consegna
#Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati (delle bombe) - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
# MILESTONE 1
Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.
# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)
# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.*/


/*# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti*/


//genera bombe 
let arrayBombs = []

function bombs(cell) {
    

    while (arrayBombs.length < 16) {
        let numberRandom = Math.floor(Math.random() * cell) + 1
        if (!arrayBombs.includes(numberRandom)) {
            arrayBombs.push(numberRandom)
            }

    }
    return arrayBombs
  
}



const pointTarget = document.getElementById("point")

//targhettizza bottone

const startButton = document.getElementById("start-button")

//Funzione genera celle 

function createCell(numerocelle) {
    const cell = document.createElement("div")
    cell.className = "cell"
    grid.appendChild(cell)
    
    return cell
}



//variabili globali

let cellMax = 100

startButton.addEventListener("click", function(){
    
    startButton.innerText = "Ricomincia"
    //assegno ai punti la partenza da 0
    let points = 0
    pointTarget.innerText = points

    //richiamo le bombe
    bombs(100)
    console.log(bombs(100))
    
    //richiamo la funzione di generazione celle
    for(let i = 1; i <= cellMax; i++) {
        let newCell = createCell(i)

        //stampa valore da 1 a 100
        newCell.innerText = i

        
        
        //ascolto il click della singola cella

            newCell.addEventListener("click", function(){
            console.log(i)

            if (newCell.classList.contains("clicked")){
                return;
            }



            if (arrayBombs.includes(i)) {
                newCell.classList.add("red")
                alert("hai perso, hai totalizzato un punteggio di " + points)
            }
            else newCell.classList.add("blue")
                if(points = )
                



            

            //al click incremento i punti e li stampo
            points++
            pointTarget.innerText = "il tuo punteggio è " + points

        })
        
    }

    

})





