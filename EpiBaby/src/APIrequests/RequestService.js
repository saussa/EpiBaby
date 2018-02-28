class RequestService {

    constructor() {
        this.req = new XMLHttpRequest();
    }

    GET() {
        this.req.onreadystatechange = function (event) {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    JSONArray = JSON.parse(this.responseText);
                    resArray = [];
                    JSONArray.forEach(c => function () {
                        resArray.push(new RequestService().HttpResponse(c.toString()));
                    });
                    return resArray;
                } else {
                    console.log("ERROR processing request GET");
                    return null;
                }
            }
        };

        this.req.open('GET', 'localhost:3000/challengers', true);
        this.req.send(null);
    }

    GETSize() {
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

        this.req.open('GET', 'localhost:3000/challengers', true);
        this.req.send(null);
    }

    POST(challenger) {
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

        this.req.open('POST', 'localhost:3000/challengers', true);
        this.req.setRequestHeader("Content-type", "application/json");
        this.req.send(challenger);
    }

    PUT(challenger, id?) {
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

        this.req.open('PUT', 'localhost:3000/challenger/' + nId, true);
        this.req.setRequestHeader("Content-type", "application/json");
        this.req.send(challenger);
    }

    DELETE(id) {
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

        this.req.open('DELETE', 'localhost:3000/challenger/' + id, true);
        this.req.send(null);
    }

    buildBodyForReq(na, im, id?) {
        res = '{' + ' "id": ' + (id ? id : this.GETSize()) + ', "name": "' + na + '", "image": "' + im + '" }';
        return res;
    }

    HttpResponse = class {
         constructor(r?) {
             this.raw = r;
             this.json = null;
             this.name = "";
             this.image = "";
             this.id = -1;

             if (this.raw) {
                 this.json = JSON.parse(this.raw);
                 this.name = this.json.name;
                 this.image = this.json.image;
                 this.id = this.json.id;
             }
         }

         getRaw() { return this.raw; }
         getJson() { return this.json; }
         getName() { return this.name; }
         getImage() { return this.image; }
         getId() { return this.id; }
    }
}