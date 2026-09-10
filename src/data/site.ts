export interface Identity {
	name: string;
	logoSrc: string;
	profileSrc: string;
	profileAlt: string;
	portraitSrc: string;
	portraitAlt: string;
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
	logoSrc: '/PACHECO-LOGO.webp',
	profileSrc: '/DECISION.webp',
	profileAlt: 'Retrato de Andrés Pacheco, asesor de comunicación estratégica',
	
	portraitSrc: 'https://images.pexels.com/photos/7518946/pexels-photo-7518946.jpeg?auto=compress&cs=tinysrgb&w=900&h=1125&fit=crop',
	portraitAlt: 'Dos profesionales revisan información durante una reunión de trabajo'
};

export const contact: ContactDetails = {
	// Datos temporales para visualizar las acciones. Reemplazar antes de publicar.
	whatsappUrl: 'https://wa.me/593000000000?text=Hola%2C%20quisiera%20conversar%20con%20PACHECO.',
	email: 'contacto@pacheco.test'
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
