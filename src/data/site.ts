export interface Identity {
	name: string;
	logoSrc: string;
	portraitSrc: string;
}

export interface ContactDetails {
	whatsappUrl: string;
	email: string;
}

export interface CaseStudy {
	number: string;
	title: string;
	context: string;
}

export const identity: Identity = {
	name: 'PACHECO',
	// Reemplazar con la ruta del logo oficial cuando esté disponible.
	logoSrc: '',
	// Reemplazar con la ruta del retrato o video aprobado.
	portraitSrc: ''
};

export const contact: ContactDetails = {
	// Ejemplo esperado: https://wa.me/593...
	whatsappUrl: '',
	email: ''
};

export const cases: CaseStudy[] = [
	{
		number: '01',
		title: 'Una entrevista que no podía improvisarse.',
		context: ''
	},
	{
		number: '02',
		title: 'Una crisis en la que responder rápido no era responder bien.',
		context: ''
	},
	{
		number: '03',
		title: 'Una historia importante que todavía nadie estaba contando.',
		context: ''
	}
];
