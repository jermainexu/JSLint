//parse a function and convert it into binary expression
function assert(condition, msg){
	if(!condition){
		throw {
			name: "Assert fail",
			message: msg
		}
	}
}

function getASTForFunction(func){
	if(!(func instanceof Function)){
		throw {
			name: "IllegalArgumentException",
			message: "Expect a function but receive " + func.toString(),
			line: 1
		};
	}

	var ast = ASTParser.parse(func.toString());
	return ast.first[0]; //we only have one statement, which is the function definition
}

function checkArguments(ast){
	//check function argument
	if(!ast.function.parameter || ast.function.parameter.length != 1){
		throw {
			name: "InvalidState",
			message: "Only accept function with one argument"
		};
	}
}

function convertStatement(stmt){
	assert(stmt.arity == "statement", "Invalid statement, expect statement arity but see " + stmt.arity);
	switch(stmt){
		case "return":
			return convertExpression(stmt.first);
		case "if":
		case "var":
			throw 1; //not supported
	}
}

function convertExpression(expr){
	if(expr.arity){
		switch(expr.arity){
			case "infix":
				//handle infix
			case "prefix":
				//handle prefix
			case "suffix":
				//handle suffix
			case "number":
				//handle const number
			case "string":
				//handle string const
		}
	}else if(expr.identifier){
		//handle variable that defined inside this function
		if(!expr.function.scope[expr.string] || expr.function.scope[expr.string].kind != "parameter"){
			//handle variable definition
		}
	}
}

function example(x){
	return x + 5;
}

var ast = getASTForFunction(example);
checkArguments(ast);
convertStatement(ast.block[0]);



