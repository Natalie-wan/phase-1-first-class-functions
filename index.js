const receivesAFunction = (callback) => {
    callback(); 
};


const returnsANamedFunction = () => {
    return function namedFunction() {
        return "I am a named function";
    };
};

const returnsAnAnonymousFunction = () => {
    return () => {
        return "I am an anonymous function";
    };
};