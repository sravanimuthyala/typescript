"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class instagram {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class youtube {
    cameraMode;
    filter;
    burst;
    short;
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createstory() {
        console.log("Story was created");
    }
}
//# sourceMappingURL=second.js.map