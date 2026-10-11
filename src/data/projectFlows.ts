import type { Language } from "./portfolio";

export type FlowIcon =
	| "book"
	| "file"
	| "brain"
	| "microphone"
	| "waveform"
	| "hand"
	| "text"
	| "heart"
	| "users"
	| "calendar"
	| "bell"
	| "chat"
	| "flask"
	| "chart"
	| "map"
	| "database"
	| "code";
type Copy = Record<Language, string>;
export interface FlowNode {
	icon: FlowIcon;
	label: Copy;
	detail: Copy;
}
export interface ProjectFlow {
	icon: FlowIcon;
	title: Copy;
	inputs: FlowNode[];
	core: FlowNode;
	outputs: FlowNode[];
}

const copy = (es: string, en: string): Copy => ({ es, en });
const node = (
	icon: FlowIcon,
	es: string,
	en: string,
	detailEs: string,
	detailEn: string,
): FlowNode => ({
	icon,
	label: copy(es, en),
	detail: copy(detailEs, detailEn),
});

export const projectFlows: Record<string, ProjectFlow> = {
	thinka: {
		icon: "book",
		title: copy("De un tema a una clase", "From a topic to a lesson"),
		inputs: [
			node(
				"text",
				"Tema",
				"Topic",
				"Lo que quieres aprender",
				"What you want to learn",
			),
			node("file", "PDF", "PDF", "Material de estudio", "Learning material"),
		],
		core: node(
			"brain",
			"Agentes de IA",
			"AI agents",
			"LangGraph + FastAPI",
			"LangGraph + FastAPI",
		),
		outputs: [
			node(
				"book",
				"Aula virtual",
				"Virtual class",
				"Profesor y materiales",
				"Teacher and materials",
			),
			node(
				"text",
				"Evaluación",
				"Assessment",
				"Preguntas y proyecto",
				"Questions and project",
			),
		],
	},
	unative: {
		icon: "microphone",
		title: copy("Habla, practica y mejora", "Speak, practice and improve"),
		inputs: [
			node(
				"microphone",
				"Tu voz",
				"Your voice",
				"Conversación en inglés",
				"English conversation",
			),
		],
		core: node(
			"waveform",
			"Gemini Live",
			"Gemini Live",
			"Coach de IA en tiempo real",
			"Real-time AI coach",
		),
		outputs: [
			node(
				"waveform",
				"Respuesta oral",
				"Spoken reply",
				"Audio en tiempo real",
				"Real-time audio",
			),
			node(
				"chart",
				"Evaluación",
				"Assessment",
				"Puntajes y sugerencias",
				"Scores and suggestions",
			),
		],
	},
	lsb: {
		icon: "hand",
		title: copy("Del movimiento al texto", "From movement to text"),
		inputs: [
			node(
				"hand",
				"Señas",
				"Signs",
				"Secuencias de movimiento",
				"Movement sequences",
			),
		],
		core: node(
			"brain",
			"MediaPipe + PyTorch",
			"MediaPipe + PyTorch",
			"Transformer · 58 clases",
			"Transformer · 58 classes",
		),
		outputs: [
			node("text", "Texto", "Text", "Aplicación PyQt5", "PyQt5 desktop app"),
		],
	},
	syncromedia: {
		icon: "heart",
		title: copy("Una clínica conectada", "A connected clinic"),
		inputs: [
			node(
				"users",
				"Personal clínico",
				"Clinic staff",
				"Gestión de consultas",
				"Consultation management",
			),
			node(
				"users",
				"Pacientes",
				"Patients",
				"Portal de pacientes",
				"Patient portal",
			),
		],
		core: node(
			"heart",
			"SincroMED",
			"SincroMED",
			"FastAPI + PostgreSQL",
			"FastAPI + PostgreSQL",
		),
		outputs: [
			node(
				"calendar",
				"Consultas y citas",
				"Visits and bookings",
				"Gestión multiclínica",
				"Multi-clinic management",
			),
			node(
				"bell",
				"Recordatorios",
				"Reminders",
				"Integración con Telegram",
				"Telegram integration",
			),
		],
	},
	wamigo: {
		icon: "chat",
		title: copy(
			"De una conversación a una venta",
			"From a conversation to a sale",
		),
		inputs: [
			node(
				"chat",
				"WhatsApp",
				"WhatsApp",
				"Conversaciones y contactos",
				"Chats and contacts",
			),
		],
		core: node(
			"brain",
			"Agente + CRM",
			"Agent + CRM",
			"Integraciones por MCP",
			"MCP integrations",
		),
		outputs: [
			node(
				"users",
				"Bandeja y ventas",
				"Inbox and sales",
				"Pipeline en tiempo real",
				"Real-time pipeline",
			),
			node(
				"flask",
				"Laboratorio",
				"Agent lab",
				"Clientes simulados",
				"Simulated customers",
			),
		],
	},
	forex: {
		icon: "chart",
		title: copy("Del mercado al análisis", "From markets to insights"),
		inputs: [
			node(
				"chart",
				"Mercado",
				"Markets",
				"Datos de Alpha Vantage",
				"Alpha Vantage data",
			),
			node(
				"chat",
				"Tu consulta",
				"Your question",
				"Precios e indicadores",
				"Prices and indicators",
			),
		],
		core: node(
			"brain",
			"Analista de IA",
			"AI analyst",
			"Gemini · OpenAI · Claude",
			"Gemini · OpenAI · Claude",
		),
		outputs: [
			node(
				"chart",
				"Gráficos",
				"Charts",
				"Dashboard en Streamlit",
				"Streamlit dashboard",
			),
			node(
				"text",
				"Respuesta",
				"Answer",
				"Indicadores y sentimiento",
				"Indicators and sentiment",
			),
		],
	},
	retail: {
		icon: "map",
		title: copy("De los datos a una comparación", "From data to a comparison"),
		inputs: [
			node(
				"database",
				"Clientes",
				"Customers",
				"Direcciones y gasto",
				"Addresses and spending",
			),
			node(
				"map",
				"Ubicaciones",
				"Locations",
				"Ciudades y códigos postales",
				"Cities and postcodes",
			),
		],
		core: node(
			"chart",
			"Análisis Python",
			"Python analysis",
			"Limpieza y enriquecimiento",
			"Cleaning and enrichment",
		),
		outputs: [
			node(
				"map",
				"Comparación",
				"Comparison",
				"Londres vs. resto de UK",
				"London vs. the rest of UK",
			),
			node(
				"chart",
				"Visualizaciones",
				"Visualizations",
				"Altair + Plotly",
				"Altair + Plotly",
			),
		],
	},
	deployment: {
		icon: "code",
		title: copy("Del notebook a una API", "From notebook to API"),
		inputs: [
			node(
				"database",
				"Modelo y datos",
				"Model and data",
				"Versionado con DVC",
				"Versioned with DVC",
			),
		],
		core: node(
			"code",
			"FastAPI",
			"FastAPI",
			"Modelo disponible como API",
			"Model served as an API",
		),
		outputs: [
			node(
				"chart",
				"Predicción",
				"Prediction",
				"Recaudación cinematográfica",
				"Movie gross prediction",
			),
		],
	},
};
