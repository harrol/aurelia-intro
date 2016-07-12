export class LoggerCustomAttribute {

  valueChanged(newValue, oldValue) {
    console.log(`${newValue} ${oldValue}`);
  }
}
