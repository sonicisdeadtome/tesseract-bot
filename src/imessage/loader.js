var normalizedPath = require("path").join(__dirname, "commands");

module.exports = {
  loadCommands() {
    var commands = {};
    require("fs")
      .readdirSync(normalizedPath)
      .forEach(function(file) {
        const command = require(normalizedPath + "/" + file).default;
        commands[command.getCommand()] = command;
      });
    return commands;
  }
};
