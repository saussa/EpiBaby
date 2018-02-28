class APIWrapper {

    constructor() {
        this.req = new XMLHttpRequest();
    }

    GET() {
        this.req.onreadystatechange = function (event) {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    // TODO : do something;
                } else {
                    console.log("ERROR processing request GET");
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
                    // TODO : do something;
                } else {
                    console.log("ERROR processing request GET");
                }
            }
        };

        this.req.open('POST', 'localhost:3000/challengers', true);
        this.req.setRequestHeader("Content-type", "application/json");
        this.req.send(challenger);
    }
}