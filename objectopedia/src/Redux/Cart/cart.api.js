import axios from "axios";

export const getCartApi = async (id) => {
	try {
		let res = await axios.get(`https://dataobj.onrender.com/users/${id}`);
		let data = await res.data.cart;
		return data;
	} catch (e) {
		console.log(e);
	}
}

export const deleteCartApi = async (newCart, id) => {
	try {
		let res = await axios.patch(`https://dataobj.onrender.com/users/${id}`, {
			cart: newCart
		});
		let data = await res.data.cart;
		return data;
	} catch (e) {
		console.log(e);
	}
}

export const updateCartApi = async (newCart, id) => {
	try {
		let res = await axios.patch(`https://dataobj.onrender.com/users/${id}`, {
			cart: newCart
		});
		let data = await res.data.cart;
		return data;
	} catch (e) {
		console.log(e);
	}
}

