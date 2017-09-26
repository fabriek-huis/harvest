(function(window) {
    "use strict";
    var JobThread = function() {
        this.worker = new Worker(CoinHive.CRYPTONIGHT_WORKER_BLOB);
        this.worker.onmessage = this.onReady.bind(this);
        this.currentJob = null;
        this.jobCallback = function() {};
        this._isReady = false;
        this.hashesPerSecond = 0;
        this.hashesTotal = 0;
        this.running = false;
        this.lastMessageTimestamp = Date.now()
    };
    JobThread.prototype.onReady = function(msg) {
        if (msg.data !== "ready" || this._isReady) {
            throw 'Expecting first message to be "ready", got ' + msg
        }
        this._isReady = true;
        this.worker.onmessage = this.onReceiveMsg.bind(this);
        if (this.currentJob) {
            this.running = true;
            this.worker.postMessage(this.currentJob)
        }
    };
    JobThread.prototype.onReceiveMsg = function(msg) {
        if (msg.data.result) {
            this.jobCallback(msg.data)
        }
        this.hashesPerSecond = this.hashesPerSecond * .5 + msg.data.hashesPerSecond * .5;
        this.hashesTotal += msg.data.hashes;
        this.lastMessageTimestamp = Date.now();
        if (this.running) {
            this.worker.postMessage(this.currentJob)
        }
    };
    JobThread.prototype.setJob = function(job, callback) {
        this.currentJob = job;
        this.jobCallback = callback;
        if (this._isReady && !this.running) {
            this.running = true;
            this.worker.postMessage(this.currentJob)
        }
    };
    JobThread.prototype.stop = function() {
        if (this.worker) {
            this.worker.terminate();
            this.worker = null
        }
        this.running = false
    };
    window.CoinHive.JobThread = JobThread
})(window);