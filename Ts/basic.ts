/*--------------------------------- OBJECT TS ---------------------------------------------------------*/
function add( n1:number, n2:number , showResult: boolean,phrase:string ){
    let result = n1+n2; 
    
        if (showResult){
            console.log(phrase + result);
        }else{
            return n1+n2;
        }
    }
    const number1 = 5;
    const number2 = 2.5;
    const printResult = true;
    const showPhrase = 'Result is: ';
    
    add(number1, number2,printResult,showPhrase);
    
    /*----------------------------------- ARRAY -----------------------------------------------------*/
    const person = {
        name: 'Rian Yuri',
        age: 18,
        hobbies: ['Sports', 'cooking']
    };
    
    let favoriteActivities: string [];
    favoriteActivities = ['Sports'];
    
    console.log(person.name);
    
    for(const hobby of person.hobbies){
        console.log(hobby.toUpperCase());
        // console.log(hobby.map)
    }

    /*----------------------------------- Union Types -----------------------------------------------------*/
function combine (
    input1: number | string,
    input2: number| string){
    let result;
    if(typeof input1 === "number" && typeof input2 === "number"){
        
        result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 29);
console.log(combinedAges);

const combinedNames = combine('Rian', 'Yuri');
console.log(combinedNames);