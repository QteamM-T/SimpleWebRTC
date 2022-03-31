# SimpleWebRTC


#### Kratko Objasnjenje

Projket SimpleWebRTC je edukacijski program u kojemu ce se napraviti komunikaciju izmedu dva ili vise web preglednika preko odgovarajuceg signalizacijskog servera te TURN/STUN servera. 

SimpleWebRTC ce imati mogucnost prijave korisnika koji su vec predefinirani u bazi podataka(firebase ili SQL server). Nakon toga odabrat ce korisnike kojima ce omoguciti ulazak na web konferenciju, te ce kreirati sobu pod nekim ID-em(random ili ce birati vidjet cemo). Nakon toga ce imati mogucnost uzivo razgovora i videa putem WebBrowsera. Ideja zasto bi ova aplikacija u buducnosti imala prednost u odnosu na ostale aplikacije bila bi sigurnost, ali taj dio se nece obraditi u ovom periodu zbog kratkog vremena obrade. Aplikacija ce biti vrlo jednostavna za koristiti te moze biti namjenjena bilo kome tko zeli napraviti jednostanu konfereciju (Fakulteti, Cjelokupna populacija, te bilo tko kome treba video poziv), uz End-to-End enkripciju. Aplikacija bi u buducnosti mogla imati i smanjenu latenciju koja bi s WebRTC tehnologije mogla biti nadrogradena s [Salsify](https://snr.stanford.edu/salsify/) tebnologijom. 

#### Programske jezici

    - JavaScript (Prelazak s stranice na stranicu, websocket, webrtc)
    - PHP (Prijava i komunikacija s bazom)
    - HTML (Organizacija stranice)
    - CSS (Izgled stranice)
    
#### Tehnologije
    - http protocol
    - [WebRTC](https://webrtc.org/)
    - Bootstrap
    - [TURN/STUN](https://blog.ivrpowers.com/post/technologies/what-is-stun-turn-server/) server
    - Appache server
    - baze podataka
    
## License

The MIT License (MIT)
Copyright (c) 2016 Pagar.me Pagamentos S/A

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
    

