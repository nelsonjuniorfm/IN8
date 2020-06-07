export const validateEmail = email => {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const d8Mask = value => {
	return value
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '($1)$2')
		.replace(/(\d{4})(\d{1,2})/, '$1-$2')
		.replace(/(-\d{4})\d+?$/, '$1');
};

const d9Mask = value => {
	return value
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '($1)$2')
		.replace(/(\d{5})(\d{1,2})/, '$1-$2')
		.replace(/(-\d{4})\d+?$/, '$1');
};

export const celularMask = value => {
	if (value.length <= 13) {
		return d8Mask(value);
	}
	return d9Mask(value);
};

export const dataMask = value => {
	return value
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '$1/$2')
		.replace(/(\d{2})(\d{1,2})/, '$1/$2')
		.replace(/(\d{4})\d+?$/, '$1');
};

export const soNumero = value => {
	const aux = value.replace(/\D/g, '');
	return aux;
};
