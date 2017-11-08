export class PersonalDataModel {

private _name: String;
private _surname: String;
private _pesel: Number;

public constructor(name:String, surname:String, pesel:Number){
  this._name = name;
  this._surname = surname;
  this._pesel = pesel;
}

 get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

 get surname(): String {
    return this._surname;
  }

  set surname(value: String) {
    this._surname = value;
  }
   get pesel(): Number {
    return this._pesel;
  }

  set pesel(value: Number) {
    this._pesel = value;
  }


}
