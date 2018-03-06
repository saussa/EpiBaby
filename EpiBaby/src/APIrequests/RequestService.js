import EventEmitter from 'react-native-eventemitter';

/// TODO : handle asyncness.
/// TODO : create event emitter and listeners.


export class RequestService {

    constructor() {
        this.req = new XMLHttpRequest();
    }

    static GET() {
        this.req = new XMLHttpRequest();

        this.req.onreadystatechange = function (event) {
            let JSONArray;
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    JSONArray = JSON.parse(this.responseText);

                    let resArray: HttpResponse[] = [];

                    console.log("RESARRAY MA BITE : " + resArray);

                    for (let i = 0; i < JSONArray.length; ++i) {
                        resArray.push(new HttpResponse(JSON.stringify(JSONArray[i])));
                    }

                    console.log('RESARRAY : ' + resArray);

                    EventEmitter.emit('challengers.arrived', JSON.stringify(resArray));

                } else {
                    console.log("ERROR processing request GET");
                    console.log(this.responseText);
                    return null;
                }
            }
        };

        this.req.open('GET', 'http://10.14.59.76:3000/challengers', true);
        this.req.send(null);
    }

    static GETSize() {
        this.req = new XMLHttpRequest();

        this.req.onreadystatechange = function (event) {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    JSONArray = JSON.parse(this.responseText);
                    return JSONArray.length;
                } else {
                    console.log("ERROR processing request GETSize");
                    return 0;
                }
            }
        };

        this.req.open('GET', 'http://10.14.59.76:3000/challengers', true);
        this.req.send(null);
    }

    static POST(challenger) {
        this.req = new XMLHttpRequest();

        this.req.onreadystatechange = function (event) {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    return true;
                } else {
                    console.log("ERROR processing request POST");
                    return false;
                }
            }
        };

        this.req.open('POST', 'http://10.14.59.76:3000/challengers', true);
        this.req.setRequestHeader("Content-type", "application/json");
        this.req.send(challenger);
    }

    static PUT(challenger, id?) {
        this.req = new XMLHttpRequest();

        this.req.onreadystatechange = function (event) {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    return true;
                } else {
                    console.log("ERROR processing request PUT");
                    return false;
                }
            }
        };

        nId = id ? id : JSON.parse(challenger).id;

        this.req.open('PUT', 'http://10.14.59.76:3000/challenger/' + nId, true);
        this.req.setRequestHeader("Content-type", "application/json");
        this.req.send(challenger);
    }

    static DELETE(id) {
        this.req = new XMLHttpRequest();

        this.req.onreadystatechange = function (event) {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    return true;
                } else {
                    console.log("ERROR processing request DELETE");
                    return false;
                }
            }
        };

        this.req.open('DELETE', 'http://10.14.59.76:3000/challenger/' + id, true);
        this.req.send(null);
    }

    static buildBodyForReq(na, im, id?) {
        res = '{' + ' "id": ' + (id ? id : this.GETSize()) + ', "name": "' + na + '", "image": "' + im + '" }';
        return res;
    }
}

export class HttpResponse {
    raw: "";
    json: null;
    name: "";
    image: "";
    id: -1;

    constructor(r?) {
        console.log('AIRE : ' + r);

        if (r) {
            console.log('IN : ' + r);

            this.json = JSON.parse(r);
            this.name = this.json.name;
            console.log('NAME : ' + this.name);
            this.image = this.json.image;
            console.log('IMAGE : ' + this.image);
            this.id = this.json.id;
        }
    }

    getRaw() { return this.raw; }
    getJson() { return this.json; }
    getName() { return this.name; }
    getImage() { return this.image; }
    getId() { return this.id; }
}