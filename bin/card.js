#!/usr/bin/env node


const c = require('chalk')
const boxen = require("boxen");

const boxOptions = {
  padding: 1,
  margin: 1,
  bordStyle: "round"
};

const spacer = { label: "", value: "" };
const data = {
  me: {
    center: `Abin Simon ${c.grey("|")} ${c.green("@meain")}`
  },
  work: {
    center: `Research Engineer ${c.blue("@Saama")}`
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
    value: c.red(`npx meain`)
  },
  web: {
    center: `${c.green("mail")}@meain.io ${c.grey("|")} ${c.green(
      "meain"
    )}.io`
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

console.info(c.green(boxen(text, boxOptions)));
