import App from './App.svelte';
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> */}

const app = new App({
	target: document.querySelector("#root"),
	props: {
		ready: false
	}
	

});
	window.initMap = function (){
			app.$set({ready: true});
	}

export default app;