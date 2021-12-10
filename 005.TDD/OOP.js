// 객체 지향

// 1. 모듈 패턴
function Person() {
    let age = 35;

    return {
        getAge: function () { return age },
        setAge: function (data) { age = data }
    }
}

const person = Person();
console.log(person.getAge());