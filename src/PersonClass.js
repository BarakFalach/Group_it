export class Person
{
    constructor (key,value)
    {
        this.id = key;
        this.strength = value;
    }

    toString()
    {
        return "Id number :" + this.id + " my Strength: " + this.strength;
    }

}