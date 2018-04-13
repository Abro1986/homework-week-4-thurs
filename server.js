const express = require('express'); 
const app = express();

const videos = [
    {id: 1, title: "America is the Greatest Country in the United States", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
    {id: 2, title: "Micheal Che Matters", url: "https://www.netflix.com/watch/80049871?trackId=13752289&tctx=0%2C0%2C"},
    {id: 3, title: "Baby Cobra", url: "https://www.netflix.com/watch/80101493?trackId=13752290&tctx=1%2C1%2C"}
  ];


const comedys = [
	{id: 1, comedian: "Mike birbilia", video: "my girlfriends boyfriend"},
	{id: 2, comedian: "Tom Segura", video: "video 2"},	
  ];  


const fishRecords = [
	{id: 1, Species: "Brown", recordlengthCo: "43 inches", recordweight: "43 lbs"},
	{id: 2, Species: "Rainbow", recordlengthCo: "40 inches", recordweight: "40 lbs"},
	{id: 3, Species: "Brook", recordlengthCo: "28 inches", recordweight: "13 lbs"}	
  ];    

//return videos by id
app.get('/videos/:id', (request, response) => {
	let id = request.params.id
	let video = videos[id - 1]
	//let video = videos.filter((video) => {video.id === id})[0]
	response.send(video)
});

app.get('/comedy/:id', (request, response) => {
	let id = request.params.id
	let comedy = comedys;
	response.send(comedy[id]);
});



app.get('/fish', (request, response) => {
	//let params = request.params.id
	//let fish = fishRecords;
	response.send(request.params.id);
});



app.get('/things/:id', (request, response) => {
    response.send({
    	things: ['my girlfriends boyfriend', 'video2', 'video3']
    });
});

app.get('/comedians/:id/videos/:id', (request, response) => {
    response.send("all comedians");
});

app.get('/comedians/:id', (request, response) => {
    response.send("comedian by id");
});

app.get('/comedians/:id/videos/', (request, response) => {
    response.send("videos by comedian");
});

app.get('/comedians/:id/videos/:id', (request, response) => {
    response.send("a video by comedian");
});

 app.listen(3000, () => {
     console.log("I am listening");
 });
