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
	logoSrc: '/PACHECO_BRAND_LOGO.svg',
	profileSrc: '/DECISION.webp',
	profileAlt: 'Retrato de Andrés Pacheco, asesor de comunicación estratégica',
	
	portraitSrc: 'https://images.pexels.com/photos/7518946/pexels-photo-7518946.jpeg?auto=compress&cs=tinysrgb&w=900&h=1125&fit=crop',
	portraitAlt: 'Dos profesionales revisan información durante una reunión de trabajo'
};

export const contact: ContactDetails = {
	whatsappUrl: 'https://wa.me/593991182763?text=Hola%20Pacheco%2C%20quisiera%20contar%20con%20tu%20asesor%C3%ADa.',
	email: 'hablemos@pacheco.ec'
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
