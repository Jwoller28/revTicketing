function fun(callback){
	setTimeout(() => {
		const data = { name: 'Alice' };
		callback(data);
	}, 1000);
}	

function display(data){
	console.log('User: ', data.name);
}

fun(data);

