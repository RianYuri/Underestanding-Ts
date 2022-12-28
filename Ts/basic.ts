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
    