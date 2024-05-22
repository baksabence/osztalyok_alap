// egy pokemonnak van neve, tartozik hozza egy kep, es tartozik hoza egy mondat amit ki tud mondani

export default class Pokemon{
    //privát adattagok létrehozása
    #nev="";
    #kep="";
    #mondat="";
    constructor(nev, kep, szuloElem){
        // this = mindig a konkrét objektumpéldányra mutat, az alteregója
        this.#nev=nev;
        this.#kep=kep;
        this.#mondat="Jó estét!"
        this.szuloElem=szuloElem;
        this.#megjelenit()
    }

    #megjelenit(){
        let txt = `
            <div class="poki">
                <h3>${this.#nev}</h3>
                <img src="${this.#kep}" alt=${this.#nev}>
            </div>
            
            `
            this.szuloElem.append(txt)
        }



    //getter a névre
    get nev(){
        return this.#nev
    }
    // mondat átírására settert használunk
    set mondat(szoveg){
        this.#mondat= szoveg 
    }
    beszel(){
        console.log(this.#mondat);
    }
}