const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Voting", (m) => {
  const candidateNames = m.getParameter("candidateNames", [
    "Fayez",
    "Mannan",
    "Amaan",
    "Prince",
  ]);
  const durationInMinutes = m.getParameter("durationInMinutes", 1440);
  const voting = m.contract("Voting", [candidateNames, durationInMinutes]);
  return { voting };
});
