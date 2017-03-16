const Observable = require('FuseJS/Observable')
const ckan = require('ckan')
const resourceList = Observable()

const { resource } = ckan

this.onParameterChanged((param) => {
	resource(param.resources[0].id)()
		.then((response) => {
			resourceList.replaceAll(response)
		})
		.catch((error) => {
			console.log('error', error)
		})
})

const goBack = () => {
	router.goBack()
}
module.exports = {
	goBack,
	resourceList
}