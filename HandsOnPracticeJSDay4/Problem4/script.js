let signalColor = prompt(
  "Enter the color(red, yellow, green) of the traffic signal:",
).toLowerCase();

switch (signalColor) {
  case "red":
    document.writeln("Stop");
    break;
  case "yellow":
    document.writeln("Get Ready");
    break;
  case "green":
    document.writeln("Go");
    break;
  default:
    document.writeln("Invalid color. Please enter red, yellow, or green.");
}
