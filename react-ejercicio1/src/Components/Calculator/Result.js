function Result(props){
    let a = parseInt(props.a);
    let b = parseInt(props.b);
    let result = 0;

    console.log(a);
    console.log(b);

    if(isNaN(a) || isNaN(b)){
        result = "";
    } else {
        switch(props.op){
            case "+":
                result = a+b;
                break;
            
            case "-":
                result = a-b;
                break;
            
            case "x":
                result = a*b;
                break;
    
            case "/":
                result = a/b;
                break;
        }
    }

    

    return (<><h3>{result}</h3></>);
}

export default Result;