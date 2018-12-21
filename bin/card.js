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
  name: {
    label: "",
    value: c.grey(`${c.white.bold("Abin Simon")} | ${c.green("@meain")}`)
  },
  work: {
    label: "",
    value: c.white(`Full stack developer @ ${c.blue("Saama")}`)
  },
  email: {
    label: "email 📧",
    value: c.blue(`${c.green("abinsimon10")}@gmail.com`)
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
  }
};

const card = [
  data.name,
  data.work,
  spacer,
  data.email,
  data.npm,
  data.github,
  data.twitter,
  data.linkedin
];

const maxLabelLen = Object.values(data).reduce(
  (m, d) => Math.max(m, d.label.length),
  0
);
const text = card
  .map(({ label, value }) => {
    const pad = " ".repeat(maxLabelLen - label.length);
    return c.grey(`${pad}${label}  ${value}`);
  })
  .join("\n");

console.info(c.green(boxen(text, boxOptions)));
