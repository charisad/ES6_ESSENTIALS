/*We use the get keyword followed by a function.
We use an
if ...else conditional to check
if both _firstName and _lastName exist(by making sure they both
    return truthy values) and then
return a different value depending on the result.
We can access the calling object’ s internal properties using this.In fullName, we’ re accessing both this._firstName and this._lastName.
In the last line we call fullName on person.In general, getter methods do not need to be called with a set of parentheses.Syntactically, it looks like we’ re accessing a property.
 Now that we’ ve gone over syntax,
let’ s discuss some notable advantages of using getter methods:

Getters can perform an action on the data when getting a property.
Getters can return different values using conditionals.
In a getter, we can access the properties of the calling object using this.
The functionality of our code is easier for other developers to understand.*/