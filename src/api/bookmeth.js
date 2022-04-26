import axios from "axios";

export default axios.create({
	baseURL: "https://bookmeth1.p.rapidapi.com",
	headers: {
		'x-rapidapi-key' : process.env.key,
    	'x-rapidapi-host': 'bookmeth1.p.rapidapi.com'
	}
})
