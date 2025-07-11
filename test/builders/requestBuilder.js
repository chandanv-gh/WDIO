class RequestBuilder {
    constructor() {
        this._headers = {};
        this._params = {};
        this._body = null;
        this._method = 'GET';
        this._url = '';
    }

    setMethod(method) {
        this._method = method;
        return this;
    }

    setUrl(url) {
        this._url = url;
        return this;
    }

    setHeaders(headers) {
        this._headers = { ...this._headers, ...headers };
        return this;
    }

    setParams(params) {
        this._params = { ...this._params, ...params };
        return this;
    }

    setBody(body) {
        this._body = body;
        return this;
    }

    build() {
        return {
            method: this._method,
            url: this._url,
            headers: this._headers,
            params: this._params,
            data: this._body
        };
    }
}

module.exports = RequestBuilder; 