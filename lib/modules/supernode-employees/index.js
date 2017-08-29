module.exports = {
	extend: 'apostrophe-pieces',
	name: 'employee',
	label: 'Ansatt',
	pluralLabel: 'Ansatte',
	addFields: [
		{
			name: 'title',
			label: 'Navn',
			type: 'string',
			required: true,
			contextual: true
		},
		{
			name: 'firstName',
			label: 'Fornavn',
			type: 'string',
			required: true
		},
		{
			name: 'lastName',
			label: 'Etternavn',
			type: 'string',
			required: true
		},
		{
			name: 'jobTitle',
			label: 'Stilling',
			type: 'string',
			required: true
		},
		{
			name: 'phone',
			label: 'Mobil',
			type: 'string'
		},
		{
			name: 'email',
			label: 'E-post',
			type: 'string'
		},
		{
			name: 'body',
			label: 'Beskrivelse',
			type: 'area',
			options: {
				widgets: {
					'apostrophe-rich-text': {
						toolbar: ['Bold', 'Italic', 'Link', 'Unlink']
					}
				}
			}
		},
		{
			name: 'thumbnail',
			label: 'Thumbnail',
			type: 'singleton',
			widgetType: 'apostrophe-images',
			options: {
				limit: 1,
				minSize: [540, 697]
			},
			required: true
		}
	],
	arrangeFields: [
		{
			name: 'person',
			label: 'Person',
			fields: ['firstName', 'lastName', 'jobTitle', 'phone', 'email', 'thumbnail', 'body']
		},
		{
			name: 'admin',
			label: 'Administrativt',
			fields: ['slug', 'published', 'tags']
		}
	],
	construct: function (self, options) {
		self.beforeSave = function (req, piece, options, callback) {
			piece.title = piece.firstName + ' ' + piece.lastName;
			return callback();
		};
	}
};