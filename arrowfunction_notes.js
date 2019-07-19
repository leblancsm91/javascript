//arrow
prevItem = () => {
	console.log("Div is clicked")
}

render(){
	return (
		<SecondClass prevItem={this.prevItem} />
	)
}

//onclick
<ThirdClass type="prev" onClick={this.props.prevItem} />



//DRILL
//onclick
onClick = {function(){model.clicks += 1; render(); }}

//arrow
clicks = () += {
	function()
}

render(){
	return (
		<clicks={this.model.clicks}/>
}