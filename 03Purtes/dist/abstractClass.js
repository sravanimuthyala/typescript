"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    camermode;
    filter;
    constructor(camermode, filter) {
        this.camermode = camermode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex caculation 
        return 8;
    }
}
class instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
    }
    getsepia() {
        console.log("Sepia");
    }
}
const Sravani = new instagram("test", "test", 3);
Sravani.getReelTime();
//# sourceMappingURL=abstractClass.js.map