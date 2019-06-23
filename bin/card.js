#!/usr/bin/env node

const boxen = require("boxen");
const c = require("./color");

const boxOptions = {
  padding: 1,
  margin: 1,
  bordStyle: "round"
};

const lc = c.white.bold;

const spacer = { label: "", value: "" };
const data = {
  me: {
    center: c.white(`Abin Simon ${c.grey("|")} ${c.green("@meain")}`)
  },
  work: {
    center: c.white(`Full stack developer ${c.blue("@Saama")}`)
  },
  npm: {
    label: "npm 📦",
    value: c.blue(`https://npmjs.com/~${c.green("meain")}`)
  },
  github: {
    label: "Github 🐙",
    value: c.blue(`https://github.com/${c.green("meain")}`)
  },
  twitter: {
    label: "Twitter 🐦",
    value: c.blue(`https://twitter.com/${c.green("meain_")}`)
  },
  linkedin: {
    label: "Linkedin 🔗",
    value: c.blue(`https://linkedin.com/in/${c.green("meain")}`)
  },
  npx: {
    label: "$",
    value: c.red(`npx ${c.white("meain")}`)
  },
  web: {
    center: c.white(
      `${c.green("abinsimon10")}@gmail.com ${c.grey("|")} ${c.green(
        "meain"
      )}.github.io`
    )
  }
};

const card = [
  data.me,
  data.work,
  spacer,
  data.npm,
  data.github,
  data.twitter,
  data.linkedin,
  spacer,
  data.web
];

const clean = text => text.replace(/\x1b\[[;\d]*[A-Za-z]/g, "");

const maxLen = Object.values(data).reduce((m, d) => {
  const { label = "", value = "", center = "" } = d;
  return Math.max(
    m,
    clean(label).length + clean(value).length + clean(center).length
  );
}, 0);

const maxLabelLen = Object.values(data).reduce((m, d) => {
  const { label = "", value = "", center = "" } = d;
  return Math.max(m, clean(label).length);
}, 0);

const text = card
  .map(({ label = "", value = "", center = "" }) => {
    if (center.length > 0) {
      const pad = " ".repeat((maxLen - clean(center).length) / 2);
      return c.grey(`${pad}${center}`);
    } else {
      const pad = " ".repeat(maxLabelLen - clean(label).length);
      return c.grey(`${pad}${label}  ${value}`);
    }
  })
  .join("\n");

const CURSOR_UP_ONE = "\x1b[1A";
const ERASE_LINE = "\x1b[2K";

let count = 0;
const funs = [c.green, c.blue, c.white, c.grey, c.red, c.yellow, c.orange, c.purple];
setInterval(() => {
  const fun = funs[count % funs.length];
  count++;
  console.info(fun(boxen(text, boxOptions)));
  for (let i = 0; i < 15; i++) process.stdout.write(CURSOR_UP_ONE);
}, 200);
