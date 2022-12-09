Array.prototype.getRandom = function(){
	return this[Math.floor(Math.random() * this.length)];
};
const randlist = ["https://www.youtube.com/watch?v=JCaP11BfiGw", "https://www.youtube.com/watch?v=JCaP11BfiGw"];
const $img = $("#dogaas-img");

jQuery(document).ready(async ()=> {
	const response = await fetch("https://dog.ceo/api/breeds/image/random");
	$img.attr('src', (await response.json()).message);
	
	$img.click(() => location.href = arr.getRandom());
});
