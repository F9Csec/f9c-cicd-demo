import test from "node:test";
import assert from "node:assert/strict";

import { getStatus } from "../public/app.js";

test("F9C application should be online", () => {

    assert.equal(
        getStatus(),
        "F9C CI/CD PIPELINE ONLINE"
    );

});
