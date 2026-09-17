import {
    cpSync,
    rmSync,
    existsSync,
    writeFileSync
} from "node:fs";


if (existsSync("dist")) {

    rmSync(
        "dist",
        {
            recursive: true,
            force: true
        }
    );

}


cpSync(
    "public",
    "dist",
    {
        recursive: true
    }
);


writeFileSync(

    "dist/build-info.json",

    JSON.stringify(
        {
            commit: process.env.GITHUB_SHA || "local",
            buildDate: new Date().toISOString()
        },
        null,
        2
    )

);


console.log("F9C Build completed successfully.");
