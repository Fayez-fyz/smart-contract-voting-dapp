const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VotingModuleV2", (m) => {
  const candidateNames = m.getParameter("candidateNames", [
    "Fayez",
    "Mannan",
    "Amaan",
    "Prince",
  ]);
  const durationInMinutes = m.getParameter("durationInMinutes", 90);
  const voting = m.contract("Voting", [candidateNames, durationInMinutes]);
  return { voting };
});
