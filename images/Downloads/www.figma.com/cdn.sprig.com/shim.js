! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "09812f48-7323-50d2-9bb0-e02808faef7d")
    } catch (e) {}
}();
(function() {
    "use strict";
    var Ps = Object.defineProperty;
    var Os = (M, W, Z) => W in M ? Ps(M, W, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Z
    }) : M[W] = Z;
    var R = (M, W, Z) => (Os(M, typeof W != "symbol" ? W + "" : W, Z), Z);
    let M;
    const W = new Uint8Array(16);

    function Z() {
        if (!M && (M = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !M)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return M(W)
    }
    const U = [];
    for (let e = 0; e < 256; ++e) U.push((e + 256).toString(16).slice(1));

    function Xn(e, t = 0) {
        return U[e[t + 0]] + U[e[t + 1]] + U[e[t + 2]] + U[e[t + 3]] + "-" + U[e[t + 4]] + U[e[t + 5]] + "-" + U[e[t + 6]] + U[e[t + 7]] + "-" + U[e[t + 8]] + U[e[t + 9]] + "-" + U[e[t + 10]] + U[e[t + 11]] + U[e[t + 12]] + U[e[t + 13]] + U[e[t + 14]] + U[e[t + 15]]
    }
    const It = {
        randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
    };

    function oe(e, t, n) {
        if (It.randomUUID && !t && !e) return It.randomUUID();
        e = e || {};
        const i = e.random || (e.rng || Z)();
        return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, Xn(i)
    }
    const Zn = '.ul-loading-spinner-container{font-size:1.8rem;flex-grow:1;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.ul-loading-spinner{display:inline-block;position:relative;width:6rem;height:6rem}.ul-loading-spinner div{box-sizing:border-box;display:block;position:absolute;width:80%;height:80%;margin:5px;border:5px solid #152e3e;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#152e3e transparent transparent transparent}.ul-loading-spinner .first{animation-delay:-.45s}.ul-loading-spinner .second{animation-delay:-.3s}.ul-loading-spinner .third{animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.fade-in-transition{animation:fadeIn .4s ease-in}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}#sprig-feedback-button{border-left:0;border-radius:0 8px 8px 0;display:grid;padding:8px;text-align:center;transition:all ease-in-out 1s;z-index:inherit}#sprig-feedback-button:hover{cursor:pointer}.sprig-feedback-button-label{writing-mode:vertical-lr;text-orientation:sideways}.sprig-feedback-button-right{transform:rotate(180deg)}.sprig-feedback-button-bottom{align-self:flex-end;margin-bottom:20px}.sprig-feedback-button-light{background:#efefee;color:#000;border:1px solid #e2e3e1}.sprig-feedback-button-dark{background:#000;color:#fff;border:1px solid #000000}#sprig-feedback-container{display:flex;align-items:center;position:fixed;transition:right .2s linear,left .2s linear;z-index:2147483646}.sprig-feedback-container-left{flex-flow:row-reverse}.sprig-feedback-container-center{top:50%;transform:translateY(-50%)}.sprig-feedback-container-bottom{bottom:0%;margin-bottom:15px}.sprig-feedback-loading-container{align-items:center;background-color:#fff;border:2px solid var(--feedback-border);display:flex;max-height:90vh;max-width:90vw;min-width:0px}.sprig-feedback-loading-container-left{border-left:none;border-radius:0 8px 8px 0}.sprig-feedback-loading-container-right{border-right:none;border-radius:8px 0 0 8px}#sprig-feedback-error-container{margin:auto;text-align:center;width:360px}.sprig-feedback-error-text{font-weight:400;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}#sprig-feedback-loading-container .ul-container{position:relative;max-height:inherit}#sprig-feedback-loading-animation{position:absolute}.sprig-feedback-loading-container-previews iframe{max-height:inherit!important}',
        er = "360px",
        tr = 500;
    var z = (e => (e.Closed = "close.click", e.Complete = "survey.completed", e.FeedbackClosed = "feedback.closed", e.PageChange = "page.change", e.API = "api", e.Override = "override", e))(z || {}),
        f = (e => (e.ReplayCapture = "replay.capture", e.FeedbackButtonLoaded = "feedback.button.loaded", e.SDKReady = "sdk.ready", e.SurveyAppeared = "survey.appeared", e.SurveyClosed = "survey.closed", e.SurveyDimensions = "survey.dimensions", e.SurveyFadingOut = "survey.fadingOut", e.SurveyHeight = "survey.height", e.SurveyPresented = "survey.presented", e.SurveyLifeCycle = "survey.lifeCycle", e.SurveyWidth = "survey.width", e.SurveyWillClose = "survey.willClose", e.SurveyWillPresent = "survey.will.present", e.CloseSurveyOnOverlayClick = "close.survey.overlayClick", e.VisitorIDUpdated = "visitor.id.updated", e.QuestionAnswered = "question.answered", e))(f || {});
    const be = {
            FEEDBACK_BUTTON_LOADED: "feedback.button.loaded",
            SDK_READY: "sdk.ready",
            SURVEY_APPEARED: "survey.appeared",
            SURVEY_CLOSED: "survey.closed",
            SURVEY_DIMENSIONS: "survey.dimensions",
            SURVEY_FADING_OUT: "survey.fadingOut",
            SURVEY_HEIGHT: "survey.height",
            SURVEY_WIDTH: "survey.width",
            SURVEY_PRESENTED: "survey.presented",
            SURVEY_LIFE_CYCLE: "survey.lifeCycle",
            SURVEY_WILL_CLOSE: "survey.willClose",
            SURVEY_WILL_PRESENT: "survey.will.present",
            QUESTION_ANSWERED: "question.answered",
            REPLAY_CAPTURE: "replay.capture",
            CLOSE_SURVEY_ON_OVERLAY_CLICK: "close.survey.overlayClick",
            VISITOR_ID_UPDATED: "visitor.id.updated",
            DATA: {
                DISMISS_REASONS: {
                    API: "api",
                    CLOSED: "close.click",
                    COMPLETE: "survey.completed",
                    PAGE_CHANGE: "page.change",
                    OVERRIDE: "override"
                },
                SURVEY_ID: "survey.id"
            }
        },
        Ut = () => {
            try {
                return window.parent.Intercom
            } catch {
                return null
            }
        },
        Et = [Object.freeze(Object.defineProperty({
            __proto__: null,
            disable: () => {
                const e = Ut();
                e && (e.ul_wasVisible = !!document.querySelector("iframe.intercom-launcher-frame"), e.ul_wasVisible && e("update", {
                    hide_default_launcher: !0
                }))
            },
            enable: () => {
                const e = Ut();
                e && (e.ul_wasVisible && e("update", {
                    hide_default_launcher: !1
                }), delete e.ul_wasVisible)
            }
        }, Symbol.toStringTag, {
            value: "Module"
        }))];
    class nr {
        static disable() {
            Et.forEach(t => t.disable())
        }
        static enable() {
            Et.forEach(t => t.enable())
        }
    }
    var rr = class extends Error {
            constructor(e, t, n) {
                super(`Possible EventEmitter memory leak detected. ${n} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`), this.emitter = e, this.type = t, this.count = n, this.name = "MaxListenersExceededWarning"
            }
        },
        kt = class {
            static listenerCount(e, t) {
                return e.listenerCount(t)
            }
            constructor() {
                this.events = new Map, this.maxListeners = kt.defaultMaxListeners, this.hasWarnedAboutPotentialMemoryLeak = !1
            }
            _emitInternalEvent(e, t, n) {
                this.emit(e, t, n)
            }
            _getListeners(e) {
                return Array.prototype.concat.apply([], this.events.get(e)) || []
            }
            _removeListener(e, t) {
                const n = e.indexOf(t);
                return n > -1 && e.splice(n, 1), []
            }
            _wrapOnceListener(e, t) {
                const n = (...i) => (this.removeListener(e, n), t.apply(this, i));
                return Object.defineProperty(n, "name", {
                    value: t.name
                }), n
            }
            setMaxListeners(e) {
                return this.maxListeners = e, this
            }
            getMaxListeners() {
                return this.maxListeners
            }
            eventNames() {
                return Array.from(this.events.keys())
            }
            emit(e, ...t) {
                const n = this._getListeners(e);
                return n.forEach(i => {
                    i.apply(this, t)
                }), n.length > 0
            }
            addListener(e, t) {
                this._emitInternalEvent("newListener", e, t);
                const n = this._getListeners(e).concat(t);
                if (this.events.set(e, n), this.maxListeners > 0 && this.listenerCount(e) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
                    this.hasWarnedAboutPotentialMemoryLeak = !0;
                    const i = new rr(this, e, this.listenerCount(e));
                    console.warn(i)
                }
                return this
            }
            on(e, t) {
                return this.addListener(e, t)
            }
            once(e, t) {
                return this.addListener(e, this._wrapOnceListener(e, t))
            }
            prependListener(e, t) {
                const n = this._getListeners(e);
                if (n.length > 0) {
                    const i = [t].concat(n);
                    this.events.set(e, i)
                } else this.events.set(e, n.concat(t));
                return this
            }
            prependOnceListener(e, t) {
                return this.prependListener(e, this._wrapOnceListener(e, t))
            }
            removeListener(e, t) {
                const n = this._getListeners(e);
                return n.length > 0 && (this._removeListener(n, t), this.events.set(e, n), this._emitInternalEvent("removeListener", e, t)), this
            }
            off(e, t) {
                return this.removeListener(e, t)
            }
            removeAllListeners(e) {
                return e ? this.events.delete(e) : this.events.clear(), this
            }
            listeners(e) {
                return Array.from(this._getListeners(e))
            }
            listenerCount(e) {
                return this._getListeners(e).length
            }
            rawListeners(e) {
                return this.listeners(e)
            }
        },
        _t = kt;
    _t.defaultMaxListeners = 10;
    const m = new _t,
        Le = async e => {
            await new Promise(t => {
                setTimeout(t, e)
            })
        },
        ir = ({
            "userleap-platform": e
        }) => e !== "web";
    class Rt {
        constructor(t) {
            R(this, "storage");
            R(this, "tempStorage", {});
            R(this, "isStorageAvailable");
            this.storage = window[t], this.isStorageAvailable = this.checkIfStorageAvailable()
        }
        checkIfStorageAvailable() {
            try {
                const t = "__storage_test__";
                return this.storage.setItem(t, t), this.storage.removeItem(t), !0
            } catch {
                return !1
            }
        }
        setItem(t, n) {
            this.isStorageAvailable ? this.storage.setItem(t, n) : this.tempStorage[t] = n
        }
        getItem(t) {
            return this.isStorageAvailable ? this.storage.getItem(t) : this.tempStorage[t]
        }
        removeItem(t) {
            this.isStorageAvailable ? this.storage.removeItem(t) : delete this.tempStorage[t]
        }
        clear() {
            this.isStorageAvailable ? this.storage.clear() : this.tempStorage = {}
        }
    }
    const E = new Rt("sessionStorage"),
        B = new Rt("localStorage");
    class sr {
        constructor(t) {
            R(this, "payload");
            R(this, "promise");
            R(this, "reject", () => {});
            R(this, "resolve", () => {});
            this.payload = t, this.promise = new Promise((n, i) => {
                this.reject = i, this.resolve = n
            })
        }
        resolveRequest(t) {
            this.resolve(t)
        }
    }
    const S = {
            replay: null
        },
        or = e => {
            S.replay = e
        },
        ar = () => {
            const e = [];
            return S.replay && e.push("replay"), e.join(",")
        },
        cr = {
            RATELIMIT_RESET_DEFAULT: 10
        };
    let Dt = !1,
        xt = "",
        Se = !1,
        Ct = !1,
        Ie = [];
    const dr = e => e._config && e._config.installationMethod ? e._config.installationMethod : e._gtm ? "web-gtm" : e._segment ? "web-segment" : "web-snippet",
        At = e => {
            var t;
            (t = e == null ? void 0 : e.blockedURI) != null && t.includes(window.UserLeap._API_URL) && (Ct = !0, console.warn(`[Sprig] ${e.blockedURI} is blocked by Content-Security-Policy`))
        },
        je = (e = "") => {
            Dt = !0, xt = e
        };

    function G(e = {}) {
        const t = {
            "Content-Type": "application/json",
            "userleap-platform": "web",
            "x-ul-sdk-version": "2.31.2",
            "x-ul-installation-method": dr(e),
            "sprig-modules": ar()
        };
        if (e.envId && (t["x-ul-environment-id"] = e.envId), e.token && (t.Authorization = "Bearer " + e.token), e.userId && (t["x-ul-user-id"] = e.userId), e.visitorId && (t["x-ul-visitor-id"] = e.visitorId), e.partnerAnonymousId && (t["x-ul-anonymous-id"] = e.partnerAnonymousId), e.mobileHeadersJSON) {
            const n = JSON.parse(e.mobileHeadersJSON);
            Object.assign(t, n)
        }
        return e.locale && (t["accept-language"] = e.locale), window.previewMode && (t["x-ul-preview-mode"] = "1"), t
    }
    const Tt = async ({
            shouldDropOnRateLimit: e,
            ...t
        }) => {
            if (e) return {
                status: 429
            }; {
                const n = new sr(t);
                return Ie.push(n), n.promise
            }
        },
        q = async (e, t) => {
            const {
                retries: n = 0,
                shouldDropOnRateLimit: i = !1,
                shouldRetryRequest: r = !1,
                ...s
            } = t, o = {
                url: e,
                options: s,
                retries: n,
                shouldDropOnRateLimit: i
            };
            if (Se && !r) return Tt(o);
            const a = {
                ok: !1,
                reportError: !1
            };
            if (Dt) return console.info(`UserLeap - ${xt}`), a;
            try {
                const c = await fetch(e, s);
                if (c.status === 429)
                    if (!Se && !i || r) {
                        Se = !0;
                        const d = c.headers.has("ratelimit-reset") ? Number(c.headers.get("ratelimit-reset")) : cr.RATELIMIT_RESET_DEFAULT;
                        return await Le(d * 1e3), q(e, { ...s,
                            shouldDropOnRateLimit: i,
                            shouldRetryRequest: !0
                        })
                    } else return Tt(o);
                if (Se = !1, Ie.length && (Ie.map(l => {
                        const d = l.payload;
                        q(d.url, { ...d.options,
                            retries: d.retries,
                            shouldDropOnRateLimit: d.shouldDropOnRateLimit
                        }).then(u => {
                            l.resolveRequest(u)
                        })
                    }), Ie = []), c.ok) {
                    if (c.status === 249) return je(), a;
                    const l = await c.text();
                    try {
                        return l && l !== "OK" && (c.json = JSON.parse(l)), c
                    } catch {
                        return {
                            ok: !1,
                            reportError: !1,
                            error: new Error(`failed parsing response json for ${e} - ${l}`)
                        }
                    }
                }
                return c
            } catch (c) {
                const l = n + 1;
                return l > 5 || Ct ? {
                    ok: !1,
                    reportError: !1,
                    error: c
                } : (await Le(Math.pow(2, n) * 1e3), q(e, { ...s,
                    retries: l
                }))
            }
        },
        ae = {
            Error: 1,
            Warn: 2,
            Info: 3,
            Debug: 4
        };
    let ze = 1e3,
        Ue = ae.Debug,
        ce = [];
    const lr = e => {
            const t = Object.entries(ae).find(n => n[1] === e);
            return (t == null ? void 0 : t[0]) ? ? ""
        },
        ur = e => e.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            fractionalSecondDigits: 3
        }),
        pr = (e, t) => `${ur(t)}:${e}`,
        wr = () => {
            ce = ce.filter(e => e.level <= Ue)
        },
        fr = () => {
            ce.length > ze && ce.shift()
        },
        Ee = (e, t) => {
            e > Ue || (ce.push({
                level: e,
                line: pr(t, new Date)
            }), fr())
        },
        ue = e => {
            Ee(ae.Debug, e)
        },
        p = e => {
            Ee(ae.Info, e)
        },
        Ge = e => {
            Ee(ae.Warn, e)
        },
        Pt = e => {
            Ee(ae.Error, e)
        },
        mr = () => ce.map(e => e.line),
        gr = () => new TextEncoder().encode(mr().join(`
`)),
        yr = async e => {
            if (!e) return;
            const t = gr();
            return q(e, {
                body: t,
                method: "PUT"
            })
        },
        hr = (e, t) => {
            e !== void 0 && (ze = e), t !== void 0 && (Ue = t), ue(`Initializing logger with limit of ${ze} lines and ${lr(Ue)} level`), wr()
        },
        Ot = "ul-view-sdk-script",
        vr = ["ios", "android"],
        K = "visitors",
        Y = "environments";
    async function N(e, t) {
        var s, o, a;
        const {
            shouldDropOnRateLimit: n,
            ...i
        } = t;
        i.headers = Object.assign(G(window.UserLeap), i.headers);
        const r = await q(e, { ...i,
            shouldDropOnRateLimit: n
        });
        if (r.ok) {
            const c = (s = r.headers) == null ? void 0 : s.get("Authorization"),
                l = c ? c.split(" ") : void 0,
                d = l && l.length === 2 ? l[1] : void 0,
                u = (o = r.headers) == null ? void 0 : o.get("x-ul-visitor-id");
            d && u && (u !== window.UserLeap.visitorId || window.UserLeap.token !== d) && (x("token", d), x("vid", u), m.emit(f.VisitorIDUpdated, {
                visitorId: u
            }), window.UserLeap.token = d, window.UserLeap.visitorId = u)
        }
        return (a = r.json) != null && a.logMessage && console.warn(`[Sprig] ${r.json.logMessage}`), r
    }

    function x(e, t) {
        const n = B.getItem("userleap.ids");
        let i = {};
        if (n) try {
            i = JSON.parse(n)
        } catch (s) {
            s instanceof Error && (s.stack = n, window.UserLeap.reportError("Failed to parse local storage credentials", s)), console.warn("[Sprig] (ERR-427) Failed to lookup saved ids", s)
        }
        let r = i[window.UserLeap.envId];
        r ? r[e] = t : r = {
            [e]: t
        }, i[window.UserLeap.envId] = r;
        try {
            B.setItem("userleap.ids", JSON.stringify(i))
        } catch (s) {
            s instanceof Error && console.warn(`[Sprig] (ERR-426) Unable to write to Local Storage:: ${s.message}`)
        }
    }

    function qe() {
        return window.previewMode ? "0" : window.UserLeap.visitorId ? ? ""
    }

    function P(e, t, n) {
        const i = [window.UserLeap._API_URL, "sdk", e];
        return t && t.forEach(r => {
            i.push(r), r === Y ? i.push(window.UserLeap.envId) : r === K && i.push(qe())
        }), n && i.push(n), i.join("/")
    }
    const pe = async (e, t) => {
        var Kn, Yn, Jn;
        const {
            context: n,
            delay: i,
            forceBrandedLogo: r,
            endCard: s,
            isFeedback: o = !1,
            heatmap: a,
            locale: c,
            previewMode: l,
            productConfig: d,
            questions: u,
            responseGroupUid: y,
            surveyId: w,
            uuid: g,
            vid: k,
            sessionReplay: V,
            studyType: ie
        } = e, I = G(window.UserLeap), j = ke(I), se = Ke(I);
        if (p(`Attempting to display survey: ${w}`), V)
            if (p("Survey has replay attached"), j) m.emit(f.ReplayCapture, {
                responseGroupUid: y,
                hasQuestions: !!(u != null && u.length),
                surveyId: w,
                uploadId: V.uploadId,
                replayType: V.replayDurationType ? ? "before",
                seconds: V.replayDurationSeconds,
                generateVideoUploadUrlPayload: {
                    mediaRecordingUid: oe(),
                    mediaType: "screen",
                    questionId: 1,
                    responseGroupUid: y,
                    surveyId: w,
                    updatedAt: new Date().toISOString(),
                    visitorId: window.UserLeap.visitorId,
                    isReplay: !0
                }
            });
            else {
                if (!S.replay) return window.UserLeap.reportError("displayQuestions", new Error("Replay module not registered")), {
                    success: !1,
                    message: "Replay module not registered",
                    surveyState: "no survey"
                };
                S.replay.scheduleOrCaptureReplay({
                    responseGroupId: y,
                    surveyId: w,
                    visitorId: k,
                    replayParams: V,
                    completeUploadHeaders: I,
                    apiUrl: window.UserLeap._API_URL,
                    triggerTimestamp: Date.now(),
                    isStandalone: u.length === 0
                })
            }
        if (a) {
            if (!S.replay) return window.UserLeap.reportError("displayQuestions", new Error("Replay module not registered")), {
                success: !1,
                message: "Replay module not registered",
                surveyState: "no survey"
            };
            const {
                eventId: L,
                replayParams: St,
                responseGroupUid: As,
                surveyId: Ts
            } = a;
            await S.replay.initializeReplay({
                viewDocument: window.document,
                maxReplayDurationSeconds: 300,
                replayNonce: window.UserLeap.replayNonce,
                maxInflightRequests: window.UserLeap.maxInflightReplayRequests,
                teardownAfter: !0
            }), S.replay.tryReplayAction(() => {
                var Qn;
                return (Qn = S.replay) == null ? void 0 : Qn.scheduleCapture({
                    apiUrl: window.UserLeap._API_URL,
                    completeUploadHeaders: I,
                    eventId: L,
                    isHeatmap: !0,
                    replayParams: St,
                    responseGroupId: As,
                    surveyId: Ts,
                    triggerTimestamp: Date.now(),
                    visitorId: k
                })
            }, "Error in scheduling/capturing replay")
        }
        if (k == null || !(u != null && u.length)) return p(`Not displaying survey: vid: ${k} / questions: ${u}`), {
            success: !1,
            message: "[Sprig] no survey found",
            surveyState: "no survey"
        };
        if (window.UserLeap.container) {
            p("Already displaying a survey");
            const L = "[Sprig] (ERR-409) Found an existing Survey container, aborting rendering of this survey";
            return console.warn(L), {
                success: !1,
                message: L,
                surveyState: "no survey"
            }
        }
        if (k !== window.UserLeap.visitorId && g !== window.UserLeap.visitorId && !window.previewMode) {
            const L = "Attempted to display survey to a different visitor";
            return p(L), window.UserLeap.reportError("DisplaySurvey", new Error(L)), {
                success: !1,
                message: L,
                surveyState: "no survey"
            }
        }
        p(`Showing survey: ${w}`), (Kn = S.replay) == null || Kn.RecordSurveyShown({
            id: w,
            userAgent: window.navigator.userAgent
        }), nr.disable(), m.emit(f.SurveyWillPresent, {
            name: f.SurveyWillPresent,
            "survey.id": w
        });
        let H, A = document.createElement("div"),
            _, T, We;
        const jn = L => {
            const {
                "view.version": St
            } = L;
            St !== I["x-ul-sdk-version"] && Bt(), m.removeListener("verify.view.version", jn)
        };
        m.on("verify.view.version", jn), window.UserLeap.useMobileStyling = se, ir(I) ? (H = "ul-direct-embeded-frame", _ = document.head, T = window, We = !1, j && (Mt(o), A.id = H, window.UserLeap.container.appendChild(A), Nt(), m.emit(f.SurveyLifeCycle, {
            state: "presented"
        }), m.emit(f.SurveyPresented, {
            name: f.SurveyPresented,
            "survey.id": w
        }))) : {
            frameId: H,
            contentWinDocHead: _,
            contentWindow: T,
            hasOverlay: We,
            iframe: A
        } = Ur({
            productConfig: d,
            useMobileStyling: se,
            surveyId: w,
            isFeedback: o
        }), window.UserLeap.frameId = H;
        const Ds = L => {
                m.once(f.CloseSurveyOnOverlayClick, L)
            },
            le = {
                apiURL: window.UserLeap._API_URL,
                cards: u,
                configureExitOnOverlayClick: Ds,
                context: n,
                endCard: s,
                envId: window.UserLeap.envId,
                eventEmitFn: m.emit.bind(m),
                fontFamily: window.UserLeap.fontFamily,
                fontFamilyURL: window.UserLeap.fontFamilyURL,
                forceBrandedLogo: r,
                frame: A,
                headers: I,
                locale: c,
                mobileSDKVersion: window.UserLeap.mobileSDKVersion,
                previewKey: B.getItem("sprig.previewKey"),
                previewMode: l,
                productConfig: {
                    framePosition: d == null ? void 0 : d.framePosition,
                    desktopDisplay: d == null ? void 0 : d.desktopDisplay,
                    placement: d == null ? void 0 : d.placement
                },
                responseGroupUid: y,
                startingQuestionIdx: (Yn = window.UserLeap.config) == null ? void 0 : Yn.startingQuestionIdx,
                studyType: ie,
                styleNonce: window.UserLeap.styleNonce,
                surveyId: w,
                tabTitle: document.title,
                trackPageViewUrl: t,
                ulEvents: be,
                upchunkLibraryURL: window.UserLeap.upchunkLibraryURL,
                useMobileStyling: se,
                userId: g,
                viewDocument: T == null ? void 0 : T.document,
                viewWindow: T,
                visitorAttributes: {
                    externalUserId: window.UserLeap.userId,
                    email: window.UserLeap.email
                },
                ...window.UserLeap._config
            };
        (Jn = window.UserLeap._config) != null && Jn.startingQuestionIdx && (window.UserLeap._config = { ...window.UserLeap._config,
            startingQuestionIdx: null
        });
        const xs = (o ? window.UserLeap.feedbackCustomStyles : window.UserLeap.customStyles) ? ? d.customStyles;
        le.customStyles = xs, T && (T.__cfg = le);

        function Cs() {
            const L = document.createElement("script");
            return window.UserLeap.nonce && L.setAttribute("nonce", window.UserLeap.nonce), L.id = Ot, L
        }
        const bt = window.UserLeap.viewSDKURL ? window.UserLeap.viewSDKURL : le.path,
            zn = document.getElementById(Ot);
        zn && zn.remove();
        const Lt = Cs(),
            Gn = () => {
                window.UserLeap.container && Object.assign(window.UserLeap.container.style, {
                    display: "flex"
                })
            };
        if (le.installationMethod === "web-npm" || le.installationMethod === "web-npm-bundled") {
            const {
                default: L
            } = await
            import ("../view/view.tsx");
            L.configure(le), We && window.UserLeap.container && Gn()
        } else bt && (Lt.src = bt, We && Lt.addEventListener("load", () => {
            window.UserLeap.container && Gn()
        }), T == null || T.addEventListener("error", L => {
            L.target instanceof HTMLScriptElement && L.target.src === bt && window.UserLeap.reportError("loadFrameScript", new Error("Frame script failed to load"))
        }, {
            capture: !0,
            once: !0
        }));
        _ == null || _.appendChild(Lt);
        const qn = {
            success: !0,
            surveyState: "ready",
            surveyId: w,
            responseGroupUid: y
        };
        return window.UserLeap.isMobileSDK && i && (qn.delay = i), qn
    };

    function Ke(e) {
        var n;
        if (window.UserLeap.useMobileStyling !== void 0) return window.UserLeap.useMobileStyling;
        const t = ((n = window.UserLeap.windowDimensions) == null ? void 0 : n.width) ? ? document.body.clientWidth;
        return ke(e) || t > 10 && t < tr
    }

    function ke(e) {
        return vr.includes(e["userleap-platform"])
    }
    const Ye = "ul-frame";
    window.UserLeap && window.Sprig && (window.Sprig._gtm ? window.Sprig = window.UserLeap : window.UserLeap = window.Sprig), window.UserLeap || (window.UserLeap = window.Sprig), window.Sprig || (window.Sprig = window.UserLeap);
    const br = "rgba(255,255,255, 0.95)",
        Lr = "rgba(0,0,0,0.9)",
        Je = "0px",
        Mt = (e, t) => {
            window.UserLeap.container = document.createElement("div"), window.UserLeap.container.className = `ul-container${e?" ul-container-feedback":""}`;
            const n = Wt();
            t && n && !window.UserLeap.useMobileStyling ? n.appendChild(window.UserLeap.container) : document.body.appendChild(window.UserLeap.container)
        },
        Bt = (e, t) => {
            var i;
            kr();
            const n = window.UserLeap.container;
            if (n) try {
                (i = n.parentNode) == null || i.removeChild(n), window.UserLeap.container = null, x("trackStartUrl", null), m.emit(f.SurveyLifeCycle, {
                    state: "dismissed"
                }), m.emit(f.SurveyClosed, {
                    name: f.SurveyClosed,
                    initiator: e,
                    studyType: t
                })
            } catch (r) {
                console.warn(`[Sprig] (ERR-412) Error removing UserLeap container by ${e} ` + n), r instanceof Error && window.UserLeap.reportError("dismissActiveSurvey", r)
            }
        },
        Nt = () => {
            m.once(f.SurveyWillClose, ({
                initiator: e,
                studyType: t
            }) => {
                m.removeAllListeners(f.CloseSurveyOnOverlayClick), Bt(e, t)
            })
        },
        Sr = (e, t) => {
            const i = { ...{
                        position: "fixed",
                        overflow: "auto",
                        top: "0px",
                        left: "0px",
                        display: "none",
                        height: "100%",
                        width: "100%",
                        transition: "background-color 0.3s ease-out",
                        zIndex: 2147483646
                    }
                },
                r = t ? e.overlayStyleMobile : e.overlayStyle;
            i["background-color"] = r === "light" ? br : Lr, t || (i.margin = "auto"), window.UserLeap.container && Object.assign(window.UserLeap.container.style, i)
        },
        Ir = (e, t, n, i) => {
            var d, u;
            const r = {
                    position: "fixed",
                    bottom: "0px",
                    right: Je,
                    border: 0,
                    backgroundColor: "rgba(0,0,0,0)",
                    zIndex: 2147483646,
                    transition: "width 0.2s ease-in-out, height 0.2s ease-in-out",
                    maxWidth: "100%"
                },
                s = Object.assign({}, t, window.UserLeap),
                {
                    desktopDisplay: o
                } = t || {},
                a = o === "center-modal";
            a && (s.framePosition = "center");
            let c, l = !1;
            if (n)(d = window.UserLeap.windowDimensions) != null && d.width ? r.width = `${window.UserLeap.windowDimensions.width}px` : r.width = "100%", (u = window.UserLeap.windowDimensions) != null && u.height ? r.maxHeight = `${window.UserLeap.windowDimensions.height-20}px` : window.UserLeap.maxHeight ? r.maxHeight = window.UserLeap.maxHeight : r.maxHeight = `${document.body.clientHeight-20}px`, ["light", "dark"].includes(s.overlayStyleMobile) && (l = !0);
            else {
                r.width = er, r.maxHeight = window.UserLeap.maxHeight || "66vh";
                const y = () => {
                    l = !0, c = {
                        margin: "auto",
                        position: "static"
                    }
                };
                if (i) a ? y() : c = {
                    position: "relative",
                    height: "300px"
                };
                else switch (s.framePosition) {
                    case "bottomLeft":
                        c = {
                            left: Je
                        };
                        break;
                    case "topLeft":
                        c = {
                            left: Je,
                            top: 0
                        };
                        break;
                    case "topRight":
                        c = {
                            top: 0
                        };
                        break;
                    case "center":
                        y();
                        break
                }
            }
            return l && Sr(s, n), Object.assign(e.style, r, c), l
        },
        Ur = ({
            productConfig: e,
            useMobileStyling: t,
            surveyId: n,
            isFeedback: i
        }) => {
            var y, w;
            const r = Ye,
                s = i && e.desktopDisplay === "slider";
            Mt(i, s), Er();
            const o = document.createElement("iframe");
            o.id = r, o.setAttribute("title", "Sprig User Feedback Dialog");
            const a = Ir(o, e, t, i);
            Nt();
            let c = !1;
            o.setHeight = g => {
                (parseInt(o.style.height) != g || !c) && (c = !0, o.style.height = `${g}px`, m.emit(f.SurveyHeight, {
                    name: f.SurveyHeight,
                    contentFrameHeight: g
                }))
            };
            let l = !1;
            o.setWidth = g => {
                (parseInt(o.style.width) != g || !l) && (l = !0, o.style.width = `${g}px`, m.emit(f.SurveyWidth, {
                    name: f.SurveyWidth,
                    contentFrameWidth: g
                }))
            }, (y = window.UserLeap.container) == null || y.appendChild(o), e && (t ? e.exitOnOverlayClickMobile : e.exitOnOverlayClick) && window.UserLeap.container && (window.UserLeap.container.onclick = () => {
                m.emit(f.CloseSurveyOnOverlayClick)
            }), m.emit(f.SurveyLifeCycle, {
                state: "presented"
            }), m.emit(f.SurveyPresented, {
                name: f.SurveyPresented,
                "survey.id": n
            });
            const d = (w = o.contentWindow) == null ? void 0 : w.document;
            if (d && (d.open("text/html", "replace"), d.write("<!doctype html><head></head><body></body></html>"), d.close(), !t)) {
                const g = d.body;
                g.style.display = "flex", g.style.alignItems = "center"
            }
            const u = d == null ? void 0 : d.head;
            return {
                frameId: r,
                contentWinDocHead: u,
                contentWindow: o.contentWindow,
                hasOverlay: a,
                iframe: o
            }
        },
        $t = {
            [f.SurveyFadingOut]: () => {
                window.UserLeap.container && Object.assign(window.UserLeap.container.style, {
                    "background-color": "rgba(0,0,0,0)"
                })
            }
        },
        Er = () => {
            Object.entries($t).forEach(([e, t]) => {
                m.on(e, t)
            })
        },
        kr = () => {
            Object.entries($t).forEach(([e, t]) => {
                m.off(e, t)
            })
        },
        Ft = Object.freeze({
            contains: (e, t) => t.includes(e),
            notContains: (e, t) => !t.includes(e),
            exactly: (e, t) => t === e,
            notExactly: (e, t) => t !== e,
            startsWith: (e, t) => t.startsWith(e),
            endsWith: (e, t) => t.endsWith(e),
            regex: (e, t) => new RegExp(e).test(t),
            legacy: (e, t) => new RegExp(e, "i").test(t)
        });

    function _e(e, t) {
        const {
            matchType: n,
            pattern: i
        } = e, r = n ? Ft[n] : Ft.legacy;
        let s = !1;
        try {
            s = r(i, t)
        } catch (o) {
            const a = `[Sprig] (ERR-445) Failed to check url match with pattern ${i}`;
            o instanceof Error && (console.warn(a, o), o.stack = JSON.stringify(e), window.UserLeap.reportError(a, o))
        }
        return s
    }
    const Vt = e => {
            const {
                pageUrlEvents: t
            } = window.UserLeap._config, n = t == null ? void 0 : t.find(i => i.id === e);
            return n ? _e(n, window.location.href) : !1
        },
        _r = 1,
        Ht = e => e instanceof HTMLElement || e instanceof SVGElement,
        Re = ({
            document: e,
            elementId: t,
            styleString: n,
            nonce: i
        }) => {
            const r = e.getElementById(t);
            if (r) {
                r.textContent = n;
                return
            }
            const s = e.createElement("style");
            i && (s.nonce = i), s.textContent = n, s.id = t, e.head.appendChild(s)
        },
        Rr = e => {
            const t = e.querySelector(".ul-card__container");
            let n = 600,
                i = 360;
            if (t) {
                n = t.scrollHeight;
                const r = getComputedStyle(t),
                    s = parseFloat(r.marginTop) + parseFloat(r.marginBottom),
                    o = parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth),
                    a = parseFloat(r.paddingTop) + parseFloat(r.paddingBottom);
                n += s + o + a;
                const c = t.querySelector(".ul-card--matrix_grid");
                i = c ? c.scrollWidth : t.scrollWidth;
                const l = parseFloat(r.paddingLeft) + parseFloat(r.paddingRight),
                    d = parseFloat(r.marginLeft) + parseFloat(r.marginRight),
                    u = parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth);
                i += d + u + l
            }
            return [n + _r, i]
        },
        Wt = () => h,
        de = () => document.getElementById("sprig-feedback-container"),
        Qe = () => document.getElementById("sprig-feedback-loading-animation"),
        Dr = () => {
            if (Qe()) return;
            const e = document.createElement("div");
            return e.className = "ul-loading-spinner-container", e.id = "sprig-feedback-loading-animation", e.role = "progressbar", e.setAttribute("aria-live", "polite"), e.setAttribute("aria-busy", "true"), e.setAttribute("aria-label", "Processing..."), e.innerHTML = `
    <div class="ul-loading-spinner">
      <div class="first"></div>
      <div class="second"></div>
      <div class="third"></div>
      <div class="fourth"></div>
    </div>
  `, e
        },
        jt = () => !!document.getElementById(Ye);
    let zt = !1,
        h = null,
        $ = null,
        Xe = !1,
        we = null,
        ee = null;
    const xr = ["bottom-left", "bottom-right", "center-left", "center-right"],
        Cr = e => {
            if (de() || !xr.includes(e)) return;
            const [t, n] = e.split("-"), i = document.createElement("div");
            i.id = "sprig-feedback-container", i.classList.add(`sprig-feedback-container-${n}`, `sprig-feedback-container-${t}`), document.body.appendChild(i)
        },
        De = () => {
            var t;
            const e = window.UserLeap.container;
            return ((t = e == null ? void 0 : e.parentElement) == null ? void 0 : t.id) === "sprig-feedback-loading-container"
        },
        Gt = () => document.getElementById("sprig-feedback-error-container"),
        qt = () => {
            if (!h) return 0;
            const e = h == null ? void 0 : h.clientWidth,
                t = window.getComputedStyle(h),
                n = parseInt(t.borderRightWidth || "0"),
                i = parseInt(t.borderLeftWidth || "0");
            return e + n + i
        },
        xe = e => {
            const t = de();
            t && (ee != null && ee.endsWith("right") ? t.style.right = `${e}px` : ee != null && ee.endsWith("left") && (t.style.left = `${e}px`))
        },
        Ze = () => {
            if (h && (De() || Gt())) {
                m.off(f.SurveyAppeared, fe), et();
                const e = qt();
                return xe(-e), !0
            }
            return !1
        },
        fe = () => {
            if (!h || !$) return;
            const e = Qe();
            e && e.remove(), h.style.height = "auto", h.style.width = "auto", $.disabled = !1, Xe = !1
        },
        et = () => {
            if (!h) return;
            if (!Qe()) {
                const t = Dr();
                t && (h.style.height = "300px", h.style.width = "360px", h.appendChild(t))
            }
        },
        Kt = () => {
            !h || !$ || (xe(0), $.disabled = !0, Xe = !0)
        },
        Ar = async e => {
            const t = await N(P("1", [K], "startFeedbackStudy"), {
                body: JSON.stringify({
                    surveyUuid: e
                }),
                method: "POST"
            });
            return t.ok ? t.json : null
        },
        Yt = async (e, t, n) => {
            const {
                buttonTheme: i,
                customStyles: r,
                eventId: s,
                placement: o,
                desktopDisplay: a,
                feedbackLabel: c,
                surveyUuid: l,
                surveyId: d
            } = e;
            window.UserLeap.feedbackCustomStyles = void 0;
            let u = de();
            if (u) {
                if (!t && s === we) return;
                u.remove(), m.off(be.SURVEY_FADING_OUT, Ze)
            }
            we = s, Re({
                document,
                elementId: "sprig-feedback-style",
                styleString: Zn,
                nonce: window.UserLeap.styleNonce
            }), Re({
                document,
                elementId: "ul-custom-style",
                styleString: r ? ? "",
                nonce: window.UserLeap.styleNonce
            }), zt = a === "center-modal", ee = o;
            const [w, g] = o.split("-");
            Cr(o), u = de(), $ = document.createElement("button");
            const k = document.createElement("div");
            k.className = "sprig-feedback-button-label", k.innerText = c, $.appendChild(k), $.id = "sprig-feedback-button", $.classList.add(`sprig-feedback-button-${g}`, `sprig-feedback-button-${w}`, `sprig-feedback-button-${i}`, "fade-in-transition"), m.on(be.SURVEY_FADING_OUT, Ze), $.addEventListener("click", async () => {
                const I = document.getElementById("sprig-feedback-error-container");
                if (jt() || Gt()) {
                    if (Ze()) {
                        m.emit(f.SurveyWillClose, {
                            name: f.SurveyWillClose,
                            initiator: z.FeedbackClosed,
                            studyType: "feedbackButton"
                        });
                        const A = de();
                        I && A && (A.remove(), we = null, h = null)
                    }
                    return
                }
                const j = G(window.UserLeap);
                if (!Ke(j) && !Xe && Kt(), t) {
                    h && h.classList.add("sprig-feedback-loading-container-previews"), await pe(t), fe();
                    return
                }
                const H = await Ar(l);
                if (H) m.once(f.SurveyAppeared, fe), pe({ ...H,
                    studyType: "feedbackButton"
                }, n);
                else if (h) {
                    const A = Pr();
                    h.appendChild(A), fe(), h.style.height = "300px", h.style.width = "360px"
                }
            }), u == null || u.appendChild($), m.emit(f.FeedbackButtonLoaded, {
                name: f.FeedbackButtonLoaded,
                "survey.id": d
            });
            const {
                useMobileStyling: V,
                _config: {
                    border: ie
                }
            } = window.UserLeap;
            if (!zt && !V) {
                const I = document.createElement("div");
                I.id = "sprig-feedback-loading-container", I.className = `sprig-feedback-loading-container sprig-feedback-loading-container-${g}`, I.style.setProperty("--feedback-border", ie), h = I, et(), u == null || u.appendChild(I);
                const j = qt();
                xe(-j)
            } else xe(0);
            window.UserLeap._config.isOnQuestionsTab && t && !De() && h && (Kt(), et(), h && h.classList.add("sprig-feedback-loading-container-previews"), pe(t), fe())
        },
        Tr = () => {
            if (De()) return;
            const e = de();
            if (!e) return;
            Vt(we) || (e.remove(), we = null, h = null)
        },
        Pr = () => {
            const e = document.createElement("div");
            e.id = "sprig-feedback-error-container", e.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="14.5" stroke="#B0B5B7" stroke-width="3"/>
  <path d="M20 12L20 21.6" stroke="#B0B5B7" stroke-width="3" stroke-linecap="round"/>
  <circle cx="19.9984" cy="27.6" r="1.6" fill="#B0B5B7"/>
  </svg>`;
            const t = document.createElement("h3");
            return t.className = "sprig-feedback-error-text", t.innerText = "There was an error while loading the survey", e.appendChild(t), e
        },
        Or = "!launch_darkly_";
    class Mr {
        constructor() {
            R(this, "_ldData", {})
        }
        getAllLaunchDarklyVariations() {
            return this._ldData
        }
        setLDFlagsVariations(t) {
            try {
                return !t || typeof t != "object" || Array.isArray(t) ? !1 : (Object.keys(this._ldData).forEach(n => {
                    delete this._ldData[n]
                }), Object.keys(t).forEach(n => this._ldData[`${Or}${n}`] = (t[n] ? ? 0) + 1), !0)
            } catch (n) {
                return n instanceof Error && window.UserLeap.reportError("setAllLDFlagsVariations", n), console.warn("[Sprig] An issue had occured when setting LaunchDarkly flags and variations."), !1
            }
        }
    }
    const tt = new Mr;
    Object.freeze(tt);
    const Br = "!optimizely_experiments_";
    class Nr {
        constructor() {
            R(this, "_optimizelyData", {})
        }
        setOptimizelyExperiment(t, n = !0) {
            if (!t || typeof t != "object") return !1;
            const {
                experiments: i
            } = t;
            try {
                return n && Object.keys(this._optimizelyData).map(r => {
                    delete this._optimizelyData[r]
                }), i && i.map(r => {
                    const {
                        id: s,
                        variation: o
                    } = r, a = this.transformExperimentId(s);
                    o && typeof o == "string" && (this._optimizelyData[a] = o)
                }), !0
            } catch (r) {
                return r instanceof Error && window.UserLeap.reportError("setOptimizelyExperiment", r), !1
            }
        }
        getAllOptimizelyExperiments() {
            return this._optimizelyData
        }
        getOptimizelyVariationName(t) {
            return this._optimizelyData[this.transformExperimentId(t)]
        }
        transformExperimentId(t) {
            return Br + t
        }
        getAndSetWebOptimizelyExperiments() {
            var t;
            try {
                if (window && window.optimizely && typeof window.optimizely.get == "function") {
                    const n = (t = window.optimizely.get("state")) == null ? void 0 : t.getExperimentStates({
                        isActive: !0
                    });
                    if (n) {
                        const i = Object.keys(n).map(r => {
                            var s, o;
                            return (s = n[r].variation) != null && s.name ? {
                                id: r,
                                variation: (o = n[r].variation) == null ? void 0 : o.name
                            } : {
                                id: r,
                                variation: "Original"
                            }
                        });
                        return this.setOptimizelyExperiment({
                            experiments: i
                        }, !1), !0
                    }
                    return !1
                }
                return !1
            } catch (n) {
                return n instanceof Error && window.UserLeap.reportError("getAndSetWebOptimizely", n), !1
            }
        }
    }
    const Ce = new Nr;
    Object.freeze(Ce);
    class $r {
        constructor(t, n) {
            R(this, "paused");
            R(this, "queue");
            R(this, "ul");
            this.ul = t, this.paused = !1, this.queue = [], this.flush(n)
        }
        flush(t) {
            const n = t.length;
            if (n)
                for (let i = 0; i < n; i++) this.push(t[i])
        }
        isPaused() {
            return this.paused
        }
        pause() {
            this.paused = !0
        }
        unpause() {
            this.paused = !1;
            const t = this.queue.slice();
            this.empty(), this.flush(t)
        }
        push(t) {
            if (this.paused) this.queue.push(t);
            else if (t instanceof Function) t();
            else {
                const n = Array.prototype.slice.call(t, 1),
                    i = t[0],
                    r = this.ul[i];
                r instanceof Function ? r.apply(this.ul, n) : i && console.warn("[Sprig] (ERR-100) No valid UserLeap action called", i)
            }
        }
        perform(t) {
            if (this.paused) {
                let n = () => {};
                const i = new Promise(function(r) {
                    n = function() {
                        r(t())
                    }
                });
                return this.queue.push(n), i
            } else return t()
        }
        empty() {
            this.queue.length = 0
        }
    }
    let Jt = !0,
        nt = !1;
    const Fr = () => Jt = !1,
        Vr = () => nt = !0,
        Hr = ["sdk_event_queue_latency_seconds", "sdk_replay_add_event_batch_seconds", "sdk_replay_cleanup_seconds", "sdk_replay_compression_seconds", "sdk_replay_get_events_between_seconds", "sdk_replay_snapshot_seconds", "sdk_mutations_nodes_added", "sdk_mutations_nodes_removed", "sdk_mutations_attributes_changed", "sdk_mutations_character_data", "sdk_dom_nodes_count", "sdk_page_html_characters"];
    let me = {},
        rt;
    class Wr {
        constructor(t) {
            R(this, "_values", []);
            R(this, "_isWebMetric");
            this.name = t, this._isWebMetric = Hr.includes(this.name)
        }
        report(t) {
            if (Jt && this._values.push({
                    time: Date.now(),
                    value: t
                }), nt || !this._isWebMetric) return;
            const n = this.findExceededThreshold(t);
            n && rt && rt(t, n)
        }
        collect() {
            const t = this._values;
            return this._values = [], t
        }
        findExceededThreshold(t) {
            const n = me[this.name];
            if (n) return n.find(i => this.valueExceedsThreshold(t, i))
        }
        valueExceedsThreshold(t, n) {
            return n.type === "max" ? t > n.value : n.type === "min" ? t < n.value : !1
        }
    }
    const jr = (e, t) => {
            me = {}, nt = !1, e == null || e.forEach(n => {
                var i;
                n.metric in me || (me[n.metric] = []), (i = me[n.metric]) == null || i.push(n)
            }), rt = t
        },
        ge = {},
        F = e => {
            const t = new Wr(e);
            return ge[e] = t, t
        },
        Qt = (e, t) => {
            let n = ge[e];
            return n || (n = F(e)), n.report(t)
        },
        zr = async e => {
            const t = Object.values(ge).map(n => ({
                name: n.name,
                values: n.collect()
            }));
            if (t.some(n => n.values.length)) try {
                await e(JSON.stringify(t))
            } catch (n) {
                Ge(`Error posting metrics: ${n}`)
            }
        },
        Gr = ({
            reportingIntervalSeconds: e,
            postMetrics: t
        }) => {
            e ? setInterval(() => {
                zr(t)
            }, e * 1e3) : Fr()
        };
    let Xt, Zt;
    const it = e => {
            let t = 0,
                n = e.firstElementChild;
            for (; n;) t += it(n), n.shadowRoot && (t += it(n.shadowRoot)), n = n.nextElementSibling, t++;
            return t
        },
        qr = () => document.documentElement.innerHTML.length,
        en = () => {
            Xt.report(it(document.body)), Zt.report(qr())
        },
        Kr = (e = 10 * 1e3) => {
            Xt = F("sdk_dom_nodes_count"), Zt = F("sdk_page_html_characters"), en(), setInterval(en, e)
        },
        st = (e, t) => {
            const n = performance.now();
            document.hidden ? setTimeout(() => st(e, t), e) : setTimeout(() => {
                const i = performance.now() - n;
                t.report(i / 1e3), setTimeout(() => st(e, t), e)
            }, 0)
        },
        Yr = (e = 1e3) => {
            const t = F("sdk_event_queue_latency_seconds");
            st(e, t)
        };
    let Ae, Te, Pe, Oe, te = {},
        tn;
    const Me = (e, t = 1) => {
            const {
                name: n
            } = e;
            te[n] = (te[n] || 0) + t
        },
        nn = e => {
            let t = 1;
            return e.childNodes.forEach(n => {
                t += nn(n)
            }), t
        },
        rn = e => {
            let t = 0;
            return e.forEach(n => {
                t += nn(n)
            }), t
        },
        Jr = e => {
            switch (e.type) {
                case "childList":
                    Me(Ae, rn(e.addedNodes)), Me(Te, rn(e.removedNodes));
                    return;
                case "attributes":
                    Me(Pe);
                    return;
                case "characterData":
                    Me(Oe);
                    return
            }
        },
        Qr = e => e.forEach(Jr),
        Xr = () => {
            tn = new MutationObserver(Qr), tn.observe(document, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            })
        },
        Zr = () => {
            Ae.report(te[Ae.name] || 0), Te.report(te[Te.name] || 0), Pe.report(te[Pe.name] || 0), Oe.report(te[Oe.name] || 0), te = {}
        },
        ei = (e = 1 * 1e3) => {
            Ae = F("sdk_mutations_nodes_added"), Te = F("sdk_mutations_nodes_removed"), Pe = F("sdk_mutations_attributes_changed"), Oe = F("sdk_mutations_character_data"), Xr(), setInterval(Zr, e)
        },
        ti = ({
            isWeb: e,
            reportingIntervalSeconds: t,
            thresholds: n,
            postMetrics: i
        }) => {
            jr(n, (r, s) => {
                var o, a;
                if ((o = S.replay) != null && o.isReplayRecording()) {
                    const c = `Value: ${r} on ${s.metric} violated threshold of ${s.type} ${s.value}`;
                    (a = S.replay) == null || a.disableRecording("Threshold violated", new Error(c), {
                        reportError: !1
                    }), window.UserLeap.reportError("Sdk Performance Metric threshold violated", new Error("Sdk Performance Metric threshold violated"), {
                        metricName: s.metric,
                        type: s.type,
                        value: s.value
                    }, {
                        metricName: s.metric
                    }), Vr()
                }
            }), Gr({
                reportingIntervalSeconds: t,
                postMetrics: i
            }), e && (Yr(), Kr(), ei())
        },
        ni = {
            test: "test"
        },
        ri = ["popState", "pushState", "replaceState"],
        ye = "!email",
        sn = "pageUrl";

    function ii(e, t) {
        const {
            pageUrlEvents: n,
            interactiveEvents: i,
            dismissOnPageChange: r
        } = window.UserLeap._config;
        if (!r) return !0;
        const s = [];
        n && n.length && s.push(...n), i && i.length && s.push(...i);
        const o = e && s.find(a => a.id === e);
        return o ? _e(o, window.location.href) : t === window.location.href
    }

    function he(e) {
        var a;
        const {
            pageUrlEvents: t,
            interactiveEvents: n,
            dismissOnPageChange: i,
            platform: r
        } = window.UserLeap._config;
        if (r && r !== "web") return;
        const s = ne("trackStartUrl"),
            o = s ? String(s) : null;
        t && dn(window.location.href), n && (an(), si()), Wt() && Tr(), E.getItem("sprig.isCapturingHeatmap") && ((a = S.replay) == null || a.checkPendingHeatmapsUrl()), !De() && i && o && o !== window.location.href && e && ri.includes(e.type) && window.UserLeap("dismissActiveSurvey", z.PageChange)
    }
    const on = {
            capture: !0
        },
        si = () => {
            const t = window.UserLeap._config.interactiveEvents.filter(i => _e(i, window.location.href)).map(i => {
                    const {
                        name: r,
                        properties: s
                    } = i, {
                        selector: o,
                        innerText: a
                    } = s;
                    return o ? c => {
                        if (Ht(c.target)) try {
                            c.target.closest(o) && window.UserLeap("track", r)
                        } catch {}
                        return !1
                    } : c => (Ht(c.target) && c.target.innerText === a && window.UserLeap("track", r), !1)
                }),
                n = i => t.forEach(r => r(i));
            window.UserLeap._config.interactiveEventsHandler = n, window.addEventListener("click", n, on)
        },
        an = () => {
            window.UserLeap._config.interactiveEventsHandler && window.removeEventListener("click", window.UserLeap._config.interactiveEventsHandler, on), delete window.UserLeap._config.interactiveEventsHandler
        };

    function oi() {
        ["hashchange", "popstate"].forEach(e => window.addEventListener(e, he, !0))
    }

    function ai() {
        ["hashchange", "popstate"].forEach(e => window.removeEventListener(e, he, !0)), window.UserLeap._config.interactiveEvents && an()
    }

    function ci(e) {
        const t = new URL(P("1", [Y], "questions"));
        return Object.entries(e || {}).forEach(([n, i]) => {
            i && t.searchParams.append(n, String(i))
        }), t.toString()
    }

    function ne(e) {
        const t = B.getItem("userleap.ids");
        if (t) try {
            const i = JSON.parse(t)[window.UserLeap.envId];
            return i && i[e] || null
        } catch (n) {
            n instanceof Error && (n.stack = t, window.UserLeap.reportError("Failed to parse local storage credentials", n)), console.warn("[Sprig] (ERR-427) Failed to lookup saved ids", n)
        }
        return null
    }

    function cn() {
        window.previewMode || (window.UserLeap.visitorId = oe(), p(`Generating new vid: ${window.UserLeap.visitorId}`), x("vid", window.UserLeap.visitorId), m.emit(f.VisitorIDUpdated, {
            visitorId: window.UserLeap.visitorId
        }))
    }

    function dn(e, t, n, i) {
        var r, s;
        try {
            if (e.endsWith("mock_snippet.html")) return;
            p(`Tracking page view: ${e}`);
            const o = window.UserLeap._config.pageUrlEvents;
            let a = !1;
            if (o && o.length)
                for (let d = 0; d < o.length && (a = _e(o[d], e), !a); d++);
            if (!a) return;
            window.UserLeap.debugMode && console.info("[DEBUG] Sprig trackPageView", e);
            const c = {
                url: e
            };
            i && (c.trackPageView = !0), window.UserLeap._queue.push(["track", sn, t, c, n]);
            const l = (r = document == null ? void 0 : document.querySelector('meta[name="description"]')) == null ? void 0 : r.getAttribute("content");
            (s = S.replay) == null || s.RecordPageView({ ...l && {
                    description: l
                },
                url: e,
                referrer: document.referrer,
                pageTitle: document.title
            })
        } catch (o) {
            o instanceof Error && (o.stack = e, window.UserLeap.reportError("trackPageView", o)), console.warn("[Sprig] (ERR-428) Failed to track page view", o)
        }
    }

    function di() {
        const e = "Backbone" in window && window.Backbone && window.Backbone.history ? window.Backbone.history : window.history;
        "pushState" in e && (e.pushState = (t => function(...i) {
            const r = t.apply(this, i),
                s = new Event("pushState");
            return window.dispatchEvent(s), he(s), r
        })(e.pushState)), "replaceState" in e && (e.replaceState = (t => function(...i) {
            const r = t.apply(this, i),
                s = new Event("replaceState");
            return window.dispatchEvent(s), he(s), r
        })(e.replaceState)), oi()
    }
    async function ot(e, t) {
        const n = qe();
        e && !t && (window.UserLeap._config.mode = ni.test);
        const i = G(window.UserLeap),
            r = Ke(i),
            s = await N(ci({
                desktopDisplay: window.UserLeap._config.desktopDisplay,
                isMobile: r,
                previewLanguage: window.UserLeap._config.previewLanguage,
                surveyid: e == null ? void 0 : e.surveyId,
                surveytemplateid: e == null ? void 0 : e.surveyTemplateId,
                vid: n
            }), {
                shouldDropOnRateLimit: !0
            });
        if (!s.ok) return s.reportError && s.error && (console.warn("[Sprig] (ERR-414) Failed to request questions from the server", s.error), window.UserLeap.reportError("getQuestions", s.error)), {
            success: !1,
            surveyState: "no survey"
        };
        if (s.json.delay && await Le(s.json.delay), s.json.isFeedback) {
            const {
                feedbackLabel: o,
                productConfig: a,
                surveyUuid: c,
                feedbackCustomStyles: l
            } = s.json, {
                buttonTheme: d,
                placement: u,
                desktopDisplay: y
            } = a, w = {
                customStyles: l,
                buttonTheme: d,
                desktopDisplay: y,
                eventId: 0,
                feedbackLabel: o,
                placement: u,
                surveyUuid: c,
                surveyId: e == null ? void 0 : e.surveyId
            };
            Yt(w, s.json)
        } else return pe(s.json)
    }

    function li(e) {
        let t = e.length;
        for (; t;) {
            const n = Math.floor(Math.random() * t);
            t -= 1;
            const i = e[t];
            e[t] = e[n], e[n] = i
        }
    }

    function ui(e) {
        if (!e) return;
        window.UserLeap._config = e, e.mute && window.UserLeap._queue.pause();
        const {
            interactiveEvents: t,
            pageUrlEvents: n,
            dismissOnPageChange: i
        } = e;
        t && li(t), (t || n || i) && (di(), he())
    }
    async function pi(e, t) {
        var i, r;
        let n = !0;
        return t && ((i = e == null ? void 0 : e.json) != null && i.surveyId) && (window.UserLeap.delayingSurvey = !0, n = await t(e.json.surveyId), window.UserLeap.delayingSurvey = !1, !n) ? !1 : ((r = e == null ? void 0 : e.json) != null && r.delay && !window.UserLeap.isMobileSDK && (window.UserLeap.delayingSurvey = !0, await Le(e.json.delay), window.UserLeap.delayingSurvey = !1), n)
    }
    const wi = function(e) {
        if (!window.UserLeap) return;
        const t = async (r = {}) => {
                var I, j, se, H, A;
                const {
                    userId: s,
                    anonymousId: o,
                    metadata: a = {},
                    properties: c,
                    showSurveyCallback: l
                } = r;
                let {
                    eventName: d
                } = r;
                if (window.UserLeap.debugMode && d !== sn && console.info("[DEBUG] Sprig track", r), e.mode === "test") return;
                const u = B.getItem("sprig.previewKey") ? ? void 0;
                if (e.requireUserIdForTracking && !window.UserLeap.userId && !s) {
                    const _ = "[Sprig] - Skipping tracking without userId";
                    return console.warn(_), {
                        success: !1,
                        message: _,
                        surveyState: "no survey"
                    }
                }
                if (!d || d.trim().length === 0) {
                    d = d ? String(d) : "";
                    const _ = "[Sprig] - Invalid event name " + d;
                    return console.warn(_), {
                        success: !1,
                        message: _,
                        surveyState: "no survey"
                    }
                }
                const y = window.location.href;
                if (a.url || (a.url = y), x("trackStartUrl", y), (j = (I = window.UserLeap) == null ? void 0 : I._config) != null && j.optimizelyEnabled) {
                    const _ = G(window.UserLeap);
                    ke(_) || Ce.getAndSetWebOptimizelyExperiments(), a.optimizelyExperiments = Object.assign({}, Ce.getAllOptimizelyExperiments())
                }(H = (se = window.UserLeap) == null ? void 0 : se._config) != null && H.launchDarklyEnabled && (a.launchDarklyFlags = tt.getAllLaunchDarklyVariations()), s && (window.UserLeap.userId = s), o && (window.UserLeap.partnerAnonymousId = o), c && (a.eventProperties = c), (A = S.replay) == null || A.RecordEvent({
                    name: d,
                    url: a.url
                }), p(`Tracking event: ${d}`);
                const w = window.UserLeap.delayingSurvey || jt() ? await N(P("1", [K], "events/batch"), {
                    body: JSON.stringify({
                        events: [{
                            event: d,
                            metadata: a
                        }],
                        previewKey: u
                    }),
                    method: "POST",
                    shouldDropOnRateLimit: !0
                }) : await N(P("1", [K], "events"), {
                    body: JSON.stringify({
                        event: d,
                        metadata: a,
                        previewKey: u
                    }),
                    method: "POST",
                    shouldDropOnRateLimit: !0
                });
                if (!w.ok) {
                    const _ = "[Sprig] (ERR-421) Failed to track event";
                    return w.reportError && (console.warn(_, w.error), w.error && window.UserLeap.reportError("track", w.error)), {
                        success: !1,
                        message: _,
                        error: w.error,
                        surveyState: "no survey"
                    }
                }
                s && x("uid", s), o && x("aid", o);
                const g = w.json;
                g.invalidPreviewKey && B.removeItem("sprig.previewKey");
                const k = a.trackPageView ? a.url : void 0;
                return !!(g != null && g.feedbackButton) && Yt(g.feedbackButton, void 0, k), await pi(w, l) ? ii(g.eventId, y) ? pe(g, k) : {
                    success: !1,
                    message: "Study should not be displayed after page navigation",
                    surveyState: "no survey"
                } : {
                    success: !1,
                    message: "[Sprig] Callback returned false, aborting rendering of survey",
                    surveyState: "no survey"
                }
            },
            n = (r, s) => {
                var a;
                const o = (a = r == null ? void 0 : r.querySelector(`[id="${Ye}"]`)) == null ? void 0 : a.contentDocument;
                o && Re({
                    document: o,
                    elementId: "ul-custom-style",
                    styleString: s
                })
            },
            i = {
                async displaySurvey(r) {
                    return console.warn("[Sprig] displaySurvey should only be used to debug your studies; not intended for production usage."), window.UserLeap("dismissActiveSurvey", z.Override), ot({
                        surveyId: r
                    }, !0)
                },
                _previewSurvey(r) {
                    window.UserLeap("dismissActiveSurvey", z.Override), ot({
                        surveyTemplateId: r
                    }, !1)
                },
                _reviewSurvey(r) {
                    window.UserLeap("dismissActiveSurvey", z.Override), ot({
                        surveyId: r
                    }, !1)
                },
                previewSurvey(r) {
                    i._previewSurvey(r)
                },
                reviewSurvey(r) {
                    i._reviewSurvey(r)
                },
                mute() {
                    window.UserLeap._queue.pause()
                },
                unmute() {
                    window.UserLeap._queue.unpause()
                },
                setVisitorToken() {
                    console.warn("[Sprig] setVisitorToken is deprecated.")
                },
                dismissActiveSurvey(r = z.API) {
                    m.emit(f.SurveyWillClose, {
                        name: f.SurveyWillClose,
                        initiator: r
                    })
                },
                async setAttribute(r, s) {
                    if (!r || !s && s !== 0 && s !== !1) {
                        const o = "[Sprig] - Disregarding empty attribute / value provided";
                        return console.warn(o), {
                            success: !1,
                            message: o
                        }
                    }
                    return this.setAttributes({
                        [r]: s
                    })
                },
                async setAttributes(r) {
                    if (r == null || Object.keys(r).length === 0) {
                        const s = "[Sprig] - Disregarding empty attributes provided";
                        return console.warn(s), {
                            success: !1,
                            message: s
                        }
                    }
                    return this.identifyAndSetAttributes({
                        attributes: r
                    })
                },
                async identifyAndSetAttributes(r) {
                    if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig identifyAndSetAttributes", r), e.mode === "test") return;
                    if (r === null || typeof r != "object" || !(r.userId || r.anonymousId || r.attributes)) {
                        const d = "[Sprig] - Disregarding empty payload provided";
                        return console.warn(d), {
                            success: !1,
                            message: d
                        }
                    }
                    const {
                        userId: s,
                        anonymousId: o,
                        attributes: a
                    } = r;
                    if (e.requireUserIdForTracking && !window.UserLeap.userId && !s) {
                        const d = "[Sprig] - Skipping tracking without userId";
                        return console.warn(d), {
                            success: !1,
                            message: d
                        }
                    }
                    if (!a && (!s || window.UserLeap.userId === s) && (!o || window.UserLeap.partnerAnonymousId === o)) return {
                        success: !0
                    };
                    const c = {};
                    s && (c.userId = window.UserLeap.userId = s), o && (c.partnerAnonymousId = window.UserLeap.partnerAnonymousId = o);
                    let l;
                    return a ? (a.email && !Object.prototype.hasOwnProperty.call(a, ye) && (a[ye] = a.email, delete a.email), p(`Setting attributes: ${JSON.stringify(a)}`), l = await N(P("1", [Y, K], "attributes"), {
                        body: JSON.stringify(a),
                        method: "PUT"
                    }), !l.ok && l.reportError && (console.warn("[Sprig] (ERR-432) identifyAndSetAttributes failed", l.error), l.error && window.UserLeap.reportError("identifyAndSetAttributes", l.error))) : l = await N(P("1", [Y, K]), {
                        body: JSON.stringify(c),
                        method: "PUT"
                    }), a && a[ye] && (window.UserLeap.email = a[ye]), l.ok && (s && x("uid", s), o && x("aid", o)), {
                        success: !!l.ok
                    }
                },
                async removeAttributes(r) {
                    if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig removeAttributes", r), e.mode === "test") return;
                    if (r == null || r.length === 0) {
                        const o = "[Sprig] - Disregarding empty attributes provided";
                        return console.warn(o), {
                            success: !1,
                            message: o
                        }
                    }
                    if (e.requireUserIdForTracking && !window.UserLeap.userId) {
                        const o = "[Sprig] - Skipping tracking without userId";
                        return console.warn(o), {
                            success: !1,
                            message: o
                        }
                    }
                    const s = await N(P("1", [Y, K], "attributes"), {
                        body: JSON.stringify({
                            delete: r
                        }),
                        method: "DELETE"
                    });
                    return !s.ok && s.reportError && (console.warn("[Sprig] (ERR-433) Remove attributes failed", s.error), s.error && window.UserLeap.reportError("removeAttributes", s.error)), {
                        success: !!s.ok
                    }
                },
                async addSurveyListener(r) {
                    m.on(f.SurveyLifeCycle, r)
                },
                async removeSurveyListener(r) {
                    m.removeListener(f.SurveyLifeCycle, r)
                },
                async addListener(r, s) {
                    m.on(r, s)
                },
                async removeListener(r, s) {
                    m.removeListener(r, s)
                },
                async removeAllListeners() {
                    m.removeAllListeners()
                },
                setPreviewKey(r) {
                    !r || typeof r != "string" || B.isStorageAvailable && r && B.setItem("sprig.previewKey", r)
                },
                async setUserId(r) {
                    var a;
                    if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig setUserId", r), r == null) {
                        const c = `[Sprig] - Invalid userId ${r}`;
                        return console.warn(c), {
                            success: !1,
                            message: c
                        }
                    }
                    if (e.mode === "test" || r === window.UserLeap.userId) return;
                    window.UserLeap.userId = r;
                    const s = window.UserLeap.visitorId,
                        o = await N(P("1", [Y, K]), {
                            body: JSON.stringify({
                                userId: r
                            }),
                            method: "PUT"
                        });
                    if (!o.ok) {
                        o.reportError && (console.warn("[Sprig] (ERR-420) Failed to set user id", o.error), o.error && window.UserLeap.reportError("setUserId", o.error));
                        return
                    }
                    s !== window.UserLeap.visitorId && ((a = S.replay) == null || a.clearUserReplayData()), x("uid", r)
                },
                async setPartnerAnonymousId(r) {
                    if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig setPartnerAnonymousId", r), r == null) {
                        const s = `[Sprig] - Invalid partnerAnonymousId ${r}`;
                        return console.warn(s), {
                            success: !1,
                            message: s
                        }
                    }
                    return window.UserLeap.partnerAnonymousId = r, x("aid", r), {
                        success: !0
                    }
                },
                async track(r, s, o = {}, a = void 0) {
                    return t({
                        eventName: r,
                        properties: s,
                        metadata: o,
                        showSurveyCallback: a
                    })
                },
                async identifyAndTrack(r) {
                    return await t(r)
                },
                trackPageView(r, s = void 0, o = void 0, a = !0) {
                    dn(r, s, o, a)
                },
                applyFeedbackStyles({
                    button: r = "",
                    view: s = ""
                }) {
                    window.UserLeap.feedbackCustomStyles = s, document.getElementById("sprig-feedback-style") && Re({
                        document,
                        elementId: "ul-custom-style",
                        styleString: r,
                        nonce: window.UserLeap.styleNonce
                    }), n(document.querySelector(".ul-container-feedback"), s)
                },
                applyStyles(r) {
                    window.UserLeap.customStyles = r, n(window.UserLeap.container, r)
                },
                setWindowDimensions(r, s) {
                    var l, d;
                    const o = typeof r == "string" ? parseInt(r, 10) : r,
                        a = typeof s == "string" ? parseInt(s, 10) : s;
                    if (!isNaN(o) && !isNaN(a) && (window.UserLeap.windowDimensions = {
                            width: o,
                            height: a
                        }), !window.UserLeap.frameId) return;
                    const c = document.getElementById(window.UserLeap.frameId);
                    c && (window.UserLeap.useMobileStyling && ((l = window.UserLeap.windowDimensions) != null && l.width && (c.style.width = `${window.UserLeap.windowDimensions.width}px`), (d = window.UserLeap.windowDimensions) != null && d.height && (c.style.maxHeight = `${window.UserLeap.windowDimensions.height-20}px`), c.contentDocument && (c.style.height = String(Rr(c.contentDocument)[0]) + "px")), m.emit(f.SurveyDimensions, {
                        name: f.SurveyDimensions,
                        contentFrameWidth: c.clientWidth,
                        contentFrameHeight: c.clientHeight
                    }))
                },
                logoutUser() {
                    var r;
                    window.UserLeap.debugMode && console.info("[DEBUG] Sprig logout"), p(`Logging out user: ${window.UserLeap.userId} / vid: ${window.UserLeap.visitorId}`), window.UserLeap.visitorId = null, window.UserLeap.userId = null, window.UserLeap.partnerAnonymousId = null, window.UserLeap.token = null, window.UserLeap.email = null, B.removeItem("userleap.ids"), window.UserLeap._queue.isPaused() && window.UserLeap._queue.empty(), cn(), (r = S.replay) == null || r.clearUserReplayData(), window.UserLeap._queue.unpause()
                },
                teardown() {
                    ai(), window.UserLeap("dismissActiveSurvey", z.API), delete window.UserLeap, delete window.Sprig, delete window._Sprig
                },
                integrateOptimizely(r, s = !0) {
                    var o, a;
                    if (!((a = (o = window.UserLeap) == null ? void 0 : o._config) != null && a.optimizelyEnabled)) {
                        console.warn("[SPRIG] Optimizely integration is currently not enabled for your product.");
                        return
                    }
                    try {
                        const c = typeof r == "string" ? JSON.parse(r) : r;
                        Ce.setOptimizelyExperiment(c, s)
                    } catch (c) {
                        console.warn("[Sprig] Error with integrating Optimizely data"), c instanceof Error && window.UserLeap.reportError("integrateOptimizely", c)
                    }
                },
                integrateOptimizelyClient(r) {
                    var o, a;
                    if (!((a = (o = window.UserLeap) == null ? void 0 : o._config) != null && a.optimizelyEnabled)) {
                        console.warn("[SPRIG] Optimizely integration is currently not enabled for your product.");
                        return
                    }
                    const s = ({
                        experiment: c,
                        variation: l
                    }) => {
                        const d = {
                            experiments: [{
                                id: c.id,
                                variation: l.key
                            }]
                        };
                        window.UserLeap("integrateOptimizely", d, !1)
                    };
                    r.notificationCenter.addNotificationListener("ACTIVATE:experiment, user_id,attributes, variation, event", s)
                },
                importLaunchDarklyData(r) {
                    var s, o;
                    if (!((o = (s = window.UserLeap) == null ? void 0 : s._config) != null && o.launchDarklyEnabled)) {
                        console.warn("[SPRIG] LaunchDarkly integration is currently not enabled for your product.");
                        return
                    }
                    tt.setLDFlagsVariations(r)
                },
                setVisitorAttribute(r, s) {
                    return console.warn("[Sprig] setVisitorAttribute is deprecated. Please use setAttribute"), i.setAttribute(r, s)
                },
                async setEmail(r) {
                    return i.setAttribute(ye, r)
                },
                async setVisitorEmail(r) {
                    return console.warn("[Sprig] setVisitorEmail is deprecated. Please use setEmail"), i.setEmail(r)
                },
                async _generateVideoUploadUrl(r) {
                    return yi(r)
                },
                _reportMetric(r, s) {
                    Qt(r, s)
                },
                async _completeSessionReplay({
                    surveyId: r,
                    responseGroupUuid: s,
                    eventDigest: o
                }) {
                    var a;
                    return S.replay ? (a = S.replay) == null ? void 0 : a._completeSessionReplay({
                        surveyId: r,
                        responseGroupUuid: s,
                        eventDigest: o,
                        headers: G(window.UserLeap)
                    }) : (window.UserLeap.reportError("_completeSessionReplay", new Error("Replay module not registered")), !1)
                }
            };
        Object.assign(window.UserLeap, i)
    };
    async function fi(e) {
        const t = G(window.UserLeap);
        document.addEventListener("securitypolicyviolation", At);
        const n = await q(P("1", [Y], "config"), {
            headers: t
        });
        if (document.removeEventListener("securitypolicyviolation", At), !n.ok) return n.reportError && (console.warn("[Sprig] (ERR-422) Failed to load configuration", n.error), n.error && window.UserLeap.reportError("applyRemoteConfig", n.error)), je("Disabled: failed to fetch configuration"), e;
        const i = n.json;
        return i != null && i.disabled ? (je(`Disabled: ${i.disabled}`), {
            disabled: i.disabled
        }) : Object.assign({}, i, e)
    }
    const mi = e => typeof e == "object" && e && "inner" in e && !!e.inner && typeof e.inner == "object";
    async function gi(e, t, n = {}, i = {}) {
        var y, w;
        const r = window.__cfg && window.__cfg.mode,
            s = qe(),
            o = window.UserLeap.envId,
            a = window.document.documentElement,
            c = mi(t) ? {
                inner: {
                    message: (y = t.inner) == null ? void 0 : y.message,
                    stack: (w = t.inner) == null ? void 0 : w.stack
                }
            } : {},
            l = {
                mode: r,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                clientWidth: a.clientWidth,
                clientHeight: a.clientHeight,
                location: window.location.href,
                language: window.navigator.language,
                ...n,
                ...c
            },
            d = {
                action: e,
                err: {
                    message: t.message,
                    stack: t.stack
                },
                meta: l,
                vid: s,
                envId: o,
                ...i
            },
            u = await N(P("1", null, "errors"), {
                method: "POST",
                headers: {
                    "x-ul-error": window.btoa(`userleap-${Date.now()}-error`)
                },
                body: JSON.stringify(d),
                shouldDropOnRateLimit: !0
            });
        if (!u.ok) console.warn("[Sprig] (ERR-444) Failed to report error to API", t);
        else {
            const {
                presignedUrl: g
            } = u.json;
            yr(g)
        }
    }
    async function yi(e) {
        var n;
        if (!e) return;
        const t = `${window.UserLeap._API_URL}/2/environments/integrations/upload`;
        try {
            const i = await fetch(t, {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
            });
            if (i.ok) {
                const r = await i.json();
                return (n = r == null ? void 0 : r.upload) == null ? void 0 : n.url
            } else return null
        } catch (i) {
            console.warn("[Sprig] Error with generating video upload url"), i instanceof Error && window.UserLeap.reportError("generateVideoUploadUrl", i)
        }
    }

    function hi(e = {}) {
        const t = new URLSearchParams(window.location.search).get("sprigPreviewKey") ? ? "";
        window.UserLeap.UPDATES = be, window.UserLeap("setPreviewKey", t);
        async function n() {
            var l;
            if (window.UserLeap.loaded) return;
            if (p("Loading sprig on page load"), window.UserLeap.reportError = gi, window.UserLeap.loaded = !0, window.UserLeap._config = Object.assign({}, e, window.UserLeap.config), window.UserLeap.delayingSurvey = !1, window.UserLeap._config && typeof window.UserLeap._config == "object")
                for (const d in window.UserLeap._config) window.UserLeap[d] = window.UserLeap._config[d];
            if (!window.UserLeap.envId)
                if (window.UserLeap.appId) window.UserLeap.envId = window.UserLeap.appId;
                else throw new Error("Missing Environment id");
            window.UserLeap.debugMode && console.info("[DEBUG] Sprig debug mode enabled");
            const i = window.UserLeap.sampleRate;
            if (i) {
                let d = ne("sampled");
                if (d === null && (d = Math.random() < i, x("sampled", d)), !d) return
            } else ne("sampled") !== null && x("sampled", null);
            window.UserLeap._API_URL || (window.UserLeap._API_URL = "https://api.sprig.com");
            const r = [...window.UserLeap._queue];
            window.UserLeap._queue = new $r(window.UserLeap, []), window.UserLeap._queue.pause();
            for (let d = 0; d < r.length; d++) window.UserLeap._queue.push(r[d]);
            const s = ne("token");
            s ? (window.UserLeap.token = s, window.UserLeap.visitorId = ne("vid"), window.UserLeap.userId = ne("uid"), window.UserLeap.partnerAnonymousId = ne("aid")) : (B.removeItem("userleap.ids"), cn());
            const o = G(window.UserLeap),
                a = ke(o),
                c = await fi(e);
            ti({
                isWeb: !a,
                reportingIntervalSeconds: c.metricsReportingEnabled || c.mobileMetricsReportingEnabled ? c.metricsReportingIntervalSeconds : 0,
                thresholds: c.metricThresholds,
                postMetrics: async d => {
                    var u;
                    await N(P("1", [Y], "metrics"), {
                        body: d,
                        method: "POST",
                        headers: {
                            "x-ul-replay-enabled": `${!!((u=S.replay)!=null&&u.isReplayRecording())}`
                        },
                        shouldDropOnRateLimit: !0
                    })
                }
            }), (l = S.replay) == null || l.initializeReplay({
                viewDocument: window.document,
                maxReplayDurationSeconds: c.maxReplayDurationSeconds,
                replayNonce: window.UserLeap.replayNonce,
                maxInflightRequests: window.UserLeap.maxInflightReplayRequests ? ? 2,
                replaySettings: c.replaySettings
            }), hr(c.logBufferLimit, c.logLevel), wi(c), await ui(c), window.UserLeap._queue.unpause(), m.emit(f.SDKReady, {
                mobileMetricsReportingEnabled: !!c.mobileMetricsReportingEnabled,
                metricsReportingInterval: c.metricsReportingIntervalSeconds || 0,
                metricsThresholds: c.metricThresholds || [],
                maxMobileReplayDurationSeconds: c.maxMobileReplayDurationSeconds,
                mobileReplaySettings: c.mobileReplaySettings
            }), m.emit(f.VisitorIDUpdated, {
                visitorId: window.UserLeap.visitorId
            })
        }
        document.readyState === "complete" ? n() : window.attachEvent ? window.attachEvent("onload", n) : window.addEventListener("load", () => {
            n()
        }, !1)
    }
    var Be = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(Be || {});
    class vi {
        constructor(t) {
            R(this, "awaitingResolvers", []);
            R(this, "activeCount", 0);
            this.capacity = t
        }
        async acquire() {
            if (this.activeCount < this.capacity) {
                this.activeCount++;
                return
            }
            return new Promise(t => {
                this.awaitingResolvers.push(t)
            })
        }
        release() {
            const t = this.awaitingResolvers.shift();
            t && this.activeCount <= this.capacity ? t() : this.activeCount--
        }
        async execute(t) {
            try {
                return await this.acquire(), await t()
            } finally {
                this.release()
            }
        }
        setLimit(t) {
            this.capacity = t
        }
    }
    const ln = new vi(2),
        bi = e => ln.setLimit(e),
        Li = async e => ln.execute(async () => {
            var i;
            p(`Beginning upload of chunk ${e.chunkIndex} for survey: ${e.surveyId}`);
            const t = await q(e.uploadUrl, {
                body: e.data,
                method: "PUT"
            });
            p(`Completed upload of chunk ${e.chunkIndex} for survey: ${e.surveyId}`);
            const n = (i = t.headers) == null ? void 0 : i.get("ETag");
            if (!n) throw new Error(`Upload response did not include etag for upload ${e.uploadId}, part ${e.chunkIndex}`);
            return n
        }),
        un = async ({
            apiUrl: e,
            surveyId: t,
            uploadId: n,
            etags: i,
            headers: r,
            responseGroupUuid: s,
            replayDuration: o,
            eventDigest: a
        }, c = !1) => {
            var d;
            if (!c && !n && !i) {
                p(`Cannot mark upload complete: isMobile: ${c} / uploadId: ${n} / etags: ${i}`);
                return
            }
            p(`Marking upload complete for survey: ${t}`);
            const l = await q(`${e}/sdk/1/completeSessionReplay`, {
                method: "POST",
                body: JSON.stringify({
                    etags: i,
                    uploadId: n,
                    responseGroupUuid: s,
                    surveyId: t,
                    replayDuration: o,
                    eventDigest: a,
                    userAgent: (d = window == null ? void 0 : window.navigator) == null ? void 0 : d.userAgent
                }),
                headers: r,
                shouldRetryRequest: !0
            });
            return p(`Done marking upload complete for survey: ${t}`), l
        },
        at = (e, t) => t.some(n => e instanceof n);
    let pn, wn;

    function Si() {
        return pn || (pn = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
    }

    function Ii() {
        return wn || (wn = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
    }
    const ct = new WeakMap,
        dt = new WeakMap,
        Ne = new WeakMap;

    function Ui(e) {
        const t = new Promise((n, i) => {
            const r = () => {
                    n(J(e.result))
                },
                s = () => {
                    i(e.error)
                };
            e.onsuccess = r, e.onerror = s
        });
        return Ne.set(t, e), t
    }

    function Ei(e) {
        if (ct.has(e)) return;
        const t = new Promise((n, i) => {
            const r = () => {
                    n()
                },
                s = () => {
                    i(e.error || new DOMException("AbortError", "AbortError"))
                };
            e.oncomplete = r, e.onerror = s, e.onabort = s
        });
        ct.set(e, t)
    }
    let lt = {
        get(e, t, n) {
            if (e instanceof IDBTransaction) {
                if (t === "done") return ct.get(e);
                if (t === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
            }
            return J(e[t])
        },
        set(e, t, n) {
            return e[t] = n, !0
        },
        has(e, t) {
            return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e
        }
    };

    function fn(e) {
        lt = e(lt)
    }

    function ki(e) {
        return Ii().includes(e) ? function(...t) {
            return e.apply(ut(this), t), J(this.request)
        } : function(...t) {
            return J(e.apply(ut(this), t))
        }
    }

    function _i(e) {
        return typeof e == "function" ? ki(e) : (e instanceof IDBTransaction && Ei(e), at(e, Si()) ? new Proxy(e, lt) : e)
    }

    function J(e) {
        if (e instanceof IDBRequest) return Ui(e);
        if (dt.has(e)) return dt.get(e);
        const t = _i(e);
        return t !== e && (dt.set(e, t), Ne.set(t, e)), t
    }
    const ut = e => Ne.get(e);

    function Ri(e, t, {
        blocked: n,
        upgrade: i,
        blocking: r,
        terminated: s
    } = {}) {
        const o = indexedDB.open(e, t),
            a = J(o);
        return i && (o.onupgradeneeded = c => {
            i(J(o.result), c.oldVersion, c.newVersion, J(o.transaction), c)
        }), n && (o.onblocked = c => n(c.oldVersion, c.newVersion, c)), a.then(c => {
            s && (c.onclose = () => s()), r && (c.onversionchange = l => r(l.oldVersion, l.newVersion, l))
        }).catch(() => {}), a
    }

    function pt(e, {
        blocked: t
    } = {}) {
        const n = indexedDB.deleteDatabase(e);
        return t && (n.onblocked = i => t(i.oldVersion, i)), J(n).then(() => {})
    }
    const Di = ["get", "getKey", "getAll", "getAllKeys", "count"],
        xi = ["put", "add", "delete", "clear"],
        wt = new Map;

    function mn(e, t) {
        if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
        if (wt.get(t)) return wt.get(t);
        const n = t.replace(/FromIndex$/, ""),
            i = t !== n,
            r = xi.includes(n);
        if (!(n in (i ? IDBIndex : IDBObjectStore).prototype) || !(r || Di.includes(n))) return;
        const s = async function(o, ...a) {
            const c = this.transaction(o, r ? "readwrite" : "readonly");
            let l = c.store;
            return i && (l = l.index(a.shift())), (await Promise.all([l[n](...a), r && c.done]))[0]
        };
        return wt.set(t, s), s
    }
    fn(e => ({ ...e,
        get: (t, n, i) => mn(t, n) || e.get(t, n, i),
        has: (t, n) => !!mn(t, n) || e.has(t, n)
    }));
    const Ci = ["continue", "continuePrimaryKey", "advance"],
        gn = {},
        ft = new WeakMap,
        yn = new WeakMap,
        Ai = {
            get(e, t) {
                if (!Ci.includes(t)) return e[t];
                let n = gn[t];
                return n || (n = gn[t] = function(...i) {
                    ft.set(this, yn.get(this)[t](...i))
                }), n
            }
        };
    async function* Ti(...e) {
        let t = this;
        if (t instanceof IDBCursor || (t = await t.openCursor(...e)), !t) return;
        t = t;
        const n = new Proxy(t, Ai);
        for (yn.set(n, t), Ne.set(n, ut(t)); t;) yield n, t = await (ft.get(n) || t.continue()), ft.delete(n)
    }

    function hn(e, t) {
        return t === Symbol.asyncIterator && at(e, [IDBIndex, IDBObjectStore, IDBCursor]) || t === "iterate" && at(e, [IDBIndex, IDBObjectStore])
    }
    fn(e => ({ ...e,
        get(t, n, i) {
            return hn(t, n) ? Ti : e.get(t, n, i)
        },
        has(t, n) {
            return hn(t, n) || e.has(t, n)
        }
    }));
    const Pi = e => {
            if (e instanceof Attr) return null;
            let t = 1;
            for (let n = e.previousSibling; n; n = n.previousSibling) n.nodeName === e.nodeName && ++t;
            return t
        },
        vn = e => {
            if (e === null) return "";
            const t = [];
            if (e instanceof Document) return "/";
            for (let n = e; n && !(n instanceof Document) && n !== null; n = n instanceof Attr ? n.ownerElement : n.parentElement) {
                const i = t[t.length] = {
                    name: void 0,
                    position: null
                };
                switch (n.nodeType) {
                    case Node.TEXT_NODE:
                        i.name = "text()";
                        break;
                    case Node.ATTRIBUTE_NODE:
                        i.name = "@" + n.nodeName;
                        break;
                    case Node.PROCESSING_INSTRUCTION_NODE:
                        i.name = "processing-instruction()";
                        break;
                    case Node.COMMENT_NODE:
                        i.name = "comment()";
                        break;
                    case Node.ELEMENT_NODE:
                        i.name = n.nodeName;
                        break
                }
                i.position = Pi(n)
            }
            return "/" + t.reverse().map(n => n.position !== null ? `/${n.name}[${n.position}]` : `/${n.name}`).join("")
        },
        Q = {
            capture: !0,
            passive: !0
        },
        Oi = ["a", "button", "input", "option", "li", "link"],
        Mi = ["Escape", "Enter", "Backspace", "F5", "Tab"];
    let $e = !1;
    const Bi = ["label", "type", "role", "title", "placeholder", "errormessage", "valuetext", "href"],
        bn = "aria-",
        Ni = e => {
            if (!e.tagName) return "No tagName";
            const t = e.getAttribute("type");
            return t ? `${t} ${e.tagName.toLowerCase()}` : e.tagName.toLowerCase()
        },
        Ln = e => {
            var i;
            if (((i = e.tagName) == null ? void 0 : i.toLowerCase()) === "html") return {
                element: "html"
            };
            const t = e.textContent,
                n = t ? {
                    text: t
                } : {};
            n.element = Ni(e);
            for (const r of e.attributes) {
                let s = r.name;
                const o = r.value;
                s.startsWith(bn) && (s = s.substring(bn.length)), Bi.includes(s) && (n[s] = o)
            }
            return n
        },
        $i = e => {
            var r;
            if (!e) return {};
            const n = { ...Ln(e)
                },
                i = e.parentElement;
            if (i && Oi.includes((r = i.tagName) == null ? void 0 : r.toLowerCase())) {
                const s = Ln(i);
                Object.assign(n, s)
            }
            return n
        },
        Sn = (e, t) => {
            var n;
            Ji({
                x: t.x,
                y: t.y,
                type: e,
                elementAttributes: $i(t.target),
                windowHeight: window.innerHeight,
                windowWidth: window.innerWidth,
                ...t.target instanceof HTMLElement ? {
                    rect: (n = t.target) == null ? void 0 : n.getBoundingClientRect(),
                    xPath: vn(t.target)
                } : {}
            })
        },
        Fi = e => t => Sn(e, t),
        In = e => {
            Mi.includes(e.key) && ns({
                key: e.key
            })
        },
        Vi = () => {
            window.performance.getEntriesByType("navigation").map(t => t.type).includes("reload") && es({
                url: window.location.href,
                currentPageTitle: document.title
            })
        },
        Hi = () => {
            window.performance.getEntriesByType("navigation").map(t => t.type).includes("back_forward") && ts({
                curUrl: window.location.href,
                fromUrl: document.referrer,
                currentPageTitle: document.title
            })
        },
        Un = ((e, t) => {
            let n;
            return i => {
                clearTimeout(n), n = window.setTimeout(() => e(i), t)
            }
        })(e => {
            if (!(e.target instanceof HTMLElement || e.target instanceof Document)) return;
            let t = e.target;
            "scrollTop" in t || (t = t.documentElement), rs({
                xPath: vn(t),
                x: t.scrollLeft,
                y: t.scrollTop,
                elementAttributes: {
                    targetScrollWidth: t.scrollWidth,
                    targetClientWidth: t.clientWidth,
                    targetScrollHeight: t.scrollHeight,
                    targetClientHeight: t.clientHeight
                }
            })
        }, 750),
        En = Fi("left_click"),
        kn = e => {
            e.button === 2 && Sn("right_click", e)
        },
        Wi = () => {
            $e || (window.addEventListener("click", En, Q), window.addEventListener("mousedown", kn, Q), window.addEventListener("keydown", In, Q), window.addEventListener("scroll", Un, Q), $e = !0, Vi(), Hi())
        },
        ji = () => {
            $e && (window.removeEventListener("click", En, Q), window.removeEventListener("mousedown", kn, Q), window.removeEventListener("keydown", In, Q), window.removeEventListener("scroll", Un, Q), $e = !1)
        },
        zi = 3e4;
    let ve = 0;
    const b = {
            isRecording: !1,
            scrollEventUuids: {},
            stopRecording: () => {}
        },
        D = (() => {
            const e = E.getItem("sprig.sessionId");
            if (e) return p(`Found saved session id: ${e}`), E.removeItem("sprig.sessionId"), e;
            const t = oe();
            return p(`Generating new uuid: ${t}`), t
        })(),
        Gi = async e => {
            var t;
            if ((t = window.navigator.storage) != null && t.estimate) {
                const {
                    quota: n = 0,
                    usage: i = 0
                } = await window.navigator.storage.estimate();
                return (n - i) / 1024 ** 3 >= e
            }
            return !0
        },
        _n = () => {
            E.setItem("sprig.disableReplayRecording", "disabled")
        },
        re = () => !!E.getItem("sprig.disableReplayRecording");
    window.addEventListener("beforeunload", () => {
        p(`Before page unload saving session id: ${D}`), E.setItem("sprig.sessionId", D)
    });
    const qi = async () => {
            const t = (await v.getPendingCaptures({
                    isHeatmap: !0
                })).map(i => ({
                    eventId: i.captureParams.eventId,
                    uuid: i.uuid
                })),
                n = [];
            t.forEach(({
                eventId: i,
                uuid: r
            }) => {
                Vt(i) || n.push(r)
            }), n.length && C(() => v.markPendingHeatmapsReady(n), "Error marking pending heatmaps ready")
        },
        Ki = e => {
            if (e > 1) {
                ve = 0;
                return
            }
            const t = Date.now();
            if (!ve) {
                ve = t;
                return
            }
            t - ve >= zi && (ve = 0, C(() => v.markPendingHeatmapsReady(), "Error marking pending heatmaps ready"))
        },
        mt = e => e && e.trim().substring(0, 500).replace(/\s\s+/g, " ").replace(/\r?\n|\r/g, " ").substring(0, 250),
        O = (e, t) => {
            var n, i;
            if (b.isRecording) try {
                (i = (n = window.rrwebRecord) == null ? void 0 : n.addCustomEvent) == null || i.call(n, e, t)
            } catch (r) {
                Fe("Error recording custom event", r)
            }
        },
        Yi = e => {
            e.description && (e.description = mt(e.description)), O("Sprig_PageView", e)
        },
        Ji = e => {
            var t;
            (t = e == null ? void 0 : e.elementAttributes) != null && t.text && (e.elementAttributes.text = mt(e.elementAttributes.text)), O("Sprig_Click", e)
        },
        Qi = e => {
            O("Sprig_TrackEvent", e)
        },
        Xi = e => {
            O("Sprig_ShowSurvey", e)
        },
        Zi = e => {
            O("Sprig_SubmitSurvey", e)
        },
        es = e => {
            O("Sprig_Refresh", e)
        },
        ts = e => {
            e.currentPageTitle && (e.currentPageTitle = mt(e.currentPageTitle)), O("Sprig_BackForward", e)
        },
        ns = e => {
            O("Sprig_Keystroke", e)
        },
        rs = async e => {
            const {
                x: t,
                xPath: n,
                y: i
            } = e, r = b.scrollEventUuids[n];
            if (r) return C(async () => {
                var a, c, l, d;
                const s = await v.openDB(),
                    o = await s.get("events", r);
                if (o != null && o.event) {
                    const u = JSON.parse(o.event),
                        y = t > ((c = (a = u.data) == null ? void 0 : a.payload) == null ? void 0 : c.x),
                        w = i > ((d = (l = u.data) == null ? void 0 : l.payload) == null ? void 0 : d.y);
                    if (!(y || w)) return null;
                    y && (u.data.payload.x = t), w && (u.data.payload.y = i), u.data.payload.elementAttributes = e.elementAttributes, o.event = JSON.stringify(u), await s.put("events", o)
                } else O("Sprig_Scroll", e)
            }, "Error updating scroll event");
            O("Sprig_Scroll", e)
        },
        is = () => b.isRecording,
        Rn = () => {
            b.stopRecording && (b.stopRecording(), b.stopRecording = void 0), b.isRecording = !1, ["cleanupInterval", "noopInterval", "pendingCheckInterval"].forEach(e => {
                b[e] && (clearInterval(b[e]), b[e] = void 0)
            }), ji()
        },
        ss = ["did not allow mutations", "called in an invalid security context"],
        os = e => {
            if (!e) return !0;
            for (const t of ss)
                if (e.toLowerCase().includes(t)) return !1;
            return !0
        },
        as = (e, t, {
            reportError: n = !0,
            extraInfo: i
        }) => {
            re() || t instanceof Error && (_n(), os(t == null ? void 0 : t.message) && (n && window.UserLeap.reportError(e, t, i), v.clearAll()))
        },
        cs = async (e, t, {
            reportError: n
        } = {
            reportError: !0
        }) => {
            var r;
            let i;
            try {
                if (n && ((r = window.navigator.storage) != null && r.estimate)) {
                    const {
                        quota: s = 0,
                        usage: o = 0
                    } = await window.navigator.storage.estimate();
                    i = {
                        availableSpaceInMB: (s - o) / 2 ** 20,
                        quota: s,
                        usage: o
                    }
                }
            } catch (s) {
                window.UserLeap.reportError("Error getting storage estimate", s, {
                    originalMessage: e,
                    originalError: t
                })
            }
            as(e, t, {
                reportError: n,
                extraInfo: i
            })
        },
        Fe = (e, t, {
            reportError: n
        } = {
            reportError: !0
        }) => (Rn(), Pt(`${e} - ${JSON.stringify(t)}`), cs(e, t, {
            reportError: n
        })),
        C = async (e, t) => {
            try {
                await e()
            } catch (n) {
                Fe(t, n)
            }
        },
        ds = () => {
            b.isRecording && C(() => {
                var e, t;
                return (t = (e = window.rrwebRecord) == null ? void 0 : e.takeFullSnapshot) == null ? void 0 : t.call(e, !0)
            }, "Error recording full snapshot")
        },
        ls = async ({
            surveyId: e,
            responseGroupUuid: t,
            eventDigest: n,
            headers: i
        }) => {
            if (!e || !t) return !1;
            const r = window.UserLeap._API_URL,
                s = await un({
                    surveyId: e,
                    responseGroupUuid: t,
                    eventDigest: n,
                    apiUrl: r,
                    headers: i
                }, !0);
            return !(s != null && s.error)
        },
        Dn = 30,
        us = 1;
    pt("replayStorage").catch(console.error), pt("sprig.replay").catch(console.error);
    class ps {
        openDB() {
            return Ri("sprigReplay", us, {
                upgrade: (t, n, i) => {
                    if (i === 0 && E.setItem("sprig.pendingCount", "0"), !t.objectStoreNames.contains("events")) {
                        const r = t.createObjectStore("events", {
                            keyPath: "uuid"
                        });
                        r.createIndex("sessionId", "sessionId"), r.createIndex("timestamp", "timestamp"), r.createIndex("[sessionId+timestamp]", ["sessionId", "timestamp"])
                    }
                    if (!t.objectStoreNames.contains("chunkUploads")) {
                        const r = t.createObjectStore("chunkUploads", {
                            keyPath: "uuid"
                        });
                        r.createIndex("sessionId", "sessionId"), r.createIndex("timestamp", "timestamp"), r.createIndex("[sessionId+status]", ["sessionId", "status"]), r.createIndex("[uploadId+status]", ["uploadId", "status"]), r.createIndex("[sessionId+status+uploadId]", ["sessionId", "status", "uploadId"])
                    }
                    if (!t.objectStoreNames.contains("pendingCaptures")) {
                        const r = t.createObjectStore("pendingCaptures", {
                            keyPath: "uuid"
                        });
                        r.createIndex("sessionId", "sessionId"), r.createIndex("timestamp", "timestamp"), r.createIndex("[sessionId+targetTimestamp]", ["sessionId", "targetTimestamp"])
                    }
                }
            })
        }
        constructor() {
            this.openDB().catch(t => {
                Pt(`Error opening replay storage: ${t.message}`), _n(), t.name === "VersionError" && pt("sprigReplay").catch(console.error)
            })
        }
        async bulkAdd(t, n) {
            const i = (await this.openDB()).transaction(t, "readwrite");
            return Promise.all([...n.map(r => i.store.add(r)), i.done])
        }
        async clearAll() {
            const t = (await this.openDB()).transaction(["events", "chunkUploads", "pendingCaptures"], "readwrite");
            return Promise.all([t.objectStore("events").clear(), t.objectStore("chunkUploads").clear(), t.objectStore("pendingCaptures").clear()])
        }
        async deleteBySessionId(t, n) {
            const i = IDBKeyRange.only(n),
                r = (await this.openDB()).transaction(t, "readwrite");
            let o = await r.store.index("sessionId").openCursor(i);
            for (; o;) o.delete(), o = await o.continue();
            await r.done
        }
        async updatePartial(t, n, i) {
            const s = (await this.openDB()).transaction(t, "readwrite"),
                o = await s.store.get(n);
            o && await s.store.put({ ...o,
                ...i
            }), await s.done
        }
        async deleteRowsBefore(t, n, i = () => !0) {
            const r = IDBKeyRange.upperBound(n, !0),
                s = (await this.openDB()).transaction(t, "readwrite");
            let a = await s.store.index("timestamp").openCursor(r);
            for (; a;) i(a.value) && a.delete(), a = await a.continue();
            await s.done
        }
        async getEventsBetween(t, n = Date.now()) {
            if (t >= n) return Promise.resolve([]);
            const i = IDBKeyRange.bound([D, t], [D, n], !1, !0);
            return (await this.openDB()).getAllFromIndex("events", "[sessionId+timestamp]", i)
        }
        async updateEventsExpiredAt(t, n, i = Dn) {
            const r = new Date,
                s = r.setMinutes(r.getMinutes() + (i ? ? Dn)),
                o = (await this.openDB()).transaction("events", "readwrite"),
                a = o.store.index("[sessionId+timestamp]"),
                c = IDBKeyRange.bound([D, t], [D, n], !1, !0);
            let l = await a.openCursor(c);
            for (; l;) l.update({ ...l.value,
                expiredAt: s
            }), l = await l.continue();
            await o.done
        }
        async deleteChunkUploads(t, n) {
            const i = IDBKeyRange.only([n, t]),
                r = (await this.openDB()).transaction("chunkUploads", "readwrite");
            let o = await r.store.index("[uploadId+status]").openCursor(i);
            for (; o;) o.delete(), o = await o.continue();
            await r.done
        }
        async getChunkUploadsByStatus({
            sessionId: t,
            status: n,
            uploadId: i
        }) {
            const s = (await this.openDB()).transaction("chunkUploads", "readonly"),
                o = i ? s.store.index("[uploadId+status]") : s.store.index("[sessionId+status]"),
                a = i ? IDBKeyRange.only([i, n]) : IDBKeyRange.only([t, n]);
            return o.getAll(a)
        }
        async getPendingCaptures(t = {}) {
            return (await (await this.openDB()).getAllFromIndex("pendingCaptures", "sessionId", D)).filter(r => !t.beforePresent || r.targetTimestamp < Date.now()).filter(r => !t.isHeatmap || (r.captureParams.isHeatmap ? ? !1))
        }
        async markPendingCaptureToCanUpload(t) {
            const n = (await this.openDB()).transaction("pendingCaptures", "readwrite");
            let r = await n.store.index("sessionId").openCursor(D);
            for (; r;) {
                const s = r.value;
                s.captureParams.responseGroupId === t && r.update({ ...s,
                    canUpload: !0
                }), r = await r.continue()
            }
            await n.done
        }
        async markPendingHeatmapsReady(t) {
            if (parseInt(E.getItem("sprig.pendingCount") ? ? "0") === 0) return null;
            const i = Date.now(),
                r = (await this.openDB()).transaction("pendingCaptures", "readwrite");
            let o = await r.store.index("sessionId").openCursor(D);
            for (; o;) {
                const a = o.value;
                a.captureParams.isHeatmap && (!t || t.includes(a.uuid)) && o.update({ ...a,
                    targetTimestamp: i,
                    captureParams: { ...a.captureParams,
                        triggerTimestamp: i,
                        replayParams: { ...a.captureParams.replayParams,
                            replayDurationSeconds: Math.floor((i - a.timestamp) / 1e3)
                        }
                    }
                }), o = await o.continue()
            }
            await r.done
        }
    }
    const v = new ps,
        ws = async (e, t, n) => new Promise((i, r) => {
            const s = e.createElement("script");
            s.src = t, s.onload = i, s.onerror = r, n && (s.nonce = n), e.head.appendChild(s)
        }),
        xn = async (e, t) => {
            const n = performance.now();
            let i;
            try {
                i = await e()
            } finally {
                const r = performance.now() - n;
                let s = ge[t];
                s || (s = F(t)), s.report(r / 1e3)
            }
            return i
        },
        Cn = (e, t) => {
            const n = performance.now();
            try {
                e()
            } finally {
                const i = performance.now() - n;
                let r = ge[t];
                r || (r = F(t)), r.report(i / 1e3)
            }
        };
    let An = 1,
        gt = 5e3,
        Ve = 6e4;
    const Tn = 1e3,
        fs = 5,
        Pn = 30,
        He = Pn + fs;
    let On = Date.now(),
        X, yt = !!E.getItem("sprig.isCapturingHeatmap"),
        ht = !1,
        vt = [];
    const ms = async ({
            viewDocument: e,
            maxReplayDurationSeconds: t,
            replayNonce: n,
            maxInflightRequests: i = 2,
            replaySettings: r,
            teardownAfter: s = !1
        }) => {
            X = E.getItem("sprig.pendingCount"), !b.isRecording && (s && E.setItem("sprig.teardownAfterCapture", "true"), await C(async () => {
                if (re()) {
                    p("Not initializing replay because recording is disabled");
                    return
                }
                if (!t) {
                    p("Not initializing replay because config didn't specify maxReplayDurationSeconds");
                    return
                }
                if (r != null && r.minAvailableGb && (An = r.minAvailableGb), !await Gi(An)) {
                    Ge("Minimum storage not available");
                    return
                }
                if (p("Initializing replay"), r != null && r.minDuration && (gt = r.minDuration), r != null && r.batchDuration && (Ve = r.batchDuration), bi(i), Is(), vs(t + He, 30 * 60, t + He), bs(), !window.rrwebRecord) {
                    p("Loading recording script");
                    const l = window.UserLeap.replayLibraryURL ? ? "https://cdn.sprig.com/dependencies/record-2.0.0-alpha.6.min.js";
                    await ws(e, l, n), p("Recording script finished loading")
                }
                const o = window.rrwebRecord;
                if (!o) {
                    Ge("Record script failed to set global function");
                    return
                }
                let a = !0,
                    c = 0;
                b.stopRecording = o({
                    checkoutEveryNms: Pn * 1e3,
                    sampling: {
                        input: "last",
                        scroll: 250,
                        media: 800
                    },
                    emit: (l, d) => {
                        if (re()) return;
                        if (On = Date.now(), d && l.type === Be.Meta) c = performance.now();
                        else if (d && c && l.type === Be.FullSnapshot) {
                            const y = performance.now() - c;
                            Qt("sdk_replay_snapshot_seconds", y / 1e3)
                        }
                        const u = a || !!d && l.type === Be.Meta;
                        a = !1, gs({
                            uuid: oe(),
                            event: JSON.stringify(l),
                            isValidStart: u,
                            timestamp: Date.now()
                        })
                    },
                    ...r
                }), b.isRecording = !!b.stopRecording, b.isRecording && (b.noopInterval || (b.noopInterval = window.setInterval(() => {
                    Date.now() - On > Tn && O("Sprig_Noop", {})
                }, Tn)), m.on("survey.complete", l => {
                    Zi({
                        id: l,
                        userAgent: window.navigator.userAgent
                    })
                }), Wi())
            }, "Error initializing replay"))
        },
        gs = e => {
            var t, n, i, r;
            if ((t = e.event) != null && t.includes("Sprig_Scroll")) {
                const s = (r = (i = (n = JSON.parse(e.event)) == null ? void 0 : n.data) == null ? void 0 : i.payload) == null ? void 0 : r.xPath;
                if (!s) return;
                b.scrollEventUuids[s] = e.uuid
            }
            vt.push(e), ht || hs()
        },
        ys = async e => {
            const t = e.map(n => ({ ...n,
                sessionId: n.sessionId ? ? D
            }));
            if (yt && Ki(t.length), t.length !== 0) return C(() => v.bulkAdd("events", t), "Error storing replay events")
        },
        hs = () => {
            ht = !0, setTimeout(async () => {
                if (re()) return;
                const e = vt;
                vt = [], ht = !1, Cn(async () => {
                    await ys(e)
                }, "sdk_replay_add_event_batch_seconds")
            }, 500)
        },
        vs = (e, t, n) => {
            b.cleanupInterval = window.setInterval(() => {
                const i = Date.now();
                re() || (ue(`Performing periodic replay data cleanup / Event Seconds ${e} / Chunk Seconds ${t} / Pending Capture Seconds ${n}`), xn(() => C(async () => {
                    await Promise.all([v.deleteRowsBefore("events", i - e * 1e3, r => r.expiredAt === void 0 || r.expiredAt < i - e * 1e3), v.deleteRowsBefore("chunkUploads", i - t * 1e3), v.deleteRowsBefore("pendingCaptures", i - n * 1e3, r => !r.canUpload)])
                }, "Error deleting table rows"), "sdk_replay_cleanup_seconds"), p("Cleanup complete"))
            }, 3e4)
        },
        bs = () => {
            b.pendingCheckInterval = window.setInterval(async () => {
                C(async () => {
                    const e = parseInt(X ? ? "0");
                    if (e === 0) return;
                    const t = await v.getPendingCaptures({
                            beforePresent: !0
                        }),
                        n = await v.openDB();
                    await Promise.all(t.map(async i => (await n.delete("pendingCaptures", i.uuid), Fn(i.captureParams, i.canUpload)))), X = (e - t.length).toString(), E.setItem("sprig.pendingCount", X)
                }, "Error initiating pending captures")
            }, 5e3)
        },
        Ls = async (e, t, n, i, r) => {
            const s = Math.min(e + r, n),
                o = `from: ${new Date(e).toLocaleTimeString()} to ${new Date(s).toLocaleTimeString()}`;
            p(`Getting event batch ${o}`);
            const a = await xn(() => v.getEventsBetween(e, s), "sdk_replay_get_events_between_seconds");
            if (!(a != null && a.length)) return p(`No events found ${o}`), {
                validStartFound: i,
                events: []
            };
            if (!i) {
                p(`Searching for valid start in ${a.length} events ${o}`);
                let c = -1;
                if (a == null || a.forEach((d, u) => {
                        if (!d.isValidStart) return;
                        const y = d.timestamp <= t;
                        (c < 0 || y) && (c = u)
                    }), c < 0) return p(`No valid start found in ${a.length} events ${o}`), {
                    validStartFound: i,
                    events: []
                };
                const l = a[c].timestamp;
                return p(`Found valid start at: ${new Date(l).toLocaleTimeString()} in events ${o}`), {
                    validStartFound: !0,
                    events: a == null ? void 0 : a.slice(c)
                }
            }
            return {
                validStartFound: i,
                events: a
            }
        },
        Ss = (e, t, n) => {
            const i = e.length,
                r = t * 1024 * 1024,
                s = Math.ceil(i / n),
                o = Math.max(r, s);
            p(`Total file bytes: ${i} / target chunk size: ${o}`);
            const a = [];
            let c = 0;
            for (; c < i;) a.push(e.slice(c, c + o)), c += o;
            return a
        },
        Mn = e => Promise.all(e.map(async t => {
            const n = await Li(t);
            return await v.updatePartial("chunkUploads", t.uuid, {
                data: null,
                etag: n,
                status: "UploadComplete"
            }), t.uploadId
        })),
        Bn = async e => {
            p(`Marking upload complete if finished: ${e}`);
            const t = await v.getChunkUploadsByStatus({
                status: "UploadComplete",
                uploadId: e
            });
            if (!(t != null && t.length)) {
                p(`No finished chunks found for upload: ${e}`);
                return
            }
            const n = t.reduce((s, o) => (s.find(a => a.chunkIndex === o.chunkIndex) || s.push(o), s), []);
            n.sort((s, o) => s.chunkIndex - o.chunkIndex);
            const i = n.map(s => ({
                    ETag: s.etag,
                    PartNumber: s.chunkIndex
                })).filter(s => s.ETag !== null),
                r = n[0];
            await un({
                apiUrl: r.apiUrl,
                surveyId: r.surveyId,
                uploadId: e,
                responseGroupUuid: r.responseGroupId,
                etags: i,
                headers: r.completeUploadHeaders,
                replayDuration: r.replayDuration
            }), p(`Cleaning up chunks for ${e}`), await v.deleteChunkUploads("UploadComplete", e), p(`Done cleaning up chunks for ${e}`)
        },
        Is = async () => {
            C(async () => {
                const e = await v.getChunkUploadsByStatus({
                    sessionId: D,
                    status: "ReadyForUpload"
                });
                if (!(e != null && e.length)) return;
                const t = await Mn(e);
                p(`Finished uploading unfinished chunks for ${t}`), t != null && t.length && await Promise.all(t.map(n => {
                    if (n) return Bn(n)
                }))
            }, "Error uploading unfinished chunks")
        },
        Us = async (e, t) => {
            await Mn(t), p(`Done uploading chunks for uploads: ${e.join(",")}`), await Promise.all(e.map(n => Bn(n)))
        },
        Es = e => {
            let t = 0;
            e.forEach(r => {
                t += r.length
            });
            const n = new Uint8Array(t);
            let i = 0;
            return e.forEach(r => {
                n.set(r, i), i += r.length
            }), n
        },
        Nn = async (e, t, n) => {
            const i = new TextEncoder;
            let r = null,
                s = null,
                o = null,
                a = !1,
                c = !1,
                [l, d] = [0, 0];
            const u = e - He * 1e3,
                y = [];
            let w = [];
            p(`Getting events between ${new Date(e).toLocaleTimeString()} and ${new Date(t).toLocaleTimeString()}`), p(`Using batch duration: ${Ve}ms`);
            for (let k = u; k < t; k += Ve) {
                if ({
                        validStartFound: c,
                        events: w
                    } = await Ls(k, e, t, c, Ve), !(w != null && w.length)) {
                    p("No events found");
                    continue
                }
                l === 0 && (l = w[0].timestamp), d = w[w.length - 1].timestamp, p(`Last event time in batch: ${new Date(d).toLocaleTimeString()}`);
                const V = `${a?",":"["}${w.map(I=>I.event).join(",")}`,
                    ie = i.encode(V);
                n && s === null && (ue("Attempting compression"), o = new window.CompressionStream("gzip"), s = o.writable.getWriter()), Cn(() => {
                    n && s ? s.write(ie) : y.push(ie)
                }, "sdk_replay_compression_seconds"), a = !0
            }
            if (d - l < gt) return p(`Replay duration is shorter than minimum of ${gt}ms / Start:${l} / End:${d}`), null;
            const g = i.encode("]");
            return ue("Writing final close brace"), s && o ? (s.write(g), s.close(), r = new Uint8Array(await new Response(o.readable).arrayBuffer())) : (y.push(g), r = Es(y)), p("Finished generating file data"), r
        },
        ks = async (e, t) => {
            const n = window.CompressionStream !== void 0;
            let i = null;
            const r = t ? ? Date.now(),
                s = r - e;
            try {
                i = await Nn(s, r, n)
            } catch (o) {
                o instanceof Error && window.UserLeap.reportError("Error compressing replay", o), n && C(async () => {
                    await Nn(s, r, !1)
                }, "fileData fallback failed")
            }
            return i
        },
        $n = async e => {
            const {
                surveyId: t,
                responseGroupId: n,
                visitorId: i,
                apiUrl: r,
                completeUploadHeaders: s,
                replayParams: o,
                triggerTimestamp: a
            } = e, c = await ks(o.replayDurationSeconds * 1e3, a);
            if (c != null && c.length) p(`Found file data for survey: ${t}`);
            else {
                p(`File data is empty for survey: ${t}`);
                return
            }
            const l = Ss(c, o.minimumChunkSizeMb, o.signedUrls.length);
            p(`Got ${l.length} chunks for survey: ${t}`);
            const d = await Promise.all(l.map(async (u, y) => {
                const w = oe(),
                    g = {
                        apiUrl: r,
                        chunkIndex: y + 1,
                        completeUploadHeaders: s,
                        etag: null,
                        responseGroupId: n,
                        status: "ReadyForUpload",
                        surveyId: t,
                        timestamp: a,
                        totalChunks: l.length,
                        data: u,
                        uploadId: o.uploadId,
                        uploadUrl: o.signedUrls[y].url,
                        uuid: w,
                        visitorId: i
                    };
                return p(`Recording chunk upload: ${JSON.stringify({index:g.chunkIndex,surveyId:g.surveyId,uploadId:g.uploadId,size:u.length,id:w},null,2)}`), await (await v.openDB()).add("chunkUploads", { ...g,
                    sessionId: g.sessionId ? ? D
                }), p(`Done creating chunk upload: ${w}`), g
            }));
            p(`All chunk records created. Beginning upload for survey: ${t}`), await Us([o.uploadId], d)
        },
        Fn = async (e, t) => {
            if (p(`Attempting replay capture: ${JSON.stringify({isStandalone:e.isStandalone,duration:e.replayParams.replayDurationSeconds,type:e.replayParams.replayDurationType,responseGroupId:e.responseGroupId,surveyId:e.surveyId,triggerTimestamp:e.triggerTimestamp,visitorId:e.visitorId},null,2)}`), re()) return p(`Replay recording is disabled: ${e.surveyId}`);
            p(`Replay recording enabled: ${e.surveyId}`);
            const {
                isHeatmap: n,
                isStandalone: i,
                replayParams: r,
                triggerTimestamp: s,
                responseGroupId: o
            } = e, a = async () => {
                setTimeout(() => m.removeListener(f.QuestionAnswered, a), 0), C(async () => {
                    r.replayDurationType === "before" ? await $n(e) : await v.markPendingCaptureToCanUpload(o)
                }, "Error in schedule/capture callback")
            };
            C(async () => {
                if (r.replayDurationType === "after" || r.replayDurationType === "beforeAndAfter") {
                    !i && !n && (p("Attaching QuestionAnswered listener for non-standalone replay"), m.on(f.QuestionAnswered, a)), p(`Scheduling capture for replay of type: ${r.replayDurationType}`), await Hn(e);
                    return
                }
                if (i || n || t) p(`Proceeding to capture replay for survey: ${e.surveyId} / standalone? ${i} / canUpload? ${t}`), await $n(e), n && _s();
                else {
                    const l = He + r.replayDurationSeconds,
                        d = s - l * 1e3,
                        u = s;
                    p(`Setting expiry minutes to ${r.expirationTimeLimitMinutes} for events from ${new Date(d).toLocaleTimeString()} to ${new Date(u).toLocaleTimeString()}`), await v.updateEventsExpiredAt(d, u, r.expirationTimeLimitMinutes), p("Attaching QuestionAnswered listener"), m.on(f.QuestionAnswered, a)
                }
            }, "Error in scheduling/capturing replay")
        },
        _s = async () => {
            parseInt(X ? ? "0") || (E.removeItem("sprig.isCapturingHeatmap"), yt = !1), E.getItem("sprig.teardownAfterCapture") && (Rn(), Vn(), E.removeItem("sprig.teardownAfterCapture"))
        },
        Vn = () => {
            if (re()) {
                ue("Not clearing user data, replay is disabled");
                return
            }
            return Promise.all([v.deleteBySessionId("events", D), v.deleteBySessionId("pendingCaptures", D)]).catch(e => {
                Fe("Error clearing user replay data", e)
            })
        },
        Hn = async e => {
            p(`Scheduling replay capture: ${JSON.stringify(e)}`);
            const {
                isHeatmap: t,
                surveyId: n
            } = e, i = await v.getPendingCaptures(), r = i == null ? void 0 : i.filter(c => c.captureParams.surveyId === n);
            if (r != null && r.length) {
                p(`Pending capture exists for survey: ${n}`);
                return
            }
            t && (ds(), yt = !0, E.setItem("sprig.isCapturingHeatmap", "true"));
            const s = { ...e,
                replayParams: { ...e.replayParams
                }
            };
            e.replayParams.replayDurationType === "beforeAndAfter" && (s.replayParams.replayDurationSeconds *= 2), s.replayParams.replayDurationType = "before";
            const o = e.triggerTimestamp + e.replayParams.replayDurationSeconds * 1e3;
            s.triggerTimestamp = o, X = (parseInt(X ? ? "0") + 1).toString(), E.setItem("sprig.pendingCount", X), await (await v.openDB()).add("pendingCaptures", {
                canUpload: !1,
                captureParams: s,
                sessionId: D,
                targetTimestamp: o,
                timestamp: Date.now(),
                uuid: oe()
            })
        };
    or(Object.freeze(Object.defineProperty({
        __proto__: null,
        RecordEvent: Qi,
        RecordPageView: Yi,
        RecordSurveyShown: Xi,
        _completeSessionReplay: ls,
        checkPendingHeatmapsUrl: qi,
        clearUserReplayData: Vn,
        disableRecording: Fe,
        initializeReplay: ms,
        isReplayRecording: is,
        scheduleCapture: Hn,
        scheduleOrCaptureReplay: Fn,
        tryReplayAction: C
    }, Symbol.toStringTag, {
        value: "Module"
    })));
    const Rs = "sprig-web-view-sdk";
    let Wn;
    Wn = {
        path: `https://cdn.sprig.com/${Rs}-v2.31.2.js`
    }, hi(Wn)
})();

//# debugId=09812f48-7323-50d2-9bb0-e02808faef7d