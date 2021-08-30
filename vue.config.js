module.exports = {
	publicPath:
		process.env.NODE_ENV === 'production'
			? '/covid-tracker/' // test20200915 為 repo 名稱
			: '/',
};
