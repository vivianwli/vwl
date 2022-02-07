var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// node_modules/@sveltejs/kit/dist/chunks/multipart-parser.js
var multipart_parser_exports = {};
__export(multipart_parser_exports, {
  toFormData: () => toFormData
});
function _fileName(headerValue) {
  const m2 = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!m2) {
    return;
  }
  const match = m2[2] || m2[3] || "";
  let filename = match.slice(match.lastIndexOf("\\") + 1);
  filename = filename.replace(/%22/g, '"');
  filename = filename.replace(/&#(\d{4});/g, (m3, code) => {
    return String.fromCharCode(code);
  });
  return filename;
}
async function toFormData(Body2, ct) {
  if (!/multipart/i.test(ct)) {
    throw new TypeError("Failed to fetch");
  }
  const m2 = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!m2) {
    throw new TypeError("no or bad content-type header, no multipart boundary");
  }
  const parser = new MultipartParser(m2[1] || m2[2]);
  let headerField;
  let headerValue;
  let entryValue;
  let entryName;
  let contentType;
  let filename;
  const entryChunks = [];
  const formData = new FormData();
  const onPartData = (ui8a) => {
    entryValue += decoder.decode(ui8a, { stream: true });
  };
  const appendToFile = (ui8a) => {
    entryChunks.push(ui8a);
  };
  const appendFileToFormData = () => {
    const file = new File(entryChunks, filename, { type: contentType });
    formData.append(entryName, file);
  };
  const appendEntryToFormData = () => {
    formData.append(entryName, entryValue);
  };
  const decoder = new TextDecoder("utf-8");
  decoder.decode();
  parser.onPartBegin = function() {
    parser.onPartData = onPartData;
    parser.onPartEnd = appendEntryToFormData;
    headerField = "";
    headerValue = "";
    entryValue = "";
    entryName = "";
    contentType = "";
    filename = null;
    entryChunks.length = 0;
  };
  parser.onHeaderField = function(ui8a) {
    headerField += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderValue = function(ui8a) {
    headerValue += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderEnd = function() {
    headerValue += decoder.decode();
    headerField = headerField.toLowerCase();
    if (headerField === "content-disposition") {
      const m3 = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      if (m3) {
        entryName = m3[2] || m3[3] || "";
      }
      filename = _fileName(headerValue);
      if (filename) {
        parser.onPartData = appendToFile;
        parser.onPartEnd = appendFileToFormData;
      }
    } else if (headerField === "content-type") {
      contentType = headerValue;
    }
    headerValue = "";
    headerField = "";
  };
  for await (const chunk of Body2) {
    parser.write(chunk);
  }
  parser.end();
  return formData;
}
var import_node_fs, import_node_path, import_node_worker_threads, import_node_http, import_node_https, import_node_zlib, import_node_stream, import_node_util, import_node_url, import_net, s, S, f, F, LF, CR, SPACE, HYPHEN, COLON, A, Z, lower, noop, MultipartParser;
var init_multipart_parser = __esm({
  "node_modules/@sveltejs/kit/dist/chunks/multipart-parser.js"() {
    import_node_fs = __toModule(require("fs"));
    import_node_path = __toModule(require("path"));
    import_node_worker_threads = __toModule(require("worker_threads"));
    init_install_fetch();
    import_node_http = __toModule(require("http"));
    import_node_https = __toModule(require("https"));
    import_node_zlib = __toModule(require("zlib"));
    import_node_stream = __toModule(require("stream"));
    import_node_util = __toModule(require("util"));
    import_node_url = __toModule(require("url"));
    import_net = __toModule(require("net"));
    globalThis.DOMException || (() => {
      const port = new import_node_worker_threads.MessageChannel().port1;
      const ab = new ArrayBuffer(0);
      try {
        port.postMessage(ab, [ab, ab]);
      } catch (err) {
        return err.constructor;
      }
    })();
    s = 0;
    S = {
      START_BOUNDARY: s++,
      HEADER_FIELD_START: s++,
      HEADER_FIELD: s++,
      HEADER_VALUE_START: s++,
      HEADER_VALUE: s++,
      HEADER_VALUE_ALMOST_DONE: s++,
      HEADERS_ALMOST_DONE: s++,
      PART_DATA_START: s++,
      PART_DATA: s++,
      END: s++
    };
    f = 1;
    F = {
      PART_BOUNDARY: f,
      LAST_BOUNDARY: f *= 2
    };
    LF = 10;
    CR = 13;
    SPACE = 32;
    HYPHEN = 45;
    COLON = 58;
    A = 97;
    Z = 122;
    lower = (c) => c | 32;
    noop = () => {
    };
    MultipartParser = class {
      constructor(boundary) {
        this.index = 0;
        this.flags = 0;
        this.onHeaderEnd = noop;
        this.onHeaderField = noop;
        this.onHeadersEnd = noop;
        this.onHeaderValue = noop;
        this.onPartBegin = noop;
        this.onPartData = noop;
        this.onPartEnd = noop;
        this.boundaryChars = {};
        boundary = "\r\n--" + boundary;
        const ui8a = new Uint8Array(boundary.length);
        for (let i2 = 0; i2 < boundary.length; i2++) {
          ui8a[i2] = boundary.charCodeAt(i2);
          this.boundaryChars[ui8a[i2]] = true;
        }
        this.boundary = ui8a;
        this.lookbehind = new Uint8Array(this.boundary.length + 8);
        this.state = S.START_BOUNDARY;
      }
      write(data) {
        let i2 = 0;
        const length_ = data.length;
        let previousIndex = this.index;
        let { lookbehind, boundary, boundaryChars, index, state, flags } = this;
        const boundaryLength = this.boundary.length;
        const boundaryEnd = boundaryLength - 1;
        const bufferLength = data.length;
        let c;
        let cl;
        const mark = (name) => {
          this[name + "Mark"] = i2;
        };
        const clear = (name) => {
          delete this[name + "Mark"];
        };
        const callback = (callbackSymbol, start, end, ui8a) => {
          if (start === void 0 || start !== end) {
            this[callbackSymbol](ui8a && ui8a.subarray(start, end));
          }
        };
        const dataCallback = (name, clear2) => {
          const markSymbol = name + "Mark";
          if (!(markSymbol in this)) {
            return;
          }
          if (clear2) {
            callback(name, this[markSymbol], i2, data);
            delete this[markSymbol];
          } else {
            callback(name, this[markSymbol], data.length, data);
            this[markSymbol] = 0;
          }
        };
        for (i2 = 0; i2 < length_; i2++) {
          c = data[i2];
          switch (state) {
            case S.START_BOUNDARY:
              if (index === boundary.length - 2) {
                if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else if (c !== CR) {
                  return;
                }
                index++;
                break;
              } else if (index - 1 === boundary.length - 2) {
                if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
                  state = S.END;
                  flags = 0;
                } else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
                  index = 0;
                  callback("onPartBegin");
                  state = S.HEADER_FIELD_START;
                } else {
                  return;
                }
                break;
              }
              if (c !== boundary[index + 2]) {
                index = -2;
              }
              if (c === boundary[index + 2]) {
                index++;
              }
              break;
            case S.HEADER_FIELD_START:
              state = S.HEADER_FIELD;
              mark("onHeaderField");
              index = 0;
            case S.HEADER_FIELD:
              if (c === CR) {
                clear("onHeaderField");
                state = S.HEADERS_ALMOST_DONE;
                break;
              }
              index++;
              if (c === HYPHEN) {
                break;
              }
              if (c === COLON) {
                if (index === 1) {
                  return;
                }
                dataCallback("onHeaderField", true);
                state = S.HEADER_VALUE_START;
                break;
              }
              cl = lower(c);
              if (cl < A || cl > Z) {
                return;
              }
              break;
            case S.HEADER_VALUE_START:
              if (c === SPACE) {
                break;
              }
              mark("onHeaderValue");
              state = S.HEADER_VALUE;
            case S.HEADER_VALUE:
              if (c === CR) {
                dataCallback("onHeaderValue", true);
                callback("onHeaderEnd");
                state = S.HEADER_VALUE_ALMOST_DONE;
              }
              break;
            case S.HEADER_VALUE_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              state = S.HEADER_FIELD_START;
              break;
            case S.HEADERS_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              callback("onHeadersEnd");
              state = S.PART_DATA_START;
              break;
            case S.PART_DATA_START:
              state = S.PART_DATA;
              mark("onPartData");
            case S.PART_DATA:
              previousIndex = index;
              if (index === 0) {
                i2 += boundaryEnd;
                while (i2 < bufferLength && !(data[i2] in boundaryChars)) {
                  i2 += boundaryLength;
                }
                i2 -= boundaryEnd;
                c = data[i2];
              }
              if (index < boundary.length) {
                if (boundary[index] === c) {
                  if (index === 0) {
                    dataCallback("onPartData", true);
                  }
                  index++;
                } else {
                  index = 0;
                }
              } else if (index === boundary.length) {
                index++;
                if (c === CR) {
                  flags |= F.PART_BOUNDARY;
                } else if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else {
                  index = 0;
                }
              } else if (index - 1 === boundary.length) {
                if (flags & F.PART_BOUNDARY) {
                  index = 0;
                  if (c === LF) {
                    flags &= ~F.PART_BOUNDARY;
                    callback("onPartEnd");
                    callback("onPartBegin");
                    state = S.HEADER_FIELD_START;
                    break;
                  }
                } else if (flags & F.LAST_BOUNDARY) {
                  if (c === HYPHEN) {
                    callback("onPartEnd");
                    state = S.END;
                    flags = 0;
                  } else {
                    index = 0;
                  }
                } else {
                  index = 0;
                }
              }
              if (index > 0) {
                lookbehind[index - 1] = c;
              } else if (previousIndex > 0) {
                const _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
                callback("onPartData", 0, previousIndex, _lookbehind);
                previousIndex = 0;
                mark("onPartData");
                i2--;
              }
              break;
            case S.END:
              break;
            default:
              throw new Error(`Unexpected state entered: ${state}`);
          }
        }
        dataCallback("onHeaderField");
        dataCallback("onHeaderValue");
        dataCallback("onPartData");
        this.index = index;
        this.state = state;
        this.flags = flags;
      }
      end() {
        if (this.state === S.HEADER_FIELD_START && this.index === 0 || this.state === S.PART_DATA && this.index === this.boundary.length) {
          this.onPartEnd();
        } else if (this.state !== S.END) {
          throw new Error("MultipartParser.end(): stream ended unexpectedly");
        }
      }
    };
  }
});

// node_modules/@sveltejs/kit/dist/install-fetch.js
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i2 = 1; i2 < meta.length; i2++) {
    if (meta[i2] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i2]}`;
      if (meta[i2].indexOf("charset=") === 0) {
        charset = meta[i2].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
async function* toIterator(parts, clone2 = true) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else if (ArrayBuffer.isView(part)) {
      if (clone2) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    } else {
      let position = 0;
      while (position !== part.size) {
        const chunk = part.slice(position, Math.min(part.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}
function formDataToBlob(F2, B = Blob$1) {
  var b = `${r()}${r()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), c = [], p = `--${b}\r
Content-Disposition: form-data; name="`;
  F2.forEach((v, n) => typeof v == "string" ? c.push(p + e(n) + `"\r
\r
${v.replace(/\r(?!\n)|(?<!\r)\n/g, "\r\n")}\r
`) : c.push(p + e(n) + `"; filename="${e(v.name, 1)}"\r
Content-Type: ${v.type || "application/octet-stream"}\r
\r
`, v, "\r\n"));
  c.push(`--${b}--`);
  return new B(c, { type: "multipart/form-data; boundary=" + b });
}
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  const { body: body2 } = data;
  if (body2 === null) {
    return Buffer.alloc(0);
  }
  if (!(body2 instanceof import_node_stream2.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body2) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const error2 = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body2.destroy(error2);
        throw error2;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error2) {
    const error_ = error2 instanceof FetchBaseError ? error2 : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error2.message}`, "system", error2);
    throw error_;
  }
  if (body2.readableEnded === true || body2._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error2) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error2.message}`, "system", error2);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
function fromRawHeaders(headers = []) {
  return new Headers2(headers.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
function stripURLForUseAsAReferrer(url, originOnly = false) {
  if (url == null) {
    return "no-referrer";
  }
  url = new URL(url);
  if (/^(about|blob|data):$/.test(url.protocol)) {
    return "no-referrer";
  }
  url.username = "";
  url.password = "";
  url.hash = "";
  if (originOnly) {
    url.pathname = "";
    url.search = "";
  }
  return url;
}
function validateReferrerPolicy(referrerPolicy) {
  if (!ReferrerPolicy.has(referrerPolicy)) {
    throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
  }
  return referrerPolicy;
}
function isOriginPotentiallyTrustworthy(url) {
  if (/^(http|ws)s:$/.test(url.protocol)) {
    return true;
  }
  const hostIp = url.host.replace(/(^\[)|(]$)/g, "");
  const hostIPVersion = (0, import_net2.isIP)(hostIp);
  if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
    return true;
  }
  if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
    return true;
  }
  if (/^(.+\.)*localhost$/.test(url.host)) {
    return false;
  }
  if (url.protocol === "file:") {
    return true;
  }
  return false;
}
function isUrlPotentiallyTrustworthy(url) {
  if (/^about:(blank|srcdoc)$/.test(url)) {
    return true;
  }
  if (url.protocol === "data:") {
    return true;
  }
  if (/^(blob|filesystem):$/.test(url.protocol)) {
    return true;
  }
  return isOriginPotentiallyTrustworthy(url);
}
function determineRequestsReferrer(request, { referrerURLCallback, referrerOriginCallback } = {}) {
  if (request.referrer === "no-referrer" || request.referrerPolicy === "") {
    return null;
  }
  const policy = request.referrerPolicy;
  if (request.referrer === "about:client") {
    return "no-referrer";
  }
  const referrerSource = request.referrer;
  let referrerURL = stripURLForUseAsAReferrer(referrerSource);
  let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);
  if (referrerURL.toString().length > 4096) {
    referrerURL = referrerOrigin;
  }
  if (referrerURLCallback) {
    referrerURL = referrerURLCallback(referrerURL);
  }
  if (referrerOriginCallback) {
    referrerOrigin = referrerOriginCallback(referrerOrigin);
  }
  const currentURL = new URL(request.url);
  switch (policy) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return referrerOrigin;
    case "unsafe-url":
      return referrerURL;
    case "strict-origin":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin.toString();
    case "strict-origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin;
    case "same-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return "no-referrer";
    case "origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return referrerOrigin;
    case "no-referrer-when-downgrade":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerURL;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${policy}`);
  }
}
function parseReferrerPolicyFromHeader(headers) {
  const policyTokens = (headers.get("referrer-policy") || "").split(/[,\s]+/);
  let policy = "";
  for (const token of policyTokens) {
    if (token && ReferrerPolicy.has(token)) {
      policy = token;
    }
  }
  return policy;
}
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request2(url, options_);
    const { parsedURL, options } = getNodeRequestOptions(request);
    if (!supportedSchemas.has(parsedURL.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (parsedURL.protocol === "data:") {
      const data = dataUriToBuffer(request.url);
      const response2 = new Response2(data, { headers: { "Content-Type": data.typeFull } });
      resolve2(response2);
      return;
    }
    const send = (parsedURL.protocol === "https:" ? import_node_https2.default : import_node_http2.default).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error2 = new AbortError("The operation was aborted.");
      reject(error2);
      if (request.body && request.body instanceof import_node_stream2.default.Readable) {
        request.body.destroy(error2);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error2);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(parsedURL, options);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (error2) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${error2.message}`, "system", error2));
      finalize();
    });
    fixResponseChunkedTransferBadEnding(request_, (error2) => {
      response.body.destroy(error2);
    });
    if (process.version < "v14") {
      request_.on("socket", (s3) => {
        let endedWithEventsCount;
        s3.prependListener("end", () => {
          endedWithEventsCount = s3._eventsCount;
        });
        s3.prependListener("close", (hadError) => {
          if (response && endedWithEventsCount < s3._eventsCount && !hadError) {
            const error2 = new Error("Premature close");
            error2.code = "ERR_STREAM_PREMATURE_CLOSE";
            response.body.emit("error", error2);
          }
        });
      });
    }
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location2 = headers.get("Location");
        const locationURL = location2 === null ? null : new URL(location2, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              headers.set("Location", locationURL);
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers2(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: clone(request),
              signal: request.signal,
              size: request.size,
              referrer: request.referrer,
              referrerPolicy: request.referrerPolicy
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_node_stream2.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            const responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
            if (responseReferrerPolicy) {
              requestOptions.referrerPolicy = responseReferrerPolicy;
            }
            resolve2(fetch2(new Request2(locationURL, requestOptions)));
            finalize();
            return;
          }
          default:
            return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      if (signal) {
        response_.once("end", () => {
          signal.removeEventListener("abort", abortAndFinalize);
        });
      }
      let body2 = (0, import_node_stream2.pipeline)(response_, new import_node_stream2.PassThrough(), reject);
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body2, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_node_zlib2.default.Z_SYNC_FLUSH,
        finishFlush: import_node_zlib2.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body2 = (0, import_node_stream2.pipeline)(body2, import_node_zlib2.default.createGunzip(zlibOptions), reject);
        response = new Response2(body2, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_node_stream2.pipeline)(response_, new import_node_stream2.PassThrough(), reject);
        raw.once("data", (chunk) => {
          body2 = (chunk[0] & 15) === 8 ? (0, import_node_stream2.pipeline)(body2, import_node_zlib2.default.createInflate(), reject) : (0, import_node_stream2.pipeline)(body2, import_node_zlib2.default.createInflateRaw(), reject);
          response = new Response2(body2, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body2 = (0, import_node_stream2.pipeline)(body2, import_node_zlib2.default.createBrotliDecompress(), reject);
        response = new Response2(body2, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body2, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
  const LAST_CHUNK = Buffer.from("0\r\n\r\n");
  let isChunkedTransfer = false;
  let properLastChunkReceived = false;
  let previousChunk;
  request.on("response", (response) => {
    const { headers } = response;
    isChunkedTransfer = headers["transfer-encoding"] === "chunked" && !headers["content-length"];
  });
  request.on("socket", (socket) => {
    const onSocketClose = () => {
      if (isChunkedTransfer && !properLastChunkReceived) {
        const error2 = new Error("Premature close");
        error2.code = "ERR_STREAM_PREMATURE_CLOSE";
        errorCallback(error2);
      }
    };
    socket.prependListener("close", onSocketClose);
    request.on("abort", () => {
      socket.removeListener("close", onSocketClose);
    });
    socket.on("data", (buf) => {
      properLastChunkReceived = Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;
      if (!properLastChunkReceived && previousChunk) {
        properLastChunkReceived = Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0;
      }
      previousChunk = buf;
    });
  });
}
function __fetch_polyfill() {
  Object.defineProperties(globalThis, {
    fetch: {
      enumerable: true,
      configurable: true,
      value: fetch2
    },
    Response: {
      enumerable: true,
      configurable: true,
      value: Response2
    },
    Request: {
      enumerable: true,
      configurable: true,
      value: Request2
    },
    Headers: {
      enumerable: true,
      configurable: true,
      value: Headers2
    }
  });
}
var import_node_http2, import_node_https2, import_node_zlib2, import_node_stream2, import_node_util2, import_node_url2, import_net2, commonjsGlobal, ponyfill_es2018, POOL_SIZE$1, POOL_SIZE, _parts, _type, _size, _a, _Blob, Blob, Blob$1, _lastModified, _name, _a2, _File, File, t, i, h, r, m, f2, e, x, _d, _a3, FormData, FetchBaseError, FetchError, NAME, isURLSearchParameters, isBlob, isAbortSignal, INTERNALS$2, Body, clone, getNonSpecFormDataBoundary, extractContentType, getTotalBytes, writeToStream, validateHeaderName, validateHeaderValue, Headers2, redirectStatus, isRedirect, INTERNALS$1, Response2, getSearch, ReferrerPolicy, DEFAULT_REFERRER_POLICY, INTERNALS, isRequest, Request2, getNodeRequestOptions, AbortError, supportedSchemas;
var init_install_fetch = __esm({
  "node_modules/@sveltejs/kit/dist/install-fetch.js"() {
    import_node_http2 = __toModule(require("http"));
    import_node_https2 = __toModule(require("https"));
    import_node_zlib2 = __toModule(require("zlib"));
    import_node_stream2 = __toModule(require("stream"));
    import_node_util2 = __toModule(require("util"));
    import_node_url2 = __toModule(require("url"));
    import_net2 = __toModule(require("net"));
    commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    ponyfill_es2018 = { exports: {} };
    (function(module2, exports) {
      (function(global2, factory) {
        factory(exports);
      })(commonjsGlobal, function(exports2) {
        const SymbolPolyfill = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol : (description) => `Symbol(${description})`;
        function noop4() {
          return void 0;
        }
        function getGlobals() {
          if (typeof self !== "undefined") {
            return self;
          } else if (typeof window !== "undefined") {
            return window;
          } else if (typeof commonjsGlobal !== "undefined") {
            return commonjsGlobal;
          }
          return void 0;
        }
        const globals = getGlobals();
        function typeIsObject(x2) {
          return typeof x2 === "object" && x2 !== null || typeof x2 === "function";
        }
        const rethrowAssertionErrorRejection = noop4;
        const originalPromise = Promise;
        const originalPromiseThen = Promise.prototype.then;
        const originalPromiseResolve = Promise.resolve.bind(originalPromise);
        const originalPromiseReject = Promise.reject.bind(originalPromise);
        function newPromise(executor) {
          return new originalPromise(executor);
        }
        function promiseResolvedWith(value) {
          return originalPromiseResolve(value);
        }
        function promiseRejectedWith(reason) {
          return originalPromiseReject(reason);
        }
        function PerformPromiseThen(promise, onFulfilled, onRejected) {
          return originalPromiseThen.call(promise, onFulfilled, onRejected);
        }
        function uponPromise(promise, onFulfilled, onRejected) {
          PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection);
        }
        function uponFulfillment(promise, onFulfilled) {
          uponPromise(promise, onFulfilled);
        }
        function uponRejection(promise, onRejected) {
          uponPromise(promise, void 0, onRejected);
        }
        function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
          return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
        }
        function setPromiseIsHandledToTrue(promise) {
          PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
        }
        const queueMicrotask = (() => {
          const globalQueueMicrotask = globals && globals.queueMicrotask;
          if (typeof globalQueueMicrotask === "function") {
            return globalQueueMicrotask;
          }
          const resolvedPromise = promiseResolvedWith(void 0);
          return (fn) => PerformPromiseThen(resolvedPromise, fn);
        })();
        function reflectCall(F2, V, args) {
          if (typeof F2 !== "function") {
            throw new TypeError("Argument is not a function");
          }
          return Function.prototype.apply.call(F2, V, args);
        }
        function promiseCall(F2, V, args) {
          try {
            return promiseResolvedWith(reflectCall(F2, V, args));
          } catch (value) {
            return promiseRejectedWith(value);
          }
        }
        const QUEUE_MAX_ARRAY_SIZE = 16384;
        class SimpleQueue {
          constructor() {
            this._cursor = 0;
            this._size = 0;
            this._front = {
              _elements: [],
              _next: void 0
            };
            this._back = this._front;
            this._cursor = 0;
            this._size = 0;
          }
          get length() {
            return this._size;
          }
          push(element) {
            const oldBack = this._back;
            let newBack = oldBack;
            if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
              newBack = {
                _elements: [],
                _next: void 0
              };
            }
            oldBack._elements.push(element);
            if (newBack !== oldBack) {
              this._back = newBack;
              oldBack._next = newBack;
            }
            ++this._size;
          }
          shift() {
            const oldFront = this._front;
            let newFront = oldFront;
            const oldCursor = this._cursor;
            let newCursor = oldCursor + 1;
            const elements = oldFront._elements;
            const element = elements[oldCursor];
            if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
              newFront = oldFront._next;
              newCursor = 0;
            }
            --this._size;
            this._cursor = newCursor;
            if (oldFront !== newFront) {
              this._front = newFront;
            }
            elements[oldCursor] = void 0;
            return element;
          }
          forEach(callback) {
            let i2 = this._cursor;
            let node = this._front;
            let elements = node._elements;
            while (i2 !== elements.length || node._next !== void 0) {
              if (i2 === elements.length) {
                node = node._next;
                elements = node._elements;
                i2 = 0;
                if (elements.length === 0) {
                  break;
                }
              }
              callback(elements[i2]);
              ++i2;
            }
          }
          peek() {
            const front = this._front;
            const cursor = this._cursor;
            return front._elements[cursor];
          }
        }
        function ReadableStreamReaderGenericInitialize(reader, stream) {
          reader._ownerReadableStream = stream;
          stream._reader = reader;
          if (stream._state === "readable") {
            defaultReaderClosedPromiseInitialize(reader);
          } else if (stream._state === "closed") {
            defaultReaderClosedPromiseInitializeAsResolved(reader);
          } else {
            defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
          }
        }
        function ReadableStreamReaderGenericCancel(reader, reason) {
          const stream = reader._ownerReadableStream;
          return ReadableStreamCancel(stream, reason);
        }
        function ReadableStreamReaderGenericRelease(reader) {
          if (reader._ownerReadableStream._state === "readable") {
            defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
          } else {
            defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
          }
          reader._ownerReadableStream._reader = void 0;
          reader._ownerReadableStream = void 0;
        }
        function readerLockException(name) {
          return new TypeError("Cannot " + name + " a stream using a released reader");
        }
        function defaultReaderClosedPromiseInitialize(reader) {
          reader._closedPromise = newPromise((resolve2, reject) => {
            reader._closedPromise_resolve = resolve2;
            reader._closedPromise_reject = reject;
          });
        }
        function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
          defaultReaderClosedPromiseInitialize(reader);
          defaultReaderClosedPromiseReject(reader, reason);
        }
        function defaultReaderClosedPromiseInitializeAsResolved(reader) {
          defaultReaderClosedPromiseInitialize(reader);
          defaultReaderClosedPromiseResolve(reader);
        }
        function defaultReaderClosedPromiseReject(reader, reason) {
          if (reader._closedPromise_reject === void 0) {
            return;
          }
          setPromiseIsHandledToTrue(reader._closedPromise);
          reader._closedPromise_reject(reason);
          reader._closedPromise_resolve = void 0;
          reader._closedPromise_reject = void 0;
        }
        function defaultReaderClosedPromiseResetToRejected(reader, reason) {
          defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
        }
        function defaultReaderClosedPromiseResolve(reader) {
          if (reader._closedPromise_resolve === void 0) {
            return;
          }
          reader._closedPromise_resolve(void 0);
          reader._closedPromise_resolve = void 0;
          reader._closedPromise_reject = void 0;
        }
        const AbortSteps = SymbolPolyfill("[[AbortSteps]]");
        const ErrorSteps = SymbolPolyfill("[[ErrorSteps]]");
        const CancelSteps = SymbolPolyfill("[[CancelSteps]]");
        const PullSteps = SymbolPolyfill("[[PullSteps]]");
        const NumberIsFinite = Number.isFinite || function(x2) {
          return typeof x2 === "number" && isFinite(x2);
        };
        const MathTrunc = Math.trunc || function(v) {
          return v < 0 ? Math.ceil(v) : Math.floor(v);
        };
        function isDictionary(x2) {
          return typeof x2 === "object" || typeof x2 === "function";
        }
        function assertDictionary(obj, context) {
          if (obj !== void 0 && !isDictionary(obj)) {
            throw new TypeError(`${context} is not an object.`);
          }
        }
        function assertFunction(x2, context) {
          if (typeof x2 !== "function") {
            throw new TypeError(`${context} is not a function.`);
          }
        }
        function isObject(x2) {
          return typeof x2 === "object" && x2 !== null || typeof x2 === "function";
        }
        function assertObject(x2, context) {
          if (!isObject(x2)) {
            throw new TypeError(`${context} is not an object.`);
          }
        }
        function assertRequiredArgument(x2, position, context) {
          if (x2 === void 0) {
            throw new TypeError(`Parameter ${position} is required in '${context}'.`);
          }
        }
        function assertRequiredField(x2, field, context) {
          if (x2 === void 0) {
            throw new TypeError(`${field} is required in '${context}'.`);
          }
        }
        function convertUnrestrictedDouble(value) {
          return Number(value);
        }
        function censorNegativeZero(x2) {
          return x2 === 0 ? 0 : x2;
        }
        function integerPart(x2) {
          return censorNegativeZero(MathTrunc(x2));
        }
        function convertUnsignedLongLongWithEnforceRange(value, context) {
          const lowerBound = 0;
          const upperBound = Number.MAX_SAFE_INTEGER;
          let x2 = Number(value);
          x2 = censorNegativeZero(x2);
          if (!NumberIsFinite(x2)) {
            throw new TypeError(`${context} is not a finite number`);
          }
          x2 = integerPart(x2);
          if (x2 < lowerBound || x2 > upperBound) {
            throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
          }
          if (!NumberIsFinite(x2) || x2 === 0) {
            return 0;
          }
          return x2;
        }
        function assertReadableStream(x2, context) {
          if (!IsReadableStream(x2)) {
            throw new TypeError(`${context} is not a ReadableStream.`);
          }
        }
        function AcquireReadableStreamDefaultReader(stream) {
          return new ReadableStreamDefaultReader(stream);
        }
        function ReadableStreamAddReadRequest(stream, readRequest) {
          stream._reader._readRequests.push(readRequest);
        }
        function ReadableStreamFulfillReadRequest(stream, chunk, done) {
          const reader = stream._reader;
          const readRequest = reader._readRequests.shift();
          if (done) {
            readRequest._closeSteps();
          } else {
            readRequest._chunkSteps(chunk);
          }
        }
        function ReadableStreamGetNumReadRequests(stream) {
          return stream._reader._readRequests.length;
        }
        function ReadableStreamHasDefaultReader(stream) {
          const reader = stream._reader;
          if (reader === void 0) {
            return false;
          }
          if (!IsReadableStreamDefaultReader(reader)) {
            return false;
          }
          return true;
        }
        class ReadableStreamDefaultReader {
          constructor(stream) {
            assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
            assertReadableStream(stream, "First parameter");
            if (IsReadableStreamLocked(stream)) {
              throw new TypeError("This stream has already been locked for exclusive reading by another reader");
            }
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readRequests = new SimpleQueue();
          }
          get closed() {
            if (!IsReadableStreamDefaultReader(this)) {
              return promiseRejectedWith(defaultReaderBrandCheckException("closed"));
            }
            return this._closedPromise;
          }
          cancel(reason = void 0) {
            if (!IsReadableStreamDefaultReader(this)) {
              return promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
            }
            if (this._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("cancel"));
            }
            return ReadableStreamReaderGenericCancel(this, reason);
          }
          read() {
            if (!IsReadableStreamDefaultReader(this)) {
              return promiseRejectedWith(defaultReaderBrandCheckException("read"));
            }
            if (this._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("read from"));
            }
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve2, reject) => {
              resolvePromise = resolve2;
              rejectPromise = reject;
            });
            const readRequest = {
              _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
              _closeSteps: () => resolvePromise({ value: void 0, done: true }),
              _errorSteps: (e2) => rejectPromise(e2)
            };
            ReadableStreamDefaultReaderRead(this, readRequest);
            return promise;
          }
          releaseLock() {
            if (!IsReadableStreamDefaultReader(this)) {
              throw defaultReaderBrandCheckException("releaseLock");
            }
            if (this._ownerReadableStream === void 0) {
              return;
            }
            if (this._readRequests.length > 0) {
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            }
            ReadableStreamReaderGenericRelease(this);
          }
        }
        Object.defineProperties(ReadableStreamDefaultReader.prototype, {
          cancel: { enumerable: true },
          read: { enumerable: true },
          releaseLock: { enumerable: true },
          closed: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStreamDefaultReader",
            configurable: true
          });
        }
        function IsReadableStreamDefaultReader(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_readRequests")) {
            return false;
          }
          return x2 instanceof ReadableStreamDefaultReader;
        }
        function ReadableStreamDefaultReaderRead(reader, readRequest) {
          const stream = reader._ownerReadableStream;
          stream._disturbed = true;
          if (stream._state === "closed") {
            readRequest._closeSteps();
          } else if (stream._state === "errored") {
            readRequest._errorSteps(stream._storedError);
          } else {
            stream._readableStreamController[PullSteps](readRequest);
          }
        }
        function defaultReaderBrandCheckException(name) {
          return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
        }
        const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
        }).prototype);
        class ReadableStreamAsyncIteratorImpl {
          constructor(reader, preventCancel) {
            this._ongoingPromise = void 0;
            this._isFinished = false;
            this._reader = reader;
            this._preventCancel = preventCancel;
          }
          next() {
            const nextSteps = () => this._nextSteps();
            this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
            return this._ongoingPromise;
          }
          return(value) {
            const returnSteps = () => this._returnSteps(value);
            return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
          }
          _nextSteps() {
            if (this._isFinished) {
              return Promise.resolve({ value: void 0, done: true });
            }
            const reader = this._reader;
            if (reader._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("iterate"));
            }
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve2, reject) => {
              resolvePromise = resolve2;
              rejectPromise = reject;
            });
            const readRequest = {
              _chunkSteps: (chunk) => {
                this._ongoingPromise = void 0;
                queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
              },
              _closeSteps: () => {
                this._ongoingPromise = void 0;
                this._isFinished = true;
                ReadableStreamReaderGenericRelease(reader);
                resolvePromise({ value: void 0, done: true });
              },
              _errorSteps: (reason) => {
                this._ongoingPromise = void 0;
                this._isFinished = true;
                ReadableStreamReaderGenericRelease(reader);
                rejectPromise(reason);
              }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
            return promise;
          }
          _returnSteps(value) {
            if (this._isFinished) {
              return Promise.resolve({ value, done: true });
            }
            this._isFinished = true;
            const reader = this._reader;
            if (reader._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("finish iterating"));
            }
            if (!this._preventCancel) {
              const result = ReadableStreamReaderGenericCancel(reader, value);
              ReadableStreamReaderGenericRelease(reader);
              return transformPromiseWith(result, () => ({ value, done: true }));
            }
            ReadableStreamReaderGenericRelease(reader);
            return promiseResolvedWith({ value, done: true });
          }
        }
        const ReadableStreamAsyncIteratorPrototype = {
          next() {
            if (!IsReadableStreamAsyncIterator(this)) {
              return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
            }
            return this._asyncIteratorImpl.next();
          },
          return(value) {
            if (!IsReadableStreamAsyncIterator(this)) {
              return promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
            }
            return this._asyncIteratorImpl.return(value);
          }
        };
        if (AsyncIteratorPrototype !== void 0) {
          Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
        }
        function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
          const reader = AcquireReadableStreamDefaultReader(stream);
          const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
          const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
          iterator._asyncIteratorImpl = impl;
          return iterator;
        }
        function IsReadableStreamAsyncIterator(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_asyncIteratorImpl")) {
            return false;
          }
          try {
            return x2._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
          } catch (_a4) {
            return false;
          }
        }
        function streamAsyncIteratorBrandCheckException(name) {
          return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
        }
        const NumberIsNaN = Number.isNaN || function(x2) {
          return x2 !== x2;
        };
        function CreateArrayFromList(elements) {
          return elements.slice();
        }
        function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
          new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
        }
        function TransferArrayBuffer(O) {
          return O;
        }
        function IsDetachedBuffer(O) {
          return false;
        }
        function ArrayBufferSlice(buffer, begin, end) {
          if (buffer.slice) {
            return buffer.slice(begin, end);
          }
          const length = end - begin;
          const slice = new ArrayBuffer(length);
          CopyDataBlockBytes(slice, 0, buffer, begin, length);
          return slice;
        }
        function IsNonNegativeNumber(v) {
          if (typeof v !== "number") {
            return false;
          }
          if (NumberIsNaN(v)) {
            return false;
          }
          if (v < 0) {
            return false;
          }
          return true;
        }
        function CloneAsUint8Array(O) {
          const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
          return new Uint8Array(buffer);
        }
        function DequeueValue(container) {
          const pair = container._queue.shift();
          container._queueTotalSize -= pair.size;
          if (container._queueTotalSize < 0) {
            container._queueTotalSize = 0;
          }
          return pair.value;
        }
        function EnqueueValueWithSize(container, value, size) {
          if (!IsNonNegativeNumber(size) || size === Infinity) {
            throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
          }
          container._queue.push({ value, size });
          container._queueTotalSize += size;
        }
        function PeekQueueValue(container) {
          const pair = container._queue.peek();
          return pair.value;
        }
        function ResetQueue(container) {
          container._queue = new SimpleQueue();
          container._queueTotalSize = 0;
        }
        class ReadableStreamBYOBRequest {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get view() {
            if (!IsReadableStreamBYOBRequest(this)) {
              throw byobRequestBrandCheckException("view");
            }
            return this._view;
          }
          respond(bytesWritten) {
            if (!IsReadableStreamBYOBRequest(this)) {
              throw byobRequestBrandCheckException("respond");
            }
            assertRequiredArgument(bytesWritten, 1, "respond");
            bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter");
            if (this._associatedReadableByteStreamController === void 0) {
              throw new TypeError("This BYOB request has been invalidated");
            }
            if (IsDetachedBuffer(this._view.buffer))
              ;
            ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
          }
          respondWithNewView(view) {
            if (!IsReadableStreamBYOBRequest(this)) {
              throw byobRequestBrandCheckException("respondWithNewView");
            }
            assertRequiredArgument(view, 1, "respondWithNewView");
            if (!ArrayBuffer.isView(view)) {
              throw new TypeError("You can only respond with array buffer views");
            }
            if (this._associatedReadableByteStreamController === void 0) {
              throw new TypeError("This BYOB request has been invalidated");
            }
            if (IsDetachedBuffer(view.buffer))
              ;
            ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
          }
        }
        Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
          respond: { enumerable: true },
          respondWithNewView: { enumerable: true },
          view: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStreamBYOBRequest",
            configurable: true
          });
        }
        class ReadableByteStreamController {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get byobRequest() {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("byobRequest");
            }
            return ReadableByteStreamControllerGetBYOBRequest(this);
          }
          get desiredSize() {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("desiredSize");
            }
            return ReadableByteStreamControllerGetDesiredSize(this);
          }
          close() {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("close");
            }
            if (this._closeRequested) {
              throw new TypeError("The stream has already been closed; do not close it again!");
            }
            const state = this._controlledReadableByteStream._state;
            if (state !== "readable") {
              throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
            }
            ReadableByteStreamControllerClose(this);
          }
          enqueue(chunk) {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("enqueue");
            }
            assertRequiredArgument(chunk, 1, "enqueue");
            if (!ArrayBuffer.isView(chunk)) {
              throw new TypeError("chunk must be an array buffer view");
            }
            if (chunk.byteLength === 0) {
              throw new TypeError("chunk must have non-zero byteLength");
            }
            if (chunk.buffer.byteLength === 0) {
              throw new TypeError(`chunk's buffer must have non-zero byteLength`);
            }
            if (this._closeRequested) {
              throw new TypeError("stream is closed or draining");
            }
            const state = this._controlledReadableByteStream._state;
            if (state !== "readable") {
              throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
            }
            ReadableByteStreamControllerEnqueue(this, chunk);
          }
          error(e2 = void 0) {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("error");
            }
            ReadableByteStreamControllerError(this, e2);
          }
          [CancelSteps](reason) {
            ReadableByteStreamControllerClearPendingPullIntos(this);
            ResetQueue(this);
            const result = this._cancelAlgorithm(reason);
            ReadableByteStreamControllerClearAlgorithms(this);
            return result;
          }
          [PullSteps](readRequest) {
            const stream = this._controlledReadableByteStream;
            if (this._queueTotalSize > 0) {
              const entry14 = this._queue.shift();
              this._queueTotalSize -= entry14.byteLength;
              ReadableByteStreamControllerHandleQueueDrain(this);
              const view = new Uint8Array(entry14.buffer, entry14.byteOffset, entry14.byteLength);
              readRequest._chunkSteps(view);
              return;
            }
            const autoAllocateChunkSize = this._autoAllocateChunkSize;
            if (autoAllocateChunkSize !== void 0) {
              let buffer;
              try {
                buffer = new ArrayBuffer(autoAllocateChunkSize);
              } catch (bufferE) {
                readRequest._errorSteps(bufferE);
                return;
              }
              const pullIntoDescriptor = {
                buffer,
                bufferByteLength: autoAllocateChunkSize,
                byteOffset: 0,
                byteLength: autoAllocateChunkSize,
                bytesFilled: 0,
                elementSize: 1,
                viewConstructor: Uint8Array,
                readerType: "default"
              };
              this._pendingPullIntos.push(pullIntoDescriptor);
            }
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableByteStreamControllerCallPullIfNeeded(this);
          }
        }
        Object.defineProperties(ReadableByteStreamController.prototype, {
          close: { enumerable: true },
          enqueue: { enumerable: true },
          error: { enumerable: true },
          byobRequest: { enumerable: true },
          desiredSize: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableByteStreamController",
            configurable: true
          });
        }
        function IsReadableByteStreamController(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_controlledReadableByteStream")) {
            return false;
          }
          return x2 instanceof ReadableByteStreamController;
        }
        function IsReadableStreamBYOBRequest(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_associatedReadableByteStreamController")) {
            return false;
          }
          return x2 instanceof ReadableStreamBYOBRequest;
        }
        function ReadableByteStreamControllerCallPullIfNeeded(controller) {
          const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
          if (!shouldPull) {
            return;
          }
          if (controller._pulling) {
            controller._pullAgain = true;
            return;
          }
          controller._pulling = true;
          const pullPromise = controller._pullAlgorithm();
          uponPromise(pullPromise, () => {
            controller._pulling = false;
            if (controller._pullAgain) {
              controller._pullAgain = false;
              ReadableByteStreamControllerCallPullIfNeeded(controller);
            }
          }, (e2) => {
            ReadableByteStreamControllerError(controller, e2);
          });
        }
        function ReadableByteStreamControllerClearPendingPullIntos(controller) {
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          controller._pendingPullIntos = new SimpleQueue();
        }
        function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
          let done = false;
          if (stream._state === "closed") {
            done = true;
          }
          const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
          if (pullIntoDescriptor.readerType === "default") {
            ReadableStreamFulfillReadRequest(stream, filledView, done);
          } else {
            ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
          }
        }
        function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
          const bytesFilled = pullIntoDescriptor.bytesFilled;
          const elementSize = pullIntoDescriptor.elementSize;
          return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
        }
        function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
          controller._queue.push({ buffer, byteOffset, byteLength });
          controller._queueTotalSize += byteLength;
        }
        function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
          const elementSize = pullIntoDescriptor.elementSize;
          const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
          const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
          const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
          const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
          let totalBytesToCopyRemaining = maxBytesToCopy;
          let ready = false;
          if (maxAlignedBytes > currentAlignedBytes) {
            totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
            ready = true;
          }
          const queue = controller._queue;
          while (totalBytesToCopyRemaining > 0) {
            const headOfQueue = queue.peek();
            const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
            const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
            if (headOfQueue.byteLength === bytesToCopy) {
              queue.shift();
            } else {
              headOfQueue.byteOffset += bytesToCopy;
              headOfQueue.byteLength -= bytesToCopy;
            }
            controller._queueTotalSize -= bytesToCopy;
            ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
            totalBytesToCopyRemaining -= bytesToCopy;
          }
          return ready;
        }
        function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
          pullIntoDescriptor.bytesFilled += size;
        }
        function ReadableByteStreamControllerHandleQueueDrain(controller) {
          if (controller._queueTotalSize === 0 && controller._closeRequested) {
            ReadableByteStreamControllerClearAlgorithms(controller);
            ReadableStreamClose(controller._controlledReadableByteStream);
          } else {
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }
        }
        function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
          if (controller._byobRequest === null) {
            return;
          }
          controller._byobRequest._associatedReadableByteStreamController = void 0;
          controller._byobRequest._view = null;
          controller._byobRequest = null;
        }
        function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
          while (controller._pendingPullIntos.length > 0) {
            if (controller._queueTotalSize === 0) {
              return;
            }
            const pullIntoDescriptor = controller._pendingPullIntos.peek();
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
              ReadableByteStreamControllerShiftPendingPullInto(controller);
              ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
            }
          }
        }
        function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
          const stream = controller._controlledReadableByteStream;
          let elementSize = 1;
          if (view.constructor !== DataView) {
            elementSize = view.constructor.BYTES_PER_ELEMENT;
          }
          const ctor = view.constructor;
          const buffer = TransferArrayBuffer(view.buffer);
          const pullIntoDescriptor = {
            buffer,
            bufferByteLength: buffer.byteLength,
            byteOffset: view.byteOffset,
            byteLength: view.byteLength,
            bytesFilled: 0,
            elementSize,
            viewConstructor: ctor,
            readerType: "byob"
          };
          if (controller._pendingPullIntos.length > 0) {
            controller._pendingPullIntos.push(pullIntoDescriptor);
            ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
            return;
          }
          if (stream._state === "closed") {
            const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
            readIntoRequest._closeSteps(emptyView);
            return;
          }
          if (controller._queueTotalSize > 0) {
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
              const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
              ReadableByteStreamControllerHandleQueueDrain(controller);
              readIntoRequest._chunkSteps(filledView);
              return;
            }
            if (controller._closeRequested) {
              const e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
              ReadableByteStreamControllerError(controller, e2);
              readIntoRequest._errorSteps(e2);
              return;
            }
          }
          controller._pendingPullIntos.push(pullIntoDescriptor);
          ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
        function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
          const stream = controller._controlledReadableByteStream;
          if (ReadableStreamHasBYOBReader(stream)) {
            while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
              const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
              ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
            }
          }
        }
        function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
          ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
          if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
            return;
          }
          ReadableByteStreamControllerShiftPendingPullInto(controller);
          const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
          if (remainderSize > 0) {
            const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
          }
          pullIntoDescriptor.bytesFilled -= remainderSize;
          ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
          ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
        }
        function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          const state = controller._controlledReadableByteStream._state;
          if (state === "closed") {
            ReadableByteStreamControllerRespondInClosedState(controller);
          } else {
            ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
          }
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
        function ReadableByteStreamControllerShiftPendingPullInto(controller) {
          const descriptor = controller._pendingPullIntos.shift();
          return descriptor;
        }
        function ReadableByteStreamControllerShouldCallPull(controller) {
          const stream = controller._controlledReadableByteStream;
          if (stream._state !== "readable") {
            return false;
          }
          if (controller._closeRequested) {
            return false;
          }
          if (!controller._started) {
            return false;
          }
          if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            return true;
          }
          if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            return true;
          }
          const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
          if (desiredSize > 0) {
            return true;
          }
          return false;
        }
        function ReadableByteStreamControllerClearAlgorithms(controller) {
          controller._pullAlgorithm = void 0;
          controller._cancelAlgorithm = void 0;
        }
        function ReadableByteStreamControllerClose(controller) {
          const stream = controller._controlledReadableByteStream;
          if (controller._closeRequested || stream._state !== "readable") {
            return;
          }
          if (controller._queueTotalSize > 0) {
            controller._closeRequested = true;
            return;
          }
          if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos.peek();
            if (firstPendingPullInto.bytesFilled > 0) {
              const e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
              ReadableByteStreamControllerError(controller, e2);
              throw e2;
            }
          }
          ReadableByteStreamControllerClearAlgorithms(controller);
          ReadableStreamClose(stream);
        }
        function ReadableByteStreamControllerEnqueue(controller, chunk) {
          const stream = controller._controlledReadableByteStream;
          if (controller._closeRequested || stream._state !== "readable") {
            return;
          }
          const buffer = chunk.buffer;
          const byteOffset = chunk.byteOffset;
          const byteLength = chunk.byteLength;
          const transferredBuffer = TransferArrayBuffer(buffer);
          if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos.peek();
            if (IsDetachedBuffer(firstPendingPullInto.buffer))
              ;
            firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
          }
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          if (ReadableStreamHasDefaultReader(stream)) {
            if (ReadableStreamGetNumReadRequests(stream) === 0) {
              ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            } else {
              if (controller._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerShiftPendingPullInto(controller);
              }
              const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
              ReadableStreamFulfillReadRequest(stream, transferredView, false);
            }
          } else if (ReadableStreamHasBYOBReader(stream)) {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
          } else {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
          }
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
        function ReadableByteStreamControllerError(controller, e2) {
          const stream = controller._controlledReadableByteStream;
          if (stream._state !== "readable") {
            return;
          }
          ReadableByteStreamControllerClearPendingPullIntos(controller);
          ResetQueue(controller);
          ReadableByteStreamControllerClearAlgorithms(controller);
          ReadableStreamError(stream, e2);
        }
        function ReadableByteStreamControllerGetBYOBRequest(controller) {
          if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
            const firstDescriptor = controller._pendingPullIntos.peek();
            const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
            const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
            SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
            controller._byobRequest = byobRequest;
          }
          return controller._byobRequest;
        }
        function ReadableByteStreamControllerGetDesiredSize(controller) {
          const state = controller._controlledReadableByteStream._state;
          if (state === "errored") {
            return null;
          }
          if (state === "closed") {
            return 0;
          }
          return controller._strategyHWM - controller._queueTotalSize;
        }
        function ReadableByteStreamControllerRespond(controller, bytesWritten) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          const state = controller._controlledReadableByteStream._state;
          if (state === "closed") {
            if (bytesWritten !== 0) {
              throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
            }
          } else {
            if (bytesWritten === 0) {
              throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
            }
            if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
              throw new RangeError("bytesWritten out of range");
            }
          }
          firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
          ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
        }
        function ReadableByteStreamControllerRespondWithNewView(controller, view) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          const state = controller._controlledReadableByteStream._state;
          if (state === "closed") {
            if (view.byteLength !== 0) {
              throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
            }
          } else {
            if (view.byteLength === 0) {
              throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
            }
          }
          if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
            throw new RangeError("The region specified by view does not match byobRequest");
          }
          if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
            throw new RangeError("The buffer of view has different capacity than byobRequest");
          }
          if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
            throw new RangeError("The region specified by view is larger than byobRequest");
          }
          const viewByteLength = view.byteLength;
          firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
          ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
        }
        function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
          controller._controlledReadableByteStream = stream;
          controller._pullAgain = false;
          controller._pulling = false;
          controller._byobRequest = null;
          controller._queue = controller._queueTotalSize = void 0;
          ResetQueue(controller);
          controller._closeRequested = false;
          controller._started = false;
          controller._strategyHWM = highWaterMark;
          controller._pullAlgorithm = pullAlgorithm;
          controller._cancelAlgorithm = cancelAlgorithm;
          controller._autoAllocateChunkSize = autoAllocateChunkSize;
          controller._pendingPullIntos = new SimpleQueue();
          stream._readableStreamController = controller;
          const startResult = startAlgorithm();
          uponPromise(promiseResolvedWith(startResult), () => {
            controller._started = true;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }, (r2) => {
            ReadableByteStreamControllerError(controller, r2);
          });
        }
        function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
          const controller = Object.create(ReadableByteStreamController.prototype);
          let startAlgorithm = () => void 0;
          let pullAlgorithm = () => promiseResolvedWith(void 0);
          let cancelAlgorithm = () => promiseResolvedWith(void 0);
          if (underlyingByteSource.start !== void 0) {
            startAlgorithm = () => underlyingByteSource.start(controller);
          }
          if (underlyingByteSource.pull !== void 0) {
            pullAlgorithm = () => underlyingByteSource.pull(controller);
          }
          if (underlyingByteSource.cancel !== void 0) {
            cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason);
          }
          const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
          if (autoAllocateChunkSize === 0) {
            throw new TypeError("autoAllocateChunkSize must be greater than 0");
          }
          SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
        }
        function SetUpReadableStreamBYOBRequest(request, controller, view) {
          request._associatedReadableByteStreamController = controller;
          request._view = view;
        }
        function byobRequestBrandCheckException(name) {
          return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
        }
        function byteStreamControllerBrandCheckException(name) {
          return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
        }
        function AcquireReadableStreamBYOBReader(stream) {
          return new ReadableStreamBYOBReader(stream);
        }
        function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
          stream._reader._readIntoRequests.push(readIntoRequest);
        }
        function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
          const reader = stream._reader;
          const readIntoRequest = reader._readIntoRequests.shift();
          if (done) {
            readIntoRequest._closeSteps(chunk);
          } else {
            readIntoRequest._chunkSteps(chunk);
          }
        }
        function ReadableStreamGetNumReadIntoRequests(stream) {
          return stream._reader._readIntoRequests.length;
        }
        function ReadableStreamHasBYOBReader(stream) {
          const reader = stream._reader;
          if (reader === void 0) {
            return false;
          }
          if (!IsReadableStreamBYOBReader(reader)) {
            return false;
          }
          return true;
        }
        class ReadableStreamBYOBReader {
          constructor(stream) {
            assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
            assertReadableStream(stream, "First parameter");
            if (IsReadableStreamLocked(stream)) {
              throw new TypeError("This stream has already been locked for exclusive reading by another reader");
            }
            if (!IsReadableByteStreamController(stream._readableStreamController)) {
              throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
            }
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readIntoRequests = new SimpleQueue();
          }
          get closed() {
            if (!IsReadableStreamBYOBReader(this)) {
              return promiseRejectedWith(byobReaderBrandCheckException("closed"));
            }
            return this._closedPromise;
          }
          cancel(reason = void 0) {
            if (!IsReadableStreamBYOBReader(this)) {
              return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
            }
            if (this._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("cancel"));
            }
            return ReadableStreamReaderGenericCancel(this, reason);
          }
          read(view) {
            if (!IsReadableStreamBYOBReader(this)) {
              return promiseRejectedWith(byobReaderBrandCheckException("read"));
            }
            if (!ArrayBuffer.isView(view)) {
              return promiseRejectedWith(new TypeError("view must be an array buffer view"));
            }
            if (view.byteLength === 0) {
              return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
            }
            if (view.buffer.byteLength === 0) {
              return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
            }
            if (IsDetachedBuffer(view.buffer))
              ;
            if (this._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("read from"));
            }
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve2, reject) => {
              resolvePromise = resolve2;
              rejectPromise = reject;
            });
            const readIntoRequest = {
              _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
              _closeSteps: (chunk) => resolvePromise({ value: chunk, done: true }),
              _errorSteps: (e2) => rejectPromise(e2)
            };
            ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
            return promise;
          }
          releaseLock() {
            if (!IsReadableStreamBYOBReader(this)) {
              throw byobReaderBrandCheckException("releaseLock");
            }
            if (this._ownerReadableStream === void 0) {
              return;
            }
            if (this._readIntoRequests.length > 0) {
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            }
            ReadableStreamReaderGenericRelease(this);
          }
        }
        Object.defineProperties(ReadableStreamBYOBReader.prototype, {
          cancel: { enumerable: true },
          read: { enumerable: true },
          releaseLock: { enumerable: true },
          closed: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStreamBYOBReader",
            configurable: true
          });
        }
        function IsReadableStreamBYOBReader(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_readIntoRequests")) {
            return false;
          }
          return x2 instanceof ReadableStreamBYOBReader;
        }
        function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
          const stream = reader._ownerReadableStream;
          stream._disturbed = true;
          if (stream._state === "errored") {
            readIntoRequest._errorSteps(stream._storedError);
          } else {
            ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
          }
        }
        function byobReaderBrandCheckException(name) {
          return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
        }
        function ExtractHighWaterMark(strategy, defaultHWM) {
          const { highWaterMark } = strategy;
          if (highWaterMark === void 0) {
            return defaultHWM;
          }
          if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
            throw new RangeError("Invalid highWaterMark");
          }
          return highWaterMark;
        }
        function ExtractSizeAlgorithm(strategy) {
          const { size } = strategy;
          if (!size) {
            return () => 1;
          }
          return size;
        }
        function convertQueuingStrategy(init, context) {
          assertDictionary(init, context);
          const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
          const size = init === null || init === void 0 ? void 0 : init.size;
          return {
            highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble(highWaterMark),
            size: size === void 0 ? void 0 : convertQueuingStrategySize(size, `${context} has member 'size' that`)
          };
        }
        function convertQueuingStrategySize(fn, context) {
          assertFunction(fn, context);
          return (chunk) => convertUnrestrictedDouble(fn(chunk));
        }
        function convertUnderlyingSink(original, context) {
          assertDictionary(original, context);
          const abort = original === null || original === void 0 ? void 0 : original.abort;
          const close = original === null || original === void 0 ? void 0 : original.close;
          const start = original === null || original === void 0 ? void 0 : original.start;
          const type = original === null || original === void 0 ? void 0 : original.type;
          const write = original === null || original === void 0 ? void 0 : original.write;
          return {
            abort: abort === void 0 ? void 0 : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
            close: close === void 0 ? void 0 : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
            start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
            write: write === void 0 ? void 0 : convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
            type
          };
        }
        function convertUnderlyingSinkAbortCallback(fn, original, context) {
          assertFunction(fn, context);
          return (reason) => promiseCall(fn, original, [reason]);
        }
        function convertUnderlyingSinkCloseCallback(fn, original, context) {
          assertFunction(fn, context);
          return () => promiseCall(fn, original, []);
        }
        function convertUnderlyingSinkStartCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => reflectCall(fn, original, [controller]);
        }
        function convertUnderlyingSinkWriteCallback(fn, original, context) {
          assertFunction(fn, context);
          return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
        }
        function assertWritableStream(x2, context) {
          if (!IsWritableStream(x2)) {
            throw new TypeError(`${context} is not a WritableStream.`);
          }
        }
        function isAbortSignal2(value) {
          if (typeof value !== "object" || value === null) {
            return false;
          }
          try {
            return typeof value.aborted === "boolean";
          } catch (_a4) {
            return false;
          }
        }
        const supportsAbortController = typeof AbortController === "function";
        function createAbortController() {
          if (supportsAbortController) {
            return new AbortController();
          }
          return void 0;
        }
        class WritableStream {
          constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
            if (rawUnderlyingSink === void 0) {
              rawUnderlyingSink = null;
            } else {
              assertObject(rawUnderlyingSink, "First parameter");
            }
            const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
            const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
            InitializeWritableStream(this);
            const type = underlyingSink.type;
            if (type !== void 0) {
              throw new RangeError("Invalid type is specified");
            }
            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            const highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
          }
          get locked() {
            if (!IsWritableStream(this)) {
              throw streamBrandCheckException$2("locked");
            }
            return IsWritableStreamLocked(this);
          }
          abort(reason = void 0) {
            if (!IsWritableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$2("abort"));
            }
            if (IsWritableStreamLocked(this)) {
              return promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer"));
            }
            return WritableStreamAbort(this, reason);
          }
          close() {
            if (!IsWritableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$2("close"));
            }
            if (IsWritableStreamLocked(this)) {
              return promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer"));
            }
            if (WritableStreamCloseQueuedOrInFlight(this)) {
              return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
            }
            return WritableStreamClose(this);
          }
          getWriter() {
            if (!IsWritableStream(this)) {
              throw streamBrandCheckException$2("getWriter");
            }
            return AcquireWritableStreamDefaultWriter(this);
          }
        }
        Object.defineProperties(WritableStream.prototype, {
          abort: { enumerable: true },
          close: { enumerable: true },
          getWriter: { enumerable: true },
          locked: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
            value: "WritableStream",
            configurable: true
          });
        }
        function AcquireWritableStreamDefaultWriter(stream) {
          return new WritableStreamDefaultWriter(stream);
        }
        function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
          const stream = Object.create(WritableStream.prototype);
          InitializeWritableStream(stream);
          const controller = Object.create(WritableStreamDefaultController.prototype);
          SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
          return stream;
        }
        function InitializeWritableStream(stream) {
          stream._state = "writable";
          stream._storedError = void 0;
          stream._writer = void 0;
          stream._writableStreamController = void 0;
          stream._writeRequests = new SimpleQueue();
          stream._inFlightWriteRequest = void 0;
          stream._closeRequest = void 0;
          stream._inFlightCloseRequest = void 0;
          stream._pendingAbortRequest = void 0;
          stream._backpressure = false;
        }
        function IsWritableStream(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_writableStreamController")) {
            return false;
          }
          return x2 instanceof WritableStream;
        }
        function IsWritableStreamLocked(stream) {
          if (stream._writer === void 0) {
            return false;
          }
          return true;
        }
        function WritableStreamAbort(stream, reason) {
          var _a4;
          if (stream._state === "closed" || stream._state === "errored") {
            return promiseResolvedWith(void 0);
          }
          stream._writableStreamController._abortReason = reason;
          (_a4 = stream._writableStreamController._abortController) === null || _a4 === void 0 ? void 0 : _a4.abort();
          const state = stream._state;
          if (state === "closed" || state === "errored") {
            return promiseResolvedWith(void 0);
          }
          if (stream._pendingAbortRequest !== void 0) {
            return stream._pendingAbortRequest._promise;
          }
          let wasAlreadyErroring = false;
          if (state === "erroring") {
            wasAlreadyErroring = true;
            reason = void 0;
          }
          const promise = newPromise((resolve2, reject) => {
            stream._pendingAbortRequest = {
              _promise: void 0,
              _resolve: resolve2,
              _reject: reject,
              _reason: reason,
              _wasAlreadyErroring: wasAlreadyErroring
            };
          });
          stream._pendingAbortRequest._promise = promise;
          if (!wasAlreadyErroring) {
            WritableStreamStartErroring(stream, reason);
          }
          return promise;
        }
        function WritableStreamClose(stream) {
          const state = stream._state;
          if (state === "closed" || state === "errored") {
            return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
          }
          const promise = newPromise((resolve2, reject) => {
            const closeRequest = {
              _resolve: resolve2,
              _reject: reject
            };
            stream._closeRequest = closeRequest;
          });
          const writer = stream._writer;
          if (writer !== void 0 && stream._backpressure && state === "writable") {
            defaultWriterReadyPromiseResolve(writer);
          }
          WritableStreamDefaultControllerClose(stream._writableStreamController);
          return promise;
        }
        function WritableStreamAddWriteRequest(stream) {
          const promise = newPromise((resolve2, reject) => {
            const writeRequest = {
              _resolve: resolve2,
              _reject: reject
            };
            stream._writeRequests.push(writeRequest);
          });
          return promise;
        }
        function WritableStreamDealWithRejection(stream, error2) {
          const state = stream._state;
          if (state === "writable") {
            WritableStreamStartErroring(stream, error2);
            return;
          }
          WritableStreamFinishErroring(stream);
        }
        function WritableStreamStartErroring(stream, reason) {
          const controller = stream._writableStreamController;
          stream._state = "erroring";
          stream._storedError = reason;
          const writer = stream._writer;
          if (writer !== void 0) {
            WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
          }
          if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
            WritableStreamFinishErroring(stream);
          }
        }
        function WritableStreamFinishErroring(stream) {
          stream._state = "errored";
          stream._writableStreamController[ErrorSteps]();
          const storedError = stream._storedError;
          stream._writeRequests.forEach((writeRequest) => {
            writeRequest._reject(storedError);
          });
          stream._writeRequests = new SimpleQueue();
          if (stream._pendingAbortRequest === void 0) {
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
          }
          const abortRequest = stream._pendingAbortRequest;
          stream._pendingAbortRequest = void 0;
          if (abortRequest._wasAlreadyErroring) {
            abortRequest._reject(storedError);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
          }
          const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
          uponPromise(promise, () => {
            abortRequest._resolve();
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          }, (reason) => {
            abortRequest._reject(reason);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          });
        }
        function WritableStreamFinishInFlightWrite(stream) {
          stream._inFlightWriteRequest._resolve(void 0);
          stream._inFlightWriteRequest = void 0;
        }
        function WritableStreamFinishInFlightWriteWithError(stream, error2) {
          stream._inFlightWriteRequest._reject(error2);
          stream._inFlightWriteRequest = void 0;
          WritableStreamDealWithRejection(stream, error2);
        }
        function WritableStreamFinishInFlightClose(stream) {
          stream._inFlightCloseRequest._resolve(void 0);
          stream._inFlightCloseRequest = void 0;
          const state = stream._state;
          if (state === "erroring") {
            stream._storedError = void 0;
            if (stream._pendingAbortRequest !== void 0) {
              stream._pendingAbortRequest._resolve();
              stream._pendingAbortRequest = void 0;
            }
          }
          stream._state = "closed";
          const writer = stream._writer;
          if (writer !== void 0) {
            defaultWriterClosedPromiseResolve(writer);
          }
        }
        function WritableStreamFinishInFlightCloseWithError(stream, error2) {
          stream._inFlightCloseRequest._reject(error2);
          stream._inFlightCloseRequest = void 0;
          if (stream._pendingAbortRequest !== void 0) {
            stream._pendingAbortRequest._reject(error2);
            stream._pendingAbortRequest = void 0;
          }
          WritableStreamDealWithRejection(stream, error2);
        }
        function WritableStreamCloseQueuedOrInFlight(stream) {
          if (stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0) {
            return false;
          }
          return true;
        }
        function WritableStreamHasOperationMarkedInFlight(stream) {
          if (stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0) {
            return false;
          }
          return true;
        }
        function WritableStreamMarkCloseRequestInFlight(stream) {
          stream._inFlightCloseRequest = stream._closeRequest;
          stream._closeRequest = void 0;
        }
        function WritableStreamMarkFirstWriteRequestInFlight(stream) {
          stream._inFlightWriteRequest = stream._writeRequests.shift();
        }
        function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
          if (stream._closeRequest !== void 0) {
            stream._closeRequest._reject(stream._storedError);
            stream._closeRequest = void 0;
          }
          const writer = stream._writer;
          if (writer !== void 0) {
            defaultWriterClosedPromiseReject(writer, stream._storedError);
          }
        }
        function WritableStreamUpdateBackpressure(stream, backpressure) {
          const writer = stream._writer;
          if (writer !== void 0 && backpressure !== stream._backpressure) {
            if (backpressure) {
              defaultWriterReadyPromiseReset(writer);
            } else {
              defaultWriterReadyPromiseResolve(writer);
            }
          }
          stream._backpressure = backpressure;
        }
        class WritableStreamDefaultWriter {
          constructor(stream) {
            assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
            assertWritableStream(stream, "First parameter");
            if (IsWritableStreamLocked(stream)) {
              throw new TypeError("This stream has already been locked for exclusive writing by another writer");
            }
            this._ownerWritableStream = stream;
            stream._writer = this;
            const state = stream._state;
            if (state === "writable") {
              if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
                defaultWriterReadyPromiseInitialize(this);
              } else {
                defaultWriterReadyPromiseInitializeAsResolved(this);
              }
              defaultWriterClosedPromiseInitialize(this);
            } else if (state === "erroring") {
              defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
              defaultWriterClosedPromiseInitialize(this);
            } else if (state === "closed") {
              defaultWriterReadyPromiseInitializeAsResolved(this);
              defaultWriterClosedPromiseInitializeAsResolved(this);
            } else {
              const storedError = stream._storedError;
              defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
              defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
            }
          }
          get closed() {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("closed"));
            }
            return this._closedPromise;
          }
          get desiredSize() {
            if (!IsWritableStreamDefaultWriter(this)) {
              throw defaultWriterBrandCheckException("desiredSize");
            }
            if (this._ownerWritableStream === void 0) {
              throw defaultWriterLockException("desiredSize");
            }
            return WritableStreamDefaultWriterGetDesiredSize(this);
          }
          get ready() {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("ready"));
            }
            return this._readyPromise;
          }
          abort(reason = void 0) {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("abort"));
            }
            if (this._ownerWritableStream === void 0) {
              return promiseRejectedWith(defaultWriterLockException("abort"));
            }
            return WritableStreamDefaultWriterAbort(this, reason);
          }
          close() {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("close"));
            }
            const stream = this._ownerWritableStream;
            if (stream === void 0) {
              return promiseRejectedWith(defaultWriterLockException("close"));
            }
            if (WritableStreamCloseQueuedOrInFlight(stream)) {
              return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
            }
            return WritableStreamDefaultWriterClose(this);
          }
          releaseLock() {
            if (!IsWritableStreamDefaultWriter(this)) {
              throw defaultWriterBrandCheckException("releaseLock");
            }
            const stream = this._ownerWritableStream;
            if (stream === void 0) {
              return;
            }
            WritableStreamDefaultWriterRelease(this);
          }
          write(chunk = void 0) {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("write"));
            }
            if (this._ownerWritableStream === void 0) {
              return promiseRejectedWith(defaultWriterLockException("write to"));
            }
            return WritableStreamDefaultWriterWrite(this, chunk);
          }
        }
        Object.defineProperties(WritableStreamDefaultWriter.prototype, {
          abort: { enumerable: true },
          close: { enumerable: true },
          releaseLock: { enumerable: true },
          write: { enumerable: true },
          closed: { enumerable: true },
          desiredSize: { enumerable: true },
          ready: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
            value: "WritableStreamDefaultWriter",
            configurable: true
          });
        }
        function IsWritableStreamDefaultWriter(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_ownerWritableStream")) {
            return false;
          }
          return x2 instanceof WritableStreamDefaultWriter;
        }
        function WritableStreamDefaultWriterAbort(writer, reason) {
          const stream = writer._ownerWritableStream;
          return WritableStreamAbort(stream, reason);
        }
        function WritableStreamDefaultWriterClose(writer) {
          const stream = writer._ownerWritableStream;
          return WritableStreamClose(stream);
        }
        function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
          const stream = writer._ownerWritableStream;
          const state = stream._state;
          if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
            return promiseResolvedWith(void 0);
          }
          if (state === "errored") {
            return promiseRejectedWith(stream._storedError);
          }
          return WritableStreamDefaultWriterClose(writer);
        }
        function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error2) {
          if (writer._closedPromiseState === "pending") {
            defaultWriterClosedPromiseReject(writer, error2);
          } else {
            defaultWriterClosedPromiseResetToRejected(writer, error2);
          }
        }
        function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error2) {
          if (writer._readyPromiseState === "pending") {
            defaultWriterReadyPromiseReject(writer, error2);
          } else {
            defaultWriterReadyPromiseResetToRejected(writer, error2);
          }
        }
        function WritableStreamDefaultWriterGetDesiredSize(writer) {
          const stream = writer._ownerWritableStream;
          const state = stream._state;
          if (state === "errored" || state === "erroring") {
            return null;
          }
          if (state === "closed") {
            return 0;
          }
          return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
        }
        function WritableStreamDefaultWriterRelease(writer) {
          const stream = writer._ownerWritableStream;
          const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
          WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
          WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
          stream._writer = void 0;
          writer._ownerWritableStream = void 0;
        }
        function WritableStreamDefaultWriterWrite(writer, chunk) {
          const stream = writer._ownerWritableStream;
          const controller = stream._writableStreamController;
          const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
          if (stream !== writer._ownerWritableStream) {
            return promiseRejectedWith(defaultWriterLockException("write to"));
          }
          const state = stream._state;
          if (state === "errored") {
            return promiseRejectedWith(stream._storedError);
          }
          if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
            return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
          }
          if (state === "erroring") {
            return promiseRejectedWith(stream._storedError);
          }
          const promise = WritableStreamAddWriteRequest(stream);
          WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
          return promise;
        }
        const closeSentinel = {};
        class WritableStreamDefaultController {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get abortReason() {
            if (!IsWritableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$2("abortReason");
            }
            return this._abortReason;
          }
          get signal() {
            if (!IsWritableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$2("signal");
            }
            if (this._abortController === void 0) {
              throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
            }
            return this._abortController.signal;
          }
          error(e2 = void 0) {
            if (!IsWritableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$2("error");
            }
            const state = this._controlledWritableStream._state;
            if (state !== "writable") {
              return;
            }
            WritableStreamDefaultControllerError(this, e2);
          }
          [AbortSteps](reason) {
            const result = this._abortAlgorithm(reason);
            WritableStreamDefaultControllerClearAlgorithms(this);
            return result;
          }
          [ErrorSteps]() {
            ResetQueue(this);
          }
        }
        Object.defineProperties(WritableStreamDefaultController.prototype, {
          abortReason: { enumerable: true },
          signal: { enumerable: true },
          error: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
            value: "WritableStreamDefaultController",
            configurable: true
          });
        }
        function IsWritableStreamDefaultController(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_controlledWritableStream")) {
            return false;
          }
          return x2 instanceof WritableStreamDefaultController;
        }
        function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
          controller._controlledWritableStream = stream;
          stream._writableStreamController = controller;
          controller._queue = void 0;
          controller._queueTotalSize = void 0;
          ResetQueue(controller);
          controller._abortReason = void 0;
          controller._abortController = createAbortController();
          controller._started = false;
          controller._strategySizeAlgorithm = sizeAlgorithm;
          controller._strategyHWM = highWaterMark;
          controller._writeAlgorithm = writeAlgorithm;
          controller._closeAlgorithm = closeAlgorithm;
          controller._abortAlgorithm = abortAlgorithm;
          const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
          WritableStreamUpdateBackpressure(stream, backpressure);
          const startResult = startAlgorithm();
          const startPromise = promiseResolvedWith(startResult);
          uponPromise(startPromise, () => {
            controller._started = true;
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          }, (r2) => {
            controller._started = true;
            WritableStreamDealWithRejection(stream, r2);
          });
        }
        function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
          const controller = Object.create(WritableStreamDefaultController.prototype);
          let startAlgorithm = () => void 0;
          let writeAlgorithm = () => promiseResolvedWith(void 0);
          let closeAlgorithm = () => promiseResolvedWith(void 0);
          let abortAlgorithm = () => promiseResolvedWith(void 0);
          if (underlyingSink.start !== void 0) {
            startAlgorithm = () => underlyingSink.start(controller);
          }
          if (underlyingSink.write !== void 0) {
            writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller);
          }
          if (underlyingSink.close !== void 0) {
            closeAlgorithm = () => underlyingSink.close();
          }
          if (underlyingSink.abort !== void 0) {
            abortAlgorithm = (reason) => underlyingSink.abort(reason);
          }
          SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
        }
        function WritableStreamDefaultControllerClearAlgorithms(controller) {
          controller._writeAlgorithm = void 0;
          controller._closeAlgorithm = void 0;
          controller._abortAlgorithm = void 0;
          controller._strategySizeAlgorithm = void 0;
        }
        function WritableStreamDefaultControllerClose(controller) {
          EnqueueValueWithSize(controller, closeSentinel, 0);
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }
        function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
          try {
            return controller._strategySizeAlgorithm(chunk);
          } catch (chunkSizeE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
            return 1;
          }
        }
        function WritableStreamDefaultControllerGetDesiredSize(controller) {
          return controller._strategyHWM - controller._queueTotalSize;
        }
        function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
          try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
          } catch (enqueueE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
            return;
          }
          const stream = controller._controlledWritableStream;
          if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
          }
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }
        function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
          const stream = controller._controlledWritableStream;
          if (!controller._started) {
            return;
          }
          if (stream._inFlightWriteRequest !== void 0) {
            return;
          }
          const state = stream._state;
          if (state === "erroring") {
            WritableStreamFinishErroring(stream);
            return;
          }
          if (controller._queue.length === 0) {
            return;
          }
          const value = PeekQueueValue(controller);
          if (value === closeSentinel) {
            WritableStreamDefaultControllerProcessClose(controller);
          } else {
            WritableStreamDefaultControllerProcessWrite(controller, value);
          }
        }
        function WritableStreamDefaultControllerErrorIfNeeded(controller, error2) {
          if (controller._controlledWritableStream._state === "writable") {
            WritableStreamDefaultControllerError(controller, error2);
          }
        }
        function WritableStreamDefaultControllerProcessClose(controller) {
          const stream = controller._controlledWritableStream;
          WritableStreamMarkCloseRequestInFlight(stream);
          DequeueValue(controller);
          const sinkClosePromise = controller._closeAlgorithm();
          WritableStreamDefaultControllerClearAlgorithms(controller);
          uponPromise(sinkClosePromise, () => {
            WritableStreamFinishInFlightClose(stream);
          }, (reason) => {
            WritableStreamFinishInFlightCloseWithError(stream, reason);
          });
        }
        function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
          const stream = controller._controlledWritableStream;
          WritableStreamMarkFirstWriteRequestInFlight(stream);
          const sinkWritePromise = controller._writeAlgorithm(chunk);
          uponPromise(sinkWritePromise, () => {
            WritableStreamFinishInFlightWrite(stream);
            const state = stream._state;
            DequeueValue(controller);
            if (!WritableStreamCloseQueuedOrInFlight(stream) && state === "writable") {
              const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
              WritableStreamUpdateBackpressure(stream, backpressure);
            }
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          }, (reason) => {
            if (stream._state === "writable") {
              WritableStreamDefaultControllerClearAlgorithms(controller);
            }
            WritableStreamFinishInFlightWriteWithError(stream, reason);
          });
        }
        function WritableStreamDefaultControllerGetBackpressure(controller) {
          const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
          return desiredSize <= 0;
        }
        function WritableStreamDefaultControllerError(controller, error2) {
          const stream = controller._controlledWritableStream;
          WritableStreamDefaultControllerClearAlgorithms(controller);
          WritableStreamStartErroring(stream, error2);
        }
        function streamBrandCheckException$2(name) {
          return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
        }
        function defaultControllerBrandCheckException$2(name) {
          return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
        }
        function defaultWriterBrandCheckException(name) {
          return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
        }
        function defaultWriterLockException(name) {
          return new TypeError("Cannot " + name + " a stream using a released writer");
        }
        function defaultWriterClosedPromiseInitialize(writer) {
          writer._closedPromise = newPromise((resolve2, reject) => {
            writer._closedPromise_resolve = resolve2;
            writer._closedPromise_reject = reject;
            writer._closedPromiseState = "pending";
          });
        }
        function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
          defaultWriterClosedPromiseInitialize(writer);
          defaultWriterClosedPromiseReject(writer, reason);
        }
        function defaultWriterClosedPromiseInitializeAsResolved(writer) {
          defaultWriterClosedPromiseInitialize(writer);
          defaultWriterClosedPromiseResolve(writer);
        }
        function defaultWriterClosedPromiseReject(writer, reason) {
          if (writer._closedPromise_reject === void 0) {
            return;
          }
          setPromiseIsHandledToTrue(writer._closedPromise);
          writer._closedPromise_reject(reason);
          writer._closedPromise_resolve = void 0;
          writer._closedPromise_reject = void 0;
          writer._closedPromiseState = "rejected";
        }
        function defaultWriterClosedPromiseResetToRejected(writer, reason) {
          defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
        }
        function defaultWriterClosedPromiseResolve(writer) {
          if (writer._closedPromise_resolve === void 0) {
            return;
          }
          writer._closedPromise_resolve(void 0);
          writer._closedPromise_resolve = void 0;
          writer._closedPromise_reject = void 0;
          writer._closedPromiseState = "resolved";
        }
        function defaultWriterReadyPromiseInitialize(writer) {
          writer._readyPromise = newPromise((resolve2, reject) => {
            writer._readyPromise_resolve = resolve2;
            writer._readyPromise_reject = reject;
          });
          writer._readyPromiseState = "pending";
        }
        function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
          defaultWriterReadyPromiseInitialize(writer);
          defaultWriterReadyPromiseReject(writer, reason);
        }
        function defaultWriterReadyPromiseInitializeAsResolved(writer) {
          defaultWriterReadyPromiseInitialize(writer);
          defaultWriterReadyPromiseResolve(writer);
        }
        function defaultWriterReadyPromiseReject(writer, reason) {
          if (writer._readyPromise_reject === void 0) {
            return;
          }
          setPromiseIsHandledToTrue(writer._readyPromise);
          writer._readyPromise_reject(reason);
          writer._readyPromise_resolve = void 0;
          writer._readyPromise_reject = void 0;
          writer._readyPromiseState = "rejected";
        }
        function defaultWriterReadyPromiseReset(writer) {
          defaultWriterReadyPromiseInitialize(writer);
        }
        function defaultWriterReadyPromiseResetToRejected(writer, reason) {
          defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
        }
        function defaultWriterReadyPromiseResolve(writer) {
          if (writer._readyPromise_resolve === void 0) {
            return;
          }
          writer._readyPromise_resolve(void 0);
          writer._readyPromise_resolve = void 0;
          writer._readyPromise_reject = void 0;
          writer._readyPromiseState = "fulfilled";
        }
        const NativeDOMException = typeof DOMException !== "undefined" ? DOMException : void 0;
        function isDOMExceptionConstructor(ctor) {
          if (!(typeof ctor === "function" || typeof ctor === "object")) {
            return false;
          }
          try {
            new ctor();
            return true;
          } catch (_a4) {
            return false;
          }
        }
        function createDOMExceptionPolyfill() {
          const ctor = function DOMException2(message, name) {
            this.message = message || "";
            this.name = name || "Error";
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, this.constructor);
            }
          };
          ctor.prototype = Object.create(Error.prototype);
          Object.defineProperty(ctor.prototype, "constructor", { value: ctor, writable: true, configurable: true });
          return ctor;
        }
        const DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
        function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
          const reader = AcquireReadableStreamDefaultReader(source);
          const writer = AcquireWritableStreamDefaultWriter(dest);
          source._disturbed = true;
          let shuttingDown = false;
          let currentWrite = promiseResolvedWith(void 0);
          return newPromise((resolve2, reject) => {
            let abortAlgorithm;
            if (signal !== void 0) {
              abortAlgorithm = () => {
                const error2 = new DOMException$1("Aborted", "AbortError");
                const actions = [];
                if (!preventAbort) {
                  actions.push(() => {
                    if (dest._state === "writable") {
                      return WritableStreamAbort(dest, error2);
                    }
                    return promiseResolvedWith(void 0);
                  });
                }
                if (!preventCancel) {
                  actions.push(() => {
                    if (source._state === "readable") {
                      return ReadableStreamCancel(source, error2);
                    }
                    return promiseResolvedWith(void 0);
                  });
                }
                shutdownWithAction(() => Promise.all(actions.map((action) => action())), true, error2);
              };
              if (signal.aborted) {
                abortAlgorithm();
                return;
              }
              signal.addEventListener("abort", abortAlgorithm);
            }
            function pipeLoop() {
              return newPromise((resolveLoop, rejectLoop) => {
                function next(done) {
                  if (done) {
                    resolveLoop();
                  } else {
                    PerformPromiseThen(pipeStep(), next, rejectLoop);
                  }
                }
                next(false);
              });
            }
            function pipeStep() {
              if (shuttingDown) {
                return promiseResolvedWith(true);
              }
              return PerformPromiseThen(writer._readyPromise, () => {
                return newPromise((resolveRead, rejectRead) => {
                  ReadableStreamDefaultReaderRead(reader, {
                    _chunkSteps: (chunk) => {
                      currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), void 0, noop4);
                      resolveRead(false);
                    },
                    _closeSteps: () => resolveRead(true),
                    _errorSteps: rejectRead
                  });
                });
              });
            }
            isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
              if (!preventAbort) {
                shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
              } else {
                shutdown(true, storedError);
              }
            });
            isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
              if (!preventCancel) {
                shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
              } else {
                shutdown(true, storedError);
              }
            });
            isOrBecomesClosed(source, reader._closedPromise, () => {
              if (!preventClose) {
                shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
              } else {
                shutdown();
              }
            });
            if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
              const destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
              if (!preventCancel) {
                shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
              } else {
                shutdown(true, destClosed);
              }
            }
            setPromiseIsHandledToTrue(pipeLoop());
            function waitForWritesToFinish() {
              const oldCurrentWrite = currentWrite;
              return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0);
            }
            function isOrBecomesErrored(stream, promise, action) {
              if (stream._state === "errored") {
                action(stream._storedError);
              } else {
                uponRejection(promise, action);
              }
            }
            function isOrBecomesClosed(stream, promise, action) {
              if (stream._state === "closed") {
                action();
              } else {
                uponFulfillment(promise, action);
              }
            }
            function shutdownWithAction(action, originalIsError, originalError) {
              if (shuttingDown) {
                return;
              }
              shuttingDown = true;
              if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
                uponFulfillment(waitForWritesToFinish(), doTheRest);
              } else {
                doTheRest();
              }
              function doTheRest() {
                uponPromise(action(), () => finalize(originalIsError, originalError), (newError) => finalize(true, newError));
              }
            }
            function shutdown(isError, error2) {
              if (shuttingDown) {
                return;
              }
              shuttingDown = true;
              if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
                uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error2));
              } else {
                finalize(isError, error2);
              }
            }
            function finalize(isError, error2) {
              WritableStreamDefaultWriterRelease(writer);
              ReadableStreamReaderGenericRelease(reader);
              if (signal !== void 0) {
                signal.removeEventListener("abort", abortAlgorithm);
              }
              if (isError) {
                reject(error2);
              } else {
                resolve2(void 0);
              }
            }
          });
        }
        class ReadableStreamDefaultController {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get desiredSize() {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1("desiredSize");
            }
            return ReadableStreamDefaultControllerGetDesiredSize(this);
          }
          close() {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1("close");
            }
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
              throw new TypeError("The stream is not in a state that permits close");
            }
            ReadableStreamDefaultControllerClose(this);
          }
          enqueue(chunk = void 0) {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1("enqueue");
            }
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
              throw new TypeError("The stream is not in a state that permits enqueue");
            }
            return ReadableStreamDefaultControllerEnqueue(this, chunk);
          }
          error(e2 = void 0) {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1("error");
            }
            ReadableStreamDefaultControllerError(this, e2);
          }
          [CancelSteps](reason) {
            ResetQueue(this);
            const result = this._cancelAlgorithm(reason);
            ReadableStreamDefaultControllerClearAlgorithms(this);
            return result;
          }
          [PullSteps](readRequest) {
            const stream = this._controlledReadableStream;
            if (this._queue.length > 0) {
              const chunk = DequeueValue(this);
              if (this._closeRequested && this._queue.length === 0) {
                ReadableStreamDefaultControllerClearAlgorithms(this);
                ReadableStreamClose(stream);
              } else {
                ReadableStreamDefaultControllerCallPullIfNeeded(this);
              }
              readRequest._chunkSteps(chunk);
            } else {
              ReadableStreamAddReadRequest(stream, readRequest);
              ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
          }
        }
        Object.defineProperties(ReadableStreamDefaultController.prototype, {
          close: { enumerable: true },
          enqueue: { enumerable: true },
          error: { enumerable: true },
          desiredSize: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStreamDefaultController",
            configurable: true
          });
        }
        function IsReadableStreamDefaultController(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_controlledReadableStream")) {
            return false;
          }
          return x2 instanceof ReadableStreamDefaultController;
        }
        function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
          const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
          if (!shouldPull) {
            return;
          }
          if (controller._pulling) {
            controller._pullAgain = true;
            return;
          }
          controller._pulling = true;
          const pullPromise = controller._pullAlgorithm();
          uponPromise(pullPromise, () => {
            controller._pulling = false;
            if (controller._pullAgain) {
              controller._pullAgain = false;
              ReadableStreamDefaultControllerCallPullIfNeeded(controller);
            }
          }, (e2) => {
            ReadableStreamDefaultControllerError(controller, e2);
          });
        }
        function ReadableStreamDefaultControllerShouldCallPull(controller) {
          const stream = controller._controlledReadableStream;
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return false;
          }
          if (!controller._started) {
            return false;
          }
          if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            return true;
          }
          const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
          if (desiredSize > 0) {
            return true;
          }
          return false;
        }
        function ReadableStreamDefaultControllerClearAlgorithms(controller) {
          controller._pullAlgorithm = void 0;
          controller._cancelAlgorithm = void 0;
          controller._strategySizeAlgorithm = void 0;
        }
        function ReadableStreamDefaultControllerClose(controller) {
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return;
          }
          const stream = controller._controlledReadableStream;
          controller._closeRequested = true;
          if (controller._queue.length === 0) {
            ReadableStreamDefaultControllerClearAlgorithms(controller);
            ReadableStreamClose(stream);
          }
        }
        function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return;
          }
          const stream = controller._controlledReadableStream;
          if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            ReadableStreamFulfillReadRequest(stream, chunk, false);
          } else {
            let chunkSize;
            try {
              chunkSize = controller._strategySizeAlgorithm(chunk);
            } catch (chunkSizeE) {
              ReadableStreamDefaultControllerError(controller, chunkSizeE);
              throw chunkSizeE;
            }
            try {
              EnqueueValueWithSize(controller, chunk, chunkSize);
            } catch (enqueueE) {
              ReadableStreamDefaultControllerError(controller, enqueueE);
              throw enqueueE;
            }
          }
          ReadableStreamDefaultControllerCallPullIfNeeded(controller);
        }
        function ReadableStreamDefaultControllerError(controller, e2) {
          const stream = controller._controlledReadableStream;
          if (stream._state !== "readable") {
            return;
          }
          ResetQueue(controller);
          ReadableStreamDefaultControllerClearAlgorithms(controller);
          ReadableStreamError(stream, e2);
        }
        function ReadableStreamDefaultControllerGetDesiredSize(controller) {
          const state = controller._controlledReadableStream._state;
          if (state === "errored") {
            return null;
          }
          if (state === "closed") {
            return 0;
          }
          return controller._strategyHWM - controller._queueTotalSize;
        }
        function ReadableStreamDefaultControllerHasBackpressure(controller) {
          if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
            return false;
          }
          return true;
        }
        function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
          const state = controller._controlledReadableStream._state;
          if (!controller._closeRequested && state === "readable") {
            return true;
          }
          return false;
        }
        function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
          controller._controlledReadableStream = stream;
          controller._queue = void 0;
          controller._queueTotalSize = void 0;
          ResetQueue(controller);
          controller._started = false;
          controller._closeRequested = false;
          controller._pullAgain = false;
          controller._pulling = false;
          controller._strategySizeAlgorithm = sizeAlgorithm;
          controller._strategyHWM = highWaterMark;
          controller._pullAlgorithm = pullAlgorithm;
          controller._cancelAlgorithm = cancelAlgorithm;
          stream._readableStreamController = controller;
          const startResult = startAlgorithm();
          uponPromise(promiseResolvedWith(startResult), () => {
            controller._started = true;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
          }, (r2) => {
            ReadableStreamDefaultControllerError(controller, r2);
          });
        }
        function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
          const controller = Object.create(ReadableStreamDefaultController.prototype);
          let startAlgorithm = () => void 0;
          let pullAlgorithm = () => promiseResolvedWith(void 0);
          let cancelAlgorithm = () => promiseResolvedWith(void 0);
          if (underlyingSource.start !== void 0) {
            startAlgorithm = () => underlyingSource.start(controller);
          }
          if (underlyingSource.pull !== void 0) {
            pullAlgorithm = () => underlyingSource.pull(controller);
          }
          if (underlyingSource.cancel !== void 0) {
            cancelAlgorithm = (reason) => underlyingSource.cancel(reason);
          }
          SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
        }
        function defaultControllerBrandCheckException$1(name) {
          return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
        }
        function ReadableStreamTee(stream, cloneForBranch2) {
          if (IsReadableByteStreamController(stream._readableStreamController)) {
            return ReadableByteStreamTee(stream);
          }
          return ReadableStreamDefaultTee(stream);
        }
        function ReadableStreamDefaultTee(stream, cloneForBranch2) {
          const reader = AcquireReadableStreamDefaultReader(stream);
          let reading = false;
          let readAgain = false;
          let canceled1 = false;
          let canceled2 = false;
          let reason1;
          let reason2;
          let branch1;
          let branch2;
          let resolveCancelPromise;
          const cancelPromise = newPromise((resolve2) => {
            resolveCancelPromise = resolve2;
          });
          function pullAlgorithm() {
            if (reading) {
              readAgain = true;
              return promiseResolvedWith(void 0);
            }
            reading = true;
            const readRequest = {
              _chunkSteps: (chunk) => {
                queueMicrotask(() => {
                  readAgain = false;
                  const chunk1 = chunk;
                  const chunk2 = chunk;
                  if (!canceled1) {
                    ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
                  }
                  if (!canceled2) {
                    ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
                  }
                  reading = false;
                  if (readAgain) {
                    pullAlgorithm();
                  }
                });
              },
              _closeSteps: () => {
                reading = false;
                if (!canceled1) {
                  ReadableStreamDefaultControllerClose(branch1._readableStreamController);
                }
                if (!canceled2) {
                  ReadableStreamDefaultControllerClose(branch2._readableStreamController);
                }
                if (!canceled1 || !canceled2) {
                  resolveCancelPromise(void 0);
                }
              },
              _errorSteps: () => {
                reading = false;
              }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
            return promiseResolvedWith(void 0);
          }
          function cancel1Algorithm(reason) {
            canceled1 = true;
            reason1 = reason;
            if (canceled2) {
              const compositeReason = CreateArrayFromList([reason1, reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
          }
          function cancel2Algorithm(reason) {
            canceled2 = true;
            reason2 = reason;
            if (canceled1) {
              const compositeReason = CreateArrayFromList([reason1, reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
          }
          function startAlgorithm() {
          }
          branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
          branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
          uponRejection(reader._closedPromise, (r2) => {
            ReadableStreamDefaultControllerError(branch1._readableStreamController, r2);
            ReadableStreamDefaultControllerError(branch2._readableStreamController, r2);
            if (!canceled1 || !canceled2) {
              resolveCancelPromise(void 0);
            }
          });
          return [branch1, branch2];
        }
        function ReadableByteStreamTee(stream) {
          let reader = AcquireReadableStreamDefaultReader(stream);
          let reading = false;
          let readAgainForBranch1 = false;
          let readAgainForBranch2 = false;
          let canceled1 = false;
          let canceled2 = false;
          let reason1;
          let reason2;
          let branch1;
          let branch2;
          let resolveCancelPromise;
          const cancelPromise = newPromise((resolve2) => {
            resolveCancelPromise = resolve2;
          });
          function forwardReaderError(thisReader) {
            uponRejection(thisReader._closedPromise, (r2) => {
              if (thisReader !== reader) {
                return;
              }
              ReadableByteStreamControllerError(branch1._readableStreamController, r2);
              ReadableByteStreamControllerError(branch2._readableStreamController, r2);
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            });
          }
          function pullWithDefaultReader() {
            if (IsReadableStreamBYOBReader(reader)) {
              ReadableStreamReaderGenericRelease(reader);
              reader = AcquireReadableStreamDefaultReader(stream);
              forwardReaderError(reader);
            }
            const readRequest = {
              _chunkSteps: (chunk) => {
                queueMicrotask(() => {
                  readAgainForBranch1 = false;
                  readAgainForBranch2 = false;
                  const chunk1 = chunk;
                  let chunk2 = chunk;
                  if (!canceled1 && !canceled2) {
                    try {
                      chunk2 = CloneAsUint8Array(chunk);
                    } catch (cloneE) {
                      ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                      ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                      resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                      return;
                    }
                  }
                  if (!canceled1) {
                    ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
                  }
                  if (!canceled2) {
                    ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
                  }
                  reading = false;
                  if (readAgainForBranch1) {
                    pull1Algorithm();
                  } else if (readAgainForBranch2) {
                    pull2Algorithm();
                  }
                });
              },
              _closeSteps: () => {
                reading = false;
                if (!canceled1) {
                  ReadableByteStreamControllerClose(branch1._readableStreamController);
                }
                if (!canceled2) {
                  ReadableByteStreamControllerClose(branch2._readableStreamController);
                }
                if (branch1._readableStreamController._pendingPullIntos.length > 0) {
                  ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
                }
                if (branch2._readableStreamController._pendingPullIntos.length > 0) {
                  ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
                }
                if (!canceled1 || !canceled2) {
                  resolveCancelPromise(void 0);
                }
              },
              _errorSteps: () => {
                reading = false;
              }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
          }
          function pullWithBYOBReader(view, forBranch2) {
            if (IsReadableStreamDefaultReader(reader)) {
              ReadableStreamReaderGenericRelease(reader);
              reader = AcquireReadableStreamBYOBReader(stream);
              forwardReaderError(reader);
            }
            const byobBranch = forBranch2 ? branch2 : branch1;
            const otherBranch = forBranch2 ? branch1 : branch2;
            const readIntoRequest = {
              _chunkSteps: (chunk) => {
                queueMicrotask(() => {
                  readAgainForBranch1 = false;
                  readAgainForBranch2 = false;
                  const byobCanceled = forBranch2 ? canceled2 : canceled1;
                  const otherCanceled = forBranch2 ? canceled1 : canceled2;
                  if (!otherCanceled) {
                    let clonedChunk;
                    try {
                      clonedChunk = CloneAsUint8Array(chunk);
                    } catch (cloneE) {
                      ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                      ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                      resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                      return;
                    }
                    if (!byobCanceled) {
                      ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                    }
                    ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                  } else if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                  }
                  reading = false;
                  if (readAgainForBranch1) {
                    pull1Algorithm();
                  } else if (readAgainForBranch2) {
                    pull2Algorithm();
                  }
                });
              },
              _closeSteps: (chunk) => {
                reading = false;
                const byobCanceled = forBranch2 ? canceled2 : canceled1;
                const otherCanceled = forBranch2 ? canceled1 : canceled2;
                if (!byobCanceled) {
                  ReadableByteStreamControllerClose(byobBranch._readableStreamController);
                }
                if (!otherCanceled) {
                  ReadableByteStreamControllerClose(otherBranch._readableStreamController);
                }
                if (chunk !== void 0) {
                  if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                  }
                  if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                    ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
                  }
                }
                if (!byobCanceled || !otherCanceled) {
                  resolveCancelPromise(void 0);
                }
              },
              _errorSteps: () => {
                reading = false;
              }
            };
            ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
          }
          function pull1Algorithm() {
            if (reading) {
              readAgainForBranch1 = true;
              return promiseResolvedWith(void 0);
            }
            reading = true;
            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
            if (byobRequest === null) {
              pullWithDefaultReader();
            } else {
              pullWithBYOBReader(byobRequest._view, false);
            }
            return promiseResolvedWith(void 0);
          }
          function pull2Algorithm() {
            if (reading) {
              readAgainForBranch2 = true;
              return promiseResolvedWith(void 0);
            }
            reading = true;
            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
            if (byobRequest === null) {
              pullWithDefaultReader();
            } else {
              pullWithBYOBReader(byobRequest._view, true);
            }
            return promiseResolvedWith(void 0);
          }
          function cancel1Algorithm(reason) {
            canceled1 = true;
            reason1 = reason;
            if (canceled2) {
              const compositeReason = CreateArrayFromList([reason1, reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
          }
          function cancel2Algorithm(reason) {
            canceled2 = true;
            reason2 = reason;
            if (canceled1) {
              const compositeReason = CreateArrayFromList([reason1, reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
          }
          function startAlgorithm() {
            return;
          }
          branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
          branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
          forwardReaderError(reader);
          return [branch1, branch2];
        }
        function convertUnderlyingDefaultOrByteSource(source, context) {
          assertDictionary(source, context);
          const original = source;
          const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
          const cancel = original === null || original === void 0 ? void 0 : original.cancel;
          const pull = original === null || original === void 0 ? void 0 : original.pull;
          const start = original === null || original === void 0 ? void 0 : original.start;
          const type = original === null || original === void 0 ? void 0 : original.type;
          return {
            autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
            cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
            pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
            start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
            type: type === void 0 ? void 0 : convertReadableStreamType(type, `${context} has member 'type' that`)
          };
        }
        function convertUnderlyingSourceCancelCallback(fn, original, context) {
          assertFunction(fn, context);
          return (reason) => promiseCall(fn, original, [reason]);
        }
        function convertUnderlyingSourcePullCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => promiseCall(fn, original, [controller]);
        }
        function convertUnderlyingSourceStartCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => reflectCall(fn, original, [controller]);
        }
        function convertReadableStreamType(type, context) {
          type = `${type}`;
          if (type !== "bytes") {
            throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
          }
          return type;
        }
        function convertReaderOptions(options, context) {
          assertDictionary(options, context);
          const mode = options === null || options === void 0 ? void 0 : options.mode;
          return {
            mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
          };
        }
        function convertReadableStreamReaderMode(mode, context) {
          mode = `${mode}`;
          if (mode !== "byob") {
            throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
          }
          return mode;
        }
        function convertIteratorOptions(options, context) {
          assertDictionary(options, context);
          const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
          return { preventCancel: Boolean(preventCancel) };
        }
        function convertPipeOptions(options, context) {
          assertDictionary(options, context);
          const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
          const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
          const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
          const signal = options === null || options === void 0 ? void 0 : options.signal;
          if (signal !== void 0) {
            assertAbortSignal(signal, `${context} has member 'signal' that`);
          }
          return {
            preventAbort: Boolean(preventAbort),
            preventCancel: Boolean(preventCancel),
            preventClose: Boolean(preventClose),
            signal
          };
        }
        function assertAbortSignal(signal, context) {
          if (!isAbortSignal2(signal)) {
            throw new TypeError(`${context} is not an AbortSignal.`);
          }
        }
        function convertReadableWritablePair(pair, context) {
          assertDictionary(pair, context);
          const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
          assertRequiredField(readable, "readable", "ReadableWritablePair");
          assertReadableStream(readable, `${context} has member 'readable' that`);
          const writable3 = pair === null || pair === void 0 ? void 0 : pair.writable;
          assertRequiredField(writable3, "writable", "ReadableWritablePair");
          assertWritableStream(writable3, `${context} has member 'writable' that`);
          return { readable, writable: writable3 };
        }
        class ReadableStream2 {
          constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
            if (rawUnderlyingSource === void 0) {
              rawUnderlyingSource = null;
            } else {
              assertObject(rawUnderlyingSource, "First parameter");
            }
            const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
            const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
            InitializeReadableStream(this);
            if (underlyingSource.type === "bytes") {
              if (strategy.size !== void 0) {
                throw new RangeError("The strategy for a byte stream cannot have a size function");
              }
              const highWaterMark = ExtractHighWaterMark(strategy, 0);
              SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
            } else {
              const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
              const highWaterMark = ExtractHighWaterMark(strategy, 1);
              SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
            }
          }
          get locked() {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("locked");
            }
            return IsReadableStreamLocked(this);
          }
          cancel(reason = void 0) {
            if (!IsReadableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$1("cancel"));
            }
            if (IsReadableStreamLocked(this)) {
              return promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"));
            }
            return ReadableStreamCancel(this, reason);
          }
          getReader(rawOptions = void 0) {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("getReader");
            }
            const options = convertReaderOptions(rawOptions, "First parameter");
            if (options.mode === void 0) {
              return AcquireReadableStreamDefaultReader(this);
            }
            return AcquireReadableStreamBYOBReader(this);
          }
          pipeThrough(rawTransform, rawOptions = {}) {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("pipeThrough");
            }
            assertRequiredArgument(rawTransform, 1, "pipeThrough");
            const transform = convertReadableWritablePair(rawTransform, "First parameter");
            const options = convertPipeOptions(rawOptions, "Second parameter");
            if (IsReadableStreamLocked(this)) {
              throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
            }
            if (IsWritableStreamLocked(transform.writable)) {
              throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
            }
            const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
            setPromiseIsHandledToTrue(promise);
            return transform.readable;
          }
          pipeTo(destination, rawOptions = {}) {
            if (!IsReadableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
            }
            if (destination === void 0) {
              return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
            }
            if (!IsWritableStream(destination)) {
              return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
            }
            let options;
            try {
              options = convertPipeOptions(rawOptions, "Second parameter");
            } catch (e2) {
              return promiseRejectedWith(e2);
            }
            if (IsReadableStreamLocked(this)) {
              return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
            }
            if (IsWritableStreamLocked(destination)) {
              return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
            }
            return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
          }
          tee() {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("tee");
            }
            const branches = ReadableStreamTee(this);
            return CreateArrayFromList(branches);
          }
          values(rawOptions = void 0) {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("values");
            }
            const options = convertIteratorOptions(rawOptions, "First parameter");
            return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
          }
        }
        Object.defineProperties(ReadableStream2.prototype, {
          cancel: { enumerable: true },
          getReader: { enumerable: true },
          pipeThrough: { enumerable: true },
          pipeTo: { enumerable: true },
          tee: { enumerable: true },
          values: { enumerable: true },
          locked: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStream",
            configurable: true
          });
        }
        if (typeof SymbolPolyfill.asyncIterator === "symbol") {
          Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.asyncIterator, {
            value: ReadableStream2.prototype.values,
            writable: true,
            configurable: true
          });
        }
        function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
          const stream = Object.create(ReadableStream2.prototype);
          InitializeReadableStream(stream);
          const controller = Object.create(ReadableStreamDefaultController.prototype);
          SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
          return stream;
        }
        function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
          const stream = Object.create(ReadableStream2.prototype);
          InitializeReadableStream(stream);
          const controller = Object.create(ReadableByteStreamController.prototype);
          SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0);
          return stream;
        }
        function InitializeReadableStream(stream) {
          stream._state = "readable";
          stream._reader = void 0;
          stream._storedError = void 0;
          stream._disturbed = false;
        }
        function IsReadableStream(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_readableStreamController")) {
            return false;
          }
          return x2 instanceof ReadableStream2;
        }
        function IsReadableStreamLocked(stream) {
          if (stream._reader === void 0) {
            return false;
          }
          return true;
        }
        function ReadableStreamCancel(stream, reason) {
          stream._disturbed = true;
          if (stream._state === "closed") {
            return promiseResolvedWith(void 0);
          }
          if (stream._state === "errored") {
            return promiseRejectedWith(stream._storedError);
          }
          ReadableStreamClose(stream);
          const reader = stream._reader;
          if (reader !== void 0 && IsReadableStreamBYOBReader(reader)) {
            reader._readIntoRequests.forEach((readIntoRequest) => {
              readIntoRequest._closeSteps(void 0);
            });
            reader._readIntoRequests = new SimpleQueue();
          }
          const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
          return transformPromiseWith(sourceCancelPromise, noop4);
        }
        function ReadableStreamClose(stream) {
          stream._state = "closed";
          const reader = stream._reader;
          if (reader === void 0) {
            return;
          }
          defaultReaderClosedPromiseResolve(reader);
          if (IsReadableStreamDefaultReader(reader)) {
            reader._readRequests.forEach((readRequest) => {
              readRequest._closeSteps();
            });
            reader._readRequests = new SimpleQueue();
          }
        }
        function ReadableStreamError(stream, e2) {
          stream._state = "errored";
          stream._storedError = e2;
          const reader = stream._reader;
          if (reader === void 0) {
            return;
          }
          defaultReaderClosedPromiseReject(reader, e2);
          if (IsReadableStreamDefaultReader(reader)) {
            reader._readRequests.forEach((readRequest) => {
              readRequest._errorSteps(e2);
            });
            reader._readRequests = new SimpleQueue();
          } else {
            reader._readIntoRequests.forEach((readIntoRequest) => {
              readIntoRequest._errorSteps(e2);
            });
            reader._readIntoRequests = new SimpleQueue();
          }
        }
        function streamBrandCheckException$1(name) {
          return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
        }
        function convertQueuingStrategyInit(init, context) {
          assertDictionary(init, context);
          const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
          assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit");
          return {
            highWaterMark: convertUnrestrictedDouble(highWaterMark)
          };
        }
        const byteLengthSizeFunction = (chunk) => {
          return chunk.byteLength;
        };
        Object.defineProperty(byteLengthSizeFunction, "name", {
          value: "size",
          configurable: true
        });
        class ByteLengthQueuingStrategy {
          constructor(options) {
            assertRequiredArgument(options, 1, "ByteLengthQueuingStrategy");
            options = convertQueuingStrategyInit(options, "First parameter");
            this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
          }
          get highWaterMark() {
            if (!IsByteLengthQueuingStrategy(this)) {
              throw byteLengthBrandCheckException("highWaterMark");
            }
            return this._byteLengthQueuingStrategyHighWaterMark;
          }
          get size() {
            if (!IsByteLengthQueuingStrategy(this)) {
              throw byteLengthBrandCheckException("size");
            }
            return byteLengthSizeFunction;
          }
        }
        Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
          highWaterMark: { enumerable: true },
          size: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
            value: "ByteLengthQueuingStrategy",
            configurable: true
          });
        }
        function byteLengthBrandCheckException(name) {
          return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
        }
        function IsByteLengthQueuingStrategy(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_byteLengthQueuingStrategyHighWaterMark")) {
            return false;
          }
          return x2 instanceof ByteLengthQueuingStrategy;
        }
        const countSizeFunction = () => {
          return 1;
        };
        Object.defineProperty(countSizeFunction, "name", {
          value: "size",
          configurable: true
        });
        class CountQueuingStrategy {
          constructor(options) {
            assertRequiredArgument(options, 1, "CountQueuingStrategy");
            options = convertQueuingStrategyInit(options, "First parameter");
            this._countQueuingStrategyHighWaterMark = options.highWaterMark;
          }
          get highWaterMark() {
            if (!IsCountQueuingStrategy(this)) {
              throw countBrandCheckException("highWaterMark");
            }
            return this._countQueuingStrategyHighWaterMark;
          }
          get size() {
            if (!IsCountQueuingStrategy(this)) {
              throw countBrandCheckException("size");
            }
            return countSizeFunction;
          }
        }
        Object.defineProperties(CountQueuingStrategy.prototype, {
          highWaterMark: { enumerable: true },
          size: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
            value: "CountQueuingStrategy",
            configurable: true
          });
        }
        function countBrandCheckException(name) {
          return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
        }
        function IsCountQueuingStrategy(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_countQueuingStrategyHighWaterMark")) {
            return false;
          }
          return x2 instanceof CountQueuingStrategy;
        }
        function convertTransformer(original, context) {
          assertDictionary(original, context);
          const flush = original === null || original === void 0 ? void 0 : original.flush;
          const readableType = original === null || original === void 0 ? void 0 : original.readableType;
          const start = original === null || original === void 0 ? void 0 : original.start;
          const transform = original === null || original === void 0 ? void 0 : original.transform;
          const writableType = original === null || original === void 0 ? void 0 : original.writableType;
          return {
            flush: flush === void 0 ? void 0 : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
            readableType,
            start: start === void 0 ? void 0 : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
            transform: transform === void 0 ? void 0 : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
            writableType
          };
        }
        function convertTransformerFlushCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => promiseCall(fn, original, [controller]);
        }
        function convertTransformerStartCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => reflectCall(fn, original, [controller]);
        }
        function convertTransformerTransformCallback(fn, original, context) {
          assertFunction(fn, context);
          return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
        }
        class TransformStream {
          constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
            if (rawTransformer === void 0) {
              rawTransformer = null;
            }
            const writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter");
            const readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter");
            const transformer = convertTransformer(rawTransformer, "First parameter");
            if (transformer.readableType !== void 0) {
              throw new RangeError("Invalid readableType specified");
            }
            if (transformer.writableType !== void 0) {
              throw new RangeError("Invalid writableType specified");
            }
            const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
            const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
            const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
            const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
            let startPromise_resolve;
            const startPromise = newPromise((resolve2) => {
              startPromise_resolve = resolve2;
            });
            InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
            SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
            if (transformer.start !== void 0) {
              startPromise_resolve(transformer.start(this._transformStreamController));
            } else {
              startPromise_resolve(void 0);
            }
          }
          get readable() {
            if (!IsTransformStream(this)) {
              throw streamBrandCheckException("readable");
            }
            return this._readable;
          }
          get writable() {
            if (!IsTransformStream(this)) {
              throw streamBrandCheckException("writable");
            }
            return this._writable;
          }
        }
        Object.defineProperties(TransformStream.prototype, {
          readable: { enumerable: true },
          writable: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
            value: "TransformStream",
            configurable: true
          });
        }
        function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
          function startAlgorithm() {
            return startPromise;
          }
          function writeAlgorithm(chunk) {
            return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
          }
          function abortAlgorithm(reason) {
            return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
          }
          function closeAlgorithm() {
            return TransformStreamDefaultSinkCloseAlgorithm(stream);
          }
          stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
          function pullAlgorithm() {
            return TransformStreamDefaultSourcePullAlgorithm(stream);
          }
          function cancelAlgorithm(reason) {
            TransformStreamErrorWritableAndUnblockWrite(stream, reason);
            return promiseResolvedWith(void 0);
          }
          stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
          stream._backpressure = void 0;
          stream._backpressureChangePromise = void 0;
          stream._backpressureChangePromise_resolve = void 0;
          TransformStreamSetBackpressure(stream, true);
          stream._transformStreamController = void 0;
        }
        function IsTransformStream(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_transformStreamController")) {
            return false;
          }
          return x2 instanceof TransformStream;
        }
        function TransformStreamError(stream, e2) {
          ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e2);
          TransformStreamErrorWritableAndUnblockWrite(stream, e2);
        }
        function TransformStreamErrorWritableAndUnblockWrite(stream, e2) {
          TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
          WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e2);
          if (stream._backpressure) {
            TransformStreamSetBackpressure(stream, false);
          }
        }
        function TransformStreamSetBackpressure(stream, backpressure) {
          if (stream._backpressureChangePromise !== void 0) {
            stream._backpressureChangePromise_resolve();
          }
          stream._backpressureChangePromise = newPromise((resolve2) => {
            stream._backpressureChangePromise_resolve = resolve2;
          });
          stream._backpressure = backpressure;
        }
        class TransformStreamDefaultController {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get desiredSize() {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException("desiredSize");
            }
            const readableController = this._controlledTransformStream._readable._readableStreamController;
            return ReadableStreamDefaultControllerGetDesiredSize(readableController);
          }
          enqueue(chunk = void 0) {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException("enqueue");
            }
            TransformStreamDefaultControllerEnqueue(this, chunk);
          }
          error(reason = void 0) {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException("error");
            }
            TransformStreamDefaultControllerError(this, reason);
          }
          terminate() {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException("terminate");
            }
            TransformStreamDefaultControllerTerminate(this);
          }
        }
        Object.defineProperties(TransformStreamDefaultController.prototype, {
          enqueue: { enumerable: true },
          error: { enumerable: true },
          terminate: { enumerable: true },
          desiredSize: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
            value: "TransformStreamDefaultController",
            configurable: true
          });
        }
        function IsTransformStreamDefaultController(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_controlledTransformStream")) {
            return false;
          }
          return x2 instanceof TransformStreamDefaultController;
        }
        function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
          controller._controlledTransformStream = stream;
          stream._transformStreamController = controller;
          controller._transformAlgorithm = transformAlgorithm;
          controller._flushAlgorithm = flushAlgorithm;
        }
        function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
          const controller = Object.create(TransformStreamDefaultController.prototype);
          let transformAlgorithm = (chunk) => {
            try {
              TransformStreamDefaultControllerEnqueue(controller, chunk);
              return promiseResolvedWith(void 0);
            } catch (transformResultE) {
              return promiseRejectedWith(transformResultE);
            }
          };
          let flushAlgorithm = () => promiseResolvedWith(void 0);
          if (transformer.transform !== void 0) {
            transformAlgorithm = (chunk) => transformer.transform(chunk, controller);
          }
          if (transformer.flush !== void 0) {
            flushAlgorithm = () => transformer.flush(controller);
          }
          SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
        }
        function TransformStreamDefaultControllerClearAlgorithms(controller) {
          controller._transformAlgorithm = void 0;
          controller._flushAlgorithm = void 0;
        }
        function TransformStreamDefaultControllerEnqueue(controller, chunk) {
          const stream = controller._controlledTransformStream;
          const readableController = stream._readable._readableStreamController;
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
            throw new TypeError("Readable side is not in a state that permits enqueue");
          }
          try {
            ReadableStreamDefaultControllerEnqueue(readableController, chunk);
          } catch (e2) {
            TransformStreamErrorWritableAndUnblockWrite(stream, e2);
            throw stream._readable._storedError;
          }
          const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
          if (backpressure !== stream._backpressure) {
            TransformStreamSetBackpressure(stream, true);
          }
        }
        function TransformStreamDefaultControllerError(controller, e2) {
          TransformStreamError(controller._controlledTransformStream, e2);
        }
        function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
          const transformPromise = controller._transformAlgorithm(chunk);
          return transformPromiseWith(transformPromise, void 0, (r2) => {
            TransformStreamError(controller._controlledTransformStream, r2);
            throw r2;
          });
        }
        function TransformStreamDefaultControllerTerminate(controller) {
          const stream = controller._controlledTransformStream;
          const readableController = stream._readable._readableStreamController;
          ReadableStreamDefaultControllerClose(readableController);
          const error2 = new TypeError("TransformStream terminated");
          TransformStreamErrorWritableAndUnblockWrite(stream, error2);
        }
        function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
          const controller = stream._transformStreamController;
          if (stream._backpressure) {
            const backpressureChangePromise = stream._backpressureChangePromise;
            return transformPromiseWith(backpressureChangePromise, () => {
              const writable3 = stream._writable;
              const state = writable3._state;
              if (state === "erroring") {
                throw writable3._storedError;
              }
              return TransformStreamDefaultControllerPerformTransform(controller, chunk);
            });
          }
          return TransformStreamDefaultControllerPerformTransform(controller, chunk);
        }
        function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
          TransformStreamError(stream, reason);
          return promiseResolvedWith(void 0);
        }
        function TransformStreamDefaultSinkCloseAlgorithm(stream) {
          const readable = stream._readable;
          const controller = stream._transformStreamController;
          const flushPromise = controller._flushAlgorithm();
          TransformStreamDefaultControllerClearAlgorithms(controller);
          return transformPromiseWith(flushPromise, () => {
            if (readable._state === "errored") {
              throw readable._storedError;
            }
            ReadableStreamDefaultControllerClose(readable._readableStreamController);
          }, (r2) => {
            TransformStreamError(stream, r2);
            throw readable._storedError;
          });
        }
        function TransformStreamDefaultSourcePullAlgorithm(stream) {
          TransformStreamSetBackpressure(stream, false);
          return stream._backpressureChangePromise;
        }
        function defaultControllerBrandCheckException(name) {
          return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
        }
        function streamBrandCheckException(name) {
          return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
        }
        exports2.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
        exports2.CountQueuingStrategy = CountQueuingStrategy;
        exports2.ReadableByteStreamController = ReadableByteStreamController;
        exports2.ReadableStream = ReadableStream2;
        exports2.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
        exports2.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
        exports2.ReadableStreamDefaultController = ReadableStreamDefaultController;
        exports2.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
        exports2.TransformStream = TransformStream;
        exports2.TransformStreamDefaultController = TransformStreamDefaultController;
        exports2.WritableStream = WritableStream;
        exports2.WritableStreamDefaultController = WritableStreamDefaultController;
        exports2.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    })(ponyfill_es2018, ponyfill_es2018.exports);
    POOL_SIZE$1 = 65536;
    if (!globalThis.ReadableStream) {
      try {
        const process2 = require("process");
        const { emitWarning } = process2;
        try {
          process2.emitWarning = () => {
          };
          Object.assign(globalThis, require("stream/web"));
          process2.emitWarning = emitWarning;
        } catch (error2) {
          process2.emitWarning = emitWarning;
          throw error2;
        }
      } catch (error2) {
        Object.assign(globalThis, ponyfill_es2018.exports);
      }
    }
    try {
      const { Blob: Blob2 } = require("buffer");
      if (Blob2 && !Blob2.prototype.stream) {
        Blob2.prototype.stream = function name(params) {
          let position = 0;
          const blob = this;
          return new ReadableStream({
            type: "bytes",
            async pull(ctrl) {
              const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE$1));
              const buffer = await chunk.arrayBuffer();
              position += buffer.byteLength;
              ctrl.enqueue(new Uint8Array(buffer));
              if (position === blob.size) {
                ctrl.close();
              }
            }
          });
        };
      }
    } catch (error2) {
    }
    POOL_SIZE = 65536;
    _Blob = (_a = class {
      constructor(blobParts = [], options = {}) {
        __privateAdd(this, _parts, []);
        __privateAdd(this, _type, "");
        __privateAdd(this, _size, 0);
        if (typeof blobParts !== "object" || blobParts === null) {
          throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        }
        if (typeof blobParts[Symbol.iterator] !== "function") {
          throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        }
        if (typeof options !== "object" && typeof options !== "function") {
          throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        }
        if (options === null)
          options = {};
        const encoder = new TextEncoder();
        for (const element of blobParts) {
          let part;
          if (ArrayBuffer.isView(element)) {
            part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
          } else if (element instanceof ArrayBuffer) {
            part = new Uint8Array(element.slice(0));
          } else if (element instanceof _a) {
            part = element;
          } else {
            part = encoder.encode(element);
          }
          __privateSet(this, _size, __privateGet(this, _size) + (ArrayBuffer.isView(part) ? part.byteLength : part.size));
          __privateGet(this, _parts).push(part);
        }
        const type = options.type === void 0 ? "" : String(options.type);
        __privateSet(this, _type, /^[\x20-\x7E]*$/.test(type) ? type : "");
      }
      get size() {
        return __privateGet(this, _size);
      }
      get type() {
        return __privateGet(this, _type);
      }
      async text() {
        const decoder = new TextDecoder();
        let str = "";
        for await (const part of toIterator(__privateGet(this, _parts), false)) {
          str += decoder.decode(part, { stream: true });
        }
        str += decoder.decode();
        return str;
      }
      async arrayBuffer() {
        const data = new Uint8Array(this.size);
        let offset = 0;
        for await (const chunk of toIterator(__privateGet(this, _parts), false)) {
          data.set(chunk, offset);
          offset += chunk.length;
        }
        return data.buffer;
      }
      stream() {
        const it = toIterator(__privateGet(this, _parts), true);
        return new globalThis.ReadableStream({
          type: "bytes",
          async pull(ctrl) {
            const chunk = await it.next();
            chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
          },
          async cancel() {
            await it.return();
          }
        });
      }
      slice(start = 0, end = this.size, type = "") {
        const { size } = this;
        let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
        let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
        const span = Math.max(relativeEnd - relativeStart, 0);
        const parts = __privateGet(this, _parts);
        const blobParts = [];
        let added = 0;
        for (const part of parts) {
          if (added >= span) {
            break;
          }
          const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
          if (relativeStart && size2 <= relativeStart) {
            relativeStart -= size2;
            relativeEnd -= size2;
          } else {
            let chunk;
            if (ArrayBuffer.isView(part)) {
              chunk = part.subarray(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.byteLength;
            } else {
              chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.size;
            }
            relativeEnd -= size2;
            blobParts.push(chunk);
            relativeStart = 0;
          }
        }
        const blob = new _a([], { type: String(type).toLowerCase() });
        __privateSet(blob, _size, span);
        __privateSet(blob, _parts, blobParts);
        return blob;
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
      static [Symbol.hasInstance](object) {
        return object && typeof object === "object" && typeof object.constructor === "function" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
      }
    }, _parts = new WeakMap(), _type = new WeakMap(), _size = new WeakMap(), _a);
    Object.defineProperties(_Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    });
    Blob = _Blob;
    Blob$1 = Blob;
    _File = (_a2 = class extends Blob$1 {
      constructor(fileBits, fileName, options = {}) {
        if (arguments.length < 2) {
          throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        }
        super(fileBits, options);
        __privateAdd(this, _lastModified, 0);
        __privateAdd(this, _name, "");
        if (options === null)
          options = {};
        const lastModified = options.lastModified === void 0 ? Date.now() : Number(options.lastModified);
        if (!Number.isNaN(lastModified)) {
          __privateSet(this, _lastModified, lastModified);
        }
        __privateSet(this, _name, String(fileName));
      }
      get name() {
        return __privateGet(this, _name);
      }
      get lastModified() {
        return __privateGet(this, _lastModified);
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    }, _lastModified = new WeakMap(), _name = new WeakMap(), _a2);
    File = _File;
    ({ toStringTag: t, iterator: i, hasInstance: h } = Symbol);
    r = Math.random;
    m = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
    f2 = (a, b, c) => (a += "", /^(Blob|File)$/.test(b && b[t]) ? [(c = c !== void 0 ? c + "" : b[t] == "File" ? b.name : "blob", a), b.name !== c || b[t] == "blob" ? new File([b], c, b) : b] : [a, b + ""]);
    e = (c, f3) => (f3 ? c : c.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
    x = (n, a, e2) => {
      if (a.length < e2) {
        throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e2} arguments required, but only ${a.length} present.`);
      }
    };
    FormData = (_a3 = class {
      constructor(...a) {
        __privateAdd(this, _d, []);
        if (a.length)
          throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
      }
      get [t]() {
        return "FormData";
      }
      [i]() {
        return this.entries();
      }
      static [h](o) {
        return o && typeof o === "object" && o[t] === "FormData" && !m.some((m2) => typeof o[m2] != "function");
      }
      append(...a) {
        x("append", arguments, 2);
        __privateGet(this, _d).push(f2(...a));
      }
      delete(a) {
        x("delete", arguments, 1);
        a += "";
        __privateSet(this, _d, __privateGet(this, _d).filter(([b]) => b !== a));
      }
      get(a) {
        x("get", arguments, 1);
        a += "";
        for (var b = __privateGet(this, _d), l = b.length, c = 0; c < l; c++)
          if (b[c][0] === a)
            return b[c][1];
        return null;
      }
      getAll(a, b) {
        x("getAll", arguments, 1);
        b = [];
        a += "";
        __privateGet(this, _d).forEach((c) => c[0] === a && b.push(c[1]));
        return b;
      }
      has(a) {
        x("has", arguments, 1);
        a += "";
        return __privateGet(this, _d).some((b) => b[0] === a);
      }
      forEach(a, b) {
        x("forEach", arguments, 1);
        for (var [c, d] of this)
          a.call(b, d, c, this);
      }
      set(...a) {
        x("set", arguments, 2);
        var b = [], c = true;
        a = f2(...a);
        __privateGet(this, _d).forEach((d) => {
          d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
        });
        c && b.push(a);
        __privateSet(this, _d, b);
      }
      *entries() {
        yield* __privateGet(this, _d);
      }
      *keys() {
        for (var [a] of this)
          yield a;
      }
      *values() {
        for (var [, a] of this)
          yield a;
      }
    }, _d = new WeakMap(), _a3);
    FetchBaseError = class extends Error {
      constructor(message, type) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.type = type;
      }
      get name() {
        return this.constructor.name;
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
    };
    FetchError = class extends FetchBaseError {
      constructor(message, type, systemError) {
        super(message, type);
        if (systemError) {
          this.code = this.errno = systemError.code;
          this.erroredSysCall = systemError.syscall;
        }
      }
    };
    NAME = Symbol.toStringTag;
    isURLSearchParameters = (object) => {
      return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
    };
    isBlob = (object) => {
      return object && typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
    };
    isAbortSignal = (object) => {
      return typeof object === "object" && (object[NAME] === "AbortSignal" || object[NAME] === "EventTarget");
    };
    INTERNALS$2 = Symbol("Body internals");
    Body = class {
      constructor(body2, {
        size = 0
      } = {}) {
        let boundary = null;
        if (body2 === null) {
          body2 = null;
        } else if (isURLSearchParameters(body2)) {
          body2 = Buffer.from(body2.toString());
        } else if (isBlob(body2))
          ;
        else if (Buffer.isBuffer(body2))
          ;
        else if (import_node_util2.types.isAnyArrayBuffer(body2)) {
          body2 = Buffer.from(body2);
        } else if (ArrayBuffer.isView(body2)) {
          body2 = Buffer.from(body2.buffer, body2.byteOffset, body2.byteLength);
        } else if (body2 instanceof import_node_stream2.default)
          ;
        else if (body2 instanceof FormData) {
          body2 = formDataToBlob(body2);
          boundary = body2.type.split("=")[1];
        } else {
          body2 = Buffer.from(String(body2));
        }
        let stream = body2;
        if (Buffer.isBuffer(body2)) {
          stream = import_node_stream2.default.Readable.from(body2);
        } else if (isBlob(body2)) {
          stream = import_node_stream2.default.Readable.from(body2.stream());
        }
        this[INTERNALS$2] = {
          body: body2,
          stream,
          boundary,
          disturbed: false,
          error: null
        };
        this.size = size;
        if (body2 instanceof import_node_stream2.default) {
          body2.on("error", (error_) => {
            const error2 = error_ instanceof FetchBaseError ? error_ : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, "system", error_);
            this[INTERNALS$2].error = error2;
          });
        }
      }
      get body() {
        return this[INTERNALS$2].stream;
      }
      get bodyUsed() {
        return this[INTERNALS$2].disturbed;
      }
      async arrayBuffer() {
        const { buffer, byteOffset, byteLength } = await consumeBody(this);
        return buffer.slice(byteOffset, byteOffset + byteLength);
      }
      async formData() {
        const ct = this.headers.get("content-type");
        if (ct.startsWith("application/x-www-form-urlencoded")) {
          const formData = new FormData();
          const parameters = new URLSearchParams(await this.text());
          for (const [name, value] of parameters) {
            formData.append(name, value);
          }
          return formData;
        }
        const { toFormData: toFormData2 } = await Promise.resolve().then(() => (init_multipart_parser(), multipart_parser_exports));
        return toFormData2(this.body, ct);
      }
      async blob() {
        const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
        const buf = await this.buffer();
        return new Blob$1([buf], {
          type: ct
        });
      }
      async json() {
        const buffer = await consumeBody(this);
        return JSON.parse(buffer.toString());
      }
      async text() {
        const buffer = await consumeBody(this);
        return buffer.toString();
      }
      buffer() {
        return consumeBody(this);
      }
    };
    Body.prototype.buffer = (0, import_node_util2.deprecate)(Body.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer");
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true }
    });
    clone = (instance, highWaterMark) => {
      let p1;
      let p2;
      let { body: body2 } = instance[INTERNALS$2];
      if (instance.bodyUsed) {
        throw new Error("cannot clone body after it is used");
      }
      if (body2 instanceof import_node_stream2.default && typeof body2.getBoundary !== "function") {
        p1 = new import_node_stream2.PassThrough({ highWaterMark });
        p2 = new import_node_stream2.PassThrough({ highWaterMark });
        body2.pipe(p1);
        body2.pipe(p2);
        instance[INTERNALS$2].stream = p1;
        body2 = p2;
      }
      return body2;
    };
    getNonSpecFormDataBoundary = (0, import_node_util2.deprecate)((body2) => body2.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167");
    extractContentType = (body2, request) => {
      if (body2 === null) {
        return null;
      }
      if (typeof body2 === "string") {
        return "text/plain;charset=UTF-8";
      }
      if (isURLSearchParameters(body2)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
      }
      if (isBlob(body2)) {
        return body2.type || null;
      }
      if (Buffer.isBuffer(body2) || import_node_util2.types.isAnyArrayBuffer(body2) || ArrayBuffer.isView(body2)) {
        return null;
      }
      if (body2 instanceof FormData) {
        return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
      }
      if (body2 && typeof body2.getBoundary === "function") {
        return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body2)}`;
      }
      if (body2 instanceof import_node_stream2.default) {
        return null;
      }
      return "text/plain;charset=UTF-8";
    };
    getTotalBytes = (request) => {
      const { body: body2 } = request[INTERNALS$2];
      if (body2 === null) {
        return 0;
      }
      if (isBlob(body2)) {
        return body2.size;
      }
      if (Buffer.isBuffer(body2)) {
        return body2.length;
      }
      if (body2 && typeof body2.getLengthSync === "function") {
        return body2.hasKnownLength && body2.hasKnownLength() ? body2.getLengthSync() : null;
      }
      return null;
    };
    writeToStream = (dest, { body: body2 }) => {
      if (body2 === null) {
        dest.end();
      } else {
        body2.pipe(dest);
      }
    };
    validateHeaderName = typeof import_node_http2.default.validateHeaderName === "function" ? import_node_http2.default.validateHeaderName : (name) => {
      if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
        const error2 = new TypeError(`Header name must be a valid HTTP token [${name}]`);
        Object.defineProperty(error2, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
        throw error2;
      }
    };
    validateHeaderValue = typeof import_node_http2.default.validateHeaderValue === "function" ? import_node_http2.default.validateHeaderValue : (name, value) => {
      if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
        const error2 = new TypeError(`Invalid character in header content ["${name}"]`);
        Object.defineProperty(error2, "code", { value: "ERR_INVALID_CHAR" });
        throw error2;
      }
    };
    Headers2 = class extends URLSearchParams {
      constructor(init) {
        let result = [];
        if (init instanceof Headers2) {
          const raw = init.raw();
          for (const [name, values] of Object.entries(raw)) {
            result.push(...values.map((value) => [name, value]));
          }
        } else if (init == null)
          ;
        else if (typeof init === "object" && !import_node_util2.types.isBoxedPrimitive(init)) {
          const method = init[Symbol.iterator];
          if (method == null) {
            result.push(...Object.entries(init));
          } else {
            if (typeof method !== "function") {
              throw new TypeError("Header pairs must be iterable");
            }
            result = [...init].map((pair) => {
              if (typeof pair !== "object" || import_node_util2.types.isBoxedPrimitive(pair)) {
                throw new TypeError("Each header pair must be an iterable object");
              }
              return [...pair];
            }).map((pair) => {
              if (pair.length !== 2) {
                throw new TypeError("Each header pair must be a name/value tuple");
              }
              return [...pair];
            });
          }
        } else {
          throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
        }
        result = result.length > 0 ? result.map(([name, value]) => {
          validateHeaderName(name);
          validateHeaderValue(name, String(value));
          return [String(name).toLowerCase(), String(value)];
        }) : void 0;
        super(result);
        return new Proxy(this, {
          get(target, p, receiver) {
            switch (p) {
              case "append":
              case "set":
                return (name, value) => {
                  validateHeaderName(name);
                  validateHeaderValue(name, String(value));
                  return URLSearchParams.prototype[p].call(target, String(name).toLowerCase(), String(value));
                };
              case "delete":
              case "has":
              case "getAll":
                return (name) => {
                  validateHeaderName(name);
                  return URLSearchParams.prototype[p].call(target, String(name).toLowerCase());
                };
              case "keys":
                return () => {
                  target.sort();
                  return new Set(URLSearchParams.prototype.keys.call(target)).keys();
                };
              default:
                return Reflect.get(target, p, receiver);
            }
          }
        });
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      toString() {
        return Object.prototype.toString.call(this);
      }
      get(name) {
        const values = this.getAll(name);
        if (values.length === 0) {
          return null;
        }
        let value = values.join(", ");
        if (/^content-encoding$/i.test(name)) {
          value = value.toLowerCase();
        }
        return value;
      }
      forEach(callback, thisArg = void 0) {
        for (const name of this.keys()) {
          Reflect.apply(callback, thisArg, [this.get(name), name, this]);
        }
      }
      *values() {
        for (const name of this.keys()) {
          yield this.get(name);
        }
      }
      *entries() {
        for (const name of this.keys()) {
          yield [name, this.get(name)];
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      raw() {
        return [...this.keys()].reduce((result, key) => {
          result[key] = this.getAll(key);
          return result;
        }, {});
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return [...this.keys()].reduce((result, key) => {
          const values = this.getAll(key);
          if (key === "host") {
            result[key] = values[0];
          } else {
            result[key] = values.length > 1 ? values : values[0];
          }
          return result;
        }, {});
      }
    };
    Object.defineProperties(Headers2.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
      result[property] = { enumerable: true };
      return result;
    }, {}));
    redirectStatus = new Set([301, 302, 303, 307, 308]);
    isRedirect = (code) => {
      return redirectStatus.has(code);
    };
    INTERNALS$1 = Symbol("Response internals");
    Response2 = class extends Body {
      constructor(body2 = null, options = {}) {
        super(body2, options);
        const status = options.status != null ? options.status : 200;
        const headers = new Headers2(options.headers);
        if (body2 !== null && !headers.has("Content-Type")) {
          const contentType = extractContentType(body2, this);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        this[INTERNALS$1] = {
          type: "default",
          url: options.url,
          status,
          statusText: options.statusText || "",
          headers,
          counter: options.counter,
          highWaterMark: options.highWaterMark
        };
      }
      get type() {
        return this[INTERNALS$1].type;
      }
      get url() {
        return this[INTERNALS$1].url || "";
      }
      get status() {
        return this[INTERNALS$1].status;
      }
      get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
      }
      get redirected() {
        return this[INTERNALS$1].counter > 0;
      }
      get statusText() {
        return this[INTERNALS$1].statusText;
      }
      get headers() {
        return this[INTERNALS$1].headers;
      }
      get highWaterMark() {
        return this[INTERNALS$1].highWaterMark;
      }
      clone() {
        return new Response2(clone(this, this.highWaterMark), {
          type: this.type,
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected,
          size: this.size,
          highWaterMark: this.highWaterMark
        });
      }
      static redirect(url, status = 302) {
        if (!isRedirect(status)) {
          throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        return new Response2(null, {
          headers: {
            location: new URL(url).toString()
          },
          status
        });
      }
      static error() {
        const response = new Response2(null, { status: 0, statusText: "" });
        response[INTERNALS$1].type = "error";
        return response;
      }
      get [Symbol.toStringTag]() {
        return "Response";
      }
    };
    Object.defineProperties(Response2.prototype, {
      type: { enumerable: true },
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    });
    getSearch = (parsedURL) => {
      if (parsedURL.search) {
        return parsedURL.search;
      }
      const lastOffset = parsedURL.href.length - 1;
      const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
      return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
    };
    ReferrerPolicy = new Set([
      "",
      "no-referrer",
      "no-referrer-when-downgrade",
      "same-origin",
      "origin",
      "strict-origin",
      "origin-when-cross-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url"
    ]);
    DEFAULT_REFERRER_POLICY = "strict-origin-when-cross-origin";
    INTERNALS = Symbol("Request internals");
    isRequest = (object) => {
      return typeof object === "object" && typeof object[INTERNALS] === "object";
    };
    Request2 = class extends Body {
      constructor(input, init = {}) {
        let parsedURL;
        if (isRequest(input)) {
          parsedURL = new URL(input.url);
        } else {
          parsedURL = new URL(input);
          input = {};
        }
        if (parsedURL.username !== "" || parsedURL.password !== "") {
          throw new TypeError(`${parsedURL} is an url with embedded credentails.`);
        }
        let method = init.method || input.method || "GET";
        method = method.toUpperCase();
        if ((init.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
          throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        const inputBody = init.body ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        super(inputBody, {
          size: init.size || input.size || 0
        });
        const headers = new Headers2(init.headers || input.headers || {});
        if (inputBody !== null && !headers.has("Content-Type")) {
          const contentType = extractContentType(inputBody, this);
          if (contentType) {
            headers.set("Content-Type", contentType);
          }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ("signal" in init) {
          signal = init.signal;
        }
        if (signal != null && !isAbortSignal(signal)) {
          throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
        }
        let referrer = init.referrer == null ? input.referrer : init.referrer;
        if (referrer === "") {
          referrer = "no-referrer";
        } else if (referrer) {
          const parsedReferrer = new URL(referrer);
          referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? "client" : parsedReferrer;
        } else {
          referrer = void 0;
        }
        this[INTERNALS] = {
          method,
          redirect: init.redirect || input.redirect || "follow",
          headers,
          parsedURL,
          signal,
          referrer
        };
        this.follow = init.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init.follow;
        this.compress = init.compress === void 0 ? input.compress === void 0 ? true : input.compress : init.compress;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
        this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
        this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;
        this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || "";
      }
      get method() {
        return this[INTERNALS].method;
      }
      get url() {
        return (0, import_node_url2.format)(this[INTERNALS].parsedURL);
      }
      get headers() {
        return this[INTERNALS].headers;
      }
      get redirect() {
        return this[INTERNALS].redirect;
      }
      get signal() {
        return this[INTERNALS].signal;
      }
      get referrer() {
        if (this[INTERNALS].referrer === "no-referrer") {
          return "";
        }
        if (this[INTERNALS].referrer === "client") {
          return "about:client";
        }
        if (this[INTERNALS].referrer) {
          return this[INTERNALS].referrer.toString();
        }
        return void 0;
      }
      get referrerPolicy() {
        return this[INTERNALS].referrerPolicy;
      }
      set referrerPolicy(referrerPolicy) {
        this[INTERNALS].referrerPolicy = validateReferrerPolicy(referrerPolicy);
      }
      clone() {
        return new Request2(this);
      }
      get [Symbol.toStringTag]() {
        return "Request";
      }
    };
    Object.defineProperties(Request2.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true },
      referrer: { enumerable: true },
      referrerPolicy: { enumerable: true }
    });
    getNodeRequestOptions = (request) => {
      const { parsedURL } = request[INTERNALS];
      const headers = new Headers2(request[INTERNALS].headers);
      if (!headers.has("Accept")) {
        headers.set("Accept", "*/*");
      }
      let contentLengthValue = null;
      if (request.body === null && /^(post|put)$/i.test(request.method)) {
        contentLengthValue = "0";
      }
      if (request.body !== null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
          contentLengthValue = String(totalBytes);
        }
      }
      if (contentLengthValue) {
        headers.set("Content-Length", contentLengthValue);
      }
      if (request.referrerPolicy === "") {
        request.referrerPolicy = DEFAULT_REFERRER_POLICY;
      }
      if (request.referrer && request.referrer !== "no-referrer") {
        request[INTERNALS].referrer = determineRequestsReferrer(request);
      } else {
        request[INTERNALS].referrer = "no-referrer";
      }
      if (request[INTERNALS].referrer instanceof URL) {
        headers.set("Referer", request.referrer);
      }
      if (!headers.has("User-Agent")) {
        headers.set("User-Agent", "node-fetch");
      }
      if (request.compress && !headers.has("Accept-Encoding")) {
        headers.set("Accept-Encoding", "gzip,deflate,br");
      }
      let { agent } = request;
      if (typeof agent === "function") {
        agent = agent(parsedURL);
      }
      if (!headers.has("Connection") && !agent) {
        headers.set("Connection", "close");
      }
      const search = getSearch(parsedURL);
      const options = {
        path: parsedURL.pathname + search,
        method: request.method,
        headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
        insecureHTTPParser: request.insecureHTTPParser,
        agent
      };
      return {
        parsedURL,
        options
      };
    };
    AbortError = class extends FetchBaseError {
      constructor(message, type = "aborted") {
        super(message, type);
      }
    };
    supportedSchemas = new Set(["data:", "http:", "https:"]);
  }
});

// .svelte-kit/output/server/chunks/index-88921582.js
function noop2() {
}
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k in props)
    if (!keys.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function custom_event(type, detail, bubbles = false) {
  const e2 = document.createEvent("CustomEvent");
  e2.initCustomEvent(type, bubbles, false, detail);
  return e2;
}
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
function spread(args, attrs_to_add) {
  const attributes = Object.assign({}, ...args);
  if (attrs_to_add) {
    const classes_to_add = attrs_to_add.classes;
    const styles_to_add = attrs_to_add.styles;
    if (classes_to_add) {
      if (attributes.class == null) {
        attributes.class = classes_to_add;
      } else {
        attributes.class += " " + classes_to_add;
      }
    }
    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
      }
    }
  }
  let str = "";
  Object.keys(attributes).forEach((name) => {
    if (invalid_attribute_name_character.test(name))
      return;
    const value = attributes[name];
    if (value === true)
      str += " " + name;
    else if (boolean_attributes.has(name.toLowerCase())) {
      if (value)
        str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${value}"`;
    }
  });
  return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
  const style_object = {};
  for (const individual_style of style_attribute.split(";")) {
    const colon_index = individual_style.indexOf(":");
    const name = individual_style.slice(0, colon_index).trim();
    const value = individual_style.slice(colon_index + 1).trim();
    if (!name)
      continue;
    style_object[name] = value;
  }
  for (const name in style_directive) {
    const value = style_directive[name];
    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }
  return style_object;
}
function escape(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
}
function escape_attribute_value(value) {
  return typeof value === "string" ? escape(value) : value;
}
function escape_object(obj) {
  const result = {};
  for (const key in obj) {
    result[key] = escape_attribute_value(obj[key]);
  }
  return result;
}
function each(items, fn) {
  let str = "";
  for (let i2 = 0; i2 < items.length; i2 += 1) {
    str += fn(items[i2], i2);
  }
  return str;
}
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css24) => css24.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true && boolean_attributes.has(name) ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function style_object_to_string(style_object) {
  return Object.keys(style_object).filter((key) => style_object[key]).map((key) => `${key}: ${style_object[key]};`).join(" ");
}
var identity, is_client, now, raf, tasks, current_component, boolean_attributes, invalid_attribute_name_character, escaped, missing_component, on_destroy;
var init_index_88921582 = __esm({
  ".svelte-kit/output/server/chunks/index-88921582.js"() {
    identity = (x2) => x2;
    is_client = typeof window !== "undefined";
    now = is_client ? () => window.performance.now() : () => Date.now();
    raf = is_client ? (cb) => requestAnimationFrame(cb) : noop2;
    tasks = new Set();
    Promise.resolve();
    boolean_attributes = new Set([
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ]);
    invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
    escaped = {
      '"': "&quot;",
      "'": "&#39;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;"
    };
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/stores-8afac308.js
var getStores, page, navigating;
var init_stores_8afac308 = __esm({
  ".svelte-kit/output/server/chunks/stores-8afac308.js"() {
    init_index_88921582();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        get preloading() {
          console.error("stores.preloading is deprecated; use stores.navigating instead");
          return {
            subscribe: stores.navigating.subscribe
          };
        },
        session: stores.session
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    navigating = {
      subscribe(fn) {
        const store = getStores().navigating;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/chunks/SvelteToast.svelte_svelte_type_style_lang-382c1799.js
function writable2(value, start = noop2) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue2.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue2.push(subscriber, value);
        }
        if (run_queue) {
          for (let i2 = 0; i2 < subscriber_queue2.length; i2 += 2) {
            subscriber_queue2[i2][0](subscriber_queue2[i2 + 1]);
          }
          subscriber_queue2.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var subscriber_queue2, defaults, createToast, toast;
var init_SvelteToast_svelte_svelte_type_style_lang_382c1799 = __esm({
  ".svelte-kit/output/server/chunks/SvelteToast.svelte_svelte_type_style_lang-382c1799.js"() {
    init_index_88921582();
    subscriber_queue2 = [];
    defaults = {
      duration: 4e3,
      initial: 1,
      next: 0,
      pausable: false,
      dismissable: true,
      reversed: false,
      intro: { x: 256 },
      theme: {}
    };
    createToast = () => {
      const { subscribe: subscribe2, update } = writable2([]);
      let count = 0;
      const options = {};
      const _obj = (obj) => obj instanceof Object;
      const push = (msg, opts = {}) => {
        const param = __spreadValues({ target: "default" }, _obj(msg) ? msg : __spreadProps(__spreadValues({}, opts), { msg }));
        const conf = options[param.target] || {};
        const entry14 = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, defaults), conf), param), {
          theme: __spreadValues(__spreadValues({}, conf.theme), param.theme),
          id: ++count
        });
        update((n) => entry14.reversed ? [...n, entry14] : [entry14, ...n]);
        return count;
      };
      const pop = (id) => {
        update((n) => {
          if (!n.length || id === 0)
            return [];
          if (_obj(id))
            return n.filter((i2) => id(i2));
          const target = id || Math.max(...n.map((i2) => i2.id));
          return n.filter((i2) => i2.id !== target);
        });
      };
      const set = (id, opts = {}) => {
        const param = _obj(id) ? __spreadValues({}, id) : __spreadProps(__spreadValues({}, opts), { id });
        update((n) => {
          const idx = n.findIndex((i2) => i2.id === param.id);
          if (idx > -1) {
            n[idx] = __spreadValues(__spreadValues({}, n[idx]), param);
          }
          return n;
        });
      };
      const _init = (target = "default", opts = {}) => {
        options[target] = opts;
        return options;
      };
      return { subscribe: subscribe2, push, pop, set, _init };
    };
    toast = createToast();
  }
});

// .svelte-kit/output/server/chunks/Icon-4e55a523.js
var Icon;
var init_Icon_4e55a523 = __esm({
  ".svelte-kit/output/server/chunks/Icon-4e55a523.js"() {
    init_index_88921582();
    Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { src } = $$props;
      let { size = "1em" } = $$props;
      let { color = void 0 } = $$props;
      let { title: title7 = void 0 } = $$props;
      let { className = "" } = $$props;
      let innerHtml;
      let attr;
      if ($$props.src === void 0 && $$bindings.src && src !== void 0)
        $$bindings.src(src);
      if ($$props.size === void 0 && $$bindings.size && size !== void 0)
        $$bindings.size(size);
      if ($$props.color === void 0 && $$bindings.color && color !== void 0)
        $$bindings.color(color);
      if ($$props.title === void 0 && $$bindings.title && title7 !== void 0)
        $$bindings.title(title7);
      if ($$props.className === void 0 && $$bindings.className && className !== void 0)
        $$bindings.className(className);
      {
        {
          attr = {};
          if (color) {
            if (src.a.stroke !== "none") {
              attr.stroke = color;
            }
            if (src.a.fill !== "none") {
              attr.fill = color;
            }
          }
        }
      }
      {
        {
          innerHtml = (title7 ? `<title>${title7}</title>` : "") + src.c;
        }
      }
      return `<svg${spread([
        { width: escape_attribute_value(size) },
        { height: escape_attribute_value(size) },
        { "stroke-width": "0" },
        { class: escape_attribute_value(className) },
        escape_object(src.a),
        escape_object(attr),
        { xmlns: "http://www.w3.org/2000/svg" }
      ], {})}><!-- HTML_TAG_START -->${innerHtml}<!-- HTML_TAG_END --></svg>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/__layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout,
  load: () => load
});
var PageTransition, Hamburger, css$1, Menu, FiMoon, css, load, _layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/__layout.svelte.js"() {
    init_index_88921582();
    init_stores_8afac308();
    init_SvelteToast_svelte_svelte_type_style_lang_382c1799();
    init_Icon_4e55a523();
    PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { refresh = "" } = $$props;
      if ($$props.refresh === void 0 && $$bindings.refresh && refresh !== void 0)
        $$bindings.refresh(refresh);
      return `<div>${slots.default ? slots.default({}) : ``}</div>`;
    });
    Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { open } = $$props;
      let { type = "spin" } = $$props;
      if ($$props.open === void 0 && $$bindings.open && open !== void 0)
        $$bindings.open(open);
      if ($$props.type === void 0 && $$bindings.type && type !== void 0)
        $$bindings.type(type);
      return `


<button class="${"hamburger hamburger--" + escape(type) + " " + escape(open && "is-active")}"><span class="${"hamburger-box"}"><span class="${"hamburger-inner"}"></span></span></button>`;
    });
    css$1 = {
      code: "div.svelte-16u9tyq{padding-left:1rem;padding-bottom:2rem}a.svelte-16u9tyq{display:block;text-decoration:none;color:var(--secondary-color);margin:1rem;font-size:1.2rem;line-height:normal}a.svelte-16u9tyq:hover{color:var(--primary-color);text-shadow:0 0 0.2rem var(--primary-light-color)}",
      map: null
    };
    Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $navigating, $$unsubscribe_navigating;
      $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
      let { open } = $$props;
      if ($$props.open === void 0 && $$bindings.open && open !== void 0)
        $$bindings.open(open);
      $$result.css.add(css$1);
      {
        if ($navigating)
          open = false;
      }
      $$unsubscribe_navigating();
      return `${open ? `<div class="${"svelte-16u9tyq"}">${each(["home", "portfolio", "blog"], (link, i2) => {
        return `<a sveltekit:prefetch sveltekit:noscroll${add_attribute("href", "/" + link, 0)} class="${"svelte-16u9tyq"}">${escape(link)}
			</a>`;
      })}</div>` : ``}`;
    });
    FiMoon = {
      a: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      c: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'
    };
    css = {
      code: ".background.svelte-gg4js.svelte-gg4js{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1}.background.svelte-gg4js span.svelte-gg4js{backface-visibility:hidden;position:absolute;animation-name:svelte-gg4js-move;animation-duration:60s;animation-timing-function:linear;animation-iteration-count:infinite}.background.svelte-gg4js span.svelte-gg4js:nth-child(1){color:var(--blob-1);top:29%;left:98%;animation-duration:43.8s;animation-delay:-39.4s;transform-origin:-13vw -2vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:-26rem 0 5.2225858442rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(2){color:var(--blob-2);top:93%;left:16%;animation-duration:15.6s;animation-delay:-41s;transform-origin:3vw 23vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:20rem 0 6.694114144rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(3){color:var(--blob-2);top:9%;left:55%;animation-duration:60.5s;animation-delay:-23.8s;transform-origin:10vw -15vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:26rem 0 6.9049725312rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(4){color:var(--blob-2);top:93%;left:26%;animation-duration:58.6s;animation-delay:-38.6s;transform-origin:17vw -3vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:-32rem 0 10.7969396378rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(5){color:var(--blob-2);top:29%;left:9%;animation-duration:18s;animation-delay:-58.6s;transform-origin:-7vw -3vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:32rem 0 9.5540116995rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(6){color:var(--blob-2);top:38%;left:94%;animation-duration:20.7s;animation-delay:-44.5s;transform-origin:22vw 18vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:-32rem 0 10.7967509989rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(7){color:var(--blob-1);top:27%;left:95%;animation-duration:45.8s;animation-delay:-60.5s;transform-origin:22vw 17vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 5.7590372648rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(8){color:var(--blob-2);top:32%;left:93%;animation-duration:27.7s;animation-delay:-13.8s;transform-origin:13vw 9vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:-32rem 0 11.6527114347rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(9){color:var(--blob-1);top:95%;left:19%;animation-duration:68.9s;animation-delay:-53.5s;transform-origin:16vw -16vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 6.5722600774rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(10){color:var(--blob-1);top:100%;left:47%;animation-duration:67.2s;animation-delay:-22.7s;transform-origin:1vw -17vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:26rem 0 3.3683681865rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(11){color:var(--blob-1);top:28%;left:15%;animation-duration:31s;animation-delay:-62.2s;transform-origin:14vw -3vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:20rem 0 5.1618134062rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(12){color:var(--blob-1);top:83%;left:6%;animation-duration:24.5s;animation-delay:-2.9s;transform-origin:11vw -20vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:32rem 0 10.6927692364rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(13){color:var(--blob-2);top:4%;left:36%;animation-duration:62s;animation-delay:-51s;transform-origin:-13vw -16vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:32rem 0 8.333952002rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(14){color:var(--blob-1);top:6%;left:16%;animation-duration:27.1s;animation-delay:-59s;transform-origin:-22vw 11vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:20rem 0 5.8997856434rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(15){color:var(--blob-2);top:53%;left:9%;animation-duration:67.6s;animation-delay:-64.3s;transform-origin:4vw 15vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:26rem 0 6.6105293401rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(16){color:var(--blob-2);top:67%;left:99%;animation-duration:45s;animation-delay:-11.4s;transform-origin:-18vw -24vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:26rem 0 5.3606253003rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(17){color:var(--blob-1);top:13%;left:83%;animation-duration:54.4s;animation-delay:-19.6s;transform-origin:-24vw 8vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:20rem 0 3.2749859633rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(18){color:var(--blob-2);top:21%;left:94%;animation-duration:18.9s;animation-delay:-15.7s;transform-origin:-6vw 11vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:-26rem 0 4.7478160368rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(19){color:var(--blob-1);top:32%;left:81%;animation-duration:61s;animation-delay:-17.3s;transform-origin:-8vw 3vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 4.4520818774rem currentColor}.background.svelte-gg4js span.svelte-gg4js:nth-child(20){color:var(--blob-2);top:54%;left:14%;animation-duration:48s;animation-delay:-51.1s;transform-origin:-14vw 23vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 3.0753193069rem currentColor}@keyframes svelte-gg4js-move{100%{transform:translate3d(0, 0, 1px) rotate(360deg)}}.header.svelte-gg4js.svelte-gg4js{position:fixed;width:fit-content;z-index:4}.custom-icon{color:var(--secondary-color);font-size:2rem;opacity:75%}.custom-icon:hover{color:var(--secondary-selected-color);cursor:pointer}.dark{fill:var(--secondary-color)}.dark:hover{fill:var(--secondary-selected-color)}.open.svelte-gg4js.svelte-gg4js{position:absolute;top:0;background-color:var(--bg-color);box-shadow:0 0 12rem var(--secondary-color);height:100vh;width:15rem;z-index:-1}",
      map: null
    };
    load = async ({ url }) => ({ props: { key: url.pathname } });
    _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      let $navigating, $$unsubscribe_navigating;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
      let { key } = $$props;
      let open;
      let darkTheme;
      let opened = "closed";
      let emailSubmitted = $page.url.searchParams.get("emailSubmitted");
      if (emailSubmitted) {
        toast.push("email submitted!");
        toast.pop((i2) => i2.target !== "new");
        emailSubmitted = false;
      }
      let portfolio = $page.url.pathName === "/portfolio" ? "portfolio" : "";
      if ($$props.key === void 0 && $$bindings.key && key !== void 0)
        $$bindings.key(key);
      $$result.css.add(css);
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        {
          if ($navigating)
            opened = "closed";
        }
        $$rendered = `${$$result.head += `<script data-svelte="svelte-1m58yue">savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
		darkTheme = savedTheme ?? 'light';
		darkTheme === 'light'
			? document.documentElement.setAttribute('data-theme', 'light')
			: document.documentElement.setAttribute('data-theme', 'dark');
	<\/script>`, ""}

<div class="${"scroll-bar-wrap"}"><div class="${"scroll-box"}"><div class="${"header svelte-gg4js"}"><div class="${"mobile-nav"}"><div style="display: contents; --color:${"var(--secondary-color)"}; --padding:${"2rem"};">${validate_component(Hamburger, "Hamburger").$$render($$result, { type: "squeeze", open }, {
          open: ($$value) => {
            open = $$value;
            $$settled = false;
          }
        }, {})}</div>
				${validate_component(Menu, "Menu").$$render($$result, { open }, {
          open: ($$value) => {
            open = $$value;
            $$settled = false;
          }
        }, {})}
				${opened === "open" ? `<div class="${"open svelte-gg4js"}"></div>` : ``}</div>
			<nav><a sveltekit:prefetch sveltekit:noscroll href="${"/"}">home</a>
				<a sveltekit:prefetch sveltekit:noscroll href="${"/portfolio"}">portfolio</a>
				<a sveltekit:prefetch sveltekit:noscroll href="${"/blog"}">blog</a></nav></div>
		<div class="${"dark-switch"}"><div>${validate_component(Icon, "Icon").$$render($$result, {
          src: FiMoon,
          className: "custom-icon " + darkTheme
        }, {}, {})}</div></div>
		<div class="${"page-content " + escape(portfolio) + " svelte-gg4js"}">${validate_component(PageTransition, "PageTransition").$$render($$result, { refresh: key }, {}, {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        })}</div></div>
	<div class="${"background svelte-gg4js"}"><span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span>
		<span class="${"svelte-gg4js"}"></span></div>
</div>`;
      } while (!$$settled);
      $$unsubscribe_page();
      $$unsubscribe_navigating();
      return $$rendered;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  css: () => css2,
  entry: () => entry,
  js: () => js,
  module: () => layout_svelte_exports
});
var entry, js, css2;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_svelte();
    entry = "pages/__layout.svelte-336b164a.js";
    js = ["pages/__layout.svelte-336b164a.js", "chunks/vendor-0e906c74.js", "chunks/stores-ada5a490.js", "chunks/navigation-b10cf5bf.js", "chunks/singletons-4a680913.js"];
    css2 = ["assets/pages/__layout.svelte-5f4725a9.css", "assets/app-ec155f4d.css", "assets/vendor-5469db33.css"];
  }
});

// .svelte-kit/output/server/entries/pages/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2,
  load: () => load2
});
function load2({ error: error2, status }) {
  return { props: { error: error2, status } };
}
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/error.svelte.js"() {
    init_index_88921582();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { status } = $$props;
      let { error: error2 } = $$props;
      if ($$props.status === void 0 && $$bindings.status && status !== void 0)
        $$bindings.status(status);
      if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
        $$bindings.error(error2);
      return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  css: () => css3,
  entry: () => entry2,
  js: () => js2,
  module: () => error_svelte_exports
});
var entry2, js2, css3;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    init_error_svelte();
    entry2 = "error.svelte-e2e6f93c.js";
    js2 = ["error.svelte-e2e6f93c.js", "chunks/vendor-0e906c74.js"];
    css3 = ["assets/vendor-5469db33.css"];
  }
});

// .svelte-kit/output/server/chunks/Tag-1ce0eb4c.js
var css4, Tag;
var init_Tag_1ce0eb4c = __esm({
  ".svelte-kit/output/server/chunks/Tag-1ce0eb4c.js"() {
    init_index_88921582();
    css4 = {
      code: "button.svelte-1uu38c9{width:fit-content;border:2.5px solid var(--secondary-color);background-color:var(--transparent);border-radius:30px;color:var(--secondary-color);font-family:'Epilogue';font-weight:600;font-size:0.8rem;padding:0.4rem 0.7rem;cursor:pointer;white-space:nowrap}button.svelte-1uu38c9:hover{background-color:var(--secondary-highlight-color);box-shadow:0 0 0.2rem var(--secondary-color)}.clear.svelte-1uu38c9{border:none;height:100%}.clear.svelte-1uu38c9:hover{box-shadow:none}.inactive.svelte-1uu38c9{color:var(--primary-color);border:2.5px solid var(--primary-color)}.inactive.svelte-1uu38c9:hover{background-color:var(--transparent);box-shadow:none}",
      map: null
    };
    Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { className } = $$props;
      if ($$props.className === void 0 && $$bindings.className && className !== void 0)
        $$bindings.className(className);
      $$result.css.add(css4);
      return `<button class="${escape(null_to_empty(className)) + " svelte-1uu38c9"}">${slots.default ? slots.default({}) : ``}
</button>`;
    });
  }
});

// .svelte-kit/output/server/chunks/EmailInput-991948a7.js
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i2) => {
      return get_interpolator(a[i2], bi);
    });
    return (t2) => arr.map((fn) => fn(t2));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t2) => new Date(a + t2 * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t2) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t2);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t2) => a + t2 * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults2 = {}) {
  const store = writable2(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults2), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
var css$2, ToastItem, css$12, SvelteToast, FiArrowRightCircle, css5, EmailInput;
var init_EmailInput_991948a7 = __esm({
  ".svelte-kit/output/server/chunks/EmailInput-991948a7.js"() {
    init_index_88921582();
    init_SvelteToast_svelte_svelte_type_style_lang_382c1799();
    init_Icon_4e55a523();
    css$2 = {
      code: "._toastItem.svelte-j9nwjb{width:var(--toastWidth, 16rem);height:var(--toastHeight, auto);min-height:var(--toastMinHeight, 3.5rem);margin:var(--toastMargin, 0 0 0.5rem 0);padding:var(--toastPadding, 0);background:var(--toastBackground, rgba(66, 66, 66, 0.9));color:var(--toastColor, #fff);box-shadow:var(--toastBoxShadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06));border:var(--toastBorder, none);border-radius:var(--toastBorderRadius, 0.125rem);position:relative;display:flex;flex-direction:row;align-items:center;overflow:hidden;will-change:transform, opacity;-webkit-tap-highlight-color:transparent}._toastMsg.svelte-j9nwjb{padding:var(--toastMsgPadding, 0.75rem 0.5rem);flex:1 1 0%}.pe.svelte-j9nwjb,._toastMsg.svelte-j9nwjb a{pointer-events:auto}._toastBtn.svelte-j9nwjb{width:2rem;height:100%;font:1rem sans-serif;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none}._toastBar.svelte-j9nwjb{top:var(--toastBarTop, auto);right:var(--toastBarRight, auto);bottom:var(--toastBarBottom, 0);left:var(--toastBarLeft, 0);height:var(--toastBarHeight, 6px);width:var(--toastBarWidth, 100%);position:absolute;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;pointer-events:none}._toastBar.svelte-j9nwjb::-webkit-progress-bar{background:transparent}._toastBar.svelte-j9nwjb::-webkit-progress-value{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}._toastBar.svelte-j9nwjb::-moz-progress-bar{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}",
      map: null
    };
    ToastItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $progress, $$unsubscribe_progress;
      let { item } = $$props;
      const progress = tweened(item.initial, { duration: item.duration, easing: identity });
      $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
      const close = () => toast.pop(item.id);
      const autoclose = () => {
        if ($progress === 1 || $progress === 0) {
          close();
        }
      };
      let next = item.initial;
      const getProps = () => {
        const { props = {}, sendIdTo } = item.component;
        if (sendIdTo) {
          props[sendIdTo] = item.id;
        }
        return props;
      };
      onDestroy(() => {
        if (typeof item.onpop === "function") {
          item.onpop(item.id);
        }
      });
      if ($$props.item === void 0 && $$bindings.item && item !== void 0)
        $$bindings.item(item);
      $$result.css.add(css$2);
      {
        if (typeof item.progress !== "undefined") {
          item.next = item.progress;
        }
      }
      {
        if (next !== item.next) {
          next = item.next;
          progress.set(next).then(autoclose);
        }
      }
      $$unsubscribe_progress();
      return `<div class="${["_toastItem svelte-j9nwjb", item.pausable ? "pe" : ""].join(" ").trim()}"><div role="${"status"}" class="${["_toastMsg svelte-j9nwjb", item.component ? "pe" : ""].join(" ").trim()}">${item.component ? `${validate_component(item.component.src || missing_component, "svelte:component").$$render($$result, Object.assign(getProps()), {}, {})}` : `<!-- HTML_TAG_START -->${item.msg}<!-- HTML_TAG_END -->`}</div>
  ${item.dismissable ? `<div class="${"_toastBtn pe svelte-j9nwjb"}" role="${"button"}" tabindex="${"-1"}">\u2715</div>` : ``}
  <progress class="${"_toastBar svelte-j9nwjb"}"${add_attribute("value", $progress, 0)}></progress></div>`;
    });
    css$12 = {
      code: "._toastContainer.svelte-7xr3c1{top:var(--toastContainerTop, 1.5rem);right:var(--toastContainerRight, 2rem);bottom:var(--toastContainerBottom, auto);left:var(--toastContainerLeft, auto);position:fixed;margin:0;padding:0;list-style-type:none;pointer-events:none;z-index:9999}",
      map: null
    };
    SvelteToast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $toast, $$unsubscribe_toast;
      $$unsubscribe_toast = subscribe(toast, (value) => $toast = value);
      let { options = {} } = $$props;
      let { target = "default" } = $$props;
      let items;
      const getCss = (theme) => Object.keys(theme).reduce((a, c) => `${a}${c}:${theme[c]};`, "");
      if ($$props.options === void 0 && $$bindings.options && options !== void 0)
        $$bindings.options(options);
      if ($$props.target === void 0 && $$bindings.target && target !== void 0)
        $$bindings.target(target);
      $$result.css.add(css$12);
      {
        toast._init(target, options);
      }
      items = $toast.filter((i2) => i2.target === target);
      $$unsubscribe_toast();
      return `<ul class="${"_toastContainer svelte-7xr3c1"}">${each(items, (item) => {
        return `<li${add_attribute("style", getCss(item.theme), 0)}>${validate_component(ToastItem, "ToastItem").$$render($$result, { item }, {}, {})}
    </li>`;
      })}</ul>`;
    });
    FiArrowRightCircle = {
      a: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      c: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>'
    };
    css5 = {
      code: "input.svelte-1i9m4of{border:2.5px solid var(--secondary-color);opacity:75%;background-color:transparent;border-radius:30px;color:var(--text-color);font-family:'Epilogue';font-weight:300;padding:0.4rem 0.7rem;width:100%}input.svelte-1i9m4of:focus{outline:none;box-shadow:0 0 2px var(--secondary-color);background-color:var(--secondary-highlight-color)}.svelte-1i9m4of::placeholder{color:var(--secondary-color);font-weight:600;opacity:65%}button.svelte-1i9m4of{padding:0;background:none;border:none;outline:none;display:flex;justify-content:center;flex-direction:column;width:fit-content}button.svelte-1i9m4of .arrow{margin:0;color:var(--primary-light-color);opacity:100%;width:2rem}button.svelte-1i9m4of .arrow:hover{margin:0;color:var(--primary-color);cursor:pointer}.email-input.svelte-1i9m4of{display:grid;gap:2rem;grid-template-columns:auto min-content;max-width:30rem}",
      map: null
    };
    EmailInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { className } = $$props;
      if ($$props.className === void 0 && $$bindings.className && className !== void 0)
        $$bindings.className(className);
      $$result.css.add(css5);
      return `<form action="${"https://buttondown.email/api/emails/embed-subscribe/vivian"}" method="${"post"}" class="${"email-input " + escape(className) + " svelte-1i9m4of"}"><input type="${"email"}" placeholder="${"email"}" name="${"email"}" class="${"svelte-1i9m4of"}">
	<button type="${"submit"}" class="${"svelte-1i9m4of"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: FiArrowRightCircle,
        className: "custom-icon arrow"
      }, {}, {})}</button>
</form>`;
    });
  }
});

// .svelte-kit/output/server/chunks/FiLinkedin-fef49d66.js
var FiMail, FiLinkedin;
var init_FiLinkedin_fef49d66 = __esm({
  ".svelte-kit/output/server/chunks/FiLinkedin-fef49d66.js"() {
    FiMail = {
      a: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      c: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>'
    };
    FiLinkedin = {
      a: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      c: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>'
    };
  }
});

// .svelte-kit/output/server/entries/pages/index.svelte.js
var index_svelte_exports = {};
__export(index_svelte_exports, {
  default: () => Routes
});
var css$13, Link, FiArrowDownCircle, FiGithub, FiInstagram, FiYoutube, FiTwitter, vwl, vivian, design1, design2, code1, code2, code3, write1, write2, write3, css6, Routes;
var init_index_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/index.svelte.js"() {
    init_index_88921582();
    init_Tag_1ce0eb4c();
    init_EmailInput_991948a7();
    init_Icon_4e55a523();
    init_FiLinkedin_fef49d66();
    init_SvelteToast_svelte_svelte_type_style_lang_382c1799();
    css$13 = {
      code: "a.svelte-jrov8f{width:fit-content;border:2.5px solid var(--primary-color);background-color:var(--transparent);border-radius:30px;color:var(--primary-color);font-family:'Epilogue';font-weight:600;font-size:0.8rem;text-decoration:none;padding:0.4rem 0.7rem;cursor:pointer;white-space:nowrap}a.svelte-jrov8f:hover{background-color:var(--highlight-color);box-shadow:0 0 0.2rem var(--primary-light-color)}",
      map: null
    };
    Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { link = "/" } = $$props;
      if ($$props.link === void 0 && $$bindings.link && link !== void 0)
        $$bindings.link(link);
      $$result.css.add(css$13);
      return `<a sveltekit:prefetch sveltekit:noscroll${add_attribute("href", link, 0)} class="${"svelte-jrov8f"}">${slots.default ? slots.default({}) : ``}
</a>`;
    });
    FiArrowDownCircle = {
      a: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      c: '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>'
    };
    FiGithub = {
      a: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      c: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>'
    };
    FiInstagram = {
      a: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      c: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>'
    };
    FiYoutube = {
      a: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      c: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>'
    };
    FiTwitter = {
      a: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      c: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>'
    };
    vwl = "/_app/assets/vwl-96b80c25.svg";
    vivian = "/_app/assets/vivian-1e319a32.webp";
    design1 = "/_app/assets/market-fermentation-2-403a87cd.webp";
    design2 = "/_app/assets/trader-joes-big-83b182ed.webp";
    code1 = "/_app/assets/research-2-cc48fcc1.webp";
    code2 = "/_app/assets/intro-code-95867d96.svg?w=400&webp";
    code3 = "/_app/assets/research-1-4b3660ab.webp";
    write1 = "/_app/assets/greenwashing-1-2d433eb3.webp";
    write2 = "/_app/assets/viv-nytimes-18b09010.webp";
    write3 = "/_app/assets/greenwashing-2-a6351c4d.webp";
    css6 = {
      code: ".section.svelte-vu37sm.svelte-vu37sm{scroll-snap-align:start}.logo.svelte-vu37sm.svelte-vu37sm{width:40vw;margin:auto;padding-top:10vh;margin-bottom:10vh}@media screen and (max-width: 50rem){.logo.svelte-vu37sm.svelte-vu37sm{width:50vw}}.logo.svelte-vu37sm img.svelte-vu37sm{width:100%;margin:auto}.arrow{opacity:50%;width:100%;margin:auto;margin-top:15vh;margin-bottom:10vh}.arrow:hover{color:var(--secondary-color);cursor:default}.mini-section.svelte-vu37sm.svelte-vu37sm{display:grid;grid-template-columns:1fr 1fr;margin-top:10vh}@media screen and (max-width: 50rem){.mini-section.svelte-vu37sm.svelte-vu37sm{grid-template-columns:1fr;grid-template-rows:1fr 1fr}}.mini-section.svelte-vu37sm img.svelte-vu37sm{box-shadow:0 0 1.2rem 0.1rem var(--secondary-color);max-width:100%}.things.svelte-vu37sm .mini-section.svelte-vu37sm{margin:20vh 0vw 10vh 0vw}.things.svelte-vu37sm .arrow{margin-top:5vh}.mini-section.svelte-vu37sm .avatar.svelte-vu37sm{width:75%;max-width:20rem;margin:auto;border-radius:100%}@media screen and (max-width: 50rem){.mini-section.svelte-vu37sm .avatar.svelte-vu37sm{width:100%}}.text-right.svelte-vu37sm.svelte-vu37sm{display:flex;justify-content:center;flex-direction:column;margin-left:10%}@media screen and (max-width: 50rem){.text-right.svelte-vu37sm.svelte-vu37sm{margin:auto}}.text-left.svelte-vu37sm.svelte-vu37sm{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;text-align:right;margin-right:10%}@media screen and (max-width: 50rem){.text-left.svelte-vu37sm.svelte-vu37sm{margin:auto}}.intro.svelte-vu37sm.svelte-vu37sm{padding-top:5vh}.intro.svelte-vu37sm .text-right.svelte-vu37sm{margin-left:0}.intro.svelte-vu37sm h1.svelte-vu37sm{margin-top:0;line-height:3rem}.image-stack.svelte-vu37sm.svelte-vu37sm{display:grid;grid-template-columns:repeat(12, 1fr);align-content:center;position:relative;padding-top:2em;max-width:25rem}.image-right.svelte-vu37sm.svelte-vu37sm{margin-left:10%}@media screen and (max-width: 50rem){.image-right.svelte-vu37sm.svelte-vu37sm{order:-1;margin:auto}}.image-left.svelte-vu37sm.svelte-vu37sm{margin-right:10%}@media screen and (max-width: 50rem){.image-left.svelte-vu37sm.svelte-vu37sm{margin:auto}}.design-top.svelte-vu37sm.svelte-vu37sm{grid-column:8/-1;grid-row:1;z-index:1;transform:rotate(12deg)}.design-bottom.svelte-vu37sm.svelte-vu37sm{grid-column:1/span 8;grid-row:1;padding-top:20%;transform:rotate(-10deg)}.code-top.svelte-vu37sm.svelte-vu37sm{grid-column:7/-1;grid-row:1;z-index:2;padding-top:20%;transform:rotate(10deg)}.code-middle.svelte-vu37sm.svelte-vu37sm{grid-column:1/span 7;grid-row:1;z-index:1;padding-top:75%}.code-bottom.svelte-vu37sm.svelte-vu37sm{grid-column:3/span 6;grid-row:1;transform:rotate(-5deg)}.write-top.svelte-vu37sm.svelte-vu37sm{grid-column:4/-1;grid-row:1;z-index:2;padding-top:40%;transform:rotate(-15deg)}.write-middle.svelte-vu37sm.svelte-vu37sm{grid-column:1/span 6;grid-row:1;z-index:1;transform:rotate(-5deg)}.write-bottom.svelte-vu37sm.svelte-vu37sm{grid-column:4/-1;grid-row:1;padding-top:7.5%;transform:rotate(8deg)}.outro.svelte-vu37sm.svelte-vu37sm{margin:15vh 0}.outro-content.svelte-vu37sm.svelte-vu37sm{display:grid;grid-template-columns:1fr 7rem 1.3fr}@media screen and (max-width: 50rem){.outro-content.svelte-vu37sm.svelte-vu37sm{display:flex;flex-direction:column}}.outro.svelte-vu37sm h1.svelte-vu37sm{width:fit-content;margin:auto}.outro.svelte-vu37sm h2.svelte-vu37sm{background-color:var(--primary-color);background-image:none;font-size:1.5rem}@media screen and (max-width: 50rem){.about.svelte-vu37sm.svelte-vu37sm{order:-1}}.outro.svelte-vu37sm span.svelte-vu37sm{height:80%;width:4px;background-color:var(--secondary-color);border-radius:99px;opacity:50%;margin:auto}.contact.svelte-vu37sm.svelte-vu37sm{text-align:right;display:flex;flex-direction:column;align-items:flex-end}.media-icon-container.svelte-vu37sm.svelte-vu37sm{display:grid;grid-template-columns:repeat(3, min-content) 1fr;grid-template-rows:1fr 1fr;grid-gap:0.75rem}.media-icon{font-size:3rem !important}.contact.svelte-vu37sm p.svelte-vu37sm{margin:5% 0}.selectedTag.svelte-vu37sm .filter{background-color:var(--highlight-color);box-shadow:0 0 0.2rem var(--primary-light-color);color:var(--primary-color);border:2.5px solid var(--primary-color)}.hidden{visibility:hidden}",
      map: null
    };
    Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css6);
      return `${$$result.head += `${$$result.title = `<title>home</title>`, ""}<meta property="${"og:title"}" content="${"vivian li's website"}" data-svelte="svelte-lejy8w"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-lejy8w"><meta property="${"og:image"}" content="${"/thumbnails/vwl-site.png"}" data-svelte="svelte-lejy8w"><meta property="${"og:url"}" content="${"https://www.vivianwli.com"}" data-svelte="svelte-lejy8w">`, ""}

<div class="${"content"}">${validate_component(SvelteToast, "SvelteToast").$$render($$result, {}, {}, {})}
	
	<div class="${"section svelte-vu37sm"}"><div class="${"logo svelte-vu37sm"}"><img${add_attribute("src", vwl, 0)} alt="${"logo"}" class="${"svelte-vu37sm"}"></div>
		${validate_component(Icon, "Icon").$$render($$result, {
        src: FiArrowDownCircle,
        className: "custom-icon arrow"
      }, {}, {})}</div>
	
	<div class="${"section svelte-vu37sm"}"><div class="${"mini-section intro svelte-vu37sm"}"><img class="${"avatar svelte-vu37sm"}"${add_attribute("src", vivian, 0)} alt="${"viv"}">
			<div class="${"text-right svelte-vu37sm"}"><h1 class="${"svelte-vu37sm"}">hello! i&#39;m vivian li.</h1>
				<p>I\u2019m a very small girl studying in the <b>Iovine and Young Academy</b>, based in Los
					Angeles at the University of Southern California. I live to
					<b>tell stories in beautiful ways</b>, especially around climate solutions and
					sustainability. I also love many other things and I&#39;m generally doing all sorts of stuff.
					<b>Welcome to my playground</b>!
				</p>
				${validate_component(Link, "Link").$$render($$result, {
        link: "https://drive.google.com/file/d/1hCMsXYMXhtcDfGwaqLa2xAStBQDChc-W/view?usp=sharing"
      }, {}, {
        default: () => {
          return `resume`;
        }
      })}</div></div>
		${validate_component(Icon, "Icon").$$render($$result, {
        src: FiArrowDownCircle,
        className: "custom-icon arrow"
      }, {}, {})}</div>
	
	<div class="${"section things svelte-vu37sm"}"><div class="${"mini-section svelte-vu37sm"}"><div class="${"text-left svelte-vu37sm"}"><h1>i design...</h1>
				<p>I make pretty things, from brand identities to hand-doodled holiday cards to tiny 3D
					worlds. Part of that process lies in constantly looking out for minutiae behind the beauty
					of daily life. Check it out!
				</p>
				${validate_component(Link, "Link").$$render($$result, { link: "/portfolio" }, {}, {
        default: () => {
          return `my design portfolio`;
        }
      })}</div>
			<div class="${"image-stack image-right svelte-vu37sm"}"><div class="${"image-stack-item design-top svelte-vu37sm"}"><img${add_attribute("src", design1, 0)} alt="${"market fermentation poster design"}" class="${"svelte-vu37sm"}"></div>
				<div class="${"image-stack-item design-bottom svelte-vu37sm"}"><img${add_attribute("src", design2, 0)} alt="${"low poly trader joes"}" class="${"svelte-vu37sm"}"></div></div></div>
		<div class="${"mini-section svelte-vu37sm"}"><div class="${"image-stack image-left svelte-vu37sm"}"><div class="${"image-stack-item code-top svelte-vu37sm"}"><img${add_attribute("src", code1, 0)} alt="${"my senior research project"}" class="${"svelte-vu37sm"}"></div>
				<div class="${"image-stack-item code-middle svelte-vu37sm"}"><img${add_attribute("src", code2, 0)} alt="${"code-ception of this homepage"}" class="${"svelte-vu37sm"}"></div>
				<div class="${"image-stack-item code-bottom svelte-vu37sm"}"><img${add_attribute("src", code3, 0)} alt="${"my senior research project"}" class="${"svelte-vu37sm"}"></div></div>
			<div class="${"text-right svelte-vu37sm"}"><h1>i code...</h1>
				<p>Okay, this one is relatively a work in progress. I&#39;ve coded random projects in the past
					(thanks, high school!), and I&#39;m now on a mission to better understand interactive media
					and data journalism. Feel free to follow along :)
				</p>
				<div class="${"buttons"}">${validate_component(Link, "Link").$$render($$result, { link: "https://github.com/teacupkittie" }, {}, {
        default: () => {
          return `my github`;
        }
      })}
					${validate_component(Link, "Link").$$render($$result, { link: "/blog" }, {}, {
        default: () => {
          return `my blog`;
        }
      })}</div></div></div>
		<div class="${"mini-section svelte-vu37sm"}"><div class="${"text-left svelte-vu37sm"}"><h1>i write...</h1>
				<p>Ah, the power of words. More than anything, I love to talk. Distilling ideas to their core
					components, figuring out what they mean, and sharing them with others. Thankfully, I get
					to do a lot of that here.
				</p>
				<div class="${"buttons"}">${validate_component(Link, "Link").$$render($$result, { link: "/portfolio?tab=journalism" }, {}, {
        default: () => {
          return `my writing portfolio`;
        }
      })}
					${validate_component(Link, "Link").$$render($$result, { link: "/blog" }, {}, {
        default: () => {
          return `my blog`;
        }
      })}</div></div>
			<div class="${"image-stack image-right svelte-vu37sm"}"><div class="${"image-stack-item write-top svelte-vu37sm"}"><img${add_attribute("src", write1, 0)} alt="${"an article i wrote on greenwashing"}" class="${"svelte-vu37sm"}"></div>
				<div class="${"image-stack-item write-middle svelte-vu37sm"}"><img${add_attribute("src", write2, 0)} alt="${"an article i wrote on marine plastic pollution"}" class="${"svelte-vu37sm"}"></div>
				<div class="${"image-stack-item write-bottom svelte-vu37sm"}"><img${add_attribute("src", write3, 0)} alt="${"an article i wrote on greenwashing"}" class="${"svelte-vu37sm"}"></div></div></div>
		${validate_component(Icon, "Icon").$$render($$result, {
        src: FiArrowDownCircle,
        className: "custom-icon arrow"
      }, {}, {})}</div>
	
	<div class="${"section outro svelte-vu37sm"}"><h1 class="${"svelte-vu37sm"}">i create.</h1>
		<div class="${"outro-content svelte-vu37sm"}"><div class="${"contact svelte-vu37sm"}"><h2 class="${"svelte-vu37sm"}">want to chat?</h2>
				<div class="${"media-icon-container svelte-vu37sm"}"><a sveltekit:prefetch href="${"mailto: vwli@usc.edu"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: FiMail,
        className: "custom-icon media-icon"
      }, {}, {})}</a>
					<a sveltekit:prefetch href="${"https://github.com/teacupkittie"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: FiGithub,
        className: "custom-icon media-icon"
      }, {}, {})}</a>
					<a sveltekit:prefetch href="${"https://www.linkedin.com/in/vivian-li-25b424183/"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: FiLinkedin,
        className: "custom-icon media-icon"
      }, {}, {})}</a>
					<a sveltekit:prefetch href="${"https://instagram.com/mclovivian"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: FiInstagram,
        className: "custom-icon media-icon"
      }, {}, {})}</a>
					${validate_component(Icon, "Icon").$$render($$result, {
        src: FiYoutube,
        className: "custom-icon media-icon hidden"
      }, {}, {})}
					${validate_component(Icon, "Icon").$$render($$result, {
        src: FiYoutube,
        className: "custom-icon media-icon hidden"
      }, {}, {})}
					<a sveltekit:prefetch href="${"https://www.youtube.com/c/vivianli0"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: FiYoutube,
        className: "custom-icon media-icon"
      }, {}, {})}</a>
					<a sveltekit:prefetch href="${"https://twitter.com/teacupkittie"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: FiTwitter,
        className: "custom-icon media-icon"
      }, {}, {})}</a></div>
				<p class="${"svelte-vu37sm"}">Subscribe to my newsletter:<br> (this will take you to my blog!)</p>
				${validate_component(EmailInput, "EmailInput").$$render($$result, { className: "right-justified" }, {}, {})}</div>
			<span class="${"svelte-vu37sm"}"></span>
			<div class="${"about svelte-vu37sm"}"><h2 class="${"svelte-vu37sm"}">want to know more?</h2>
				<div class="${"buttons"}"><div class="${["svelte-vu37sm", "selectedTag"].join(" ").trim()}">${validate_component(Tag, "Tag").$$render($$result, { className: "filter" }, {}, {
        default: () => {
          return `what I do at USC`;
        }
      })}</div>
					<div class="${["svelte-vu37sm", ""].join(" ").trim()}">${validate_component(Tag, "Tag").$$render($$result, { className: "filter" }, {}, {
        default: () => {
          return `things I care about`;
        }
      })}</div>
					<div class="${["svelte-vu37sm", ""].join(" ").trim()}">${validate_component(Tag, "Tag").$$render($$result, { className: "filter" }, {}, {
        default: () => {
          return `fun facts`;
        }
      })}</div></div>
				${`<div><ul><li>i&#39;m in a
								<a sveltekit:prefetch href="${"https://iovine-young.usc.edu/"}">crazy-cool major</a>
								with some crazy-cool people
							</li>
							<li>i\u2019m a soprano in
								<a sveltekit:prefetch href="${"https://uscsirensacappella.weebly.com/"}">Sirens A Cappella
								</a> \u{1F90D}
							</li>
							<li>i&#39;m developing USC&#39;s
								<a sveltekit:prefetch href="${"https://green.usc.edu/students/presidents-sustainability-internship-program/"}">sustainability design guidelines</a>, organizing the Student Sustainability Committee&#39;s media presence, and planning
								the Presidential Symposium
							</li>
							<li>i write for <a sveltekit:prefetch href="${"https://hauteusc.com/"}">Haute Mag</a> and
								design for <a sveltekit:prefetch href="${"https://hacksc.com/"}">HackSC</a></li>
							<li>i skate, bake, run, and enjoy our beautiful campus</li></ul></div>`}</div></div></div>
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  css: () => css7,
  entry: () => entry3,
  js: () => js3,
  module: () => index_svelte_exports
});
var entry3, js3, css7;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_index_svelte();
    entry3 = "pages/index.svelte-046aa6ac.js";
    js3 = ["pages/index.svelte-046aa6ac.js", "chunks/vendor-0e906c74.js", "chunks/Tag-4aa40753.js", "chunks/EmailInput-26df116f.js"];
    css7 = ["assets/pages/index.svelte-8045ed9d.css", "assets/app-ec155f4d.css", "assets/vendor-5469db33.css", "assets/Tag-5030ad19.css", "assets/EmailInput-f58afbb8.css"];
  }
});

// .svelte-kit/output/server/entries/pages/portfolio.svelte.js
var portfolio_svelte_exports = {};
__export(portfolio_svelte_exports, {
  default: () => Portfolio
});
var css$14, ArticleCard, traderJoes, oatte, hackscIG, climateduIG, marketFermentation, blobs, iy8, oracle, climateduSite, css8, Portfolio;
var init_portfolio_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/portfolio.svelte.js"() {
    init_index_88921582();
    init_Tag_1ce0eb4c();
    init_Icon_4e55a523();
    init_FiLinkedin_fef49d66();
    init_stores_8afac308();
    css$14 = {
      code: ".card-container.svelte-dt7gsf.svelte-dt7gsf{background-color:var(--postcard-color);box-shadow:0 0 1rem var(--secondary-subtle-color);display:flex;margin:1.5rem 0}@media screen and (max-width: 50rem){.card-container.svelte-dt7gsf.svelte-dt7gsf{display:block}}.card-container.svelte-dt7gsf img.svelte-dt7gsf{width:40%;object-fit:cover}@media screen and (max-width: 50rem){.card-container.svelte-dt7gsf img.svelte-dt7gsf{width:100%}}.card-container.svelte-dt7gsf .date.svelte-dt7gsf{font-size:0.8rem}.card-container.svelte-dt7gsf .post-description.svelte-dt7gsf{padding:1.5rem;align-self:center}@media screen and (max-width: 50rem){.card-container.svelte-dt7gsf .post-description.svelte-dt7gsf{padding:0 1rem 0.5rem 1rem}}.card-container.svelte-dt7gsf h2.svelte-dt7gsf{font-size:1.2rem;margin-top:0;margin-bottom:0}@media screen and (max-width: 50rem){.card-container.svelte-dt7gsf h2.svelte-dt7gsf{margin-top:1rem}}.card-container.svelte-dt7gsf p.svelte-dt7gsf{font-size:0.9rem;margin-bottom:0}a.svelte-dt7gsf.svelte-dt7gsf{text-decoration:none;color:var(--text-color)}.buttons.svelte-dt7gsf.svelte-dt7gsf{padding-top:1rem}",
      map: null
    };
    ArticleCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { article } = $$props;
      if ($$props.article === void 0 && $$bindings.article && article !== void 0)
        $$bindings.article(article);
      $$result.css.add(css$14);
      return `<a sveltekit:prefetch sveltekit:noscroll${add_attribute("href", article.link, 0)} class="${"svelte-dt7gsf"}"><div class="${"card-container svelte-dt7gsf"}"><img${add_attribute("src", "/thumbnails/" + article.thumbnail + "?w=400&webp", 0)}${add_attribute("alt", article.title, 0)} class="${"svelte-dt7gsf"}">
		<div class="${"post-description svelte-dt7gsf"}"><h2 class="${"svelte-dt7gsf"}">${escape(article.title)}</h2>
			<p class="${"date svelte-dt7gsf"}">${escape(article.info)}</p>
			<div class="${"buttons svelte-dt7gsf"}">${each(article.tags, (tag) => {
        return `${validate_component(Tag, "Tag").$$render($$result, { className: "inactive" }, {}, {
          default: () => {
            return `${escape(tag)}`;
          }
        })}`;
      })}</div>
			<p class="${"svelte-dt7gsf"}"><!-- HTML_TAG_START -->${article.summary}<!-- HTML_TAG_END --></p></div></div>
</a>`;
    });
    traderJoes = "/_app/assets/trader-joes-big-41af4d84.webp";
    oatte = "/_app/assets/oatte-d6f9a7ab.webp";
    hackscIG = "/_app/assets/hacksc-ig-ef3c94be.webp";
    climateduIG = "/_app/assets/climatedu-ig-ccc172aa.webp";
    marketFermentation = "/_app/assets/market-fermentation-2-1984fe14.webp";
    blobs = "/_app/assets/blobs-portfolio-6de5b2d2.webp";
    iy8 = "/_app/assets/iy8-bf6c9e69.webp";
    oracle = "/_app/assets/blair-oracle-57f29db4.webp";
    climateduSite = "/_app/assets/climatedu-website-cba91f67.webp";
    css8 = {
      code: "h1.svelte-lokfdm.svelte-lokfdm{margin-bottom:2rem}@media screen and (max-width: 32rem){h1.svelte-lokfdm.svelte-lokfdm{padding:0 5vw}}svg.svelte-lokfdm.svelte-lokfdm{filter:drop-shadow(0 0 1rem var(--secondary-subtle-color));grid-row:1/span 2;height:100%;grid-column:2}@media screen and (max-width: 32rem){svg.svelte-lokfdm.svelte-lokfdm{height:90%}}.tab-page.svelte-lokfdm.svelte-lokfdm{background-color:var(--bg-color);grid-row:2/-1;grid-column:1/-1;z-index:1;height:100%}.top.svelte-lokfdm.svelte-lokfdm{z-index:2}.top.svelte-lokfdm svg.svelte-lokfdm{fill:var(--bg-color)}.bottom.svelte-lokfdm .tab-page.svelte-lokfdm{box-shadow:0 0 1rem var(--secondary-subtle-color)}.bottom.svelte-lokfdm svg.svelte-lokfdm{fill:var(--bg-shadow-color)}.bottom.svelte-lokfdm .tab-page-content.svelte-lokfdm{display:none}.tabs.svelte-lokfdm.svelte-lokfdm{display:grid;max-width:100%;width:100%}.tabs.svelte-lokfdm .tab-selector.svelte-lokfdm{grid-column:1;grid-row:1;z-index:3;width:100%;height:2.5rem;display:grid;grid-template-columns:2.5rem 11rem 11rem auto}@media screen and (max-width: 50rem){.tabs.svelte-lokfdm .tab-selector.svelte-lokfdm{grid-template-columns:0rem 11rem 11rem auto}}@media screen and (max-width: 32rem){.tabs.svelte-lokfdm .tab-selector.svelte-lokfdm{grid-template-columns:0rem 9rem 9rem auto}}.tabs.svelte-lokfdm .tab-selector .design-selector.svelte-lokfdm{grid-column:2}.tabs.svelte-lokfdm .tab-selector .journalism-selector.svelte-lokfdm{grid-column:3}.tabs.svelte-lokfdm .tab.svelte-lokfdm{grid-column:1;grid-row:1;display:grid;grid-template-rows:2.5rem 2.5rem auto}@media screen and (max-width: 32rem){.tabs.svelte-lokfdm .tab.svelte-lokfdm{grid-template-rows:2rem 2.5rem auto}}.tabs.svelte-lokfdm .tab .tab-label.svelte-lokfdm{font-size:1rem;margin:0;grid-row:1;grid-column:2;z-index:2;justify-self:center;align-self:center}.tabs.svelte-lokfdm .design-tab.svelte-lokfdm{grid-template-columns:2.5rem 12rem auto}@media screen and (max-width: 50rem){.tabs.svelte-lokfdm .design-tab.svelte-lokfdm{grid-template-columns:0 12rem auto}}@media screen and (max-width: 32rem){.tabs.svelte-lokfdm .design-tab.svelte-lokfdm{grid-template-columns:0 10rem auto}}.tabs.svelte-lokfdm .journalism-tab.svelte-lokfdm{grid-template-columns:12.5rem 12rem auto}@media screen and (max-width: 50rem){.tabs.svelte-lokfdm .journalism-tab.svelte-lokfdm{grid-template-columns:10rem 12rem auto}}@media screen and (max-width: 32rem){.tabs.svelte-lokfdm .journalism-tab.svelte-lokfdm{grid-template-columns:8rem 10rem auto}}.tab-page-content.svelte-lokfdm.svelte-lokfdm{margin:2rem}.selectedTag.svelte-lokfdm .filter{background-color:var(--highlight-color);box-shadow:0 0 0.2rem var(--primary-light-color);color:var(--primary-color);border:2.5px solid var(--primary-color)}.content-row.svelte-lokfdm.svelte-lokfdm{margin:1.5rem 0;display:flex;gap:1.5rem}.content-row.svelte-lokfdm .img-container.svelte-lokfdm{display:grid}.content-row.svelte-lokfdm .img-container .description.svelte-lokfdm{display:none;background-color:rgba(22, 22, 26, 0.7);color:var(--lighter);font-size:0.85rem;grid-column:1;grid-row:1;z-index:3;padding:1.5rem;align-content:end}.content-row.svelte-lokfdm .img-container .description h2.svelte-lokfdm{background-image:none;background-color:var(--lighter);font-size:1.2rem;margin-bottom:0.5rem}.content-row.svelte-lokfdm .img-container .description p.svelte-lokfdm{margin:0}.content-row.svelte-lokfdm .img-container:hover .description.svelte-lokfdm{display:grid}.content-row.svelte-lokfdm img.svelte-lokfdm{box-shadow:0 0 1rem var(--secondary-subtle-color);max-width:100%;object-fit:scale-down;grid-column:1;grid-row:1}@media screen and (max-width: 50rem){.content-row.svelte-lokfdm.svelte-lokfdm{flex-direction:column}}.outro.svelte-lokfdm.svelte-lokfdm{display:flex;flex-direction:column;align-items:center}.outro.svelte-lokfdm h2.svelte-lokfdm{background-color:var(--primary-color);background-image:none;font-size:1.75rem;margin:3rem 0 0 0}.outro.svelte-lokfdm .icons.svelte-lokfdm{display:flex;gap:0.5rem}.outro.svelte-lokfdm .media-icon{font-size:2.5rem !important;color:var(--primary-color)}.outro.svelte-lokfdm .media-icon:hover{color:var(--primary-selected-color);cursor:pointer}",
      map: null
    };
    Portfolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      function noneSelected() {
        return Object.keys(designTags).filter((k) => designTags[k]).length === 0;
      }
      let designPos;
      let journalismPos;
      let tab = $page.url.searchParams.get("tab");
      if (tab === "journalism") {
        designPos = "bottom";
        journalismPos = "top";
      } else {
        designPos = "top";
        journalismPos = "bottom";
      }
      let designTags = {
        "3D": false,
        "social-media": false,
        illustration: false,
        "ui-ux": false
      };
      let journalismTags = { print: false, video: false };
      let journalismItems = [
        {
          link: "blog/sustainable-textiles",
          title: "An antidote to greenwashing",
          thumbnail: "haute-greenwashing.png",
          info: "DEC 3 2021 \u2022 HAUTE MAGAZINE",
          summary: "An in-depth feature on textiles and their impact in the context of sustainable fashion. Written for Haute Magazine's Fall 2021 issue, On the Edge.",
          tags: ["print"]
        },
        {
          link: "https://www.nytimes.com/2020/05/07/learning/an-unexpected-dinner-guest-marine-plastic-pollution-hides-a-neurological-toxin-in-our-food.html",
          title: "An unexpected dinner guest: marine plastic pollution hides a neurological toxin in our food",
          thumbnail: "nyt-stem-writing.jpg",
          info: "MAY 7 2020 \u2022 THE NEW YORK TIMES",
          summary: `One of eight winning essays (among 1,618 entries) from the New York Times Learning Network's STEM Writing Contest. Also published on <a href="https://phys.org/news/2019-09-marine-plastic-pollution-neurological-toxin.html">Phys.org</a>.`,
          tags: ["print"]
        },
        {
          link: "https://msmagazine.com/2019/12/16/inside-the-feminist-tech-jamboree-helping-girls-break-barriers-in-stem/",
          title: "Inside the feminist tech jamboree helping girls break barriers in STEM",
          thumbnail: "technica.jpg",
          info: "DEC 16 2019 \u2022 MS. MAGAZINE",
          summary: 'Behind-the-scenes of Technica, an all-women and non-binary hackathon hosted annually at the University of Maryland, College Park. Published as a part of "The Future is Ms."',
          tags: ["print"]
        },
        {
          link: "http://climatetracker.org/youths-reporting-on-youths/",
          title: "Tracking the UN's youth climate delegates",
          thumbnail: "climate-tracker.jpg",
          info: "OCT 2 2019 \u2022 CLIMATE TRACKER",
          summary: "Profiles of international leaders at the UN Youth Action Summit alongside the global climate strikes on September 20, 2019. Written with Yamila Frej and Amogh Dimri during a three-day mentorship with Climate Tracker.",
          tags: ["print"]
        },
        {
          link: "https://silverchips.mbhs.edu/content/raising-the-standard-for-mcps-in-ongoing-contract-negotiations-32318/",
          title: "Raising the standard for MCPS in ongoing contract negotiations",
          thumbnail: "teachers.jfif",
          info: "NOV 13 2019 \u2022 SILVER CHIPS ONLINE",
          summary: "Coverage of teachers' responses to the teacher strikes in Chicago, especially in light of recent contract re-negotiations for Mongomery County Public Schools.",
          tags: ["print"]
        },
        {
          link: "https://youtu.be/UmOasRlMuXs",
          title: "The hidden link between bats, COVID-19, and climate change",
          thumbnail: "breakthrough.png",
          info: "JUN 25 2020 \u2022 BREAKTHROUGH JUNIOR CHALLENGE",
          summary: "A synthesized explanation of yet another reason climate change should matter to us\u2014the potential normalcy of pandemics via zoonotic diseases.",
          tags: ["video"]
        }
      ];
      $$result.css.add(css8);
      $$unsubscribe_page();
      return `${$$result.head += `${$$result.title = `<title>portfolio</title>`, ""}<meta property="${"og:title"}" content="${"vivian li's portfolio"}" data-svelte="svelte-h8188z"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-h8188z"><meta property="${"og:image"}" content="${"/thumbnails/vwl-site.png"}" data-svelte="svelte-h8188z"><meta property="${"og:url"}" content="${"https://www.vivianwli.com/portfolio"}" data-svelte="svelte-h8188z">`, ""}

<div class="${"content"}"><h1 class="${"svelte-lokfdm"}">portfolio</h1>
	<div class="${"tabs svelte-lokfdm"}"><div class="${"tab-selector svelte-lokfdm"}"><div class="${"design-selector svelte-lokfdm"}"></div>
			<div class="${"journalism-selector svelte-lokfdm"}"></div></div>
		<div class="${"design-tab tab " + escape(designPos) + " svelte-lokfdm"}"><h2 class="${"tab-label svelte-lokfdm"}">design</h2>
			<svg viewBox="${"0 0 263 108"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-lokfdm"}"><path d="${"M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"}"></path></svg>
			<div class="${"tab-page svelte-lokfdm"}"><div class="${"tab-page-content svelte-lokfdm"}"><div class="${"buttons"}">${each(Object.keys(designTags).filter((k) => designTags[k]), (tag) => {
        return `<div class="${["svelte-lokfdm", designTags[tag] ? "selectedTag" : ""].join(" ").trim()}">${validate_component(Tag, "Tag").$$render($$result, { className: "filter" }, {}, {
          default: () => {
            return `${escape(tag)}`;
          }
        })}
							</div>`;
      })}
						${each(Object.keys(designTags).filter((k) => !designTags[k]), (tag) => {
        return `<div class="${["svelte-lokfdm", designTags[tag] ? "selectedTag" : ""].join(" ").trim()}">${validate_component(Tag, "Tag").$$render($$result, { className: "filter" }, {}, {
          default: () => {
            return `${escape(tag)}`;
          }
        })}
							</div>`;
      })}
						<div>${validate_component(Tag, "Tag").$$render($$result, { className: "clear" }, {}, {
        default: () => {
          return `clear all`;
        }
      })}</div></div>
					<div class="${"content-container"}">${noneSelected() || designTags["3D"] ? `<div class="${"threed content-row svelte-lokfdm"}"><div class="${"img-container svelte-lokfdm"}"><div class="${"description svelte-lokfdm"}"><h2 class="${"svelte-lokfdm"}">low poly Trader Joe&#39;s</h2>
										<p class="${"svelte-lokfdm"}">This low-poly scene was my very first project in Blender. I love grocery
											stores and the holidays (especially Christmas), so it&#39;s a perfect combination!
										</p></div>
									<img${add_attribute("src", traderJoes, 0)} alt="${"low poly Trader Joe's"}" class="${"svelte-lokfdm"}"></div>
								<div class="${"img-container svelte-lokfdm"}"><div class="${"description svelte-lokfdm"}"><h2 class="${"svelte-lokfdm"}">oatte oat milk lattes</h2>
										<p class="${"svelte-lokfdm"}">I used Adobe Illustrator and Dimension to create this imaginary product.
											Featuring almond black tea, red bean, matcha, and cinnamon cold brew flavors.
										</p></div>
									<img${add_attribute("src", oatte, 0)} alt="${"oat milk latte product mock-up"}" class="${"svelte-lokfdm"}"></div></div>` : ``}
						${noneSelected() || designTags["social-media"] ? `<div class="${"social-media content-row svelte-lokfdm"}"><div class="${"img-container svelte-lokfdm"}"><div class="${"description svelte-lokfdm"}"><h2 class="${"svelte-lokfdm"}">HackSC instagram</h2>
										<p class="${"svelte-lokfdm"}">Brand identity and Instagram assets for HackSC 2022. Neon gradients, glow
											effects, and blobs. More <a href="${"https://instagram.com/hackscofficial"}">here</a>. Made in Figma!
										</p></div>
									<img${add_attribute("src", hackscIG, 0)} alt="${"HackSC Instagram posts"}" class="${"svelte-lokfdm"}"></div>
								<div class="${"img-container svelte-lokfdm"}"><div class="${"description svelte-lokfdm"}"><h2 class="${"svelte-lokfdm"}">climatedu instagram</h2>
										<p class="${"svelte-lokfdm"}">Themed doodles for climatedu&#39;s weekly Infographic posts. Illustrations in
											Adobe Fresco on iPad, assembled in Figma. More <a href="${"https://instagram.com/climateduteam"}">here</a>.
										</p></div>
									<img${add_attribute("src", climateduIG, 0)} alt="${"climatedu Instagram posts"}" class="${"svelte-lokfdm"}"></div></div>` : ``}
						${noneSelected() || designTags["illustration"] ? `<div class="${"illustration content-row svelte-lokfdm"}"><div class="${"img-container svelte-lokfdm"}"><div class="${"description svelte-lokfdm"}"><h2 class="${"svelte-lokfdm"}">market ferment-<br>ation</h2>
										<p class="${"svelte-lokfdm"}">Movie poster! Adobe Illustrator and InDesign.</p></div>
									<img${add_attribute("src", marketFermentation, 0)} alt="${"market fermentation mock movie poster"}" class="${"svelte-lokfdm"}"></div>
								<div class="${"img-container svelte-lokfdm"}"><div class="${"description svelte-lokfdm"}"><h2 class="${"svelte-lokfdm"}">fruit blob emojis</h2>
										<p class="${"svelte-lokfdm"}">Custom emojis made for Discord, illustrated in Adobe Fresco! See more of them <a href="${"blog/fruit-blobs"}">here</a>.
										</p></div>
									<img${add_attribute("src", blobs, 0)} alt="${"Fruit blobs for Discord"}" class="${"svelte-lokfdm"}"></div>
								<div class="${"img-container svelte-lokfdm"}"><div class="${"description svelte-lokfdm"}"><h2 class="${"svelte-lokfdm"}">iy8 logo</h2>
										<p class="${"svelte-lokfdm"}">Sample logo (very not official) for Cohort 8 of IYA (note the 8!). Illustrated
											in Adobe Fresco.
										</p></div>
									<img${add_attribute("src", iy8, 0)} alt="${"Iovine and Young Academy Cohort 8 sample logo art"}" class="${"svelte-lokfdm"}"></div></div>` : ``}
						${noneSelected() || designTags["ui-ux"] ? `<div class="${"ui-ux content-row svelte-lokfdm"}"><div class="${"img-container svelte-lokfdm"}"><div class="${"description svelte-lokfdm"}"><h2 class="${"svelte-lokfdm"}">ORACLE of Blair</h2>
										<p class="${"svelte-lokfdm"}">Web and graphic design for our senior class model of the 2020 Presidential
											election. Designed in Figma. More <a href="${"https://polistat.mbhs.edu"}">here</a>.
										</p></div>
									<img${add_attribute("src", oracle, 0)} alt="${"Logo header for the ORACLE of Blair"}" class="${"svelte-lokfdm"}"></div>
								<div class="${"img-container svelte-lokfdm"}"><div class="${"description svelte-lokfdm"}"><h2 class="${"svelte-lokfdm"}">climatedu</h2>
										<p class="${"svelte-lokfdm"}">Website platform design for climatedu.org, an online climate course for middle
											and high school students. Designed in Figma. More <a href="${"https://climatedu.org"}">here</a>.
										</p></div>
									<img${add_attribute("src", climateduSite, 0)} alt="${"Website home page for climatedu.org"}" class="${"svelte-lokfdm"}"></div></div>` : ``}</div></div></div></div>
		<div class="${"journalism-tab tab " + escape(journalismPos) + " svelte-lokfdm"}"><h2 class="${"tab-label svelte-lokfdm"}">journalism</h2>
			<svg viewBox="${"0 0 263 108"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-lokfdm"}"><path d="${"M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"}"></path></svg>
			<div class="${"tab-page svelte-lokfdm"}"><div class="${"tab-page-content svelte-lokfdm"}"><div class="${"buttons"}">${each(Object.keys(journalismTags).filter((k) => journalismTags[k]), (tag) => {
        return `<div class="${["svelte-lokfdm", journalismTags[tag] ? "selectedTag" : ""].join(" ").trim()}">${validate_component(Tag, "Tag").$$render($$result, { className: "filter" }, {}, {
          default: () => {
            return `${escape(tag)}`;
          }
        })}
							</div>`;
      })}
						${each(Object.keys(journalismTags).filter((k) => !journalismTags[k]), (tag) => {
        return `<div class="${["svelte-lokfdm", journalismTags[tag] ? "selectedTag" : ""].join(" ").trim()}">${validate_component(Tag, "Tag").$$render($$result, { className: "filter" }, {}, {
          default: () => {
            return `${escape(tag)}`;
          }
        })}
							</div>`;
      })}
						<div>${validate_component(Tag, "Tag").$$render($$result, { className: "clear" }, {}, {
        default: () => {
          return `clear all`;
        }
      })}</div></div>
					<div class="${"content-container"}">${Object.keys(journalismTags).filter((k) => journalismTags[k]).length === 0 ? `${each(journalismItems, (article) => {
        return `${validate_component(ArticleCard, "ArticleCard").$$render($$result, { article }, {}, {})}`;
      })}` : `${each(journalismItems, (article) => {
        return `${each(article.tags, (tag) => {
          return `${journalismTags[tag] ? `${validate_component(ArticleCard, "ArticleCard").$$render($$result, { article }, {}, {})}` : ``}`;
        })}`;
      })}`}</div></div></div></div></div>
	<div class="${"outro svelte-lokfdm"}"><h2 class="${"svelte-lokfdm"}">don&#39;t be shy...</h2>
		<div class="${"icons svelte-lokfdm"}"><a sveltekit:prefetch href="${"https://www.linkedin.com/in/vivian-li-25b424183/"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: FiLinkedin,
        className: "custom-icon media-icon"
      }, {}, {})}</a>
			<a sveltekit:prefetch href="${"mailto: vwli@usc.edu"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: FiMail,
        className: "custom-icon media-icon"
      }, {}, {})}</a></div></div>
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  css: () => css9,
  entry: () => entry4,
  js: () => js4,
  module: () => portfolio_svelte_exports
});
var entry4, js4, css9;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_portfolio_svelte();
    entry4 = "pages/portfolio.svelte-5cb5f09e.js";
    js4 = ["pages/portfolio.svelte-5cb5f09e.js", "chunks/vendor-0e906c74.js", "chunks/Tag-4aa40753.js", "chunks/stores-ada5a490.js"];
    css9 = ["assets/pages/portfolio.svelte-622bf7cd.css", "assets/app-ec155f4d.css", "assets/vendor-5469db33.css", "assets/Tag-5030ad19.css"];
  }
});

// .svelte-kit/output/server/entries/pages/resume.svelte.js
var resume_svelte_exports = {};
__export(resume_svelte_exports, {
  default: () => Resume
});
var Resume;
var init_resume_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/resume.svelte.js"() {
    init_index_88921582();
    Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      location = "https://drive.google.com/file/d/1hCMsXYMXhtcDfGwaqLa2xAStBQDChc-W/view?usp=sharing";
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  css: () => css10,
  entry: () => entry5,
  js: () => js5,
  module: () => resume_svelte_exports
});
var entry5, js5, css10;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    init_resume_svelte();
    entry5 = "pages/resume.svelte-1bb2bf71.js";
    js5 = ["pages/resume.svelte-1bb2bf71.js", "chunks/vendor-0e906c74.js"];
    css10 = ["assets/vendor-5469db33.css"];
  }
});

// .svelte-kit/output/server/chunks/BlogImage-10d5ac5e.js
var css$15, PostHeader, css11, BlogImage;
var init_BlogImage_10d5ac5e = __esm({
  ".svelte-kit/output/server/chunks/BlogImage-10d5ac5e.js"() {
    init_index_88921582();
    init_Tag_1ce0eb4c();
    css$15 = {
      code: ".container.svelte-mda5gf{margin-bottom:3rem}h1.svelte-mda5gf{line-height:4rem}@media screen and (max-width: 32rem){h1.svelte-mda5gf{font-size:2.5rem}}",
      map: null
    };
    PostHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title: title7 } = $$props;
      let { publishDate: publishDate7 } = $$props;
      let { editDate: editDate2 } = $$props;
      let { tags: tags7 } = $$props;
      let { thumbnail: thumbnail7 } = $$props;
      let { slug: slug7 } = $$props;
      let { summary: summary7 } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title7 !== void 0)
        $$bindings.title(title7);
      if ($$props.publishDate === void 0 && $$bindings.publishDate && publishDate7 !== void 0)
        $$bindings.publishDate(publishDate7);
      if ($$props.editDate === void 0 && $$bindings.editDate && editDate2 !== void 0)
        $$bindings.editDate(editDate2);
      if ($$props.tags === void 0 && $$bindings.tags && tags7 !== void 0)
        $$bindings.tags(tags7);
      if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail7 !== void 0)
        $$bindings.thumbnail(thumbnail7);
      if ($$props.slug === void 0 && $$bindings.slug && slug7 !== void 0)
        $$bindings.slug(slug7);
      if ($$props.summary === void 0 && $$bindings.summary && summary7 !== void 0)
        $$bindings.summary(summary7);
      $$result.css.add(css$15);
      return `${$$result.head += `${$$result.title = `<title>${escape(title7)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", title7, 0)} data-svelte="svelte-3kds6d"><meta property="${"og:type"}" content="${"article"}" data-svelte="svelte-3kds6d"><meta property="${"og:image"}"${add_attribute("content", "/thumbnails/" + thumbnail7, 0)} data-svelte="svelte-3kds6d"><meta property="${"og:url"}"${add_attribute("content", "https://www.vivianwli.com/blog/" + slug7, 0)} data-svelte="svelte-3kds6d"><meta property="${"og:description"}"${add_attribute("content", summary7, 0)} data-svelte="svelte-3kds6d">`, ""}


<div class="${"container svelte-mda5gf"}"><h1 class="${"svelte-mda5gf"}">${escape(title7)}</h1>
	<p class="${"date"}">PUBLISHED ${escape(publishDate7)}
		${editDate2 ? `\u2022 LAST EDITED ${escape(editDate2)}` : ``}</p>
	<div class="${"buttons"}">${each(tags7, (tag) => {
        return `${validate_component(Tag, "Tag").$$render($$result, { className: "inactive" }, {}, {
          default: () => {
            return `${escape(tag.name)}`;
          }
        })}`;
      })}</div>
</div>`;
    });
    css11 = {
      code: "img.svelte-4ge5mg.svelte-4ge5mg{width:50%;display:block;margin:2rem auto 1rem auto;box-shadow:0 0 1.2rem 0.1rem var(--secondary-subtle-color)}@media screen and (max-width: 50rem){img.svelte-4ge5mg.svelte-4ge5mg{width:90%}}.caption.svelte-4ge5mg.svelte-4ge5mg{text-align:center;display:block;width:50%;font-size:0.9rem;margin:1rem auto 2rem auto;color:var(--secondary-selected-color);font-style:italic}.gallery-img.svelte-4ge5mg img.svelte-4ge5mg{width:90%}.gallery-img.svelte-4ge5mg .caption.svelte-4ge5mg{width:90%}.half-img.svelte-4ge5mg img.svelte-4ge5mg{width:20rem;max-width:90%}.half-img.svelte-4ge5mg .caption.svelte-4ge5mg{width:20rem;max-width:90%}",
      map: null
    };
    BlogImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { src } = $$props;
      let { caption } = $$props;
      let { className } = $$props;
      if ($$props.src === void 0 && $$bindings.src && src !== void 0)
        $$bindings.src(src);
      if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
        $$bindings.caption(caption);
      if ($$props.className === void 0 && $$bindings.className && className !== void 0)
        $$bindings.className(className);
      $$result.css.add(css11);
      return `<div class="${escape(null_to_empty(className)) + " svelte-4ge5mg"}"><img${add_attribute("src", src, 0)}${add_attribute("alt", caption, 0)} class="${"svelte-4ge5mg"}">
	<div class="${"caption svelte-4ge5mg"}"><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></div>
</div>`;
    });
  }
});

// .svelte-kit/output/server/chunks/BlogGallery-55092816.js
var css12, BlogGallery;
var init_BlogGallery_55092816 = __esm({
  ".svelte-kit/output/server/chunks/BlogGallery-55092816.js"() {
    init_index_88921582();
    css12 = {
      code: ".gallery.svelte-rdygkv{display:grid;grid-template-columns:repeat(var(--columns), 1fr)}@media screen and (max-width: 50rem){.gallery.svelte-rdygkv{display:block}}.half-width.svelte-rdygkv{margin:auto;width:50%}@media screen and (max-width: 50rem){.half-width.svelte-rdygkv{width:90%}}",
      map: null
    };
    BlogGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { columns } = $$props;
      let { className } = $$props;
      if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
        $$bindings.columns(columns);
      if ($$props.className === void 0 && $$bindings.className && className !== void 0)
        $$bindings.className(className);
      $$result.css.add(css12);
      return `<div class="${escape(null_to_empty("gallery " + className)) + " svelte-rdygkv"}" style="${"--columns: " + escape(columns)}">${slots.default ? slots.default({}) : ``}
</div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/blog/fruit-blobs.svx.js
var fruit_blobs_svx_exports = {};
__export(fruit_blobs_svx_exports, {
  default: () => Fruit_blobs,
  metadata: () => metadata
});
var blobs1, blobs2, blobs3, blobs4, metadata, title, slug, publishDate, editDate, tags, thumbnail, summary, Fruit_blobs;
var init_fruit_blobs_svx = __esm({
  ".svelte-kit/output/server/entries/pages/blog/fruit-blobs.svx.js"() {
    init_index_88921582();
    init_BlogImage_10d5ac5e();
    init_BlogGallery_55092816();
    init_Tag_1ce0eb4c();
    blobs1 = "/_app/assets/blobberries-6ef93a8b.webp";
    blobs2 = "/_app/assets/blobcitrus-2845ae02.webp";
    blobs3 = "/_app/assets/blobsuggestive-25f1b9b0.webp";
    blobs4 = "/_app/assets/basicbasket-d5a7b5f4.webp";
    metadata = {
      "title": "Fruit & vegetable blob emojis for Discord",
      "slug": "fruit-blobs",
      "publishDate": "JUL 22 2020",
      "editDate": "JAN 4 2021",
      "tags": [{ "name": "art" }],
      "thumbnail": "fruit-blobs.png",
      "summary": "I received a Discord Nitro gift for my birthday month (July!), which ultimately catalyzed the creation of these fruit and vegetable blob emojis."
    };
    ({ title, slug, publishDate, editDate, tags, thumbnail, summary } = metadata);
    Fruit_blobs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(PostHeader, "PostHeader").$$render($$result, {
        title,
        publishDate,
        editDate,
        tags,
        thumbnail,
        slug,
        summary
      }, {}, {})}
<p>I received a Discord Nitro gift for my birthday month (July!), which ultimately catalyzed the creation of these fruit and vegetable blob emojis. The day after I received the gift, I started aggressively joining servers to use their emotes globally. Then, I noticed that Blob Hub Studios was actively accepting pack submissions and that there was a crucial demand in the market for fruit blobs, so I took the plunge.</p>
<p>Join my <a href="${"https://discord.gg/AA2pvSU"}" rel="${"nofollow"}">Discord server</a> and use these blob emojis for your self (global use only available for Nitro users)! Additionally, my blobs are copyrighted by Blob Hub Studios. Join the <a href="${"https://discord.gg/yATKMY8"}" rel="${"nofollow"}">larger network</a>, too, which is home to over 12,000 unique blobs. Since submitting this pack, I\u2019ve been named a Blob Designer as part of the Blob Hub Staff. Below are some of my favorite emojis I\u2019ve created!</p>
${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
        default: () => {
          return `${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: blobs1,
            caption: "<b>:blobraspberry:</b> feeling loved and <b>:bloblackberry:</b> rolling its eyes. Twins with very different personalities!"
          }, {}, {})}
  ${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: blobs2,
            caption: "An embarrassed <b>:blobgrapefruit:</b>, cool <b>:bloblemon:</b>, and zesty <b>:bloborange:</b>"
          }, {}, {})}
  ${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: blobs3,
            caption: "Suggestive <b>:blobergine:</b> and <b>:blobpeach:</b>"
          }, {}, {})}
  ${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: blobs4,
            caption: "Basic emotions for basic fruits, including <b>:blobapple:</b>, <b>:blobpear</b>, <b>:blobanana:</b>, <b>:blobstrawberry:</b>, and <b>:bloberry:</b>"
          }, {}, {})}`;
        }
      })}`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/blog/gingerbread-house-2021.svx.js
var gingerbread_house_2021_svx_exports = {};
__export(gingerbread_house_2021_svx_exports, {
  default: () => Gingerbread_house_2021,
  metadata: () => metadata2
});
var gingerbread1, gingerbread2, gingerbread3, gingerbread4, gingerbread5, gingerbread8, gingerbread6, gingerbread7, jason, metadata2, title2, slug2, publishDate2, tags2, thumbnail2, summary2, Gingerbread_house_2021;
var init_gingerbread_house_2021_svx = __esm({
  ".svelte-kit/output/server/entries/pages/blog/gingerbread-house-2021.svx.js"() {
    init_index_88921582();
    init_BlogImage_10d5ac5e();
    init_BlogGallery_55092816();
    init_Tag_1ce0eb4c();
    gingerbread1 = "/_app/assets/gingerbread-1-baea9cb1.jpg";
    gingerbread2 = "/_app/assets/gingerbread-2-9448f9ca.jpg";
    gingerbread3 = "/_app/assets/gingerbread-3-11ae6a6e.jpg";
    gingerbread4 = "/_app/assets/gingerbread-4-6b69c9ae.jpg";
    gingerbread5 = "/_app/assets/gingerbread-5-0f03423b.jpg";
    gingerbread8 = "/_app/assets/gingerbread-8-447625a3.jpg";
    gingerbread6 = "/_app/assets/gingerbread-6-e4ddf410.jpg";
    gingerbread7 = "/_app/assets/gingerbread-7-e1fad775.jpg";
    jason = "/_app/assets/jason-rolling-dough-728a44e7.jpg";
    metadata2 = {
      "title": "A four-day gingerbread house",
      "slug": "gingerbread-house-2021",
      "publishDate": "JAN 26 2022",
      "tags": [{ "name": "food" }, { "name": "art" }],
      "thumbnail": "gingerbread-5.jpg",
      "summary": "Jason and I built a gingerbread house from scratch\u2014an incredibly deliberate process from research to construction to reflection. We gave our beloved house a photoshoot, too."
    };
    ({ title: title2, slug: slug2, publishDate: publishDate2, tags: tags2, thumbnail: thumbnail2, summary: summary2 } = metadata2);
    Gingerbread_house_2021 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(PostHeader, "PostHeader").$$render($$result, {
        title: title2,
        publishDate: publishDate2,
        tags: tags2,
        slug: slug2,
        thumbnail: thumbnail2,
        summary: summary2
      }, {}, {})}
<p>Here\u2019s the gingerbread house that I made this year.</p>
${validate_component(BlogImage, "BlogImage").$$render($$result, {
        src: gingerbread5,
        caption: "Our magnificent gingerbread house during sunset hour."
      }, {}, {})}
<p>Now, how did we create this beauty?</p>
<h2>Day 0</h2>
<p>We started with <a href="${"https://www.pinterest.com/teacupkittie/gingerbread-house/"}" rel="${"nofollow"}">a Pinterest board</a>. Hurrah! We had a blueprint. Specifically, we were looking at intricate designs made with simple ingredients\u2014less clutter from colorful candies, and more embellishments of royal icing.</p>
<p>In our research, we also took to observing media. We watched the Great British Bake Off (Holidays edition!), Claire Saffitz\u2019s <a href="${"https://www.youtube.com/watch?v=lB_VOwKiRjE"}" rel="${"nofollow"}">attempt to make the greatest gingerbread house</a>, <a href="${"https://www.youtube.com/watch?v=ksgkpdxPPy8"}" rel="${"nofollow"}">year one</a> <em>and</em> <a href="${"https://www.youtube.com/watch?v=_SBSSfbih8U"}" rel="${"nofollow"}">year two</a> of the NYT Cooking Gingerbread Showdown. I\u2019d also been passively consuming this content for years. It was a bucket list item of mine to build a gingerbread house. The time had come.</p>
<p>We also surveyed the vast marketplace of gingerbread house recipes. It needed to be delicious, yet possess undoubtable structural integrity. It proved to be quite the challenge, but we were inspired by Claire Saffitz\u2019s notably thick walls. More than anything, we wanted our house to stay upright. Surely, these walls wouldn\u2019t fall. We used these resources:</p>
<ul><li><a href="${"https://cooking.nytimes.com/guides/47-how-to-make-a-gingerbread-house"}" rel="${"nofollow"}">Gingerbread house recipe</a> from NYT cooking</li>
<li><a href="${"https://s3.documentcloud.org/documents/4321014/Template-for-a-Gingerbread-House.pdf"}" rel="${"nofollow"}">Gingerbread house pattern</a> from NYT cooking</li>
<li><a href="${"https://food52.com/recipes/32341-gingerbread-house-glue"}" rel="${"nofollow"}">Royal icing recipe</a> from Food52</li>
<li><a href="${"https://www.wilton.com/how-to-make-a-candy-stained-glass-window/WLTECH-7845.html"}" rel="${"nofollow"}">Stained glass windows guide</a> from Wilton</li></ul>
<h2>Day 1</h2>
<p>After grocery shopping, we made the dough, split into two identical batches as recommended by NYT and Claire. Into the fridge overnight!</p>
${validate_component(BlogImage, "BlogImage").$$render($$result, {
        src: jason,
        caption: "Jason hard at work in the kitchen."
      }, {}, {})}
<h2>Day 2</h2>
<p>We baked the gingerbread and cut it after cooling. Some recipes recommend to cut the gingerbread while the slabs are still warm, but the NYT recipe instructed us to wait for the gingerbread to cool (trust\u{1F91E}\u{1F3FB}). <em>Spoiler alert:</em> it was still possible to cut the gingerbread nearly two weeks after, when we realized that we needed to cut windows. Regardless of the timeframe, we just needed to be careful while cutting. Cutting cooled gingerbread was a success!</p>
<h2>Day 3</h2>
<p>The magic began here\u2014roughly 14 days after Day 2 (drying out for structural integrity). We crushed 15 jolly ranchers and spread little clumps of each color in each window frame, aiming for one blue/purple, one green, and one pink/red. Some of our slabs actually had a bit of concavity to them, so they wouldn\u2019t lie flat on the baking sheet. To avoid having the melted jolly ranchers seep down under the slab, we placed a little wads of paper towel underneath our silicone mat to prop the slab corners up. It worked! The stained glass candy windows were absolutely beautiful when held up to the light. We bought flickering LED tea lights to illuminate the windows from inside the house :)</p>
<p>We also whipped up the royal icing and embarked on the laborious journey of icing the individual pieces: the scalloped roof shingles, the decorative foliage, and the window frame details. These would dry overnight before we put the house together, eliminating any final-day smudge disasters.</p>
<h2>Day 4</h2>
<p>Time to assemble! Honestly, it was pretty seamless. The icing was sturdy and nothing fell. I chalk this success up the immense patience that Jason and I have (or maybe exhaustion). We watched TV while the slabs were drying together\u2014first the front and sides, then the back, and finally one roof after the other.</p>
<p>For the decorations, we added a row of spice drops along the roof, a spice drop Christmas tree (courtesy of a very abnormally large spice drop and some pearlescent nonpareils), royal icing icicles, and candy canes for the front yard.</p>
<p>The final dusting of powdered sugar across the rooftop and window sills brought the scene to life. After admiring our creation in real time, we gave it a photoshoot. The moment you\u2019ve been waiting for\u2026</p>
<h2>Our magnum opus</h2>
${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
        default: () => {
          return `${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: gingerbread1,
            caption: "Gingerbread house up close and personal"
          }, {}, {})}
    ${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: gingerbread2,
            caption: "Gingerbread house (back) in ambient indoor lighting."
          }, {}, {})}
    ${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: gingerbread3,
            caption: "Gingerbread house (front) in ambient indoor lighting."
          }, {}, {})}
    ${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: gingerbread4,
            caption: "Gingerbread house (front) during sunset hour."
          }, {}, {})}
    ${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: gingerbread5,
            caption: "Gingerbread house (front) during sunset hour."
          }, {}, {})}
    ${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: gingerbread6,
            caption: "The gingerbread house and I in the chilly outdoors!"
          }, {}, {})}
    ${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: gingerbread7,
            caption: "Spice drop rooftop in the crisp winter air."
          }, {}, {})}
    ${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: gingerbread8,
            caption: "Gingerbread house (front) in the crisp winter air."
          }, {}, {})}`;
        }
      })}
<p>I also shot and edited this stop motion video. Enjoy!</p>
<div class="${"iframe-container"}"><iframe class="${"iframe"}" src="${"https://www.youtube.com/embed/b8QaIJUQYi4"}"></iframe></div>
<h2>Reflections</h2>
<ol><li>Creating the detailed icing decorations would have certainly been easier if we used a thinner royal icing. Ultra-thick royal icing is a must for the construction, but it was rather arduous to pipe because it was so dense. The royal icing icicles were especially difficult because they formed droplets instead of sharp ends\u2014perhaps using a thinner icing would help with this, too.</li>
<li>We made our door just a <em>tiny</em> but too small (based on the NYT pattern), such that the LED light would not be able to come in and out of the gingerbread house. So, those lights will flicker incessantly until they go out for good. If you\u2019re adding lights, make the door bigger!</li>
<li>Buy a pack of 40 mini candy canes with the expectation that you\u2019ll really only be able to salvage a ~10. They often come cracked, and they crack <strong>really</strong> easily.</li></ol>
<p>See you next year for another gingerbread house (?) \u{1F973}</p>`;
    });
  }
});

// node_modules/highlight.js/lib/core.js
var require_core = __commonJS({
  "node_modules/highlight.js/lib/core.js"(exports, module2) {
    var deepFreezeEs6 = { exports: {} };
    function deepFreeze(obj) {
      if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function() {
          throw new Error("map is read-only");
        };
      } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function() {
          throw new Error("set is read-only");
        };
      }
      Object.freeze(obj);
      Object.getOwnPropertyNames(obj).forEach(function(name) {
        var prop = obj[name];
        if (typeof prop == "object" && !Object.isFrozen(prop)) {
          deepFreeze(prop);
        }
      });
      return obj;
    }
    deepFreezeEs6.exports = deepFreeze;
    deepFreezeEs6.exports.default = deepFreeze;
    var deepFreeze$1 = deepFreezeEs6.exports;
    var Response3 = class {
      constructor(mode) {
        if (mode.data === void 0)
          mode.data = {};
        this.data = mode.data;
        this.isMatchIgnored = false;
      }
      ignoreMatch() {
        this.isMatchIgnored = true;
      }
    };
    function escapeHTML(value) {
      return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    }
    function inherit$1(original, ...objects) {
      const result = Object.create(null);
      for (const key in original) {
        result[key] = original[key];
      }
      objects.forEach(function(obj) {
        for (const key in obj) {
          result[key] = obj[key];
        }
      });
      return result;
    }
    var SPAN_CLOSE = "</span>";
    var emitsWrappingTags = (node) => {
      return !!node.kind;
    };
    var expandScopeName = (name, { prefix }) => {
      if (name.includes(".")) {
        const pieces = name.split(".");
        return [
          `${prefix}${pieces.shift()}`,
          ...pieces.map((x2, i2) => `${x2}${"_".repeat(i2 + 1)}`)
        ].join(" ");
      }
      return `${prefix}${name}`;
    };
    var HTMLRenderer = class {
      constructor(parseTree, options) {
        this.buffer = "";
        this.classPrefix = options.classPrefix;
        parseTree.walk(this);
      }
      addText(text) {
        this.buffer += escapeHTML(text);
      }
      openNode(node) {
        if (!emitsWrappingTags(node))
          return;
        let scope = node.kind;
        if (node.sublanguage) {
          scope = `language-${scope}`;
        } else {
          scope = expandScopeName(scope, { prefix: this.classPrefix });
        }
        this.span(scope);
      }
      closeNode(node) {
        if (!emitsWrappingTags(node))
          return;
        this.buffer += SPAN_CLOSE;
      }
      value() {
        return this.buffer;
      }
      span(className) {
        this.buffer += `<span class="${className}">`;
      }
    };
    var TokenTree = class {
      constructor() {
        this.rootNode = { children: [] };
        this.stack = [this.rootNode];
      }
      get top() {
        return this.stack[this.stack.length - 1];
      }
      get root() {
        return this.rootNode;
      }
      add(node) {
        this.top.children.push(node);
      }
      openNode(kind) {
        const node = { kind, children: [] };
        this.add(node);
        this.stack.push(node);
      }
      closeNode() {
        if (this.stack.length > 1) {
          return this.stack.pop();
        }
        return void 0;
      }
      closeAllNodes() {
        while (this.closeNode())
          ;
      }
      toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
      }
      walk(builder) {
        return this.constructor._walk(builder, this.rootNode);
      }
      static _walk(builder, node) {
        if (typeof node === "string") {
          builder.addText(node);
        } else if (node.children) {
          builder.openNode(node);
          node.children.forEach((child) => this._walk(builder, child));
          builder.closeNode(node);
        }
        return builder;
      }
      static _collapse(node) {
        if (typeof node === "string")
          return;
        if (!node.children)
          return;
        if (node.children.every((el) => typeof el === "string")) {
          node.children = [node.children.join("")];
        } else {
          node.children.forEach((child) => {
            TokenTree._collapse(child);
          });
        }
      }
    };
    var TokenTreeEmitter = class extends TokenTree {
      constructor(options) {
        super();
        this.options = options;
      }
      addKeyword(text, kind) {
        if (text === "") {
          return;
        }
        this.openNode(kind);
        this.addText(text);
        this.closeNode();
      }
      addText(text) {
        if (text === "") {
          return;
        }
        this.add(text);
      }
      addSublanguage(emitter, name) {
        const node = emitter.root;
        node.kind = name;
        node.sublanguage = true;
        this.add(node);
      }
      toHTML() {
        const renderer = new HTMLRenderer(this, this.options);
        return renderer.value();
      }
      finalize() {
        return true;
      }
    };
    function source(re) {
      if (!re)
        return null;
      if (typeof re === "string")
        return re;
      return re.source;
    }
    function lookahead(re) {
      return concat("(?=", re, ")");
    }
    function anyNumberOfTimes(re) {
      return concat("(?:", re, ")*");
    }
    function optional(re) {
      return concat("(?:", re, ")?");
    }
    function concat(...args) {
      const joined = args.map((x2) => source(x2)).join("");
      return joined;
    }
    function stripOptionsFromArgs(args) {
      const opts = args[args.length - 1];
      if (typeof opts === "object" && opts.constructor === Object) {
        args.splice(args.length - 1, 1);
        return opts;
      } else {
        return {};
      }
    }
    function either(...args) {
      const opts = stripOptionsFromArgs(args);
      const joined = "(" + (opts.capture ? "" : "?:") + args.map((x2) => source(x2)).join("|") + ")";
      return joined;
    }
    function countMatchGroups(re) {
      return new RegExp(re.toString() + "|").exec("").length - 1;
    }
    function startsWith(re, lexeme) {
      const match = re && re.exec(lexeme);
      return match && match.index === 0;
    }
    var BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
    function _rewriteBackreferences(regexps, { joinWith }) {
      let numCaptures = 0;
      return regexps.map((regex) => {
        numCaptures += 1;
        const offset = numCaptures;
        let re = source(regex);
        let out = "";
        while (re.length > 0) {
          const match = BACKREF_RE.exec(re);
          if (!match) {
            out += re;
            break;
          }
          out += re.substring(0, match.index);
          re = re.substring(match.index + match[0].length);
          if (match[0][0] === "\\" && match[1]) {
            out += "\\" + String(Number(match[1]) + offset);
          } else {
            out += match[0];
            if (match[0] === "(") {
              numCaptures++;
            }
          }
        }
        return out;
      }).map((re) => `(${re})`).join(joinWith);
    }
    var MATCH_NOTHING_RE = /\b\B/;
    var IDENT_RE2 = "[a-zA-Z]\\w*";
    var UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
    var NUMBER_RE = "\\b\\d+(\\.\\d+)?";
    var C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    var BINARY_NUMBER_RE = "\\b(0b[01]+)";
    var RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    var SHEBANG = (opts = {}) => {
      const beginShebang = /^#![ ]*\//;
      if (opts.binary) {
        opts.begin = concat(beginShebang, /.*\b/, opts.binary, /\b.*/);
      }
      return inherit$1({
        scope: "meta",
        begin: beginShebang,
        end: /$/,
        relevance: 0,
        "on:begin": (m2, resp) => {
          if (m2.index !== 0)
            resp.ignoreMatch();
        }
      }, opts);
    };
    var BACKSLASH_ESCAPE = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    };
    var APOS_STRING_MODE = {
      scope: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [BACKSLASH_ESCAPE]
    };
    var QUOTE_STRING_MODE = {
      scope: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [BACKSLASH_ESCAPE]
    };
    var PHRASAL_WORDS_MODE = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    };
    var COMMENT = function(begin, end, modeOptions = {}) {
      const mode = inherit$1({
        scope: "comment",
        begin,
        end,
        contains: []
      }, modeOptions);
      mode.contains.push({
        scope: "doctag",
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: true,
        relevance: 0
      });
      const ENGLISH_WORD = either("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
      mode.contains.push({
        begin: concat(/[ ]+/, "(", ENGLISH_WORD, /[.]?[:]?([.][ ]|[ ])/, "){3}")
      });
      return mode;
    };
    var C_LINE_COMMENT_MODE = COMMENT("//", "$");
    var C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
    var HASH_COMMENT_MODE = COMMENT("#", "$");
    var NUMBER_MODE = {
      scope: "number",
      begin: NUMBER_RE,
      relevance: 0
    };
    var C_NUMBER_MODE = {
      scope: "number",
      begin: C_NUMBER_RE,
      relevance: 0
    };
    var BINARY_NUMBER_MODE = {
      scope: "number",
      begin: BINARY_NUMBER_RE,
      relevance: 0
    };
    var REGEXP_MODE = {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [{
        scope: "regexp",
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [
          BACKSLASH_ESCAPE,
          {
            begin: /\[/,
            end: /\]/,
            relevance: 0,
            contains: [BACKSLASH_ESCAPE]
          }
        ]
      }]
    };
    var TITLE_MODE = {
      scope: "title",
      begin: IDENT_RE2,
      relevance: 0
    };
    var UNDERSCORE_TITLE_MODE = {
      scope: "title",
      begin: UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    var METHOD_GUARD = {
      begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    var END_SAME_AS_BEGIN = function(mode) {
      return Object.assign(mode, {
        "on:begin": (m2, resp) => {
          resp.data._beginMatch = m2[1];
        },
        "on:end": (m2, resp) => {
          if (resp.data._beginMatch !== m2[1])
            resp.ignoreMatch();
        }
      });
    };
    var MODES2 = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      MATCH_NOTHING_RE,
      IDENT_RE: IDENT_RE2,
      UNDERSCORE_IDENT_RE,
      NUMBER_RE,
      C_NUMBER_RE,
      BINARY_NUMBER_RE,
      RE_STARTERS_RE,
      SHEBANG,
      BACKSLASH_ESCAPE,
      APOS_STRING_MODE,
      QUOTE_STRING_MODE,
      PHRASAL_WORDS_MODE,
      COMMENT,
      C_LINE_COMMENT_MODE,
      C_BLOCK_COMMENT_MODE,
      HASH_COMMENT_MODE,
      NUMBER_MODE,
      C_NUMBER_MODE,
      BINARY_NUMBER_MODE,
      REGEXP_MODE,
      TITLE_MODE,
      UNDERSCORE_TITLE_MODE,
      METHOD_GUARD,
      END_SAME_AS_BEGIN
    });
    function skipIfHasPrecedingDot(match, response) {
      const before = match.input[match.index - 1];
      if (before === ".") {
        response.ignoreMatch();
      }
    }
    function scopeClassName(mode, _parent) {
      if (mode.className !== void 0) {
        mode.scope = mode.className;
        delete mode.className;
      }
    }
    function beginKeywords(mode, parent) {
      if (!parent)
        return;
      if (!mode.beginKeywords)
        return;
      mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
      mode.__beforeBegin = skipIfHasPrecedingDot;
      mode.keywords = mode.keywords || mode.beginKeywords;
      delete mode.beginKeywords;
      if (mode.relevance === void 0)
        mode.relevance = 0;
    }
    function compileIllegal(mode, _parent) {
      if (!Array.isArray(mode.illegal))
        return;
      mode.illegal = either(...mode.illegal);
    }
    function compileMatch(mode, _parent) {
      if (!mode.match)
        return;
      if (mode.begin || mode.end)
        throw new Error("begin & end are not supported with match");
      mode.begin = mode.match;
      delete mode.match;
    }
    function compileRelevance(mode, _parent) {
      if (mode.relevance === void 0)
        mode.relevance = 1;
    }
    var beforeMatchExt = (mode, parent) => {
      if (!mode.beforeMatch)
        return;
      if (mode.starts)
        throw new Error("beforeMatch cannot be used with starts");
      const originalMode = Object.assign({}, mode);
      Object.keys(mode).forEach((key) => {
        delete mode[key];
      });
      mode.keywords = originalMode.keywords;
      mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
      mode.starts = {
        relevance: 0,
        contains: [
          Object.assign(originalMode, { endsParent: true })
        ]
      };
      mode.relevance = 0;
      delete originalMode.beforeMatch;
    };
    var COMMON_KEYWORDS = [
      "of",
      "and",
      "for",
      "in",
      "not",
      "or",
      "if",
      "then",
      "parent",
      "list",
      "value"
    ];
    var DEFAULT_KEYWORD_SCOPE = "keyword";
    function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
      const compiledKeywords = Object.create(null);
      if (typeof rawKeywords === "string") {
        compileList(scopeName, rawKeywords.split(" "));
      } else if (Array.isArray(rawKeywords)) {
        compileList(scopeName, rawKeywords);
      } else {
        Object.keys(rawKeywords).forEach(function(scopeName2) {
          Object.assign(compiledKeywords, compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2));
        });
      }
      return compiledKeywords;
      function compileList(scopeName2, keywordList) {
        if (caseInsensitive) {
          keywordList = keywordList.map((x2) => x2.toLowerCase());
        }
        keywordList.forEach(function(keyword) {
          const pair = keyword.split("|");
          compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
        });
      }
    }
    function scoreForKeyword(keyword, providedScore) {
      if (providedScore) {
        return Number(providedScore);
      }
      return commonKeyword(keyword) ? 0 : 1;
    }
    function commonKeyword(keyword) {
      return COMMON_KEYWORDS.includes(keyword.toLowerCase());
    }
    var seenDeprecations = {};
    var error2 = (message) => {
      console.error(message);
    };
    var warn = (message, ...args) => {
      console.log(`WARN: ${message}`, ...args);
    };
    var deprecated = (version2, message) => {
      if (seenDeprecations[`${version2}/${message}`])
        return;
      console.log(`Deprecated as of ${version2}. ${message}`);
      seenDeprecations[`${version2}/${message}`] = true;
    };
    var MultiClassError = new Error();
    function remapScopeNames(mode, regexes, { key }) {
      let offset = 0;
      const scopeNames = mode[key];
      const emit = {};
      const positions = {};
      for (let i2 = 1; i2 <= regexes.length; i2++) {
        positions[i2 + offset] = scopeNames[i2];
        emit[i2 + offset] = true;
        offset += countMatchGroups(regexes[i2 - 1]);
      }
      mode[key] = positions;
      mode[key]._emit = emit;
      mode[key]._multi = true;
    }
    function beginMultiClass(mode) {
      if (!Array.isArray(mode.begin))
        return;
      if (mode.skip || mode.excludeBegin || mode.returnBegin) {
        error2("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
        throw MultiClassError;
      }
      if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
        error2("beginScope must be object");
        throw MultiClassError;
      }
      remapScopeNames(mode, mode.begin, { key: "beginScope" });
      mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
    }
    function endMultiClass(mode) {
      if (!Array.isArray(mode.end))
        return;
      if (mode.skip || mode.excludeEnd || mode.returnEnd) {
        error2("skip, excludeEnd, returnEnd not compatible with endScope: {}");
        throw MultiClassError;
      }
      if (typeof mode.endScope !== "object" || mode.endScope === null) {
        error2("endScope must be object");
        throw MultiClassError;
      }
      remapScopeNames(mode, mode.end, { key: "endScope" });
      mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
    }
    function scopeSugar(mode) {
      if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
        mode.beginScope = mode.scope;
        delete mode.scope;
      }
    }
    function MultiClass(mode) {
      scopeSugar(mode);
      if (typeof mode.beginScope === "string") {
        mode.beginScope = { _wrap: mode.beginScope };
      }
      if (typeof mode.endScope === "string") {
        mode.endScope = { _wrap: mode.endScope };
      }
      beginMultiClass(mode);
      endMultiClass(mode);
    }
    function compileLanguage(language) {
      function langRe(value, global2) {
        return new RegExp(source(value), "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global2 ? "g" : ""));
      }
      class MultiRegex {
        constructor() {
          this.matchIndexes = {};
          this.regexes = [];
          this.matchAt = 1;
          this.position = 0;
        }
        addRule(re, opts) {
          opts.position = this.position++;
          this.matchIndexes[this.matchAt] = opts;
          this.regexes.push([opts, re]);
          this.matchAt += countMatchGroups(re) + 1;
        }
        compile() {
          if (this.regexes.length === 0) {
            this.exec = () => null;
          }
          const terminators = this.regexes.map((el) => el[1]);
          this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
          this.lastIndex = 0;
        }
        exec(s3) {
          this.matcherRe.lastIndex = this.lastIndex;
          const match = this.matcherRe.exec(s3);
          if (!match) {
            return null;
          }
          const i2 = match.findIndex((el, i3) => i3 > 0 && el !== void 0);
          const matchData = this.matchIndexes[i2];
          match.splice(0, i2);
          return Object.assign(match, matchData);
        }
      }
      class ResumableMultiRegex {
        constructor() {
          this.rules = [];
          this.multiRegexes = [];
          this.count = 0;
          this.lastIndex = 0;
          this.regexIndex = 0;
        }
        getMatcher(index) {
          if (this.multiRegexes[index])
            return this.multiRegexes[index];
          const matcher = new MultiRegex();
          this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
          matcher.compile();
          this.multiRegexes[index] = matcher;
          return matcher;
        }
        resumingScanAtSamePosition() {
          return this.regexIndex !== 0;
        }
        considerAll() {
          this.regexIndex = 0;
        }
        addRule(re, opts) {
          this.rules.push([re, opts]);
          if (opts.type === "begin")
            this.count++;
        }
        exec(s3) {
          const m2 = this.getMatcher(this.regexIndex);
          m2.lastIndex = this.lastIndex;
          let result = m2.exec(s3);
          if (this.resumingScanAtSamePosition()) {
            if (result && result.index === this.lastIndex)
              ;
            else {
              const m22 = this.getMatcher(0);
              m22.lastIndex = this.lastIndex + 1;
              result = m22.exec(s3);
            }
          }
          if (result) {
            this.regexIndex += result.position + 1;
            if (this.regexIndex === this.count) {
              this.considerAll();
            }
          }
          return result;
        }
      }
      function buildModeRegex(mode) {
        const mm = new ResumableMultiRegex();
        mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
        if (mode.terminatorEnd) {
          mm.addRule(mode.terminatorEnd, { type: "end" });
        }
        if (mode.illegal) {
          mm.addRule(mode.illegal, { type: "illegal" });
        }
        return mm;
      }
      function compileMode(mode, parent) {
        const cmode = mode;
        if (mode.isCompiled)
          return cmode;
        [
          scopeClassName,
          compileMatch,
          MultiClass,
          beforeMatchExt
        ].forEach((ext) => ext(mode, parent));
        language.compilerExtensions.forEach((ext) => ext(mode, parent));
        mode.__beforeBegin = null;
        [
          beginKeywords,
          compileIllegal,
          compileRelevance
        ].forEach((ext) => ext(mode, parent));
        mode.isCompiled = true;
        let keywordPattern = null;
        if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
          mode.keywords = Object.assign({}, mode.keywords);
          keywordPattern = mode.keywords.$pattern;
          delete mode.keywords.$pattern;
        }
        keywordPattern = keywordPattern || /\w+/;
        if (mode.keywords) {
          mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
        }
        cmode.keywordPatternRe = langRe(keywordPattern, true);
        if (parent) {
          if (!mode.begin)
            mode.begin = /\B|\b/;
          cmode.beginRe = langRe(cmode.begin);
          if (!mode.end && !mode.endsWithParent)
            mode.end = /\B|\b/;
          if (mode.end)
            cmode.endRe = langRe(cmode.end);
          cmode.terminatorEnd = source(cmode.end) || "";
          if (mode.endsWithParent && parent.terminatorEnd) {
            cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
          }
        }
        if (mode.illegal)
          cmode.illegalRe = langRe(mode.illegal);
        if (!mode.contains)
          mode.contains = [];
        mode.contains = [].concat(...mode.contains.map(function(c) {
          return expandOrCloneMode(c === "self" ? mode : c);
        }));
        mode.contains.forEach(function(c) {
          compileMode(c, cmode);
        });
        if (mode.starts) {
          compileMode(mode.starts, parent);
        }
        cmode.matcher = buildModeRegex(cmode);
        return cmode;
      }
      if (!language.compilerExtensions)
        language.compilerExtensions = [];
      if (language.contains && language.contains.includes("self")) {
        throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      }
      language.classNameAliases = inherit$1(language.classNameAliases || {});
      return compileMode(language);
    }
    function dependencyOnParent(mode) {
      if (!mode)
        return false;
      return mode.endsWithParent || dependencyOnParent(mode.starts);
    }
    function expandOrCloneMode(mode) {
      if (mode.variants && !mode.cachedVariants) {
        mode.cachedVariants = mode.variants.map(function(variant) {
          return inherit$1(mode, { variants: null }, variant);
        });
      }
      if (mode.cachedVariants) {
        return mode.cachedVariants;
      }
      if (dependencyOnParent(mode)) {
        return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
      }
      if (Object.isFrozen(mode)) {
        return inherit$1(mode);
      }
      return mode;
    }
    var version = "11.4.0";
    var HTMLInjectionError = class extends Error {
      constructor(reason, html) {
        super(reason);
        this.name = "HTMLInjectionError";
        this.html = html;
      }
    };
    var escape3 = escapeHTML;
    var inherit = inherit$1;
    var NO_MATCH = Symbol("nomatch");
    var MAX_KEYWORD_HITS = 7;
    var HLJS = function(hljs) {
      const languages = Object.create(null);
      const aliases = Object.create(null);
      const plugins = [];
      let SAFE_MODE = true;
      const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
      const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
      let options = {
        ignoreUnescapedHTML: false,
        throwUnescapedHTML: false,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        cssSelector: "pre code",
        languages: null,
        __emitter: TokenTreeEmitter
      };
      function shouldNotHighlight(languageName) {
        return options.noHighlightRe.test(languageName);
      }
      function blockLanguage(block) {
        let classes = block.className + " ";
        classes += block.parentNode ? block.parentNode.className : "";
        const match = options.languageDetectRe.exec(classes);
        if (match) {
          const language = getLanguage(match[1]);
          if (!language) {
            warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
            warn("Falling back to no-highlight mode for this block.", block);
          }
          return language ? match[1] : "no-highlight";
        }
        return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
      }
      function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
        let code = "";
        let languageName = "";
        if (typeof optionsOrCode === "object") {
          code = codeOrLanguageName;
          ignoreIllegals = optionsOrCode.ignoreIllegals;
          languageName = optionsOrCode.language;
        } else {
          deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
          deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
          languageName = codeOrLanguageName;
          code = optionsOrCode;
        }
        if (ignoreIllegals === void 0) {
          ignoreIllegals = true;
        }
        const context = {
          code,
          language: languageName
        };
        fire("before:highlight", context);
        const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
        result.code = context.code;
        fire("after:highlight", result);
        return result;
      }
      function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
        const keywordHits = Object.create(null);
        function keywordData(mode, matchText) {
          return mode.keywords[matchText];
        }
        function processKeywords() {
          if (!top.keywords) {
            emitter.addText(modeBuffer);
            return;
          }
          let lastIndex = 0;
          top.keywordPatternRe.lastIndex = 0;
          let match = top.keywordPatternRe.exec(modeBuffer);
          let buf = "";
          while (match) {
            buf += modeBuffer.substring(lastIndex, match.index);
            const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
            const data = keywordData(top, word);
            if (data) {
              const [kind, keywordRelevance] = data;
              emitter.addText(buf);
              buf = "";
              keywordHits[word] = (keywordHits[word] || 0) + 1;
              if (keywordHits[word] <= MAX_KEYWORD_HITS)
                relevance += keywordRelevance;
              if (kind.startsWith("_")) {
                buf += match[0];
              } else {
                const cssClass = language.classNameAliases[kind] || kind;
                emitter.addKeyword(match[0], cssClass);
              }
            } else {
              buf += match[0];
            }
            lastIndex = top.keywordPatternRe.lastIndex;
            match = top.keywordPatternRe.exec(modeBuffer);
          }
          buf += modeBuffer.substr(lastIndex);
          emitter.addText(buf);
        }
        function processSubLanguage() {
          if (modeBuffer === "")
            return;
          let result2 = null;
          if (typeof top.subLanguage === "string") {
            if (!languages[top.subLanguage]) {
              emitter.addText(modeBuffer);
              return;
            }
            result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
            continuations[top.subLanguage] = result2._top;
          } else {
            result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
          }
          if (top.relevance > 0) {
            relevance += result2.relevance;
          }
          emitter.addSublanguage(result2._emitter, result2.language);
        }
        function processBuffer() {
          if (top.subLanguage != null) {
            processSubLanguage();
          } else {
            processKeywords();
          }
          modeBuffer = "";
        }
        function emitMultiClass(scope, match) {
          let i2 = 1;
          while (match[i2] !== void 0) {
            if (!scope._emit[i2]) {
              i2++;
              continue;
            }
            const klass = language.classNameAliases[scope[i2]] || scope[i2];
            const text = match[i2];
            if (klass) {
              emitter.addKeyword(text, klass);
            } else {
              modeBuffer = text;
              processKeywords();
              modeBuffer = "";
            }
            i2++;
          }
        }
        function startNewMode(mode, match) {
          if (mode.scope && typeof mode.scope === "string") {
            emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
          }
          if (mode.beginScope) {
            if (mode.beginScope._wrap) {
              emitter.addKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
              modeBuffer = "";
            } else if (mode.beginScope._multi) {
              emitMultiClass(mode.beginScope, match);
              modeBuffer = "";
            }
          }
          top = Object.create(mode, { parent: { value: top } });
          return top;
        }
        function endOfMode(mode, match, matchPlusRemainder) {
          let matched = startsWith(mode.endRe, matchPlusRemainder);
          if (matched) {
            if (mode["on:end"]) {
              const resp = new Response3(mode);
              mode["on:end"](match, resp);
              if (resp.isMatchIgnored)
                matched = false;
            }
            if (matched) {
              while (mode.endsParent && mode.parent) {
                mode = mode.parent;
              }
              return mode;
            }
          }
          if (mode.endsWithParent) {
            return endOfMode(mode.parent, match, matchPlusRemainder);
          }
        }
        function doIgnore(lexeme) {
          if (top.matcher.regexIndex === 0) {
            modeBuffer += lexeme[0];
            return 1;
          } else {
            resumeScanAtSamePosition = true;
            return 0;
          }
        }
        function doBeginMatch(match) {
          const lexeme = match[0];
          const newMode = match.rule;
          const resp = new Response3(newMode);
          const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
          for (const cb of beforeCallbacks) {
            if (!cb)
              continue;
            cb(match, resp);
            if (resp.isMatchIgnored)
              return doIgnore(lexeme);
          }
          if (newMode.skip) {
            modeBuffer += lexeme;
          } else {
            if (newMode.excludeBegin) {
              modeBuffer += lexeme;
            }
            processBuffer();
            if (!newMode.returnBegin && !newMode.excludeBegin) {
              modeBuffer = lexeme;
            }
          }
          startNewMode(newMode, match);
          return newMode.returnBegin ? 0 : lexeme.length;
        }
        function doEndMatch(match) {
          const lexeme = match[0];
          const matchPlusRemainder = codeToHighlight.substr(match.index);
          const endMode = endOfMode(top, match, matchPlusRemainder);
          if (!endMode) {
            return NO_MATCH;
          }
          const origin = top;
          if (top.endScope && top.endScope._wrap) {
            processBuffer();
            emitter.addKeyword(lexeme, top.endScope._wrap);
          } else if (top.endScope && top.endScope._multi) {
            processBuffer();
            emitMultiClass(top.endScope, match);
          } else if (origin.skip) {
            modeBuffer += lexeme;
          } else {
            if (!(origin.returnEnd || origin.excludeEnd)) {
              modeBuffer += lexeme;
            }
            processBuffer();
            if (origin.excludeEnd) {
              modeBuffer = lexeme;
            }
          }
          do {
            if (top.scope) {
              emitter.closeNode();
            }
            if (!top.skip && !top.subLanguage) {
              relevance += top.relevance;
            }
            top = top.parent;
          } while (top !== endMode.parent);
          if (endMode.starts) {
            startNewMode(endMode.starts, match);
          }
          return origin.returnEnd ? 0 : lexeme.length;
        }
        function processContinuations() {
          const list = [];
          for (let current = top; current !== language; current = current.parent) {
            if (current.scope) {
              list.unshift(current.scope);
            }
          }
          list.forEach((item) => emitter.openNode(item));
        }
        let lastMatch = {};
        function processLexeme(textBeforeMatch, match) {
          const lexeme = match && match[0];
          modeBuffer += textBeforeMatch;
          if (lexeme == null) {
            processBuffer();
            return 0;
          }
          if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
            modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
            if (!SAFE_MODE) {
              const err = new Error(`0 width match regex (${languageName})`);
              err.languageName = languageName;
              err.badRule = lastMatch.rule;
              throw err;
            }
            return 1;
          }
          lastMatch = match;
          if (match.type === "begin") {
            return doBeginMatch(match);
          } else if (match.type === "illegal" && !ignoreIllegals) {
            const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
            err.mode = top;
            throw err;
          } else if (match.type === "end") {
            const processed = doEndMatch(match);
            if (processed !== NO_MATCH) {
              return processed;
            }
          }
          if (match.type === "illegal" && lexeme === "") {
            return 1;
          }
          if (iterations > 1e5 && iterations > match.index * 3) {
            const err = new Error("potential infinite loop, way more iterations than matches");
            throw err;
          }
          modeBuffer += lexeme;
          return lexeme.length;
        }
        const language = getLanguage(languageName);
        if (!language) {
          error2(LANGUAGE_NOT_FOUND.replace("{}", languageName));
          throw new Error('Unknown language: "' + languageName + '"');
        }
        const md = compileLanguage(language);
        let result = "";
        let top = continuation || md;
        const continuations = {};
        const emitter = new options.__emitter(options);
        processContinuations();
        let modeBuffer = "";
        let relevance = 0;
        let index = 0;
        let iterations = 0;
        let resumeScanAtSamePosition = false;
        try {
          top.matcher.considerAll();
          for (; ; ) {
            iterations++;
            if (resumeScanAtSamePosition) {
              resumeScanAtSamePosition = false;
            } else {
              top.matcher.considerAll();
            }
            top.matcher.lastIndex = index;
            const match = top.matcher.exec(codeToHighlight);
            if (!match)
              break;
            const beforeMatch = codeToHighlight.substring(index, match.index);
            const processedCount = processLexeme(beforeMatch, match);
            index = match.index + processedCount;
          }
          processLexeme(codeToHighlight.substr(index));
          emitter.closeAllNodes();
          emitter.finalize();
          result = emitter.toHTML();
          return {
            language: languageName,
            value: result,
            relevance,
            illegal: false,
            _emitter: emitter,
            _top: top
          };
        } catch (err) {
          if (err.message && err.message.includes("Illegal")) {
            return {
              language: languageName,
              value: escape3(codeToHighlight),
              illegal: true,
              relevance: 0,
              _illegalBy: {
                message: err.message,
                index,
                context: codeToHighlight.slice(index - 100, index + 100),
                mode: err.mode,
                resultSoFar: result
              },
              _emitter: emitter
            };
          } else if (SAFE_MODE) {
            return {
              language: languageName,
              value: escape3(codeToHighlight),
              illegal: false,
              relevance: 0,
              errorRaised: err,
              _emitter: emitter,
              _top: top
            };
          } else {
            throw err;
          }
        }
      }
      function justTextHighlightResult(code) {
        const result = {
          value: escape3(code),
          illegal: false,
          relevance: 0,
          _top: PLAINTEXT_LANGUAGE,
          _emitter: new options.__emitter(options)
        };
        result._emitter.addText(code);
        return result;
      }
      function highlightAuto(code, languageSubset) {
        languageSubset = languageSubset || options.languages || Object.keys(languages);
        const plaintext = justTextHighlightResult(code);
        const results = languageSubset.filter(getLanguage).filter(autoDetection).map((name) => _highlight(name, code, false));
        results.unshift(plaintext);
        const sorted = results.sort((a, b) => {
          if (a.relevance !== b.relevance)
            return b.relevance - a.relevance;
          if (a.language && b.language) {
            if (getLanguage(a.language).supersetOf === b.language) {
              return 1;
            } else if (getLanguage(b.language).supersetOf === a.language) {
              return -1;
            }
          }
          return 0;
        });
        const [best, secondBest] = sorted;
        const result = best;
        result.secondBest = secondBest;
        return result;
      }
      function updateClassName(element, currentLang, resultLang) {
        const language = currentLang && aliases[currentLang] || resultLang;
        element.classList.add("hljs");
        element.classList.add(`language-${language}`);
      }
      function highlightElement(element) {
        let node = null;
        const language = blockLanguage(element);
        if (shouldNotHighlight(language))
          return;
        fire("before:highlightElement", { el: element, language });
        if (element.children.length > 0) {
          if (!options.ignoreUnescapedHTML) {
            console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
            console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
            console.warn("The element with unescaped HTML:");
            console.warn(element);
          }
          if (options.throwUnescapedHTML) {
            const err = new HTMLInjectionError("One of your code blocks includes unescaped HTML.", element.innerHTML);
            throw err;
          }
        }
        node = element;
        const text = node.textContent;
        const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
        element.innerHTML = result.value;
        updateClassName(element, language, result.language);
        element.result = {
          language: result.language,
          re: result.relevance,
          relevance: result.relevance
        };
        if (result.secondBest) {
          element.secondBest = {
            language: result.secondBest.language,
            relevance: result.secondBest.relevance
          };
        }
        fire("after:highlightElement", { el: element, result, text });
      }
      function configure(userOptions) {
        options = inherit(options, userOptions);
      }
      const initHighlighting = () => {
        highlightAll();
        deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
      };
      function initHighlightingOnLoad() {
        highlightAll();
        deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
      }
      let wantsHighlight = false;
      function highlightAll() {
        if (document.readyState === "loading") {
          wantsHighlight = true;
          return;
        }
        const blocks = document.querySelectorAll(options.cssSelector);
        blocks.forEach(highlightElement);
      }
      function boot() {
        if (wantsHighlight)
          highlightAll();
      }
      if (typeof window !== "undefined" && window.addEventListener) {
        window.addEventListener("DOMContentLoaded", boot, false);
      }
      function registerLanguage(languageName, languageDefinition) {
        let lang = null;
        try {
          lang = languageDefinition(hljs);
        } catch (error$1) {
          error2("Language definition for '{}' could not be registered.".replace("{}", languageName));
          if (!SAFE_MODE) {
            throw error$1;
          } else {
            error2(error$1);
          }
          lang = PLAINTEXT_LANGUAGE;
        }
        if (!lang.name)
          lang.name = languageName;
        languages[languageName] = lang;
        lang.rawDefinition = languageDefinition.bind(null, hljs);
        if (lang.aliases) {
          registerAliases(lang.aliases, { languageName });
        }
      }
      function unregisterLanguage(languageName) {
        delete languages[languageName];
        for (const alias of Object.keys(aliases)) {
          if (aliases[alias] === languageName) {
            delete aliases[alias];
          }
        }
      }
      function listLanguages() {
        return Object.keys(languages);
      }
      function getLanguage(name) {
        name = (name || "").toLowerCase();
        return languages[name] || languages[aliases[name]];
      }
      function registerAliases(aliasList, { languageName }) {
        if (typeof aliasList === "string") {
          aliasList = [aliasList];
        }
        aliasList.forEach((alias) => {
          aliases[alias.toLowerCase()] = languageName;
        });
      }
      function autoDetection(name) {
        const lang = getLanguage(name);
        return lang && !lang.disableAutodetect;
      }
      function upgradePluginAPI(plugin) {
        if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
          plugin["before:highlightElement"] = (data) => {
            plugin["before:highlightBlock"](Object.assign({ block: data.el }, data));
          };
        }
        if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
          plugin["after:highlightElement"] = (data) => {
            plugin["after:highlightBlock"](Object.assign({ block: data.el }, data));
          };
        }
      }
      function addPlugin(plugin) {
        upgradePluginAPI(plugin);
        plugins.push(plugin);
      }
      function fire(event, args) {
        const cb = event;
        plugins.forEach(function(plugin) {
          if (plugin[cb]) {
            plugin[cb](args);
          }
        });
      }
      function deprecateHighlightBlock(el) {
        deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
        deprecated("10.7.0", "Please use highlightElement now.");
        return highlightElement(el);
      }
      Object.assign(hljs, {
        highlight: highlight2,
        highlightAuto,
        highlightAll,
        highlightElement,
        highlightBlock: deprecateHighlightBlock,
        configure,
        initHighlighting,
        initHighlightingOnLoad,
        registerLanguage,
        unregisterLanguage,
        listLanguages,
        getLanguage,
        registerAliases,
        autoDetection,
        inherit,
        addPlugin
      });
      hljs.debugMode = function() {
        SAFE_MODE = false;
      };
      hljs.safeMode = function() {
        SAFE_MODE = true;
      };
      hljs.versionString = version;
      hljs.regex = {
        concat,
        lookahead,
        either,
        optional,
        anyNumberOfTimes
      };
      for (const key in MODES2) {
        if (typeof MODES2[key] === "object") {
          deepFreeze$1(MODES2[key]);
        }
      }
      Object.assign(hljs, MODES2);
      return hljs;
    };
    var highlight = HLJS({});
    module2.exports = highlight;
    highlight.HighlightJS = highlight;
    highlight.default = highlight;
  }
});

// node_modules/highlight.js/es/core.js
var import_core;
var init_core = __esm({
  "node_modules/highlight.js/es/core.js"() {
    import_core = __toModule(require_core());
  }
});

// node_modules/highlight.js/es/languages/xml.js
function xml(hljs) {
  const regex = hljs.regex;
  const TAG_NAME_RE = regex.concat(/[A-Z_]/, regex.optional(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/);
  const XML_IDENT_RE = /[A-Za-z0-9._:-]+/;
  const XML_ENTITIES = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {
    className: "string"
  });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
    className: "string"
  });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [XML_ENTITIES]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [XML_ENTITIES]
              },
              {
                begin: /[^\s"'=<>`]+/
              }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: true,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(/<!--/, /-->/, {
        relevance: 10
      }),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      {
        className: "meta",
        begin: /<\?xml/,
        end: /\?>/,
        relevance: 10
      },
      {
        className: "tag",
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: {
          name: "style"
        },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: {
          name: "script"
        },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      {
        className: "tag",
        begin: regex.concat(/</, regex.lookahead(regex.concat(TAG_NAME_RE, regex.either(/\/>/, />/, /\s/)))),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      {
        className: "tag",
        begin: regex.concat(/<\//, regex.lookahead(regex.concat(TAG_NAME_RE, />/))),
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}
var init_xml = __esm({
  "node_modules/highlight.js/es/languages/xml.js"() {
  }
});

// node_modules/highlight.js/es/languages/javascript.js
function javascript(hljs) {
  const regex = hljs.regex;
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };
  const IDENT_RE$1 = IDENT_RE;
  const FRAGMENT = {
    begin: "<>",
    end: "</>"
  };
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (nextChar === "<" || nextChar === ",") {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m2;
      const afterMatch = match.input.substr(afterMatchIndex);
      if (m2 = afterMatch.match(/^\s+extends\s+/)) {
        if (m2.index === 0) {
          response.ignoreMatch();
          return;
        }
      }
    }
  };
  const KEYWORDS$1 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS,
    "variable.language": BUILT_IN_VARIABLES
  };
  const decimalDigits = "[0-9](_?[0-9])*";
  const frac = `\\.(${decimalDigits})`;
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: "number",
    variants: [
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  };
  const SUBST = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: KEYWORDS$1,
    contains: []
  };
  const HTML_TEMPLATE = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "xml"
    }
  };
  const CSS_TEMPLATE = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "css"
    }
  };
  const TEMPLATE_STRING = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
    relevance: 0,
    contains: [
      {
        begin: "(?=@[A-Za-z]+)",
        relevance: 0,
        contains: [
          {
            className: "doctag",
            begin: "@[A-Za-z]+"
          },
          {
            className: "type",
            begin: "\\{",
            end: "\\}",
            excludeEnd: true,
            excludeBegin: true,
            relevance: 0
          },
          {
            className: "variable",
            begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
            endsParent: true,
            relevance: 0
          },
          {
            begin: /(?=[^\n])\s/,
            relevance: 0
          }
        ]
      }
    ]
  });
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    TEMPLATE_STRING,
    NUMBER
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$1,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    {
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1,
    contains: PARAMS_CONTAINS
  };
  const CLASS_OR_EXTENDS = {
    variants: [
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
    className: "title.class",
    keywords: {
      _: [
        ...TYPES,
        ...ERROR_TYPES
      ]
    }
  };
  const USE_STRICT = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };
  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$1,
          /(?=\s*\()/
        ]
      },
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [PARAMS],
    illegal: /%/
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }
  const FUNCTION_CALL = {
    match: regex.concat(/\b/, noneOf([
      ...BUILT_IN_GLOBALS,
      "super"
    ]), IDENT_RE$1, regex.lookahead(/\(/)),
    className: "title.function",
    relevance: 0
  };
  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/))),
    end: IDENT_RE$1,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };
  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$1,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        begin: /\(\)/
      },
      PARAMS
    ]
  };
  const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE$1,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  return {
    name: "Javascript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$1,
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      NUMBER,
      CLASS_REFERENCE,
      {
        className: "attr",
        begin: IDENT_RE$1 + regex.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT,
          hljs.REGEXP_MODE,
          {
            className: "function",
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          {
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                "on:begin": XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      FUNCTION_DEFINITION,
      {
        beginKeywords: "while if switch catch for"
      },
      {
        begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
        ]
      },
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      {
        match: "\\$" + IDENT_RE$1,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [PARAMS]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/
      }
    ]
  };
}
var IDENT_RE, KEYWORDS, LITERALS, TYPES, ERROR_TYPES, BUILT_IN_GLOBALS, BUILT_IN_VARIABLES, BUILT_INS;
var init_javascript = __esm({
  "node_modules/highlight.js/es/languages/javascript.js"() {
    IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
    KEYWORDS = [
      "as",
      "in",
      "of",
      "if",
      "for",
      "while",
      "finally",
      "var",
      "new",
      "function",
      "do",
      "return",
      "void",
      "else",
      "break",
      "catch",
      "instanceof",
      "with",
      "throw",
      "case",
      "default",
      "try",
      "switch",
      "continue",
      "typeof",
      "delete",
      "let",
      "yield",
      "const",
      "class",
      "debugger",
      "async",
      "await",
      "static",
      "import",
      "from",
      "export",
      "extends"
    ];
    LITERALS = [
      "true",
      "false",
      "null",
      "undefined",
      "NaN",
      "Infinity"
    ];
    TYPES = [
      "Object",
      "Function",
      "Boolean",
      "Symbol",
      "Math",
      "Date",
      "Number",
      "BigInt",
      "String",
      "RegExp",
      "Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Int32Array",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array",
      "Set",
      "Map",
      "WeakSet",
      "WeakMap",
      "ArrayBuffer",
      "SharedArrayBuffer",
      "Atomics",
      "DataView",
      "JSON",
      "Promise",
      "Generator",
      "GeneratorFunction",
      "AsyncFunction",
      "Reflect",
      "Proxy",
      "Intl",
      "WebAssembly"
    ];
    ERROR_TYPES = [
      "Error",
      "EvalError",
      "InternalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError"
    ];
    BUILT_IN_GLOBALS = [
      "setInterval",
      "setTimeout",
      "clearInterval",
      "clearTimeout",
      "require",
      "exports",
      "eval",
      "isFinite",
      "isNaN",
      "parseFloat",
      "parseInt",
      "decodeURI",
      "decodeURIComponent",
      "encodeURI",
      "encodeURIComponent",
      "escape",
      "unescape"
    ];
    BUILT_IN_VARIABLES = [
      "arguments",
      "this",
      "super",
      "console",
      "window",
      "document",
      "localStorage",
      "module",
      "global"
    ];
    BUILT_INS = [].concat(BUILT_IN_GLOBALS, TYPES, ERROR_TYPES);
  }
});

// node_modules/highlight.js/es/languages/css.js
function css13(hljs) {
  const regex = hljs.regex;
  const modes = MODES(hljs);
  const VENDOR_PREFIX = {
    begin: /-(webkit|moz|ms|o)-(?=[a-z])/
  };
  const AT_MODIFIERS = "and or not only";
  const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
  const IDENT_RE2 = "[a-zA-Z-][a-zA-Z0-9_-]*";
  const STRINGS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: true,
    illegal: /[=|'\$]/,
    keywords: {
      keyframePosition: "from to"
    },
    classNameAliases: {
      keyframePosition: "selector-tag"
    },
    contains: [
      modes.BLOCK_COMMENT,
      VENDOR_PREFIX,
      modes.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + IDENT_RE2,
        relevance: 0
      },
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          {
            begin: ":(" + PSEUDO_CLASSES.join("|") + ")"
          },
          {
            begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")"
          }
        ]
      },
      modes.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
      },
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          modes.BLOCK_COMMENT,
          modes.HEXCOLOR,
          modes.IMPORTANT,
          modes.CSS_NUMBER_MODE,
          ...STRINGS,
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            keywords: {
              built_in: "url data-uri"
            },
            contains: [
              {
                className: "string",
                begin: /[^)]/,
                endsWithParent: true,
                excludeEnd: true
              }
            ]
          },
          modes.FUNCTION_DISPATCH
        ]
      },
      {
        begin: regex.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        contains: [
          {
            className: "keyword",
            begin: AT_PROPERTY_RE
          },
          {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: AT_MODIFIERS,
              attribute: MEDIA_FEATURES.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...STRINGS,
              modes.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + TAGS.join("|") + ")\\b"
      }
    ]
  };
}
var MODES, TAGS, MEDIA_FEATURES, PSEUDO_CLASSES, PSEUDO_ELEMENTS, ATTRIBUTES;
var init_css = __esm({
  "node_modules/highlight.js/es/languages/css.js"() {
    MODES = (hljs) => {
      return {
        IMPORTANT: {
          scope: "meta",
          begin: "!important"
        },
        BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
        HEXCOLOR: {
          scope: "number",
          begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
        },
        FUNCTION_DISPATCH: {
          className: "built_in",
          begin: /[\w-]+(?=\()/
        },
        ATTRIBUTE_SELECTOR_MODE: {
          scope: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE
          ]
        },
        CSS_NUMBER_MODE: {
          scope: "number",
          begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
          relevance: 0
        },
        CSS_VARIABLE: {
          className: "attr",
          begin: /--[A-Za-z][A-Za-z0-9_-]*/
        }
      };
    };
    TAGS = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "p",
      "q",
      "quote",
      "samp",
      "section",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video"
    ];
    MEDIA_FEATURES = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height"
    ];
    PSEUDO_CLASSES = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where"
    ];
    PSEUDO_ELEMENTS = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error"
    ];
    ATTRIBUTES = [
      "align-content",
      "align-items",
      "align-self",
      "all",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "border",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flow",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "isolation",
      "justify-content",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-bottom",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-height",
      "max-width",
      "min-height",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-bottom",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "row-gap",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "speak",
      "speak-as",
      "src",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-position",
      "top",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "unicode-bidi",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index"
    ].reverse();
  }
});

// .svelte-kit/output/server/entries/pages/blog/made-with-svelte-kit.svx.js
var made_with_svelte_kit_svx_exports = {};
__export(made_with_svelte_kit_svx_exports, {
  default: () => Made_with_svelte_kit,
  metadata: () => metadata3
});
var css$16, HighlightSvelte, HighlightSvelte$1, advice, portfolioGrid, regret, email1, email2, vwlDesign, metadata3, title3, slug3, publishDate3, tags3, thumbnail3, summary3, Made_with_svelte_kit;
var init_made_with_svelte_kit_svx = __esm({
  ".svelte-kit/output/server/entries/pages/blog/made-with-svelte-kit.svx.js"() {
    init_index_88921582();
    init_BlogImage_10d5ac5e();
    init_BlogGallery_55092816();
    init_core();
    init_xml();
    init_javascript();
    init_css();
    init_Tag_1ce0eb4c();
    css$16 = {
      code: "pre.langtag.svelte-nstrv8{position:relative}pre.langtag.svelte-nstrv8::after{content:attr(data-language);position:absolute;top:0;right:0;padding:1em;display:flex;align-items:center;justify-content:center;background:inherit;color:inherit;background:var(--hljs-background);color:var(--hljs-foreground);border-radius:var(--hljs-radius)}",
      map: null
    };
    HighlightSvelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let highlighted;
      let $$restProps = compute_rest_props($$props, ["code", "langtag"]);
      let { code = void 0 } = $$props;
      let { langtag = false } = $$props;
      createEventDispatcher();
      import_core.default.registerLanguage("xml", xml);
      import_core.default.registerLanguage("javascript", javascript);
      import_core.default.registerLanguage("css", css13);
      if ($$props.code === void 0 && $$bindings.code && code !== void 0)
        $$bindings.code(code);
      if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0)
        $$bindings.langtag(langtag);
      $$result.css.add(css$16);
      highlighted = import_core.default.highlightAuto(code).value;
      return `${slots.default ? slots.default({ highlighted }) : `
  <pre${spread([{ "data-language": "svelte" }, escape_object($$restProps)], {
        classes: (langtag ? "langtag" : "") + " svelte-nstrv8"
      })}><code class="${"hljs"}"><!-- HTML_TAG_START -->${highlighted}<!-- HTML_TAG_END --></code></pre>
`}`;
    });
    HighlightSvelte$1 = HighlightSvelte;
    advice = "/_app/assets/ginkoids-advice-b1985380.webp";
    portfolioGrid = "/_app/assets/portfolio-grid-ee45fbe9.webp";
    regret = "/_app/assets/regret-bd8609a1.webp";
    email1 = "/_app/assets/ios-email-input-4085fc8a.webp";
    email2 = "/_app/assets/android-email-input-46726c1c.webp";
    vwlDesign = "/_app/assets/vwl-site-6108720d.webp";
    metadata3 = {
      "title": "Made with Svelte(Kit)",
      "slug": "made-with-svelte-kit",
      "publishDate": "JAN 18 2022",
      "tags": [{ "name": "code" }],
      "thumbnail": "vwl-site.png",
      "summary": "My 20-something-day journey to create this website from scratch. What came easily, what to avoid, etc. Essentially, a layman\u2019s guide to building a personal website. A very meta post."
    };
    ({ title: title3, slug: slug3, publishDate: publishDate3, tags: tags3, thumbnail: thumbnail3, summary: summary3 } = metadata3);
    Made_with_svelte_kit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      const code12 = `<script>
    import vivian from '$lib/assets/vivian.png';
<\/script>
...
<img src={vivian} alt="viv" />`;
      const code22 = `import vivian from '$lib/assets/vivian.png?w=350&webp';`;
      return `${validate_component(PostHeader, "PostHeader").$$render($$result, {
        title: title3,
        publishDate: publishDate3,
        tags: tags3,
        slug: slug3,
        thumbnail: thumbnail3,
        summary: summary3
      }, {}, {})}
<p>So, Svelte is not for the faint-hearted. \u{1F62D}</p>
<p>Not that I don\u2019t recommend it. Svelte and SvelteKit are intuitively wonderful in many ways\u2014enough so that someone without years of web dev experience (like me) could pick it up fairly easily. However, because it is such a new framework, I came prepared for the frustration that ensues when things <em>just don\u2019t work</em>.</p>
<p>I\u2019ve also been entertaining the idea of creating a layman\u2019s guide to building a personal website for a while now. I was pretty set on giving my personal website a refresh this winter break (check out the old one, <a href="${"http://vivsdivs.com/"}" rel="${"nofollow"}">vivsdivs.com</a>). It seemed like the perfect opportunity to learn something new and share my experience. If you\u2019re interested in how I made this website\u2014what came easily, what to avoid, etc., read on. I hope you find something useful :)</p>
<p><strong>Why Svelte?</strong> There are so many great options out there. The short answer is that I love <em>The Pudding</em>, and they use SvelteKit. Also, it seemed that a reasonable amount of people have moved their blogs from Gatsby to SvelteKit, in the same way that they moved from Jekyll to Gatsby a few years back. Might as well be ahead of the curve, right? \u{1F609}</p>
<p>\xA0</p>
<h2>Preparing for battle</h2>
<p>I first spent three days in Figma designing the website, from color scheme to style guide to full layouts of the home, blog, and portfolio pages (in both desktop and mobile view). Honestly, it was a lot of work, but it set me up for success when actually coding the site, and I didn\u2019t have to question my design decisions down the line. I\u2019m also glad that I prioritized the mobile view early on, instead of freaking out about responsive design long after the rest of the website was implemented. I love Figma (so much), so no complaints here. Feel free to browse my <a href="${"https://www.figma.com/file/h7KckVZmrTNeVQd2afZwME/website?node-id=92%3A573"}" rel="${"nofollow"}">Figma document</a> if you\u2019re curious! If you\u2019d like to dive deeper into about my design process, let me know and I might make a more design-focused post in the future.</p>
${validate_component(BlogImage, "BlogImage").$$render($$result, {
        src: vwlDesign,
        caption: "The styled covered page for my website design (vivianwli.com)"
      }, {}, {})}
<p>Before I popped open the code editor, I also started by doing the <a href="${"https://svelte.dev/tutorial/basics"}" rel="${"nofollow"}">Svelte tutorial</a> in full. It was very interactive and helpful, and it also set me up to know which resources to reach for later on. I also took <a href="${"https://www.notion.so/svelte-notes-6cac9e1403e04b1c8647ec518ee0b11e"}" rel="${"nofollow"}">notes</a> on what I learned from the tutorial. They\u2019re not amazing, comprehensive notes or anything, but they show the amount of preparation that I did before taking the plunge.</p>
<p>Now, we\u2019re ready. Onward!</p>
<p>\xA0</p>
<h2>\u{1F44D}\u{1F3FB} things</h2>
<h3>Floating orb background</h3>
<p>This is probably one of my favorite aspects of the website. I had it all planned out in Figma from the beginning. I originally found this complicated generative art solution with PixiJS by <a href="${"https://georgefrancis.dev/writing/create-a-generative-landing-page-and-webgl-powered-background/"}" rel="${"nofollow"}">George Francis</a>. It\u2019s really, <em>really</em> cool, and I had so much fun just playing with his CodePen. However, I ultimately decided to stick to the basics using <code>spans</code> animated with CSS. When in doubt, follow Ginkoid\u2019s advice:</p>
${validate_component(BlogImage, "BlogImage").$$render($$result, {
        src: advice,
        caption: "Ginkoid's wise words, via Discord."
      }, {}, {})}
<p>Here\u2019s the <a href="${"https://codepen.io/Mamboleoo/pen/BxMQYQ"}" rel="${"nofollow"}">CodePen</a> that I referenced, which did the job wonderfully!</p>
<h3>Svelte(Kit) stuff</h3>
<ul><li><strong>The docs:</strong> I loved the docs, for both <a href="${"https://svelte.dev/docs"}" rel="${"nofollow"}">Svelte</a> and <a href="${"https://kit.svelte.dev/docs"}" rel="${"nofollow"}">SvelteKit</a>. So wonderful and helpful, 10/10. This is where you learn about all sorts of fun things, like SvelteKit\u2019s modules (<code>$app/env</code>, <code>$app/stores</code>, etc.), loading, and anchor options. Had my back when Stack Overflow didn\u2019t \u{1F972}</li>
<li><strong>SvelteKit\u2019s file-based routing system:</strong> very intuitive! It works exactly how you think it does\u2014each page goes into <code>/routes</code> as a <code>.svelte</code> file.</li>
<li><strong>Svelte transitions:</strong> super easy to use with really beautiful results. I used them for my page transitions (and I really <em>could</em> start throwing them everywhere). One of the quickest things that I did to elevate the feel of my website. The transition usually only runs when your component enters and leaves the DOM, but you can also trigger the animation on a value change with a <a href="${"https://stackoverflow.com/questions/62626343/svelte-transition-on-reactive-data-change"}" rel="${"nofollow"}">#key block</a>.</li></ul>
<h3>Flexbox, Grid, and other common CSS utilities</h3>
<p>Even in the presence of \u2728fun new technology\u2728, one must not forget about good old flex and grid. I read through the complete guides this time (<a href="${"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"}" rel="${"nofollow"}">flex</a> and <a href="${"https://kit.svelte.dev/docs"}" rel="${"nofollow"}">grid</a>), thanks to CSS-Tricks. With these tools (and units like <code>fr</code> and <code>min-content</code>), creating responsive layouts was honestly pretty fun. One example: grid was key to creating the faux file folder on the portfolio page.</p>
<p>Essentially, I have an SVG for each tab\u2014just the tab part, not the rectangular folder body. Why? I expect the file folder to resize frequently, whether due to different screen sizes, or whether certain rows are filtered. The rectangular folder body for each tab is just a <code>div</code>, designed to be easily resized by its grid container. I also had the tab label text (\u201Ddesign\u201D and \u201Cjournalism\u201D).</p>
<p>Here\u2019s how I put everything together using grid. I\u2019ll refer to these elements by their class name; feel free to inspect the page or follow along using the <a href="${"https://github.com/teacupkittie/vwl"}" rel="${"nofollow"}">GitHub repo</a>.</p>
<ul><li><code>.tabs</code> : a parent grid with only one cell, to ensure that the two tabs are stacked on top of each other using <code>z-index</code></li>
<li><code>.design-tab</code> and <code>.journalism-tab</code>: grids with <code>grid-template-columns</code> determined by <code>rems</code> to ensure that each SVG tab is always in the right place. I used column 1 as an offset, column 2 as the tab itself, and column 3 as <code>auto</code>. Here\u2019s a picture:${validate_component(BlogImage, "BlogImage").$$render($$result, {
        src: portfolioGrid,
        caption: "Grid layout outlines from the Chrome DevTools view."
      }, {}, {})}</li>
<li><code>.tab-page-content</code>: a regular ol\u2019 container inside each tab</li>
<li><code>.buttons</code>: a flex container holding the tags, <code>.content-container</code>: a regular container on each page</li>
<li><code>.content-row</code>: a flex container holding the items on each row, with each row pertaining to one category. I could have totally done some horizontal masonry madness to autofill the page content, but I wanted to have better control over exactly how the page looked\u2014an example where hardcoding and softcoding meet.</li></ul>
<p>Later on, I also added in <code>.tab-selector</code>, which sits on top of the tabs (<code>z-index</code>-wise). These are fitted to be directly on top of the two SVGs, because I realized that the journalism tab can\u2019t be clicked (the design tab is the exact same size, and directly on top). I also used grid for this!</p>
<h3>Blogging with <code>mdsvex</code></h3>
<p><a href="${"https://mdsvex.pngwn.io/"}" rel="${"nofollow"}">Svelte in Markdown</a> (aka <code>mdsvex</code>) is pretty great. Blogging would be much harder without it. There are some great tutorials\u2014I followed this one by <a href="${"https://megzari.com/blog/about_this_site/"}" rel="${"nofollow"}">Raphael Mezgari</a>. His repo is on GitHub, too, and poking around really helped me to get a sense of how things worked. I haven\u2019t ran into any problems yet, and maybe I\u2019ll start adding animated Svelte penguins in my blog posts someday.</p>
<p>\xA0</p>
<h2>\u{1F44E}\u{1F3FB} things</h2>
<p>One of the main downsides of SvelteKit is that it\u2019s so new. Compared to React frameworks, it has a much smaller community and fewer resources. So everything is just a LITTLE harder. This screenshot sums up most of the breakdowns that I had while coding:</p>
${validate_component(BlogImage, "BlogImage").$$render($$result, {
        src: regret,
        caption: "So many times when I faltered in my decision to use Svelte."
      }, {}, {})}
<h3>Icon packs</h3>
<p>React has this amazing package called <code>react-icons</code>. Using icons becomes very easy. I first found a Svelte alternative, <code>svelte-icons-pack</code>, but for some reason many of the Ionicons icons were either filled incorrectly or did not display at all. I thought Ionicons looked pretty good (and I had designed with them), so I then proceeded to try every other way of using Ionicons. On Christmas Day. I read every tutorial, Stack Overflow post, and GitHub issue until someone mentioned that Ionicons just had some compatibility issues with Svelte \u{1F62D} Eventually, I migrated to Feather Icons (and tried every other way again). I came crawling back to <code>svelte-icons-pack</code>, which seemed to work perfectly fine with Feather Icons. Moral of the story: <code>svelte-icons-pack</code> is probably the easiest way to use icons in Svelte, and just don\u2019t use Ionicons. Thanks, @leshak on GitHub!</p>
<h3>Responsive, lazy-loading images</h3>
<p>Gatsby has this amazing thing called <code>gatsby-plugin-image</code>. Next.js has this amazing thing called <code>next/image</code>. SvelteKit has nothing (yet) \u{1F62D}</p>
<p>There were actually a fair amount of Svelte plugins, but SvelteKit is also so different from Svelte that solutions that work for Svelte often don\u2019t work for SvelteKit. Trying to get any sort of image placeholder (solid color, low-resolution blur) was a total pain. Ultimately, I think there\u2019s just much more I have to learn about images in web development. Most of the solutions that I could find relied on specifying a width and height for the image, which makes sense because the placeholder needs a width and height in order to take up space and reduce cumulative layout shift. However, I wanted my images to resize dynamically to fit the size of its container. Maybe I just need to create a million sizes of the image with <code>srcset</code>? I\u2019m not sure how Gatsby and Next.js do it, but I would love to learn.</p>
<p>Here were some of the resources that I looked at and tried to use: <a href="${"https://kentcdodds.com/blog/building-an-awesome-image-loading-experience"}" rel="${"nofollow"}">Kent C. Dodd\u2019s blog post</a>, <a href="${"https://rodneylab.com/sveltekit-image-plugin/"}" rel="${"nofollow"}">Rodney Lab\u2019s SvelteKit Image Plugin</a>, <a href="${"https://github.com/woltapp/blurhash"}" rel="${"nofollow"}">blurhash</a>. They\u2019re still great resources! In the meantime, I\u2019m just using <code>vite-imagetools</code> to resize my images and convert them to WebP. Maybe someday I\u2019ll attempt to save the masses by making a <code>sveltekit-image</code> if SvelteKit doesn\u2019t man up and do it soon.</p>
<h3>Newsletters</h3>
<p>I\u2019d narrowed it down to three main options: Substack, Revue, and Buttondown. Substack and Revue are both huge in the newsletter world, while Buttondown is a small (but really cool!) service. Any one of these services would have worked wonderfully, save for one aspect: the subscription email embed. With Substack, a styled embed isn\u2019t even in the picture because Substack has a closed API. Scott Spence outlines this solution for a styled email form with <a href="${"https://scottspence.com/posts/email-form-submission-with-sveltekit"}" rel="${"nofollow"}">Revue</a>, which has an open API, but it seemed to be a very significant amount of work. On the other hand, Buttondown provided the HTML for the email form so that I could style it to my heart\u2019s content.</p>
<p>This <em>would</em> have been rather dandy, but I realized that whenever the form was submitted, the page would redirect to Buttondown\u2019s page. This was automatic\u2014the redirect was forced, and you could only change the redirect destination from the Buttondown dashboard. It would be extremely disorienting for the viewer to be thrown to another site, and then have to navigate back toward <a href="${"https://scottspence.com/posts/email-form-submission-with-sveltekit"}" rel="${"nofollow"}">vivianwli.com</a>.</p>
<p><strong>The (somewhat) jank solution?</strong> I chose <a href="${"http://vivianwli.com/blog"}" rel="${"nofollow"}">vivianwli.com/blog</a> as my redirect link. Even then, the navigation would kick the user to the top of the page. To make this seem more natural, I used <code>svelte-toast</code> to create an \u201CEmail submitted!\u201D toast. I changed the Buttondown redirect link to <a href="${"http://vivianwli.com/blog?emailSubmitted=true"}" rel="${"nofollow"}">vivianwli.com/blog?emailSubmitted=true</a>, and then ran toast when the <code>emailSubmitted</code> parameter was true. Hey, it works!</p>
<p>\xA0</p>
<h2>\u{1F90C}\u{1F3FB} things</h2>
<h3>Scroll-snapping</h3>
<p>Scroll-snapping only has <code>mandatory</code> and <code>proximity</code> as its options. I wanted to use it for a pseudo-slideshow animation, but the <code>proximity</code> distance is determined by the browser. You can\u2019t choose how close the scroll must be before it snaps. I\u2019m still using it on the home page (for tiny re-orientations), but it really doesn\u2019t do much. In this case, it\u2019s a simple but very limited tool.</p>
<h3>Where images go</h3>
<p>I switched the location of my images folder several times while building the website. I was very confused about this, but I have an answer for you! In order for it to work in both dev mode and build mode, you have two options:</p>
<ul><li><code>static</code>: Svelte can\u2019t do dynamic imports, (a la <code>src={picture1}</code> where <code>picture1</code> is your file name). If you\u2019re trying to display images where its path would be a variable (my <code>BlogCard.svelte</code> and <code>ArticleCard.svelte</code>), put it in static. You can\u2019t access <code>src</code> at build time!<ul><li><code>src</code> (I did <code>src/$lib/assets</code>): this is great for when you know exactly which images you need (the home page, the portfolio, my blog posts). You can import and use it like this:${validate_component(HighlightSvelte$1, "HighlightSvelte").$$render($$result, { code: code12 }, {}, {})}
This way, you can do some responsive stuff, like loading smaller images via \`vite-imagetools\`.
${validate_component(HighlightSvelte$1, "HighlightSvelte").$$render($$result, { code: code22 }, {}, {})}</li></ul></li></ul>
<h3>#justiOSthings</h3>
<p>Chrome DevTools has a great option for responsive design, allowing developers to emulate different screen sizes and ensure that it looks great. However, because it\u2019s just an emulator, my designs came out looking a bit wonky on iPhone at first. My heading text wasn\u2019t italicized, my portfolio images were horrendously stretched (just really blurry colors), and my email form looked like this:</p>
${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2", className: "half-width" }, {}, {
        default: () => {
          return `${validate_component(BlogImage, "BlogImage").$$render($$result, {
            src: email1,
            className: "gallery-img",
            caption: "The email form on an iOS device."
          }, {}, {})}
    ${validate_component(BlogImage, "BlogImage").$$render($$result, {
            src: email2,
            className: "gallery-img",
            caption: "The email form on an Android device."
          }, {}, {})}`;
        }
      })}
<p>So if DevTools doesn\u2019t work, what does? If you have a Mac and an iPhone, you can enable Inspect Element on your iPhone and then connect to your computer. If not, tough luck. However BroswerStack offers ten-minute trials to test on an actual iPhone. Although the time seems ridiculously short, it actually really helped! Just a bit of fiddling in DevTools got me where I wanted.</p>
<h3>Flash of Unstyled Content (FOUC)</h3>
<p>The first time I experienced this in dev mode, it was terrifying. My background orbs were black, my text was in Times New Roman, everything was in the wrong place. Scenes out of a horror movie. This goes away at build time, but I was also experiencing this \u201Cflash of partially-styled content\u201D in production as well. Everything would be the right color, but the layout was still off and the margins didn\u2019t kick in until a second later. I dealt with it for a while, but I ultimately fixed this issue by moving some of the relevant styles from <code>__layout.svelte</code> into <code>app.scss</code>. I\u2019m pretty sure this is because <code>app.html</code> is used in every page and saturated with the Svelte content, so the styles from <code>app.scss</code> are put in place first before the rest of the page finishes loading. Victory!</p>
<p>\xA0</p>
<h2>Thanks</h2>
<p>Thanks to Jason, Ailuropoda Melanoleuca, and ginkoid for answering my many questions. You guys are the best! Thanks to you, the reader, for embarking with my on my journey as well. I hope you enjoyed!</p>
<p>\xA0</p>
<h2>Bye</h2>
<p>I suppose this is it. See you again when there\u2019s a V3\u2026?!</p>
<p>Just kidding. I hope to blog more often on here, so you can <a href="${"https://buttondown.email/vivian"}" rel="${"nofollow"}">subscribe</a> to my newsletter if you\u2019d like to hear more from me. Have a wonderful day!</p>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/blog/michelle-feng.svx.js
var michelle_feng_svx_exports = {};
__export(michelle_feng_svx_exports, {
  default: () => Michelle_feng,
  metadata: () => metadata4
});
var mathyProtest, metadata4, title4, slug4, publishDate4, tags4, thumbnail4, summary4, Michelle_feng;
var init_michelle_feng_svx = __esm({
  ".svelte-kit/output/server/entries/pages/blog/michelle-feng.svx.js"() {
    init_index_88921582();
    init_BlogImage_10d5ac5e();
    init_Tag_1ce0eb4c();
    mathyProtest = "/_app/assets/mathy-protest-f6621b72.webp";
    metadata4 = {
      "title": "How Michelle Feng defies math academia norms",
      "slug": "michelle-feng",
      "publishDate": "FEB 1 2020",
      "tags": [{ "name": "interview" }],
      "thumbnail": "mathy-protest.png",
      "summary": "Michelle Feng explains how she discovered and became passionate about applied topology in the context of politics and social justice."
    };
    ({ title: title4, slug: slug4, publishDate: publishDate4, tags: tags4, thumbnail: thumbnail4, summary: summary4 } = metadata4);
    Michelle_feng = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(PostHeader, "PostHeader").$$render($$result, {
        title: title4,
        publishDate: publishDate4,
        tags: tags4,
        thumbnail: thumbnail4,
        slug: slug4,
        summary: summary4
      }, {}, {})}
<p>When fifth year UCLA PhD student Michelle Feng initially entered undergraduate college as a theoretical math major, she wasn\u2019t expecting a future out of the ordinary. In fact, math seemed like the logical path to take simply because she performed well in math classes growing up. It wasn\u2019t until graduate school that she discovered\u2014and became passionate about\u2014the field she works in today: applied topology in the context of social justice.</p>
<p>As a teen, Feng developed a deep interest in number theory. She was fascinated by the idea that fundamental problems are simple to understand, yet still remain unsolved by the world\u2019s greatest mathematicians. In the same vein, she found the nature of abstract shapes satisfying, and was drawn to abstract algebra and applied topology.</p>
<p>Despite loving math, Feng emerged from her undergraduate years at the University of Chicago disillusioned by the elitist culture that surrounded the field of theoretical mathematics. She had very few female and queer students in her math classes and the barriers for marginalized groups discouraged her from enjoying the space. \u201CPeople would comment on my outfits or my appearance which made me really uncomfortable, and that turned me away from math for a long time,\u201D she said.</p>
<p>Perhaps affected by her isolation as a minority in her classes, Feng became interested in social justice as an undergraduate. Required readings in her sociology classes introduced Feng to new ideas in feminism and queer theory, and she became increasingly involved in online social justice communities. For Feng, the combination of being in a new place and having ample time to spend on the internet led to her interest in activism as a passion beyond math. \u201CIt was a perfect storm of being exposed to these ideas for the first time, at a time when suddenly they were relevant to me,\u201D she said.</p>
<p>Feng explained that minorities exist in math fields primarily due to socioeconomic reasons. Like peeling back the layers of an onion, lack of access to the field starts from the roots of childhood. She mentioned that students who pursue math in graduate studies struggle to support a family with their student salaries. Even before considering graduate school, paying for undergraduate college is already enough to deter students from poorer communities from math academia. Deeper into the core of the onion, the lack of resources, teachers, and advanced courses at their primary and secondary schools leave socioeconomically disadvantaged students in the dust.</p>
<p>For marginalized students that make it past those socioeconomic barriers, the challenge then lies in playing catch-up, and dealing with the alienation and lack of a community. \u201CEven if people are nice to you, it can be really uncomfortable and isolating,\u201D she said. \u201CIf you feel like you don\u2019t belong in this community, you might just leave.\u201D</p>
<p>Her frustration with the elitism and marginalization in college led Feng into the workforce for a year after graduating with her degree in Mathematics. She worked at a financial modeling company, developing mathematical models for a variety of financial services.</p>
<p>While working, Feng was also looking for ways to volunteer with the Black Lives Matter movement, which was gaining momentum at the time. She discovered that many organizations were looking for core competencies in analyzing data and quickly put the pieces together\u2014she wanted to continue doing quantitative work, but she also recognized her enthusiasm for activism and social justice. \u201CThat\u2019s when I made the connection that there\u2019s actually a need in these movements for people who are statistically literate, so I started looking into going back to grad school,\u201D she said.</p>
<p>Feng became a graduate student at UCLA, where she transitioned to an applied math major. She now works in applied topology, where she analyzes the shapes of mathematical spaces, specifically with applications to big data that might come in the form of political maps, voting maps, electoral maps, and segregation distribution.</p>
${validate_component(BlogImage, "BlogImage").$$render($$result, {
        src: mathyProtest,
        caption: "Illustration of BLM protesters on a mathy surface. (Source: me!)"
      }, {}, {})}
<p>For Feng, the power of mathematical tools lies in their ability to interpret and understand human patterns, making them extraordinarily useful in the context of social activism. In her career, she hopes to elucidate the automated procedures for processing big data, especially in terms of developing methods for understanding discrimination and being able to explain analytical methods with transparency. Feng proposed the key question she aims to address: \u201CIf we think we\u2019re seeing a pattern, can we confirm that quantitatively, and not just glance at it with our eyeballs\u2014or even worse, have a computer glance at it?\u201D</p>
<p>In fact, Feng noted that math itself is part of the solution for solving the demographic imbalances in math fields. She believes more departments should be open to conducting actual statistical analyses in their programs, whether it be verifying claims that women might be passing graduate school qualifying exams at lower rates than men or that they\u2019re taking less advanced math classes. Collecting data about these issues would open the doors to designing policies that could actually fix them. \u201CA good first step would be to investigate what your numbers are, and then maybe try to explain why,\u201D she said.</p>
<p>Feng has remained plugged into online outlets, which she attributes to being involved in both social justice and data science spaces. In recent years, Feng has spent time on Twitter with the racial justice activism community and on Youtube with ideas regarding gender. Last year, Feng became more involved in gerrymandering analysis, and she\u2019s since spent time reading about legal theory and postmodernist theory.</p>
<p>Not only did Feng overcome obstacles as minority in her math classes, she was able to later transform those struggles into a career that focuses on helping others and promoting social justice. Her work in analyzing discrimination and segregation using mathematical tools paves the way for policies geared at resolving these prevalent issues, and inspires others to find where their passions may intersect with a passion for mathematics.</p>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/blog/oat-milk-guide.svx.js
var oat_milk_guide_svx_exports = {};
__export(oat_milk_guide_svx_exports, {
  default: () => Oat_milk_guide,
  metadata: () => metadata5
});
var css14, BlogHalfImage, oatMilk, brownies, metadata5, title5, slug5, publishDate5, tags5, thumbnail5, summary5, Oat_milk_guide;
var init_oat_milk_guide_svx = __esm({
  ".svelte-kit/output/server/entries/pages/blog/oat-milk-guide.svx.js"() {
    init_index_88921582();
    init_BlogImage_10d5ac5e();
    init_Tag_1ce0eb4c();
    css14 = {
      code: ".wrapper.svelte-1q2ajvu{display:grid;width:100%;grid-template-columns:1fr 1fr;background-color:var(--highlight-color);align-items:center;box-shadow:0 0 1.2rem 0.1rem var(--secondary-subtle-color);margin:4rem -2rem;padding:2rem}@media screen and (max-width: 50rem){.wrapper.svelte-1q2ajvu{display:block}}",
      map: null
    };
    BlogHalfImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { image } = $$props;
      let { caption } = $$props;
      if ($$props.image === void 0 && $$bindings.image && image !== void 0)
        $$bindings.image(image);
      if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
        $$bindings.caption(caption);
      $$result.css.add(css14);
      return `<div class="${"wrapper svelte-1q2ajvu"}"><div class="${"text"}">${slots.default ? slots.default({}) : ``}</div>
	${validate_component(BlogImage, "BlogImage").$$render($$result, {
        src: image,
        caption,
        className: "half-img"
      }, {}, {})}
</div>`;
    });
    oatMilk = "/_app/assets/oat-milk-49e7540c.webp";
    brownies = "/_app/assets/brownies-cf0f0bea.webp";
    metadata5 = {
      "title": "An ultimate guide to oat milk",
      "slug": "oat-milk-guide",
      "publishDate": "AUG 1 2020",
      "tags": [{ "name": "food" }],
      "thumbnail": "oat-milk.png",
      "summary": "There\u2019s always more to learn about homemade oat milk. I detail the lessons I\u2019ve learned, ways to expand upon a foolproof recipe, new delicious flavors, and advice on handling leftover oat pulp."
    };
    ({ title: title5, slug: slug5, publishDate: publishDate5, tags: tags5, thumbnail: thumbnail5, summary: summary5 } = metadata5);
    Oat_milk_guide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(PostHeader, "PostHeader").$$render($$result, {
        title: title5,
        publishDate: publishDate5,
        tags: tags5,
        thumbnail: thumbnail5,
        slug: slug5,
        summary: summary5
      }, {}, {})}
<p>Whether this is your first rodeo or your hundredth, there\u2019s always more to learn about homemade oat milk. Today, I detail the lessons I\u2019ve learned from my many trials and tribulations, ways to expand upon a foolproof recipe, new delicious flavors, and advice on handling leftover oat pulp.</p>
<p>Oat milk is by far my favorite milk, in taste but also so much more. It\u2019s vegan, dairy-free, gluten-free (as long as you use certified GF oats), nut-free, soy-free, and it also saves the environment some heavy lifting. I hope you find this guide useful!</p>
<p>\xA0</p>
<h2>Oat milk basics</h2>
<p>I won\u2019t keep you waiting\u2014here\u2019s the recipe! Blend together 4 cups of water, 1 cup of oats, 1 teaspoon of vanilla extract, a pinch of salt, and sweetener to taste. Then, strain the mixture with a tea towel or cheesecloth to separate the oat milk from the oat pulp. Sounds simple, right? I can tell you now that it really <em>is</em> quite simple, but my first couple \u201Cexperiments\u201D were so messy and subpar that my mom essentially begged me never to make oat milk again.</p>
<p>My ingredients haven\u2019t changed either. I\u2019m not suddenly dishing out hundreds for \u201Cgourmet\u201D oats or special gadgets, and I promise that you also won\u2019t need more than basic kitchen staples to make stellar oat milk. So, what\u2019s the secret?</p>
<p>Oats are partially composed of starch granules. When heated (such as while cooking oatmeal), these granules swell as they absorb water, a process otherwise known as starch gelatinization. Gelatinization is common to other starches as well, but it begins in oats at around <a href="${"http://www.cerealsgrains.org/publications/cc/backissues/1996/Documents/73_271.pdf"}" rel="${"nofollow"}">45</a> to <a href="${"https://www.agriculturejournals.cz/publicFiles/297_2010-CJFS.pdf"}" rel="${"nofollow"}">60</a>\u02DAC (a range, because I can\u2019t seem to find sources that agree).</p>
<p>Starch gelatinization explains exactly why my first batch of oat milk came out gummy and slimy. The unreasonably thick oat lava also covered my hands, arms, and counter in a layer of goop. I didn\u2019t deliberately heat the oat milk, but contact with the whirring blender blades and my warm hands led to an unpalatable mess.</p>
<p>Essentially, you\u2019ll want to <strong>optimize the cold environment</strong> while making oat milk to avoid the onset of gelatinization. For me, this optimization looks like refrigerating all ingredients for at least a couple of hours before blending and straining\u2014especially the water and sweetener (I use three soaked medjool dates). In a similar vein, I keep my blending duration to a minimum: 5-10 second increments, with 10 seconds of \u201Crest time\u201D in between. I strain as quickly as possible to get my milk back in the fridge, and I also cool my hands down with ice water before working.</p>
<p>That\u2019s it! Really. Feel free play with the thickness by changing the ratio of oats to water, though I\u2019d say to proceed with caution and adjust little by little. Achieving smooth, creamy, and fully non-slimy oat milk was truly a cathartic experience for me. However, despite the satisfaction of this success, I continued to look beyond and climb to new heights. Next stop: flavored milk!</p>
<p>\xA0</p>
<h2>Flavored milk</h2>
<p>After understanding the thickening properties of oats, mastering the basics for an immaculate milk base follows without a sweat. It\u2019s also the hardest part! You really can\u2019t go wrong when experimenting with new flavors. Some of my favorite variations include:</p>
<ul><li>matcha milk tea (1 tbsp of matcha powder)</li>
<li>chocolate milk (2 tbsp of cacao powder)</li>
<li>earl grey milk tea (use steeped tea in lieu of water)</li>
<li>cold brew latte (1 tsp instant coffee)</li>
<li>berry milk (bring berries to a simmer on the stovetop and then cool the liquid mixture in the fridge)</li>
<li>red bean milk (use store-bought paste, or make your own\u2014I used an Instant Pot!)</li>
<li>cinnamon spice milk (1 tsp cinnamon, 1 tsp pumpkin spice)</li></ul>
${validate_component(BlogImage, "BlogImage").$$render($$result, {
        src: oatMilk,
        caption: "Matcha oat milk and cherry blossoms."
      }, {}, {})}
<p>Flavors I haven\u2019t tried (but you definitely should) include black sesame milk and golden milk. Reap the extensive health benefits of turmeric! The doors are wide open, and I trust that you\u2019ll discover even more ingenious flavors.</p>
<p>\xA0</p>
<h2>What to do with oat pulp</h2>
<p>Perhaps you now have show-stopping lavender oat milk, but you\u2019re still staring at the leftover pile of oat pulp beside it. Fear not! This slightly slimy glob is actually highly nutritious and easily incorporated into a variety of recipes. I\u2019ve seen people utilize this pulp in dishes from cookies (only for those who eat gluten or have access to a gluten-free baking flour mix, usually) to guacamole, but I usually prefer to throw it in pancake and brownie recipes.
Here\u2019s my brownie recipe. It\u2019s food processor-friendly!</p>
${validate_component(BlogHalfImage, "BlogHalfImage").$$render($$result, {
        image: brownies,
        caption: "The finished product (brownies!!)"
      }, {}, {
        default: () => {
          return `<h3>Ingredients:</h3>
    <ul><li>oat pulp!</li>
        <li><b>3</b> bananas (or another sweetener)</li>
        <li><b>2</b> eggs</li>
        <li><b>\xBC cup</b> oil (coconut, olive, etc.)</li>
        <li><b>\xBD cup</b> nut butter (I use peanut butter powder!)</li>
        <li><b>1 tsp</b> vanilla extract</li>
        <li><b>1 tsp</b> instant coffee powder</li>
        <li><b>1 tsp</b> baking powder</li>
        <li><b>1 tsp</b> cinnamon</li>
        <li><b>\xBC tsp</b> salt</li>
        <li><b>1 cup</b> oat flour</li>
        <li><b>1 cup</b> almond flour</li></ul>
    <h3>Instructions:</h3>
    <ol><li>Blend or mix it all together!</li>
        <li>Bake at 350\u02DAF for 25-30 min.</li></ol>`;
        }
      })}
<p>If you make slight adjustments to the ratio (such as using \xBC cup sweetener instead of bananas), don\u2019t sweat it! I\u2019ve found that this recipe is extremely forgiving. In fact, you could hike the amount of flour and nut butter to make brownie-cookies instead. My winged attempt turned out amazing, just like the sandwich cookies from ice cream sandwiches.</p>
<p>For pancakes, adding in oat pulp is even more lax. Supplement your current recipe with this pulp for a fiber boost!</p>
<p>\xA0</p>
<h2>Additional notes</h2>
<p>While this homemade oat milk is amazing cold or at room temperature, it\u2019ll still cook up when heated. This means no steamy, creamy lattes unless you add stabilizers that prevent gelatinization. The good news is that most store-bought oat milk brands use stabilizers, so I rely Trader Joe\u2019s oat milk for hot drinks instead.</p>
<p>On the other hand, there <em>is</em> a scenario where homemade oat milk is preferable to its store-bought counterpart, namely oat yogurt. Whereas we\u2019re avoiding gelatinization while making oat milk, we actually take advantage of this thickening while making oat yogurt. With most non-dairy milks (almond, cashew, soy), we usually need a thickening agent to give the yogurt structure, whether it be pectin, agar-agar, or something else. Thankfully, oats have this property built in! Homemade oat yogurt effectively follows the same process as oat milk, but you don\u2019t need to keep anything cold. The strained milk mix is simmered on the stove right after, anyway! I use this <a href="${"https://myfermentedfoods.com/how-make-vegan-yogurt/"}" rel="${"nofollow"}">recipe</a>, and it\u2019s continuously served me well. It\u2019s also super simple! Bring your mixture to 180\u02DAF while whisking and without boiling, remove from the heat, and cool (while still whisking) until 115\u02DAF. Finally, stir in the yogurt starter/existing yogurt, ferment in a warm place for at least eight hours, and enjoy!</p>
<p>So, this is it. Oat my goodness! I look forward to the new heights that you\u2019ll bring this information to\u2014new innovative techniques, visionary flavors, and groundbreaking recipes and applications. Wishing you my best :)</p>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/blog/sustainable-textiles.svx.js
var sustainable_textiles_svx_exports = {};
__export(sustainable_textiles_svx_exports, {
  default: () => Sustainable_textiles,
  metadata: () => metadata6
});
var textiles1, textiles2, textiles3, metadata6, title6, slug6, publishDate6, tags6, thumbnail6, summary6, Sustainable_textiles;
var init_sustainable_textiles_svx = __esm({
  ".svelte-kit/output/server/entries/pages/blog/sustainable-textiles.svx.js"() {
    init_index_88921582();
    init_BlogImage_10d5ac5e();
    init_BlogGallery_55092816();
    init_Tag_1ce0eb4c();
    textiles1 = "/_app/assets/textiles-1-becaea75.webp";
    textiles2 = "/_app/assets/textiles-2-12aad45c.webp";
    textiles3 = "/_app/assets/textiles-3-a4faa238.webp";
    metadata6 = {
      "title": "An antidote to greenwashing",
      "slug": "sustainable-textiles",
      "publishDate": "DEC 3 2021",
      "tags": [{ "name": "fashion" }, { "name": "sustainability" }],
      "thumbnail": "haute-greenwashing-post.png",
      "summary": "Any brand can say they're sustainable. By delving into the various textiles behind sustainable clothing, we strip the power from companies to decide whether a product is environmentally friendly."
    };
    ({ title: title6, slug: slug6, publishDate: publishDate6, tags: tags6, thumbnail: thumbnail6, summary: summary6 } = metadata6);
    Sustainable_textiles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(PostHeader, "PostHeader").$$render($$result, {
        title: title6,
        publishDate: publishDate6,
        tags: tags6,
        thumbnail: thumbnail6,
        slug: slug6,
        summary: summary6
      }, {}, {})}
<p><em>This feature article was first published in Haute Magazine\u2019s \u201COn the Edge\u201D issue. I have posted it to my website to maximize web readability, but please feel free to explore the original <a href="${"https://www.hauteusc.com/ontheedge"}" rel="${"nofollow"}">here</a>, complete with the visual design and photography. Haute is USC\u2019s fashion, arts, and culture magazine.</em></p>
<p>\xA0</p>
<h2>Understanding fabrics can help us fight greenwashing</h2>
<p>Any brand can say they\u2019re sustainable. It\u2019s easy to bluff. In recent years, greenwashing \u2014 providing misleading claims about environmental impact \u2014 has grown prolifically to match skyrocketing consumer demand for sustainable products. It\u2019s illegal, unethical, and it breaches the trust between consumers and brands. Greenwashing isn\u2019t going anywhere anytime soon, but we as consumers can regain control of how dodgy, sketchy marketing scams affect us. Specifically, by delving into the various textiles behind sustainable clothing, we strip the power from companies to decide whether a product is environmentally friendly on our behalf.</p>
<p>Fast fashion brands stand at the center of many consistent greenwashing scandals. As an industry responsible for 10% of global carbon emissions, the need for pushing back is clear. Megan McSherry, a sustainability educator and USC 2020 alumna, cites H&amp;M as a perfect example of greenwashing. \u201CThey have their conscious collection with green tags on the clothing,\u201D she says. \u201CBut is the business as a whole sustainable? No. Is that conscious line sustainable? No, because they create millions of garments just for that small line every year.\u201D</p>
<p>With regard to educating Gen Z about tackling fast fashion as an individual consumer, McSherry is working at the forefront. Under the internet name ACTEEVISM, she creates content for over 100 thousand followers across TikTok, Instagram, and Youtube. She\u2019s a firm believer that greenwashing persists because people aren\u2019t educationally equipped to catch it. \u201CIt\u2019s so easy to say that you\u2019re doing something sustainable, because the general population doesn\u2019t have enough knowledge about environmental science to know when they\u2019re telling the truth,\u201D McSherry says.</p>
${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
        default: () => {
          return `${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: textiles2,
            caption: "Various garment production tools. Cover photo for the article in Haute's Fall 2021 issue. <i>(Photo credit: Quan Pham)</i>"
          }, {}, {})}
    ${validate_component(BlogImage, "BlogImage").$$render($$result, {
            className: "gallery-img",
            src: textiles3,
            caption: "Pin-holder, fabric squares, thread, safety pins, and measuring tape. <i>(Photo credit: Quan Pham)</i>"
          }, {}, {})}`;
        }
      })}
<p>\xA0</p>
<h2>Textiles: good and bad</h2>
<p>McSherry explains that textiles play a key role in the industry, both upfront during production and later on in its afterlife. \u201CAbout 98% of textiles end up in a landfill,\u201D McSherry says. \u201CWhat is it going to do? Are the dyes going to impact the soil? Is it a petroleum-based product going into the landfill?\u201D Her key questions prompt deeper thought about what happens to our clothing once it\u2019s tossed out of sight.</p>
<p>The top offenders are petroleum-based fabrics, including polyester and nylon. \u201CThey\u2019re basically plastic,\u201D McSherry says. \u201CEvery time you wash, microplastics are released into the ocean because our washing machines don\u2019t have the capability to filter out teeny-tiny microfibers.\u201D Once they reach the landfill, polyester and nylon take hundreds of years to decompose \u2014 the same predicament behind general plastic waste.</p>
<p>While some companies use recycled PET plastic (rPET) to make leggings and swimwear a more sustainable alternative, McSherry points out that it\u2019s still plastic. Moreover, rPET has given companies ways to greenwash. In instances where demand for rPET has increased significantly, companies accommodate by buying brand-new, never-used plastic to make rPET. \u201CBrands are getting sneaky,\u201D McSherry says. \u201CIt\u2019s important to look for post-consumer recycled rPET instead of just recycled plastic.\u201D</p>
<p>Lindsey Troop, the Regional Manager at FABSCRAP, also warns against end-of-life dilemmas with spandex. FABSCRAP is a nonprofit organization dedicated to coordinating textile reuse and recycling. 60% of the fabric they receive is directly reused and made available to the public, while another 40% is shredded and turned into shoddy for insulation. \u201CWe have to sort out anything that has even 1% of spandex because it will actually melt in the high-heat system and gum up the machinery,\u201D she says.</p>
<p>Volunteers and employees at FABSCRAP instead sort out the spandex scrap and sell it by the pound as scrap packs. They also work with boxing gyms to fill punching bags and with animal shelters to stuff dog pillows. \u201CYou have to get really creative with the reuse aspect, and it\u2019s definitely not a long-term solution,\u201D Troop says.</p>
<p>On the other side of the spectrum, organic cotton might seem like the go-to sustainable fabric. After all, it\u2019s organic, isn\u2019t it? Yet McSherry mentions that organic cotton can use more land and water than conventional cotton and other crops. Instead, she cites regenerative cotton practices as a cleaner alternative. \u201CRegenerative cotton practices grow cotton in a way that nourishes the soil instead of soaking every ounce of nutrients from the ground,\u201D McSherry says. Among other natural fibers, hemp is another up-and-coming sustainable option that serves versatile purposes and limits water usage during its cultivation.</p>
<p>Companies like Lenzing are also developing innovative fibers with a lower ecological footprint. Erica Redd is the Business Development Manager for the New York office of Lenzing, the company behind innovative fibers ECOVERO, TENCEL Lyocell, and TENCEL Modal. Redd notes that these three fibers all source their wood from natural forests or sustainable forestry plantations with the highest environmental standards. In fact, tracing the source of ECOVERO, Lenzing\u2019s brand of viscose, is crucial to its sustainability. \u201CThere\u2019s dirty viscose out there that people talk about, specifically because you don\u2019t know where it\u2019s coming from,\u201D she says. \u201COur viscose is traceable, so we have around 50% lower emissions and water impact when compared to a generic viscose.\u201D</p>
<p>TENCEL Modal utilizes the entirety of the wood, recovering around 40% as cellulose and using the remaining 60% to power the plant and help with production. During the process, they also recover sodium sulfate and other chemicals that are sold off into the food industry.</p>
<p>With TENCEL Lyocell, Lenzing is able to recover over 99% of the solvent, losing only 0.6% to steam. \u201CWe don\u2019t have to sell it off or anything,\u201D Redd says. \u201CIt\u2019s just fully recovered and fully reused every time.\u201D TENCEL Lyocell both biodegrades and composts, actually adding positive value back into the environment.</p>
<p>Beyond fibers, Lenzing is also developing sustainable process innovations such as their REFIBRA technology and Eco Color Technology. REFIBRA technology is designed to give post-consumer cotton scraps another life, chemically recycling them along with virgin TENCEL Lyocell to preserve the fiber\u2019s strength. Redd asserts that REFIBRA is a great example of Lenzing\u2019s commitment to improvement. \u201CWhen we started REFIBRA, we were only at a 15% mix of pre-consumer cotton waste,\u201D she says. \u201CNow, we\u2019ve increased it to 30% of pre- and post-consumer cotton waste.\u201D</p>
<p>Lenzing\u2019s Eco Color technology provides a more environmentally-friendly method to dye fibers. When the TENCEL Modal is a honey-like consistency during the production process, they add the dye and spin out pre-colored fiber. Eco Colors mitigate the water and dye waste that comes with dyeing the fiber later on. In Austria, if you buy a bag of oranges, it actually comes in a bag that\u2019s made out of our Modal Eco Colors,\u201D Redd says. \u201CYou can just put it into your compost and it will biodegrade, which is really cool.\u201D</p>
<p>Moving forward, Redd says being carbon neutral by 2050 is one of Lenzing\u2019s top goals. They\u2019ve started the process by offering carbon-zero fiber for TENCEL Modal, Lyocell, and REFIBRA by purchasing carbon credits and offering certification for brands. \u201CCreating more sustainable products and reinvesting in our fibers is really the future,\u201D Redd says.</p>
<p>When assessing the materials on the clothing tag, McSherry provides a general rule of thumb. \u201CCotton, linen, TENCEL, bamboo lyocell \u2014 all of those are natural materials, and a lot of them grow fairly quickly or are less resource-intensive,\u201D she says. \u201CThe best fabrics are really just well thought out.\u201D</p>
<p>\xA0</p>
<h2>The power of transparency</h2>
<p>So, what is the antidote to greenwashing? How do we catch companies in the act and make informed decisions? Beyond checking the clothing label for specific materials, McSherry urges people to assess brands as a whole by looking into the sustainable claims they find. \u201CDon\u2019t just assume that what brands are saying is true,\u201D she says.</p>
<p>TENCEL ensures that brands using their fibers are telling the truth, by adding their fiber identification during the production process. \u201CSay you\u2019re in Madewell and you\u2019re looking at a product that says it\u2019s made out of TENCEL,\u201D Redd says. \u201CThat fabric has actually been tested in our lab, and we have given it a certification that it is our fiber.\u201D</p>
<p>Redd recommends companies\u2019 sustainability reports as a useful resource to assess. Brands creating genuine positive impact will be sure to promote their work\u2014Reformation publishes quarterly reports of their progress across priorities such as social responsibility, resource efficiency, and product traceability. \u201CMake sure they release data,\u201D Redd says. \u201CThat\u2019s the most important thing \u2014 whether they\u2019re releasing numbers.\u201D</p>
<p>Tentree is an \u201CEarth-First\u201D apparel brand that exemplifies the importance of transparency in establishing trust with consumers. Beyond using 98% preferred materials in their apparel \u2014 TENCEL, recycled polyester, organic cotton, and hemp \u2014 tentree has a unique initiative to plant ten trees with every purchase. Alone, this claim means little, but tentree takes additional steps to support their mission. They work with non-profit organizations and experts to spearhead reforestation initiatives in devastated areas, often sitting on the board to verify their efforts.</p>
<p>Customers can register their trees and track their impact. On their blog, tentree details different tree species, planting sites, and community planters. Director of Product Commercialization Ludovic Duran notes that tentree is working on new initiatives to increase transparency with the tree-planting process. \u201CRecently, we have gone into developing new technology to support those companies in tracking, mapping, and reporting what\u2019s going on on the ground,\u201D Duran says.</p>
<p>Tentree prioritizes sustaining their planting projects long-term. Their non-profit partners educate and collaborate with locals to train them on how to maintain their nurseries and forests. \u201CWe were planting with a partner in Senegal to support local communities not just in reforesting and bringing biodiversity back, but also to support them in achieving independence from food sources,\u201D Duran says.</p>
<p>Since joining the Climate Neutral Certification Program last year, tentree has developed a life cycle assessment of the company\u2019s total emissions. Duran clarifies that tentree accounts for their carbon footprint by using gold standard carbon offset. Their tree-planting initiative is an additional step that tentree takes to support their values. \u201CIt\u2019s not just about limiting our impact or being aware of our impact,\u201D Duran says. \u201CWe really want to bring a positive impact.\u201D</p>
${validate_component(BlogImage, "BlogImage").$$render($$result, {
        className: "gallery-img",
        src: textiles1,
        caption: "Measuring textile squares in a sewing workspace. <i>(Photo credit: Quan Pham)</i>"
      }, {}, {})}
<p>\xA0</p>
<h2>Nuances in the broader picture of sustainable fashion</h2>
<p>Sustainability extends beyond the numbers of how eco-friendly an item is. We as consumers also need to consider how brands treat their workers and their surrounding communities. With fast fashion, garment worker conditions are a particularly dire concern. \u201CFashion is one of the only industries that really can\u2019t automate very much,\u201D McSherry says. \u201CEvery single garment is sewn by somebody.\u201D</p>
<p>Before Los Angeles passed S.B. 62, a bill ensuring minimum wage, garment workers made roughly $5 an hour sewing hundreds of garments, working 60 to 80 hours a week. \u201CThat\u2019s not okay,\u201D McSherry says. \u201CIn a state that has a $15 an hour minimum wage, some people are making as low as $2 an hour sewing the clothes that we wear once and then throw away \u2014 it\u2019s horrible.\u201D</p>
<p>McSherry points out that dirt-cheap prices from H&amp;M and Forever 21 simply can\u2019t exist without exploiting workers. Instead, billionaire executives take advantage of garment workers to sell the clothes for as little as they can while still making a huge profit. \u201CThe founder of H&amp;M should not be in the top 10 richest people if their garment workers aren\u2019t making enough to live,\u201D McSherry says.</p>
<p>Fashion also is one of the only industries that isn\u2019t regulated at all on a federal level in terms of the environmental impact just because it\u2019s such a global industry. \u201CWe have emission-reduction goals for cars, fossil fuels, and all of these other industries, but there\u2019s nothing being done about fashion currently,\u201D McSherry says.</p>
<p>Although greenwashing creates a minefield for sustainable consumerism, the tools to fight back are widespread and accessible. A great first step is to slow down your purchasing process. McSherry provides a specific tip about giving items a cool-down period before buying them. \u201CDon\u2019t shop through Instagram,\u201D she says. \u201CIf you see something that you like, text yourself the link and look at it on your computer.\u201D By reassessing the item later, we are more mindful and avoid impulsive purchases.</p>
<p>While many sustainable solutions are economically inaccessible, sustainable consumerism lies in a mindset that we can apply beyond the brand, even at Urban Outfitters, Zara, or H&amp;M. McSherry and Troop both emphasize that prioritizing longevity and end-life of items is crucial. \u201CThere is a sustainable mindset that you can adopt without changing too much about where you consume, and that\u2019s my hope for the future,\u201D McSherry says. Invest in timeless colors and styles while avoiding trends.</p>
<p>Troop had a background in fashion styling and merchandising, and her experience at FABSCRAP prompted her to think about the waste they created at the retail level. \u201CWhen someone returned something that was slightly damaged, we would just toss it aside,\u201D she says. \u201CAfter I had this introduction to textile waste I was like, \u2018Wait, what are you doing with it? Wait, where does that end up?\u2019\u201D After the purchase, care for clothing in a way that extends its lifespan.</p>
<p>We should also work actively to keep brands accountable. When we find lapses in transparency, we need to be vocal. Accounts like @remakeourworld on Instagram encourage us to find community in advocacy. They call out fast fashion brands for greenwashing and covering up claims of unethical labor. Anyone with a social media account can leave comments under brands\u2019 Instagram pages, whether it be exposing inconsistencies or asking for cleaner practices. \u201CThat\u2019s one of my favorite accessible ways to advocate for change,\u201D McSherry says.</p>
<p>Ultimately, enjoying fashion sustainably comes from an intentional paradigm to make the most out of the resources that we have available. As Troop summarizes, \u201Cif you feel a certain responsibility for what happens to your products after you use them, then I think you\u2019re on the right track.\u201D</p>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/blog/index.svelte.js
var index_svelte_exports2 = {};
__export(index_svelte_exports2, {
  default: () => Blog,
  load: () => load3
});
async function load3() {
  const posts2 = await Promise.all(body);
  return { props: { posts: posts2 } };
}
var css$17, PostCard, css15, posts, body, Blog;
var init_index_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/blog/index.svelte.js"() {
    init_index_88921582();
    init_Tag_1ce0eb4c();
    init_EmailInput_991948a7();
    init_SvelteToast_svelte_svelte_type_style_lang_382c1799();
    init_Icon_4e55a523();
    css$17 = {
      code: ".card-container.svelte-imcoqk.svelte-imcoqk{background-color:var(--postcard-color);box-shadow:0 0 1rem var(--secondary-subtle-color)}.card-container.svelte-imcoqk img.svelte-imcoqk{width:100%}.card-container.svelte-imcoqk .date.svelte-imcoqk{font-size:0.8rem;margin-top:0.5rem}.card-container.svelte-imcoqk .post-description.svelte-imcoqk{padding:0 1rem 0.5rem 1rem}.card-container.svelte-imcoqk h2.svelte-imcoqk{font-size:1.2rem;margin-bottom:0.5rem}.card-container.svelte-imcoqk a.svelte-imcoqk{text-decoration:none;color:var(--text-color)}.card-container.svelte-imcoqk p.svelte-imcoqk{font-size:0.9rem}",
      map: null
    };
    PostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { post } = $$props;
      if ($$props.post === void 0 && $$bindings.post && post !== void 0)
        $$bindings.post(post);
      $$result.css.add(css$17);
      return `<div class="${"card-container svelte-imcoqk"}"><a sveltekit:prefetch sveltekit:noscroll href="${"blog/" + escape(post.slug)}" class="${"svelte-imcoqk"}"><img${add_attribute("src", "/thumbnails/" + post.thumbnail + "?w=400&webp", 0)}${add_attribute("alt", post.title, 0)} class="${"svelte-imcoqk"}">
		<div class="${"post-description svelte-imcoqk"}"><h2 class="${"svelte-imcoqk"}">${escape(post.title)}</h2>
			<p class="${"date svelte-imcoqk"}">${post.editDate !== void 0 ? `EDITED ${escape(post.editDate)}` : `${post.publishDate !== void 0 ? `${escape(post.publishDate)}` : ``}`}</p>
			<div class="${"buttons"}">${each(post.tags, (tag) => {
        return `${validate_component(Tag, "Tag").$$render($$result, { className: "inactive" }, {}, {
          default: () => {
            return `${escape(tag.name)}`;
          }
        })}`;
      })}</div>
			<p class="${"svelte-imcoqk"}">${escape(post.summary)}</p></div></a>
</div>`;
    });
    css15 = {
      code: ".post-container.svelte-monhdd{display:grid;grid-template-columns:repeat(auto-fill, minmax(15rem, 1fr));grid-gap:2rem;padding:3rem 0}.selectedTag.svelte-monhdd .filter{background-color:var(--highlight-color);box-shadow:0 0 0.2rem var(--primary-light-color);color:var(--primary-color);border:2.5px solid var(--primary-color)}",
      map: null
    };
    posts = { "./fruit-blobs.svx": () => Promise.resolve().then(() => (init_fruit_blobs_svx(), fruit_blobs_svx_exports)), "./gingerbread-house-2021.svx": () => Promise.resolve().then(() => (init_gingerbread_house_2021_svx(), gingerbread_house_2021_svx_exports)), "./made-with-svelte-kit.svx": () => Promise.resolve().then(() => (init_made_with_svelte_kit_svx(), made_with_svelte_kit_svx_exports)), "./michelle-feng.svx": () => Promise.resolve().then(() => (init_michelle_feng_svx(), michelle_feng_svx_exports)), "./oat-milk-guide.svx": () => Promise.resolve().then(() => (init_oat_milk_guide_svx(), oat_milk_guide_svx_exports)), "./sustainable-textiles.svx": () => Promise.resolve().then(() => (init_sustainable_textiles_svx(), sustainable_textiles_svx_exports)) };
    body = [];
    for (const path in posts) {
      body.push(posts[path]().then(({ metadata: metadata7 }) => metadata7));
    }
    Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { posts: posts2 } = $$props;
      let selectedTags = {};
      for (const post of posts2) {
        if (post !== void 0) {
          if (post.editDate !== void 0) {
            post.dateObj = new Date(post.editDate);
          } else {
            post.dateObj = new Date(post.publishDate);
          }
          for (const postTag of post.tags) {
            selectedTags[postTag.name] = false;
          }
        }
      }
      posts2.sort((a, b) => b.dateObj - a.dateObj);
      if ($$props.posts === void 0 && $$bindings.posts && posts2 !== void 0)
        $$bindings.posts(posts2);
      $$result.css.add(css15);
      return `${$$result.head += `${$$result.title = `<title>blog</title>`, ""}<meta property="${"og:title"}" content="${"vivian li's blog"}" data-svelte="svelte-6np8tt"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-6np8tt"><meta property="${"og:image"}" content="${"/thumbnails/vwl-site.png"}" data-svelte="svelte-6np8tt"><meta property="${"og:url"}" content="${"https://www.vivianwli.com/blog"}" data-svelte="svelte-6np8tt">`, ""}

<div class="${"content"}">${validate_component(SvelteToast, "SvelteToast").$$render($$result, {}, {}, {})}
	<h1>musings</h1>
	<p>A humble abode for my ideas, experiments, and reflections. Welcome!</p>
	<div class="${"buttons"}">${each(Object.keys(selectedTags).filter((k) => selectedTags[k]), (tag) => {
        return `<div class="${["svelte-monhdd", selectedTags[tag] ? "selectedTag" : ""].join(" ").trim()}">${validate_component(Tag, "Tag").$$render($$result, { className: "filter" }, {}, {
          default: () => {
            return `${escape(tag)}`;
          }
        })}
			</div>`;
      })}
		${each(Object.keys(selectedTags).filter((k) => !selectedTags[k]), (tag) => {
        return `<div class="${["svelte-monhdd", selectedTags[tag] ? "selectedTag" : ""].join(" ").trim()}">${validate_component(Tag, "Tag").$$render($$result, { className: "filter" }, {}, {
          default: () => {
            return `${escape(tag)}`;
          }
        })}
			</div>`;
      })}
		<div>${validate_component(Tag, "Tag").$$render($$result, { className: "clear" }, {}, {
        default: () => {
          return `clear all`;
        }
      })}</div></div>
	<div class="${"post-container svelte-monhdd"}">${Object.keys(selectedTags).filter((k) => selectedTags[k]).length === 0 ? `${each(posts2, (post) => {
        return `${post !== void 0 ? `${validate_component(PostCard, "PostCard").$$render($$result, { post }, {}, {})}` : ``}`;
      })}` : `${each(posts2, (post) => {
        return `${each(post.tags, (tag) => {
          return `${selectedTags[tag.name] ? `${post !== void 0 ? `${validate_component(PostCard, "PostCard").$$render($$result, { post }, {}, {})}` : ``}` : ``}`;
        })}`;
      })}`}</div>
	<p>Want reminders when I post? Feel free to subscribe:</p>
	${validate_component(EmailInput, "EmailInput").$$render($$result, {}, {}, {})}
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  css: () => css16,
  entry: () => entry6,
  js: () => js6,
  module: () => index_svelte_exports2
});
var entry6, js6, css16;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_index_svelte2();
    entry6 = "pages/blog/index.svelte-d7cf4f23.js";
    js6 = ["pages/blog/index.svelte-d7cf4f23.js", "chunks/preload-helper-ec9aa979.js", "chunks/vendor-0e906c74.js", "chunks/Tag-4aa40753.js", "chunks/EmailInput-26df116f.js"];
    css16 = ["assets/pages/blog/index.svelte-330dec77.css", "assets/app-ec155f4d.css", "assets/vendor-5469db33.css", "assets/Tag-5030ad19.css", "assets/EmailInput-f58afbb8.css"];
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  css: () => css17,
  entry: () => entry7,
  js: () => js7,
  module: () => gingerbread_house_2021_svx_exports
});
var entry7, js7, css17;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    init_gingerbread_house_2021_svx();
    entry7 = "pages/blog/gingerbread-house-2021.svx-1889cff6.js";
    js7 = ["pages/blog/gingerbread-house-2021.svx-1889cff6.js", "chunks/vendor-0e906c74.js", "chunks/BlogImage-ec7a3d1b.js", "chunks/Tag-4aa40753.js", "chunks/BlogGallery-a7257cb9.js"];
    css17 = ["assets/app-ec155f4d.css", "assets/vendor-5469db33.css", "assets/BlogImage-3a25515d.css", "assets/Tag-5030ad19.css", "assets/BlogGallery-ca2ee3c4.css"];
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  css: () => css18,
  entry: () => entry8,
  js: () => js8,
  module: () => made_with_svelte_kit_svx_exports
});
var entry8, js8, css18;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    init_made_with_svelte_kit_svx();
    entry8 = "pages/blog/made-with-svelte-kit.svx-6a37bae7.js";
    js8 = ["pages/blog/made-with-svelte-kit.svx-6a37bae7.js", "chunks/vendor-0e906c74.js", "chunks/BlogImage-ec7a3d1b.js", "chunks/Tag-4aa40753.js", "chunks/BlogGallery-a7257cb9.js"];
    css18 = ["assets/app-ec155f4d.css", "assets/vendor-5469db33.css", "assets/BlogImage-3a25515d.css", "assets/Tag-5030ad19.css", "assets/BlogGallery-ca2ee3c4.css"];
  }
});

// .svelte-kit/output/server/nodes/8.js
var __exports9 = {};
__export(__exports9, {
  css: () => css19,
  entry: () => entry9,
  js: () => js9,
  module: () => sustainable_textiles_svx_exports
});
var entry9, js9, css19;
var init__9 = __esm({
  ".svelte-kit/output/server/nodes/8.js"() {
    init_sustainable_textiles_svx();
    entry9 = "pages/blog/sustainable-textiles.svx-098bdfad.js";
    js9 = ["pages/blog/sustainable-textiles.svx-098bdfad.js", "chunks/vendor-0e906c74.js", "chunks/BlogImage-ec7a3d1b.js", "chunks/Tag-4aa40753.js", "chunks/BlogGallery-a7257cb9.js"];
    css19 = ["assets/app-ec155f4d.css", "assets/vendor-5469db33.css", "assets/BlogImage-3a25515d.css", "assets/Tag-5030ad19.css", "assets/BlogGallery-ca2ee3c4.css"];
  }
});

// .svelte-kit/output/server/nodes/9.js
var __exports10 = {};
__export(__exports10, {
  css: () => css20,
  entry: () => entry10,
  js: () => js10,
  module: () => oat_milk_guide_svx_exports
});
var entry10, js10, css20;
var init__10 = __esm({
  ".svelte-kit/output/server/nodes/9.js"() {
    init_oat_milk_guide_svx();
    entry10 = "pages/blog/oat-milk-guide.svx-b02966b1.js";
    js10 = ["pages/blog/oat-milk-guide.svx-b02966b1.js", "chunks/vendor-0e906c74.js", "chunks/BlogImage-ec7a3d1b.js", "chunks/Tag-4aa40753.js"];
    css20 = ["assets/pages/blog/oat-milk-guide.svx-c588e15f.css", "assets/app-ec155f4d.css", "assets/vendor-5469db33.css", "assets/BlogImage-3a25515d.css", "assets/Tag-5030ad19.css"];
  }
});

// .svelte-kit/output/server/nodes/10.js
var __exports11 = {};
__export(__exports11, {
  css: () => css21,
  entry: () => entry11,
  js: () => js11,
  module: () => michelle_feng_svx_exports
});
var entry11, js11, css21;
var init__11 = __esm({
  ".svelte-kit/output/server/nodes/10.js"() {
    init_michelle_feng_svx();
    entry11 = "pages/blog/michelle-feng.svx-7f0e54f6.js";
    js11 = ["pages/blog/michelle-feng.svx-7f0e54f6.js", "chunks/vendor-0e906c74.js", "chunks/BlogImage-ec7a3d1b.js", "chunks/Tag-4aa40753.js"];
    css21 = ["assets/app-ec155f4d.css", "assets/vendor-5469db33.css", "assets/BlogImage-3a25515d.css", "assets/Tag-5030ad19.css"];
  }
});

// .svelte-kit/output/server/nodes/11.js
var __exports12 = {};
__export(__exports12, {
  css: () => css22,
  entry: () => entry12,
  js: () => js12,
  module: () => fruit_blobs_svx_exports
});
var entry12, js12, css22;
var init__12 = __esm({
  ".svelte-kit/output/server/nodes/11.js"() {
    init_fruit_blobs_svx();
    entry12 = "pages/blog/fruit-blobs.svx-2dc21593.js";
    js12 = ["pages/blog/fruit-blobs.svx-2dc21593.js", "chunks/vendor-0e906c74.js", "chunks/BlogImage-ec7a3d1b.js", "chunks/Tag-4aa40753.js", "chunks/BlogGallery-a7257cb9.js"];
    css22 = ["assets/app-ec155f4d.css", "assets/vendor-5469db33.css", "assets/BlogImage-3a25515d.css", "assets/Tag-5030ad19.css", "assets/BlogGallery-ca2ee3c4.css"];
  }
});

// .svelte-kit/output/server/entries/pages/home.svelte.js
var home_svelte_exports = {};
__export(home_svelte_exports, {
  default: () => Home
});
var Home;
var init_home_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/home.svelte.js"() {
    init_index_88921582();
    Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/12.js
var __exports13 = {};
__export(__exports13, {
  css: () => css23,
  entry: () => entry13,
  js: () => js13,
  module: () => home_svelte_exports
});
var entry13, js13, css23;
var init__13 = __esm({
  ".svelte-kit/output/server/nodes/12.js"() {
    init_home_svelte();
    entry13 = "pages/home.svelte-05f9db7d.js";
    js13 = ["pages/home.svelte-05f9db7d.js", "chunks/vendor-0e906c74.js", "chunks/navigation-b10cf5bf.js", "chunks/singletons-4a680913.js"];
    css23 = ["assets/vendor-5469db33.css"];
  }
});

// .svelte-kit/vercel-tmp/entry.js
__export(exports, {
  default: () => entry_default
});
init_install_fetch();

// node_modules/@sveltejs/kit/dist/node.js
function getRawBody(req) {
  return new Promise((fulfil, reject) => {
    const h2 = req.headers;
    if (!h2["content-type"]) {
      return fulfil(null);
    }
    req.on("error", reject);
    const length = Number(h2["content-length"]);
    if (isNaN(length) && h2["transfer-encoding"] == null) {
      return fulfil(null);
    }
    let data = new Uint8Array(length || 0);
    if (length > 0) {
      let offset = 0;
      req.on("data", (chunk) => {
        const new_len = offset + Buffer.byteLength(chunk);
        if (new_len > length) {
          return reject({
            status: 413,
            reason: 'Exceeded "Content-Length" limit'
          });
        }
        data.set(chunk, offset);
        offset = new_len;
      });
    } else {
      req.on("data", (chunk) => {
        const new_data = new Uint8Array(data.length + chunk.length);
        new_data.set(data, 0);
        new_data.set(chunk, data.length);
        data = new_data;
      });
    }
    req.on("end", () => {
      fulfil(data);
    });
  });
}

// .svelte-kit/output/server/app.js
init_index_88921582();
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _map;
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => {
      return `${components[2] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
        default: () => {
          return `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}`;
        }
      })}` : `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {})}`}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {})}`}

${``}`;
});
function get_single_valued_header(headers, key) {
  const value = headers[key];
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return void 0;
    }
    if (value.length > 1) {
      throw new Error(`Multiple headers provided for ${key}. Multiple may be provided only for set-cookie`);
    }
    return value[0];
  }
  return value;
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function decode_params(params) {
  for (const key in params) {
    params[key] = params[key].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
function error(body2) {
  return {
    status: 500,
    body: body2,
    headers: {}
  };
}
function is_string(s22) {
  return typeof s22 === "string" || s22 instanceof String;
}
var text_types = new Set([
  "application/xml",
  "application/json",
  "application/x-www-form-urlencoded",
  "multipart/form-data"
]);
function is_text(content_type) {
  if (!content_type)
    return true;
  const type = content_type.split(";")[0].toLowerCase();
  return type.startsWith("text/") || type.endsWith("+xml") || text_types.has(type);
}
async function render_endpoint(request, route, match) {
  const mod = await route.load();
  const handler = mod[request.method.toLowerCase().replace("delete", "del")];
  if (!handler) {
    return;
  }
  request.params = route.params ? decode_params(route.params(match)) : {};
  const response = await handler(request);
  const preface = `Invalid response from route ${request.url.pathname}`;
  if (typeof response !== "object") {
    return error(`${preface}: expected an object, got ${typeof response}`);
  }
  if (response.fallthrough) {
    return;
  }
  let { status = 200, body: body2, headers = {} } = response;
  headers = lowercase_keys(headers);
  const type = get_single_valued_header(headers, "content-type");
  if (!is_text(type) && !(body2 instanceof Uint8Array || is_string(body2))) {
    return error(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
  }
  let normalized_body;
  if ((typeof body2 === "object" || typeof body2 === "undefined") && !(body2 instanceof Uint8Array) && (!type || type.startsWith("application/json"))) {
    headers = __spreadProps(__spreadValues({}, headers), { "content-type": "application/json; charset=utf-8" });
    normalized_body = JSON.stringify(typeof body2 === "undefined" ? {} : body2);
  } else {
    normalized_body = body2;
  }
  return { status, body: normalized_body, headers };
}
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped2 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry14) {
    return entry14[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry14, i2) {
    names.set(entry14[0], getName(i2));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i2) {
          return i2 in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i2) {
            statements_1.push(name + "[" + i2 + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a4) {
            var k = _a4[0], v = _a4[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped2[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i2 = 0; i2 < str.length; i2 += 1) {
    var char = str.charAt(i2);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped2) {
      result += escaped2[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i2 + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i2];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop3() {
}
function safe_not_equal2(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
Promise.resolve();
var subscriber_queue = [];
function writable(value, start = noop3) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal2(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i2 = 0; i2 < subscriber_queue.length; i2 += 2) {
            subscriber_queue[i2][0](subscriber_queue[i2 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop3) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop3;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function hash(value) {
  let hash2 = 5381;
  let i2 = value.length;
  if (typeof value === "string") {
    while (i2)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i2);
  } else {
    while (i2)
      hash2 = hash2 * 33 ^ value[--i2];
  }
  return (hash2 >>> 0).toString(36);
}
var escape_json_string_in_html_dict = {
  '"': '\\"',
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape_json_string_in_html(str) {
  return escape2(str, escape_json_string_in_html_dict, (code) => `\\u${code.toString(16).toUpperCase()}`);
}
var escape_html_attr_dict = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function escape_html_attr(str) {
  return '"' + escape2(str, escape_html_attr_dict, (code) => `&#${code};`) + '"';
}
function escape2(str, dict, unicode_encoder) {
  let result = "";
  for (let i2 = 0; i2 < str.length; i2 += 1) {
    const char = str.charAt(i2);
    const code = char.charCodeAt(0);
    if (char in dict) {
      result += dict[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i2 + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i2];
      } else {
        result += unicode_encoder(code);
      }
    } else {
      result += char;
    }
  }
  return result;
}
var s2 = JSON.stringify;
function create_prerendering_url_proxy(url) {
  return new Proxy(url, {
    get: (target, prop, receiver) => {
      if (prop === "search" || prop === "searchParams") {
        throw new Error(`Cannot access url.${prop} on a page with prerendering enabled`);
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
async function render_response({
  branch,
  options,
  state,
  $session,
  page_config,
  status,
  error: error2,
  url,
  params,
  ssr,
  stuff
}) {
  const css24 = new Set(options.manifest._.entry.css);
  const js14 = new Set(options.manifest._.entry.js);
  const styles = new Map();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error2) {
    error2.stack = options.get_stack(error2);
  }
  if (ssr) {
    branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
      if (node.css)
        node.css.forEach((url2) => css24.add(url2));
      if (node.js)
        node.js.forEach((url2) => js14.add(url2));
      if (node.styles)
        Object.entries(node.styles).forEach(([k, v]) => styles.set(k, v));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page: {
        url: state.prerender ? create_prerendering_url_proxy(url) : url,
        params,
        status,
        error: error2,
        stuff
      },
      components: branch.map(({ node }) => node.module.default)
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    for (let i2 = 0; i2 < branch.length; i2 += 1) {
      props[`props_${i2}`] = await branch[i2].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body2 } = rendered;
  const inlined_style = Array.from(styles.values()).join("\n");
  if (options.amp) {
    head += `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>

		<style amp-custom>${inlined_style}
${rendered.css.code}</style>`;
    if (options.service_worker) {
      head += '<script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"><\/script>';
      body2 += `<amp-install-serviceworker src="${options.service_worker}" layout="nodisplay"></amp-install-serviceworker>`;
    }
  } else {
    if (inlined_style) {
      head += `
	<style${options.dev ? " data-svelte" : ""}>${inlined_style}</style>`;
    }
    head += Array.from(css24).map((dep) => `
	<link${styles.has(dep) ? " disabled" : ""} rel="stylesheet" href="${options.prefix + dep}">`).join("");
    if (page_config.router || page_config.hydrate) {
      head += Array.from(js14).map((dep) => `
	<link rel="modulepreload" href="${options.prefix + dep}">`).join("");
      head += `
			<script type="module">
				import { start } from ${s2(options.prefix + options.manifest._.entry.file)};
				start({
					target: ${options.target ? `document.querySelector(${s2(options.target)})` : "document.body"},
					paths: ${s2(options.paths)},
					session: ${try_serialize($session, (error3) => {
        throw new Error(`Failed to serialize session data: ${error3.message}`);
      })},
					route: ${!!page_config.router},
					spa: ${!ssr},
					trailing_slash: ${s2(options.trailing_slash)},
					hydrate: ${ssr && page_config.hydrate ? `{
						status: ${status},
						error: ${serialize_error(error2)},
						nodes: [
							${(branch || []).map(({ node }) => `import(${s2(options.prefix + node.entry)})`).join(",\n						")}
						],
						url: new URL(${s2(url.href)}),
						params: ${devalue(params)}
					}` : "null"}
				});
			<\/script>${options.service_worker ? `
			<script>
				if ('serviceWorker' in navigator) {
					navigator.serviceWorker.register('${options.service_worker}');
				}
			<\/script>` : ""}`;
      body2 += serialized_data.map(({ url: url2, body: body22, json }) => {
        let attributes = `type="application/json" data-type="svelte-data" data-url=${escape_html_attr(url2)}`;
        if (body22)
          attributes += ` data-body="${hash(body22)}"`;
        return `<script ${attributes}>${json}<\/script>`;
      }).join("\n\n	");
    }
  }
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  const segments = url.pathname.slice(options.paths.base.length).split("/").slice(2);
  const assets2 = options.paths.assets || (segments.length > 0 ? segments.map(() => "..").join("/") : ".");
  return {
    status,
    headers,
    body: options.template({
      head,
      body: body2,
      assets: assets2
    })
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(coalesce_to_error(err));
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const { name, message, stack } = error2;
    serialized = try_serialize(__spreadProps(__spreadValues({}, error2), { name, message, stack }));
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return {
        status: status || 500,
        error: new Error()
      };
    }
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error2 };
    }
    return { status, error: error2 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  if (loaded.context) {
    throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
  }
  return loaded;
}
var absolute = /^([a-z]+:)?\/?\//;
var scheme = /^[a-z]+:/;
function resolve(base2, path) {
  if (scheme.test(path))
    return path;
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i2 = 0; i2 < pathparts.length; i2 += 1) {
    const part = pathparts[i2];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix}${baseparts.join("/")}`;
}
function is_root_relative(path) {
  return path[0] === "/" && path[1] !== "/";
}
async function load_node({
  request,
  options,
  state,
  route,
  url,
  params,
  node,
  $session,
  stuff,
  is_error,
  status,
  error: error2
}) {
  const { module: module2 } = node;
  let uses_credentials = false;
  const fetched = [];
  let set_cookie_headers = [];
  let loaded;
  if (module2.load) {
    const load_input = {
      url: state.prerender ? create_prerendering_url_proxy(url) : url,
      params,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let requested;
        if (typeof resource === "string") {
          requested = resource;
        } else {
          requested = resource.url;
          opts = __spreadValues({
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity
          }, opts);
        }
        opts.headers = new Headers(opts.headers);
        const resolved = resolve(request.url.pathname, requested.split("?")[0]);
        let response;
        const prefix = options.paths.assets || options.paths.base;
        const filename = (resolved.startsWith(prefix) ? resolved.slice(prefix.length) : resolved).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest._.mime[filename.slice(filename.lastIndexOf("."))] : "text/html";
            response = new Response(options.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else {
            response = await fetch(`${url.origin}/${file}`, opts);
          }
        } else if (is_root_relative(resolved)) {
          const relative = resolved;
          if (opts.credentials !== "omit") {
            uses_credentials = true;
            if (request.headers.cookie) {
              opts.headers.set("cookie", request.headers.cookie);
            }
            if (request.headers.authorization && !opts.headers.has("authorization")) {
              opts.headers.set("authorization", request.headers.authorization);
            }
          }
          if (opts.body && typeof opts.body !== "string") {
            throw new Error("Request body must be a string");
          }
          const rendered = await respond({
            url: new URL(requested, request.url),
            method: opts.method || "GET",
            headers: Object.fromEntries(opts.headers),
            rawBody: opts.body == null ? null : new TextEncoder().encode(opts.body)
          }, options, {
            fetched: requested,
            initiator: route
          });
          if (rendered) {
            if (state.prerender) {
              state.prerender.dependencies.set(relative, rendered);
            }
            response = new Response(rendered.body, {
              status: rendered.status,
              headers: rendered.headers
            });
          } else {
            return fetch(new URL(requested, request.url).href, {
              method: opts.method || "GET",
              headers: opts.headers
            });
          }
        } else {
          if (resolved.startsWith("//")) {
            throw new Error(`Cannot request protocol-relative URL (${requested}) in server-side fetch`);
          }
          if (`.${new URL(requested).hostname}`.endsWith(`.${request.url.hostname}`) && opts.credentials !== "omit") {
            uses_credentials = true;
            opts.headers.set("cookie", request.headers.cookie);
          }
          const external_request = new Request(requested, opts);
          response = await options.hooks.externalFetch.call(null, external_request);
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, _receiver) {
              async function text() {
                const body2 = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 === "set-cookie") {
                    set_cookie_headers = set_cookie_headers.concat(value);
                  } else if (key2 !== "etag") {
                    headers[key2] = value;
                  }
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url: requested,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s2(response2.statusText)},"headers":${s2(headers)},"body":"${escape_json_string_in_html(body2)}"}`
                  });
                }
                return body2;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      stuff: __spreadValues({}, stuff)
    };
    if (options.dev) {
      Object.defineProperty(load_input, "page", {
        get: () => {
          throw new Error("`page` in `load` functions has been replaced by `url` and `params`");
        }
      });
    }
    if (is_error) {
      load_input.status = status;
      load_input.error = error2;
    }
    loaded = await module2.load.call(null, load_input);
    if (!loaded) {
      throw new Error(`load function must return a value${options.dev ? ` (${node.entry})` : ""}`);
    }
  } else {
    loaded = {};
  }
  if (loaded.fallthrough && !is_error) {
    return;
  }
  return {
    node,
    loaded: normalize(loaded),
    stuff: loaded.stuff || stuff,
    fetched,
    set_cookie_headers,
    uses_credentials
  };
}
async function respond_with_error({
  request,
  options,
  state,
  $session,
  status,
  error: error2,
  ssr
}) {
  try {
    const default_layout = await options.manifest._.nodes[0]();
    const default_error = await options.manifest._.nodes[1]();
    const params = {};
    const layout_loaded = await load_node({
      request,
      options,
      state,
      route: null,
      url: request.url,
      params,
      node: default_layout,
      $session,
      stuff: {},
      is_error: false
    });
    const error_loaded = await load_node({
      request,
      options,
      state,
      route: null,
      url: request.url,
      params,
      node: default_error,
      $session,
      stuff: layout_loaded ? layout_loaded.stuff : {},
      is_error: true,
      status,
      error: error2
    });
    return await render_response({
      options,
      state,
      $session,
      page_config: {
        hydrate: options.hydrate,
        router: options.router
      },
      stuff: error_loaded.stuff,
      status,
      error: error2,
      branch: [layout_loaded, error_loaded],
      url: request.url,
      params,
      ssr
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, request);
    return {
      status: 500,
      headers: {},
      body: error3.stack
    };
  }
}
async function respond$1(opts) {
  const { request, options, state, $session, route, ssr } = opts;
  let nodes;
  if (!ssr) {
    return await render_response(__spreadProps(__spreadValues({}, opts), {
      branch: [],
      page_config: {
        hydrate: true,
        router: true
      },
      status: 200,
      url: request.url,
      stuff: {}
    }));
  }
  try {
    nodes = await Promise.all(route.a.map((n) => options.manifest._.nodes[n] && options.manifest._.nodes[n]()));
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, request);
    return await respond_with_error({
      request,
      options,
      state,
      $session,
      status: 500,
      error: error3,
      ssr
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  let page_config = get_page_config(leaf, options);
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {}
    };
  }
  let branch = [];
  let status = 200;
  let error2;
  let set_cookie_headers = [];
  let stuff = {};
  ssr:
    if (ssr) {
      for (let i2 = 0; i2 < nodes.length; i2 += 1) {
        const node = nodes[i2];
        let loaded;
        if (node) {
          try {
            loaded = await load_node(__spreadProps(__spreadValues({}, opts), {
              url: request.url,
              node,
              stuff,
              is_error: false
            }));
            if (!loaded)
              return;
            set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
            if (loaded.loaded.redirect) {
              return with_cookies({
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              }, set_cookie_headers);
            }
            if (loaded.loaded.error) {
              ({ status, error: error2 } = loaded.loaded);
            }
          } catch (err) {
            const e2 = coalesce_to_error(err);
            options.handle_error(e2, request);
            status = 500;
            error2 = e2;
          }
          if (loaded && !error2) {
            branch.push(loaded);
          }
          if (error2) {
            while (i2--) {
              if (route.b[i2]) {
                const error_node = await options.manifest._.nodes[route.b[i2]]();
                let node_loaded;
                let j = i2;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  const error_loaded = await load_node(__spreadProps(__spreadValues({}, opts), {
                    url: request.url,
                    node: error_node,
                    stuff: node_loaded.stuff,
                    is_error: true,
                    status,
                    error: error2
                  }));
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  page_config = get_page_config(error_node.module, options);
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  stuff = __spreadValues(__spreadValues({}, node_loaded.stuff), error_loaded.stuff);
                  break ssr;
                } catch (err) {
                  const e2 = coalesce_to_error(err);
                  options.handle_error(e2, request);
                  continue;
                }
              }
            }
            return with_cookies(await respond_with_error({
              request,
              options,
              state,
              $session,
              status,
              error: error2,
              ssr
            }), set_cookie_headers);
          }
        }
        if (loaded && loaded.loaded.stuff) {
          stuff = __spreadValues(__spreadValues({}, stuff), loaded.loaded.stuff);
        }
      }
    }
  try {
    return with_cookies(await render_response(__spreadProps(__spreadValues({}, opts), {
      stuff,
      url: request.url,
      page_config,
      status,
      error: error2,
      branch: branch.filter(Boolean)
    })), set_cookie_headers);
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, request);
    return with_cookies(await respond_with_error(__spreadProps(__spreadValues({}, opts), {
      status: 500,
      error: error3
    })), set_cookie_headers);
  }
}
function get_page_config(leaf, options) {
  if ("ssr" in leaf) {
    throw new Error("`export const ssr` has been removed \u2014 use the handle hook instead: https://kit.svelte.dev/docs#hooks-handle");
  }
  return {
    router: "router" in leaf ? !!leaf.router : options.router,
    hydrate: "hydrate" in leaf ? !!leaf.hydrate : options.hydrate
  };
}
function with_cookies(response, set_cookie_headers) {
  if (set_cookie_headers.length) {
    response.headers["set-cookie"] = set_cookie_headers;
  }
  return response;
}
async function render_page(request, route, match, options, state, ssr) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.url.pathname}`
    };
  }
  const params = route.params ? decode_params(route.params(match)) : {};
  const $session = await options.hooks.getSession(request);
  const response = await respond$1({
    request,
    options,
    state,
    $session,
    route,
    params,
    ssr
  });
  if (response) {
    return response;
  }
  if (state.fetched) {
    return {
      status: 500,
      headers: {},
      body: `Bad request in load function: failed to fetch ${state.fetched}`
    };
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      const existing_values = map.get(key);
      if (existing_values) {
        existing_values.push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  constructor(map) {
    __privateAdd2(this, _map, void 0);
    __privateSet2(this, _map, map);
  }
  get(key) {
    const value = __privateGet2(this, _map).get(key);
    if (!value) {
      return null;
    }
    return value[0];
  }
  getAll(key) {
    return __privateGet2(this, _map).get(key) || [];
  }
  has(key) {
    return __privateGet2(this, _map).has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of __privateGet2(this, _map)) {
      for (let i2 = 0; i2 < value.length; i2 += 1) {
        yield [key, value[i2]];
      }
    }
  }
  *entries() {
    for (const [key, value] of __privateGet2(this, _map)) {
      for (let i2 = 0; i2 < value.length; i2 += 1) {
        yield [key, value[i2]];
      }
    }
  }
  *keys() {
    for (const [key] of __privateGet2(this, _map))
      yield key;
  }
  *values() {
    for (const [, value] of __privateGet2(this, _map)) {
      for (let i2 = 0; i2 < value.length; i2 += 1) {
        yield value[i2];
      }
    }
  }
};
_map = new WeakMap();
function parse_body(raw, headers) {
  if (!raw)
    return raw;
  const content_type = headers["content-type"];
  const [type, ...directives] = content_type ? content_type.split(/;\s*/) : [];
  const text = () => new TextDecoder(headers["content-encoding"] || "utf-8").decode(raw);
  switch (type) {
    case "text/plain":
      return text();
    case "application/json":
      return JSON.parse(text());
    case "application/x-www-form-urlencoded":
      return get_urlencoded(text());
    case "multipart/form-data": {
      const boundary = directives.find((directive) => directive.startsWith("boundary="));
      if (!boundary)
        throw new Error("Missing boundary");
      return get_multipart(text(), boundary.slice("boundary=".length));
    }
    default:
      return raw;
  }
}
function get_urlencoded(text) {
  const { data, append } = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    throw new Error("Malformed form data");
  }
  const { data, append } = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    if (!match) {
      throw new Error("Malformed form data");
    }
    const raw_headers = match[1];
    const body2 = match[2].trim();
    let key;
    const headers = {};
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      headers[name] = value;
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          throw new Error("Malformed form data");
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      throw new Error("Malformed form data");
    append(key, body2);
  });
  return data;
}
async function respond(incoming, options, state = {}) {
  var _a4;
  if (incoming.url.pathname !== "/" && options.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.url.pathname.endsWith("/");
    if (has_trailing_slash && options.trailing_slash === "never" || !has_trailing_slash && options.trailing_slash === "always" && !(incoming.url.pathname.split("/").pop() || "").includes(".")) {
      incoming.url.pathname = has_trailing_slash ? incoming.url.pathname.slice(0, -1) : incoming.url.pathname + "/";
      if (incoming.url.search === "?")
        incoming.url.search = "";
      return {
        status: 301,
        headers: {
          location: incoming.url.pathname + incoming.url.search
        }
      };
    }
  }
  const headers = lowercase_keys(incoming.headers);
  const request = __spreadProps(__spreadValues({}, incoming), {
    headers,
    body: parse_body(incoming.rawBody, headers),
    params: {},
    locals: {}
  });
  const { parameter, allowed } = options.method_override;
  const method_override = (_a4 = incoming.url.searchParams.get(parameter)) == null ? void 0 : _a4.toUpperCase();
  if (method_override) {
    if (request.method.toUpperCase() === "POST") {
      if (allowed.includes(method_override)) {
        request.method = method_override;
      } else {
        const verb = allowed.length === 0 ? "enabled" : "allowed";
        const body2 = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs#configuration-methodoverride`;
        return {
          status: 400,
          headers: {},
          body: body2
        };
      }
    } else {
      throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
    }
  }
  const print_error = (property, replacement) => {
    Object.defineProperty(request, property, {
      get: () => {
        throw new Error(`request.${property} has been replaced by request.url.${replacement}`);
      }
    });
  };
  print_error("origin", "origin");
  print_error("path", "pathname");
  print_error("query", "searchParams");
  let ssr = true;
  try {
    return await options.hooks.handle({
      request,
      resolve: async (request2, opts) => {
        if (opts && "ssr" in opts)
          ssr = opts.ssr;
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            url: request2.url,
            params: request2.params,
            options,
            state,
            $session: await options.hooks.getSession(request2),
            page_config: { router: true, hydrate: true },
            stuff: {},
            status: 200,
            branch: [],
            ssr: false
          });
        }
        let decoded = decodeURI(request2.url.pathname);
        if (options.paths.base) {
          if (!decoded.startsWith(options.paths.base))
            return;
          decoded = decoded.slice(options.paths.base.length) || "/";
        }
        for (const route of options.manifest._.routes) {
          const match = route.pattern.exec(decoded);
          if (!match)
            continue;
          const response = route.type === "endpoint" ? await render_endpoint(request2, route, match) : await render_page(request2, route, match, options, state, ssr);
          if (response) {
            if (response.status === 200 && !response.headers.etag) {
              const cache_control = get_single_valued_header(response.headers, "cache-control");
              if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
                let if_none_match_value = request2.headers["if-none-match"];
                if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
                  if_none_match_value = if_none_match_value.substring(2);
                }
                const etag = `"${hash(response.body || "")}"`;
                if (if_none_match_value === etag) {
                  const headers2 = { etag };
                  for (const key of [
                    "cache-control",
                    "content-location",
                    "date",
                    "expires",
                    "vary"
                  ]) {
                    if (key in response.headers) {
                      headers2[key] = response.headers[key];
                    }
                  }
                  return {
                    status: 304,
                    headers: headers2
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        if (!state.initiator) {
          const $session = await options.hooks.getSession(request2);
          return await respond_with_error({
            request: request2,
            options,
            state,
            $session,
            status: 404,
            error: new Error(`Not found: ${request2.url.pathname}`),
            ssr
          });
        }
      }
    });
  } catch (e2) {
    const error2 = coalesce_to_error(e2);
    options.handle_error(error2, request);
    try {
      const $session = await options.hooks.getSession(request);
      return await respond_with_error({
        request,
        options,
        state,
        $session,
        status: 500,
        error: error2,
        ssr
      });
    } catch (e22) {
      const error3 = coalesce_to_error(e22);
      return {
        status: 500,
        headers: {},
        body: options.dev ? error3.stack : error3.message
      };
    }
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var template = ({ head, body: body2, assets: assets2 }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<meta name="description" content="" />\n		<link rel="icon" href="/favicon.svg" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body2 + "</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request)),
  handleError: hooks.handleError || (({ error: error2 }) => console.error(error2.stack)),
  externalFetch: hooks.externalFetch || fetch
});
var default_protocol = "https";
var App = class {
  constructor(manifest2) {
    const hooks = get_hooks(user_hooks);
    this.options = {
      amp: false,
      dev: false,
      floc: false,
      get_stack: (error2) => String(error2),
      handle_error: (error2, request) => {
        hooks.handleError({ error: error2, request });
        error2.stack = this.options.get_stack(error2);
      },
      hooks,
      hydrate: true,
      manifest: manifest2,
      method_override: { "parameter": "_method", "allowed": [] },
      paths: { base, assets },
      prefix: assets + "/_app/",
      prerender: true,
      read,
      root: Root,
      service_worker: null,
      router: true,
      target: "#svelte",
      template,
      trailing_slash: "never"
    };
  }
  render(request, {
    prerender
  } = {}) {
    if (Object.keys(request).sort().join() !== "headers,method,rawBody,url") {
      throw new Error("Adapters should call app.render({ url, method, headers, rawBody })");
    }
    const host = request.headers["host"];
    const protocol = default_protocol;
    return respond(__spreadProps(__spreadValues({}, request), { url: new URL(request.url, protocol + "://" + host) }), this.options, { prerender });
  }
};

// .svelte-kit/vercel-tmp/manifest.js
var manifest = {
  appDir: "_app",
  assets: new Set(["favicon.svg", "thumbnails/breakthrough.png", "thumbnails/climate-tracker.jpg", "thumbnails/fruit-blobs.png", "thumbnails/gingerbread-5.jpg", "thumbnails/haute-greenwashing-post.png", "thumbnails/haute-greenwashing.png", "thumbnails/mathy-protest.png", "thumbnails/nyt-stem-writing.jpg", "thumbnails/oat-milk.png", "thumbnails/teachers.jfif", "thumbnails/technica.jpg", "thumbnails/vwl-site.png"]),
  _: {
    mime: { ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg" },
    entry: { "file": "start-9d3f7120.js", "js": ["start-9d3f7120.js", "chunks/vendor-0e906c74.js", "chunks/preload-helper-ec9aa979.js", "chunks/singletons-4a680913.js"], "css": ["assets/vendor-5469db33.css"] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7)),
      () => Promise.resolve().then(() => (init__8(), __exports8)),
      () => Promise.resolve().then(() => (init__9(), __exports9)),
      () => Promise.resolve().then(() => (init__10(), __exports10)),
      () => Promise.resolve().then(() => (init__11(), __exports11)),
      () => Promise.resolve().then(() => (init__12(), __exports12)),
      () => Promise.resolve().then(() => (init__13(), __exports13))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/portfolio\/?$/,
        params: null,
        path: "/portfolio",
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/resume\/?$/,
        params: null,
        path: "/resume",
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/?$/,
        params: null,
        path: "/blog",
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/gingerbread-house-2021\/?$/,
        params: null,
        path: "/blog/gingerbread-house-2021",
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/made-with-svelte-kit\/?$/,
        params: null,
        path: "/blog/made-with-svelte-kit",
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/sustainable-textiles\/?$/,
        params: null,
        path: "/blog/sustainable-textiles",
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/oat-milk-guide\/?$/,
        params: null,
        path: "/blog/oat-milk-guide",
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/michelle-feng\/?$/,
        params: null,
        path: "/blog/michelle-feng",
        a: [0, 10],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/fruit-blobs\/?$/,
        params: null,
        path: "/blog/fruit-blobs",
        a: [0, 11],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/home\/?$/,
        params: null,
        path: "/home",
        a: [0, 12],
        b: [1]
      }
    ]
  }
};

// .svelte-kit/vercel-tmp/entry.js
__fetch_polyfill();
var app = new App(manifest);
var entry_default = async (req, res) => {
  let body2;
  try {
    body2 = await getRawBody(req);
  } catch (err) {
    res.statusCode = err.status || 400;
    return res.end(err.reason || "Invalid request body");
  }
  const rendered = await app.render({
    url: req.url,
    method: req.method,
    headers: req.headers,
    rawBody: body2
  });
  if (rendered) {
    const { status, headers, body: body3 } = rendered;
    return res.writeHead(status, headers).end(body3);
  }
  return res.writeHead(404).end();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
