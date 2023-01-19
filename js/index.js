Array.prototype.getRandom = function(){
	return this[Math.floor(Math.random() * this.length)];
};
const rickrolls = ["https://www.youtube.com/watch?v=iZxfGaiUzCI", "https://www.youtube.com/watch?v=BrEFfqpwI9o"];
const $img = $("#dogaas-img");

jQuery(document).ready(async ()=> {
	const response = await fetch("https://dog.ceo/api/breeds/image/random");
	$img.attr('src', (await response.json()).message);
	
	$img.click(() => location.href = rickrolls.getRandom());
});
