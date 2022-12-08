jQuery(document).ready(() => {
	window.$d = {
		httpCat: {
			image: $("#httpcat-img"),
			error: $("#error-msg"),
		},
		footage: {
			info: $("#footage > #info"),
		},
	};




	(function HttpCat(){
		Array.prototype.random = function(){
			return this[Math.floor(Math.random() * this.length)];
		};

		const httpCodes = {100: "Continue", 101: "Switching Protocols", 102: "Processing", 200: "OK", 201: "Created", 202: "Accepted", 203: "Non-Authoritative Information", 204: "No Content", 206: "Partial Content", 207: "Multi-Status", 300: "Multiple Choices", 301: "Moved Permanently", 302: "Found", 303: "See Other", 304: "Not Modified", 305: "Use Proxy", 307: "Temporary Redirect", 308: "Permanent Redirect", 400: "Bad Request", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "Request Timeout", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Payload Too Large", 414: "Request-URI Too Long", 415: "Unsupported Media Type", 416: "Request Range Not Satisfiable", 417: "Expectation Failed", 418: "I’m a teapot", 420: "Enhance Your Calm", 421: "Misdirected Request", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 425: "Too Early", 426: "Upgrade Required", 429: "Too Many Requests", 431: "Request Header Fields Too Large", 444: "No Response", 450: "Blocked by Windows Parental Controls", 451: "Unavailable For Legal Reasons", 497: "HTTP Request Sent to HTTPS Port", 498: "Token expired/invalid", 499: "Client Closed Request", 500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 508: "Loop Detected", 509: "Bandwidth Limit Exceeded", 510: "Not Extended", 511: "Network Authentication Required", 521: "Web Server Is Down", 523: "Origin Is Unreachable", 525: "SSL Handshake Failed", 599: "Network Connect Timeout Error"}
		const setHttpCat = (options) => {
			const code = options.random? Object.keys(httpCodes).random() : options.code,
			      codeDesc = httpCodes[code];

			if(httpCodes[code]) {
				document.title = `${code} - ${codeDesc}`;
				$d.httpCat.image.attr('src', `//http.cat/${code}`);
			} else {
				document.title = `${code} - Invalid Code`;
				$d.httpCat.image.hide();
				$d.httpCat.error.show().text($d.httpCat.error.text().replace(/\$\{code\}/gi, code));
			}


			console.log(`[HttpCat | Variables] code: ${code}`);
			console.log(`[HttpCat | Variables] codeDesc: ${codeDesc}`);
			console.log(`[HttpCat | Params] options.code: ${options.code}`);
			console.log(`[HttpCat | Params] options.random?: ${options.random}`);
		};



		if(/^\?random(=)?/.test(location.search)) {
			$d.footage.info.show();
			return setHttpCat({random: true});
		}
		if(location.pathname.length > 1){
			return setHttpCat({code: location.pathname.slice(1)});
		}
		return setHttpCat({code: "200"});
	})();
});
