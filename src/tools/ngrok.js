#!/usr/bin/env node

"use strict";

const ngrok = require("ngrok");
const qrcode = require("qrcode-terminal");
const chalk = require("chalk");

async function main() {
    const {
        argv
    } = process;
    const args = argv.slice(2);

    const options = {
        port: args && args.length ? args[0] : 3000
    };

    const url = await ngrok.connect({
        port: options.port,
        host_header: "localhost"
    });

    const code = await new Promise(resolve =>
        qrcode.generate(url, {
            small: true
        }, qr => resolve(qr))
    );

    const output = [
        `---------------------------`,
        `> ngrok http ${options.port}`,
        `---------------------------`,
        chalk.underline.cyan(url),
        `---------------------------`,
        code
    ].join("\r\n");

    console.log(output);
}

main()
    .then(() => {})
    .catch(err => {
        console.error(err);
        process.exit(1);
    });