function _callback() {
    function wait(ms, cb) {
        setTimeout(cb, ms);
    }
    function run() {
        console.log("0_c");
        wait(1000, () => {
            console.log("1_c");
            wait(1000, () => {
                console.log("2_c");
                wait(1000, () => {
                    console.log("3_c");
                });
            });
        });
    }
    run();
}
function _promise() {
    function wait(ms) {
        return new Promise(r => setTimeout(r, ms));
    }
    function run() {
        console.log("0_p");
        wait(1000).then(() => {
            console.log("1_p");
        }).then(() => {
            console.log("2_p");
        }).then(() => {
            console.log("3_p");
        });
    }
    run();
}
function _async() {
    function wait(ms) {
        return new Promise(r => setTimeout(r, ms));
    };
    async function run() {
        console.log("0_a");
        await wait(1000);
        console.log("1_a");
        await wait(1000);
        console.log("2_a");
        await wait(1000);
        console.log("3_a");
    }
    run();
}
function _normal() {
    function wait(ms) {
        return new Promise(r => setTimeout(r, ms));
    }
    function run() {
        console.log("0_n");
        wait(1000);
        console.log("1_n");
        wait(1000);
        console.log("2_n");
        wait(1000);
        console.log("3_n");
    }
    run();
}
// _callback();
// _promise();
// _async();
_normal();