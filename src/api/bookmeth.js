import axios from "axios";

export default axios.create({
	baseURL: "https://bookmeth1.p.rapidapi.com",
	headers: {
		'x-rapidapi-key' : '8958585d49msh6be64bb35f213dcp19480bjsnef60cfb60aa1',
    	'x-rapidapi-host': 'bookmeth1.p.rapidapi.com'
	}
})